import { type KeyboardEvent, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';

export function FaqSection() {
  const [openIds, setOpenIds] = useState<string[]>([
    HOTEL_CONFIG.faqs[0]?.id ?? '',
  ]);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const allExpanded = openIds.length === HOTEL_CONFIG.faqs.length;

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleAll = () => {
    if (allExpanded) {
      setOpenIds([]);
    } else {
      setOpenIds(HOTEL_CONFIG.faqs.map((item) => item.id));
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const count = HOTEL_CONFIG.faqs.length;
    if (count === 0) return;

    let nextIndex: number | null = null;
    if (e.key === 'ArrowDown') {
      nextIndex = (index + 1) % count;
    } else if (e.key === 'ArrowUp') {
      nextIndex = (index - 1 + count) % count;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = count - 1;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      triggerRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section
      id="faq"
      className="relative bg-[#0B1324] text-[#F6F2EA] py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Editorial Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#D4B475] mb-3">
                Guest Information
              </p>
              <h2
                className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] font-medium leading-[1.12] text-[#F6F2EA] mb-4"
                style={{ textWrap: 'balance' }}
              >
                Frequently asked questions.
              </h2>
              <p className="text-base text-[#C8C1B4] leading-relaxed">
                Essential details about guest rooms, property facilities, and
                reaching our 24-hour front desk at {HOTEL_CONFIG.name} in GIDC
                Naroda.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D4B475]/20 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleToggleAll}
                className="px-4 py-2.5 text-xs font-medium text-[#F6F2EA] bg-[#060911] hover:border-[#D4B475] hover:text-[#D4B475] border border-[#D4B475]/30 rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4B475]"
              >
                {allExpanded ? 'Collapse All' : 'Expand All'}
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#D4B475] hover:text-[#E7CE99] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Ask the Front Desk</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Multi-Open Accordion Column */}
          <div className="lg:col-span-7 space-y-3.5">
            {HOTEL_CONFIG.faqs.map((faq, index) => {
              const isOpen = openIds.includes(faq.id);
              const buttonId = `faq-trigger-${faq.id}`;
              const panelId = `faq-panel-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className={`rounded-sm border transition-colors duration-200 ${
                    isOpen
                      ? 'bg-[#111C33] border-[#D4B475]/45 shadow-[0_14px_38px_rgba(0,0,0,0.28)]'
                      : 'bg-[#060911]/55 border-white/10 hover:border-[#D4B475]/30'
                  }`}
                >
                  <h3>
                    <button
                      ref={(el) => {
                        triggerRefs.current[index] = el;
                      }}
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(faq.id)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-full px-5 sm:px-7 py-5 sm:py-6 flex items-center justify-between gap-5 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#D4B475] rounded-sm"
                    >
                      <span className="font-serif text-xl sm:text-[1.35rem] font-medium leading-snug text-[#F6F2EA]">
                        {faq.question}
                      </span>

                      {/* Animated Plus / Minus Indicator */}
                      <span
                        aria-hidden="true"
                        className={`relative w-8 h-8 rounded-sm border flex items-center justify-center shrink-0 transition-colors duration-200 ${
                          isOpen
                            ? 'border-[#D4B475] bg-[#D4B475]/10'
                            : 'border-[#D4B475]/30 bg-[#060911]/70'
                        }`}
                      >
                        {/* Horizontal bar */}
                        <span className="w-3.5 h-[1.5px] bg-[#D4B475] rounded-full" />
                        {/* Vertical bar rotates & fades out when open */}
                        <span
                          className={`absolute w-[1.5px] h-3.5 bg-[#D4B475] rounded-full transition-all duration-300 ease-out ${
                            isOpen
                              ? 'rotate-90 scale-y-0 opacity-0'
                              : 'rotate-0 scale-y-100 opacity-100'
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-7 pb-6 pt-0">
                          <div className="pt-4 border-t border-white/10">
                            <p className="text-sm sm:text-[15px] text-[#C8C1B4] leading-[1.75]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
