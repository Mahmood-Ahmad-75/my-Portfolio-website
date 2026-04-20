import React from "react";
import { Progress } from "antd";

const MainSkills = () => {
  const textStyles = "text-[--color-secondary] font-bold text-[20px]";

  const skills = [
    { label: "Frontend Engineering (React.js / Next.js)", value: 93 },
    { label: "Mobile Development (React Native — iOS & Android)", value: 95 },
    { label: "Backend Development (Node.js / REST / GraphQL)", value: 88 },
    { label: "DevOps & Deployment (Vercel / Render / Hostinger)", value: 85 },
    { label: "AI Integration (LLM / STS / TTS / Agents)", value: 87 },
    { label: "Prompt Engineering & Structured Outputs", value: 86 },
  ];

  return (
    <div data-aos="zoom-in-down" className="mt-8 flex flex-col gap-5">
      {skills.map((s, idx) => (
        <div key={idx}>
          <p className={textStyles}>{s.label}</p>
          <Progress
            showInfo={false}
            size={["100%", 20]}
            percent={s.value}
            strokeColor={"var(--color-ember)"}
          />
        </div>
      ))}
    </div>
  );
};

export default MainSkills;
