"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "antd";
import Hamburger from "./HamburgerIcon";
import MobileMenu from "./MobileMenu";
import { CloseOutlined } from "@ant-design/icons";
import { useOutsideClick } from "./useOutsideClick";
import { react,logo } from "@/assets";
import './navbar.css'
const NavBar = () => {
// styles 
const selectedStyles =
"  text-[--color-primary] underline  underline-offset-8 decoration-2 ";
const styles =
"nav-link  text-[--color-secondary]      ";

  const [ham, setHam] = useState(false);
  const [router, setRouter] = useState<string>("home");
 
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const resumeSection = document.getElementById("resume");
      const aboutSection = document.getElementById("about");
      const servicesSection = document.getElementById("services");
      const contactSection = document.getElementById("contact");
      const ProjectsSection = document.getElementById("projects");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (
        homeSection &&
        scrollPosition < homeSection.offsetTop + homeSection.offsetHeight
      ) {
        setRouter("home");
      } else if (
        aboutSection &&
        scrollPosition < aboutSection.offsetTop + aboutSection.offsetHeight
      ) {
        setRouter("about");
      } else if (
        resumeSection &&
        scrollPosition < resumeSection.offsetTop + resumeSection.offsetHeight
      ) {
        setRouter("resume");
      } else if (
        servicesSection &&
        scrollPosition <
          servicesSection.offsetTop + servicesSection.offsetHeight
      ) {
        setRouter("services");
      } else if (
        ProjectsSection &&
        scrollPosition <
          ProjectsSection.offsetTop + ProjectsSection.offsetHeight
      ) {
        setRouter("projects");
      } else if (
        contactSection &&
        scrollPosition < contactSection.offsetTop + contactSection.offsetHeight
      ) {
        setRouter("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (id: string) => {
     setRouter(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const ref = useOutsideClick(() => {
    setHam(false);
  });

  return (
    <div
      ref={ref}
      className="flex z-50 w-full bg-white fixed shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex-col  px-8  justify-center  "
    >
      <div className="w-full py-2 flex justify-between gap-5 self-center  h-auto">
        <div
          onClick={() => handleLinkClick("home")}
          className="    h-full flex-0 flex  items-center   gap-1"
        >
          <Image width={50} alt="company" src={logo} />
          <h6 className="font-Zen Kaku Gothic Antique  text-[24px] text-[#333] font-black">
            icmoSoft
          </h6>{" "}
        </div>
        <div className="md:flex   justify-between hidden items-center      ">
          <div className="md:flex gap-8  hidden items-center   list-none    ">
            <li
              onClick={() => handleLinkClick("home")}
              className={` ${router === "home" ? selectedStyles : styles} 
             font-sans font-medium xl:text-[18px] text-[15px]`}
            >
              Home
            </li>

            <li
              onClick={() => handleLinkClick("about")}
              className={` ${router === "about" ? selectedStyles : styles} 
             font-sans font-medium xl:text-[18px] text-[15px]`}
            >
              About
            </li>
            <li
              onClick={() => handleLinkClick("resume")}
              className={` ${router === "resume" ? selectedStyles : styles} 
             font-sans font-medium xl:text-[18px] text-[15px]`}
            >
              Resume
            </li>
            <li
              onClick={() => handleLinkClick("services")}
              className={` ${router === "services" ? selectedStyles : styles} 
             font-sans font-medium xl:text-[18px] text-[15px]`}
            >
              Services
            </li>
            <li
              onClick={() => handleLinkClick("projects")}
              className={` ${router === "projects" ? selectedStyles : styles} 
             font-sans font-medium xl:text-[18px] text-[15px]`}
            >
              Projects
            </li>
            <li
              onClick={() => handleLinkClick("contact")}
              className={` ${router === "contact" ? selectedStyles : styles} 
             font-sans font-medium xl:text-[18px] text-[15px]`}
            >
              Contact me
            </li>
          </div>
        </div>
        <Button
          style={{ color: "black" }}
          type="link"
          onClick={() => setHam(!ham)}
          className="md:hidden flex hover:bg-slate-100 text-[--color-secondary] items-center self-center justify-center  text-white"
        >
          {ham ? <CloseOutlined /> : <Hamburger />}
        </Button>
      </div>
      {ham && (
        <div className="md:hidden  w-full mt-3 bg-white rounded-md flex items-center justify-center">
          <MobileMenu clickHandler={handleLinkClick} router={router} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
