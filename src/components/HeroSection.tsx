import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight, Phone } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { AmbientParticles } from './AmbientParticles';
import { LuxuryImage } from './LuxuryImage';
import { TiltFrame } from './TiltFrame';

interface HeroSectionProps {
  onEnquireClick: () => void;
}

export function HeroSection({ onEnquireClick }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.35]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#060911] pt-24 pb-10"
    >
      {/* Parallax widescreen interior backdrop */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden="true"
        className="absolute inset-0 -top-8 -bottom-16 will-change-transform"
      >
        <LuxuryImage
          src={HOTEL_CONFIG.images.heroBackdrop}
          alt={`${HOTEL_CONFIG.name} air-conditioned twin room interior`}
          loading="eager"
          className="w-full h-full opacity-45"
        />
      </motion.div>

      {/* Measured contrast scrims for WCAG AA/AAA text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-b from-[#060911]/85 via-[#060911]/65 to-[#060911]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-r from-[#060911]/95 via-[#060911]/70 to-[#060911]/45"
      />

      {/* Subtle warm champagne particles */}
      <AmbientParticles />

      {/* Main Focal Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-20 max-w-7xl mx-auto w-full px-5 sm:px-8 my-auto py-8 lg:py-14"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-medium tracking-[0.22em] text-[#D4B475] mb-4">
              {HOTEL_CONFIG.regionLabel}
            </p>

            <h1
              className="font-serif text-[clamp(2.4rem,4.8vw,4.25rem)] font-medium leading-[1.06] tracking-[-0.015em] text-[#F6F2EA] mb-5"
              style={{ textWrap: 'balance' }}
            >
              {HOTEL_CONFIG.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#F6F2EA]/85 leading-relaxed max-w-2xl mb-8">
              {HOTEL_CONFIG.heroSubheadline}
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <button
                type="button"
                onClick={onEnquireClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wide text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer shadow-[0_12px_32px_rgba(212,180,117,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6F2EA]"
              >
                <span>Enquire for Availability</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>

              <a
                href={HOTEL_CONFIG.contact.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-[#F6F2EA] hover:text-[#D4B475] border border-[#D4B475]/40 hover:border-[#D4B475] rounded-sm transition-colors whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-[#D4B475]" />
                <span className="tabular-nums">{HOTEL_CONFIG.contact.phoneDisplay}</span>
              </a>

              <a
                href="#suites"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#suites')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-[#F6F2EA]/85 hover:text-[#D4B475] border-b border-[#D4B475]/45 hover:border-[#D4B475] transition-colors whitespace-nowrap shrink-0"
              >
                View Rooms
              </a>
            </div>
          </div>

          {/* Framed Hotel Silver Inn Main Entrance Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <TiltFrame className="w-full max-w-[340px] sm:max-w-[380px] rounded-sm overflow-hidden border border-[#D4B475]/35 shadow-[0_28px_70px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[3/4] w-full">
                <LuxuryImage
                  src={HOTEL_CONFIG.images.heroEntrance}
                  alt="Hotel Silver Inn main glass entrance doorway in Naroda, Ahmedabad"
                  loading="eager"
                  className="w-full h-full"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#060911]/80 via-transparent to-transparent"
                />
                <div className="absolute bottom-4 left-4 right-4 glass-obsidian border border-[#D4B475]/30 rounded-sm p-3.5">
                  <p className="text-[11px] tracking-[0.18em] text-[#D4B475]">
                    GIDC Naroda · Ahmedabad
                  </p>
                  <p className="font-serif text-lg text-[#F6F2EA] mt-0.5">
                    {HOTEL_CONFIG.displayBrand}
                  </p>
                </div>
              </div>
            </TiltFrame>
          </div>
        </div>
      </motion.div>

      {/* Bottom Full-Width Architectural Key Highlights Strip */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-6">
        <div className="luxury-divider mb-6" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HOTEL_CONFIG.heroStats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl font-medium text-[#D4B475]">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-[#C8C1B4] tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
