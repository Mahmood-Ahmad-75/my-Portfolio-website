"use client";
import React from "react";
import SectionHeader from "../common/SectionHeader";

interface Tier {
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  icon: React.ReactNode;
  cta: string;
  featured?: boolean;
}

const HourlyIcon = (
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
    <circle cx="24" cy="40" r="10" fill="currentColor" opacity="0.9" />
    <rect x="38" y="10" width="16" height="16" fill="currentColor" opacity="0.8" />
    <path d="M12 14 L52 54" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
  </svg>
);

const RetainerIcon = (
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
    <circle cx="32" cy="32" r="22" fill="currentColor" opacity="0.85" />
    <circle cx="22" cy="22" r="7" fill="#fff" />
    <circle cx="44" cy="20" r="3" fill="#fff" />
    <path d="M22 42 L42 42 L32 30 Z" fill="#fff" />
  </svg>
);

const EnterpriseIcon = (
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
    <rect x="8" y="24" width="20" height="20" fill="currentColor" opacity="0.85" transform="rotate(-10 18 34)" />
    <rect x="30" y="14" width="22" height="22" fill="currentColor" opacity="0.9" transform="rotate(15 41 25)" />
    <rect x="24" y="36" width="18" height="18" fill="currentColor" opacity="0.75" transform="rotate(-5 33 45)" />
  </svg>
);

const tiers: Tier[] = [
  {
    name: "Hourly",
    tagline: "Best For Small Scopes",
    price: "$45",
    period: "Per Hour",
    icon: HourlyIcon,
    features: [
      "Ad-hoc React / React Native work",
      "Node.js API tweaks & bug fixes",
      "Prompt engineering consults",
      "Invoiced weekly",
    ],
    cta: "Hire Hourly",
  },
  {
    name: "Monthly Retainer",
    tagline: "Best For Ongoing Products",
    price: "$5,500",
    period: "Per Month",
    icon: RetainerIcon,
    features: [
      "~100 hrs / mo dedicated engineering",
      "Full Stack: RN + Node.js + DevOps",
      "AI integration (LLM / STS / TTS)",
      "Weekly delivery rhythm + review",
      "Priority Slack / email response",
    ],
    cta: "Book Retainer",
    featured: true,
  },
  {
    name: "Project",
    tagline: "Best For Defined Builds",
    price: "Let's Chat",
    period: "Fixed Scope",
    icon: EnterpriseIcon,
    features: [
      "Full React Native case study builds",
      "Dedicated AI-integrated delivery",
      "Backend + DevOps included",
      "Milestone-based billing",
    ],
    cta: "Request Quote",
  },
];

const PricingCard: React.FC<{ tier: Tier }> = ({ tier }) => {
  const isFeatured = tier.featured;
  return (
    <div
      className={`relative flex flex-col p-8 md:p-10 transition-transform hover:-translate-y-2 ${
        isFeatured
          ? "bg-[--color-ember] text-black lg:-my-4 lg:py-14 shadow-[0_0_60px_rgba(34,205,112,0.35)]"
          : "bg-[#0D1815] text-white border border-[#1C2924]"
      }`}
    >
      {/* Icon */}
      <div
        className={`mx-auto mb-8 ${
          isFeatured ? "text-white" : "text-[--color-ember]"
        }`}
      >
        {tier.icon}
      </div>

      {/* Name */}
      <h3
        className={`glint-headline text-center text-3xl md:text-4xl mb-2 ${
          isFeatured ? "text-white" : "text-[--color-ember]"
        }`}
      >
        {tier.name}
      </h3>
      <p
        className={`text-center text-sm mb-8 ${
          isFeatured ? "text-black/70" : "text-white/60"
        }`}
      >
        {tier.tagline}
      </p>

      {/* Divider */}
      <div
        className={`h-px w-full mb-8 ${
          isFeatured ? "bg-black/20" : "bg-white/10"
        }`}
      />

      {/* Price */}
      <div className="text-center mb-8">
        <div
          className={`glint-headline text-5xl md:text-6xl mb-2 ${
            isFeatured ? "text-white" : "text-[--color-ember]"
          }`}
        >
          {tier.price}
        </div>
        <p className={`text-sm ${isFeatured ? "text-black/70" : "text-white/60"}`}>
          {tier.period}
        </p>
      </div>

      {/* Features */}
      <ul
        className={`space-y-3 mb-10 text-sm ${
          isFeatured ? "text-black/85" : "text-white/75"
        }`}
      >
        {tier.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${
                isFeatured ? "bg-black" : "bg-[--color-ember]"
              }`}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className={`group mt-auto flex items-center justify-between px-6 py-4 uppercase tracking-widest text-sm font-black transition-colors ${
          isFeatured
            ? "bg-black text-[--color-ember] hover:bg-[#0D1815]"
            : "bg-[--color-ember] text-black hover:bg-[--color-spark]"
        }`}
      >
        <span>{tier.cta}</span>
        <span
          className={`w-8 h-8 flex items-center justify-center ${
            isFeatured ? "bg-[--color-ember] text-black" : "bg-black text-[--color-ember]"
          } group-hover:translate-x-1 transition-transform`}
        >
          ›
        </span>
      </a>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        <SectionHeader
          label="Specifications"
          titleLead="All My Engagement"
          titleAccent="Options"
          description="Pick the model that fits — hourly for small scopes, a monthly retainer for ongoing product work, or a fixed-scope project build. Every package covers Full Stack + AI integration end-to-end."
          watermark="PAYMENT"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 mt-8">
          {tiers.map((t) => (
            <PricingCard key={t.name} tier={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
