import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import CoursesSection from "@/components/CoursesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import Branches from "@/components/OurBranches"




export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <HeroSection />
      <AboutSection />
   
      <Branches/>
      <CoursesSection />
      <TestimonialsSection />
      
      <ContactSection />
      
      <Footer />
    </main>
  )
}

