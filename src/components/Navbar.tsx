import { type KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe, Menu, Phone, X } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { useLanguage } from '../i18n/LanguageContext';
import {
  type LanguageCode,
  SUPPORTED_LANGUAGES,
} from '../i18n/translations';

interface NavbarProps {
  onNavigateEnquiry: () => void;
}

export function Navbar({ onNavigateEnquiry }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const langTriggerRef = useRef<HTMLButtonElement | null>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const desktopLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.rooms, href: '#suites' },
    { label: t.nav.amenities, href: '#amenities' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.location, href: '#location' },
  ];

  const mobileLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.rooms, href: '#suites' },
    { label: t.nav.amenities, href: '#amenities' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.neighborhood, href: '#attractions' },
    { label: t.nav.location, href: '#location' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.instagram, href: '#instagram' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const currentLangOption =
    SUPPORTED_LANGUAGES.find((item) => item.code === language) ??
    SUPPORTED_LANGUAGES[0];

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
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.documentElement.style.overflowY = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.documentElement.style.overflowY = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!langOpen) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
    };

    const handleEscape = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLangOpen(false);
        langTriggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [langOpen]);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectLanguage = (code: LanguageCode) => {
    setLanguage(code);
    setLangOpen(false);
    langTriggerRef.current?.focus();
  };

  const handleOptionKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const count = SUPPORTED_LANGUAGES.length;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      optionRefs.current[(index + 1) % count]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      optionRefs.current[(index - 1 + count) % count]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      optionRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      optionRefs.current[count - 1]?.focus();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-obsidian border-b border-[#D4B475]/20 shadow-[0_12px_36px_rgba(0,0,0,0.45)]'
            : 'bg-gradient-to-b from-[#060911]/85 via-[#060911]/45 to-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 lg:h-20 flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 xl:gap-8 min-w-0">
          {/* Zone 1: Single-line brand wordmark (untranslated brand name) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="font-serif text-lg sm:text-2xl font-semibold tracking-tight text-[#F6F2EA] hover:text-[#D4B475] transition-colors whitespace-nowrap truncate min-w-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4B475]"
          >
            {HOTEL_CONFIG.name}
          </a>

          {/* Zone 2: 5 concise single-line navigation links */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-5 xl:gap-7"
          >
            {desktopLinks.map((item) => (
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

          {/* Zone 3: Language Selector Dropdown + Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Accessible Header Language Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                ref={langTriggerRef}
                type="button"
                aria-label={t.nav.languageAria}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-controls="header-language-listbox"
                onClick={() => setLangOpen((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 text-xs font-medium text-[#F6F2EA] hover:text-[#E7CE99] bg-[#0B1324]/85 hover:bg-[#16233E] border border-[#D4B475]/30 hover:border-[#D4B475] rounded-sm transition-all duration-200 hover:shadow-[0_8px_22px_rgba(212,180,117,0.24)] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4B475]"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4B475] shrink-0" />
                <span className="sm:hidden">{currentLangOption.shortLabel}</span>
                <span className="hidden sm:inline">
                  {currentLangOption.nativeLabel}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#C8C1B4] transition-transform duration-200 ${
                    langOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {langOpen && (
                <div
                  id="header-language-listbox"
                  role="listbox"
                  aria-label={t.nav.languageMenuAria}
                  className="absolute right-0 mt-2 w-44 py-1.5 bg-[#0B1324] border border-[#D4B475]/35 rounded-sm shadow-[0_18px_48px_rgba(0,0,0,0.65)] z-50"
                >
                  {SUPPORTED_LANGUAGES.map((opt, idx) => {
                    const selected = opt.code === language;
                    return (
                      <button
                        key={opt.code}
                        ref={(el) => {
                          optionRefs.current[idx] = el;
                        }}
                        type="button"
                        role="option"
                        aria-selected={selected}
                        lang={opt.code}
                        onClick={() => handleSelectLanguage(opt.code)}
                        onKeyDown={(e) => handleOptionKeyDown(e, idx)}
                        className={`w-full px-3.5 py-2.5 flex items-center justify-between gap-3 text-left text-xs transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#D4B475] ${
                          selected
                            ? 'bg-[#111C33] text-[#D4B475] font-semibold'
                            : 'text-[#F6F2EA]/90 hover:bg-[#111C33]/70 hover:text-[#D4B475]'
                        }`}
                      >
                        <span className="flex items-center gap-2 min-w-0">
                          <span className="truncate">{opt.nativeLabel}</span>
                          <span className="text-[11px] text-[#C8C1B4] uppercase">
                            {opt.code}
                          </span>
                        </span>
                        {selected && (
                          <Check className="w-3.5 h-3.5 text-[#D4B475] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={onNavigateEnquiry}
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(212,180,117,0.38)] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6F2EA]"
            >
              {t.nav.enquireNow}
            </button>

            <button
              type="button"
              aria-label={mobileOpen ? t.nav.closeMenuAria : t.nav.openMenuAria}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#F6F2EA] hover:text-[#E7CE99] border border-[#D4B475]/25 hover:border-[#D4B475] rounded-sm bg-[#0B1324]/60 hover:bg-[#16233E] transition-all duration-200 hover:shadow-[0_8px_20px_rgba(212,180,117,0.22)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4B475]"
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
              aria-label={t.nav.closeMenuAria}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center w-11 h-11 text-[#F6F2EA] hover:text-[#D4B475] border border-[#D4B475]/25 rounded-sm cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="py-6 flex flex-col gap-2" aria-label="Mobile menu links">
            {mobileLinks.map((item) => (
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

          {/* Mobile Drawer Language Switcher */}
          <div className="pb-5">
            <div
              role="group"
              aria-label={t.nav.languageMenuAria}
              className="grid grid-cols-3 gap-2"
            >
              {SUPPORTED_LANGUAGES.map((opt) => {
                const selected = opt.code === language;
                return (
                  <button
                    key={opt.code}
                    type="button"
                    lang={opt.code}
                    aria-pressed={selected}
                    onClick={() => setLanguage(opt.code)}
                    className={`py-2 px-3 text-xs font-medium rounded-sm border transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      selected
                        ? 'bg-[#D4B475] text-[#060911] border-[#D4B475] font-semibold hover:bg-[#E7CE99] hover:shadow-[0_6px_18px_rgba(212,180,117,0.3)]'
                        : 'bg-[#0B1324] text-[#F6F2EA] border-[#D4B475]/25 hover:bg-[#16233E] hover:text-[#E7CE99] hover:border-[#D4B475] hover:shadow-[0_6px_16px_rgba(212,180,117,0.18)]'
                    }`}
                  >
                    {opt.nativeLabel}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 space-y-3 border-t border-[#D4B475]/20">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onNavigateEnquiry();
              }}
              className="w-full py-3.5 px-6 text-sm font-semibold text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(212,180,117,0.38)] cursor-pointer"
            >
              {t.nav.enquireNow}
            </button>
            <a
              href={HOTEL_CONFIG.contact.phoneHref}
              className="w-full py-3 px-6 text-sm font-medium text-[#F6F2EA] border border-[#D4B475]/35 hover:bg-[#16233E] hover:text-[#E7CE99] hover:border-[#D4B475] rounded-sm flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-[0_8px_22px_rgba(212,180,117,0.2)]"
            >
              <Phone className="w-4 h-4 text-[#D4B475]" />
              <span>
                {t.nav.callLabel} {HOTEL_CONFIG.contact.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
