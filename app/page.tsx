import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import SkillsSection from "@/app/components/SkillsSection";

export default function Home() {
  return (
      <div className="relative">
          <Navbar/>
          <Hero/>
          <FeaturedProjects/>
          <TestimonialsSection/>
          <SkillsSection/>
          <ContactSection/>
          <Footer/>
      </div>
  );
}
