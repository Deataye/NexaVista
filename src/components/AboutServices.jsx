"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaAndroid,
  FaWordpress,
  FaMobile,
  FaVrCardboard,
  FaGlobe,
  FaBitcoin,
} from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { MdOutlineMilitaryTech } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const AboutServices = () => {
  return (
    <section className={`bg-[#ECE4D9] text-[#3F3A34] pt-20 ${poppins.className}`}>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/WelcomeToNxVs.webp"
            alt="Team Meeting"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[46px] font-black leading-[55px] pb-10">
            We Provide Excellent{" "}
            <span className="text-[#6B6159]">Service</span> to Meet Your Specific Needs
          </h2>
          <p className="mt-4 text-[#6B6159] pb-4 text-[16px] leading-[29px]">
            NexaVista Technologies is a leading mobile app development company in the USA. Our expert team specializes in creating high-quality apps for iPhone, iPad, Android, and web platforms.
          </p>

          {/* Service List with Icons */}
          <div className="grid grid-cols-2 gap-4 pb-6 mt-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="flex items-center gap-2 text-[#6B6159] hover:text-[#3F3A34] transition-colors"
              >
                <service.icon className="w-10 h-10" />
                <span className="text-[16px] leading-[29px]">{service.title}</span>
              </Link>
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="mt-8 flex flex-col md:flex-row gap-10 pb-6">
            <div className="flex items-center gap-3">
              <MdOutlineMilitaryTech className="text-[80px] text-[#3F3A34]" />
              <div>
                <h4 className="font-extrabold text-[22px] leading-[26px]">Technical Advancements</h4>
                <p className="text-[#6B6159] text-[16px] pr-6 leading-[29px]">
                  We upgrade our services to stay ahead of the competition
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BsFillPersonLinesFill className="text-[55px] text-[#3F3A34]" />
              <div>
                <h4 className="font-extrabold text-[22px] leading-[26px]">IT Consultancy</h4>
                <p className="text-[#6B6159] text-[16px] leading-[29px]">
                  Our IT experts consult you about your required services
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-block bg-[#3F3A34] hover:bg-[#2F2A24] text-[#ECE4D9] px-6 py-3 rounded-lg text-[16px] font-medium transition-all"
          >
            Read More →
          </Link>
        </div>
      </div>
    </section>
  );
};

// Service data with icons
const services = [
  { title: "Android App Development", href: "/android", icon: FaAndroid },
  { title: "CMS Development", href: "/cms", icon: FaWordpress },
  { title: "IDS App Development", href: "/ids", icon: SiArduino },
  { title: "AR VR App Development", href: "/ar-vr", icon: FaVrCardboard },
  { title: "Web App Development", href: "/web", icon: FaGlobe },
  { title: "Blockchain App Development", href: "/blockchain", icon: FaBitcoin },
];

export default AboutServices;
