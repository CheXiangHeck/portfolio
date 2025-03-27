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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ConfigProvider, Timeline } from "antd";
import {
  DesktopOutlined,
  KeyOutlined,
  PythonOutlined,
  RobotOutlined,
} from "@ant-design/icons";
import { SignIn } from "@clerk/nextjs";

export default function About() {
  return (
    <div
      className=" overflow-y-scroll h-full w-full scrollbarhidden scroll-smooth snap-both snap-mandatory cursor-default whole-page"
      id="Page"
    >
      <div className="bg-black h-full w-full home fixed home-polygon z-50 flex justify-center items-center">
        <h1
          id="start-text"
          className="font-Sixty md:text-9xl text-8xl colorfont"
        >
          About
        </h1>
      </div>
      <div className=" fixed h-[5px] top-0 bg-lime-400 w-full scroll-watcher"></div>
      <div className="h-full snap-center flex flex-col items-center justify-center gap-2 cursor-change about-content">
        <div className="Title flex flex-col items-center justify-center">
          <h1 className=" font-Oswald text-5xl text-[#00FC82] brightness-110 flex items-center justify-center gap-7">
            <StarsIcon className="w-[50px] h-[50px]" /> About Me
          </h1>
          <p className="font-Kanit text-[#83fac0]">Wei Xiang</p>
        </div>
        <div className="h-[400px] w-full flex items-center justify-center gap-8 my-3 changeflexbox">
          <Card className="h-[380px] w-1/4 text-[#00FC82] changeCard">
            <CardHeader>
              <CardTitle className=" font-Kanit">Information</CardTitle>
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
          <Card className="h-[380px] w-1/4 text-[#00FC82] changeCard">
            <CardHeader>
              <CardTitle className=" font-Kanit">Working Experience</CardTitle>
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
          <Card className="h-[380px] w-1/4 text-[#00FC82] changeCard">
            <CardHeader>
              <CardTitle className=" font-Kanit">Skills Learnt</CardTitle>
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
      <div className="h-full snap-center  p-10 flex justify-center bg-[#75ffbc] cursor-default items-center flexing cursor-change about-content">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-Oswald text-3xl flex text-white">
            <StarsIcon className="w-[80px] h-[80px]" />
            My Thoughts For My Future
          </h1>
          <p className="text-zinc-300 font-Kanit">
            Thoughts on what I will do in the future.
          </p>
        </div>
        <div className="w-[80%] md:w-[90%] h-[500px] font-Titan leading-7 text-neutral-500 flex flex-col justify-center items-center content-Future overflow-y-scroll mt-15 scrollbarhidden breh">
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
      <div className="h-full snap-center p-20 flex justify-center items-center flex-col cursor-change about-content">
        <div className="flex gap-5 text-5xl text-[#00FC82]">
          <TargetIcon className="w-[50px] h-[50px]" />
          <h1 className="font-Kanit font--size">Target to Achieve 2024</h1>
        </div>
        <div className="h-full overflow-y-scroll p-10 scrollbarhidden">
          <ConfigProvider
            theme={{
              components: {
                Timeline: {
                  tailColor: "lightgreen",
                  dotBg: "transparent",
                  colorText: "lightgreen",
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
                  dot: <DesktopOutlined className="icon" />,
                  children: "Learn how to use Figma well.",
                },
              ]}
            />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
}
