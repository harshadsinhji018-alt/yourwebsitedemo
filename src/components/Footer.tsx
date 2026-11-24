import { ArrowUp } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { LuxuryDivider } from './LuxuryDivider';

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.rooms, href: '#suites' },
    { label: t.nav.amenities, href: '#amenities' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.neighborhood, href: '#attractions' },
    { label: t.nav.location, href: '#location' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="w-full overflow-x-clip bg-[#060911] text-[#C8C1B4]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-24 sm:pt-14 sm:pb-24 lg:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#F6F2EA]">
              {HOTEL_CONFIG.displayBrand}
            </p>
            <p className="text-xs tracking-[0.16em] text-[#D4B475] mt-1.5">
              {t.footer.regionLabel}
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm"
          >
            {footerLinks.map((link) => (
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
            aria-label={t.footer.backToTopAria}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-[#D4B475]/35 bg-[#0B1324] text-xs font-medium text-[#D4B475] hover:bg-[#D4B475] hover:text-[#060911] hover:border-[#E7CE99] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(212,180,117,0.28)] whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

        <LuxuryDivider tone="dark" align="center" className="my-8 sm:my-10" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#C8C1B4]/80">
          <p>
            © {new Date().getFullYear()} {HOTEL_CONFIG.name}.{' '}
            {t.footer.copyrightSuffix}
          </p>
          <p className="tabular-nums">
            {t.location.addressLine1}, {t.location.addressLine2} ·{' '}
            {HOTEL_CONFIG.contact.phoneDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}
