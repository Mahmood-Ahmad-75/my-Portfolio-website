import React from 'react'
import { myPic,   } from "../../assets";

import Image from "next/image";
import DownloadResume from './DownloadResume';

const Resume = () => {
 
  return (
    <div
        data-aos="zoom-out-up"
        className="bg-white w-full px-8   flex md:flex-row flex-col-reverse gap-3 pt-[200px] justify-around"
      >
        <div className="md:text-left text-center md:w-1/2 w-full flex flex-col   ">
          <p className="text-[--color-primary] font-semibold text-[25px ] underline underline-offset-4 tracking-[2px] leading-normal mb-4 text-center">
            RESUME
          </p>
          <h3 className="text-[--color-secondary] font-bold leading-[50px] text-[60px] mb-3 ">
          Hi I&apos;m
          </h3>
          <h1 className="text-[--color-primary] font-bold leading-[50px] text-[60px] mb-3">
            Mahmood Ahmad
          </h1>
          <h3 className="text-[--color-secondary] font-bold leading-[50px] text-[60px] mb-5">
            Web Developer
          </h3>
          <p className="  w-full sm:text-justify text-center text-light text-[25px] text-[--color-secondary] leading-[35px] text-light">
            Collaborating with highly skilled individuals, our agency delivers
            top-quality services.
          </p>
          <div className="flex md:flex-row flex-col w-full justify-left mt-12 gap-8">
            {/* <Button
              type="primary"
              shape="round"
              className=" text-[18px] md:w-[160px] w-full    bg-[--color-primary]  font-sans   text-center   h-[50px]   font-semibold  "
            >
              Hire me!
            </Button> */}
            <DownloadResume/>
           
          </div>
        </div>
        <div className="md:w-1/2 shrink w-full mb-5 flex items-center justify-center  ">
          {" "}
          <Image
          
            className="rounded-full flex justify-center items-center shrink-none "
            width={500}
            src={myPic}
            alt="my-Profile-pic"
          />{" "}
        </div>
      </div>
  )
}

export default Resume