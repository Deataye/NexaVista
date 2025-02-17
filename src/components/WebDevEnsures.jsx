"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowsAlt, FaCalendarAlt, FaUsers, FaShieldAlt } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const WebDevEnsures = () => {
  const features = [
    {
      title: "Flexible, Efficient Scaling",
      description:
        "NexaVista Technologies ensures your web solutions can adapt effortlessly to changing needs. Our scalable approach guarantees efficient growth, seamlessly accommodating increased user traffic or additional functionalities for a responsive and dynamic digital experience.",
      icon: <FaArrowsAlt className="text-[#6B6159] hover:text-[#3F3A34] transition-colors text-[125px]" />,
    },
    {
      title: "Long-Term Predictability",
      description:
        "Planning for the future is integral. NexaVista Technologies provides a strategic roadmap for your web projects, ensuring stability and predictability over time. Our approach considers future expansions, updates, and advancements, offering a reliable and sustainable digital foundation.",
      icon: <FaCalendarAlt className="text-[#6B6159] hover:text-[#3F3A34] transition-colors text-[125px]" />,
    },
    {
      title: "Team of 1,000+ Engineers",
      description:
        "With a vast team of over 1,000 skilled engineers, NexaVista Technologies brings unparalleled expertise to your projects. Our diverse and experienced workforce ensures the successful execution of your web development needs, meeting the highest standards of quality and innovation.",
      icon: <FaUsers className="text-[#6B6159] hover:text-[#3F3A34] transition-colors text-[125px]" />,
    },
    {
      title: "Strong Security",
      description:
        "Security is paramount at NexaVista Technologies. We implement robust measures to safeguard your digital assets and sensitive data. We ensure a trustworthy and secure online presence for your business through regular security assessments, encryption protocols, and adherence to industry best practices.",
      icon: <FaShieldAlt className="text-[#6B6159] hover:text-[#3F3A34] transition-colors text-[125px]" />,
    },
  ];

  return (
    <section className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/request-a-call-back-im1.jpg" // Replace with actual image path
            alt="Web Development Company"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[46px] font-black leading-[55px] pb-10">
            <span className="text-[#6B6159]">NexaVista Technologies</span>, As a Web Development Company, Ensures
          </h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                {feature.icon}
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-[#6B6159] text-[16px]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-[#3F3A34] hover:bg-[#2F2A24] text-[#ECE4D9] px-6 py-3 rounded-lg text-lg font-medium transition-all"
          >
            Work with us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebDevEnsures;
