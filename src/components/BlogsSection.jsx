"use client"; // Required for React Hooks in Next.js App Router

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "What is Industrial Training: Everything You Need to Know",
    category: "Technology",
    author: "Ajay Chaudhary",
    date: "January 13, 2025",
    image: "/blogs/industrial-training.jpg",
  },
  {
    id: 2,
    title: "Top 7 Best NFC Payment Apps: You Should Try in 2024",
    category: "Information Technology",
    author: "Ajay Chaudhary",
    date: "October 28, 2024",
    image: "/blogs/nfc-payment.jpg",
  },
  {
    id: 3,
    title: "React VS Vue: Everything You Need to Know",
    category: "Technology",
    author: "Ajay Chaudhary",
    date: "October 21, 2024",
    image: "/blogs/react-vs-vue.jpg",
  },
];

const BlogsSection = () => {
  return (
    <section className="bg-[#1A1816] text-[#ECE4D9] py-16">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Our <span className="text-[#3F3A34]">Latest Blogs</span>
          </h2>
          <Link href="/blog">
            <button className="bg-[#3F3A34] hover:bg-[#ECE4D9] hover:text-[#1A1816] text-[#ECE4D9] px-6 py-2 rounded-lg transition">
              All Blogs →
            </button>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#25221E] rounded-lg shadow-lg overflow-hidden"
            >
              {/* Blog Image */}
              <div className="relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#3F3A34] text-[#ECE4D9] px-3 py-1 text-xs font-semibold rounded">
                  {blog.category}
                </span>
              </div>

              {/* Blog Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold hover:text-[#3F3A34] transition">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  {blog.author} • {blog.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
