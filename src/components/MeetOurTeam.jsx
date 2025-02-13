"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const teamMembers = [
  {
    name: "Qandeel Khalid",
    role: "CMO",
    position: "Chief Marketing Officer",
    image: "/qandeel khalid.jpg",
  },
  {
    name: "Mirza Tayyab",
    role: "COO",
    position: "Chief Operations Officer",
    image: "/mirza tayyab.jpg",
  },
  {
    name: "Mirza Talha",
    role: "CEO & Co-Founder",
    position: "Chief Executive Officer",
    image: "/mirza talha.jpg",
  },
  {
    name: "Aniqa Noor",
    role: "CCO",
    position: "Chief Content Officer",
    image: "/aniqa noor.jpg",
  },
  {
    name: "Uzair Shabbir",
    role: "CTO",
    position: "Chief Technology Officer",
    image: "/uzair shabbir.jpg",
  },
];

export default function MeetOurTeam() {
  return (
    <section className={`py-20 bg-[#1A1816] text-[#ECE4D9] ${poppins.className}`}>
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-[46px] leading-[55px] font-black mb-4">
          Meet Our Team
        </h2>

        {/* Subheading / Intro */}
        <p className="max-w-2xl mx-auto text-center text-[#B0A89F] text-[18px] leading-[29px] mb-12">
          Our team consists of talented professionals with diverse backgrounds and a shared 
          commitment to excellence. We bring together designers, developers, marketers, and 
          strategists to deliver outstanding results for our clients.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-cover rounded-full border-4 border-[#3F3A34]"
                />
              </div>
              <h3 className="text-[22px] leading-[26px] font-extrabold">{member.name}</h3>
              <p className="text-[#B0A89F] text-[16px] leading-[24px]">{member.role}</p>
              <p className="text-[#ECE4D9] text-[14px] leading-[22px]">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
