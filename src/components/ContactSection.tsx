import { type FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';

interface ContactSectionProps {
  prefilledSubject?: { label: string; nonce: number };
}

export function ContactSection({ prefilledSubject }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Suite Enquiry');
  const [dates, setDates] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!prefilledSubject) return;
    if (prefilledSubject.label.toLowerCase().includes('dining')) {
      setInterest('Dining Reservation');
      setNotes('Interested in: Table reservation at L’Orangerie');
    } else {
      setInterest('Suite Enquiry');
      setNotes(`Interested in: ${prefilledSubject.label}`);
    }
    setSubmitted(false);
  }, [prefilledSubject]);

  const whatsappUrl = `https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    HOTEL_CONFIG.contact.whatsappPrefill
  )}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (trimmedName.length < 2) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#060911] text-[#F6F2EA] py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Concierge Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#D4B475] mb-3">
                Private Concierge
              </p>
              <h2
                className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] font-medium leading-[1.12] text-[#F6F2EA] mb-4"
                style={{ textWrap: 'balance' }}
              >
                Speak directly with our hospitality desk.
              </h2>
              <p className="text-base text-[#C8C1B4] leading-relaxed">
                Whether arranging a multi-suite stay, a private cellar dinner, or chauffeur reception, our concierge team responds personally around the clock.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-[#D4B475] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#F6F2EA]">
                    {HOTEL_CONFIG.contact.addressLine1}
                  </p>
                  <p className="text-[#C8C1B4]">
                    {HOTEL_CONFIG.contact.addressLine2}
                  </p>
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
                <Mail className="w-4 h-4 text-[#D4B475] shrink-0" />
                <a
                  href={`mailto:${HOTEL_CONFIG.contact.email}`}
                  className="text-[#F6F2EA] hover:text-[#D4B475] transition-colors"
                >
                  {HOTEL_CONFIG.contact.email}
                </a>
              </div>
            </div>

            {/* Direct Call Now & WhatsApp Enquiry Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-xs font-semibold tracking-wider text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={HOTEL_CONFIG.contact.phoneHref}
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-xs font-semibold tracking-wider text-[#F6F2EA] bg-[#0B1324] hover:bg-[#111C33] border border-[#D4B475]/35 hover:border-[#D4B475] rounded-sm transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#D4B475]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Enquiry Presentation Form */}
          <div className="lg:col-span-7 bg-[#0B1324] border border-[#D4B475]/20 rounded-sm p-6 sm:p-9 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-10 h-10 text-[#D4B475] mx-auto stroke-[1.5]" />
                <h3 className="font-serif text-3xl text-[#F6F2EA]">
                  Enquiry Prepared
                </h3>
                <p className="text-sm text-[#C8C1B4] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#F6F2EA]">{name}</span>. This
                  is a presentation showcase without live booking processing. To
                  continue in real time, reach our concierge via WhatsApp or
                  telephone below.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Continue on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 text-xs font-medium text-[#C8C1B4] hover:text-[#F6F2EA] border border-white/15 rounded-sm transition-colors cursor-pointer"
                  >
                    Edit Enquiry Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="pb-4 border-b border-white/10">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA]">
                    Private Stay &amp; Event Enquiry
                  </h3>
                  <p className="text-xs text-[#C8C1B4] mt-1">
                    {HOTEL_CONFIG.contact.conciergeHours}
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
                      Full Name *
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Claire Beaumont"
                      className="w-full px-4 py-3 text-sm text-[#F6F2EA] bg-[#060911] border border-white/15 focus:border-[#D4B475] focus:outline-none rounded-sm transition-colors placeholder:text-[#C8C1B4]/40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-email"
                      className="block text-xs font-medium text-[#C8C1B4] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="claire@example.com"
                      className="w-full px-4 py-3 text-sm text-[#F6F2EA] bg-[#060911] border border-white/15 focus:border-[#D4B475] focus:outline-none rounded-sm transition-colors placeholder:text-[#C8C1B4]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-xs font-medium text-[#C8C1B4] mb-2"
                    >
                      Telephone / WhatsApp
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+33 6 00 00 00 00"
                      className="w-full px-4 py-3 text-sm text-[#F6F2EA] bg-[#060911] border border-white/15 focus:border-[#D4B475] focus:outline-none rounded-sm transition-colors placeholder:text-[#C8C1B4]/40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-interest"
                      className="block text-xs font-medium text-[#C8C1B4] mb-2"
                    >
                      Area of Interest
                    </label>
                    <select
                      id="enquiry-interest"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-4 py-3 text-sm text-[#F6F2EA] bg-[#060911] border border-white/15 focus:border-[#D4B475] focus:outline-none rounded-sm transition-colors"
                    >
                      <option value="Suite Enquiry">Suite Enquiry</option>
                      <option value="Dining Reservation">
                        Dining Reservation
                      </option>
                      <option value="Thermal Spa Ritual">
                        Thermal Spa Ritual
                      </option>
                      <option value="Private Event or Yacht Charter">
                        Private Event or Yacht Charter
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-dates"
                    className="block text-xs font-medium text-[#C8C1B4] mb-2"
                  >
                    Preferred Dates &amp; Party Size
                  </label>
                  <input
                    id="enquiry-dates"
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    placeholder="e.g. June 14 – June 18 · 2 Guests"
                    className="w-full px-4 py-3 text-sm text-[#F6F2EA] bg-[#060911] border border-white/15 focus:border-[#D4B475] focus:outline-none rounded-sm transition-colors placeholder:text-[#C8C1B4]/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry-notes"
                    className="block text-xs font-medium text-[#C8C1B4] mb-2"
                  >
                    Bespoke Requests
                  </label>
                  <textarea
                    id="enquiry-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share suite preferences, chauffeur arrival details, or celebratory arrangements..."
                    className="w-full px-4 py-3 text-sm text-[#F6F2EA] bg-[#060911] border border-white/15 focus:border-[#D4B475] focus:outline-none rounded-sm transition-colors placeholder:text-[#C8C1B4]/40 resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#C8C1B4]/75">
                    Presentation showcase · No payment details collected.
                  </p>
                  <button
                    type="submit"
                    className="px-7 py-3.5 text-xs font-semibold tracking-wider text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Send Concierge Enquiry
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
