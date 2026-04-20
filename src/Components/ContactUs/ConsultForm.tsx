"use client";
import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
const { TextArea } = Input;

type FieldType = {
  username?: string;
  email?: string;
  subject?: string;
  description?: string;
  remember?: boolean;
};

/* ── Success Modal ─────────────────────────────────────────── */
const SuccessModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    />

    {/* Card */}
    <div className="relative z-10 bg-[#0D1815] border border-[--color-ember] rounded-2xl p-10 max-w-md w-full flex flex-col items-center text-center shadow-[0_0_60px_rgba(34,205,112,0.15)]">

      {/* Animated checkmark circle */}
      <div className="w-20 h-20 rounded-full border-4 border-[--color-ember] flex items-center justify-center mb-6 animate-[ping_0.4s_ease-out_1] relative">
        <div className="absolute inset-0 rounded-full border-4 border-[--color-ember]" />
        <svg
          className="w-10 h-10 text-[--color-ember]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <p className="text-[--color-ember] font-bold tracking-[0.3em] text-sm uppercase mb-3">
        Message Sent
      </p>
      <h2 className="text-white font-black text-3xl leading-tight mb-3 uppercase tracking-tight">
        Thanks for reaching out!
      </h2>
      <p className="text-white/60 text-base leading-relaxed mb-8">
        I've received your message and will get back to you within <span className="text-white font-semibold">24 hours</span>. Looking forward to connecting.
      </p>

      <button
        onClick={onClose}
        className="w-full h-[50px] rounded-full bg-[--color-ember] text-black font-bold text-[16px] tracking-wide hover:bg-[--color-spark] transition-colors"
      >
        Close
      </button>
    </div>
  </div>
);

/* ── Main Form ─────────────────────────────────────────────── */
const ConsultForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);

  const customMsg = (
    <span className="text-white flex gap-1 items-center">
      <p className="text-[#d33f3f] text-[25px]">*</p>This field is required
    </span>
  );
  const mailMsg = (
    <span className="text-white flex gap-1 items-center">
      <p className="text-[#d33f3f] text-[25px]">*</p>Enter a valid email address
    </span>
  );

  const onFinish = async (values: FieldType) => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        form.resetFields();
        setShowModal(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}

      <div className="bg-transparent md:w-[540px] w-full h-auto rounded-xl">
        <Form
          form={form}
          name="contact"
          className="flex flex-col"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item className="mb-0">
            <Form.Item
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
              name="username"
              rules={[{ required: true, message: customMsg }]}
            >
              <Input className="h-[40px]" placeholder="Name*" />
            </Form.Item>

            <Form.Item
              style={{ display: "inline-block", width: "calc(50% - 8px)", margin: "0 8px" }}
              name="email"
              rules={[{ required: true, type: "email", message: mailMsg }]}
            >
              <Input className="h-[40px]" placeholder="Email*" />
            </Form.Item>
          </Form.Item>

          <Form.Item name="subject">
            <Input className="h-[40px]" placeholder="Subject" />
          </Form.Item>

          <Form.Item
            name="description"
            rules={[{ required: true, message: customMsg }]}
          >
            <TextArea placeholder="How can I help you?*" rows={6} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="text-white font-semibold">
              Subscribe to see the latest updates via the given email address
            </Checkbox>
          </Form.Item>

          {error && (
            <p className="text-red-400 font-semibold mb-4">
              ❌ Something went wrong. Please try again or email me directly.
            </p>
          )}

          <Form.Item>
            <Button
              loading={loading}
              className="rounded-full bg-mint text-[20px] text-white px-[33px] h-[50px] sm:w-[180px] w-full flex justify-center items-center"
              type="primary"
              htmlType="submit"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ConsultForm;
