import React from "react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Image from "next/image";
import { myPic2 } from "../../assets";
import SkillSet from "./SkillSet";
import DownloadResume from "../Resume/DownloadResume";

const Experience = () => {
  return (
    <div className="bg-white w-full px-8 pt-[100px] flex md:flex-row flex-col gap-3  justify-around ">
      <div className="md:w-1/2 shrink w-full mb-5 flex flex-col items-center justify-center   ">
        {" "}
        <Image
          data-aos="zoom-in-right"
          className="rounded-full  shrink mb-5 "
          width={500}
          height={500}
          src={myPic2}
          alt="my-Profile-pic"
        />
        <DownloadResume />

      </div>
      <div
        data-aos="zoom-in-left"
        className="md:text-left text-center md:w-1/2 w-full flex flex-col   "
      >
        <p className="text-[--color-primary] font-semibold text-[20px ] underline underline-offset-4 tracking-[2px] leading-normal mb-4">
          ABOUT ME
        </p>

        <h1 className="text-[--color-primary] font-bold leading-[50px] text-[50px] mb-3">
          4+ Years Experience
        </h1>
        <h3 className="text-[--color-secondary] font-bold leading-[50px] text-[50px] mb-10">
          On Web Development
        </h3>
        <p className="mb-12 w-full sm:text-justify text-center text-light text-[18px] text-[--color-secondary] leading-[25px] text-light">
          Hey there! I&apos;m <b>Mahmood Ahmad.</b>
          I specialize in web design and development, and I&apos;m deeply passionate and committed to my craft. With
          <b>4years+</b> of experience as a professional Web Developer.
        </p>
        <div className="flex md:flex-row flex-col w-full justify-left mt-5  ">
          <SkillSet />
        </div>
      </div>
    </div>
  );
};

export default Experience;
