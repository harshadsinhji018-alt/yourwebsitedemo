import { motion } from 'motion/react';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { LuxuryImage } from './LuxuryImage';
import { TiltFrame } from './TiltFrame';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#F6F2EA] text-[#0B1324] py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Editorial Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between space-y-8"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#8A6A2E] mb-4">
                {HOTEL_CONFIG.about.kicker}
              </p>
              <h2
                className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] font-medium leading-[1.12] tracking-tight text-[#0B1324] mb-7"
                style={{ textWrap: 'balance' }}
              >
                {HOTEL_CONFIG.about.headline}
              </h2>

              <div className="space-y-5 text-base leading-[1.75] text-[#2B3447] max-w-[62ch]">
                {HOTEL_CONFIG.about.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Clean Architectural Metrics Row */}
            <div className="pt-8 border-t border-[#0B1324]/15 grid grid-cols-3 gap-6">
              {HOTEL_CONFIG.about.metrics.map((item) => (
                <div key={item.label} className="space-y-1.5">
                  <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#0B1324] tabular-nums">
                    {item.value}
                  </p>
                  <p className="text-xs sm:text-sm text-[#4A5366] leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reception Interior Image Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[460px] animate-float-gentle float-about">
              <TiltFrame className="w-full rounded-sm overflow-hidden shadow-[0_24px_60px_rgba(6,9,17,0.18)]">
                <div className="relative aspect-[3/4] w-full">
                  <LuxuryImage
                    src={HOTEL_CONFIG.images.aboutReception}
                    alt="Hotel Silver Inn illuminated reception desk and front lobby"
                    className="w-full h-full"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#060911]/85 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-5 left-5 right-5 glass-obsidian border border-[#D4B475]/25 rounded-sm p-4 sm:p-5">
                    <p className="text-xs tracking-[0.18em] text-[#D4B475] mb-1">
                      {HOTEL_CONFIG.contact.conciergeHours}
                    </p>
                    <p className="font-serif text-lg sm:text-xl text-[#F6F2EA]">
                      Reception &amp; Guest Check-In Desk
                    </p>
                  </div>
                </div>
              </TiltFrame>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
