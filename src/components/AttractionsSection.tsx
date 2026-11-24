import { motion } from 'motion/react';
import { Compass, MapPin } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';

export function AttractionsSection() {
  return (
    <section
      id="attractions"
      className="relative bg-[#060911] text-[#F6F2EA] py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D4B475]/20 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#D4B475] mb-3">
              Neighborhood &amp; Connectivity
            </p>
            <h2
              className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] font-medium leading-[1.12] text-[#F6F2EA]"
              style={{ textWrap: 'balance' }}
            >
              Positioned in GIDC Naroda for business and city access.
            </h2>
          </div>

          <a
            href="#location"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D4B475] hover:text-[#E7CE99] transition-colors whitespace-nowrap shrink-0"
          >
            <MapPin className="w-4 h-4" />
            <span>Explore Interactive Map</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOTEL_CONFIG.localityHighlights.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-7 bg-[#0B1324] border border-white/10 hover:border-[#D4B475]/40 rounded-sm flex flex-col justify-between gap-5 transition-colors duration-200"
            >
              <div>
                <p className="text-xs text-[#D4B475] mb-4">{item.tag}</p>

                <h3 className="font-serif text-2xl font-medium text-[#F6F2EA] mb-2.5">
                  {item.name}
                </h3>

                <p className="text-sm text-[#C8C1B4] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#F6F2EA]/75">
                <Compass className="w-3.5 h-3.5 text-[#D4B475]" />
                <span>Ask our 24-Hour Front Desk for local directions</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
