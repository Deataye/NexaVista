import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const WebDevHero = () => {
  return (
    <section 
      className={`relative w-full h-screen flex items-center justify-center text-center ${poppins.className}`}
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(30, 28, 26, 0.85), rgba(55, 50, 45, 0.85), rgba(107, 97, 89, 0.85)), url('/4.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex flex-col lg:flex-row items-center justify-center px-6 lg:px-0 gap-10">
        
        {/* Left Side Content */}
        <div className="flex flex-col pt-14 text-left text-[#ECE4D9] max-w-2xl">
          <h1 className="text-[48px] lg:text-[68px] font-extrabold leading-[68px]">
            Web App Development <br /> Services
          </h1>
          <p className="mt-6 text-[20px] leading-[32px]">
            Welcome to NexaVista Technologies, where innovation meets expertise in crafting unparalleled web solutions. 
            Elevate your online presence and user experience with our top-notch web development services.
          </p>
          <Link href="/contact">
            <button className="mt-10 bg-[#ECE4D9] hover:bg-[#CFC7BD] text-[#3F3A34] px-8 py-4 rounded-md text-[18px] font-medium transition-all">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Right Side Image - Overlapping Images */}
        <div className="relative w-[1200px] flex border-[10px] rounded-sm border-[#514C4A] justify-center">
          {/* Large Image */}
          <Image 
            src="/2.jpg" 
            alt="Web App Development"
            width={1000}  
            height={1200} 
            className="object-cover rounded-sm shadow-2xl"
          />

          {/* Small Overlapping Image */}
          <div className="absolute bottom-0 left-0 border-[10px] shadow-2xl rounded-sm border-[#514C4A]">
            <Image 
              src="/3.jpeg"  // Replace with your small image
              alt="Team Discussion"
              width={350}  
              height={350}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebDevHero;
