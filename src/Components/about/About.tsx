"use client";
import React from "react";
import SkillSet from "./SkillSet";
import SectionHeader from "../common/SectionHeader";

const About = () => {
  return (
    <section className="relative w-full bg-black py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        <SectionHeader
          label="About Me"
          titleLead="Full Stack + AI"
          titleAccent="Engineer"
          description="I build production-grade products across React.js, Next.js, React Native, Node.js, and AI systems. My path: React web interfaces → cross-platform mobile (iOS + Android) → Node.js backends and DevOps on Vercel / Render / Hostinger → AI-integrated engineering with LLMs, STS/TTS, same-voice consistency, AI agents, and prompt engineering."
          watermark="ABOUT ME"
        />

        <div className="mt-8">
          <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed mb-10">
            Hey there! I&apos;m <b className="text-white">Mahmood Ahmad</b> — the engineer behind <b className="text-[--color-ember]">CognitiveStack</b>. I treat AI behaviour as a first-class architectural concern: structured outputs, guardrails, and measurable reliability — shipped in production, not demo-grade.
          </p>
          <SkillSet />
        </div>
      </div>
    </section>
  );
};

export default About;
