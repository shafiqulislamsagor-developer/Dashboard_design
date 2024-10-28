import React from "react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bell, MessageSquareMore, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center py-2 px-3 rounded-sm bg-white justify-between">
      <div className="flex text-gray-400 items-center gap-1">
        <Search />
        <Input
          className="border-none text-base pl-1 shadow-none focus-visible:ring-0"
          type="email"
          placeholder="Search here..."
        />
      </div>
      <div className="flex items-center gap-5">
        <div className="relative">
          <Bell />
          <span className="absolute -top-1 -right-1 text-xs w-4 h-4 rounded-full bg-primary_defult text-white flex items-center justify-center">
            1
          </span>
        </div>
        <div>
          <MessageSquareMore />
        </div>
        <Separator className="h-10 w-[1px]" orientation="vertical" />
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <h1 className="text-base font-semibold">Nayamul Roni</h1>
            <p className="text-sm text-gray-400 text-right">super admin</p>
          </div>
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
