"use client";
import { FaSearch, FaPalette, FaCode, FaBug, FaRocket, FaWrench } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const WebDevAgile = () => {
  const steps = [
    {
      title: "Discovery & Planning",
      description:
        "Understanding your business goals, and creating a comprehensive roadmap, including wireframes and technical specifications.",
      icon: <FaSearch className="text-[#6B6159] hover:text-[#3F3A34] transition-colors text-4xl" />,
    },
    {
      title: "Design",
      description:
        "Crafting visually appealing and user-centric designs to enhance the overall user experience.",
      icon: <FaPalette className="text-[#6B6159] hover:text-[#3F3A34] transition-colors text-4xl" />,
    },
    {
      title: "Development",
      description:
        "Bringing the designs to life with clean, efficient, and scalable code.",
      icon: <FaCode className="text-[#6B6159] hover:text-[#3F3A34] transition-colors text-4xl" />,
    },
    {
      title: "Testing",
      description:
        "Rigorous testing to ensure optimal performance, security, and a bug-free user experience.",
      icon: <FaBug className="text-[#6B6159] hover:text-[#3F3A34] transition-colors text-4xl" />,
    },
    {
      title: "Deployment",
      description:
        "Launching your web application and ensuring a smooth transition into the online space.",
      icon: <FaRocket className="text-[#6B6159] hover:text-[#3F3A34] transition-colors text-4xl" />,
    },
    {
      title: "Maintenance",
      description:
        "Providing ongoing support and maintenance to keep your web application running seamlessly.",
      icon: <FaWrench className="text-[#6B6159] hover:text-[#3F3A34] transition-colors text-4xl" />,
    },
  ];

  return (
    <section className={`py-16 bg-[#1A1816] text-[#ECE4D9] text-center ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-[46px] leading-[55px] font-bold mb-4">How We Develop Web Apps Using Agile</h2>
        <p className="text-[16px] leading-[24px] mb-10">
          Our web development process is a carefully crafted journey that ensures your vision is transformed into a fully functional web application:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#ECE4D9]  p-10 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl text-[#1A1816] font-semibold mb-3">{step.title}</h3>
              <p className="text-[#6B6159]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevAgile;
