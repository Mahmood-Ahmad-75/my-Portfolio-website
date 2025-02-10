import React from "react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { resume } from "../../assets";

const DownloadResume = () => {
  const handleDownload = () => {
    const mimeType = "image/png";
    const pngData: any = resume;
    const blob = new Blob([pngData], { type: mimeType });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `Mahmood'sResume.png`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
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
