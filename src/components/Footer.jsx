"use client"; // Required for React Hooks in Next.js App Router

import Link from "next/link";
import { Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1816] text-[#ECE4D9] py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Company Info */}
        <div>
          <Link href="/" className="text-2xl font-bold flex items-center">
            <img src="/logo.png" alt="Logo" className="h-20 w-20 mr-2" />
          </Link>
          <p className="mt-4 text-[16px] leading-[29px] font-normal text-[#ECE4D9]">
            NexaVista leads in web and mobile app development, serving startups, small businesses, and enterprises with premium solutions.
          </p>
          <div className="flex space-x-3 mt-4">
            <Link href="#" className="hover:text-[#3F3A34]">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-[#3F3A34]">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-[#3F3A34]">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[20px] font-extrabold leading-[24px] text-[#ECE4D9] mb-4">Services</h3>
          <ul className="space-y-2 text-[#ECE4D9] text-[16px] leading-[29px] ">
            <li>
              <Link href="/services/web-development" className="hover:text-[#3F3A34]">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services/app-development" className="hover:text-[#3F3A34]">
                App Development
              </Link>
            </li>
            <li>
              <Link href="/services/copywriting" className="hover:text-[#3F3A34]">
                Copywriting
              </Link>
            </li>
            <li>
              <Link href="/services/digital-marketing" className="hover:text-[#3F3A34]">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/services/graphic-designing" className="hover:text-[#3F3A34]">
                Graphic Designing
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-[20px] font-extrabold leading-[24px] text-[#ECE4D9] mb-4">Contact</h3>
          <p className="text-[#ECE4D9] text-[16px] leading-[29px]">447 Broadway, 2nd Floor, New York, NY 10013</p>
          <p className="flex items-center mt-2 text-[#ECE4D9] text-[16px] leading-[29px]">
            <Phone size={16} className="mr-2" /> +1 317 884 8958
          </p>
          <p className="flex items-center mt-2 text-[#ECE4D9] text-[16px] leading-[29px]">
            <Mail size={16} className="mr-2" /> info@nexavista.com
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[20px] font-extrabold leading-[24px] text-[#ECE4D9] mb-4">Newsletter</h3>
          <p className="text-[#ECE4D9] text-[16px] leading-[29px]">
            Stay updated with the latest news, trends, and offers.
          </p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md bg-[#25221E] text-[#ECE4D9] border border-[#3F3A34]"
            />
            <button className="mt-2 w-full bg-[#3F3A34] hover:bg-[#ECE4D9] hover:text-[#1A1816] text-[#ECE4D9] py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-[16px] leading-[29px] text-[#ECE4D9] border-t border-[#3F3A34] mt-8 pt-4">
        © {new Date().getFullYear()} NexaVista. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
