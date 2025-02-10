"use client";
import {   Button } from "antd";
import React, { useState } from "react";
import MainSkills from "./Skillset/MainSkills";
import Education from "./Skillset/Education";
  
const SkillSet = () => {
  const [skillSet, setSkillSet] = useState<number>(1);
const btnStyles = ` text-[18px] md:w-[160px] w-full text-[--color-primary]   border-[--color-primary] focus:text-white hover:!text-white hover:!bg-[--color-primary]   focus:!bg-[--color-primary]   text-center   h-[50px]   font-semibold  `
  
  return (
    <div className="">

    
    <div className="gap-8 flex md:flex-row flex-col flex-wrap justify-center w-full">
      <Button
       
      onClick={()=>setSkillSet(1)}
        shape="round"
        className={`md:w-[160px] w-full px-3 rounded-full text-[18px] ${
          skillSet === 1
            ? 'text-white bg-[--color-primary] focus:bg-[--color-primary]'
            : 'text-[--color-primary] focus:!bg-[--color-primary]'
        } cursor-pointer   border-1 border-[--color-primary] text-center   h-[50px]   font-semibold flex items-center justify-center`}  
      >
        Main Skills
      </Button>
      <Button
        onClick={()=>setSkillSet(3)}
        shape="round"
         
        
        className={`md:w-[160px] w-full px-3 rounded-full text-[18px] ${
          skillSet === 3
            ? 'text-white bg-[--color-primary] focus:bg-[--color-primary]'
            : 'text-[--color-primary] focus:!bg-[--color-primary]'
        } cursor-pointer   border-1 border-[--color-primary] text-center   h-[50px]   font-semibold flex items-center justify-center`}
      >
        Education
      </Button>

    </div>
    
    {skillSet===1&&<MainSkills/>}
    {/* {skillSet===2&&<Awards/>} */}
   { skillSet===3&&<Education/>}
    
    </div>
  );
};

export default SkillSet;
