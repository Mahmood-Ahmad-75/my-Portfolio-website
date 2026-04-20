"use client";
import React from "react";
import SectionHeader from "../common/SectionHeader";

const ExploringMySkills = () => {
  return (
    <section className="relative w-full bg-black py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        <SectionHeader
          label="Services"
          titleLead="Full-Stack Skills,"
          titleAccent="One Engineer"
          description="React Native mobile apps, React.js / Next.js web, Node.js backend, DevOps pipelines, and LLM / STT / TTS AI integrations — production-grade across the entire stack."
          watermark="SERVICES"
        />
      </div>
    </section>
  );
};

export default ExploringMySkills;
