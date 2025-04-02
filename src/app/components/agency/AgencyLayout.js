import AgencyNavbar from './Navbar';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import WorkSection from './WorkSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function AgencyLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <AgencyNavbar />
      <div className="pt-16">
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
} 