import { LinkedinIcon, MailIcon, PhoneCallIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import "./footer.css";

export function Footer() {
  return (
    <div className="flex flex-col w-full relative items-center">
      <div className="h-1 w-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 via-purple-600 "></div>
      <div className="flex changeflex justify-between">
        <div className="w-1/4 dark:text-white text-zinc-400 text-xl font-Titan mt-7 changewidth">
          Purpose of the website:
          <div className="mt-2 text-sm dark:text-zinc-400 text-slate-400 font-Oswald">
            This website is made for allowing employers to know about me and
            updating employers on my status.
          </div>
        </div>
        <div className="flex justify-center items-center h-[200px] font-Sixty text-4xl animate-pulse">
          My Portfolio
        </div>
        <div className="mt-7 font-Titan text-xl w-1/4 dark:text-white text-zinc-400 changewidth">
          Let&apos;s Connect
          <div className="flex items-center justify-around w-[200px] h-[50px] changewidth dark:bg-transparent bg-zinc-400 rounded-3xl my-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a href="https://www.linkedin.com/in/wei-xiang-apu/">
                    <LinkedinIcon className="text-blue-500 hover:text-sky-500" />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="text-xl">LinkedIn</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <PhoneCallIcon className="text-blue-500 hover:text-sky-500" />
                </TooltipTrigger>
                <TooltipContent className="text-xl">
                  Contact Number: +6011-16161257
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <a href="mailto:chehi716@gmail.com">
                    <MailIcon className="text-blue-500 hover:text-sky-500" />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="text-xl">Gmail</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[98%] border-t-2 border-slate-500 font-Oswald dark:text-white text-slate-400 text-xs changefontsize">
        <p>© 2024 Che Wei Xiang. All rights reserved.</p>
        <p>Built with nextjs, tailwind, and CSS</p>
      </div>
    </div>
  );
}
