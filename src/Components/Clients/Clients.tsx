"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cards } from "./data";

const Clients = () => {
  const [index, setIndex] = useState(0);
  const total = cards.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const active = cards[index];

  return (
    <section className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        {/* Header row */}
        <div className="relative grid lg:grid-cols-2 gap-10 items-start mb-16">
          {/* Giant watermark behind heading */}
          <span
            aria-hidden
            className="glint-watermark absolute -top-6 left-0 text-[8rem] md:text-[10rem] lg:text-[12rem] leading-none whitespace-nowrap"
          >
            TESTIMONIALS
          </span>

          {/* Left: label + big headline */}
          <div className="relative">
            <p className="text-[--color-ember] font-bold tracking-[0.3em] text-sm mb-6 uppercase">
              Testimonials
            </p>
            <h2 className="glint-headline text-5xl md:text-6xl xl:text-7xl text-white">
              Happy Clients
              <br />
              To <span className="glint-accent">Says</span>
            </h2>
          </div>

          {/* Right: intro quote + arrows */}
          <div className="flex items-start gap-6 lg:pt-6">
            <div className="border-l-2 border-[--color-ember] pl-5 flex-1">
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Collaborators who have shipped real products with me — from mobile case studies to full-stack AI-integrated platforms. Their words, not mine.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-12 h-12 border border-[--color-ember] text-[--color-ember] hover:bg-[--color-ember] hover:text-black flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-12 h-12 border border-[--color-ember] text-[--color-ember] hover:bg-[--color-ember] hover:text-black flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M4 11v2h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Quote body */}
        <div className="relative">
          {/* Big green opening quote */}
          <div className="text-[--color-ember] text-[8rem] md:text-[10rem] leading-none font-black select-none mb-4">
            &ldquo;
          </div>

          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[--color-ember]/40 shadow-[0_0_30px_rgba(34,226,74,0.2)] relative">
                <Image
                  src={active.img}
                  alt={active.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Quote text */}
            <div>
              <p className="glint-headline text-2xl md:text-3xl xl:text-4xl text-white leading-tight mb-8">
                {active.desc.trim()}
              </p>
              <p className="text-white/60 text-sm md:text-base font-medium tracking-wider">
                <span className="text-white font-bold">{active.name}</span>
                {active.profession ? `, ${active.profession}` : ""}
              </p>
            </div>
          </div>

          {/* Pagination dots */}
          {total > 1 && (
            <div className="flex gap-2 mt-12 ml-0 md:ml-48">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-10 bg-[--color-ember]" : "w-4 bg-white/20"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
