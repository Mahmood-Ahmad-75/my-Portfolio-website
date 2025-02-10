"use client";
import { fb, gamail, linkedin, logo, react } from "@/assets";
import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-between items-center justify-center gap-8">
      <div className="flex md:flex-row flex-col justify-center  gap-5 items-center">
        <div className="  h-full flex-0 flex   items-center   gap-1">
          <Image width={50} alt="company" src={logo} />
          <h6 className="font-Zen Kaku Gothic Antique  text-[25px] leading-[25px] text-white font-black">
          icmoSoft
          </h6>{" "}
        </div>
        <p className="text-[#79B2F2] text-[16px] leading-[16px]">
          © Copyright 2023. All Rights Reserved.
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <p className="text-[18px] text-[#79B2F2] leading-[18px] font-semibold">
          FOLLOW US: {"  "}
        </p>
        {/* <Link  href={'https://web.facebook.com/mahmood.ahmad1222/'}>
        <Image  className="cursor-pointer"    src={fb} alt="facebook"></Image>

        </Link> */}
        <Tooltip title="See LinkedIn">
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/mahmood-ahmad-59a6b1223/"}
          >
            <Image
              className="cursor-pointer"
              src={linkedin}
              alt="linkedin"
            ></Image>
          </Link>
        </Tooltip>

        <Tooltip title="send Mail ">
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&to=mahmoodraj75@gmail.com&su=Your%20Subject&body=Hello%20Mudassar"
          >
            <Image className="cursor-pointer" src={gamail} alt="gmail"></Image>
          </a>
        </Tooltip>
        {/* <a>mahmoodraj75@gmail.com</a> */}
      </div>
    </div>
  );
};

export default Footer;
