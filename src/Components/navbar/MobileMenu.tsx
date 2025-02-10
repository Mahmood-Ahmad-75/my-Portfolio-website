"use client";
import { Button } from "antd";
import Link from "next/link";

interface getProp {
  clickHandler: (id: string) => void;
  router: string;
}
const MobileMenu: React.FC<getProp> = ({ router, clickHandler }) => {
  // styles
  const selectedStyles =
    " text-[--color-primary] underline underline-offset-8 decoration-[1px] tracking-[2px] decoration-[#07F] ";
  const styles =
    " text-[--color-secondary] hover:cursor-pointer hover:text-[--color-primary] hover:underline hover:underline-offset-8 hover:decoration-[1px]   hover:tracking-[2px] hover:decoration-[#07F]";

  return (
    <div className="list-none p-5 flex flex-col gap-5 items-start ">
      {" "}
      <li
        onClick={() => clickHandler("home")}
        className={` ${router === "home" ? selectedStyles : styles} 
             font-sans font-medium xl:text-[18px] text-[15px]`}
      >
        Home
      </li>
      <li
        onClick={() => clickHandler("about")}
        className={` ${router === "about" ? selectedStyles : styles} 
             font-sans font-medium xl:text-[18px] text-[15px]`}
      >
        About
      </li>
      <li
        onClick={() => clickHandler("resume")}
        className={` ${router === "resume" ? selectedStyles : styles} 
             font-sans font-medium xl:text-[18px] text-[15px]`}
      >
        Resume
      </li>
      <li
        onClick={() => clickHandler("services")}
        className={` ${router === "services" ? selectedStyles : styles} 
             font-sans font-medium xl:text-[18px] text-[15px]`}
      >
        Services
      </li>
      <li
        onClick={() => clickHandler("projects")}
        className={` ${router === "projects" ? selectedStyles : styles} 
             font-sans font-medium xl:text-[18px] text-[15px]`}
      >
        Projects
      </li>
      <li
        onClick={() => clickHandler("contact")}
        className={` ${router === "contact" ? selectedStyles : styles} 
             font-sans font-medium xl:text-[18px] text-[15px]`}
      >
        Contact me
      </li>
    </div>
  );
};

export default MobileMenu;
