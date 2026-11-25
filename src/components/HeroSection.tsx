import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight, Phone } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { AmbientParticles } from './AmbientParticles';
import { LuxuryImage } from './LuxuryImage';
import { LuxuryDivider } from './LuxuryDivider';
import { TiltFrame } from './TiltFrame';

interface HeroSectionProps {
  onEnquireClick: () => void;
}

export function HeroSection({ onEnquireClick }: HeroSectionProps) {
  const { t } = useLanguage();
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
      className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#060911] pt-24 pb-10"
    >
      {/* Parallax widescreen interior backdrop */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden="true"
        className="absolute inset-0 -top-8 -bottom-16 will-change-transform"
      >
        <LuxuryImage
          src={HOTEL_CONFIG.images.heroBackdrop}
          alt={t.hero.backdropImgAlt}
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
          <div className="lg:col-span-7 min-w-0">
            <p className="text-xs sm:text-sm font-medium tracking-[0.18em] text-[#D4B475] mb-4">
              {t.hero.regionLabel}
            </p>

            <h1
              className="font-serif text-[clamp(2.25rem,4.6vw,4.15rem)] font-medium leading-[1.15] tracking-[-0.015em] text-[#F6F2EA] mb-5"
              style={{ textWrap: 'balance' }}
            >
              {t.hero.headline}
            </h1>

            <p className="text-base sm:text-lg text-[#F6F2EA]/85 leading-relaxed max-w-2xl mb-8">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 sm:gap-5">
              <button
                type="button"
                onClick={onEnquireClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 text-sm font-semibold tracking-wide text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-all duration-200 max-w-full whitespace-nowrap shrink-0 cursor-pointer shadow-[0_12px_32px_rgba(212,180,117,0.22)] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(212,180,117,0.42)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6F2EA]"
              >
                <span>{t.hero.enquireCta}</span>
                <ArrowDownRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={HOTEL_CONFIG.contact.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-[#F6F2EA] hover:text-[#E7CE99] bg-[#0B1324]/45 hover:bg-[#16233E] border border-[#D4B475]/40 hover:border-[#D4B475] rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(212,180,117,0.24)] max-w-full whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-[#D4B475] shrink-0" />
                <span className="tabular-nums">{HOTEL_CONFIG.contact.phoneDisplay}</span>
              </a>

              <a
                href="#suites"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#suites')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-3.5 py-3 text-sm font-medium text-[#F6F2EA]/85 hover:text-[#E7CE99] hover:bg-[#D4B475]/10 border-b border-[#D4B475]/45 hover:border-[#D4B475] rounded-t-sm transition-all duration-200 hover:shadow-[0_8px_20px_rgba(212,180,117,0.18)] max-w-full whitespace-nowrap shrink-0"
              >
                {t.hero.viewRoomsCta}
              </a>
            </div>
          </div>

          {/* Framed Hotel Royal Mansion Exterior Entrance Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[460px] lg:max-w-[500px] animate-float-gentle float-hero">
              <TiltFrame className="w-full rounded-sm overflow-hidden border border-[#D4B475]/35 shadow-[0_28px_70px_rgba(0,0,0,0.6)]">
                <div className="relative aspect-[4/3] w-full">
                  <LuxuryImage
                    src={HOTEL_CONFIG.images.heroEntrance}
                    alt={t.hero.entranceImgAlt}
                    loading="eager"
                    className="w-full h-full"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#060911]/80 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-4 left-4 right-4 glass-obsidian border border-[#D4B475]/30 rounded-sm p-3.5">
                    <p className="text-[11px] tracking-[0.16em] text-[#D4B475]">
                      {t.hero.entranceCaptionLocation}
                    </p>
                    <p className="font-serif text-lg text-[#F6F2EA] mt-0.5">
                      {HOTEL_CONFIG.displayBrand}
                    </p>
                  </div>
                </div>
              </TiltFrame>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Full-Width Architectural Key Highlights Strip */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-6">
        <LuxuryDivider tone="dark" align="center" className="mb-6" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="space-y-1 min-w-0">
              <p className="font-serif text-2xl sm:text-3xl font-medium text-[#D4B475] leading-snug">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-[#C8C1B4] tracking-wide leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
