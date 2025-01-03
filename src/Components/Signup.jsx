import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import * as Yup from "yup";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Error } from "./Error";
import useFetch from "@/hooks/useFetch";
import {  signup } from "@/db/apiAuth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UrlState } from "@/Context";

export const Signup = () => {
  const [formData, setFormData] = useState({name:"", email: "", password: "" ,profile_pic:null});
  const [error, setError] = useState([]);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");

  const handleInputChage = (e) => {
    const { name, value ,file } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: file? file[0] :value,
    }));
  };

  //

  const { data, errors, fn: fnsignup } = useFetch(signup);
  const { fetchUser } = UrlState();

  useEffect(() => {
    // console.log(data);

    if ((error === null) & data) {
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
      fetchUser();
    }
  }, [data, error]);

  const handleSignup = async () => {
    setError([]);
    try {
      const schema = Yup.object().shape({
        name:Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid Email")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be atleast 6 characters")
          .required("Password is required"),

          profile_pic:Yup.mixed().required("Profile picture is required")
      });

      await schema.validate(formData, { abortEarly: false });
      // console.log("Form Data before API call:", formData);
      // api call
      await fnsignup(formData);
    } catch (e) {
      const newErrors = {};
      e?.inner?.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setError(newErrors);
    }
  };
  return (
    <div className=" text-center">
      <Card>
        <CardHeader>
          {/* <CardTitle>Login</CardTitle> */}
          <CardDescription>
            Create a New Account if you haven&rsquo;t yet
          </CardDescription>
          {errors && <Error message={"Error"} />}
        </CardHeader>
        <CardContent className=" space-y-4">
          <div className=" space-y-1">
            <Input
              type="text"
              name="name"
              placeholder="Enter your Name"
              onChange={handleInputChage}
            />
            {error.name && <Error message={error.name} />}
          </div>

          <div className=" space-y-1">
            <Input
              type="email"
              name="email"
              placeholder="Enter your Email"
              onChange={handleInputChage}
            />
            {error.email && <Error message={error.email} />}
          </div>
          <div className=" space-y-1">
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleInputChage}
            />
            {error.password && <Error message={error.password} />}
          </div>

          <div className=" space-y-1">
            <Input
              type="file"
              name="profile_pic"
              accept="image/*"
              onChange={handleInputChage}
            />
            {error.profile_pic && <Error message={error.profile_pic} />}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center ">
          <Button onClick={handleSignup}>Create Account</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
