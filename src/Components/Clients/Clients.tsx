"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cards } from "./data";
import SectionHeader from "../common/SectionHeader";

const Clients = () => {
  const [index, setIndex] = useState(0);
  const total = cards.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const active = cards[index];

  return (
    <section className="relative w-full bg-black py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        <SectionHeader
          label="Testimonials"
          titleLead="Happy Clients To"
          titleAccent="Says"
          description="Collaborators who have shipped real products with me — from mobile case studies to full-stack AI-integrated platforms. Their words, not mine."
          watermark="TESTIMONIALS"
          onPrev={prev}
          onNext={next}
        />

        {/* Quote body */}
        <div className="relative">
          {/* Big green opening quote */}
          <div className="text-[--color-ember] text-[8rem] md:text-[10rem] leading-none font-black select-none mb-4">
            &ldquo;
          </div>

          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[--color-ember]/40 shadow-[0_0_30px_rgba(34,205,112,0.2)] relative">
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
