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
            className="flex items-center cursor-pointer shrink-0"
          >
            <Image width={200} height={30} alt="logo" src={logo} className="w-[220px] h-auto object-contain" />
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
