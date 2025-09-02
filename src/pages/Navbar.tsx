"use client";

import { CalendarIcon, HomeIcon, MailIcon, Sun, Moon,PocketKnifeIcon,PhoneIcon, MessageCircle, MessageCircleIcon } from "lucide-react";
// import Link from "next/link";
import { Link } from "react-router-dom";
import React, { useState } from "react";

// import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

import { motion } from "framer-motion";
import { PersonIcon,BackpackIcon, CodeSandboxLogoIcon } from "@radix-ui/react-icons";


export type IconProps = React.HTMLAttributes<SVGElement>;


const DATA = {
  navbar: [
    { href: "#home", icon: HomeIcon, label: "Home" },
    { href: "#about", icon: PersonIcon, label: "About Me" },
  ],
  contact: {
    social: {
      Project: {
        name: "Project's",
        url: "#project",
        icon: BackpackIcon,
      },
      Education: {
        name: "Education",
        url: "#education",
        icon: CodeSandboxLogoIcon,
      },
      Skills: {
        name: "Tech Stack",
        url: "#skill",
        icon: PocketKnifeIcon,
      },
      Contact: {
        name: "Contact Me",
        url: "#contact",
        icon: MessageCircleIcon,
      },
    },
  },
};

interface NavbarProp{
  locoScroll:any
}
export function Navbar({locoScroll}:NavbarProp) {

  const [isDarkTheme,setIsdarkTheme] = useState(false);

  return (
    <header className="z-5000 flex flex-col items-center justify-center fixed bottom-5 left-[50%] translate-x-[-50%] rounded-full">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration:1,delay:1.5, ease: "easeOut" }}
        className="bg-white dark:bg-black rounded-xl"
      >
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={()=>{locoScroll.scrollTo(item.href)}}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <item.icon className="size-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={()=>{locoScroll.scrollTo(social.url)}}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <social.icon className="size-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild className="cursor-pointer" onClick={()=>{setIsdarkTheme(prev=>!prev);document.body.classList.toggle("dark")}}>
                {/* <Toggle className="rounded-full text-black" /> */}
                <Toggle aria-label="Toggle italic">
                  {isDarkTheme ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" /> }
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </motion.div>
    </header>
  );
}
