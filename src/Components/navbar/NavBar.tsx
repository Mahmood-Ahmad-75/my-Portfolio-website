"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "antd";
import Hamburger from "./HamburgerIcon";
import MobileMenu from "./MobileMenu";
import { CloseOutlined } from "@ant-design/icons";
import { useOutsideClick } from "./useOutsideClick";
import { logo } from "@/assets";
import TopBar from "./TopBar";

const NavBar = () => {
  const [ham, setHam] = useState(false);
  const [router, setRouter] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const servicesSection = document.getElementById("services");
      const contactSection = document.getElementById("contact");
      const ProjectsSection = document.getElementById("projects");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (homeSection && scrollPosition < homeSection.offsetTop + homeSection.offsetHeight) {
        setRouter("home");
      } else if (aboutSection && scrollPosition < aboutSection.offsetTop + aboutSection.offsetHeight) {
        setRouter("about");
      } else if (servicesSection && scrollPosition < servicesSection.offsetTop + servicesSection.offsetHeight) {
        setRouter("services");
      } else if (ProjectsSection && scrollPosition < ProjectsSection.offsetTop + ProjectsSection.offsetHeight) {
        setRouter("projects");
      } else if (contactSection && scrollPosition < contactSection.offsetTop + contactSection.offsetHeight) {
        setRouter("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setRouter(id);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const ref = useOutsideClick(() => setHam(false));

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 w-full z-50 flex flex-col">
      {/* Announcement bar (desktop only) */}
      <TopBar />

      {/* Main nav */}
      <div className="w-full bg-black border-b border-[#1C2924] px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Image width={38} height={38} alt="logo" src={logo} />
            <span className="text-white text-xl font-black tracking-widest uppercase">
              Mahmood<span className="text-[--color-ember]">.</span>
            </span>
          </div>

          {/* Center nav (desktop) */}
          <ul className="hidden md:flex items-center gap-10 list-none m-0">
            {navItems.map((item) => {
              const active = router === item.id;
              return (
                <li
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="relative cursor-pointer py-2"
                >
                  <span
                    className={`uppercase tracking-widest text-sm font-bold transition-colors ${
                      active ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  {active && (
                    <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-[--color-ember]" />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/80 hover:text-[--color-ember] cursor-pointer transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <span className="uppercase tracking-wider text-sm">Search</span>
            </div>
            <button
              aria-label="menu"
              className="w-10 h-10 grid grid-cols-3 gap-[3px] place-content-center text-[--color-ember] hover:text-white transition-colors"
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="w-1 h-1 bg-current rounded-full" />
              ))}
            </button>
          </div>

          {/* Mobile hamburger */}
          <Button
            type="link"
            onClick={() => setHam(!ham)}
            className="md:hidden flex items-center justify-center text-white"
          >
            {ham ? <CloseOutlined style={{ color: "#fff" }} /> : <Hamburger />}
          </Button>
        </div>

        {ham && (
          <div className="md:hidden w-full mt-1 pb-4 bg-black rounded-md">
            <MobileMenu clickHandler={handleLinkClick} router={router} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
