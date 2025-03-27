"use client";

import "./anotherhome.css";
import { project } from "@/components/projectInfo/project";
import { useState, useEffect } from "react";
import { checklist } from "@/components/checklist/checklist";
import { useRouter } from "next/navigation";

export default function page() {
  const [page, setPage] = useState("");
  const [projects, setProjects] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (page != "") {
      var homestart = document.getElementsByClassName("home");
      homestart[0].classList.add("home-shown");
      const starttext = document.getElementById("start-text");
      if (starttext) {
        starttext.textContent = page;
      }
    }
    const pagetimeout = setTimeout(() => {
      sessionStorage.setItem("Project", projects);
      router.push(page);
    }, 1000);
  }, [page]);

  return (
    <>
      <div className="bg-black h-full w-full home fixed home-polygon z-50 flex justify-center items-center">
        <h1
          id="start-text"
          className="font-Sixty md:text-9xl text-5xl colorfont"
        >
          Home
        </h1>
      </div>
      <div className="h-full w-full overflow-y-scroll scrollbarhidden snap-both snap-mandatory relative">
        <div className="h-full w-full flex flex-col items-center justify-center snap-center">
          <div className="w-full h-full flex justify-center items-center flex-col cursor-default fadein-animation">
            <h1 className="font-Oswald text-6xl">Hi, I'm Wei Xiang</h1>
            <p className="font-Kanit text-3xl">I am a Software Engineer</p>
          </div>
          <div className="absolute font-Sixty text-xs m-6 cursor-default left-0 bottom-0 flex flex-col justify-center items-center gap-3">
            Scroll
            <div className="w-[25px] h-[20px] arrowdown bg-white"></div>
            <div className="w-[25px] h-[20px] arrowdown"></div>
          </div>
        </div>
        <div className="h-full w-full snap-center relative">
          <div className="background-image absolute w-full h-full -z-10"></div>
          <div className="h-full grid grid-cols-3 content-Home  justify-center">
            <div className="md:col-span-2 col-span-1 px-3 transition-all hover:scale-105">
              <div
                tabIndex={1}
                className="border-2 h-full md:h-full rounded-3xl md:mt-4 mt-3 px-4 dark:bg-black bg-white AboutLink cursor-pointer"
                onClick={() => {
                  setPage("About");
                }}
              >
                <div className="h-full">
                  <div className="h-full flex items-end relative">
                    <div className="flex flex-col">
                      <h1 className="font-Oswald  text-6xl text">About Me</h1>
                      <p className="text-[#3BFFA0] text-xs font-Kanit">
                        Short Description about me
                      </p>
                    </div>
                    <div className="h-full w-3/4 bg-black dark:bg-white blur absolute right-0">
                      <div className="h-[90%] w-[90%] bg-slate-600 dark:bg-slate-400"></div>
                    </div>
                    <div className="h-full w-3/4 flex items-center absolute right-0">
                      <div className="h-[90%] w-[70%] absolute right-0 rounded-3xl p-3 flip-box">
                        <div className="w-full h-full text-white grid grid-cols-3 grid-rows-2 gap-2 flip-box-inner">
                          <div className="w-full h-full bg-slate-900 col-span-2 shadow-xl p-2 rounded-xl">
                            <h1 className="font-Kanit">Achievements</h1>
                            <p className="font-Oswald text-4xl text-center">
                              0
                            </p>
                          </div>
                          <div className="w-full h-full bg-slate-900 row-span-2 shadow-xl flex flex-col justify-center p-2 rounded-xl">
                            <h1 className="font-Kanit text-sm">
                              Internship Experience
                            </h1>
                            <p className="font-Oswald text-4xl text-center">
                              1
                            </p>
                          </div>
                          <div className="w-full h-full bg-slate-900 col-span-2 shadow-xl p-2 rounded-xl">
                            <h1 className="font-Kanit">Projects</h1>
                            <p className="font-Oswald text-4xl text-center">
                              5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-full flex items-center col-span-1 mt-8 md:mt-4 scrollbarhidden m-4">
              <div className="md:h-full h-full w-[93%] dark:bg-black bg-white rounded-3xl scrollbarhidden overflow-y-scroll"></div>
            </div>
            <div className="h-full md:col-span-3 col-span-1 mb-4 px-3 items-center project-slider flex md:snap-none snap-mandatory snap-both">
              <div className="w-[100%] h-[90%] flex items-center gap-5">
                {project().map((proj, index) => (
                  <div
                    tabIndex={1}
                    key={index}
                    className="w-[300px] md:snap-none snap-center min-[300px] md:h-[200px] h-[180px] rounded-3xl hover:scale-105 hover:text-[#3BFFA0] border-[#3BFFA0] border-2 transition-all cursor-pointer scroll-cursor relative overflow-hidden flex-shrink-0 bg-black flip-box"
                    onClick={() => {
                      setProjects(proj.projectname);
                      setPage(`Project`);
                    }}
                  >
                    <div className="flip-box-inner relative h-full text-center">
                      <div className="flip-box-front w-full h-full">
                        <img
                          className="w-full h-full object-cover"
                          src={proj.projectimage}
                          alt={proj.projectname}
                        />
                        <div className="absolute top-0 bottom-4 h-fit rounded-br-md px-2 font-Kanit w-fit text-white bg-[#3BFFA0]">
                          {proj.projectname}
                        </div>
                      </div>
                      <div className="h-full p-3 w-full flip-box-back text-white bg-[#3BFFA0] absolute text-center flex flex-col">
                        <h1 className="font-Titan text-xl mb-3">
                          {proj.projectname}
                        </h1>
                        <p className="font-Oswald">{proj.projectshortdesc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
