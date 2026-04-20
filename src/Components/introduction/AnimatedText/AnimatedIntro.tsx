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
    accent: "LLM · STT · TTS",
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

  useEffect(() => {
    const tick = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
        setPhase("in");
      }, 400);
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
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const current = slides[index];

  const slideAnim =
    phase === "in"
      ? "opacity-100 translate-y-0 transition-all duration-500 ease-out"
      : "opacity-0 -translate-y-4 transition-all duration-300 ease-in";

  return (
    <section className="relative w-full h-screen pt-[140px] md:pt-[160px] pb-16 bg-black glint-topo overflow-hidden flex items-center">

      {/* Giant watermark */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-end pointer-events-none overflow-hidden">
        <span className="glint-watermark text-[12rem] xl:text-[16rem] leading-none whitespace-nowrap pr-4 tracking-tighter">
          COGNITIVESTACK
        </span>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 w-full h-full grid lg:grid-cols-[3fr_2fr] gap-8 items-stretch">

        {/* LEFT: copy — fixed height, no reflow */}
        <div className="relative z-10 flex flex-col justify-center h-full">

          {/* Slide counter */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[--color-ember] font-black text-sm tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    i === index ? "w-10 bg-[--color-ember]" : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <span className="text-white/30 font-black text-sm tabular-nums">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Label */}
          <p className="text-[--color-ember] font-bold tracking-[0.3em] text-sm mb-6 uppercase">
            Hey! I am Mahmood Ahmad
          </p>

          {/* Animated headline — fixed height so layout never shifts */}
          <div className="h-[160px] mb-6 overflow-hidden">
            <h1
              key={`h-${index}-${phase}`}
              className={`glint-headline text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[1.0] text-white ${slideAnim}`}
            >
              <span className="glint-accent">{current.accent}</span>
              <br />
              {current.rest}
            </h1>
          </div>

          {/* Animated quote — fixed height */}
          <div className="h-[100px] mb-12 overflow-hidden">
            <div
              key={`q-${index}-${phase}`}
              className={`border-l-2 border-[--color-ember] pl-5 ${slideAnim}`}
            >
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {current.quote}
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
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
              onClick={handleContact}
              className="border border-white/20 hover:border-[--color-ember] text-white hover:text-[--color-ember] font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors"
            >
              Let's Talk
            </button>
          </div>

          {/* Stats bar */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "3+", label: "Years Experience" },
              { num: "15+", label: "Projects Shipped" },
              { num: "5+", label: "AI Integrations" },
              { num: "3+", label: "DevOps Pipelines" },
            ].map((s) => (
              <div key={s.label}>
                <p className="glint-headline text-3xl md:text-4xl text-[--color-ember]">{s.num}</p>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: portrait — stretches to full section height */}
        <div className="relative z-10 hidden lg:block h-full">
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-[--color-ember]/10 blur-[80px] rounded-full pointer-events-none" />
          <div
            className="relative w-full h-full"
            style={{ animation: "floatUpDown 3s ease-in-out infinite" }}
          >
            <Image
              src={myPic2}
              alt="Mahmood Ahmad"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AnimatedIntro;
