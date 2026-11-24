import { type FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { LuxuryDivider } from './LuxuryDivider';

interface ContactSectionProps {
  prefilledSubject?: { label: string; nonce: number };
}

type InterestKey =
  | 'availability'
  | 'doubleRoom'
  | 'twinRoom'
  | 'corporateStay';

export function ContactSection({ prefilledSubject }: ContactSectionProps) {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState<InterestKey>('availability');
  const [dates, setDates] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!prefilledSubject) return;
    setInterest('availability');
    setNotes(`${t.contact.notesPrefix} ${prefilledSubject.label}`);
    setSubmitted(false);
  }, [prefilledSubject, t.contact.notesPrefix]);

  const whatsappUrl = `https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    HOTEL_CONFIG.contact.whatsappPrefill
  )}`;

  const selectedInterestLabel = t.contact.interestOptions[interest];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (trimmedName.length < 2) {
      setErrorMsg(t.contact.validationName);
      return;
    }
    if (!trimmedPhone && !trimmedEmail) {
      setErrorMsg(t.contact.validationContact);
      return;
    }
    if (trimmedEmail && !emailRegex.test(trimmedEmail)) {
      setErrorMsg(t.contact.validationEmail);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-x-clip bg-[#060911] text-[#F6F2EA] py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Front Desk Direct Channels */}
          <div className="lg:col-span-5 space-y-8 min-w-0">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#D4B475] mb-3">
                {t.contact.kicker}
              </p>
              <h2
                className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] font-medium leading-[1.18] text-[#F6F2EA] mb-4"
                style={{ textWrap: 'balance' }}
              >
                {t.contact.headline}
              </h2>
              <p className="text-base text-[#C8C1B4] leading-relaxed">
                {t.contact.description}
              </p>
            </div>

            <div>
              <LuxuryDivider tone="dark" variant="hairline" className="mb-6" />
              <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-[#D4B475] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#F6F2EA]">
                    {t.location.addressLine1}
                  </p>
                  <p className="text-[#C8C1B4]">{t.location.addressLine2}</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <Phone className="w-4 h-4 text-[#D4B475] shrink-0" />
                <a
                  href={HOTEL_CONFIG.contact.phoneHref}
                  className="text-[#F6F2EA] hover:text-[#D4B475] transition-colors tabular-nums"
                >
                  {HOTEL_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3.5">
                <Clock className="w-4 h-4 text-[#D4B475] shrink-0" />
                <span className="text-[#C8C1B4]">
                  {t.contact.conciergeHours}
                </span>
              </div>
              </div>
            </div>

            {/* Direct Call Now & WhatsApp Enquiry Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-xs font-semibold tracking-wider text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(212,180,117,0.38)] whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.contact.whatsappEnquiry}</span>
              </a>

              <a
                href={HOTEL_CONFIG.contact.phoneHref}
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-xs font-semibold tracking-wider text-[#F6F2EA] bg-[#0B1324] hover:bg-[#16233E] hover:text-[#E7CE99] border border-[#D4B475]/35 hover:border-[#D4B475] rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(212,180,117,0.22)] whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#D4B475]" />
                <span>{t.contact.callNow}</span>
              </a>
            </div>
          </div>

          {/* Enquiry Presentation Form */}
          <div className="lg:col-span-7 bg-[#0B1324] border border-[#D4B475]/20 rounded-sm p-6 sm:p-9 shadow-[0_24px_60px_rgba(0,0,0,0.45)] min-w-0">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-10 h-10 text-[#D4B475] mx-auto stroke-[1.5]" />
                <h3 className="font-serif text-3xl text-[#F6F2EA] leading-snug">
                  {t.contact.submittedTitle}
                </h3>
                <p className="text-sm text-[#C8C1B4] max-w-md mx-auto leading-relaxed">
                  {t.contact.submittedIntroBeforeName}
                  <span className="text-[#F6F2EA]">{name}</span>
                  {t.contact.submittedIntroAfterName}
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                      t.contact.whatsappCustomMessage({
                        name,
                        interest: selectedInterestLabel,
                        dates,
                        notes,
                      })
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(212,180,117,0.38)]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.contact.sendViaWhatsapp}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 text-xs font-medium text-[#C8C1B4] hover:bg-[#16233E] hover:text-[#E7CE99] border border-white/15 hover:border-[#D4B475]/60 rounded-sm transition-all duration-200 hover:shadow-[0_8px_20px_rgba(212,180,117,0.18)] cursor-pointer"
                  >
                    {t.contact.editEnquiry}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="pb-4 border-b border-white/10">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] leading-snug">
                    {t.contact.formTitle}
                  </h3>
                  <p className="text-xs text-[#C8C1B4] mt-1 tabular-nums">
                    {t.contact.formSubtitle}
                  </p>
                </div>

                {errorMsg && (
                  <div
                    role="alert"
                    className="p-3.5 text-xs text-[#F6F2EA] bg-[#1A1317] border border-[#D4B475]/50 rounded-sm"
                  >
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-xs font-medium text-[#C8C1B4] mb-2"
                    >
                      {t.contact.nameLabel}
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3 text-sm text-[#F6F2EA] bg-[#060911] border border-white/15 focus:border-[#D4B475] focus:outline-none rounded-sm transition-colors placeholder:text-[#C8C1B4]/40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-xs font-medium text-[#C8C1B4] mb-2"
                    >
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full px-4 py-3 text-sm text-[#F6F2EA] bg-[#060911] border border-white/15 focus:border-[#D4B475] focus:outline-none rounded-sm transition-colors placeholder:text-[#C8C1B4]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="enquiry-email"
                      className="block text-xs font-medium text-[#C8C1B4] mb-2"
                    >
                      {t.contact.emailLabel}
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-3 text-sm text-[#F6F2EA] bg-[#060911] border border-white/15 focus:border-[#D4B475] focus:outline-none rounded-sm transition-colors placeholder:text-[#C8C1B4]/40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-interest"
                      className="block text-xs font-medium text-[#C8C1B4] mb-2"
                    >
                      {t.contact.interestLabel}
                    </label>
                    <select
                      id="enquiry-interest"
                      value={interest}
                      onChange={(e) =>
                        setInterest(e.target.value as InterestKey)
                      }
                      className="w-full px-4 py-3 text-sm text-[#F6F2EA] bg-[#060911] border border-white/15 focus:border-[#D4B475] focus:outline-none rounded-sm transition-colors"
                    >
                      <option value="availability">
                        {t.contact.interestOptions.availability}
                      </option>
                      <option value="doubleRoom">
                        {t.contact.interestOptions.doubleRoom}
                      </option>
                      <option value="twinRoom">
                        {t.contact.interestOptions.twinRoom}
                      </option>
                      <option value="corporateStay">
                        {t.contact.interestOptions.corporateStay}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-dates"
                    className="block text-xs font-medium text-[#C8C1B4] mb-2"
                  >
                    {t.contact.datesLabel}
                  </label>
                  <input
                    id="enquiry-dates"
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    placeholder={t.contact.datesPlaceholder}
                    className="w-full px-4 py-3 text-sm text-[#F6F2EA] bg-[#060911] border border-white/15 focus:border-[#D4B475] focus:outline-none rounded-sm transition-colors placeholder:text-[#C8C1B4]/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry-notes"
                    className="block text-xs font-medium text-[#C8C1B4] mb-2"
                  >
                    {t.contact.notesLabel}
                  </label>
                  <textarea
                    id="enquiry-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.contact.notesPlaceholder}
                    className="w-full px-4 py-3 text-sm text-[#F6F2EA] bg-[#060911] border border-white/15 focus:border-[#D4B475] focus:outline-none rounded-sm transition-colors placeholder:text-[#C8C1B4]/40 resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#C8C1B4]/75">
                    {t.contact.formDisclaimer}
                  </p>
                  <button
                    type="submit"
                    className="px-7 py-3.5 text-xs font-semibold tracking-wider text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(212,180,117,0.38)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {t.contact.submitButton}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
