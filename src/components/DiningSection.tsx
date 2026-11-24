import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { HOTEL_CONFIG, type DiningHighlight } from '../config/hotelConfig';
import { LuxuryImage } from './LuxuryImage';
import { TiltFrame } from './TiltFrame';

interface DiningSectionProps {
  onEnquireDining: () => void;
}

export function DiningSection({ onEnquireDining }: DiningSectionProps) {
  const [activeTab, setActiveTab] = useState<DiningHighlight['id']>('tasting');

  const currentTab =
    HOTEL_CONFIG.dining.tabs.find((t) => t.id === activeTab) ||
    HOTEL_CONFIG.dining.tabs[0];

  return (
    <section
      id="dining"
      className="relative bg-[#F6F2EA] text-[#0B1324] py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Dining Room Visual */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <TiltFrame className="w-full rounded-sm overflow-hidden shadow-[0_24px_60px_rgba(6,9,17,0.16)]">
              <div className="relative w-full h-full min-h-[380px] lg:min-h-[560px]">
                <LuxuryImage
                  src={HOTEL_CONFIG.images.diningRoom}
                  alt="L'Orangerie candlelit dining room with midnight velvet banquettes and wine wall"
                  className="w-full h-full"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#060911]/80 via-transparent to-transparent"
                />
                <div className="absolute bottom-6 left-6 right-6 text-[#F6F2EA]">
                  <p className="text-xs tracking-[0.2em] text-[#D4B475] mb-1">
                    {HOTEL_CONFIG.dining.chef}
                  </p>
                  <p className="font-serif text-2xl">
                    {HOTEL_CONFIG.dining.name}
                  </p>
                </div>
              </div>
            </TiltFrame>
          </motion.div>

          {/* Culinary Program & Interactive Tasting Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between space-y-8"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#8A6A2E] mb-3">
                Gastronomy &amp; Cellar
              </p>
              <h2
                className="font-serif text-[clamp(2rem,3.4vw,3rem)] font-medium leading-[1.12] text-[#0B1324] mb-5"
                style={{ textWrap: 'balance' }}
              >
                {HOTEL_CONFIG.dining.name}
              </h2>
              <p className="text-base text-[#2B3447] leading-relaxed max-w-[60ch] mb-7">
                {HOTEL_CONFIG.dining.summary}
              </p>

              {/* Interactive Menu Category Tabs */}
              <div
                role="tablist"
                aria-label="Culinary experiences"
                className="inline-flex flex-wrap gap-1 p-1 bg-[#EAE3D5] border border-[#0B1324]/10 rounded-sm mb-7"
              >
                {HOTEL_CONFIG.dining.tabs.map((tab) => {
                  const isActive = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#0B1324] text-[#F6F2EA]'
                          : 'text-[#2B3447] hover:text-[#0B1324]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-[#0B1324]/15">
                  <h3 className="font-serif text-2xl font-medium text-[#0B1324]">
                    {currentTab.subtitle}
                  </h3>
                  <span className="text-xs text-[#4A5366] tabular-nums">
                    {currentTab.schedule} · {currentTab.dressCode}
                  </span>
                </div>

                <ul className="divide-y divide-[#0B1324]/10">
                  {currentTab.courses.map((course) => (
                    <li key={course.name} className="py-3.5">
                      <p className="text-sm font-semibold text-[#0B1324]">
                        {course.name}
                      </p>
                      <p className="text-sm text-[#4A5366] mt-0.5">
                        {course.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onEnquireDining}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider text-[#F6F2EA] bg-[#0B1324] hover:bg-[#16233E] rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Request Table via Concierge</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4B475]" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
