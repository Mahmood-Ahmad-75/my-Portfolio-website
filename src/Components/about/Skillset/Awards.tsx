import React from "react";
import { university, degree } from "../../../assets";
import Image from "next/image";
import Degree from "./Degree";
const Awards = () => {
  return (
    <div data-aos='zoom-in-down' className="w-full p-4 flex flex-col">
      <h1 className="text-center text-[30px] mt-4 mb-4 text-[--color-primary] font-semibold font-mono underline underline-offset-4 leading-3">
        Awards
      </h1>
      <div className="flex gap-4 items-center mb-3">
        <Image
          className="w-[80px] h-[80px]"
          src={university}
          alt="university-logo"
        />
        <a
          href="https://www.superior.edu.pk/"
          target="_blank"
          className="text-[20px]  text-[--color-secondary] hover:text-[--color-primary] font-normal"
        >
          Superior University
        </a>
      </div>
      <div className="flex gap-4 items-center">
        <Image
          className="w-[80px] h-[80px]"
          src={degree}
          alt="university-logo"
        />
      <p className="text-[20px] text-[--color-primary] font-light">
  &quot;Bachelor of Science in Computer Science&quot;
</p>
      </div>
       <div  className="self-center">  <Degree/></div>
     
    </div>
  )
}

export default Awards