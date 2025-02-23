"use client";
import Image from "next/image";
import { FaPenFancy, FaFileAlt, FaEnvelopeOpenText, FaBullhorn } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const CopyServices = () => {
  const services = [
    {
      title: "Sales Copy",
      description:
        "Turn prospects into buyers with high-converting sales copy that highlights benefits, addresses pain points, and drives action.",
      icon: <FaPenFancy className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Landing Pages",
      description:
        "Create persuasive landing pages that capture leads and maximize conversions with compelling headlines and strategic CTAs.",
      icon: <FaFileAlt className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Email Copy & Sequences",
      description:
        "Engage and nurture your audience with well-crafted email campaigns that boost open rates and drive sales.",
      icon: <FaEnvelopeOpenText className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Ad Copywriting",
      description:
        "Capture attention instantly with powerful ad copy designed to increase clicks, engagement, and ROI on all platforms.",
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
            Elevate Your Brand with <span className="text-[#6B6159]">Powerful Copywriting</span>
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
            src="/CopywritingWhy.jpg" // Replace with actual image path
            alt="Copywriting Process"
            width={600}
            height={900} // Increased height
            className="rounded-lg shadow-lg object-left object-cover h-[750px]" // Ensures proper height scaling
          />
        </div>
      </div>
    </section>
  );
};

export default CopyServices;
