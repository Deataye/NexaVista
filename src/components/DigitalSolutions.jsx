"use client";
import Image from "next/image";
import { FaChartLine, FaBullhorn, FaEnvelopeOpenText } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const DigitalSolutions = () => {
  const services = [
    {
      title: "SEO Optimization",
      description:
        "Boost your online visibility with strategic SEO tactics, including keyword research, on-page optimization, and high-quality backlinks.",
      icon: <FaChartLine className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Social Media Marketing",
      description:
        "Engage and grow your audience with data-driven social media strategies designed to increase brand awareness and drive conversions.",
      icon: <FaBullhorn className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#3F3A34]",
    },
    {
      title: "Email Marketing",
      description:
        "Convert leads into loyal customers with personalized, high-converting email campaigns tailored to your audience.",
      icon: <FaEnvelopeOpenText className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#1A1816]",
    },
  ];

  return (
    <section className={`py-16 bg-[#1A1816] text-[#ECE4D9] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/MarketingHero.jpg" // Replace with actual image path
            alt="Digital Marketing Strategy"
            width={600}
            height={600} // Adjusted height for better visibility
            className="rounded-lg shadow-lg object-cover h-[600px]"
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-[42px] font-bold leading-[50px]">
            <span className="text-[#6B6159]">Strategic Digital Marketing</span> That Drives Results
          </h2>
          <p className="text-[#ECE4D9] text-[16px] leading-[29px]">
            Our expert digital marketing solutions help businesses stand out, attract customers, and grow in a competitive online landscape.
          </p>

          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${service.bgColor}`}>{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#ECE4D9]">{service.title}</h3>
                  <p className="text-[#ECE4D9] text-[16px] leading-[29px]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DigitalSolutions;
