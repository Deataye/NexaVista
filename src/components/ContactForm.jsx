"use client"; 

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const ContactForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Image animation (Slide in from left)
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // Form animation (Fade in from right)
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

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
    <section ref={sectionRef} className={`bg-[#ECE4D9] text-[#ECE4D9] py-20 ${poppins.className}`}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
        {/* Left - Image */}
        <div ref={imageRef} className="lg:w-1/2 hidden lg:flex justify-end">
          <Image
            src="/request-a-call-back-im1.jpg"
            alt="Contact"
            width={500}
            height={300}
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right - Contact Form */}
        <div ref={formRef} className="lg:w-1/2 bg-[#ECE4D9] text-[#1A1816] p-8 rounded-lg shadow-md">
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
                className="w-full px-4 py-2 text-[16px] border rounded-md bg-[#F5EFE6] text-[#1A1816] transition-transform focus:scale-105"
              />
              <input
                type="text"
                placeholder="Phone"
                required
                className="w-full px-4 py-2 border text-[16px] rounded-md bg-[#F5EFE6] text-[#1A1816] transition-transform focus:scale-105"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border rounded-md text-[16px] bg-[#F5EFE6] text-[#1A1816] mb-4 transition-transform focus:scale-105"
            />

            <textarea
              placeholder="Messages"
              required
              className="w-full px-4 py-2 border text-[16px] rounded-md bg-[#F5EFE6] text-[#1A1816] h-24 mb-4 transition-transform focus:scale-105"
            ></textarea>

            {/* Captcha */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#1A1816] text-[16px] leading-[29px] font-bold">{captcha.question}</span>
              <input
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                required
                className="w-16 px-2 py-1 border rounded-md bg-[#F5EFE6] text-[#1A1816] transition-transform focus:scale-105"
              />
              <button
                type="button"
                onClick={() => {
                  gsap.to(".captcha-refresh", { rotation: "+=360", duration: 0.5 });
                  setCaptcha(generateCaptcha());
                }}
                className="text-sm text-[#3F3A34] font-semibold captcha-refresh transition-transform"
              >
                🔄
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#3F3A34] text-[#ECE4D9] text-[16px] leading-[26px] font-medium px-6 py-2 rounded-md w-full
              transition-all duration-300 hover:bg-[#6B6159] hover:text-[#1A1816]"
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
