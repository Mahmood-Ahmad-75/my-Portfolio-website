"use client";
import React from "react";
import { experienceEntries, skillDials, SkillDial } from "./data";
import SectionHeader from "../common/SectionHeader";

const SkillCircle: React.FC<{ dial: SkillDial }> = ({ dial }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (dial.value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[180px] h-[180px]">
        <svg width="180" height="180" className="-rotate-90">
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="var(--color-ember)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-baseline">
            <span className="glint-headline text-5xl text-white">{dial.value}</span>
            <span className="text-[--color-ember] text-xl font-bold ml-1">%</span>
          </div>
        </div>
      </div>
      <p className="glint-headline text-lg text-white mt-6 tracking-wider">
        {dial.label}
      </p>
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-black py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        <SectionHeader
          label="My Experience"
          titleLead="Experience And"
          titleAccent="Skill"
          description="Four years of production engineering across web, mobile, backend, and AI. Each role built on the last — React fundamentals to cross-platform mobile, then Node.js services and DevOps, then LLM / STS / TTS integration in shipped products."
          watermark="MY CAREER"
        />

        {/* Experience cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {experienceEntries.map((entry, idx) => (
            <div
              key={idx}
              className="bg-[#0D1815] border border-[#1C2924] p-8 hover:border-[--color-ember]/60 transition-colors group"
            >
              <p className="text-white/70 text-sm font-bold tracking-wider uppercase mb-4">
                {entry.period}{" "}
                <span className="text-white/40">({entry.role})</span>
              </p>
              <h3 className="glint-headline text-2xl text-[--color-ember] mb-6 leading-tight group-hover:text-[--color-spark] transition-colors">
                {entry.company}.
              </h3>
              <p className="text-white/80 leading-relaxed text-[15px]">
                {entry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skill dials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#1C2924]">
          {skillDials.map((d, idx) => (
            <SkillCircle key={idx} dial={d} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
