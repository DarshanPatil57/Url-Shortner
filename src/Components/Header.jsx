import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link2Icon, LucideLogOut } from "lucide-react";
import { UrlState } from "@/Context";
import useFetch from "@/hooks/useFetch";
import { logout } from "@/db/apiAuth";

export const Header = () => {
  const navigate = useNavigate();

  // const user = false;

  const { user, fetchUser } = UrlState();

  const {fn:fnlogout} =  useFetch(logout)

  return (
    <nav className="px-4 m-10 flex justify-between items-center">
      <Link to="/">
        <h1 className=" font-bold text-2xl uppercase text-orange-400">
          QuickLink
        </h1>
      </Link>

      <div>
        {!user ? (
          <Button onClick={() => navigate("/auth")}>LogIn</Button>
        ) : (
          <DropdownMenu className="w-10 rounded-full overflow-hidden">
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src={user?.user_metadata?.profile_pic}
                  className=" object-contain"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{user?.user_metadata?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                {" "}
                <Link to="/dashboard" className="flex">
                <Link2Icon className="mr-2 h-4 w-4" /> My Links
                  </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-400  cursor-pointer">
                {" "}
                <LucideLogOut className="mr-2 h-4 w-4" />{" "}
                <span onClick={() => fnlogout().then(()=>{ fetchUser(); navigate("/")})}>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};
