import { HOTEL_CONFIG } from '../config/hotelConfig';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * Floating bottom-left WhatsApp contact button.
 * Sits at z-40 so it remains visible while scrolling, yet stays beneath
 * mobile navigation drawers and lightboxes (z-50).
 */
export function FloatingWhatsAppButton() {
  const { t } = useLanguage();

  const whatsappHref = `https://wa.me/${HOTEL_CONFIG.contact.floatingWhatsappNumber}?text=${encodeURIComponent(
    HOTEL_CONFIG.contact.floatingWhatsappPrefill
  )}`;

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 group">
      {/* Subtle concentric pulse halo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/45 animate-whatsapp-pulse"
      />

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floatingWhatsapp.ariaLabel}
        className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#1FAF54] hover:bg-[#158F42] text-white border border-[#D4B475]/65 hover:border-[#E7CE99] shadow-[0_12px_30px_rgba(6,9,17,0.5)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(31,175,84,0.45)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#D4B475]"
      >
        {/* Official WhatsApp mark SVG */}
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="w-7 h-7 fill-current"
        >
          <path d="M16.01 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.1 28.8l6.58-1.73a12.76 12.76 0 0 0 6.33 1.67h.01c7.06 0 12.79-5.73 12.79-12.8 0-3.42-1.33-6.64-3.75-9.05A12.72 12.72 0 0 0 16.01 3.2Zm0 23.38h-.01a10.6 10.6 0 0 1-5.41-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.39a10.62 10.62 0 0 1-1.63-5.64c0-5.87 4.78-10.64 10.65-10.64 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.12 7.52c0 5.87-4.78 10.64-10.74 10.64Zm5.84-7.97c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.31.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>

      {/* Hover / Focus Desktop Label Tooltip */}
      <span
        role="tooltip"
        className="pointer-events-none hidden md:inline-flex items-center whitespace-nowrap absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3.5 py-2 text-xs font-medium text-[#F6F2EA] bg-[#060911]/95 border border-[#D4B475]/35 rounded-sm shadow-xl opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:opacity-100 group-focus-within:translate-x-0 transition-all duration-200"
      >
        {t.floatingWhatsapp.tooltip}
      </span>
    </div>
  );
}
