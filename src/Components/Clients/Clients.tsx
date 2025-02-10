"use client";
import React, { useState } from "react";
import ClientsHeadings from "./ClientsHeadings";
import Buttons from "./Buttons";
import Card from "./Card";
import { cards } from "./data";
const Clients = () => {
  const [active, setActive] = useState(0);
  console.log(active);
  const handleClick = (arg: number) => {
    const scrollElement: HTMLDivElement | null = document.getElementById(
      "scrollID1"
    ) as HTMLDivElement;

    if (scrollElement) {
      const scrollAmount: number = 700;

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
    <div className="w-full m-0 h-auto">
      <ClientsHeadings />

      <div>
        <Buttons func={handleClick} active={active} />
      </div>
      <div
        data-aos="fade-down"
        id="scrollID1"
        className="w-full md:pl-[80px] p-10 mb-5 flex justify-center scrollBar overflow-scroll overflow-x gap-5"
      >
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

export default Clients;
