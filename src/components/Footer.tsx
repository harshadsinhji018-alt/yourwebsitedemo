import { ArrowUp } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#suites' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Neighborhood', href: '#attractions' },
  { label: 'Location', href: '#location' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#060911] text-[#C8C1B4] border-t border-[#D4B475]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-24 sm:pt-16 sm:pb-24 lg:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#F6F2EA]">
              {HOTEL_CONFIG.displayBrand}
            </p>
            <p className="text-xs tracking-[0.18em] text-[#D4B475] mt-1.5">
              {HOTEL_CONFIG.regionLabel}
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[#C8C1B4] hover:text-[#D4B475] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#D4B475] hover:text-[#E7CE99] transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#C8C1B4]/80">
          <p>
            © {new Date().getFullYear()} {HOTEL_CONFIG.name}. All rights
            reserved.
          </p>
          <p className="tabular-nums">
            {HOTEL_CONFIG.contact.addressLine1},{' '}
            {HOTEL_CONFIG.contact.addressLine2} ·{' '}
            {HOTEL_CONFIG.contact.phoneDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}
