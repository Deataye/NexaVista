"use client";
import Image from "next/image";
import { FaBullhorn, FaChartLine, FaEnvelopeOpenText, FaUsers } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const DigitalServices = () => {
  const services = [
    {
      title: "Social Media Marketing",
      description:
        "Boost brand engagement with strategic social media campaigns designed to connect with your audience and drive traffic.",
      icon: <FaUsers className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "SEO & Content Marketing",
      description:
        "Improve search rankings and attract organic traffic with optimized content, keyword strategies, and high-quality backlinks.",
      icon: <FaChartLine className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Email Marketing",
      description:
        "Engage and convert leads with targeted email campaigns that nurture relationships and increase customer retention.",
      icon: <FaEnvelopeOpenText className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Paid Advertising",
      description:
        "Maximize ROI with data-driven ad campaigns on Google, Facebook, and more, designed to increase visibility and conversions.",
      icon: <FaBullhorn className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
  ];

  return (
    <section className={`py-16 bg-[#1A1816] text-[#ECE4D9] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-[42px] font-bold leading-[50px]">
            Take Your Brand to the Next Level with <span className="text-[#6B6159]">Strategic Digital Marketing</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-lg ${service.bgColor}`}>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center text-[#ECE4D9]">{service.title}</h3>
                <p className="text-sm text-center text-[#ECE4D9]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/MarketingWhy.jpg" // Replace with actual image path
            alt="Digital Marketing Strategy"
            width={600}
            height={900} // Increased height
            className="rounded-lg shadow-lg object-left object-cover h-[700px]" // Ensures proper height scaling
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalServices;
