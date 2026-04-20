import React from "react";
import Image from "next/image";
import { myPic2 } from "../../assets";
import SkillSet from "./SkillSet";

const Experience = () => {
  return (
    <div className="bg-transparent w-full px-8 pt-[100px] flex md:flex-row flex-col gap-3  justify-around ">
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
      </div>
      <div
        data-aos="zoom-in-left"
        className="md:text-left text-center md:w-1/2 w-full flex flex-col   "
      >
        <p className="text-[--color-primary] font-semibold text-[20px ] underline underline-offset-4 tracking-[2px] leading-normal mb-4">
          ABOUT ME
        </p>

        <h1 className="text-[--color-primary] font-bold leading-[50px] text-[50px] mb-3">
          Full Stack + AI Engineer
        </h1>
        <h3 className="text-[--color-secondary] font-bold leading-[50px] text-[50px] mb-10">
          Web · Mobile · Backend · AI
        </h3>
        <p className="mb-12 w-full sm:text-justify text-center text-light text-[18px] text-[--color-secondary] leading-[25px] text-light">
          Hey there! I&apos;m <b>Mahmood Ahmad.</b> I build production-grade products across <b>React.js, Next.js, React Native, Node.js, and AI systems</b>. My path: React web interfaces → cross-platform mobile (iOS + Android) → Node.js backends and DevOps on Vercel / Render / Hostinger → <b>AI-integrated engineering</b> with LLMs, speech processing (STS/TTS), same-voice consistency layers, AI agents, and prompt engineering. I treat AI behaviour as a first-class architectural concern — structured outputs, guardrails, and measurable reliability, not demo-grade.
        </p>
        <div className="flex md:flex-row flex-col w-full justify-left mt-5  ">
          <SkillSet />
        </div>
      </div>
    </div>
  );
};

export default Experience;
