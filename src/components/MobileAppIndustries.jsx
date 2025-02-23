"use client";
import { FaHeartbeat, FaShoppingCart, FaBuilding, FaIndustry, FaGraduationCap, FaBolt, FaCar, FaUtensils } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const MobileAppIndustries = () => {
  const industries = [
    {
      title: "Healthcare",
      description:
        "We develop secure and compliant mobile apps for healthcare, enabling telemedicine, patient management, and real-time health monitoring for enhanced patient care.",
      icon: <FaHeartbeat className="text-[#ECE4D9] hover:text-[#3F3A34] transition-colors text-3xl" />,
    },
    {
      title: "eCommerce",
      description:
        "Empowering businesses with feature-rich mobile commerce apps that offer seamless shopping experiences, secure transactions, and personalized recommendations.",
      icon: <FaShoppingCart className="text-[#ECE4D9] hover:text-[#3F3A34] transition-colors text-3xl" />,
    },
    {
      title: "Real Estate",
      description:
        "Building intuitive mobile solutions for property listings, virtual tours, and agent-client interactions, streamlining the real estate buying and selling process.",
      icon: <FaBuilding className="text-[#ECE4D9] hover:text-[#3F3A34] transition-colors text-3xl" />,
    },
    {
      title: "Manufacturing",
      description:
        "Enhancing efficiency with mobile apps for inventory management, supply chain tracking, and real-time production monitoring in the manufacturing sector.",
      icon: <FaIndustry className="text-[#ECE4D9] hover:text-[#3F3A34] transition-colors text-3xl" />,
    },
    {
      title: "Education",
      description:
        "Transforming learning with mobile apps for virtual classrooms, e-learning, student management, and interactive educational experiences.",
      icon: <FaGraduationCap className="text-[#ECE4D9] hover:text-[#3F3A34] transition-colors text-3xl" />,
    },
    {
      title: "On-Demand Services",
      description:
        "Developing real-time booking and delivery apps for ride-hailing, home services, and food delivery, ensuring seamless user experience and efficient service connections.",
      icon: <FaBolt className="text-[#ECE4D9] hover:text-[#3F3A34] transition-colors text-3xl" />,
    },
    {
      title: "Automotive",
      description:
        "Designing mobile apps for car rentals, vehicle tracking, and smart automotive services to enhance user convenience and operational efficiency.",
      icon: <FaCar className="text-[#ECE4D9] hover:text-[#3F3A34] transition-colors text-3xl" />,
    },
    {
      title: "Food & Hospitality",
      description:
        "Creating mobile apps for restaurant reservations, food delivery, and hospitality management, enhancing customer engagement and operational ease.",
      icon: <FaUtensils className="text-[#ECE4D9] hover:text-[#3F3A34] transition-colors text-3xl" />,
    },
  ];

  return (
    <section className={`py-16 bg-[#6B6159] text-center ${poppins.className}`}>
      <h2 className="text-[46px] text-[#ECE4D9] leading-[55px] font-bold mb-6">
        <span className="text-[#1A1816]">Industries</span> We Serve in Mobile App Development
      </h2>
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {industries.map((industry, index) => (
          <div key={index} className="flex items-start gap-4 bg-[#ECE4D9] p-6 rounded-lg shadow-md">
            <div className="p-3 bg-[#6B6159] rounded-full">{industry.icon}</div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-gray-700">{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileAppIndustries;
