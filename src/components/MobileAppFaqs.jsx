"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const MobileAppFaqs = () => {
  const faqs = [
    {
      question: "What Sets NexaVista Technologies Apart in Mobile App Development?",
      answer: "At NexaVista Technologies, we specialize in creating innovative, high-performance mobile apps for iOS, Android, and cross-platform solutions. Our focus on user experience, scalability, and cutting-edge technology sets us apart.",
    },
    {
      question: "How Long Does it Take to Develop a Mobile App?",
      answer: "The development timeline varies based on the complexity and features of the app. A simple app may take a few weeks, while more complex projects can take several months to complete.",
    },
    {
      question: "Do You Offer Post-Launch Support for Mobile Apps?",
      answer: "Yes, NexaVista Technologies provides post-launch support, including regular updates, maintenance, and performance monitoring to ensure your app remains secure and functions smoothly.",
    },
    {
      question: "Can You Share Examples of Your Previous Mobile Apps?",
      answer: "Certainly! We have a portfolio showcasing successful mobile apps we've developed for various industries. Contact us to learn more about our past projects and success stories.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 bg-[#ECE4D9] text-center ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-[46px] text-[#1a1816] leading-[55px] font-bold mb-2">Mobile App FAQs</h2>
        <p className="text-[#6b6159] text-[16px] leading-[24px] mb-8">Common questions about our mobile app development services</p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-[#1a1816] text-left font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 text-[#6b6159] border-t">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppFaqs;
