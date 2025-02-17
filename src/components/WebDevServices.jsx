"use client";
import Link from "next/link";
import { FaSitemap, FaLaptopCode, FaCogs, FaCode, FaMobileAlt, FaShoppingCart } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const WebDevServices = () => {
  const services = [
    {
      title: "SaaS Development",
      description:
        "Delivering Software as a Service (SaaS) solutions, we design and develop cloud-based applications that offer flexibility, scalability, and accessibility, revolutionizing how businesses operate and innovate.",
      icon: <FaSitemap className="text-[#ECE4D9] text-4xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Open Source Web Development & Revamp",
      description:
        "Harnessing the power of open-source technologies, we revamp and optimize web applications, ensuring cost-effectiveness, security, and the latest features while leveraging community-driven innovation.",
      icon: <FaLaptopCode className="text-[#ECE4D9] text-4xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Custom Web App Development",
      description:
        "Crafting tailored solutions to meet unique business needs, our custom application development ensures your software aligns perfectly with your goals.",
      icon: <FaCogs className="text-[#ECE4D9] text-4xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Front-End Development Services",
      description:
        "Elevating user interfaces with cutting-edge front-end development, we enhance your web applications’ visual appeal, functionality, and interactivity, ensuring a captivating user journey.",
      icon: <FaCode className="text-[#ECE4D9] text-4xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Responsive Design",
      description:
        "Creating websites that adapt seamlessly to various devices, our responsive design services guarantee optimal user experiences, whether on desktops, tablets, or smartphones.",
      icon: <FaMobileAlt className="text-[#ECE4D9] text-4xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "E-Commerce Development",
      description:
        "Empowering businesses with secure and scalable e-commerce solutions, our development expertise ensures an immersive online shopping experience, driving sales and customer satisfaction.",
      icon: <FaShoppingCart className="text-[#ECE4D9] text-4xl" />,
      bgColor: "bg-[#6B6159]",
    },
  ];

  return (
    <section className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-[46px] leading-[55px] font-black mb-4">
          Web Application <span className="text-[#6B6159]">Development</span> Services
        </h2>
        <p className="text-[#6B6159] mb-10">
          At <Link href="/" className="text-[#3F3A34] font-semibold">NexaVistaTechnologies</Link>, we specialize in crafting bespoke solutions that transcend industry standards. From scalable e-commerce platforms to innovative custom applications, our services are tailored to elevate your digital experience and drive sustainable growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md ${service.bgColor}`}>
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-[#ECE4D9]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevServices;
