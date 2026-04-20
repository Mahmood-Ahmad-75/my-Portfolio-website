// EDIT THESE ENTRIES with your real employment history.
// Keep the same shape. Leave period as "YYYY — Present" for current role.

export interface ExperienceEntry {
  period: string;
  role: string;
  company: string;
  description: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    period: "2023 — Present",
    role: "Senior React Native Engineer",
    company: "DevByte.ai",
    description:
      "Leading React Native delivery across health, pharma, and fintech case studies — with LLM-integrated coaching layers, STS/TTS voice agents, and Node.js backends on Render.",
  },
  {
    period: "2022 — 2023",
    role: "Full Stack Developer",
    company: "Cross-Platform Mobile Co.",
    description:
      "Shipped cross-platform iOS + Android apps with Redux Toolkit, Firebase, and Stripe — plus Node.js services and CI/CD on Vercel and Render.",
  },
  {
    period: "2021 — 2022",
    role: "React Native Developer",
    company: "B2B SaaS Studio",
    description:
      "Built RBAC inventory and e-commerce apps with real-time Firestore, Stripe checkout, and offline-first sync. First exposure to applied LLM integrations.",
  },
  {
    period: "2020 — 2021",
    role: "Frontend Engineer (React / Next.js)",
    company: "Web Products Agency",
    description:
      "Delivered React + Next.js web builds with Redux, Tailwind, and SSR — the foundation that scaled into mobile and AI work later.",
  },
];

export interface SkillDial {
  label: string;
  value: number; // 0-100
}

export const skillDials: SkillDial[] = [
  { label: "React Native", value: 95 },
  { label: "React & Next.js", value: 93 },
  { label: "Node.js Backend", value: 88 },
  { label: "AI Integration", value: 87 },
];
