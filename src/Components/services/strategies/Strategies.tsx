"use client";
 
import React, { useState } from "react";


import "./strategy.css";
import Buttons from "./Buttons";
import Card from "./Card";
import {cards} from './data'
const Strategies: React.FC = () => {
  
  const [active, setActive] = useState<number>(0);
  const handleClick = (arg: number) => {
    const scrollElement: HTMLDivElement | null = document.getElementById(
      "scrollID"
    ) as HTMLDivElement;

    if (scrollElement) {
      const scrollAmount: number = 600;

      if (arg === 0) {
        // Scroll right
        scrollElement.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setActive((prevActive) => prevActive + 1);
      } else {
        // Scroll left
        scrollElement.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setActive((prevActive) => prevActive - 1);
      }
    }
  };

  return (
    <div data-aos="fade-down">
      <Buttons func={handleClick} active={active} />

      <div
        id="scrollID"
        className="w-full  h-auto md:pl-[80px] p-10 mb-5 flex scrollBar overflow-scroll  gap-5"
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
