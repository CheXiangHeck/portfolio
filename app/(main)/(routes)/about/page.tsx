"use client";

import { BookOpenTextIcon, StarsIcon, TargetIcon } from "lucide-react";
import "./About.css";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ConfigProvider, Timeline } from "antd";
import TimelineItem from "antd/es/timeline/TimelineItem";
import { DesktopOutlined, KeyOutlined, PythonOutlined, RobotOutlined } from "@ant-design/icons";

export default function About() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    // Add an event listener for the resize event
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className=" overflow-y-scroll page scroll-smooth snap-both snap-mandatory"
      id="Page"
      style={{ height: `${windowHeight}px` }}
    >
      <div className="h-full snap-center flex flex-col items-center justify-center gap-2">
        <div className="Title flex flex-col items-center justify-center">
          <h1 className=" font-WorkBench text-5xl text-cyan-500 flex items-center justify-center gap-7">
            <StarsIcon className="w-[50px] h-[50px]" /> About Me
          </h1>
          <p className="font-Oswald text-cyan-200">CHEXIANGHECK</p>
        </div>
        <div className="h-[400px] w-full flex items-center justify-center gap-8 my-3 changeflexbox">
          <Card className="h-[380px] w-1/4 text-cyan-300 changeCard">
            <CardHeader>
              <CardTitle className=" font-WorkBench">INFORMATION</CardTitle>
              <CardDescription className="font-Oswald">
                About Me
              </CardDescription>
              <Separator className=" w-[98%] bg-white" />
              <CardContent>
                <h1 className="font-Titan text-lg">Personal Information</h1>
                <ul className=" list-disc font-Oswald">
                  <li>Full Name: Che Wei Xiang</li>
                  <li>Nationality: Malaysian</li>
                  <li>
                    Education Level: Bachelor of Science of Software Engineering
                  </li>
                  <li>Hobby: Learn Coding, Play Games, and </li>
                  <li>Personality: Hardworking, Determined, and Integrity</li>
                </ul>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="h-[380px] w-1/4 text-cyan-300 changeCard">
            <CardHeader>
              <CardTitle className=" font-WorkBench">
                Working Experience
              </CardTitle>
              <CardDescription className="font-Oswald">
                My working experience
              </CardDescription>
              <Separator className=" w-[98%] bg-white" />
              <CardContent>
                <h1 className="font-Titan text-lg">Internship</h1>
                <ul className=" list-disc font-Oswald">
                  <li>Internship: Spark Internship Programme</li>
                  <li>
                    Working Place: Asia Pacific University of Innovation &
                    Technology
                  </li>
                  <li>Position: Graphic Designer</li>
                  <li>Duration: 4 months</li>
                  <li>
                    Learned Skills: AI Learning, Excel, and some Coding
                    Languages
                  </li>
                </ul>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="h-[380px] w-1/4 text-cyan-300 changeCard">
            <CardHeader>
              <CardTitle className=" font-WorkBench">Skills Learnt</CardTitle>
              <CardDescription className="font-Oswald">
                Skills Leant for Past Two Years
              </CardDescription>
              <Separator className=" w-[98%] bg-white" />
              <CardContent>
                <h1 className="font-Titan text-lg">Soft & Hard Skills</h1>
                <ul className=" list-disc font-Oswald">
                  <li>Programming Languages: Java, C#, C++, Python, and PHP</li>
                  <li>
                    Website Languages: HTML, CSS, Javascript, React, Nextjs
                  </li>
                  <li>
                    Soft Skills: Determination, Adaptability, and Problem
                    Solving
                  </li>
                </ul>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="h-full snap-center bg-cyan-200 p-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-cyan-300 font-WorkBench text-5xl">
            <StarsIcon />
            My Thoughts For My Future
          </h1>
          <p className="text-zinc-300 font-Oswald">
            Thoughts on what I will do in the future.
          </p>
        </div>
        <div className="w-[80%] md:w-[90%] h-[500px] font-Titan leading-7 text-neutral-500 content-Future overflow-y-scroll mt-15 page breh">
          <p className="m-5">
            I am currently getting myself prepared for the opportunity which is
            upcoming. I have learnt my lessons when I was finding for internship
            which is my skills is unable to stand a foot with the current skills
            I had in the market. I have to enhance myself since my internship
            job description have nothing to do with coding but I have plenty of
            time for me to self learning.
          </p>
          <p className="m-5">
            I am going to take advantage of the time to enhance myself on some
            popular coding languages then proceed to learn about AI Learning,
            then focus on Data Analysing since they will be helpful for me.
            Other than that, I found out leading a team is very hard for me. I
            will have to spend some time to plan out how to create a great rules
            and how to get the teamates under control in order to enhance myself
            on team leading.
          </p>
        </div>
      </div>
      <div className="h-full snap-center p-20">
        <div className="flex gap-5 text-5xl">
          <TargetIcon className="w-[50px] h-[50px]" />
          <h1 className="font-WorkBench">Target to Achieve 2024</h1>
        </div>
        <div className="h-full overflow-y-scroll p-10 page">
          <ConfigProvider
            theme={{
              components: {
                Timeline: {
                  tailColor: "white",
                  dotBg: "transparent",
                },
              },
            }}
          >
            <Timeline
              className="dark:text-white"
              items={[
                {
                  dot: <PythonOutlined className="icon" />,
                  children: "Learn Python",
                },
                {
                  dot: <BookOpenTextIcon className="icon" />,
                  children: "Learn how to plan for a project professionally.",
                },
                {
                  dot: <RobotOutlined className="icon" />,
                  children: "Learn AI",
                },
                {
                  dot: <RobotOutlined className="icon" />,
                  children: "Create an AI ChatBot",
                },
                {
                  children: "Do data analysing.",
                },
                {
                  dot: <KeyOutlined className="icon" />,
                  children: "Learn better on connecting API key",
                },
                {
                  dot: <DesktopOutlined className="icon"/>,
                  children: "Learn how to use Figma well."
                },
              ]}
            />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
}
