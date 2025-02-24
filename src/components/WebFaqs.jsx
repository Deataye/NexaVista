"use client";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const WebFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const faqRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      }
    );

    faqRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        }
      );
    });
  }, []);

  const faqs = [
    {
      question: "What Sets Apptechies Apart in Web Development?",
      answer: "Apptechies stands out due to our expertise in agile development, customized solutions, and commitment to client success. We focus on delivering scalable, high-performance web applications tailored to business needs.",
    },
    {
      question: "How Long Does it Take to Develop a Web Application?",
      answer: "The timeline varies based on complexity, features, and project scope. A simple web application may take a few weeks, while larger projects can span several months.",
    },
    {
      question: "Do You Provide Post-Launch Support?",
      answer: "Yes, we offer post-launch support, including maintenance, updates, and performance monitoring to ensure your application runs smoothly.",
    },
    {
      question: "Can I See Examples of Your Previous Work?",
      answer: "Absolutely! We have a portfolio showcasing successful web applications we've developed for various industries. Contact us to learn more!",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className={`py-16 bg-[#ECE4D9] text-center ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-[46px] text-[#1a1816] leading-[55px] font-bold mb-2">Web Development FAQs</h2>
        <p className="text-[#6b6159] text-[16px] leading-[24px] mb-8">Common questions about our web development services</p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqRefs.current[index] = el)}
              className="mb-4 bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-[#1a1816] text-left font-semibold transition-all duration-300 hover:bg-[#E0D5C8]"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px] p-4 border-t text-[#6b6159]" : "max-h-0 p-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebFaqs;
