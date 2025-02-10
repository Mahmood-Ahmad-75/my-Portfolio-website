import React from "react";
import { Progress } from "antd";

const MainSkills = () => {
  const textStyles = "text-[--color-secondary] font-bold text-[20px]";
  const twoColors = { "0%": "#108ee9", "100%": "#87d068" };
  return (
    <div data-aos='zoom-in-down' className="mt-8 flex flex-col gap-5">
     

      <div>
        <p className={textStyles}>Web Development & User Interface Design </p>
        <Progress showInfo={false} size={["100%", 20]} percent={90} strokeColor={"##07F"} />
      </div>
      <div >
        <p className={textStyles}> User Experience Design - UI/UX</p>{" "}
        <Progress showInfo={false}	 size={["100%", 20]} percent={85} strokeColor={"##07F"} />
      </div>
      <div>
        <p className={textStyles}>React, Next Development & Redux </p>
        <Progress showInfo={false} size={["100%", 20]} percent={95} strokeColor={"##07F"} />
      </div>
    </div>
  );
};

export default MainSkills;
