"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const DigitalFaqs = () => {
  const faqs = [
    {
      question: "What Makes NexaVista Technologies' Digital Marketing Effective?",
      answer:
        "We take a data-driven approach, leveraging analytics, targeted strategies, and creative execution to ensure measurable growth and engagement for your brand.",
    },
    {
      question: "What Digital Marketing Services Do You Offer?",
      answer:
        "Our services include SEO, social media marketing, email marketing, and paid advertising. Each strategy is tailored to meet your business objectives and maximize ROI.",
    },
    {
      question: "How Long Does It Take to See Results from Digital Marketing?",
      answer:
        "Results vary based on the service. SEO typically takes a few months for significant improvements, while paid ads and social media marketing can drive quicker results.",
    },
    {
      question: "Do You Offer Ongoing Digital Marketing Support?",
      answer:
        "Yes! We provide continuous optimization, performance tracking, and strategy adjustments to keep your digital marketing efforts effective and up-to-date.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 bg-[#ECE4D9] text-center ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-[46px] text-[#1a1816] leading-[55px] font-bold mb-2">Digital Marketing FAQs</h2>
        <p className="text-[#6b6159] text-[16px] leading-[24px] mb-8">
          Common questions about our digital marketing services
        </p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 bg-white shadow-md rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-[#1a1816] text-left font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {openIndex === index && <div className="p-4 text-[#6b6159] border-t">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalFaqs;
