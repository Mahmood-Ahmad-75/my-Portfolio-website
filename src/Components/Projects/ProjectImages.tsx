"use client";
import { Button } from "antd";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "@/assets";
import Buttons from "./Buttons";
import Link from "next/link";
const ProjectImages = () => {
  const [projects, setProjects] = useState<string>("All");
  console.log(projects);

  return (
    <div className="mb-[100px]">
      <Buttons func={setProjects} name={projects}/>

      {/* images */}
      <div
        data-aos="fade-up"
        className="w-full flex flex-wrap px-[50px] py-[80px] gap-5 justify-center "
      >
        {(projects === "Redux" || projects === "All") && (
         <Link href="https://stupendous-cat-15da4d.netlify.app/" target="_blank"> 
         <Image
            className="md:w-[400px] flex shrink-0 w-full h-[360px] rounded-xl mb-5"
            src={project1}
            alt="project1"
          />
          </Link>
        )}

        {(projects === "React" || projects === "All") && (
          <Link href="https://burger-shope.vercel.app/" target="_blank">
          
              
              <Image
              style={{width: '100%', height: '100%'}}
              

            className=" md:w-[400px] flex shrink-0 w-full h-[360px] rounded-xl mb-5"
            src={project2}
            alt="project1"
          />
           
          </Link>
        
        )}
        {(projects === "Redux" || projects === "All") && (
          <Link href="https://graceful-cendol-e9e10d.netlify.app/" target="_blank">
          <Image
            className="md:w-[400px] flex shrink-0 w-full h-[360px] rounded-xl mb-5"
            src={project3}
            alt="project1"
          />
          </Link>
        )}
        {(projects === "React" || projects === "All") && (
          <Link href="https://stupendous-cat-15da4d.netlify.app/" target="_blank">
          <Image
            className="md:w-[400px] flex shrink-0 w-full h-[360px] rounded-xl mb-5"
            src={project4}
            alt="project1"
          /></Link>
        )}
        {(projects === "React" || projects === "All") && (
          <Link href="https://stupendous-cat-15da4d.netlify.app/" target="_blank">
          <Image
            className="md:w-[400px] flex shrink-0 w-full h-[360px] rounded-xl mb-5"
            src={project5}
            alt="project1"
          /></Link>
        )}
        {(projects === "Next" || projects === "All") && (
          <Link href="https://figma-home-page-creation.netlify.app/" target="_blank">
            <Image
            className="md:w-[400px] flex shrink-0 w-full h-[360px] rounded-xl mb-5"
            src={project6}
            alt="project1"
          />
          </Link>
          
        )}
      </div>

      {/* Add other buttons as needed */}
    </div>
  );
};

export default ProjectImages;
