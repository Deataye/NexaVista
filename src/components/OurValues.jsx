"use client";

import { Poppins } from "next/font/google";
import { FaLightbulb, FaClipboardList, FaSmile, FaShieldAlt, FaSync } from "react-icons/fa";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const values = [
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "To be a top mobile app development company, we prioritize innovation. Staff engage in 'Ideation Competitions' to encourage creative thinking.",
    color: "#E9C46A",
  },
  {
    icon: FaClipboardList,
    title: "Transparency",
    description:
      "Clients stay informed about their projects, eliminating risks in software outsourcing. It's like getting in-house work with clear communication.",
    color: "#F4A261",
  },
  {
    icon: FaSmile,
    title: "Client Satisfaction",
    description:
      "Our team focuses on complete client satisfaction by consistently delivering high-quality work within budget and deadlines.",
    color: "#2A9D8F",
  },
  {
    icon: FaShieldAlt,
    title: "Extensive Services",
    description:
      "We ensure our team stays updated with regular training sessions, helping employees grow in knowledge and skills over time.",
    color: "#E76F51",
  },
  {
    icon: FaSync,
    title: "Continuous Development",
    description:
      "We maintain a culture of learning and improvement, ensuring our processes and skills evolve with technological advancements.",
    color: "#264653",
  },
];

const OurValues = () => {
  return (
    <section className={`py-20 bg-[#1A1816] text-[#ECE4D9] ${poppins.className}`}>
      <div className="container mx-auto  px-6">
        {/* Section Heading */}
        <h2 className="text-[46px] leading-[55px] text-center font-black mb-12">Our Values</h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <div key={index} className="bg-[#3F3A34] p-8 rounded-lg shadow-lg flex flex-col items-start">
              <div className="p-3 rounded-md" style={{ backgroundColor: value.color }}>
                <value.icon size={36} className="text-[#1A1816]" />
              </div>
              <h3 className="text-[22px] font-extrabold mt-4">{value.title}</h3>
              <p className="text-[#ECE4D9] text-[16px] leading-[26px] mt-2">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
