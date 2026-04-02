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

export interface ProjectDetail {
  id: number;
  title: string;
  subtitle: string;
  heroHighlight: string;
  heroDescription: string;
  tags: string[]; // e.g. "React Native", "Firebase"
  imgSrc: string; // The primary image for the grid and the hero
  liveUrl: string; // Live project link
  
  challenge: string;
  impactScore1: string;
  impactLabel1: string;
  impactScore2: string;
  impactLabel2: string;

  architecture: ArchitectureItem[];
  stack: string[]; // List of technologies
  stats: ProjectStats[];
}

export const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: "MyLera",
    subtitle: "Case Study • Fitness & Wellness",
    heroHighlight: "App",
    heroDescription: "A hyper-personalized fitness and wellness cross-platform app integrating iOS/Android health data with GPT API for vitals monitoring and AI-powered health imbalance detection.",
    tags: ["React Native", "Firebase", "GPT API", "Redux Toolkit", "HealthKit"],
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLWcZ78TDu6GgP3hxmbTR6QJRqI11sKRu9Cmgm84-pp098bd0uZQ-kesd4KwchlcJiGKz_GvMvcieUCWlk2T54_PTJvHqdqYTGNQdLxHdstyhw-ga66WSWV9a_WJzN8Xf61XtE4YUS9WbP0TAi5HmbhZSOs_aZBMkClXoi3XI_FtHoqNN-zLaiAwtqxYvAAF3ilM1AI1jPS3HMxuEZfj-4LeXF0gXrcN5ZhSicYsoRM_kMgEFe66rzDvOCcv6INX5WaRJQaDb7s3QI",
    liveUrl: "#",
    challenge: "Most fitness apps offer generic routines that fail to adapt to a user's real-time health state. We needed to synthesize iOS HealthKit and Android health data into actionable, GPT-powered coaching that monitors vitals and flags imbalances conversationally.",
    impactScore1: "94%",
    impactLabel1: "User Retention Rate",
    impactScore2: "12ms",
    impactLabel2: "API Response Latency",
    architecture: [
      {
        icon: "psychology",
        title: "GPT API Integration",
        description: "Implemented a custom prompt engineering layer for GPT API to act as a health coach. The system analyzes historical vitals, sleep data, and activity logs to detect imbalances and generate personalized recommendations."
      },
      {
        icon: "sync_alt",
        title: "Cross-Platform Health Syncing",
        description: "Real-time bidirectional syncing with Apple HealthKit and Google Fit. Engineered a robust data ingestion pipeline normalizing diverse health metrics into a unified schema for the AI engine."
      },
      {
        icon: "trophy",
        title: "Redux Toolkit State Management",
        description: "Centralized global state with Redux Toolkit for managing health data, user sessions, and AI responses — ensuring consistent, scalable performance across iOS and Android.",
        isImageBlock: true,
        imageAlt: "Fitness App UI",
        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnrD0vetU8JHnj5mX5cslfs9aK_726-eXqxRiDiHgHyOQQTjb5hgx7gpO4FrUgOeNKfL8Vx8NjcIT-7BNa7WKiQ4kIHOA28tkVLEmBYAtUH0OrF4tYJ1EvANTstQ0iEM2OJ-sAPZNxHPyAZfERviu92htztUPRS2z8xKxfIKcjPiVShS58zebLRaLxCSsfpAm5cuRant1YFRfpwaZGV-0f2_MEPlTgcN6LjFEE2hqS81ylCDIKGxgjweKb9RyVFJft68c3tBzlqGWX"
      }
    ],
    stack: ["React Native", "Redux Toolkit", "Firebase Auth & Firestore", "GPT API", "Apple HealthKit", "Google Fit"],
    stats: [
      { icon: "speed", value: "99.9%", label: "Uptime Reliability" },
      { icon: "memory", value: "4.2s", label: "Avg Session Depth" },
      { icon: "cloud_done", value: "200k+", label: "Health Records Synced" }
    ]
  },
  {
    id: 2,
    title: "Pharmed Pulse",
    subtitle: "Case Study • Pharmaceutical AI",
    heroHighlight: "Platform",
    heroDescription: "An AI-driven pharmaceutical mobile platform integrating STS and text-to-text APIs for automated interactions, real-time messaging, and intelligent appointment scheduling.",
    tags: ["React Native", "STS API", "Text-to-Text AI", "Firebase", "Redux"],
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEQMcx6I9lnTej2OVpMtmu8t9TX8Ao-SxOicPQDfMfsYFX9fAxm4Lj42Yz-rW2vvXGRPXaEAy1NUIt3UxR09V1VMoTLBi_Dpn0XEH_Pjwgh4uZf8FVxo19r_itsOism-A-dDe1fuxAi9XuCA2kZmtfJ37jE4qjBsJjBaOrxfkS9yBMeHCl5EqpkmecSXcw20RWRaWLtyY5wvZxtk6gqU-XGmo1iYJH5SOlOEB5-e_x64alrdfkggoTBpLNmlgGEOdrc4e87YUlsUcD",
    liveUrl: "#",
    challenge: "Pharmaceutical interactions require precise, AI-assisted communication between patients and providers. The app needed automated scheduling logic, real-time chat, and STS voice interactions — all working seamlessly on both iOS and Android.",
    impactScore1: "3x",
    impactLabel1: "Faster Patient Interaction",
    impactScore2: "100%",
    impactLabel2: "Scheduling Automation",
    architecture: [
      { icon: "record_voice_over", title: "STS API Voice Integration", description: "Integrated Speech-to-Text APIs for hands-free pharmaceutical queries, enabling patients to interact with the platform using voice commands for prescription lookups and appointment booking." },
      { icon: "chat", title: "Real-Time Messaging", description: "Built a Firebase-powered real-time chat system connecting patients with pharmacists, featuring read receipts, typing indicators, and message history persistence." },
      { icon: "calendar_month", title: "Automated Scheduling Logic", description: "Developed intelligent appointment scheduling with conflict detection, automated reminders, and rescheduling flows using Firebase Cloud Functions.", isImageBlock: true, imageAlt: "Pharmed Pulse UI", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnrD0vetU8JHnj5mX5cslfs9aK_726-eXqxRiDiHgHyOQQTjb5hgx7gpO4FrUgOeNKfL8Vx8NjcIT-7BNa7WKiQ4kIHOA28tkVLEmBYAtUH0OrF4tYJ1EvANTstQ0iEM2OJ-sAPZNxHPyAZfERviu92htztUPRS2z8xKxfIKcjPiVShS58zebLRaLxCSsfpAm5cuRant1YFRfpwaZGV-0f2_MEPlTgcN6LjFEE2hqS81ylCDIKGxgjweKb9RyVFJft68c3tBzlqGWX" }
    ],
    stack: ["React Native", "STS API", "Text-to-Text AI", "Firebase", "Redux Toolkit", "TypeScript"],
    stats: [
      { icon: "mic", value: "STS", label: "Voice Interaction" },
      { icon: "chat", value: "Real-time", label: "Messaging System" },
      { icon: "event", value: "100%", label: "Scheduling Automated" }
    ]
  },
  {
    id: 3,
    title: "Ventally",
    subtitle: "Case Study • Mental Health",
    heroHighlight: "App",
    heroDescription: "A mental health support platform featuring mood tracking, emotional trend charts, peer support communities, and integrated chat and call capabilities.",
    tags: ["React Native", "Firebase", "Redux Toolkit", "Mood Analytics", "WebRTC"],
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD49m88B2mZKv3tbBNYXGL0vmilfeRuVxyuVF9GlDuI9C-0kjoWYHh67j7Q5Wk-1xZyN09WAHNAiu3nZuAADTvcpFXsSMAWy2KRdZpgsHL3EYStG27hv4v0tig3TtARsC2gKF5BXLV2A__UU2gr1mczY9YNFlvSew_7NZnjSNng1A9mZL_u3Vq9jbtdS3_UFSoXX53cnl9Jj9dpBHqn4xKL12YSBC1vH3sTNSVM0PSFQBmJwqiRR-8sFePokSP6OlG1Yjz_PL16LVXk",
    liveUrl: "#",
    challenge: "Mental health apps need delicate, privacy-first UX with rich emotional tracking. The challenge was building intuitive mood-logging flows, meaningful trend visualizations, and real-time peer support without compromising user privacy or performance.",
    impactScore1: "Sub 50ms",
    impactLabel1: "Chat Delivery Latency",
    impactScore2: "2.4x",
    impactLabel2: "User Engagement Increase",
    architecture: [
      { icon: "mood", title: "Mood Tracking System", description: "Built a daily mood-logging system with customizable emotional states, notes, and tags. Data is persisted in Firestore and visualized as trend charts using React Native chart libraries." },
      { icon: "analytics", title: "Emotional Trend Charts", description: "Developed interactive chart interfaces translating raw mood data into weekly/monthly emotional trend lines, helping users and support guides understand patterns over time." },
      { icon: "call", title: "Chat & Call Capabilities", description: "Integrated real-time chat via Firebase and voice/video call features for user-to-support-guide sessions.", isImageBlock: true, imageAlt: "Ventally Mental Health UI", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnrD0vetU8JHnj5mX5cslfs9aK_726-eXqxRiDiHgHyOQQTjb5hgx7gpO4FrUgOeNKfL8Vx8NjcIT-7BNa7WKiQ4kIHOA28tkVLEmBYAtUH0OrF4tYJ1EvANTstQ0iEM2OJ-sAPZNxHPyAZfERviu92htztUPRS2z8xKxfIKcjPiVShS58zebLRaLxCSsfpAm5cuRant1YFRfpwaZGV-0f2_MEPlTgcN6LjFEE2hqS81ylCDIKGxgjweKb9RyVFJft68c3tBzlqGWX" }
    ],
    stack: ["React Native", "Firebase Auth & Firestore", "Redux Toolkit", "TypeScript", "React Native Charts"],
    stats: [
      { icon: "mood", value: "Daily", label: "Mood Logging" },
      { icon: "trending_up", value: "7/30-day", label: "Trend Analysis" },
      { icon: "support_agent", value: "Live", label: "Chat & Call Support" }
    ]
  },
  {
    id: 4,
    title: "Inventory Management",
    subtitle: "Case Study • B2B Enterprise",
    heroHighlight: "App",
    heroDescription: "A B2B mobile inventory management app for wholesalers and retailers featuring Role-Based Access Control (RBAC) and Stripe payment integration.",
    tags: ["React Native", "Redux Toolkit", "Stripe", "RBAC", "Firebase"],
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjQRxRiaVLhubfnvsgn8XdKPvJHYZWJ-FVlbvtaQHXyPMNG2k0DqcZa5NggxJtt6KFIOQLQ3lKaXB_g2qQwHLczyxFg9FftVq2NxGn-Ame6dc5xzyA4Xr-KTWnDcl5b0TGzaWV0d4VSKI0iNWWc9fgKfk4RQ3N2ggiiYNQ5Y8IgodDYGghHkZyd75R0U27Iy4Ca7xQAavyn4Tl-aqPOicS6zT-L_9AMHXJCNdscUgOlox-XYicwGKwk6RBczIA-_4TuWEodqZt8tSc",
    liveUrl: "#",
    challenge: "Building a single mobile app serving two distinct user roles (wholesalers and retailers) — with strict access boundaries, inventory visibility controls, and a secure payment flow — required careful architecture for RBAC and state isolation.",
    impactScore1: "RBAC",
    impactLabel1: "Dual Role Architecture",
    impactScore2: "Stripe",
    impactLabel2: "Secure Payment Integration",
    architecture: [
      { icon: "admin_panel_settings", title: "Role-Based Access Control", description: "Implemented a flexible RBAC system differentiating wholesaler and retailer views, permissions, and data access — enforced at both Firebase rules and application state levels." },
      { icon: "payments", title: "Stripe Payment Integration", description: "Integrated Stripe SDK for secure in-app payments, including invoice generation, transaction history, and real-time payment status updates for B2B orders." },
      { icon: "inventory_2", title: "Inventory Module Architecture", description: "Built distinct inventory modules for each role — wholesalers manage bulk stock and pricing tiers, retailers track individual SKUs and place orders.", isImageBlock: true, imageAlt: "Inventory App UI", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnrD0vetU8JHnj5mX5cslfs9aK_726-eXqxRiDiHgHyOQQTjb5hgx7gpO4FrUgOeNKfL8Vx8NjcIT-7BNa7WKiQ4kIHOA28tkVLEmBYAtUH0OrF4tYJ1EvANTstQ0iEM2OJ-sAPZNxHPyAZfERviu92htztUPRS2z8xKxfIKcjPiVShS58zebLRaLxCSsfpAm5cuRant1YFRfpwaZGV-0f2_MEPlTgcN6LjFEE2hqS81ylCDIKGxgjweKb9RyVFJft68c3tBzlqGWX" }
    ],
    stack: ["React Native", "Redux Toolkit", "Stripe SDK", "Firebase", "TypeScript"],
    stats: [
      { icon: "group", value: "2 Roles", label: "Wholesaler & Retailer" },
      { icon: "lock", value: "RBAC", label: "Access Control" },
      { icon: "payments", value: "Stripe", label: "Payment Processing" }
    ]
  },
  {
    id: 5,
    title: "ULEXE",
    subtitle: "Case Study • Salon Booking",
    heroHighlight: "App",
    heroDescription: "A salon discovery and booking mobile app with map-based salon browsing, real-time appointment scheduling, and seamless booking flow for iOS and Android.",
    tags: ["React Native", "Maps API", "Firebase", "Redux Toolkit", "Geolocation"],
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBip8Km4M05J2I7d25oQe2X8naN4ggHVurNq5ui8U_Z2Vr-BqfUwUTZXI6ZpRsftS9osnT9UfI63hUst2g3vrq-7jMbUJxfhGZnd86rI1JCMlX_4TuxHkb6X_DgJSMJ9jbgvBxWe41sxGiljJhpHyTMkg_-CNiZVHx77YZtGyQmTWV3kjXD7xSgRZ9Tv3EtdSaBkjU7OcgXfDP2gWjWGCk-xIqOg9NWGf2i84ZE2wF3DDgwG2wMBlBlPxx_DycFz8lo6dg8YEkfXUSr",
    liveUrl: "#",
    challenge: "Users needed an intuitive way to find nearby salons, browse services, check availability, and book appointments — all within a map-first mobile experience that works seamlessly offline and in real-time.",
    impactScore1: "Map-first",
    impactLabel1: "Salon Discovery UX",
    impactScore2: "Real-time",
    impactLabel2: "Booking Availability",
    architecture: [
      { icon: "map", title: "Map-Based Salon Discovery", description: "Implemented interactive maps using React Native Maps and Geolocation API to display nearby salons with custom markers, distance filtering, and cluster grouping for dense areas." },
      { icon: "event_available", title: "Real-Time Appointment Booking", description: "Built a real-time slot availability engine powered by Firebase, showing up-to-the-minute open slots and instantly confirming bookings with push notification receipts." }
    ],
    stack: ["React Native", "React Native Maps", "Geolocation API", "Firebase", "Redux Toolkit", "TypeScript"],
    stats: [
      { icon: "place", value: "GPS", label: "Location-Based Discovery" },
      { icon: "event", value: "Real-time", label: "Slot Availability" },
      { icon: "notifications", value: "Push", label: "Booking Notifications" }
    ]
  },
  {
    id: 6,
    title: "CTLFX",
    subtitle: "Case Study • Trading",
    heroHighlight: "App",
    heroDescription: "A secure trading mobile app with real-time local currency conversion for deposits/withdrawals, and institutional-grade wallet interface design for iOS and Android.",
    tags: ["React Native", "Forex API", "Redux Toolkit", "Firebase", "TypeScript"],
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBAIAiu0y7WjGLkv4J_PMPdv_vlEeSlSk0rACcVpEjGZ4PdLhOkyDJ0b6fc5Ij95toxmqTyU-dinlEvZ9KMyD-ZIeglWg-4XwI2p59dy-dxieWkpNnOBr7fQDMqABdy7-eUHRnkDLVfaDeiw6r61tEgjDWK79MdupkUJdmSGoUCRmZUwtv_7DAFsKFKJv9c0RK8yBcaXt_SIu_ehpHYwOMz5aGWOW7jm1nvABr3xziodvUpFvy0Oc0pb1xjK0BcdATqXaYjSpm8EHY",
    liveUrl: "#",
    challenge: "Trading apps demand ultra-precise financial calculations, secure wallet management, and real-time currency conversion — all in a mobile-first UX that inspires trust and clarity for high-value transactions.",
    impactScore1: "Real-time",
    impactLabel1: "Currency Conversion",
    impactScore2: "Secure",
    impactLabel2: "Wallet Architecture",
    architecture: [
      { icon: "currency_exchange", title: "Real-Time Currency Conversion", description: "Integrated live forex rate APIs to enable accurate local currency conversion for deposits and withdrawals, updating rates in real-time with zero latency tolerance." },
      { icon: "account_balance_wallet", title: "Secure Wallet Interface", description: "Designed and implemented a secure wallet UI with balance overviews, transaction ledgers, deposit/withdrawal flows, and PIN/biometric authentication layers." }
    ],
    stack: ["React Native", "Forex/Currency API", "Redux Toolkit", "Firebase", "TypeScript", "Biometric Auth"],
    stats: [
      { icon: "currency_exchange", value: "Live", label: "FX Rate Updates" },
      { icon: "lock", value: "Biometric", label: "Wallet Security" },
      { icon: "account_balance", value: "Multi-currency", label: "Deposit & Withdrawal" }
    ]
  },
  {
    id: 7,
    title: "Project Runner",
    subtitle: "Case Study • Construction Logistics",
    heroHighlight: "App",
    heroDescription: "A construction logistics mobile app for task management with material assignment logic, precise site mapping, and coordinated field team workflows.",
    tags: ["React Native", "Maps API", "Redux Toolkit", "Firebase", "TypeScript"],
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCx8HaEIlzQ5lpHsPmjHYA-s5h_uMRPPAWvSYhqOBkdWGaImkCb8E1ySbfGRj0PBVk6_d8LQHqdvJwC0tcHPsI-C9a1_nbSfD9ezGYwjVQ4rdz_c2D-5iQ7leT49rAGUS2fam04zC5R545e0PDsHvvChZAjKV9noDzVYXwGImDefoPBE6cqf2mMw_q5QFt6aj520ifDdrxoIWffIRe3liVh1dwHcPieaxZcCvnjKe5c2owpn5CXlpqXpEN6IH-F99ejB3awA6ZJ8NR5",
    liveUrl: "#",
    challenge: "Construction field teams needed a mobile-first tool to manage tasks, assign materials to specific workers, and map job sites accurately — without relying on constant internet connectivity.",
    impactScore1: "Site-level",
    impactLabel1: "Mapping Precision",
    impactScore2: "Real-time",
    impactLabel2: "Task Assignment",
    architecture: [
      { icon: "construction", title: "Logistics Task Management", description: "Built a hierarchical task management system supporting site supervisors assigning work orders with material lists, deadlines, and worker assignments — all synced via Firebase." },
      { icon: "map", title: "Precise Site Mapping", description: "Integrated React Native Maps with custom polygon drawing tools, enabling supervisors to mark construction zones, define task boundaries, and track worker locations on-site." }
    ],
    stack: ["React Native", "React Native Maps", "Firebase", "Redux Toolkit", "TypeScript"],
    stats: [
      { icon: "construction", value: "Multi-site", label: "Task Coordination" },
      { icon: "place", value: "GPS Precision", label: "Site Mapping" },
      { icon: "assignment_turned_in", value: "Real-time", label: "Material Assignment" }
    ]
  },
  {
    id: 8,
    title: "Shoppeo",
    subtitle: "Case Study • E-Commerce",
    heroHighlight: "App",
    heroDescription: "A full-featured e-commerce mobile app with separate buyer/seller role flows, order management systems, product listings, and real-time order tracking.",
    tags: ["React Native", "Firebase", "Redux Toolkit", "Stripe", "TypeScript"],
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNQSL82PFzCCLOuNQgL7YgX12Q7OFFuApNM-q3XHgCC2RTFdewuVGdbV8yde-WQum4maoRGBC_riTXFBKGN_waOO-wnjGafgG3IDA8KHeuzWQV3ssVW3qMl1REM7XvhXnNHxtGtGK4D07gsBIdYIPrPO3MQXTkWMPDOA2pkcKVhMQsNuxziTNgIJJM_hjbTZ-K-ZVEHvksgq0z93vEmHLmQtOqqgs6sr2ufscqQCJaeavj9KIsyUvEZuYFNErdBlm8evw61TUsFyh-",
    liveUrl: "#",
    challenge: "A single mobile app serving two distinct personas — buyers and sellers — required isolated navigation stacks, role-specific dashboards, and a unified order management layer keeping both in sync without data leakage between roles.",
    impactScore1: "Dual-role",
    impactLabel1: "Buyer & Seller UX",
    impactScore2: "Real-time",
    impactLabel2: "Order Management",
    architecture: [
      { icon: "storefront", title: "Separate Buyer/Seller Flows", description: "Implemented isolated navigation stacks and dashboards for buyers (product browse, cart, checkout, tracking) and sellers (inventory management, order fulfillment, earnings overview)." },
      { icon: "local_shipping", title: "Order Management System", description: "Built a real-time order lifecycle management system — from placement to fulfillment — with status updates, delivery tracking, and notification triggers at each stage." }
    ],
    stack: ["React Native", "Firebase Auth & Firestore", "Redux Toolkit", "Stripe SDK", "TypeScript"],
    stats: [
      { icon: "shopping_cart", value: "2 Roles", label: "Buyer & Seller" },
      { icon: "local_shipping", value: "Real-time", label: "Order Tracking" },
      { icon: "payments", value: "Stripe", label: "Secure Checkout" }
    ]
  }
];

