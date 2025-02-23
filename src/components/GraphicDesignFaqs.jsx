"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const GraphicDesignFaqs = () => {
  const faqs = [
    {
      question: "What Sets NexaVista Technologies Apart in Graphic Design?",
      answer:
        "NexaVista Technologies specializes in creating visually compelling brand identities, marketing materials, and UI/UX designs. Our expertise in digital and print design ensures that your brand stands out with creativity and consistency.",
    },
    {
      question: "How Long Does It Take to Complete a Graphic Design Project?",
      answer:
        "The timeline varies based on the project complexity. Simple designs like social media graphics can be completed in a few days, while full branding or marketing campaigns may take several weeks.",
    },
    {
      question: "Do You Offer Revisions on Designs?",
      answer:
        "Yes! We believe in client satisfaction and offer multiple revision rounds to ensure that the final design aligns with your vision and branding needs.",
    },
    {
      question: "Can You Share Examples of Your Previous Graphic Design Work?",
      answer:
        "Absolutely! We have a portfolio showcasing successful projects in branding, UI/UX, print design, and digital marketing materials. Contact us to learn more!",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 bg-[#ECE4D9] text-center ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-[46px] text-[#1a1816] leading-[55px] font-bold mb-2">Graphic Design FAQs</h2>
        <p className="text-[#6b6159] text-[16px] leading-[24px] mb-8">
          Common questions about our graphic design services
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

export default GraphicDesignFaqs;
