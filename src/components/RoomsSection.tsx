import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, MessageCircle, X } from 'lucide-react';
import { HOTEL_CONFIG, type RoomItem } from '../config/hotelConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { LuxuryImage } from './LuxuryImage';
import { LuxuryDivider } from './LuxuryDivider';
import { TiltFrame } from './TiltFrame';

interface RoomsSectionProps {
  onEnquireRoom: (roomName: string) => void;
}

type CategoryFilter = 'All' | 'Deluxe Rooms' | 'Classic Rooms';

export function RoomsSection({ onEnquireRoom }: RoomsSectionProps) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<CategoryFilter>('All');
  const [selectedRoom, setSelectedRoom] = useState<RoomItem | null>(null);

  const filteredRooms =
    filter === 'All'
      ? HOTEL_CONFIG.rooms
      : HOTEL_CONFIG.rooms.filter((room) => room.category === filter);

  const getTabLabel = (tab: CategoryFilter) => {
    if (tab === 'Deluxe Rooms') return t.rooms.tabs.double;
    if (tab === 'Classic Rooms') return t.rooms.tabs.twin;
    return t.rooms.tabs.all;
  };

  useEffect(() => {
    if (!selectedRoom) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedRoom(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedRoom]);

  const selectedRoomCopy = selectedRoom
    ? t.rooms.items[selectedRoom.id] ?? {
        name: selectedRoom.name,
        categoryLabel: selectedRoom.category,
        bedding: selectedRoom.bedding,
        summary: selectedRoom.summary,
        highlights: selectedRoom.highlights,
      }
    : null;

  return (
    <section
      id="suites"
      className="relative w-full overflow-x-clip bg-[#0B1324] text-[#F6F2EA] py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
          <div className="max-w-2xl min-w-0">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#D4B475] mb-3">
              {t.rooms.kicker}
            </p>
            <h2
              className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] font-medium leading-[1.18] text-[#F6F2EA]"
              style={{ textWrap: 'balance' }}
            >
              {t.rooms.headline}
            </h2>
          </div>

          <div
            role="tablist"
            aria-label={t.rooms.filterAria}
            className="inline-flex flex-wrap items-center gap-1.5 p-1 bg-[#060911] border border-[#D4B475]/20 rounded-sm self-start lg:self-auto"
          >
            {(['All', 'Deluxe Rooms', 'Classic Rooms'] as const).map(
              (tab) => {
                const active = filter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(tab)}
                    className={`px-4 py-2 text-xs font-medium rounded-sm transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#D4B475] text-[#060911] hover:bg-[#E7CE99] hover:shadow-[0_6px_18px_rgba(212,180,117,0.32)]'
                        : 'text-[#C8C1B4] hover:bg-[#111C33] hover:text-[#F6F2EA] hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)]'
                    }`}
                  >
                    {getTabLabel(tab)}
                  </button>
                );
              }
            )}
          </div>
        </div>

        <LuxuryDivider tone="dark" align="left" className="mb-12" />

        {/* Rooms Grid with Subtle 3D Tilt & Proper Native Aspect Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {filteredRooms.map((room, index) => {
            const copy = t.rooms.items[room.id] ?? {
              name: room.name,
              categoryLabel: room.category,
              bedding: room.bedding,
              summary: room.summary,
              highlights: room.highlights,
            };

            return (
              <motion.article
                key={room.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`flex flex-col min-w-0 ${
                  index === 0 &&
                  filteredRooms.length >= 4 &&
                  room.aspectClass === 'aspect-[16/10]'
                    ? 'md:col-span-2 lg:col-span-2'
                    : ''
                }`}
              >
                <TiltFrame
                  maxTilt={3.2}
                  className="flex-1 flex flex-col bg-[#111C33] border border-[#D4B475]/20 rounded-sm overflow-hidden shadow-[0_18px_48px_rgba(0,0,0,0.35)]"
                >
                  <div
                    className={`relative overflow-hidden ${room.aspectClass} max-h-[460px]`}
                  >
                    <LuxuryImage
                      src={room.image}
                      alt={`${copy.name} — ${HOTEL_CONFIG.name}`}
                      className="w-full h-full transition-transform duration-700 hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#060911]/80 via-transparent to-transparent"
                    />
                    <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-xs tracking-[0.12em] text-[#D4B475]">
                        {copy.categoryLabel}
                      </span>
                      <span className="text-xs font-medium text-[#F6F2EA]/90">
                        {copy.bedding}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-6">
                    <div>
                      <h3 className="font-serif text-2xl font-medium text-[#F6F2EA] mb-2 leading-snug">
                        {copy.name}
                      </h3>

                      <p className="text-xs text-[#C8C1B4] flex flex-wrap items-center gap-x-2 gap-y-1 mb-4">
                        <span>{t.rooms.quickTags[0]}</span>
                        <span aria-hidden="true">·</span>
                        <span>{t.rooms.quickTags[1]}</span>
                        <span aria-hidden="true">·</span>
                        <span>{t.rooms.quickTags[2]}</span>
                      </p>

                      <p className="text-sm text-[#F6F2EA]/80 leading-relaxed">
                        {copy.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedRoom(room)}
                        className="px-3 py-1.5 -ml-3 text-xs font-semibold tracking-wider text-[#D4B475] hover:text-[#E7CE99] hover:bg-[#D4B475]/10 rounded-sm inline-flex items-center gap-1.5 transition-all duration-200 hover:shadow-[0_6px_16px_rgba(212,180,117,0.2)] cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>{t.rooms.viewDetails}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onEnquireRoom(copy.name)}
                        className="px-4 py-2 text-xs font-medium text-[#F6F2EA] bg-[#0B1324]/70 border border-[#D4B475]/35 hover:bg-[#D4B475] hover:text-[#060911] hover:border-[#D4B475] rounded-sm transition-all duration-200 hover:shadow-[0_8px_22px_rgba(212,180,117,0.3)] cursor-pointer whitespace-nowrap shrink-0"
                      >
                        {t.rooms.enquire}
                      </button>
                    </div>
                  </div>
                </TiltFrame>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Room Detail Modal */}
      {selectedRoom && selectedRoomCopy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="room-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#060911]/85 backdrop-blur-md"
          onClick={() => setSelectedRoom(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0B1324] border border-[#D4B475]/30 rounded-sm shadow-[0_28px_80px_rgba(0,0,0,0.7)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label={t.rooms.closeModalAria}
              onClick={() => setSelectedRoom(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 inline-flex items-center justify-center rounded-sm bg-[#060911]/85 hover:bg-[#16233E] text-[#F6F2EA] hover:text-[#E7CE99] border border-[#D4B475]/30 hover:border-[#D4B475] transition-all duration-200 hover:shadow-[0_8px_22px_rgba(212,180,117,0.28)] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full max-h-[54vh] bg-[#060911] flex items-center justify-center overflow-hidden">
              <img
                src={selectedRoom.image}
                alt={selectedRoomCopy.name}
                referrerPolicy="no-referrer"
                className="w-full max-h-[54vh] object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs tracking-[0.16em] text-[#D4B475] mb-2">
                    {selectedRoomCopy.categoryLabel}
                  </p>
                  <h3
                    id="room-modal-title"
                    className="font-serif text-3xl font-medium text-[#F6F2EA] leading-snug"
                  >
                    {selectedRoomCopy.name}
                  </h3>
                </div>
                <p className="text-xs font-medium tracking-wider text-[#D4B475] whitespace-nowrap">
                  {selectedRoomCopy.bedding}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#F6F2EA]/85 leading-relaxed">
                {selectedRoomCopy.summary}
              </p>

              <div>
                <h4 className="text-xs font-semibold tracking-[0.16em] text-[#D4B475] mb-3">
                  {t.rooms.highlightsHeading}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedRoomCopy.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#F6F2EA]/85"
                    >
                      <Check className="w-4 h-4 text-[#D4B475] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
                <a
                  href={`https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                    t.rooms.whatsappRoomMessage(selectedRoomCopy.name)
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider text-[#F6F2EA] bg-[#060911] hover:bg-[#16233E] hover:text-[#E7CE99] border border-[#D4B475]/40 hover:border-[#D4B475] rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(212,180,117,0.22)] whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4B475]" />
                  <span>{t.rooms.whatsappEnquiry}</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const name = selectedRoomCopy.name;
                    setSelectedRoom(null);
                    onEnquireRoom(name);
                  }}
                  className="px-6 py-3 text-xs font-semibold tracking-wider text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(212,180,117,0.38)] cursor-pointer whitespace-nowrap"
                >
                  {t.rooms.enquireThisRoom}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
