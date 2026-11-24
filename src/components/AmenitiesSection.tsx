import { motion } from 'motion/react';
import {
  ArrowUpDown,
  BellRing,
  Car,
  Clock,
  Shirt,
  Wifi,
  Wind,
} from 'lucide-react';
import { HOTEL_CONFIG, type AmenityItem } from '../config/hotelConfig';
import { LuxuryImage } from './LuxuryImage';

const ICON_MAP: Record<AmenityItem['iconName'], typeof Wifi> = {
  Wifi,
  Wind,
  Car,
  BellRing,
  Clock,
  Shirt,
  ArrowUpDown,
};

export function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="relative bg-[#060911] text-[#F6F2EA] py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#D4B475] mb-3">
            Guest Facilities
          </p>
          <h2
            className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] font-medium leading-[1.12] text-[#F6F2EA]"
            style={{ textWrap: 'balance' }}
          >
            Essential comforts for effortless stays in GIDC Naroda.
          </h2>
        </div>

        {/* Dual Property Interior Showcase Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-sm overflow-hidden border border-[#D4B475]/20 aspect-[4/5] max-h-[480px] w-full animate-float-gentle float-showcase-a">
              <LuxuryImage
                src={HOTEL_CONFIG.images.amenitiesCorridor}
                alt="Hotel Silver Inn well-lit guest floor corridor and safety appointments"
                className="w-full h-full"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#060911]/85 via-[#060911]/20 to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs tracking-[0.18em] text-[#D4B475] mb-1">
                  Lift &amp; Corridor Access
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA]">
                  Brightly Lit Guest Floor Wings
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-sm overflow-hidden border border-[#D4B475]/20 aspect-[4/5] max-h-[480px] w-full animate-float-gentle float-showcase-b">
              <LuxuryImage
                src={HOTEL_CONFIG.images.amenitiesBathroom}
                alt="Clean attached en-suite bathroom with shower and geyser at Hotel Silver Inn"
                className="w-full h-full"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#060911]/85 via-[#060911]/20 to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs tracking-[0.18em] text-[#D4B475] mb-1">
                  Attached En-suite Baths
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA]">
                  Modern Tiled Washrooms &amp; Hot Water
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 7 Verified Hotel Silver Inn Facility Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {HOTEL_CONFIG.amenities.map((amenity, idx) => {
            const Icon = ICON_MAP[amenity.iconName];
            return (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] p-6 bg-[#0B1324] border border-white/10 hover:border-[#D4B475]/45 rounded-sm transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-sm bg-[#060911] border border-[#D4B475]/25 flex items-center justify-center mb-5 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:border-[#D4B475]">
                  <Icon className="w-5 h-5 text-[#D4B475] stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="font-serif text-xl font-medium text-[#F6F2EA] mb-1.5">
                  {amenity.title}
                </h3>
                <p className="text-xs text-[#D4B475] mb-3">
                  {amenity.subtitle}
                </p>
                <p className="text-sm text-[#C8C1B4] leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
