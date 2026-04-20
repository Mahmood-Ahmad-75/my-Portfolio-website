export interface ProjectStats {
  icon: string;
  value: string;
  label: string;
}

export interface ArchitectureItem {
  icon: string;
  title: string;
  description: string;
  isImageBlock?: boolean;
  imageAlt?: string;
  imageSrc?: string;
}

export interface AICapability {
  icon: string;
  title: string;
  description: string;
}

export interface TechStackGroups {
  frontend: string[];
  backend: string[];
  devops: string[];
  ai: string[];
}

export type ProjectType =
  | "Web"
  | "Mobile"
  | "Full Stack"
  | "AI-Integrated";

export interface ProjectDetail {
  id: number;
  title: string;
  subtitle: string;
  heroHighlight: string;
  heroDescription: string;
  tags: string[];
  imgSrc: string;
  liveUrl: string;

  types: ProjectType[];

  challenge: string;
  impactScore1: string;
  impactLabel1: string;
  impactScore2: string;
  impactLabel2: string;

  architecture: ArchitectureItem[];
  stack: string[];
  techStack: TechStackGroups;
  stats: ProjectStats[];

  aiCapabilities: AICapability[];
  contribution: string;
  deployment: string;
  outcome: string;
}

export const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: "MyLera",
    subtitle: "Case Study • Fitness & Wellness",
    heroHighlight: "App",
    heroDescription:
      "A hyper-personalized fitness and wellness cross-platform app integrating iOS/Android health data with an LLM-powered coaching layer for vitals monitoring and imbalance detection.",
    tags: ["Mobile", "Full Stack", "AI Integration", "Health & Wellness", "React Native", "Firebase", "GPT API"],
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLWcZ78TDu6GgP3hxmbTR6QJRqI11sKRu9Cmgm84-pp098bd0uZQ-kesd4KwchlcJiGKz_GvMvcieUCWlk2T54_PTJvHqdqYTGNQdLxHdstyhw-ga66WSWV9a_WJzN8Xf61XtE4YUS9WbP0TAi5HmbhZSOs_aZBMkClXoi3XI_FtHoqNN-zLaiAwtqxYvAAF3ilM1AI1jPS3HMxuEZfj-4LeXF0gXrcN5ZhSicYsoRM_kMgEFe66rzDvOCcv6INX5WaRJQaDb7s3QI",
    liveUrl: "#",
    types: ["Mobile", "Full Stack", "AI-Integrated"],
    challenge:
      "Most fitness apps offer generic routines that fail to adapt to a user's real-time health state. We needed to synthesize iOS HealthKit and Android health data into actionable, LLM-powered coaching that monitors vitals and flags imbalances conversationally.",
    impactScore1: "94%",
    impactLabel1: "User Retention Rate",
    impactScore2: "12ms",
    impactLabel2: "API Response Latency",
    architecture: [
      {
        icon: "psychology",
        title: "LLM Coaching Layer",
        description:
          "Prompt-engineered GPT integration that reasons over historical vitals, sleep, and activity logs to generate personalized recommendations with structured JSON outputs and guardrails against unsafe health advice."
      },
      {
        icon: "sync_alt",
        title: "Cross-Platform Health Syncing",
        description:
          "Bidirectional ingestion pipeline for Apple HealthKit and Google Fit, normalizing diverse metrics into a unified schema consumed by the AI engine and analytics dashboards."
      },
      {
        icon: "trophy",
        title: "Redux Toolkit State Management",
        description:
          "Centralized global state for health data, user sessions, and AI responses — ensuring deterministic, scalable performance across iOS and Android.",
        isImageBlock: true,
        imageAlt: "Fitness App UI",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDnrD0vetU8JHnj5mX5cslfs9aK_726-eXqxRiDiHgHyOQQTjb5hgx7gpO4FrUgOeNKfL8Vx8NjcIT-7BNa7WKiQ4kIHOA28tkVLEmBYAtUH0OrF4tYJ1EvANTstQ0iEM2OJ-sAPZNxHPyAZfERviu92htztUPRS2z8xKxfIKcjPiVShS58zebLRaLxCSsfpAm5cuRant1YFRfpwaZGV-0f2_MEPlTgcN6LjFEE2hqS81ylCDIKGxgjweKb9RyVFJft68c3tBzlqGWX"
      }
    ],
    stack: [
      "React Native",
      "Redux Toolkit",
      "Firebase Auth & Firestore",
      "Node.js Gateway",
      "GPT API",
      "Apple HealthKit",
      "Google Fit"
    ],
    techStack: {
      frontend: ["React Native", "Redux Toolkit", "TypeScript"],
      backend: [
        "Node.js (Express)",
        "Firebase Auth",
        "Firestore",
        "Cloud Functions",
        "REST API"
      ],
      devops: ["EAS Build (iOS/Android)", "Render (Node gateway)", "Firebase Hosting", "GitHub Actions"],
      ai: ["OpenAI GPT", "Prompt engineering (coach persona)", "Structured JSON output", "Embedding-based trend memory"]
    },
    stats: [
      { icon: "speed", value: "99.9%", label: "Uptime Reliability" },
      { icon: "memory", value: "4.2s", label: "Avg Session Depth" },
      { icon: "cloud_done", value: "200k+", label: "Health Records Synced" }
    ],
    aiCapabilities: [
      {
        icon: "psychology",
        title: "LLM Health Coach",
        description:
          "GPT-powered coach that reasons over vitals + lifestyle logs to surface imbalances with safety-bounded phrasing and structured recommendations."
      },
      {
        icon: "record_voice_over",
        title: "Voice-Consistent TTS Briefings",
        description:
          "Daily audio briefings via a single, consistent coach voice — same-voice identity preserved across sessions to build trust."
      },
      {
        icon: "memory",
        title: "Contextual Memory",
        description:
          "Session memory summaries condense long-running health context into tight LLM prompts, keeping token budgets predictable."
      }
    ],
    contribution:
      "Architected the health ingestion pipeline, designed the GPT prompt layer with guardrails and structured outputs, built Redux slices and all RN screens, wired the Node gateway to Firestore.",
    deployment:
      "iOS + Android shipped via EAS Build. Node API gateway hosted on Render with environment-scoped secrets. Firestore for persistence; Firebase Hosting for the admin console.",
    outcome:
      "94% retention, 12ms p50 API latency, 200k+ health records synced across active users."
  },
  {
    id: 2,
    title: "Pharmed Pulse",
    subtitle: "Case Study • Pharmaceutical AI",
    heroHighlight: "Platform",
    heroDescription:
      "An AI-driven pharmaceutical mobile platform integrating speech processing and LLM APIs for automated patient interactions, real-time messaging, and intelligent appointment scheduling.",
    tags: ["Mobile", "Full Stack", "AI Integration", "Health & Wellness", "React Native", "STS", "TTS"],
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEQMcx6I9lnTej2OVpMtmu8t9TX8Ao-SxOicPQDfMfsYFX9fAxm4Lj42Yz-rW2vvXGRPXaEAy1NUIt3UxR09V1VMoTLBi_Dpn0XEH_Pjwgh4uZf8FVxo19r_itsOism-A-dDe1fuxAi9XuCA2kZmtfJ37jE4qjBsJjBaOrxfkS9yBMeHCl5EqpkmecSXcw20RWRaWLtyY5wvZxtk6gqU-XGmo1iYJH5SOlOEB5-e_x64alrdfkggoTBpLNmlgGEOdrc4e87YUlsUcD",
    liveUrl: "#",
    types: ["Mobile", "Full Stack", "AI-Integrated"],
    challenge:
      "Pharmaceutical interactions require precise, AI-assisted communication between patients and providers. The app needed automated scheduling logic, real-time chat, and speech-to-speech voice interactions — all working seamlessly on iOS and Android without leaking clinical context across users.",
    impactScore1: "3x",
    impactLabel1: "Faster Patient Interaction",
    impactScore2: "100%",
    impactLabel2: "Scheduling Automation",
    architecture: [
      {
        icon: "record_voice_over",
        title: "STS Voice Integration",
        description:
          "Speech-to-Speech pipeline for hands-free prescription lookups, booking, and refill queries. Patient voice is transcribed, reasoned over by an LLM, and returned via TTS in a consistent pharmacist voice profile."
      },
      {
        icon: "chat",
        title: "Real-Time Messaging",
        description:
          "Firebase-powered real-time chat between patients and pharmacists with read receipts, typing indicators, and persisted history."
      },
      {
        icon: "calendar_month",
        title: "Automated Scheduling Logic",
        description:
          "Intelligent appointment scheduling with conflict detection, automated reminders, and LLM-driven intent parsing for natural-language rescheduling.",
        isImageBlock: true,
        imageAlt: "Pharmed Pulse UI",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDnrD0vetU8JHnj5mX5cslfs9aK_726-eXqxRiDiHgHyOQQTjb5hgx7gpO4FrUgOeNKfL8Vx8NjcIT-7BNa7WKiQ4kIHOA28tkVLEmBYAtUH0OrF4tYJ1EvANTstQ0iEM2OJ-sAPZNxHPyAZfERviu92htztUPRS2z8xKxfIKcjPiVShS58zebLRaLxCSsfpAm5cuRant1YFRfpwaZGV-0f2_MEPlTgcN6LjFEE2hqS81ylCDIKGxgjweKb9RyVFJft68c3tBzlqGWX"
      }
    ],
    stack: ["React Native", "STS API", "TTS API", "LLM Orchestrator", "Firebase", "Redux Toolkit", "TypeScript"],
    techStack: {
      frontend: ["React Native", "Redux Toolkit", "TypeScript"],
      backend: [
        "Node.js scheduling service",
        "Firebase Auth",
        "Firestore",
        "Cloud Functions (reminders)"
      ],
      devops: ["EAS Build", "Render (LLM orchestrator)", "Firebase Functions", "GitHub Actions"],
      ai: [
        "Speech-to-Speech (STS)",
        "Text-to-Speech (TTS)",
        "Same-voice consistency layer",
        "LLM intent parsing",
        "Clinical-safety prompt guardrails"
      ]
    },
    stats: [
      { icon: "mic", value: "STS", label: "Voice Interaction" },
      { icon: "chat", value: "Real-time", label: "Messaging System" },
      { icon: "event", value: "100%", label: "Scheduling Automated" }
    ],
    aiCapabilities: [
      {
        icon: "record_voice_over",
        title: "Speech-to-Speech Voice Agent",
        description:
          "Hands-free voice interface for prescription lookups and booking — STS + LLM + TTS composed into a low-latency conversational loop."
      },
      {
        icon: "graphic_eq",
        title: "Same-Voice Consistency",
        description:
          "A single, consistent pharmacist voice profile across every interaction — critical for clinical trust."
      },
      {
        icon: "auto_awesome",
        title: "LLM Intent Parsing",
        description:
          "Natural-language appointment intents ('move my Thursday refill to next week') parsed into structured scheduling actions."
      }
    ],
    contribution:
      "Built the RN voice interaction stack, composed the STS/LLM/TTS pipeline, engineered clinical-safety prompt guardrails, implemented the scheduling intent parser and Cloud Functions reminders.",
    deployment:
      "Mobile via EAS Build. LLM orchestrator on Render. Scheduling + reminders on Firebase Cloud Functions. Environment-isolated secrets for clinical data.",
    outcome:
      "3× faster patient interactions; 100% of scheduling flows fully automated; zero clinical-context leakage across accounts."
  },
  {
    id: 3,
    title: "Ventally",
    subtitle: "Case Study • Mental Health",
    heroHighlight: "App",
    heroDescription:
      "A mental health support platform featuring AI-assisted mood journaling, emotional trend analytics, peer communities, and integrated real-time chat and video calls.",
    tags: ["Mobile", "Full Stack", "AI Integration", "Health & Wellness", "React Native", "WebRTC"],
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD49m88B2mZKv3tbBNYXGL0vmilfeRuVxyuVF9GlDuI9C-0kjoWYHh67j7Q5Wk-1xZyN09WAHNAiu3nZuAADTvcpFXsSMAWy2KRdZpgsHL3EYStG27hv4v0tig3TtARsC2gKF5BXLV2A__UU2gr1mczY9YNFlvSew_7NZnjSNng1A9mZL_u3Vq9jbtdS3_UFSoXX53cnl9Jj9dpBHqn4xKL12YSBC1vH3sTNSVM0PSFQBmJwqiRR-8sFePokSP6OlG1Yjz_PL16LVXk",
    liveUrl: "#",
    types: ["Mobile", "Full Stack", "AI-Integrated"],
    challenge:
      "Mental health apps need delicate, privacy-first UX with rich emotional tracking. The challenge was building intuitive mood-logging flows, meaningful trend visualizations, and real-time peer support — layered with an AI journaling companion that never oversteps clinical boundaries.",
    impactScore1: "Sub 50ms",
    impactLabel1: "Chat Delivery Latency",
    impactScore2: "2.4x",
    impactLabel2: "User Engagement Increase",
    architecture: [
      {
        icon: "mood",
        title: "AI Mood Journaling",
        description:
          "Daily mood log enriched by an LLM companion that summarizes weekly emotional patterns and surfaces gentle, non-clinical reflections."
      },
      {
        icon: "analytics",
        title: "Emotional Trend Charts",
        description:
          "Interactive charts translating raw mood data into weekly/monthly trend lines — consumed by both users and assigned support guides."
      },
      {
        icon: "call",
        title: "Real-Time Chat & Video",
        description:
          "Firebase chat plus WebRTC voice/video for guided sessions, with encrypted signaling and strict role-based room access.",
        isImageBlock: true,
        imageAlt: "Ventally Mental Health UI",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDnrD0vetU8JHnj5mX5cslfs9aK_726-eXqxRiDiHgHyOQQTjb5hgx7gpO4FrUgOeNKfL8Vx8NjcIT-7BNa7WKiQ4kIHOA28tkVLEmBYAtUH0OrF4tYJ1EvANTstQ0iEM2OJ-sAPZNxHPyAZfERviu92htztUPRS2z8xKxfIKcjPiVShS58zebLRaLxCSsfpAm5cuRant1YFRfpwaZGV-0f2_MEPlTgcN6LjFEE2hqS81ylCDIKGxgjweKb9RyVFJft68c3tBzlqGWX"
      }
    ],
    stack: [
      "React Native",
      "Firebase Auth & Firestore",
      "WebRTC",
      "Node.js sentiment API",
      "Redux Toolkit",
      "TypeScript",
      "RN Charts"
    ],
    techStack: {
      frontend: ["React Native", "Redux Toolkit", "TypeScript", "React Native Charts"],
      backend: ["Node.js sentiment API", "Firebase Auth", "Firestore", "WebRTC signaling"],
      devops: ["EAS Build", "Render (sentiment API)", "Vercel (companion web dashboard)", "Firebase"],
      ai: [
        "LLM journaling companion",
        "TTS voice-guided reflections",
        "Consistent calm voice profile",
        "Crisis-keyword guardrails"
      ]
    },
    stats: [
      { icon: "mood", value: "Daily", label: "Mood Logging" },
      { icon: "trending_up", value: "7/30-day", label: "Trend Analysis" },
      { icon: "support_agent", value: "Live", label: "Chat & Call Support" }
    ],
    aiCapabilities: [
      {
        icon: "auto_stories",
        title: "LLM Journaling Companion",
        description:
          "Summarizes weekly emotional patterns with empathetic, non-clinical reflections — strictly scoped by prompt guardrails."
      },
      {
        icon: "volume_up",
        title: "TTS Guided Reflections",
        description:
          "Audio reflections delivered in a single, consistent calm voice — same-voice identity across sessions."
      },
      {
        icon: "shield",
        title: "Crisis-Keyword Guardrails",
        description:
          "Prompt-level detection of distress signals that escalates to support-guide workflows rather than LLM responses."
      }
    ],
    contribution:
      "Built the mood-logging flow, WebRTC signaling, and the Node sentiment service. Designed empathetic-response prompt constraints and crisis-keyword escalation logic.",
    deployment:
      "Mobile via EAS. Companion web dashboard on Vercel. Sentiment API on Render. Realtime layer on Firebase.",
    outcome:
      "Sub-50ms chat delivery; 2.4× user engagement lift after shipping the AI journaling companion."
  },
  {
    id: 4,
    title: "Inventory Management",
    subtitle: "Case Study • B2B Enterprise",
    heroHighlight: "App",
    heroDescription:
      "A B2B mobile inventory management app for wholesalers and retailers featuring Role-Based Access Control, Stripe payments, and an AI agent for demand forecasting.",
    tags: ["Mobile", "Full Stack", "AI Integration", "Enterprise", "React Native", "Stripe", "RBAC"],
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjQRxRiaVLhubfnvsgn8XdKPvJHYZWJ-FVlbvtaQHXyPMNG2k0DqcZa5NggxJtt6KFIOQLQ3lKaXB_g2qQwHLczyxFg9FftVq2NxGn-Ame6dc5xzyA4Xr-KTWnDcl5b0TGzaWV0d4VSKI0iNWWc9fgKfk4RQ3N2ggiiYNQ5Y8IgodDYGghHkZyd75R0U27Iy4Ca7xQAavyn4Tl-aqPOicS6zT-L_9AMHXJCNdscUgOlox-XYicwGKwk6RBczIA-_4TuWEodqZt8tSc",
    liveUrl: "#",
    types: ["Mobile", "Full Stack", "AI-Integrated"],
    challenge:
      "Building a single mobile app serving two distinct user roles (wholesalers and retailers) with strict access boundaries, inventory visibility controls, and a secure payment flow required careful architecture for RBAC, state isolation, and audit-safe inventory events.",
    impactScore1: "RBAC",
    impactLabel1: "Dual Role Architecture",
    impactScore2: "Stripe",
    impactLabel2: "Secure Payment Integration",
    architecture: [
      {
        icon: "admin_panel_settings",
        title: "Role-Based Access Control",
        description:
          "Flexible RBAC differentiating wholesaler and retailer views, permissions, and data access — enforced at both Firebase security-rule and application-state levels."
      },
      {
        icon: "payments",
        title: "Stripe Payment Integration",
        description:
          "Stripe SDK for secure in-app payments, invoice generation, transaction history, and real-time payment status for B2B orders."
      },
      {
        icon: "inventory_2",
        title: "Inventory Module Architecture",
        description:
          "Distinct inventory modules per role — wholesalers manage bulk stock and pricing tiers, retailers track individual SKUs and place orders.",
        isImageBlock: true,
        imageAlt: "Inventory App UI",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDnrD0vetU8JHnj5mX5cslfs9aK_726-eXqxRiDiHgHyOQQTjb5hgx7gpO4FrUgOeNKfL8Vx8NjcIT-7BNa7WKiQ4kIHOA28tkVLEmBYAtUH0OrF4tYJ1EvANTstQ0iEM2OJ-sAPZNxHPyAZfERviu92htztUPRS2z8xKxfIKcjPiVShS58zebLRaLxCSsfpAm5cuRant1YFRfpwaZGV-0f2_MEPlTgcN6LjFEE2hqS81ylCDIKGxgjweKb9RyVFJft68c3tBzlqGWX"
      }
    ],
    stack: ["React Native", "Redux Toolkit", "Stripe SDK", "Firebase", "Node.js invoice service", "TypeScript"],
    techStack: {
      frontend: ["React Native", "Redux Toolkit", "TypeScript"],
      backend: ["Node.js invoice service", "Firebase Auth", "Firestore (role-scoped)", "Stripe webhooks"],
      devops: ["EAS Build", "Render (invoice service)", "Firebase security rules", "GitHub Actions"],
      ai: [
        "LLM AI agent for demand forecasting",
        "Natural-language PO draft generation",
        "SKU normalization classifier"
      ]
    },
    stats: [
      { icon: "group", value: "2 Roles", label: "Wholesaler & Retailer" },
      { icon: "lock", value: "RBAC", label: "Access Control" },
      { icon: "payments", value: "Stripe", label: "Payment Processing" }
    ],
    aiCapabilities: [
      {
        icon: "auto_graph",
        title: "Demand Forecast Agent",
        description:
          "AI agent that analyzes sales velocity and proposes low-stock reorder suggestions with confidence scores."
      },
      {
        icon: "description",
        title: "NL Purchase Orders",
        description:
          "Supervisor types or speaks 'reorder 200 units of SKU-A from vendor X' — LLM drafts a structured PO ready for approval."
      },
      {
        icon: "hub",
        title: "SKU Normalization",
        description:
          "Prompt-engineered classifier that normalizes messy SKU descriptions across vendors into a canonical catalog."
      }
    ],
    contribution:
      "Designed the RBAC data model, implemented Stripe webhook flows, built the AI agent tool-use schema for PO drafting and forecasting.",
    deployment:
      "Mobile via EAS. Invoice microservice on Render. Firebase security rules enforce role isolation server-side.",
    outcome:
      "Single codebase serving two fully isolated role graphs with zero cross-role data-leak incidents in production."
  },
  {
    id: 5,
    title: "ULEXE",
    subtitle: "Case Study • Salon Booking",
    heroHighlight: "App",
    heroDescription:
      "A salon discovery and booking mobile app with map-based browsing, real-time appointment scheduling, and an LLM recommendation assistant for personalized service matching.",
    tags: ["Mobile", "Full Stack", "AI Integration", "Creative", "React Native", "Maps"],
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBip8Km4M05J2I7d25oQe2X8naN4ggHVurNq5ui8U_Z2Vr-BqfUwUTZXI6ZpRsftS9osnT9UfI63hUst2g3vrq-7jMbUJxfhGZnd86rI1JCMlX_4TuxHkb6X_DgJSMJ9jbgvBxWe41sxGiljJhpHyTMkg_-CNiZVHx77YZtGyQmTWV3kjXD7xSgRZ9Tv3EtdSaBkjU7OcgXfDP2gWjWGCk-xIqOg9NWGf2i84ZE2wF3DDgwG2wMBlBlPxx_DycFz8lo6dg8YEkfXUSr",
    liveUrl: "#",
    types: ["Mobile", "Full Stack", "AI-Integrated"],
    challenge:
      "Users needed an intuitive way to find nearby salons, browse services, check availability, and book appointments — all within a map-first mobile experience that stays responsive offline and matches intent ('a cut before Friday near me') to real inventory.",
    impactScore1: "Map-first",
    impactLabel1: "Salon Discovery UX",
    impactScore2: "Real-time",
    impactLabel2: "Booking Availability",
    architecture: [
      {
        icon: "map",
        title: "Map-Based Salon Discovery",
        description:
          "Interactive maps via React Native Maps with custom markers, distance filtering, and clustering for dense urban areas."
      },
      {
        icon: "event_available",
        title: "Real-Time Appointment Booking",
        description:
          "Slot availability engine on Firebase with instant confirmations and push-notification receipts."
      }
    ],
    stack: ["React Native", "React Native Maps", "Geolocation API", "Firebase", "Node.js booking engine", "Redux Toolkit"],
    techStack: {
      frontend: ["React Native", "React Native Maps", "Redux Toolkit", "TypeScript"],
      backend: ["Node.js booking engine", "Firebase Auth", "Firestore", "Push notifications"],
      devops: ["EAS Build", "Vercel (admin dashboard)", "Render (booking engine)", "Firebase"],
      ai: [
        "LLM service recommendation assistant",
        "Slot-intent parser",
        "TTS booking confirmations"
      ]
    },
    stats: [
      { icon: "place", value: "GPS", label: "Location-Based Discovery" },
      { icon: "event", value: "Real-time", label: "Slot Availability" },
      { icon: "notifications", value: "Push", label: "Booking Notifications" }
    ],
    aiCapabilities: [
      {
        icon: "psychology",
        title: "Service Recommendation Assistant",
        description:
          "LLM-backed assistant matching free-form requests ('I need a cut before Friday near me') to real availability."
      },
      {
        icon: "schedule",
        title: "Slot-Intent Parser",
        description:
          "Converts natural language time windows into concrete booking queries against the slot engine."
      }
    ],
    contribution:
      "Built the map discovery UI, the Node booking engine, and the LLM assistant's tool-use schema for slot-lookup queries.",
    deployment:
      "Mobile via EAS. Admin dashboard on Vercel. Booking engine on Render. Real-time layer on Firebase.",
    outcome:
      "Map-first discovery with real-time slot confirmation and LLM-assisted service matching."
  },
  {
    id: 6,
    title: "CTLFX",
    subtitle: "Case Study • Trading",
    heroHighlight: "App",
    heroDescription:
      "A secure trading mobile app with real-time local currency conversion, biometric-secured wallet, and an LLM trade-journal explainer that summarizes P&L in plain language.",
    tags: ["Mobile", "Full Stack", "AI Integration", "Fintech", "React Native", "Forex"],
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBAIAiu0y7WjGLkv4J_PMPdv_vlEeSlSk0rACcVpEjGZ4PdLhOkyDJ0b6fc5Ij95toxmqTyU-dinlEvZ9KMyD-ZIeglWg-4XwI2p59dy-dxieWkpNnOBr7fQDMqABdy7-eUHRnkDLVfaDeiw6r61tEgjDWK79MdupkUJdmSGoUCRmZUwtv_7DAFsKFKJv9c0RK8yBcaXt_SIu_ehpHYwOMz5aGWOW7jm1nvABr3xziodvUpFvy0Oc0pb1xjK0BcdATqXaYjSpm8EHY",
    liveUrl: "#",
    types: ["Mobile", "Full Stack", "AI-Integrated"],
    challenge:
      "Trading apps demand ultra-precise financial calculations, secure wallet management, and real-time currency conversion — layered with clear, non-advisory explanations of user P&L that inspire trust without crossing into financial advice.",
    impactScore1: "Real-time",
    impactLabel1: "Currency Conversion",
    impactScore2: "Secure",
    impactLabel2: "Wallet Architecture",
    architecture: [
      {
        icon: "currency_exchange",
        title: "Real-Time Currency Conversion",
        description:
          "Live forex rate APIs power accurate local-currency deposits and withdrawals, with zero latency tolerance and server-side rate pinning at trade time."
      },
      {
        icon: "account_balance_wallet",
        title: "Secure Wallet Interface",
        description:
          "Wallet UI with balance overviews, transaction ledgers, and PIN/biometric authentication layers."
      }
    ],
    stack: ["React Native", "Forex API", "Redux Toolkit", "Firebase", "Node.js FX gateway", "Biometric Auth"],
    techStack: {
      frontend: ["React Native", "Redux Toolkit", "TypeScript", "Biometric Auth"],
      backend: ["Node.js FX gateway", "Firebase Auth", "Firestore", "Forex rate feed"],
      devops: ["EAS Build", "Render (FX gateway)", "Hostinger (marketing site)", "Firebase"],
      ai: [
        "LLM trade-journal explainer",
        "Non-advisory phrasing guardrails",
        "Optional TTS market briefings (consistent voice)"
      ]
    },
    stats: [
      { icon: "currency_exchange", value: "Live", label: "FX Rate Updates" },
      { icon: "lock", value: "Biometric", label: "Wallet Security" },
      { icon: "account_balance", value: "Multi-currency", label: "Deposit & Withdrawal" }
    ],
    aiCapabilities: [
      {
        icon: "summarize",
        title: "Trade-Journal Explainer",
        description:
          "LLM summarizes daily/weekly P&L in plain language with strict non-advisory phrasing guardrails."
      },
      {
        icon: "podcasts",
        title: "Same-Voice Market Briefings",
        description:
          "Optional TTS market briefings in a single consistent anchor voice — audio identity preserved across daily episodes."
      }
    ],
    contribution:
      "Built the FX gateway, biometric wallet flows, and the LLM explainer with regulator-aware phrasing guardrails.",
    deployment:
      "Mobile via EAS. FX gateway on Render. Marketing site on Hostinger. Auth + data on Firebase.",
    outcome:
      "Real-time currency conversion with biometric wallet security and clear, compliance-safe LLM explanations of user P&L."
  },
  {
    id: 7,
    title: "Project Runner",
    subtitle: "Case Study • Construction Logistics",
    heroHighlight: "App",
    heroDescription:
      "A construction logistics mobile app for task management, material assignment, precise site mapping, and an AI agent that turns supervisor voice memos into structured work orders.",
    tags: ["Mobile", "Full Stack", "AI Integration", "Enterprise", "React Native", "Maps"],
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCx8HaEIlzQ5lpHsPmjHYA-s5h_uMRPPAWvSYhqOBkdWGaImkCb8E1ySbfGRj0PBVk6_d8LQHqdvJwC0tcHPsI-C9a1_nbSfD9ezGYwjVQ4rdz_c2D-5iQ7leT49rAGUS2fam04zC5R545e0PDsHvvChZAjKV9noDzVYXwGImDefoPBE6cqf2mMw_q5QFt6aj520ifDdrxoIWffIRe3liVh1dwHcPieaxZcCvnjKe5c2owpn5CXlpqXpEN6IH-F99ejB3awA6ZJ8NR5",
    liveUrl: "#",
    types: ["Mobile", "Full Stack", "AI-Integrated"],
    challenge:
      "Construction field teams needed a mobile-first tool to manage tasks, assign materials to specific workers, and map job sites accurately — without relying on constant internet connectivity and with minimal typing on-site.",
    impactScore1: "Site-level",
    impactLabel1: "Mapping Precision",
    impactScore2: "Real-time",
    impactLabel2: "Task Assignment",
    architecture: [
      {
        icon: "construction",
        title: "Logistics Task Management",
        description:
          "Hierarchical task system for site supervisors assigning work orders, material lists, deadlines, and worker assignments — synced via Firebase."
      },
      {
        icon: "map",
        title: "Precise Site Mapping",
        description:
          "React Native Maps with custom polygon drawing to mark construction zones, define task boundaries, and track worker locations on-site."
      }
    ],
    stack: ["React Native", "React Native Maps", "Firebase", "Node.js sync service", "Redux Toolkit", "TypeScript"],
    techStack: {
      frontend: ["React Native", "React Native Maps", "Redux Toolkit", "TypeScript", "Offline cache"],
      backend: ["Node.js sync service", "Firebase Auth", "Firestore"],
      devops: ["EAS Build", "Render (sync service)", "Firebase"],
      ai: [
        "STS supervisor voice memos",
        "LLM work-order extraction",
        "Offline-cached prompt summaries"
      ]
    },
    stats: [
      { icon: "construction", value: "Multi-site", label: "Task Coordination" },
      { icon: "place", value: "GPS Precision", label: "Site Mapping" },
      { icon: "assignment_turned_in", value: "Real-time", label: "Material Assignment" }
    ],
    aiCapabilities: [
      {
        icon: "mic",
        title: "Voice-to-Work-Order Agent",
        description:
          "Supervisor records a voice memo; STS transcribes and an LLM extracts a structured work order with materials, workers, and deadlines."
      },
      {
        icon: "cloud_off",
        title: "Offline-Cached AI Summaries",
        description:
          "Pre-computed summaries cached on-device so field teams get AI value even with intermittent connectivity."
      }
    ],
    contribution:
      "Built the offline-first sync layer, the polygon site-mapping tools, and the voice-to-work-order agent with structured extraction.",
    deployment:
      "Mobile via EAS. Sync microservice on Render. Firebase for realtime + auth.",
    outcome:
      "Site-level mapping precision with real-time material assignment, driven by voice input instead of on-site typing."
  },
  {
    id: 8,
    title: "Shoppeo",
    subtitle: "Case Study • E-Commerce",
    heroHighlight: "App",
    heroDescription:
      "A full-featured e-commerce mobile app with separate buyer and seller flows, real-time order tracking, Stripe checkout, and an LLM listing assistant that drafts SEO-ready product copy.",
    tags: ["Mobile", "Full Stack", "AI Integration", "Creative", "React Native", "Stripe"],
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNQSL82PFzCCLOuNQgL7YgX12Q7OFFuApNM-q3XHgCC2RTFdewuVGdbV8yde-WQum4maoRGBC_riTXFBKGN_waOO-wnjGafgG3IDA8KHeuzWQV3ssVW3qMl1REM7XvhXnNHxtGtGK4D07gsBIdYIPrPO3MQXTkWMPDOA2pkcKVhMQsNuxziTNgIJJM_hjbTZ-K-ZVEHvksgq0z93vEmHLmQtOqqgs6sr2ufscqQCJaeavj9KIsyUvEZuYFNErdBlm8evw61TUsFyh-",
    liveUrl: "#",
    types: ["Mobile", "Full Stack", "AI-Integrated"],
    challenge:
      "A single app serving buyers and sellers required isolated navigation stacks, role-specific dashboards, and a unified order-management layer keeping both in sync without data leakage between roles.",
    impactScore1: "Dual-role",
    impactLabel1: "Buyer & Seller UX",
    impactScore2: "Real-time",
    impactLabel2: "Order Management",
    architecture: [
      {
        icon: "storefront",
        title: "Separate Buyer/Seller Flows",
        description:
          "Isolated navigation stacks and dashboards — buyers (browse, cart, checkout, tracking), sellers (inventory, fulfillment, earnings)."
      },
      {
        icon: "local_shipping",
        title: "Order Management System",
        description:
          "Real-time order lifecycle — placement to fulfillment — with status updates, delivery tracking, and notification triggers at each stage."
      }
    ],
    stack: ["React Native", "Firebase", "Redux Toolkit", "Stripe SDK", "Node.js order service", "TypeScript"],
    techStack: {
      frontend: ["React Native", "Redux Toolkit", "TypeScript"],
      backend: ["Node.js order service", "Firebase Auth", "Firestore (role-scoped)", "Stripe webhooks"],
      devops: ["EAS Build", "Vercel (seller web console)", "Render (order API)", "Firebase"],
      ai: [
        "LLM listing assistant (SEO copy)",
        "Conversational buyer search agent",
        "TTS order-status updates"
      ]
    },
    stats: [
      { icon: "shopping_cart", value: "2 Roles", label: "Buyer & Seller" },
      { icon: "local_shipping", value: "Real-time", label: "Order Tracking" },
      { icon: "payments", value: "Stripe", label: "Secure Checkout" }
    ],
    aiCapabilities: [
      {
        icon: "edit_note",
        title: "LLM Listing Assistant",
        description:
          "Sellers upload a photo and a few attributes; the LLM drafts SEO-ready titles, descriptions, and tag sets."
      },
      {
        icon: "search",
        title: "Conversational Buyer Agent",
        description:
          "Buyers refine searches conversationally — the agent translates intent into structured Firestore queries."
      },
      {
        icon: "notifications_active",
        title: "TTS Order Updates",
        description:
          "Optional audio order-status updates delivered in a consistent brand voice."
      }
    ],
    contribution:
      "Designed the role-isolated data model, built the order lifecycle state machine, shipped the LLM listing assistant with structured output validation.",
    deployment:
      "Mobile via EAS. Seller web console on Vercel. Order API on Render. Firebase for realtime + auth.",
    outcome:
      "Two fully isolated persona flows on a single codebase, with LLM-assisted seller onboarding shortening time-to-first-listing."
  },
  {
    id: 9,
    title: "Frontend Engineering Sandbox",
    subtitle: "Case Study • Web Frontend Foundation",
    heroHighlight: "Web",
    heroDescription:
      "A consolidated showcase of React.js, Next.js, Redux, TypeScript, and Tailwind foundations — Burger Shop, a Figma homepage build, and multiple Redux/React demos, with an embedded LLM UI copilot.",
    tags: ["Web", "Full Stack", "AI Integration", "Creative", "React", "Next.js", "Tailwind"],
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnrD0vetU8JHnj5mX5cslfs9aK_726-eXqxRiDiHgHyOQQTjb5hgx7gpO4FrUgOeNKfL8Vx8NjcIT-7BNa7WKiQ4kIHOA28tkVLEmBYAtUH0OrF4tYJ1EvANTstQ0iEM2OJ-sAPZNxHPyAZfERviu92htztUPRS2z8xKxfIKcjPiVShS58zebLRaLxCSsfpAm5cuRant1YFRfpwaZGV-0f2_MEPlTgcN6LjFEE2hqS81ylCDIKGxgjweKb9RyVFJft68c3tBzlqGWX",
    liveUrl: "https://burger-shope.vercel.app/",
    types: ["Web", "Full Stack", "AI-Integrated"],
    challenge:
      "Demonstrate fluency with the core web frontend stack that underpins all mobile and AI work — componentization, state, routing, SSR, and styling — as a single coherent surface rather than six disconnected demos.",
    impactScore1: "6",
    impactLabel1: "Deployed Web Builds",
    impactScore2: "LLM",
    impactLabel2: "UI Copilot Integration",
    architecture: [
      {
        icon: "widgets",
        title: "Component-Driven React",
        description:
          "Strict component-driven architecture with typed props, colocated styles, and Redux Toolkit for shared state — the same patterns scaled later into the React Native case studies."
      },
      {
        icon: "bolt",
        title: "Next.js SSR + Routing",
        description:
          "Next.js App Router for SSR, image optimization, and SEO — used for the Figma homepage build and this portfolio itself."
      },
      {
        icon: "palette",
        title: "Tailwind Design System",
        description:
          "Utility-first Tailwind with a custom design-token layer for consistent typography, spacing, and theme tokens across every demo."
      }
    ],
    stack: ["React", "Next.js", "Redux Toolkit", "TypeScript", "Tailwind CSS", "Ant Design"],
    techStack: {
      frontend: ["React", "Next.js (App Router)", "Redux Toolkit", "TypeScript", "Tailwind CSS", "Ant Design"],
      backend: ["Node.js LLM proxy (for UI copilot)", "REST endpoints"],
      devops: ["Vercel (primary)", "Netlify (legacy demos)", "GitHub Actions"],
      ai: [
        "LLM UI copilot (component-aware Q&A)",
        "Prompt engineering with page context"
      ]
    },
    stats: [
      { icon: "public", value: "Vercel", label: "Primary Hosting" },
      { icon: "memory", value: "Redux", label: "State Management" },
      { icon: "speed", value: "SSR", label: "Next.js Rendering" }
    ],
    aiCapabilities: [
      {
        icon: "chat",
        title: "LLM UI Copilot",
        description:
          "An embedded assistant that answers component-level questions about the live demo, grounded by the current page context — practical, on-site LLM integration rather than decorative."
      },
      {
        icon: "code",
        title: "Prompt-Engineered Explanations",
        description:
          "Context-aware prompts that summarize the component tree or Redux slice relevant to whatever the user is looking at."
      }
    ],
    contribution:
      "Authored all six web demos, consolidated them into a single coherent case study, and wired the LLM UI copilot through a Node.js proxy that attaches page context to each prompt.",
    deployment:
      "Primary surface on Vercel (Burger Shop, Figma homepage, this portfolio). Legacy demos on Netlify. LLM copilot proxy on Render.",
    outcome:
      "A single coherent web foundation story — the same patterns that scale up into the eight mobile case studies above."
  }
];
