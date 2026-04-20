"use client";
import { gamail, github, linkedin, logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mahmood-ahmad-59a6b1223/",
    icon: linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Mahmood-Ahmad-75",
    icon: github,
  },
  {
    label: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&to=mahmoodraj75@gmail.com",
    icon: gamail,
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0D1815] mt-8">
      {/* Top section */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-14 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <Image width={200} height={50} alt="logo" src={logo} className="w-[250px] h-auto object-contain" />
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-[260px]">
            Full-stack engineer specialising in React Native, Next.js, Node.js, DevOps, and AI integrations.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-3">
          <p className="text-[--color-ember] font-bold tracking-[0.25em] text-xs uppercase mb-1">
            Navigation
          </p>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-[--color-ember] text-sm transition-colors w-fit"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact + socials */}
        <div className="flex flex-col gap-3">
          <p className="text-[--color-ember] font-bold tracking-[0.25em] text-xs uppercase mb-1">
            Get In Touch
          </p>
          <a
            href="mailto:mahmoodraj75@gmail.com"
            className="text-white/60 hover:text-[--color-ember] text-sm transition-colors w-fit"
          >
            mahmoodraj75@gmail.com
          </a>
          <a
            href="tel:+923248433826"
            className="text-white/60 hover:text-[--color-ember] text-sm transition-colors w-fit"
          >
            (+92) 324 843 3826
          </a>
          <p className="text-white/60 text-sm">Lahore, Pakistan</p>

          {/* Social icons */}
          <div className="flex gap-4 mt-3">
            {socials.map((s) => (
              <Link key={s.label} href={s.href} target="_blank" aria-label={s.label}>
                <div className="w-10 h-10 border border-white/20 hover:border-[--color-ember] flex items-center justify-center rounded transition-colors group">
                  <Image
                    src={s.icon}
                    alt={s.label}
                    width={18}
                    height={18}
                    className="opacity-50 group-hover:opacity-100 brightness-0 invert transition-opacity"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-5 flex md:flex-row flex-col items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} CognitiveStack. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with <span className="text-[--color-ember]">Next.js</span> &amp; <span className="text-[--color-ember]">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
