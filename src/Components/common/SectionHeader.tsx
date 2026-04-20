"use client";
import React from "react";

interface SectionHeaderProps {
  label: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  watermark?: string;
  onPrev?: () => void;
  onNext?: () => void;
}

const ArrowButton: React.FC<{ dir: "prev" | "next"; onClick?: () => void }> = ({
  dir,
  onClick,
}) => (
  <button
    onClick={onClick}
    aria-label={dir === "prev" ? "Previous" : "Next"}
    className="w-12 h-12 border border-[--color-ember] text-[--color-ember] hover:bg-[--color-ember] hover:text-black flex items-center justify-center transition-colors"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      {dir === "prev" ? (
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      ) : (
        <path d="M4 11v2h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4z" />
      )}
    </svg>
  </button>
);

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  titleLead,
  titleAccent,
  description,
  watermark,
  onPrev,
  onNext,
}) => {
  const showArrows = Boolean(onPrev || onNext);
  return (
    <div className="relative grid lg:grid-cols-2 gap-10 items-start mb-16">
      {watermark && (
        <span
          aria-hidden
          className="glint-watermark absolute -top-6 left-0 text-[5rem] md:text-[7rem] lg:text-[8.5rem] leading-none whitespace-nowrap"
        >
          {watermark}
        </span>
      )}

      <div className="relative">
        <p className="text-[--color-ember] font-bold tracking-[0.3em] text-sm mb-6 uppercase">
          {label}
        </p>
        <h2 className="glint-headline text-4xl md:text-[60px] leading-[1.05] text-white">
          {titleLead} <span className="glint-accent">{titleAccent}</span>
        </h2>
      </div>

      <div className="flex items-start gap-6 lg:pt-4">
        <div className="border-l-2 border-[--color-ember] pl-5 flex-1">
          <p className="text-white/70 text-base md:text-[18px] leading-relaxed">
            {description}
          </p>
        </div>
        {showArrows && (
          <div className="flex gap-3 shrink-0">
            <ArrowButton dir="prev" onClick={onPrev} />
            <ArrowButton dir="next" onClick={onNext} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
