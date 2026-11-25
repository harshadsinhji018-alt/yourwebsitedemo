import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { HOTEL_CONFIG, type GalleryItem } from '../config/hotelConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { LuxuryImage } from './LuxuryImage';
import { LuxuryDivider } from './LuxuryDivider';

type GalleryCategory = 'All' | GalleryItem['category'];

export function GallerySection() {
  const { t } = useLanguage();
  const [category, setCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items =
    category === 'All'
      ? HOTEL_CONFIG.gallery
      : HOTEL_CONFIG.gallery.filter((g) => g.category === category);

  const getTabLabel = (tab: GalleryCategory) => {
    if (tab === 'Entrance & Lobby') return t.gallery.tabs.entrance;
    if (tab === 'Guest Rooms') return t.gallery.tabs.rooms;
    if (tab === 'Corridors & Washrooms') return t.gallery.tabs.washrooms;
    return t.gallery.tabs.all;
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % items.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + items.length) % items.length
        );
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, items.length]);

  const activeItem =
    lightboxIndex !== null && items[lightboxIndex] ? items[lightboxIndex] : null;
  const activeCopy = activeItem
    ? t.gallery.items[activeItem.id] ?? {
        title: activeItem.title,
        categoryLabel: activeItem.category,
        caption: activeItem.caption,
      }
    : null;

  return (
    <section
      id="gallery"
      className="relative w-full overflow-x-clip bg-[#F6F2EA] text-[#0B1324] py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header + Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
          <div className="max-w-2xl min-w-0">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#8A6A2E] mb-3">
              {t.gallery.kicker}
            </p>
            <h2
              className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] font-medium leading-[1.18] text-[#0B1324]"
              style={{ textWrap: 'balance' }}
            >
              {t.gallery.headline}
            </h2>
          </div>

          <div
            role="tablist"
            aria-label={t.gallery.filterAria}
            className="inline-flex flex-wrap items-center gap-1.5 p-1 bg-[#EAE3D5] border border-[#0B1324]/10 rounded-sm self-start lg:self-auto"
          >
            {(
              [
                'All',
                'Entrance & Lobby',
                'Guest Rooms',
                'Corridors & Washrooms',
              ] as const
            ).map((tab) => {
              const active = category === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setCategory(tab);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#0B1324] text-[#F6F2EA] hover:bg-[#182747] hover:shadow-[0_6px_18px_rgba(11,19,36,0.28)]'
                      : 'text-[#2B3447] hover:bg-[#DFD6C3] hover:text-[#0B1324] hover:shadow-[0_4px_12px_rgba(11,19,36,0.14)]'
                  }`}
                >
                  {getTabLabel(tab)}
                </button>
              );
            })}
          </div>
        </div>

        <LuxuryDivider tone="light" align="left" className="mb-12" />

        {/* Responsive Architectural Grid Matching Native Orientations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {items.map((item, idx) => {
            const copy = t.gallery.items[item.id] ?? {
              title: item.title,
              categoryLabel: item.category,
              caption: item.caption,
            };

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  delay: (idx % 4) * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative text-left rounded-sm overflow-hidden border border-[#0B1324]/15 bg-[#0B1324] shadow-[0_14px_36px_rgba(6,9,17,0.12)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6A2E] ${
                  item.aspectClass === 'aspect-[16/10]' && category === 'All'
                    ? 'sm:col-span-2 aspect-[16/10]'
                    : 'aspect-[4/3]'
                }`}
              >
                <LuxuryImage
                  src={item.image}
                  alt={copy.title}
                  className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#060911]/85 via-[#060911]/15 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300"
                />
                <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-sm bg-[#060911]/75 border border-[#D4B475]/30 flex items-center justify-center text-[#F6F2EA] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Expand className="w-4 h-4 text-[#D4B475]" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] tracking-[0.12em] text-[#D4B475] mb-1">
                    {copy.categoryLabel}
                  </p>
                  <p className="font-serif text-lg sm:text-xl text-[#F6F2EA] leading-snug">
                    {copy.title}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Smooth Uncropped Lightbox Modal */}
      {activeItem && activeCopy && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeCopy.title}
          className="fixed inset-0 z-50 bg-[#060911]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Lightbox Bar */}
          <div
            className="flex items-center justify-between gap-4 max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs text-[#C8C1B4] tabular-nums tracking-wider">
              <span className="text-[#D4B475]">
                {String(lightboxIndex + 1).padStart(2, '0')}
              </span>
              <span className="mx-2">/</span>
              <span>{String(items.length).padStart(2, '0')}</span>
              <span className="mx-3 text-white/25">·</span>
              <span>{activeCopy.categoryLabel}</span>
            </div>

            <button
              type="button"
              aria-label={t.gallery.closeLightboxAria}
              onClick={() => setLightboxIndex(null)}
              className="w-11 h-11 inline-flex items-center justify-center rounded-sm bg-[#0B1324] hover:bg-[#16233E] border border-[#D4B475]/30 hover:border-[#D4B475] text-[#F6F2EA] hover:text-[#E7CE99] transition-all duration-200 hover:shadow-[0_8px_22px_rgba(212,180,117,0.25)] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image Stage (uncropped object-contain for both portrait & landscape) */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label={t.gallery.prevAria}
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + items.length) % items.length
                )
              }
              className="hidden sm:inline-flex items-center justify-center w-12 h-12 rounded-sm bg-[#0B1324]/85 hover:bg-[#16233E] border border-[#D4B475]/30 text-[#F6F2EA] hover:text-[#E7CE99] hover:border-[#D4B475] transition-all duration-200 hover:shadow-[0_8px_22px_rgba(212,180,117,0.25)] mr-4 shrink-0 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center max-h-[70vh] w-full rounded-sm overflow-hidden border border-[#D4B475]/20 bg-[#0B1324]/60 p-2"
            >
              <img
                src={activeItem.image}
                alt={activeCopy.title}
                referrerPolicy="no-referrer"
                className="max-h-[66vh] w-auto max-w-full object-contain rounded-sm"
              />
            </motion.div>

            <button
              type="button"
              aria-label={t.gallery.nextAria}
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % items.length)
              }
              className="hidden sm:inline-flex items-center justify-center w-12 h-12 rounded-sm bg-[#0B1324]/85 hover:bg-[#16233E] border border-[#D4B475]/30 text-[#F6F2EA] hover:text-[#E7CE99] hover:border-[#D4B475] transition-all duration-200 hover:shadow-[0_8px_22px_rgba(212,180,117,0.25)] ml-4 shrink-0 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Caption + Mobile Prev/Next */}
          <div
            className="max-w-6xl w-full mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-white/10 pt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="font-serif text-2xl text-[#F6F2EA] leading-snug">
                {activeCopy.title}
              </h3>
              <p className="text-sm text-[#C8C1B4] mt-1">{activeCopy.caption}</p>
            </div>

            <div className="flex sm:hidden items-center gap-3">
              <button
                type="button"
                aria-label={t.gallery.prevAria}
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + items.length) % items.length
                  )
                }
                className="flex-1 py-2.5 px-4 rounded-sm bg-[#0B1324] hover:bg-[#16233E] border border-[#D4B475]/30 hover:border-[#D4B475] text-xs font-medium text-[#F6F2EA] hover:text-[#E7CE99] transition-all duration-200 hover:shadow-[0_8px_20px_rgba(212,180,117,0.22)] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{t.gallery.prevLabel}</span>
              </button>
              <button
                type="button"
                aria-label={t.gallery.nextAria}
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % items.length)
                }
                className="flex-1 py-2.5 px-4 rounded-sm bg-[#0B1324] hover:bg-[#16233E] border border-[#D4B475]/30 hover:border-[#D4B475] text-xs font-medium text-[#F6F2EA] hover:text-[#E7CE99] transition-all duration-200 hover:shadow-[0_8px_20px_rgba(212,180,117,0.22)] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{t.gallery.nextLabel}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
