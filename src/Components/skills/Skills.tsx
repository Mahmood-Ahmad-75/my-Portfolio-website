"use client";
import React, { useEffect } from "react";
import {
  css,
  html,
  github,
  javascript,
  react,
  next,
  bootstrap,
  tailwind,
  typescript,
} from "../../assets";
import Image from "next/image";
import "aos/dist/aos.css"; // Add the AOS styles
import AOS from "aos";
const Skills = () => {
  const data: any[] = [
    { name: "React Native", logo: react },
    { name: "React / Next.js", logo: next },
    { name: "TypeScript", logo: typescript },
    { name: "Node.js Backend", logo: javascript },
    { name: "Redux Toolkit", logo: react },
    { name: "Firebase", logo: github },
    { name: "LLM / GPT APIs", logo: javascript },
    { name: "STT / TTS Voice", logo: javascript },
    { name: "DevOps / CI-CD", logo: tailwind },
    { name: "Tailwind CSS", logo: tailwind },
    { name: "Docker", logo: javascript },
    { name: "AWS / Vercel", logo: next },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  const iconStyles = "sm:w-[100px] w-[150px] sm:h-[100px] h-[150px] brightness-0 invert opacity-80 hover:opacity-100 transition-opacity";
  const divStyles = "flex flex-col items-center p-5";
  const paraStyles = "text-gray-300 font-semibold mt-2 text-center";
  return (
    <div 
      data-aos="zoom-in"
      className="mt-8 bg-ghost sm:grid grid-rows-4 lg:grid-rows-2 grid-flow-col justify-around h-auto px-5 w-full"
    >
      {data.map((d, ind) => {
        return (
          <div key={ind} className={divStyles}>
            <Image className={iconStyles} src={d.logo} alt="CSS" />

            <p className={paraStyles}>{d.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
