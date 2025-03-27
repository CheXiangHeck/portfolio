"use client";

import { useEffect } from "react";
import "./Start.css";
import { useRouter } from "next/navigation";
import { project } from "@/components/projectInfo/project";

export default function Page() {
  const projects = project();
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const visibleCover = document.getElementById("portfolio");
      const home = document.getElementById("home");
      if (!visibleCover || !home) {
        console.log("Unable to find the id.");
        return;
      }
      visibleCover.classList.add("disappear")
      setTimeout(() => {
        visibleCover.style.display = "none";
        home.classList.add("appear");
        setTimeout(() => {
          home.classList.remove("appear");
          router.push("anotherhome");
        },1000)
      },1000);
    }, 4000);

    return () => clearTimeout(timeout);
  });

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden" id="portfolio">
        <div className="relative font-Titan overflow-hidden text-[50px] textchange">
          PORTFOLIO
        </div>
        <div className="font-Oswald text-xl flex">
          Loading<p className="relative tracking-widest Loading">...</p>
        </div>
        <div className="absolute bottom-0 m-5 font-Sixty">
          Created By CheXiangHeck
        </div>
      </div>
      <div className="bg-black h-full w-full home fixed home-polygon z-50 flex justify-center items-center" id="home">
        <h1
          id="start-text"
          className="font-Sixty md:text-9xl text-5xl text-[#00FC82]"
        >
          Home
        </h1>
      </div>
    </div>
  );
}
