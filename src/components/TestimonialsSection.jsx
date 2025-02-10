"use client"; // Required for React Hooks in Next.js App Router

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Susan Persad",
    position: "CEO, Jacks4Hire",
    image: "/bachir.jpg",
    quote:
      "They took our idea during a call and came up with an app prototype that was very impressive and accurate.",
  },
  {
    id: 2,
    name: "Putra Cyrillus Rabin",
    position: "CEO, Flovely",
    image: "/flovely_c.jpg",
    quote:
      "They are a task-oriented company, quite a big difference from the companies we had worked with in the past.",
  },
  {
    id: 3,
    name: "Bachir El Kai",
    position: "CEO, Elite Fishing",
    image: "/jacks_c.jpg",
    quote:
      "Generally, I don’t give reviews or testimonials, but their quality of work expertise and availability make an exception.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#1A1816] text-[#ECE4D9] py-16">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-24">
          <h3 className="text-[18px] leading-[22px] uppercase tracking-widest text-[#3F3A34] font-bold mb-8">
            Our Testimonials
          </h3>
          <h2 className="text-3xl md:text-[46px] leading-[55px] font-black">
            Check Out What  Our <br /> Clients Think  of <br /> {" "}
            <span className="text-[#3F3A34]">Our Services</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-[#25221E] p-6 rounded-lg shadow-lg text-center"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-[#3F3A34]"
                />
              </div>
              <div className="mt-10">
                <p className="italic text-[16px] leading-[29px] font-normal text-gray-400">"{testimonial.quote}"</p>
                <h3 className="mt-4 text-[20px] leading-[24px] font-extrabold">{testimonial.name}</h3>
                <p className="text-[16px] leading-[29px] font-normal text-[#3F3A34]">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
