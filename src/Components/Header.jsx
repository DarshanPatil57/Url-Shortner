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

export const Header = () => {
  const navigate = useNavigate();

  const user = false;

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
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Name</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer"> <Link2Icon className="mr-2 h-4 w-4"/> My Links</DropdownMenuItem>
              <DropdownMenuItem className="text-red-400  cursor-pointer"> <LucideLogOut className="mr-2 h-4 w-4"/> <span>Logout</span></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};
