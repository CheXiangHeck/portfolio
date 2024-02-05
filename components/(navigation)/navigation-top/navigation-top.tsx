"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  InfoIcon,
  LucideIcon,
  FileIcon,
  TargetIcon,
  FolderIcon,
  ActivityIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneCallIcon,
  MailIcon,
  User2Icon,
} from "lucide-react";
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import "./navigation.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const components: { icon: LucideIcon; title: string; href: string }[] = [
  {
    icon: User2Icon,
    title: "Resume",
    href: "/about/resume",
  },
  {
    icon: FileIcon,
    title: "Project",
    href: "/about/project",
  },
];

export const NavigationTop = () => (
  <div className=" flex items-center justify-between h-[60px] backdrop-blur-3xl border-b-2 dark:border-zinc-700 border-cyan-300 px-6 gap-3 w-full z-10 dark:text-white text-cyan-300">
    <div className="font-Titan dark:text-white ">
      <Link href="/Home">Anonymous Portfolio</Link>
    </div>
    <TooltipProvider>
      <NavigationMenu className="justify-start">
        <NavigationMenuList className="flex gap-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              <InfoIcon className="h-6 w-6 mx-2" />
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex p-5 w-[400px] h-[300px] z-10">
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className=" h-full justify-center flex flex-col rounded-md w-3/4 hover:bg-indigo-500 border-2 border-indigo-500"
                      href="/about"
                    >
                      <div className="text-lg font-medium dark:text-white flex font-WorkBench ">
                        <InfoIcon className="mx-2" />
                        About Me
                      </div>
                      <p className="text-sm dark:text-slate-300 mx-4 font-Oswald">
                        I am a Software Engineering student from Asia Pacific
                        University of Innovation & Technology. Click here to
                        learn more about me.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li className="flex-shrink">
                  <div className="w-full h-full rounded-md p-2 flex flex-col overflow-y-scroll scrollbar gap-3">
                    {components.map((component) => (
                      <NavigationMenuLink asChild key={component.title}>
                        <a
                          className=" flex bg-slate-500 p-3 rounded-md hover:bg-indigo-500"
                          href={component.href}
                        >
                          <component.icon className="mx-2" />
                          {component.title}
                        </a>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <Separator orientation="vertical" className=" h-8 bg-slate-300" />
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a
                className="flex w-[128.53px] h-[40px] items-center justify-center hover:opacity-50 dark:hover:bg-zinc-800  rounded-md"
                href="https://github.com/CheXiangHeck"
              >
                <GithubIcon className="h-6 w-6 mx-2" />
                GitHub
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator orientation="vertical" className=" h-8 bg-slate-300" />
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a
                className="flex w-[128.53px] h-[40px] items-center justify-center hover:opacity-50 dark:hover:bg-zinc-800 rounded-md"
                href="/status"
              >
                <ActivityIcon className="h-6 w-6 mx-2" />
                Status
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex gap-3 w-full p-3 dark:bg-neutral-500 h-full rounded-md">
            <NavigationMenuLink asChild>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    className="w-24 h-24"
                    href="https://www.linkedin.com/in/wei-xiang-apu/"
                  >
                    <LinkedinIcon />
                  </a>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Tooltip>
                <TooltipTrigger>
                  <PhoneCallIcon />
                </TooltipTrigger>
                <TooltipContent>Contact Number: +6011-16161257</TooltipContent>
              </Tooltip>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Tooltip>
                <TooltipTrigger>
                  <a className="w-24 h-24" href="mailto:chehi716@gmail.com">
                    <MailIcon />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Email</TooltipContent>
              </Tooltip>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </TooltipProvider>
  </div>
);
