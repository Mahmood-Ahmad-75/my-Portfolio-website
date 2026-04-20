"use client";
import React from "react";
import SectionHeader from "../common/SectionHeader";

const ExploringMySkills = () => {
  return (
    <section className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        <SectionHeader
          label="Services"
          titleLead="See Which Services"
          titleAccent="We Offer"
          description="Full Stack + AI engagements across web, mobile, and backend. I build production-grade iOS/Android apps, Node.js services, and LLM / STS / TTS integrations — turning ideas into measurable shipped products."
          watermark="SERVICES"
        />
      </div>
    </section>
  );
};

export default ExploringMySkills;
