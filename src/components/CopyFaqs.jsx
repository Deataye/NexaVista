"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const CopyFaqs = () => {
  const faqs = [
    {
      question: "What Makes NexaVista Technologies' Copywriting Unique?",
      answer:
        "We specialize in crafting persuasive, high-converting copy that speaks directly to your audience. Our approach focuses on clarity, engagement, and driving measurable results.",
    },
    {
      question: "What Types of Copywriting Services Do You Offer?",
      answer:
        "We provide sales copy, landing pages, email sequences, ad copies, and website content. Each service is tailored to meet your business goals and target audience.",
    },
    {
      question: "How Long Does It Take to Complete a Copywriting Project?",
      answer:
        "Timelines vary based on the project. Short-form content like ad copy can be delivered in a few days, while long-form sales pages or email sequences may take a couple of weeks.",
    },
    {
      question: "Can You Optimize Copy for SEO?",
      answer:
        "Yes! We craft SEO-friendly content that ranks well in search engines while maintaining a natural and persuasive tone to engage readers.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 bg-[#ECE4D9] text-center ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-[46px] text-[#1a1816] leading-[55px] font-bold mb-2">Copywriting FAQs</h2>
        <p className="text-[#6b6159] text-[16px] leading-[24px] mb-8">
          Common questions about our copywriting services
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

export default CopyFaqs;
