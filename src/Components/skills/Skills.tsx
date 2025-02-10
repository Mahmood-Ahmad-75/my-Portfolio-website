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
    { name: "React", logo: react },
    { name: "Next.js", logo: next },
    { name: "TypeScript", logo: typescript },
    { name: "JavaScript", logo: javascript },
    { name: "Tailwind CSS", logo: tailwind },
    { name: "CSS3", logo: css },
    { name: "HTML 5", logo: html },
    { name: "Bootstrap", logo: bootstrap },
    { name: "GitHub", logo: react },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  const iconStyles = "sm:w-[100px] w-[150px] sm:h-[100px] h-[150px]";
  const divStyles = "flex flex-col items-center p-5";
  const paraStyles = "text-[#555] font-semibold";
  return (
    <div 
      data-aos="zoom-in"
      className=" mt-[80px] bg-[#F8F8F8] sm:grid grid-rows-5 lg:grid-rows-2 grid-flow-col justify-around h-auto px-5 w-full "
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
