import React from "react";
import { Progress } from "antd";

const MainSkills = () => {
  const textStyles = "text-[--color-secondary] font-bold text-[20px]";
  const twoColors = { "0%": "var(--color-ember)", "100%": "var(--color-amber)" };
  return (
    <div data-aos='zoom-in-down' className="mt-8 flex flex-col gap-5">
     

      <div>
        <p className={textStyles}>React Native (iOS & Android)</p>
        <Progress showInfo={false} size={["100%", 20]} percent={95} strokeColor={"var(--color-ember)"} />
      </div>
      <div>
        <p className={textStyles}>JavaScript & TypeScript</p>
        <Progress showInfo={false} size={["100%", 20]} percent={92} strokeColor={"var(--color-ember)"} />
      </div>
      <div>
        <p className={textStyles}>Redux Toolkit & State Management</p>
        <Progress showInfo={false} size={["100%", 20]} percent={90} strokeColor={"var(--color-ember)"} />
      </div>
      <div>
        <p className={textStyles}>Firebase & API Integrations</p>
        <Progress showInfo={false} size={["100%", 20]} percent={88} strokeColor={"var(--color-ember)"} />
      </div>
      <div>
        <p className={textStyles}>AI / STS / Voice Feature Development</p>
        <Progress showInfo={false} size={["100%", 20]} percent={82} strokeColor={"var(--color-ember)"} />
      </div>
    </div>
  );
};

export default MainSkills;
