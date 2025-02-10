"use client";
// Ensure you have the necessary type declarations for Ant Design components
import React, { useEffect, useRef } from "react";
import NavBar from "../navbar/NavBar";
import Introduction from "../introduction/Introduction";
import Skills from "../skills/Skills";
import Experience from "../about/About";
import ExploringMySkills from "../services/Services";
import AOS from "aos";
import "aos/dist/aos.css"; // Add the AOS styles
import Strategies from "../services/strategies/Strategies";
import WhyToChooseUs from "../qualitiesSection/WhyToChooseUs";
import Projects from "../Projects/Projects";
import Clients from "../Clients/Clients";
import ContactUs from "../ContactUs/ContactUs";
import Resume from "../Resume/Resume";
import { Button, FloatButton } from "antd";
import { whatsapp } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-[100px] h-[100px] fixed bottom-0 right-0 z-50 flex justify-center items-center bg-transparent">
        <Link target="_blank" href="https://api.whatsapp.com/send/?phone=%2B923248433826&text&type=phone_number&app_absent=0">
          <Button
            className="flex justify-center items-center "
            type="link"
            shape="circle"
          >
            {" "}
            <Image
              className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xxl"
              src={whatsapp}
              alt="whatspp icon "
              width={70}
              height={70}
            />
          </Button>
           
        </Link>
      </div>
      <div id="home">
        <Introduction />
      </div>
      <div id="about">
        <Experience />
        <Skills />
      </div>
      <div id="resume">
        <Resume />
      </div>

      <div id="services">
        <ExploringMySkills />
        <Strategies />
        <WhyToChooseUs />
      </div>
      <div id="projects">
        <Projects />
        <Clients />
      </div>

      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
