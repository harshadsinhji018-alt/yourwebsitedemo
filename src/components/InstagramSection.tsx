import { motion } from 'motion/react';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { LuxuryDivider } from './LuxuryDivider';
import { LuxuryImage } from './LuxuryImage';

export function InstagramSection() {
  const { t } = useLanguage();

  return (
    <section
      id="instagram"
      className="relative w-full overflow-x-clip bg-[#F6F2EA] text-[#0B1324] py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header + Official Instagram CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
          <div className="max-w-2xl min-w-0">
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-[#8A6A2E] mb-3">
              <Instagram className="w-4 h-4 text-[#8A6A2E] shrink-0" />
              <span>{t.instagram.kicker}</span>
            </div>

            <h2
              className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] font-medium leading-[1.18] text-[#0B1324] mb-4"
              style={{ textWrap: 'balance' }}
            >
              {t.instagram.headline}
            </h2>

            <p className="text-base text-[#2B3447] leading-relaxed">
              {t.instagram.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 self-start lg:self-end shrink-0">
            <a
              href={HOTEL_CONFIG.instagram.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.instagram.profileAria}
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wider text-[#F6F2EA] bg-[#0B1324] hover:bg-[#D4B475] hover:text-[#060911] border border-[#0B1324] hover:border-[#D4B475] rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(212,180,117,0.34)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6A2E]"
            >
              <Instagram className="w-4 h-4 text-[#D4B475] group-hover:text-[#060911] transition-colors shrink-0" />
              <span>{t.instagram.followCta}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4B475] group-hover:text-[#060911] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>
          </div>
        </div>

        <LuxuryDivider tone="light" align="left" className="mb-12" />

        {/* 6-Card Responsive Instagram Posts Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOTEL_CONFIG.instagram.posts.map((post, idx) => {
            const copy = t.instagram.posts[post.id] ?? {
              category: 'Hotel Royal Mansion',
              caption: HOTEL_CONFIG.heroHeadline,
            };

            return (
              <motion.a
                key={post.id}
                href={HOTEL_CONFIG.instagram.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.48,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col rounded-sm overflow-hidden bg-[#EAE3D5]/75 border border-[#0B1324]/15 hover:border-[#8A6A2E]/60 shadow-[0_14px_36px_rgba(6,9,17,0.08)] hover:shadow-[0_22px_48px_rgba(6,9,17,0.16)] transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6A2E] min-w-0"
              >
                {/* Clean Instagram Post Header Strip */}
                <div className="px-4 py-3 flex items-center justify-between gap-2 bg-[#F6F2EA] border-b border-[#0B1324]/10">
                  <div className="flex items-center gap-2 min-w-0 text-xs text-[#2B3447]">
                    <span className="font-medium text-[#0B1324] truncate">
                      {HOTEL_CONFIG.instagram.handle}
                    </span>
                    <span aria-hidden="true" className="text-[#8A6A2E]">
                      ·
                    </span>
                    <span className="text-[#4A5366] whitespace-nowrap shrink-0">
                      {copy.category}
                    </span>
                  </div>
                  <Instagram className="w-3.5 h-3.5 text-[#8A6A2E] shrink-0 transition-transform duration-200 group-hover:scale-110" />
                </div>

                {/* Landscape Post Photograph */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B1324]">
                  <LuxuryImage
                    src={post.image}
                    alt={`${copy.category} — ${HOTEL_CONFIG.name}`}
                    className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#060911]/80 via-[#060911]/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#060911]/85 border border-[#D4B475]/45 text-[11px] font-medium text-[#F6F2EA] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                    <span>{t.instagram.viewPostLabel}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#D4B475]" />
                  </div>
                </div>

                {/* Post Caption */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#F6F2EA]">
                  <p className="text-sm text-[#2B3447] leading-relaxed">
                    {copy.caption}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
