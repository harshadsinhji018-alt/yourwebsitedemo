import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';

interface NavbarProps {
  onNavigateEnquiry: () => void;
}

const DESKTOP_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Suites', href: '#suites' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Dining', href: '#dining' },
  { label: 'Location', href: '#location' },
];

const MOBILE_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms & Suites', href: '#suites' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Dining', href: '#dining' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Attractions', href: '#attractions' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onNavigateEnquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-obsidian border-b border-[#D4B475]/20 shadow-[0_12px_36px_rgba(0,0,0,0.45)]'
            : 'bg-gradient-to-b from-[#060911]/85 via-[#060911]/45 to-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 lg:h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line brand wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#F6F2EA] hover:text-[#D4B475] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4B475]"
          >
            {HOTEL_CONFIG.name}
          </a>

          {/* Zone 2: 5 concise single-line navigation links */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {DESKTOP_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="relative py-1 text-sm font-medium text-[#F6F2EA]/85 hover:text-[#D4B475] transition-colors whitespace-nowrap shrink-0 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-[#D4B475] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4B475]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onNavigateEnquiry}
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6F2EA]"
            >
              Enquire Now
            </button>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#F6F2EA] hover:text-[#D4B475] border border-[#D4B475]/25 rounded-sm bg-[#0B1324]/60 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4B475]"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 lg:hidden bg-[#060911]/95 backdrop-blur-xl flex flex-col justify-between p-6 overflow-y-auto"
        >
          <div className="flex items-center justify-between pb-6 border-b border-[#D4B475]/20">
            <span className="font-serif text-2xl font-semibold text-[#F6F2EA]">
              {HOTEL_CONFIG.name}
            </span>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center w-11 h-11 text-[#F6F2EA] hover:text-[#D4B475] border border-[#D4B475]/25 rounded-sm cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="py-8 flex flex-col gap-3" aria-label="Mobile menu links">
            {MOBILE_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="font-serif text-2xl text-[#F6F2EA] hover:text-[#D4B475] py-2 border-b border-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 space-y-3 border-t border-[#D4B475]/20">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onNavigateEnquiry();
              }}
              className="w-full py-3.5 px-6 text-sm font-semibold text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-colors cursor-pointer"
            >
              Private Concierge Enquiry
            </button>
            <a
              href={HOTEL_CONFIG.contact.phoneHref}
              className="w-full py-3 px-6 text-sm font-medium text-[#F6F2EA] border border-[#D4B475]/35 rounded-sm flex items-center justify-center gap-2 hover:border-[#D4B475] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D4B475]" />
              <span>Call {HOTEL_CONFIG.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
