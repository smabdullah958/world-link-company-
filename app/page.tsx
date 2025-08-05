
'use client';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CEOSection from '@/components/CEOSection';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import GlobalReachSection from '@/components/GlobalReachSection';
import PartnersSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CEOSection />
        <ServicesSection />
        <IndustriesSection />
        <GlobalReachSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
