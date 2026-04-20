"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { myPic2 } from "@/assets";

interface Slide {
  accent: string;
  rest: string;
  quote: string;
}

const slides: Slide[] = [
  {
    accent: "FULL STACK",
    rest: "+ AI ENGINEER",
    quote:
      "Production-grade engineering across React, React Native, Node.js, DevOps, and AI systems — LLM-backed coaching and STS/TTS voice agents, shipped in real products.",
  },
  {
    accent: "REACT NATIVE",
    rest: "MOBILE DEVELOPER",
    quote:
      "Eight production iOS + Android case studies with Redux Toolkit, Firebase, Stripe, and Maps — from fitness coaching to B2B inventory and fintech wallets.",
  },
  {
    accent: "LLM · STS · TTS",
    rest: "AI INTEGRATION",
    quote:
      "Speech-to-speech agents, text-to-speech with same-voice consistency, and prompt-engineered guardrails — AI as an architectural layer, not a demo gimmick.",
  },
  {
    accent: "NODE.JS",
    rest: "BACKEND ENGINEER",
    quote:
      "REST and GraphQL services, Stripe and webhook flows, Firebase Cloud Functions, and CI/CD across Vercel, Render, and Hostinger — backend discipline behind every mobile case study.",
  },
];

const AnimatedIntro = () => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  // Auto-advance with fade-out then swap then fade-in
  useEffect(() => {
    const tick = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
        setPhase("in");
      }, 450); // match transition duration
    }, 5000);
    return () => clearInterval(tick);
  }, []);

  const go = (i: number) => {
    if (i === index) return;
    setPhase("out");
    setTimeout(() => {
      setIndex(i);
      setPhase("in");
    }, 300);
  };

  const handleProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const current = slides[index];

  const slideAnim =
    phase === "in"
      ? "opacity-100 translate-y-0 transition-all duration-500 ease-out"
      : "opacity-0 -translate-y-4 transition-all duration-300 ease-in";

  return (
    <section className="relative w-full min-h-[calc(100vh-120px)] pt-[150px] md:pt-[180px] pb-10 bg-black glint-topo overflow-hidden">
      {/* Giant watermark behind subject */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-end pointer-events-none">
        <span className="glint-watermark text-[18rem] xl:text-[22rem] leading-none whitespace-nowrap pr-4 -mr-16">
          MAHMOOD
        </span>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
        {/* Left: copy */}
        <div className="relative z-10 order-2 lg:order-1">
          <p className="text-[--color-ember] font-bold tracking-[0.3em] text-sm mb-4 uppercase">
            Hey! I am Mahmood Ahmad
          </p>

          {/* Animated headline wrapper — fixed min-height so layout doesn't jump */}
          <div className="min-h-[240px] md:min-h-[300px] xl:min-h-[360px] mb-6">
            <h1
              key={`h-${index}-${phase}`}
              className={`glint-headline text-5xl md:text-7xl xl:text-8xl text-white ${slideAnim}`}
            >
              <span className="glint-accent">{current.accent}</span>
              <br />
              {current.rest}
            </h1>
          </div>

          <div className="min-h-[120px] mb-10">
            <div
              key={`q-${index}-${phase}`}
              className={`border-l-2 border-[--color-ember] pl-5 max-w-xl ${slideAnim}`}
            >
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {current.quote}
              </p>
            </div>
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
              onClick={handleAbout}
              className="border border-white/20 hover:border-[--color-ember] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors"
            >
              About Me
            </button>
          </div>
        </div>

        {/* Right: portrait — Glint-style full image (no circle) */}
        <div className="relative z-10 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px]">
            {/* Soft green ambient glow behind image */}
            <div className="absolute -inset-8 bg-[--color-ember]/15 blur-[80px] rounded-full" />

            {/* Portrait — full shape, no circular frame */}
            <div className="relative h-[480px] md:h-[580px] lg:h-[640px] w-full">
              <Image
                src={myPic2}
                alt="Mahmood Ahmad"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Slide indicator dots */}
            <div className="absolute -right-2 md:right-2 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                    i === index
                      ? "border-[--color-ember] text-[--color-ember] bg-black/60 scale-110"
                      : "border-white/15 text-white/40 hover:border-white/40"
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
