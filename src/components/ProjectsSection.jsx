"use client"; // Required for React Hooks in Next.js App Router

import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const projects = [
  {
    id: 1,
    title: "Human Ops",
    category: "HR Management",
    image: "/webdev_1.jpg",
  },
  {
    id: 2,
    title: "Smart Bulb",
    category: "Artificial Intelligence",
    image: "/webdev_2.jpg",
  },
  {
    id: 3,
    title: "Go2Life",
    category: "Job Finds",
    image: "/webdev_3.jpg",
  },
  {
    id: 4,
    title: "Rocket",
    category: "Quiz App",
    image: "/webdev_4.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <section className={`bg-[#1A1816] text-[#ECE4D9] py-20 ${poppins.className}`}>
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h3 className="text-[18px] leading-[22px] uppercase tracking-widest text-[#3F3A34] font-bold">Our Projects</h3>
          <h2 className="text-3xl md:text-[46px] leading-[55px] font-black">
            Our Outstanding <span className="text-[#3F3A34] text-3xl md:text-[46px] leading-[55px] font-black">Projects</span> & Works
          </h2>
          <p className="mt-4 text-[16px] leading-[29px] text-gray-400">
            We develop on-demand customized projects for our clients in the given time.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-sm text-[#ECE4D9]">{project.category}</p>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <Link href="#" className="mt-2 flex items-center gap-1 text-[#3F3A34] font-bold">
                  → View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
