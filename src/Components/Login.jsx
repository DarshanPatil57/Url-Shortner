import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import * as Yup from 'yup'
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
import { login } from "@/db/apiAuth";

export const Login = () => {
    const [formData,setFormData] = useState({email:"",password:""})
    const [error,setError] = useState([])

    const handleInputChage = (e)=>{
       const {name, value} = e.target
       setFormData((prevState)=>({
        ...prevState,
        [name]:value,
       }))
    }

    // 

   const {data,errors,fn:fnlogin} = useFetch(login)

   useEffect(()=>{
    console.log(data);
    
    // if(error === null & data){

    // }
   },[data,error])

    const handleLogin = async () =>{
        setError([])
        try {
            const schema = Yup.object().shape({
                email:Yup.string().email("Invalid Email").required("Email is required"),
                password:Yup.string().min(6,"Password must be atleast 6 characters").required("Password is required")
            })

            await schema.validate(formData,{abortEarly:false})
            console.log("Form Data before API call:", formData);
            // api call
            await fnlogin(formData)
        } catch (e) {
            const newErrors = {};
            e?.inner?.forEach((err)=> {
                newErrors[err.path] = err.message
            })
            setError(newErrors)
        }
    }
  return (
    <div className=" text-center">
      <Card>
        <CardHeader >
          {/* <CardTitle>Login</CardTitle> */}
          <CardDescription>Login to your accout if you have one .</CardDescription>
          {errors && <Error message={"Error"}/>}
        </CardHeader>
        <CardContent className=" space-y-4">
          <div className=" space-y-1">
            <Input type="email" name="email" placeholder="Enter your Email" onChange={handleInputChage}/>
            { error.email && <Error message={error.email}/>}
          </div>
          <div className=" space-y-1">
            <Input type="password" name="password" placeholder="Enter your password" onChange={handleInputChage}/>
            { error.password &&  <Error message={error.password}/>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center ">
          <Button onClick={handleLogin}>LogIn</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
