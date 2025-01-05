import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Login } from "@/Components/Login";
import { Signup } from "@/Components/Signup";
import { UrlState } from "@/Context";

export const Auth = () => {
  const [searchparams] = useSearchParams();
  const longLink = searchparams.get("createNew")

  const navigate = useNavigate()

  const {isAuthenticated} = UrlState()


  useEffect(()=>{
    if(isAuthenticated){
      navigate(`/dashboard?${longLink ? `createNew=${longLink}`:""}`)
    }
  },[isAuthenticated])
  
  return (
    <div className="mt-36 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-extrabold">
        {longLink
          ? "Hold up ! Let's login first"
          : "Login / Sigup"}
      </h1>

      <Tabs defaultValue="Login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="Signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          <Login/>
        </TabsContent>
        <TabsContent value="Signup">
          <Signup/>
        </TabsContent>
      </Tabs>
    </div>
  );
};
