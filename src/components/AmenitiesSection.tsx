import { motion } from 'motion/react';
import {
  Car,
  Clock,
  Compass,
  Dumbbell,
  Shield,
  Sparkles,
  Waves,
  Wine,
} from 'lucide-react';
import { HOTEL_CONFIG, type AmenityItem } from '../config/hotelConfig';
import { LuxuryImage } from './LuxuryImage';

const ICON_MAP: Record<AmenityItem['iconName'], typeof Waves> = {
  Waves,
  Sparkles,
  Wine,
  Compass,
  Car,
  Dumbbell,
  Clock,
  Shield,
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
            Sanctuary &amp; Facilities
          </p>
          <h2
            className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] font-medium leading-[1.12] text-[#F6F2EA]"
            style={{ textWrap: 'balance' }}
          >
            Restorative waters, private charters, and quiet personal attention.
          </h2>
        </div>

        {/* Dual Visual Feature Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 mb-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative rounded-sm overflow-hidden border border-[#D4B475]/20 min-h-[300px] sm:min-h-[380px]"
          >
            <LuxuryImage
              src={HOTEL_CONFIG.images.poolTerrace}
              alt="Heated rooftop saltwater infinity pool overlooking the twilight bay"
              className="w-full h-full"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#060911]/85 via-[#060911]/20 to-transparent"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs tracking-[0.18em] text-[#D4B475] mb-1 tabular-nums">
                Rooftop Terrace · Heated to 28°C Year-Round
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA]">
                The Horizon Saltwater Infinity Pool
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative rounded-sm overflow-hidden border border-[#D4B475]/20 min-h-[300px] sm:min-h-[380px]"
          >
            <LuxuryImage
              src={HOTEL_CONFIG.images.spaSanctuary}
              alt="Subterranean thermal wellness plunge pool in honed dark slate"
              className="w-full h-full"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#060911]/85 via-[#060911]/20 to-transparent"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs tracking-[0.18em] text-[#D4B475] mb-1 tabular-nums">
                1,200 m² Hydrotherapy Circuit
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA]">
                The Slate Thermal Sanctuary
              </h3>
            </div>
          </motion.div>
        </div>

        {/* 8 Animated Facility Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="group p-6 bg-[#0B1324] border border-white/10 hover:border-[#D4B475]/45 rounded-sm transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-sm bg-[#060911] border border-[#D4B475]/25 flex items-center justify-center mb-5 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:border-[#D4B475]">
                  <Icon className="w-5 h-5 text-[#D4B475] stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="font-serif text-xl font-medium text-[#F6F2EA] mb-1.5">
                  {amenity.title}
                </h3>
                <p className="text-xs text-[#D4B475] tabular-nums mb-3">
                  {amenity.hours}
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
