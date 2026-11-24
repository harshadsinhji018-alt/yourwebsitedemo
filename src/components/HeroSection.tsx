import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { AmbientParticles } from './AmbientParticles';
import { LuxuryImage } from './LuxuryImage';

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
      {/* Parallax architectural backdrop */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden="true"
        className="absolute inset-0 -top-8 -bottom-16 will-change-transform"
      >
        <LuxuryImage
          src={HOTEL_CONFIG.images.hero}
          alt={`${HOTEL_CONFIG.name} twilight coastal facade and reflecting pool`}
          loading="eager"
          className="w-full h-full"
        />
      </motion.div>

      {/* Measured contrast scrims for WCAG AA/AAA text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-b from-[#060911]/70 via-[#060911]/45 to-[#060911]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-r from-[#060911]/85 via-[#060911]/45 to-transparent"
      />

      {/* Subtle warm champagne particles */}
      <AmbientParticles />

      {/* Main Focal Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-20 max-w-7xl mx-auto w-full px-5 sm:px-8 my-auto py-12 lg:py-20"
      >
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-medium tracking-[0.22em] text-[#D4B475] mb-5">
            {HOTEL_CONFIG.regionLabel}
          </p>

          <h1
            className="font-serif text-[clamp(2.5rem,5.2vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.015em] text-[#F6F2EA] mb-6"
            style={{ textWrap: 'balance' }}
          >
            {HOTEL_CONFIG.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-[#F6F2EA]/85 leading-relaxed max-w-2xl mb-9">
            {HOTEL_CONFIG.heroSubheadline}
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={onEnquireClick}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wide text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer shadow-[0_12px_32px_rgba(212,180,117,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6F2EA]"
            >
              <span>Request Private Enquiry</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>

            <a
              href="#suites"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#suites')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-[#F6F2EA] hover:text-[#D4B475] border-b border-[#D4B475]/45 hover:border-[#D4B475] transition-colors whitespace-nowrap shrink-0"
            >
              Explore Suites &amp; Residences
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Full-Width Architectural Key Figures Strip */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-6">
        <div className="luxury-divider mb-6" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HOTEL_CONFIG.heroStats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl font-medium text-[#D4B475] tabular-nums">
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
