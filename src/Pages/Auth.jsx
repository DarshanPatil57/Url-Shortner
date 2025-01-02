import React from "react";
import { useSearchParams } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Login } from "@/Components/Login";
import { Signup } from "@/Components/Signup";

export const Auth = () => {
  const [searchparams] = useSearchParams();
  return (
    <div className="mt-36 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-extrabold">
        {searchparams.get("createNew")
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
