"use client";
import Image from "next/image";
import { FaFileAlt, FaBullseye, FaEnvelopeOpenText } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const CopySolutions = () => {
  const services = [
    {
      title: "Persuasive Sales Copy",
      description:
        "Crafting compelling sales pages and website content that captivate, persuade, and drive conversions effectively.",
      icon: <FaBullseye className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Landing Pages & Ad Copy",
      description:
        "Strategically written landing pages and ad copies designed to attract, engage, and convert your audience seamlessly.",
      icon: <FaFileAlt className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#3F3A34]",
    },
    {
      title: "Email Sequences & Content",
      description:
        "Engaging email sequences that nurture leads, boost sales, and create meaningful customer relationships.",
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
            src="/copy8.jpg" // Replace with actual image path
            alt="Copywriting Workspace"
            width={600}
            height={600} // Adjusted height for better visibility
            className="rounded-lg shadow-lg object-cover h-[500px]"
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-[42px] font-bold leading-[50px]">
            <span className="text-[#6B6159]">Copywriting Solutions</span> for Maximum Conversions
          </h2>
          <p className="text-[#ECE4D9] text-[16px] leading-[29px]">
            Words have power. Our copywriting services help businesses captivate audiences, build trust, and drive action.
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

export default CopySolutions;
