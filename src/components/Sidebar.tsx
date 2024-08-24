/* this is the sidebar of main page */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import SidebarButton from "./SidebarButton";
import { Separator } from "@/components/ui/separator";
import { Trash2 } from "lucide-react";
import { ExitIcon } from "@radix-ui/react-icons";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import ThemeToggle from "./ThemeToggle";

import Link from "next/link";
const Sidebar = () => {
  const handleclickUpdate = () => {
    alert("im clicked");
  };
  const handleclickLogout = () => {
    alert("im clicked");
  };
  return (
    <div className="sidebar main flex items-center justify-between min-h-screen flex-col bg-custom-dark-gray">
      <div className=" w-full">
        <div className="new-chat-button my-3 w-full">
          <Link href="/">
            <Button
              variant="outline"
              className="bg-custom-dark-gray text-white w-full justify-start "
            >
              <p className="p-3">+ New Chat</p>
            </Button>
          </Link>
        </div>
        {/* chat history can be loaded from db here */}
        <button className="w-full flex text-base font-medium justify-between chat-history text-white px-2 py-5 mb-2 bg-custom-gray">
          <p>Chat Name</p>
          <Trash2 size={22} strokeWidth={0.75} />
        </button>
        <button className="w-full flex text-base font-medium justify-between chat-history text-white px-2 py-5 mb-2 bg-custom-gray">
          <p>Chat Name</p>
          <Trash2 size={22} strokeWidth={0.75} />
        </button>
      </div>
      <div className="options flex flex-col items-start justify-end text-white mb-3 ">
        <Separator className="mb-4" />
        <ThemeToggle />
        {/* updates button */}
        <SidebarButton
          name="Updates & FAQ"
          children={<ExternalLinkIcon />}
          handleClick={() => handleclickUpdate}
        />
        {/* logout button */}
        <SidebarButton
          name="Logout"
          children={<ExitIcon />}
          handleClick={() => handleclickLogout}
        />
      </div>
    </div>
  );
};

export default Sidebar;
