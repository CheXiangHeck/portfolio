"use client";

import { ModeToggle } from "@/components/Theme Changer/ThemeButton";
import { Sidebar } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const sidebarcontents = () => [
    {
      href: "Home",
      location: "/anotherhome",
    },
    {
      href: "About",
      location: "/About",
    },
    {
      href: "Project",
      location: "/Project",
    },
  ];

  const OpenSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.style.width = "250px";
    }
  };

  const CloseSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.style.width = "0px";
    }
  };

  return (
    <>
      <div onClick={OpenSidebar}>
        <Sidebar className="w-[36px] h-[36px] m-3 cursor-pointer text-[#00FC82] fixed top-0 left-0 z-20"></Sidebar>
      </div>
      <div
        className="h-full w-0 fixed z-30 top-0 left-0 bg-zinc-600 overflow-x-hidden transition-all pt-10 flex flex-col gap-5"
        id="sidebar"
      >
        <div
          className="absolute top-0 right-0 m-2 w-[36px] h-[36px] flex justify-center font-Oswald cursor-pointer"
          onClick={CloseSidebar}
        >
          X
        </div>
        {sidebarcontents().map((sidebarcontent, index) => (
          <a
            href={sidebarcontent.location}
            key = {index}
            className="text-zinc-400 hover:text-white hover:bg-zinc-700 p-2 rounded-xl mx-2 font-Oswald"
          >
            {sidebarcontent.href}
          </a>
        ))}
      </div>
      {children}
      <div className="absolute bottom-0 right-0 dark:bg-transparent bg-zinc-200 m-4 rounded-md w-[50px] h-[50px] flex items-center justify-center">
        <ModeToggle />
      </div>
    </>
  );
};

export default Layout;
