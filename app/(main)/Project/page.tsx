"use client";

import { Key, useEffect, useState } from "react";
import "./project.css";
import { project } from "@/components/projectInfo/project";
import { getCommits } from "@/components/github/commits/getCommits";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function projectpage() {
  const projectData = project();

  const [dictionary, setDictionary] = useState<Record<string, any>>({});

  const getGitCommit = async () => {
    const newDictionary: Record<string, any> = {};

    for (const data of projectData) {
      if (data.projectgit && data.projectgit !== "") {
        try {
          const commitsResponse = await getCommits(data.projectgit);

          // Ensure commitsResponse is valid
          newDictionary[data.projectname] = commitsResponse || [];
        } catch (error) {
          console.error(
            `Error fetching commits for ${data.projectgit}:`,
            error
          );
          newDictionary[data.projectname] = [];
        }
      }
    }

    setDictionary(newDictionary);
  };
  useEffect(() => {
    getGitCommit();
  }, []);

  useEffect(() => {
    console.log("Dictionary State Updated:", dictionary);

    if (dictionary["Freshly Dropped"]) {
      console.log(dictionary["Freshly Dropped"]);
    }
  }, [dictionary]);

  return (
    <div className="h-full w-full">
      <div className="bg-black h-full w-full home fixed home-polygon z-50 flex justify-center items-center">
        <h1
          id="start-text"
          className="font-Sixty md:text-9xl text-4xl colorfont"
        >
          Project
        </h1>
      </div>
      <div className="h-full w-full overflow-y-scroll scrollbarhidden">
        <div className="h-full overflow-x-scroll flex flex-col snap-mandatory snap-both">
          {project().map((projectinfo, index) => (
            <div
              className="w-full h-full flex-shrink-0 p-10 snap-center flex gap-5"
              key={index}
            >
              <div className="w-3/4">
                <p className="text-4xl font-extrabold">
                  {projectinfo.projectname}
                </p>
                <img
                  src={projectinfo.projectimage}
                  className=" h-[300px] mb-4"
                />
                <div className="h-[235px] bg-gray-500 rounded-3xl p-3">
                  <p className="font-Titan mb-3">Project Basic Information</p>
                  <div className="flex gap-2">
                    <p className="font-Titan">Project Name:</p>
                    <p className="font-Kanit">{projectinfo.projectname}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="font-Titan">Project Description:</p>
                    <p className="font-Kanit">{projectinfo.projectdesc}</p>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <p className="font-Titan">Project Date:</p>
                    <p className="font-Kanit">{projectinfo.projectdate}</p>
                  </div>
                  <div className="flex gap-3">
                    {projectinfo.projecttags.split(",").map((tags, index) => (
                      <div key={index} className="px-2 bg-[#20C997] rounded-md">
                        {tags}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-1/4 h-full flex justify-center gap-4 flex-col">
                <div className="h-1/3 w-full bg-gray-500 rounded-3xl p-2">
                  <p className=" text-center font-Titan">Project Status</p>
                  {projectinfo.projectstatus ? (
                    projectinfo.projectstatus.split(",").map((status, i) => {
                      let label = "";
                      switch (i) {
                        case 0:
                          label = "Project Completeness:";
                          break;
                        case 1:
                          label = "Project Publish Status:";
                          break;
                        default:
                          label = "Project Link:";
                          break;
                      }
                      return (
                        <div className="flex gap-2" key={`status-${i}`}>
                          <p className="font-Oswald">{label}</p>
                          <p className="font-Oswald">{status.trim()}</p>
                        </div>
                      );
                    })
                  ) : (
                    <p>Project does not have any status.</p>
                  )}
                </div>
                <div className="h-full w-full bg-gray-500 rounded-3xl p-2">
                  <p className="font-Titan text-center">Project Status</p>
                  <div className="h-[400px] w-full overflow-y-scroll">
                    {dictionary[projectinfo.projectname] ? (
                      dictionary[projectinfo.projectname].map(
                        (commit: any, index: Key | null | undefined) => (
                          <Card
                            className="relative overflow-hidden mb-4"
                            key={index}
                          >
                            <div className="absolute top-0 left-0 w-1 h-full dark:bg-white default:bg-black"></div>
                            <CardHeader>
                              <CardTitle>
                                {commit.commit?.message ?? "No commit message"}
                              </CardTitle>
                              <CardDescription className="flex items-center gap-2">
                                By
                                {commit.committer?.avatar_url && (
                                  <Image
                                    src={commit.committer.avatar_url}
                                    alt="UserImage"
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                  />
                                )}
                                {commit.committer?.login ?? "Unknown"}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        )
                      )
                    ) : (
                      <div className="flex justify-center items-center font-Oswald text-5xl w-full h-full">
                        <p className="text-center">No Project's Status</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
