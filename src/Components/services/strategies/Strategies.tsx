"use client";

import React, { useState } from "react";
import "./strategy.css";
import Card from "./Card";
import { cards } from "./data";

const Strategies: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  const handlePrev = () => {
    const scrollElement = document.getElementById("scrollID") as HTMLDivElement;
    if (scrollElement) {
      scrollElement.scrollBy({ left: -600, behavior: "smooth" });
      setActive((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    const scrollElement = document.getElementById("scrollID") as HTMLDivElement;
    if (scrollElement) {
      scrollElement.scrollBy({ left: 600, behavior: "smooth" });
      setActive((prev) => prev + 1);
    }
  };

  return (
    <div data-aos="fade-down">
      {/* Arrow buttons — same style as SectionHeader */}
      <div className="w-full flex gap-3 md:justify-end justify-center mt-2 mb-6 md:px-[80px] px-10">
        <button
          onClick={handlePrev}
          disabled={active === 0}
          aria-label="Previous"
          className="w-12 h-12 border border-[--color-ember] text-[--color-ember] hover:bg-[--color-ember] hover:text-black disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={active === cards.length - 1}
          aria-label="Next"
          className="w-12 h-12 border border-[--color-ember] text-[--color-ember] hover:bg-[--color-ember] hover:text-black disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M4 11v2h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4z" />
          </svg>
        </button>
      </div>

      <div
        id="scrollID"
        className="w-full h-auto md:pl-[80px] p-10 mb-5 flex scrollBar overflow-scroll gap-5"
      >
        {/* Cards map */}
        {cards.map((card, ind) => {
 
          return (
            <Card
            key={ind}
            func={setActive}
            active={active}
            ind={ind}
            img={card.img}
            heading={card.heading}
            desc={card.desc}
            name={card.name}
            profession={card.profession}
            ratingValue={card.ratingValue}
          />
           
          );
        })}
      </div>
    </div>
  );
};

export default Strategies;
