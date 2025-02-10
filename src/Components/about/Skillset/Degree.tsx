"use client";
import React, { useState } from "react";
import { Button, Modal, Popover } from "antd";
import Image from "next/image";
import { resume } from "../../../assets";
  const Degree = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Popover
        content={<a className="text-[15px] font-semibold" onClick={() => setIsModalOpen(true)}>My-Degree.pdf</a>}
        
      >
        <Button
          className=" text-[15px] w-[150px]   text-[--color-primary] border-[--color-primary] focus:text-white hover:!text-white hover:!bg-[--color-primary]   focus:!bg-[--color-primary]   text-center   h-[35px]   font-semibold  "
          shape="round"
        >
          view
        </Button>
      </Popover>{" "}
      <Modal className="h-[500px]"
         footer={<></>}
        
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
     
       <Image src={resume} alt="my cv"/>
        </Modal>
    </div>
  );
};

export default Degree;
