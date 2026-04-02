import React from "react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const DownloadResume = () => {
  const handleDownload = () => {
    window.open("/Mahmood_Ahmad_CV.pdf", "_blank");
  };
  return (
    <Button
       onClick={handleDownload}
      className=" bg-[--color-primary] text-white  hover:!text-white text-[18px] md:w-[250px] w-full text-center h-[50px] font-semibold  "
      shape="round"
      icon={<DownloadOutlined />}
    >
      Download CV
    </Button>
  );
};

export default DownloadResume;
