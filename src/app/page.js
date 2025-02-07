import AboutServices from "@/components/AboutServices";
import BlogsSection from "@/components/BlogsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
;

export default function Home() {
  return (
  <>
   <Navbar/>
   <HeroSection/>
   <AboutServices/>
   <TechnologiesSection/>
   <WhyChooseUs/>
   <ContactForm/>
   <ProjectsSection/>
   <TestimonialsSection/>
   <BlogsSection/>
   <Footer/>
   </>
  );
}
