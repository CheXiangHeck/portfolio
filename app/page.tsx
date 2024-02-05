"use client";

import { useEffect } from "react";
import "./Start.css";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(`Home`);
    }, 5000);

    return () => clearTimeout(timeout);
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="relative font-Titan overflow-hidden text-[50px] textchange">
        PORTFOLIO
      </div>
      <div className="font-Oswald text-xl flex">
        Loading<p className="relative tracking-widest Loading">...</p>
      </div>
      <div className="absolute bottom-0 m-5 font-WorkBench">
        Created By CheXiangHeck
      </div>
    </div>
  );
}
