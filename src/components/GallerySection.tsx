import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { HOTEL_CONFIG, type GalleryItem } from '../config/hotelConfig';
import { LuxuryImage } from './LuxuryImage';

type GalleryCategory = 'All' | GalleryItem['category'];

export function GallerySection() {
  const [category, setCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items =
    category === 'All'
      ? HOTEL_CONFIG.gallery
      : HOTEL_CONFIG.gallery.filter((g) => g.category === category);

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

  return (
    <section
      id="gallery"
      className="relative bg-[#0B1324] text-[#F6F2EA] py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header + Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#D4B475]/20 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#D4B475] mb-3">
              Visual Archive
            </p>
            <h2
              className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] font-medium leading-[1.12] text-[#F6F2EA]"
              style={{ textWrap: 'balance' }}
            >
              Architecture, twilight reflections, and quiet interiors.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter gallery photographs"
            className="inline-flex flex-wrap items-center gap-1.5 p-1 bg-[#060911] border border-[#D4B475]/20 rounded-sm self-start lg:self-auto"
          >
            {(['All', 'Architecture', 'Suites', 'Culinary & Spa'] as const).map(
              (tab) => {
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
                    className={`px-4 py-2 text-xs font-medium rounded-sm transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#D4B475] text-[#060911]'
                        : 'text-[#C8C1B4] hover:text-[#F6F2EA]'
                    }`}
                  >
                    {tab}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Responsive Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative text-left rounded-sm overflow-hidden border border-[#D4B475]/20 bg-[#060911] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4B475] ${
                item.span === 'wide' && category === 'All'
                  ? 'md:col-span-2 aspect-[16/9]'
                  : 'aspect-[4/3]'
              }`}
            >
              <LuxuryImage
                src={item.image}
                alt={item.title}
                className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#060911]/85 via-[#060911]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"
              />
              <div className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-[#060911]/70 border border-[#D4B475]/30 flex items-center justify-center text-[#F6F2EA] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Expand className="w-4 h-4 text-[#D4B475]" />
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs tracking-[0.18em] text-[#D4B475] mb-1">
                  {item.category}
                </p>
                <p className="font-serif text-xl sm:text-2xl text-[#F6F2EA]">
                  {item.title}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Smooth Lightbox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery lightbox: ${activeItem.title}`}
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
              <span>{activeItem.category}</span>
            </div>

            <button
              type="button"
              aria-label="Close gallery lightbox"
              onClick={() => setLightboxIndex(null)}
              className="w-11 h-11 inline-flex items-center justify-center rounded-sm bg-[#0B1324] border border-[#D4B475]/30 text-[#F6F2EA] hover:text-[#D4B475] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image Stage */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Previous photograph"
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + items.length) % items.length
                )
              }
              className="hidden sm:inline-flex items-center justify-center w-12 h-12 rounded-sm bg-[#0B1324]/85 border border-[#D4B475]/30 text-[#F6F2EA] hover:text-[#D4B475] hover:border-[#D4B475] transition-colors mr-4 shrink-0 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full max-h-[68vh] aspect-[16/10] rounded-sm overflow-hidden border border-[#D4B475]/25 bg-[#0B1324]"
            >
              <LuxuryImage
                src={activeItem.image}
                alt={activeItem.title}
                loading="eager"
                className="w-full h-full"
              />
            </motion.div>

            <button
              type="button"
              aria-label="Next photograph"
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % items.length)
              }
              className="hidden sm:inline-flex items-center justify-center w-12 h-12 rounded-sm bg-[#0B1324]/85 border border-[#D4B475]/30 text-[#F6F2EA] hover:text-[#D4B475] hover:border-[#D4B475] transition-colors ml-4 shrink-0 cursor-pointer"
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
              <h3 className="font-serif text-2xl text-[#F6F2EA]">
                {activeItem.title}
              </h3>
              <p className="text-sm text-[#C8C1B4] mt-1">{activeItem.caption}</p>
            </div>

            <div className="flex sm:hidden items-center gap-3">
              <button
                type="button"
                aria-label="Previous photograph"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + items.length) % items.length
                  )
                }
                className="flex-1 py-2.5 px-4 rounded-sm bg-[#0B1324] border border-[#D4B475]/30 text-xs font-medium text-[#F6F2EA] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              <button
                type="button"
                aria-label="Next photograph"
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % items.length)
                }
                className="flex-1 py-2.5 px-4 rounded-sm bg-[#0B1324] border border-[#D4B475]/30 text-xs font-medium text-[#F6F2EA] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
