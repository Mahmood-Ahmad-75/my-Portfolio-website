"use client";
import React from "react";
import SectionHeader from "../common/SectionHeader";

const ContactUsHeading = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-16 pt-20">
      <SectionHeader
        label="Contact Me"
        titleLead="Let's Build"
        titleAccent="Together"
        description="Full Stack + AI engagements — React Native apps, Node.js backends, LLM and voice integrations. Reach out with the form below or book a free consultation call."
        watermark="CONTACT"
      />
    </div>
  );
};

export default ContactUsHeading;
