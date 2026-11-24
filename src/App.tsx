import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { AttractionsSection } from './components/AttractionsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  const [quotaExceeded, setQuotaExceeded] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState<
    { label: string; nonce: number } | undefined
  >(undefined);

  useEffect(() => {
    const onQuotaExceeded = () => setQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', onQuotaExceeded);
    return () =>
      window.removeEventListener('gmp-quota-exceeded', onQuotaExceeded);
  }, []);

  const scrollToContact = (subject?: string) => {
    if (subject) {
      setEnquirySubject({ label: subject, nonce: Date.now() });
    }
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#060911] text-[#F6F2EA] flex flex-col">
        {quotaExceeded && (
          <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
            <span>
              Google Maps Platform quota reached. If you are the app owner,
              visit{' '}
              <a
                href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold text-amber-950 hover:text-amber-800"
              >
                maps developer site
              </a>{' '}
              for instructions to update your account.
            </span>
          </div>
        )}

        <ScrollProgressBar />
        <Navbar onNavigateEnquiry={() => scrollToContact()} />

        <main className="flex-1">
          <HeroSection onEnquireClick={() => scrollToContact()} />
          <AboutSection />
          <RoomsSection
            onEnquireRoom={(roomName) => scrollToContact(roomName)}
          />
          <AmenitiesSection />
          <GallerySection />
          <AttractionsSection />
          <LocationSection />
          <FaqSection />
          <ContactSection prefilledSubject={enquirySubject} />
        </main>

        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </MotionConfig>
  );
}
