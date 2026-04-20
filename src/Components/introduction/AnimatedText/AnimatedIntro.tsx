"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { myPic2 } from "@/assets";

const headlines = [
  { accent: "FULL STACK", rest: "+ AI ENGINEER" },
  { accent: "REACT NATIVE", rest: "MOBILE DEVELOPER" },
  { accent: "LLM · STS · TTS", rest: "AI INTEGRATION" },
  { accent: "NODE.JS", rest: "BACKEND ENGINEER" },
];

const AnimatedIntro = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const handleClick = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const current = headlines[index];

  return (
    <section className="relative w-full min-h-[calc(100vh-120px)] pt-[140px] md:pt-[180px] pb-16 bg-black glint-topo overflow-hidden">
      {/* Giant watermark behind subject */}
      <div className="absolute right-0 top-[35%] -translate-y-1/2 hidden lg:flex items-center justify-end pr-12 select-none">
        <span className="glint-watermark text-[22rem] leading-none">MAHMOOD</span>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: copy */}
        <div className="relative z-10">
          <p className="text-[--color-ember] font-bold tracking-[0.3em] text-sm mb-4 uppercase">
            Hey! I am Mahmood Ahmad
          </p>

          <h1 className="glint-headline text-5xl md:text-7xl xl:text-8xl text-white mb-8 transition-all duration-500">
            <span className="glint-accent">{current.accent}</span>
            <br />
            {current.rest}
          </h1>

          <div className="border-l-2 border-[--color-ember] pl-5 mb-10 max-w-xl">
            <p className="text-white/70 text-lg leading-relaxed">
              Production-grade engineering across <span className="text-white font-semibold">React, React Native, Node.js, DevOps, and AI systems</span>.
              LLM-backed coaching, STS/TTS voice agents, same-voice consistency layers, and prompt-engineered guardrails — shipped, not demoed.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleProjects}
              className="group bg-[--color-ember] hover:bg-[--color-spark] text-black font-black uppercase tracking-widest text-sm px-8 py-4 flex items-center gap-4 transition-colors"
            >
              View My Work
              <span className="w-8 h-8 bg-black text-[--color-ember] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                ›
              </span>
            </button>
            <button
              onClick={handleClick}
              className="border border-white/20 hover:border-[--color-ember] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors"
            >
              About Me
            </button>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-[--color-ember]/20 blur-3xl rounded-full" />
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-4 border-[--color-ember]/40 shadow-[0_0_60px_rgba(34,226,74,0.25)]">
              <Image
                src={myPic2}
                alt="Mahmood Ahmad"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Slide indicator dots (like 01/02 in reference) */}
            <div className="absolute -right-2 md:-right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {headlines.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                    i === index
                      ? "border-[--color-ember] text-[--color-ember] bg-[--color-ember]/10"
                      : "border-white/20 text-white/40 hover:border-white/40"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedIntro;
