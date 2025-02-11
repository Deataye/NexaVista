"use client"; // Required for React Hooks in Next.js App Router

import { useState } from "react";
import Image from "next/image";

const ContactForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return { question: `${num1} + ${num2} ?`, answer: num1 + num2 };
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (parseInt(captchaInput) !== captcha.answer) {
      alert("Incorrect Captcha, Try Again!");
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      return;
    }
    alert("Message Sent Successfully!");
  }

  return (
    <section className="bg-[#ECE4D9] text-[#ECE4D9] py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-">
        {/* Left - Image */}
        <div className="lg:w-1/2 hidden lg:flex justify-end">
          <Image
            src="/request-a-call-back-im1.jpg"
            alt="Contact"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right - Contact Form */}
        <div className="lg:w-1/2 bg-[#ECE4D9] text-[#1A1816] p-8 rounded-lg ">
          <h2 className="text-[46px] leading-[55px] font-black mb-4">What Can We Do For You?</h2>
          <p className="text-[16px] leading-[29px] font-normal mb-6">
            If you have any questions or need assistance, feel free to contact us and send us a message.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full px-4 py-2 text-[16px] border rounded-md bg-[#F5EFE6] text-[#1A1816]"
              />
              <input
                type="text"
                placeholder="Phone"
                required
                className="w-full px-4 py-2 border text-[16px] rounded-md bg-[#F5EFE6] text-[#1A1816]"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border rounded-md text-[16px] bg-[#F5EFE6] text-[#1A1816] mb-4"
            />

            <textarea
              placeholder="Messages"
              required
              className="w-full px-4 py-2 border text-[16px] rounded-md bg-[#F5EFE6] text-[#1A1816] h-24 mb-4"
            ></textarea>

            {/* Captcha */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#1A1816] text-[16px] leading-[29px]  font-bold">{captcha.question}</span>
              <input
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                required
                className="w-16 px-2 py-1 border rounded-md bg-[#F5EFE6] text-[#1A1816]"
              />
              <button
                type="button"
                onClick={() => setCaptcha(generateCaptcha())}
                className="text-sm text-[#3F3A34] font-semibold"
              >
                🔄
              </button>
            </div>

            <button
              type="submit"
              className="bg-[#3F3A34] text-[#ECE4D9] text-[16px] leading-[26px] font-medium px-6 py-2 rounded-md  w-full"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
