export type LanguageCode = 'en' | 'gu' | 'hi';

export interface LanguageOption {
  code: LanguageCode;
  nativeLabel: string;
  shortLabel: string;
  englishName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    nativeLabel: 'English',
    shortLabel: 'EN',
    englishName: 'English',
  },
  {
    code: 'gu',
    nativeLabel: 'ગુજરાતી',
    shortLabel: 'ગુજ',
    englishName: 'Gujarati',
  },
  {
    code: 'hi',
    nativeLabel: 'हिन्दी',
    shortLabel: 'हिन्दी',
    englishName: 'Hindi',
  },
];

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    rooms: string;
    amenities: string;
    gallery: string;
    neighborhood: string;
    location: string;
    faq: string;
    contact: string;
    enquireNow: string;
    callLabel: string;
    openMenuAria: string;
    closeMenuAria: string;
    languageAria: string;
    languageMenuAria: string;
  };
  hero: {
    regionLabel: string;
    headline: string;
    subheadline: string;
    enquireCta: string;
    viewRoomsCta: string;
    entranceCaptionLocation: string;
    entranceImgAlt: string;
    backdropImgAlt: string;
    stats: { value: string; label: string }[];
  };
  about: {
    kicker: string;
    headline: string;
    paragraphs: string[];
    metrics: { value: string; label: string }[];
    receptionBadgeHours: string;
    receptionCardTitle: string;
    receptionImgAlt: string;
  };
  rooms: {
    kicker: string;
    headline: string;
    filterAria: string;
    tabs: {
      all: string;
      double: string;
      twin: string;
    };
    quickTags: [string, string, string];
    viewDetails: string;
    enquire: string;
    closeModalAria: string;
    highlightsHeading: string;
    whatsappEnquiry: string;
    enquireThisRoom: string;
    whatsappRoomMessage: (roomName: string) => string;
    items: Record<
      string,
      {
        name: string;
        categoryLabel: string;
        bedding: string;
        summary: string;
        highlights: string[];
      }
    >;
  };
  amenities: {
    kicker: string;
    headline: string;
    corridorKicker: string;
    corridorTitle: string;
    corridorImgAlt: string;
    bathroomKicker: string;
    bathroomTitle: string;
    bathroomImgAlt: string;
    items: Record<
      string,
      {
        title: string;
        subtitle: string;
        description: string;
      }
    >;
  };
  gallery: {
    kicker: string;
    headline: string;
    filterAria: string;
    tabs: {
      all: string;
      entrance: string;
      rooms: string;
      washrooms: string;
    };
    closeLightboxAria: string;
    prevAria: string;
    nextAria: string;
    prevLabel: string;
    nextLabel: string;
    items: Record<
      string,
      {
        title: string;
        categoryLabel: string;
        caption: string;
      }
    >;
  };
  attractions: {
    kicker: string;
    headline: string;
    exploreMap: string;
    frontDeskNote: string;
    items: Record<
      string,
      {
        name: string;
        tag: string;
        description: string;
      }
    >;
  };
  location: {
    kicker: string;
    headline: string;
    description: string;
    addressLabel: string;
    addressLine1: string;
    addressLine2: string;
    phoneLabel: string;
    supportLabel: string;
    supportValue: string;
    openDirections: string;
    recenterHotel: string;
    infoWindowDirections: string;
    mapLoadError: string;
    mapKeyMissing: string;
    viewInGoogleMaps: string;
  };
  faq: {
    kicker: string;
    headline: string;
    description: string;
    expandAll: string;
    collapseAll: string;
    askFrontDesk: string;
    items: Record<
      string,
      {
        question: string;
        answer: string;
      }
    >;
  };
  contact: {
    kicker: string;
    headline: string;
    description: string;
    conciergeHours: string;
    whatsappEnquiry: string;
    callNow: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    interestLabel: string;
    interestOptions: {
      availability: string;
      doubleRoom: string;
      twinRoom: string;
      corporateStay: string;
    };
    datesLabel: string;
    datesPlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    notesPrefix: string;
    formDisclaimer: string;
    submitButton: string;
    validationName: string;
    validationContact: string;
    validationEmail: string;
    submittedTitle: string;
    submittedIntroBeforeName: string;
    submittedIntroAfterName: string;
    sendViaWhatsapp: string;
    editEnquiry: string;
    whatsappCustomMessage: (params: {
      name: string;
      interest: string;
      dates: string;
      notes: string;
    }) => string;
  };
  footer: {
    regionLabel: string;
    backToTop: string;
    backToTopAria: string;
    copyrightSuffix: string;
  };
  floatingWhatsapp: {
    ariaLabel: string;
    tooltip: string;
  };
  imageFallback: {
    subtitle: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationContent> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      rooms: 'Rooms',
      amenities: 'Amenities',
      gallery: 'Gallery',
      neighborhood: 'Neighborhood',
      location: 'Location',
      faq: 'FAQ',
      contact: 'Contact',
      enquireNow: 'Enquire Now',
      callLabel: 'Call',
      openMenuAria: 'Open navigation menu',
      closeMenuAria: 'Close navigation menu',
      languageAria: 'Select website language',
      languageMenuAria: 'Available languages',
    },
    hero: {
      regionLabel: 'PDPU Cross Road · Kudasan, Gandhinagar',
      headline: 'Refined air-conditioned stays in Kudasan, Gandhinagar.',
      subheadline:
        'Situated at Shyam Sukan Complex near Bhaijipura Char Rasta and PDPU Cross Road, Hotel Royal Mansion welcomes academic, corporate, and family guests with AC rooms, a 24-hour front desk, room service, free Wi-Fi, lift access, laundry, and on-site parking.',
      enquireCta: 'Enquire for Availability',
      viewRoomsCta: 'View Rooms',
      entranceCaptionLocation: 'Kudasan · Gandhinagar',
      entranceImgAlt:
        'Hotel Royal Mansion building exterior and signage in Kudasan, Gandhinagar',
      backdropImgAlt:
        'Hotel Royal Mansion glass frontage exterior view in Kudasan, Gandhinagar',
      stats: [
        { value: 'AC Rooms', label: 'Classic, Deluxe & Executive Rooms' },
        { value: '24-Hour', label: 'Front Desk & Guest Assistance' },
        { value: 'Free Wi-Fi', label: 'Complimentary Connectivity' },
        { value: 'Parking & Lift', label: 'On-Site Guest Conveniences' },
      ],
    },
    about: {
      kicker: 'About Hotel Royal Mansion',
      headline: 'A welcoming reception and serene AC rooms near PDPU Cross Road.',
      paragraphs: [
        'Located on the 2nd floor of Shyam Sukan Complex at Bhaijipura Char Rasta, Kudasan, Hotel Royal Mansion provides clean, well-kept accommodation tailored for university visitors, GIFT City business travelers, and families visiting Gandhinagar.',
        'Guests are greeted at our reception lobby with comfortable lounge seating, 24-hour front desk assistance, passenger lift access, attached modern washrooms, room service, laundry support, and convenient on-site parking.',
      ],
      metrics: [
        { value: '24/7', label: 'Front Desk Support' },
        { value: 'AC', label: 'Air-Conditioned Rooms' },
        { value: '7', label: 'Core Guest Facilities' },
      ],
      receptionBadgeHours: '24-Hour Front Desk',
      receptionCardTitle: 'Reception Lounge & Check-In Desk',
      receptionImgAlt:
        'Hotel Royal Mansion reception lounge sofa seating and illuminated front desk',
    },
    rooms: {
      kicker: 'Guest Rooms',
      headline: 'Air-conditioned rooms crafted for restful stays in Kudasan.',
      filterAria: 'Filter room configurations',
      tabs: {
        all: 'All AC Rooms',
        double: 'Deluxe Rooms',
        twin: 'Classic Rooms',
      },
      quickTags: ['Air Conditioning', 'Free Wi-Fi', 'Room Service'],
      viewDetails: 'View Room Details',
      enquire: 'Enquire',
      closeModalAria: 'Close room details',
      highlightsHeading: 'Room Highlights',
      whatsappEnquiry: 'WhatsApp Enquiry',
      enquireThisRoom: 'Enquire About This Room',
      whatsappRoomMessage: (roomName) =>
        `Hello Hotel Royal Mansion, I would like to enquire about availability for the ${roomName}.`,
      items: {
        'deluxe-striped-ac': {
          name: 'Deluxe Warm-Wood AC Room',
          categoryLabel: 'Deluxe Rooms',
          bedding: 'Double Bed',
          summary:
            'Air-conditioned double room featuring warm cove ceiling lighting, a backlit wooden headboard against striped wall paneling, full-height wardrobe, dressing mirror, and lounge chair.',
          highlights: [
            'Double bed with crisp white linens & backlit headboard',
            'Split Air Conditioning & ceiling fan',
            'Full-height wooden wardrobe & illuminated mirror',
            'Free Wi-Fi & Room Service',
          ],
        },
        'superior-textured-ac': {
          name: 'Superior AC Room with Study Desk',
          categoryLabel: 'Deluxe Rooms',
          bedding: 'Double Bed & Work Corner',
          summary:
            'Contemporary guest room highlighted by a textured slate accent wall, warm cove lighting, wooden TV entertainment console, dedicated work chair, and spacious wardrobe.',
          highlights: [
            'Double bed with warm backlit headboard & crisp bedding',
            'Flat-screen TV console & executive work chair',
            'Full wooden wardrobe & cove ceiling lighting',
            'Attached modern bathroom & 24-Hour Front Desk',
          ],
        },
        'executive-blue-desk-ac': {
          name: 'Executive Blue-Wall AC Room',
          categoryLabel: 'Deluxe Rooms',
          bedding: 'Double Bed & Work Desk',
          summary:
            'Bright AC double room designed with a geometric blue feature wall, wooden nightstand, multi-plug bedside switches, tall wardrobe, and an ergonomic work desk setup.',
          highlights: [
            'Double bed with bedside power sockets & drawer unit',
            'Dedicated study desk & cushioned office chair',
            'Split Air Conditioning & wall-mounted fan',
            'Complimentary Wi-Fi & Laundry service',
          ],
        },
        'royal-navy-kettle-ac': {
          name: 'Royal Cushion-Back AC Room',
          categoryLabel: 'Classic Rooms',
          bedding: 'Double Bed',
          summary:
            'Clean double room featuring a padded navy headboard, warm terracotta cushions, bedside electric kettle tray, intercom telephone, yellow window drapes, and power outlets.',
          highlights: [
            'Double bed with cushioned navy headboard & fresh linens',
            'In-room electric kettle & bedside intercom phone',
            'Dual bedside sockets & striped feature wall',
            'Free Wi-Fi & Room Service',
          ],
        },
        'classic-white-linen-ac': {
          name: 'Classic Double AC Room',
          categoryLabel: 'Classic Rooms',
          bedding: 'Double Bed',
          summary:
            'Serene air-conditioned double room dressed in crisp white striped linens with warm wooden headboard, golden window curtains, greenery views, and bedside intercom.',
          highlights: [
            'Double bed with white striped hotel bedding',
            'Air Conditioning, natural daylight & curtains',
            'Bedside intercom telephone to 24-Hour Front Desk',
            'Lift access & On-Site Parking support',
          ],
        },
      },
    },
    amenities: {
      kicker: 'Guest Facilities',
      headline: 'Essential comforts for effortless stays in Gandhinagar.',
      corridorKicker: 'Lift & Corridor Access',
      corridorTitle: 'Polished Marble Guest Floor Wings',
      corridorImgAlt:
        'Hotel Royal Mansion second-floor corridor with numbered wooden doors 201 and 202',
      bathroomKicker: 'Attached En-suite Baths',
      bathroomTitle: 'Modern Tiled Washrooms & Hot Water',
      bathroomImgAlt:
        'Clean attached en-suite bathroom with rain shower and hot-water geyser at Hotel Royal Mansion',
      items: {
        wifi: {
          title: 'Free Wi-Fi',
          subtitle: 'Property-Wide Connectivity',
          description:
            'Complimentary wireless internet access available for guests across rooms and reception areas.',
        },
        ac: {
          title: 'Air Conditioning',
          subtitle: 'Split AC in Guest Rooms',
          description:
            'Individual climate-controlled split air conditioning units installed across guest accommodations.',
        },
        parking: {
          title: 'Parking',
          subtitle: 'On-Site Guest Convenience',
          description:
            'Dedicated on-site parking convenience at Shyam Sukan Complex in Kudasan, Gandhinagar.',
        },
        'room-service': {
          title: 'Room Service',
          subtitle: 'In-Room Assistance',
          description:
            'Prompt room service and housekeeping support coordinated directly through the reception desk.',
        },
        'front-desk': {
          title: '24-Hour Front Desk',
          subtitle: 'Round-the-Clock Reception',
          description:
            'Staffed reception counter ready to assist with check-in, local directions, and guest requests anytime.',
        },
        laundry: {
          title: 'Laundry',
          subtitle: 'Garment Care Support',
          description:
            'Convenient guest laundry service available for business, academic, and extended stays.',
        },
        lift: {
          title: 'Lift',
          subtitle: 'Elevator Access',
          description:
            'Passenger lift providing effortless access to our 2nd-floor reception and guest rooms with luggage.',
        },
      },
    },
    gallery: {
      kicker: 'Property Gallery',
      headline: 'Inside Hotel Royal Mansion — exterior, reception, and rooms.',
      filterAria: 'Filter gallery photographs',
      tabs: {
        all: 'All',
        entrance: 'Entrance & Lobby',
        rooms: 'Guest Rooms',
        washrooms: 'Corridors & Washrooms',
      },
      closeLightboxAria: 'Close gallery lightbox',
      prevAria: 'Previous photograph',
      nextAria: 'Next photograph',
      prevLabel: 'Previous',
      nextLabel: 'Next',
      items: {
        'gal-exterior-front': {
          title: 'Hotel Royal Mansion Front Facade',
          categoryLabel: 'Entrance & Lobby',
          caption:
            'Building elevation showing the Hotel Royal Mansion signage and blue glass frontage.',
        },
        'gal-exterior-angle': {
          title: 'Exterior Elevation & Glass Frontage',
          categoryLabel: 'Entrance & Lobby',
          caption:
            'Corner view of Hotel Royal Mansion at Shyam Sukan Complex in Kudasan.',
        },
        'gal-lobby-lounge': {
          title: 'Reception Lounge & Sofa Seating',
          categoryLabel: 'Entrance & Lobby',
          caption:
            'L-shaped guest lounge sofa, frosted glass entry door, and illuminated reception desk.',
        },
        'gal-reception-desk': {
          title: '24-Hour Reception & Front Desk',
          categoryLabel: 'Entrance & Lobby',
          caption:
            'Staffed wooden check-in counter with split AC and warm cove lighting.',
        },
        'gal-reception-corridor': {
          title: 'Main Lobby & Guest Wing Entry',
          categoryLabel: 'Entrance & Lobby',
          caption:
            'Spacious marble-tiled reception foyer opening directly into the guest room corridor.',
        },
        'gal-corridor-201': {
          title: 'Second-Floor Guest Corridor',
          categoryLabel: 'Corridors & Washrooms',
          caption:
            'Polished grey marble hallway with recessed ceiling lights and numbered room doors 201 & 202.',
        },
        'gal-room-deluxe-wood': {
          title: 'Deluxe Warm-Wood AC Room',
          categoryLabel: 'Guest Rooms',
          caption:
            'Double bed with backlit headboard, wooden wardrobe, vanity mirror, and lounge chair.',
        },
        'gal-room-superior-tv': {
          title: 'Superior Room & TV Work Desk',
          categoryLabel: 'Guest Rooms',
          caption:
            'Textured accent wall, wall-mounted flat-screen TV, wardrobe, and work chair.',
        },
        'gal-room-blue-desk': {
          title: 'Executive Blue-Wall AC Room',
          categoryLabel: 'Guest Rooms',
          caption:
            'Geometric blue wall, double bed, split AC, study desk, and tall wardrobe.',
        },
        'gal-room-navy-kettle': {
          title: 'Royal Cushion-Back AC Room',
          categoryLabel: 'Guest Rooms',
          caption:
            'Padded navy headboard, electric kettle tray, intercom telephone, and yellow curtains.',
        },
        'gal-room-classic-drapes': {
          title: 'Classic Double AC Room & Drapes',
          categoryLabel: 'Guest Rooms',
          caption:
            'Split AC above tall golden curtains, wooden headboard, and intercom telephone.',
        },
        'gal-room-tv-seating': {
          title: 'In-Room TV Console & Chair',
          categoryLabel: 'Guest Rooms',
          caption:
            'Backlit wooden TV console, tea table, armchair, wardrobe, and dressing mirror.',
        },
        'gal-room-white-linen': {
          title: 'Classic White-Linen Double Room',
          categoryLabel: 'Guest Rooms',
          caption:
            'Fresh white striped hotel linens, natural window daylight, and bedside intercom.',
        },
        'gal-bathroom-geyser': {
          title: 'En-Suite Tiled Bathroom & Shower',
          categoryLabel: 'Corridors & Washrooms',
          caption:
            'Marble-finish tiled washroom with rain shower, water heater geyser, and exhaust fan.',
        },
      },
    },
    attractions: {
      kicker: 'Neighborhood & Connectivity',
      headline: 'Positioned near PDPU Cross Road for academic and city access.',
      exploreMap: 'Explore Interactive Map',
      frontDeskNote: 'Ask our 24-Hour Front Desk for local directions',
      items: {
        'loc-pdpu-corridor': {
          name: 'PDPU Cross Road & Knowledge Corridor',
          tag: 'Academic & Institutional Hub',
          description:
            'Positioned right off PDPU Cross Road and Bhaijipura Char Rasta, providing direct access for visitors heading to PDEU, GNLU, and surrounding campuses.',
        },
        'loc-kudasan-complex': {
          name: 'Shyam Sukan Complex & Kudasan',
          tag: 'Immediate Vicinity',
          description:
            'Located on the 2nd floor of Shyam Sukan Complex in thriving Kudasan with everyday dining spots, cafes, pharmacies, and banks right nearby.',
        },
        'loc-gandhinagar-transit': {
          name: 'Gandhinagar, GIFT City & Airport Links',
          tag: 'Regional Connectivity',
          description:
            'Smooth road links toward GIFT City, Sargasan, Infocity, and the Gandhinagar–Ahmedabad corridor—open the interactive map below for live directions.',
        },
      },
    },
    location: {
      kicker: 'Location & Directions',
      headline: 'Find Hotel Royal Mansion in Kudasan, Gandhinagar.',
      description:
        'Conveniently located on the 2nd Floor of Shyam Sukan Complex at Bhaijipura Char Rasta, PDPU Cross Road with on-site parking and 24-hour front desk check-in.',
      addressLabel: 'Hotel Address',
      addressLine1: '2nd Floor, Shyam Sukan Complex, Bhaijipura Char Rasta',
      addressLine2: 'PDPU Cross Road, Kudasan, Gandhinagar, Gujarat 382421, India',
      phoneLabel: 'Reception Telephone',
      supportLabel: 'Arrival Support',
      supportValue: '24-Hour Front Desk · On-Site Parking & Lift Access',
      openDirections: 'Open Directions in Google Maps',
      recenterHotel: 'Recenter Hotel',
      infoWindowDirections: 'Open Directions',
      mapLoadError: 'Unable to load Google Maps right now.',
      mapKeyMissing:
        'Interactive map preview is currently unavailable. Open Google Maps below for live directions.',
      viewInGoogleMaps: 'View in Google Maps',
    },
    faq: {
      kicker: 'Guest Information',
      headline: 'Frequently asked questions.',
      description:
        'Essential details about guest rooms, property facilities, and reaching our 24-hour front desk at Hotel Royal Mansion in Kudasan, Gandhinagar.',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      askFrontDesk: 'Ask the Front Desk',
      items: {
        'faq-location': {
          question: 'Where is Hotel Royal Mansion located?',
          answer:
            'Hotel Royal Mansion is located on the 2nd Floor of Shyam Sukan Complex at Bhaijipura Char Rasta, PDPU Cross Road, Kudasan, Gandhinagar, Gujarat 382421, India.',
        },
        'faq-rooms': {
          question: 'What room configurations are available at the hotel?',
          answer:
            'We offer air-conditioned Classic, Deluxe, and Executive Double Bed Rooms with split AC, flat-screen TVs, wardrobes, work desks in select layouts, electric kettles in select rooms, and modern attached tiled washrooms with hot-water geysers.',
        },
        'faq-facilities': {
          question: 'Which guest facilities are provided during a stay?',
          answer:
            'Verified facilities at Hotel Royal Mansion include Free Wi-Fi, Air Conditioning, On-Site Parking, Room Service, a 24-Hour Front Desk, Laundry support, and passenger Lift access.',
        },
        'faq-front-desk': {
          question:
            'Is the front desk available for round-the-clock assistance?',
          answer:
            'Yes. Our 24-Hour Front Desk is staffed day and night to assist arriving guests, coordinate room service and laundry requests, and share local directions around Kudasan and Gandhinagar.',
        },
        'faq-parking-lift': {
          question: 'Does the property offer lift access and on-site parking?',
          answer:
            'Yes. Located on the 2nd floor of Shyam Sukan Complex, Hotel Royal Mansion offers passenger lift access with luggage as well as convenient on-site guest parking.',
        },
        'faq-enquiry': {
          question:
            'How can I check room availability or enquire about a stay?',
          answer:
            'You can contact our 24-Hour Front Desk directly by calling +91 81558 70111, messaging on WhatsApp, or submitting an enquiry in the Contact section below. This website does not collect online payments—stay details are confirmed directly with our front desk.',
        },
      },
    },
    contact: {
      kicker: 'Contact Front Desk',
      headline: 'Speak directly with Hotel Royal Mansion.',
      description:
        'Reach our 24-hour front desk by telephone or WhatsApp for room availability, check-in guidance, and stay enquiries in Kudasan, Gandhinagar.',
      conciergeHours: '24-Hour Front Desk',
      whatsappEnquiry: 'WhatsApp Enquiry',
      callNow: 'Call Now',
      formTitle: 'Room & Stay Enquiry',
      formSubtitle: '24-Hour Front Desk · +91 81558 70111',
      nameLabel: 'Full Name *',
      namePlaceholder: 'Your full name',
      phoneLabel: 'Phone / WhatsApp *',
      phonePlaceholder: '+91 98000 00000',
      emailLabel: 'Email Address (Optional)',
      emailPlaceholder: 'name@example.com',
      interestLabel: 'Enquiry Type',
      interestOptions: {
        availability: 'Room Availability',
        doubleRoom: 'Deluxe AC Room',
        twinRoom: 'Classic AC Room',
        corporateStay: 'Corporate / Group Stay',
      },
      datesLabel: 'Preferred Check-In & Check-Out Dates',
      datesPlaceholder: 'e.g. Check-in date, nights, number of guests',
      notesLabel: 'Additional Requests',
      notesPlaceholder:
        'Share arrival timing, parking requirement, or room preferences...',
      notesPrefix: 'Interested in:',
      formDisclaimer: 'Direct front desk enquiry · No online payment collected.',
      submitButton: 'Prepare Enquiry',
      validationName: 'Please enter your full name.',
      validationContact: 'Please enter a telephone number or email address.',
      validationEmail: 'Please enter a valid email address.',
      submittedTitle: 'Enquiry Prepared',
      submittedIntroBeforeName: 'Thank you, ',
      submittedIntroAfterName:
        '. To send your enquiry directly to Hotel Royal Mansion, please reach our 24-Hour Front Desk via WhatsApp or telephone below.',
      sendViaWhatsapp: 'Send via WhatsApp',
      editEnquiry: 'Edit Enquiry Details',
      whatsappCustomMessage: ({ name, interest, dates, notes }) =>
        `Hello Hotel Royal Mansion, my name is ${name}. Enquiry: ${interest}${
          dates ? ` (${dates})` : ''
        }. ${notes}`,
    },
    footer: {
      regionLabel: 'PDPU Cross Road · Kudasan, Gandhinagar',
      backToTop: 'Back to Top',
      backToTopAria: 'Back to top',
      copyrightSuffix: 'All rights reserved.',
    },
    floatingWhatsapp: {
      ariaLabel: 'Chat with Hotel Royal Mansion on WhatsApp (+91 81558 70111)',
      tooltip: 'Chat on WhatsApp',
    },
    imageFallback: {
      subtitle: 'Hotel Royal Mansion · Kudasan, Gandhinagar',
    },
  },

  gu: {
    nav: {
      home: 'હોમ',
      about: 'પરિચય',
      rooms: 'રૂમ્સ',
      amenities: 'સુવિધાઓ',
      gallery: 'ગેલેરી',
      neighborhood: 'વિસ્તાર',
      location: 'સ્થાન',
      faq: 'પ્રશ્નો',
      contact: 'સંપર્ક',
      enquireNow: 'પૂછપરછ કરો',
      callLabel: 'કૉલ',
      openMenuAria: 'નેવિગેશન મેનૂ ખોલો',
      closeMenuAria: 'નેવિગેશન મેનૂ બંધ કરો',
      languageAria: 'વેબસાઇટની ભાષા પસંદ કરો',
      languageMenuAria: 'ઉપલબ્ધ ભાષાઓ',
    },
    hero: {
      regionLabel: 'PDPU ક્રોસ રોડ · કુડાસણ, ગાંધીનગર',
      headline: 'કુડાસણ, ગાંધીનગરમાં આરામદાયક એર-કન્ડિશન્ડ રોકાણ.',
      subheadline:
        'શ્યામ સુકન કોમ્પ્લેક્સ, ભાઈજીપુરા ચાર રસ્તા અને PDPU ક્રોસ રોડ નજીક આવેલ Hotel Royal Mansion શૈક્ષણિક, કોર્પોરેટ અને પરિવારિક મહેમાનોનું સ્વચ્છ AC રૂમ્સ, 24-કલાક ફ્રન્ટ ડેસ્ક, રૂમ સર્વિસ, મફત Wi-Fi, લિફ્ટ, લોન્ડ્રી અને પાર્કિંગ સાથે સ્વાગત કરે છે.',
      enquireCta: 'ઉપલબ્ધતા માટે પૂછપરછ કરો',
      viewRoomsCta: 'રૂમ્સ જુઓ',
      entranceCaptionLocation: 'કુડાસણ · ગાંધીનગર',
      entranceImgAlt:
        'કુડાસણ, ગાંધીનગરમાં Hotel Royal Mansion બિલ્ડિંગનું બહારનું દ્રશ્ય અને સાઇનબોર્ડ',
      backdropImgAlt: 'Hotel Royal Mansion નું ગ્લાસ ફ્રન્ટેજ બહારનું દ્રશ્ય',
      stats: [
        { value: 'AC રૂમ્સ', label: 'ક્લાસિક, ડીલક્સ અને એક્ઝિક્યુટિવ રૂમ્સ' },
        { value: '24-કલાક', label: 'ફ્રન્ટ ડેસ્ક અને મહેમાન સહાય' },
        { value: 'મફત Wi-Fi', label: 'નિઃશુલ્ક ઇન્ટરનેટ કનેક્ટિવિટી' },
        { value: 'પાર્કિંગ અને લિફ્ટ', label: 'સ્થળ પર સુવિધાજનક વ્યવસ્થા' },
      ],
    },
    about: {
      kicker: 'Hotel Royal Mansion વિશે',
      headline: 'PDPU ક્રોસ રોડ નજીક આવકારદાયક રિસેપ્શન અને શાંત AC રૂમ્સ.',
      paragraphs: [
        'ભાઈજીપુરા ચાર રસ્તા, કુડાસણ સ્થિત શ્યામ સુકન કોમ્પ્લેક્સના બીજા માળે આવેલ Hotel Royal Mansion યુનિવર્સિટી મુલાકાતીઓ, GIFT City કોર્પોરેટ પ્રવાસીઓ અને ગાંધીનગર આવતા પરિવારો માટે સ્વચ્છ અને સુવ્યવસ્થિત રહેવાની સુવિધા પૂરી પાડે છે.',
        'મહેમાનોનું અમારી રિસેપ્શન લોબીમાં આરામદાયક લાઉન્જ બેઠક, 24-કલાક ફ્રન્ટ ડેસ્ક સહાય, પેસેન્જર લિફ્ટ, અટેચ્ડ આધુનિક વોશરૂમ, રૂમ સર્વિસ, લોન્ડ્રી સહાય અને સુવિધાજનક પાર્કિંગ સાથે સ્વાગત કરવામાં આવે છે.',
      ],
      metrics: [
        { value: '24/7', label: 'ફ્રન્ટ ડેસ્ક સહાય' },
        { value: 'AC', label: 'એર-કન્ડિશન્ડ રૂમ્સ' },
        { value: '7', label: 'મુખ્ય મહેમાન સુવિધાઓ' },
      ],
      receptionBadgeHours: '24-કલાક ફ્રન્ટ ડેસ્ક',
      receptionCardTitle: 'રિસેપ્શન લાઉન્જ અને ચેક-ઇન ડેસ્ક',
      receptionImgAlt:
        'Hotel Royal Mansion ની રિસેપ્શન લોબી સોફા બેઠક અને પ્રકાશિત ફ્રન્ટ ડેસ્ક',
    },
    rooms: {
      kicker: 'ગેસ્ટ રૂમ્સ',
      headline: 'કુડાસણમાં શાંતિપૂર્ણ રોકાણ માટે તૈયાર એર-કન્ડિશન્ડ રૂમ્સ.',
      filterAria: 'રૂમ પ્રકાર ફિલ્ટર કરો',
      tabs: {
        all: 'તમામ AC રૂમ્સ',
        double: 'ડીલક્સ રૂમ્સ',
        twin: 'ક્લાસિક રૂમ્સ',
      },
      quickTags: ['એર કન્ડિશનિંગ', 'મફત Wi-Fi', 'રૂમ સર્વિસ'],
      viewDetails: 'રૂમ વિગતો જુઓ',
      enquire: 'પૂછપરછ',
      closeModalAria: 'રૂમ વિગતો બંધ કરો',
      highlightsHeading: 'રૂમની વિશેષતાઓ',
      whatsappEnquiry: 'WhatsApp પૂછપરછ',
      enquireThisRoom: 'આ રૂમ વિશે પૂછપરછ કરો',
      whatsappRoomMessage: (roomName) =>
        `નમસ્તે Hotel Royal Mansion, મને ${roomName} ની ઉપલબ્ધતા વિશે પૂછપરછ કરવી છે.`,
      items: {
        'deluxe-striped-ac': {
          name: 'ડીલક્સ વોર્મ-વુડ AC રૂમ',
          categoryLabel: 'ડીલક્સ રૂમ્સ',
          bedding: 'ડબલ બેડ',
          summary:
            'વોર્મ કોવ સીલિંગ લાઇટિંગ, સ્ટ્રાઇપ્ડ વોલ પેનલિંગ સાથે બેકલિટ વુડન હેડબોર્ડ, ફુલ-હાઇટ વોર્ડરોબ, ડ્રેસિંગ મિરર અને લાઉન્જ ખુરશી ધરાવતો એર-કન્ડિશન્ડ ડબલ રૂમ.',
          highlights: [
            'સ્વચ્છ સફેદ લિનન અને બેકલિટ હેડબોર્ડ સાથે ડબલ બેડ',
            'સ્પ્લિટ AC અને સીલિંગ ફેન',
            'ફુલ-હાઇટ વુડન વોર્ડરોબ અને પ્રકાશિત અરીસો',
            'મફત Wi-Fi અને રૂમ સર્વિસ',
          ],
        },
        'superior-textured-ac': {
          name: 'સ્ટડી ડેસ્ક સાથે સુપિરિયર AC રૂમ',
          categoryLabel: 'ડીલક્સ રૂમ્સ',
          bedding: 'ડબલ બેડ અને વર્ક કોર્નર',
          summary:
            'ટેક્સ્ચર્ડ સ્લેટ એક્સેન્ટ વોલ, વોર્મ કોવ લાઇટિંગ, વુડન TV કન્સોલ, વર્ક ચેર અને વિશાળ વોર્ડરોબ સાથેનો આધુનિક ગેસ્ટ રૂમ.',
          highlights: [
            'વોર્મ બેકલિટ હેડબોર્ડ અને સ્વચ્છ બેડિંગ સાથે ડબલ બેડ',
            'ફ્લેટ-સ્ક્રીન TV કન્સોલ અને એક્ઝિક્યુટિવ વર્ક ચેર',
            'સંપૂર્ણ વુડન વોર્ડરોબ અને કોવ સીલિંગ લાઇટિંગ',
            'અટેચ્ડ આધુનિક બાથરૂમ અને 24-કલાક ફ્રન્ટ ડેસ્ક',
          ],
        },
        'executive-blue-desk-ac': {
          name: 'એક્ઝિક્યુટિવ બ્લુ-વોલ AC રૂમ',
          categoryLabel: 'ડીલક્સ રૂમ્સ',
          bedding: 'ડબલ બેડ અને વર્ક ડેસ્ક',
          summary:
            'જિયોમેટ્રિક બ્લુ ફીચર વોલ, વુડન નાઇટસ્ટેન્ડ, બેડસાઇડ પાવર સ્વિચ, ઊંચો વોર્ડરોબ અને વર્ક ડેસ્ક વ્યવસ્થા સાથેનો તેજસ્વી AC ડબલ રૂમ.',
          highlights: [
            'બેડસાઇડ પાવર સોકેટ્સ અને ડ્રોઅર યુનિટ સાથે ડબલ બેડ',
            'સમર્પિત સ્ટડી ડેસ્ક અને કુશન ઓફિસ ચેર',
            'સ્પ્લિટ AC અને વોલ-માઉન્ટેડ ફેન',
            'મફત Wi-Fi અને લોન્ડ્રી સેવા',
          ],
        },
        'royal-navy-kettle-ac': {
          name: 'રોયલ કુશન-બેક AC રૂમ',
          categoryLabel: 'ક્લાસિક રૂમ્સ',
          bedding: 'ડબલ બેડ',
          summary:
            'પેડેડ નેવી હેડબોર્ડ, ટેરાકોટા કુશન, બેડસાઇડ ઇલેક્ટ્રિક કેટલ ટ્રે, ઇન્ટરકોમ ટેલિફોન, પીળા પડદા અને પાવર પોઇન્ટ્સ ધરાવતો સ્વચ્છ ડબલ રૂમ.',
          highlights: [
            'કુશન નેવી હેડબોર્ડ અને તાજા લિનન સાથે ડબલ બેડ',
            'ઇન-રૂમ ઇલેક્ટ્રિક કેટલ અને બેડસાઇડ ઇન્ટરકોમ ફોન',
            'ડ્યુઅલ બેડસાઇડ સોકેટ્સ અને સ્ટ્રાઇપ્ડ વોલ',
            'મફત Wi-Fi અને રૂમ સર્વિસ',
          ],
        },
        'classic-white-linen-ac': {
          name: 'ક્લાસિક ડબલ AC રૂમ',
          categoryLabel: 'ક્લાસિક રૂમ્સ',
          bedding: 'ડબલ બેડ',
          summary:
            'સ્વચ્છ સફેદ સ્ટ્રાઇપ્ડ લિનન, વોર્મ વુડન હેડબોર્ડ, ગોલ્ડન પડદા, બારીની હરિયાળી અને બેડસાઇડ ઇન્ટરકોમ સાથે શાંત AC ડબલ રૂમ.',
          highlights: [
            'સફેદ સ્ટ્રાઇપ્ડ હોટેલ બેડિંગ સાથે ડબલ બેડ',
            'એર કન્ડિશનિંગ, કુદરતી પ્રકાશ અને પડદા',
            '24-કલાક ફ્રન્ટ ડેસ્ક સાથે જોડાયેલ ઇન્ટરકોમ ફોન',
            'લિફ્ટ સુવિધા અને સ્થળ પર પાર્કિંગ સહાય',
          ],
        },
      },
    },
    amenities: {
      kicker: 'મહેમાન સુવિધાઓ',
      headline: 'ગાંધીનગરમાં સરળ અને આરામદાયક રોકાણ માટે આવશ્યક સુવિધાઓ.',
      corridorKicker: 'લિફ્ટ અને કોરિડોર પ્રવેશ',
      corridorTitle: 'પોલિશ્ડ માર્બલ ગેસ્ટ ફ્લોર વિંગ્સ',
      corridorImgAlt:
        'નંબર 201 અને 202 ના દરવાજા સાથે Hotel Royal Mansion નો બીજા માળનો કોરિડોર',
      bathroomKicker: 'અટેચ્ડ એન-સ્યુટ બાથરૂમ',
      bathroomTitle: 'આધુનિક ટાઇલ્ડ વોશરૂમ અને ગરમ પાણી',
      bathroomImgAlt:
        'Hotel Royal Mansion ખાતે રેઇન શાવર અને ગીઝર સાથે સ્વચ્છ અટેચ્ડ બાથરૂમ',
      items: {
        wifi: {
          title: 'મફત Wi-Fi',
          subtitle: 'સમગ્ર પ્રોપર્ટીમાં કનેક્ટિવિટી',
          description:
            'મહેમાનો માટે રૂમ્સ અને રિસેપ્શન વિસ્તારમાં નિઃશુલ્ક વાયરલેસ ઇન્ટરનેટ સુવિધા.',
        },
        ac: {
          title: 'એર કન્ડિશનિંગ',
          subtitle: 'ગેસ્ટ રૂમ્સમાં સ્પ્લિટ AC',
          description:
            'દરેક ગેસ્ટ રૂમમાં વ્યક્તિગત ક્લાઇમેટ-કંટ્રોલ્ડ સ્પ્લિટ એર કન્ડિશનિંગ યુનિટ.',
        },
        parking: {
          title: 'પાર્કિંગ',
          subtitle: 'સ્થળ પર વાહન સુવિધા',
          description:
            'કુડાસણ, ગાંધીનગર સ્થિત શ્યામ સુકન કોમ્પ્લેક્સમાં મહેમાનો માટે સમર્પિત પાર્કિંગ વ્યવસ્થા.',
        },
        'room-service': {
          title: 'રૂમ સર્વિસ',
          subtitle: 'રૂમમાં ઝડપી સહાય',
          description:
            'રિસેપ્શન ડેસ્ક મારફતે સીધી સંકલિત ઝડપી રૂમ સર્વિસ અને હાઉસકીપિંગ સુવિધા.',
        },
        'front-desk': {
          title: '24-કલાક ફ્રન્ટ ડેસ્ક',
          subtitle: 'રાત-દિવસ રિસેપ્શન સહાય',
          description:
            'ચેક-ઇન, સ્થાનિક માર્ગદર્શન અને મહેમાનોની જરૂરિયાતો માટે 24 કલાક સ્ટાફ ઉપલબ્ધ.',
        },
        laundry: {
          title: 'લોન્ડ્રી',
          subtitle: 'કપડાંની સંભાળ સેવા',
          description:
            'બિઝનેસ, શૈક્ષણિક અને લાંબા રોકાણ માટે સુવિધાજનક મહેમાન લોન્ડ્રી સેવા.',
        },
        lift: {
          title: 'લિફ્ટ',
          subtitle: 'એલિવેટર સુવિધા',
          description:
            'લગેજ સાથે બીજા માળની રિસેપ્શન લોબી અને ગેસ્ટ રૂમ્સ સુધી સરળ પહોંચ માટે પેસેન્જર લિફ્ટ.',
        },
      },
    },
    gallery: {
      kicker: 'પ્રોપર્ટી ગેલેરી',
      headline: 'Hotel Royal Mansion ની અંદર — બહારનું દ્રશ્ય, રિસેપ્શન અને રૂમ્સ.',
      filterAria: 'ગેલેરી ફોટા ફિલ્ટર કરો',
      tabs: {
        all: 'તમામ',
        entrance: 'પ્રવેશ અને લોબી',
        rooms: 'ગેસ્ટ રૂમ્સ',
        washrooms: 'કોરિડોર અને વોશરૂમ',
      },
      closeLightboxAria: 'ગેલેરી લાઇટબોક્સ બંધ કરો',
      prevAria: 'પાછલો ફોટો',
      nextAria: 'આગળનો ફોટો',
      prevLabel: 'પાછળ',
      nextLabel: 'આગળ',
      items: {
        'gal-exterior-front': {
          title: 'Hotel Royal Mansion મુખ્ય બહારનું દ્રશ્ય',
          categoryLabel: 'પ્રવેશ અને લોબી',
          caption:
            'Hotel Royal Mansion સાઇનબોર્ડ અને બ્લુ ગ્લાસ ફ્રન્ટેજ દર્શાવતી બિલ્ડિંગ એલિવેશન.',
        },
        'gal-exterior-angle': {
          title: 'એક્સટિરિયર એલિવેશન અને ગ્લાસ ફસાડ',
          categoryLabel: 'પ્રવેશ અને લોબી',
          caption: 'કુડાસણમાં શ્યામ સુકન કોમ્પ્લેક્સ ખાતે Hotel Royal Mansion નો ખૂણાનો વ્યૂ.',
        },
        'gal-lobby-lounge': {
          title: 'રિસેપ્શન લાઉન્જ અને સોફા બેઠક',
          categoryLabel: 'પ્રવેશ અને લોબી',
          caption: 'L-આકારનો ગેસ્ટ સોફા, ફ્રોસ્ટેડ ગ્લાસ દરવાજો અને પ્રકાશિત રિસેપ્શન ડેસ્ક.',
        },
        'gal-reception-desk': {
          title: '24-કલાક રિસેપ્શન અને ફ્રન્ટ ડેસ્ક',
          categoryLabel: 'પ્રવેશ અને લોબી',
          caption: 'સ્પ્લિટ AC અને વોર્મ લાઇટિંગ સાથે સ્ટાફ્ડ વુડન ચેક-ઇન કાઉન્ટર.',
        },
        'gal-reception-corridor': {
          title: 'મુખ્ય લોબી અને ગેસ્ટ વિંગ પ્રવેશ',
          categoryLabel: 'પ્રવેશ અને લોબી',
          caption: 'ગેસ્ટ રૂમ કોરિડોર તરફ ખૂલતી વિશાળ માર્બલ-ટાઇલ્ડ રિસેપ્શન લોબી.',
        },
        'gal-corridor-201': {
          title: 'બીજા માળનો ગેસ્ટ કોરિડોર',
          categoryLabel: 'કોરિડોર અને વોશરૂમ',
          caption: 'રીસેસ્ડ લાઇટ્સ અને રૂમ 201 તથા 202 ના દરવાજા સાથે પોલિશ્ડ માર્બલ હોલવે.',
        },
        'gal-room-deluxe-wood': {
          title: 'ડીલક્સ વોર્મ-વુડ AC રૂમ',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption: 'બેકલિટ હેડબોર્ડ, વુડન વોર્ડરોબ, વેનિટી મિરર અને લાઉન્જ ચેર સાથે ડબલ બેડ.',
        },
        'gal-room-superior-tv': {
          title: 'સુપિરિયર રૂમ અને TV વર્ક ડેસ્ક',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption: 'ટેક્સ્ચર્ડ એક્સેન્ટ વોલ, ફ્લેટ-સ્ક્રીન TV, વોર્ડરોબ અને વર્ક ચેર.',
        },
        'gal-room-blue-desk': {
          title: 'એક્ઝિક્યુટિવ બ્લુ-વોલ AC રૂમ',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption: 'જિયોમેટ્રિક બ્લુ વોલ, ડબલ બેડ, સ્પ્લિટ AC, સ્ટડી ડેસ્ક અને વોર્ડરોબ.',
        },
        'gal-room-navy-kettle': {
          title: 'રોયલ કુશન-બેક AC રૂમ',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption: 'પેડેડ નેવી હેડબોર્ડ, ઇલેક્ટ્રિક કેટલ ટ્રે, ઇન્ટરકોમ ફોન અને પીળા પડદા.',
        },
        'gal-room-classic-drapes': {
          title: 'ક્લાસિક ડબલ AC રૂમ અને પડદા',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption: 'ગોલ્ડન પડદા ઉપર સ્પ્લિટ AC, વુડન હેડબોર્ડ અને ઇન્ટરકોમ ટેલિફોન.',
        },
        'gal-room-tv-seating': {
          title: 'ઇન-રૂમ TV કન્સોલ અને ખુરશી',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption: 'બેકલિટ વુડન TV કન્સોલ, ટી ટેબલ, આર્મચેર, વોર્ડરોબ અને ડ્રેસિંગ મિરર.',
        },
        'gal-room-white-linen': {
          title: 'ક્લાસિક વ્હાઇટ-લિનન ડબલ રૂમ',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption: 'તાજા સફેદ સ્ટ્રાઇપ્ડ હોટેલ લિનન, કુદરતી પ્રકાશ અને બેડસાઇડ ઇન્ટરકોમ.',
        },
        'gal-bathroom-geyser': {
          title: 'એન-સ્યુટ ટાઇલ્ડ બાથરૂમ અને શાવર',
          categoryLabel: 'કોરિડોર અને વોશરૂમ',
          caption: 'રેઇન શાવર, વોટર હીટર ગીઝર અને એક્ઝોસ્ટ ફેન સાથે માર્બલ-ટાઇલ્ડ વોશરૂમ.',
        },
      },
    },
    attractions: {
      kicker: 'આસપાસનો વિસ્તાર અને કનેક્ટિવિટી',
      headline: 'શૈક્ષણિક અને શહેર પ્રવેશ માટે PDPU ક્રોસ રોડ નજીક ઉત્તમ સ્થાન.',
      exploreMap: 'ઇન્ટરેક્ટિવ નકશો જુઓ',
      frontDeskNote: 'સ્થાનિક દિશાઓ માટે અમારા 24-કલાક ફ્રન્ટ ડેસ્કને પૂછો',
      items: {
        'loc-pdpu-corridor': {
          name: 'PDPU ક્રોસ રોડ અને નોલેજ કોરિડોર',
          tag: 'શૈક્ષણિક અને સંસ્થાકીય કેન્દ્ર',
          description:
            'PDPU ક્રોસ રોડ અને ભાઈજીપુરા ચાર રસ્તા નજીક સ્થિત, જેથી PDEU, GNLU અને આસપાસના કેમ્પસના મુલાકાતીઓને સીધી સગવડ મળે.',
        },
        'loc-kudasan-complex': {
          name: 'શ્યામ સુકન કોમ્પ્લેક્સ અને કુડાસણ',
          tag: 'નજીકનો વિસ્તાર',
          description:
            'કુડાસણના શ્યામ સુકન કોમ્પ્લેક્સના બીજા માળે આવેલ છે, જ્યાં નજીકમાં જ રેસ્ટોરન્ટ્સ, કાફે, ફાર્મસી અને બેંકો ઉપલબ્ધ છે.',
        },
        'loc-gandhinagar-transit': {
          name: 'ગાંધીનગર, GIFT City અને એરપોર્ટ જોડાણ',
          tag: 'પ્રાદેશિક જોડાણ',
          description:
            'GIFT City, સરગાસણ, ઇન્ફોસિટી અને ગાંધીનગર–અમદાવાદ હાઇવે સાથે સરળ જોડાણ—લાઇવ દિશાઓ માટે નીચેનો નકશો ખોલો.',
        },
      },
    },
    location: {
      kicker: 'સ્થાન અને દિશા-નિર્દેશ',
      headline: 'કુડાસણ, ગાંધીનગરમાં Hotel Royal Mansion શોધો.',
      description:
        'ભાઈજીપુરા ચાર રસ્તા, PDPU ક્રોસ રોડ ખાતે શ્યામ સુકન કોમ્પ્લેક્સના બીજા માળે સ્થળ પર પાર્કિંગ અને 24-કલાક ફ્રન્ટ ડેસ્ક ચેક-ઇન સાથે સુવિધાજનક સ્થાન.',
      addressLabel: 'હોટેલનું સરનામું',
      addressLine1: 'બીજો માળ, શ્યામ સુકન કોમ્પ્લેક્સ, ભાઈજીપુરા ચાર રસ્તા',
      addressLine2: 'PDPU ક્રોસ રોડ, કુડાસણ, ગાંધીનગર, ગુજરાત 382421, ભારત',
      phoneLabel: 'રિસેપ્શન ટેલિફોન',
      supportLabel: 'આગમન સહાય',
      supportValue: '24-કલાક ફ્રન્ટ ડેસ્ક · સ્થળ પર પાર્કિંગ અને લિફ્ટ સુવિધા',
      openDirections: 'Google Maps માં દિશા ખોલો',
      recenterHotel: 'હોટેલ પર કેન્દ્રિત કરો',
      infoWindowDirections: 'દિશા ખોલો',
      mapLoadError: 'હાલમાં Google Maps લોડ થઈ શક્યું નથી.',
      mapKeyMissing:
        'ઇન્ટરેક્ટિવ નકશો હાલમાં ઉપલબ્ધ નથી. લાઇવ દિશાઓ માટે નીચે Google Maps ખોલો.',
      viewInGoogleMaps: 'Google Maps માં જુઓ',
    },
    faq: {
      kicker: 'મહેમાન માહિતી',
      headline: 'વારંવાર પૂછાતા પ્રશ્નો.',
      description:
        'કુડાસણ, ગાંધીનગરમાં આવેલ Hotel Royal Mansion ના ગેસ્ટ રૂમ્સ, સુવિધાઓ અને 24-કલાક ફ્રન્ટ ડેસ્ક સંપર્ક વિશે જરૂરી વિગતો.',
      expandAll: 'બધા ખોલો',
      collapseAll: 'બધા બંધ કરો',
      askFrontDesk: 'ફ્રન્ટ ડેસ્કને પૂછો',
      items: {
        'faq-location': {
          question: 'Hotel Royal Mansion ક્યાં આવેલું છે?',
          answer:
            'Hotel Royal Mansion બીજો માળ, શ્યામ સુકન કોમ્પ્લેક્સ, ભાઈજીપુરા ચાર રસ્તા, PDPU ક્રોસ રોડ, કુડાસણ, ગાંધીનગર, ગુજરાત 382421, ભારત ખાતે આવેલું છે.',
        },
        'faq-rooms': {
          question: 'હોટેલમાં કયા પ્રકારના રૂમ્સ ઉપલબ્ધ છે?',
          answer:
            'અમારી પાસે સ્પ્લિટ AC, ફ્લેટ-સ્ક્રીન TV, વોર્ડરોબ, પસંદગીના રૂમમાં વર્ક ડેસ્ક તથા ઇલેક્ટ્રિક કેટલ અને ગરમ પાણીના ગીઝરવાળા અટેચ્ડ ટાઇલ્ડ વોશરૂમ સાથે ક્લાસિક, ડીલક્સ અને એક્ઝિક્યુટિવ ડબલ બેડ રૂમ્સ ઉપલબ્ધ છે.',
        },
        'faq-facilities': {
          question: 'રોકાણ દરમિયાન મહેમાનોને કઈ સુવિધાઓ મળે છે?',
          answer:
            'Hotel Royal Mansion ખાતે મફત Wi-Fi, એર કન્ડિશનિંગ, સ્થળ પર પાર્કિંગ, રૂમ સર્વિસ, 24-કલાક ફ્રન્ટ ડેસ્ક, લોન્ડ્રી સેવા અને પેસેન્જર લિફ્ટ જેવી પ્રમાણિત સુવિધાઓ ઉપલબ્ધ છે.',
        },
        'faq-front-desk': {
          question: 'શું રાત-દિવસ સહાય માટે ફ્રન્ટ ડેસ્ક ઉપલબ્ધ છે?',
          answer:
            'હા. અમારું 24-કલાક ફ્રન્ટ ડેસ્ક મહેમાનોના આગમન સમયે સહાય, રૂમ સર્વિસ અને લોન્ડ્રી સંકલન તથા કુડાસણ અને ગાંધીનગરના સ્થાનિક દિશા-નિર્દેશ માટે દિવસ-રાત કાર્યરત રહે છે.',
        },
        'faq-parking-lift': {
          question: 'શું પ્રોપર્ટીમાં પાર્કિંગ અને લિફ્ટની સુવિધા છે?',
          answer:
            'હા. શ્યામ સુકન કોમ્પ્લેક્સના બીજા માળે આવેલ Hotel Royal Mansion લગેજ સાથે સરળ અવરજવર માટે પેસેન્જર લિફ્ટ અને સ્થળ પર મહેમાન પાર્કિંગની સુવિધા આપે છે.',
        },
        'faq-enquiry': {
          question:
            'હું રૂમની ઉપલબ્ધતા કે રોકાણ વિશે પૂછપરછ કેવી રીતે કરી શકું?',
          answer:
            'તમે +91 81558 70111 પર કૉલ કરીને, WhatsApp પર સંદેશ મોકલીને અથવા નીચેના સંપર્ક ફોર્મ દ્વારા અમારા 24-કલાક ફ્રન્ટ ડેસ્કનો સીધો સંપર્ક કરી શકો છો. આ વેબસાઇટ પર કોઈ ઓનલાઈન ચુકવણી લેવામાં આવતી નથી—રોકાણની વિગતો સીધી ફ્રન્ટ ડેસ્ક દ્વારા નક્કી થાય છે.',
        },
      },
    },
    contact: {
      kicker: 'ફ્રન્ટ ડેસ્ક સંપર્ક',
      headline: 'Hotel Royal Mansion સાથે સીધો સંપર્ક કરો.',
      description:
        'કુડાસણ, ગાંધીનગરમાં રૂમ ઉપલબ્ધતા, ચેક-ઇન માર્ગદર્શન અને રોકાણની પૂછપરછ માટે ફોન અથવા WhatsApp દ્વારા અમારા 24-કલાક ફ્રન્ટ ડેસ્કનો સંપર્ક કરો.',
      conciergeHours: '24-કલાક ફ્રન્ટ ડેસ્ક',
      whatsappEnquiry: 'WhatsApp પૂછપરછ',
      callNow: 'હમણાં કૉલ કરો',
      formTitle: 'રૂમ અને રોકાણ પૂછપરછ',
      formSubtitle: '24-કલાક ફ્રન્ટ ડેસ્ક · +91 81558 70111',
      nameLabel: 'પૂરું નામ *',
      namePlaceholder: 'તમારું પૂરું નામ',
      phoneLabel: 'ફોન / WhatsApp *',
      phonePlaceholder: '+91 98000 00000',
      emailLabel: 'ઈમેલ સરનામું (વૈકલ્પિક)',
      emailPlaceholder: 'name@example.com',
      interestLabel: 'પૂછપરછનો પ્રકાર',
      interestOptions: {
        availability: 'રૂમની ઉપલબ્ધતા',
        doubleRoom: 'ડીલક્સ AC રૂમ',
        twinRoom: 'ક્લાસિક AC રૂમ',
        corporateStay: 'કોર્પોરેટ / ગ્રુપ રોકાણ',
      },
      datesLabel: 'પસંદગીની ચેક-ઇન અને ચેક-આઉટ તારીખ',
      datesPlaceholder: 'દા.ત. ચેક-ઇન તારીખ, રાત્રિઓ, મહેમાનોની સંખ્યા',
      notesLabel: 'વધારાની વિનંતીઓ',
      notesPlaceholder:
        'આગમન સમય, પાર્કિંગ જરૂરિયાત અથવા રૂમ પસંદગી જણાવો...',
      notesPrefix: 'રસ ધરાવેલ રૂમ:',
      formDisclaimer:
        'સીધી ફ્રન્ટ ડેસ્ક પૂછપરછ · કોઈ ઓનલાઈન ચુકવણી લેવામાં આવતી નથી.',
      submitButton: 'પૂછપરછ તૈયાર કરો',
      validationName: 'કૃપા કરીને તમારું પૂરું નામ દાખલ કરો.',
      validationContact: 'કૃપા કરીને ફોન નંબર અથવા ઈમેલ સરનામું દાખલ કરો.',
      validationEmail: 'કૃપા કરીને માન્ય ઈમેલ સરનામું દાખલ કરો.',
      submittedTitle: 'પૂછપરછ તૈયાર છે',
      submittedIntroBeforeName: 'આભાર, ',
      submittedIntroAfterName:
        '. Hotel Royal Mansion ને તમારી પૂછપરછ સીધી મોકલવા માટે કૃપા કરીને નીચે WhatsApp અથવા ફોન દ્વારા અમારા 24-કલાક ફ્રન્ટ ડેસ્કનો સંપર્ક કરો.',
      sendViaWhatsapp: 'WhatsApp દ્વારા મોકલો',
      editEnquiry: 'વિગતો સુધારો',
      whatsappCustomMessage: ({ name, interest, dates, notes }) =>
        `નમસ્તે Hotel Royal Mansion, મારું નામ ${name} છે. પૂછપરછ: ${interest}${
          dates ? ` (${dates})` : ''
        }. ${notes}`,
    },
    footer: {
      regionLabel: 'PDPU ક્રોસ રોડ · કુડાસણ, ગાંધીનગર',
      backToTop: 'ઉપર જાઓ',
      backToTopAria: 'પેજની ઉપર જાઓ',
      copyrightSuffix: 'સર્વાધિકાર સુરક્ષિત.',
    },
    floatingWhatsapp: {
      ariaLabel: 'WhatsApp પર Hotel Royal Mansion સાથે ચેટ કરો (+91 81558 70111)',
      tooltip: 'WhatsApp પર ચેટ કરો',
    },
    imageFallback: {
      subtitle: 'Hotel Royal Mansion · કુડાસણ, ગાંધીનગર',
    },
  },

  hi: {
    nav: {
      home: 'होम',
      about: 'परिचय',
      rooms: 'कमरे',
      amenities: 'सुविधाएँ',
      gallery: 'गैलरी',
      neighborhood: 'आसपास',
      location: 'स्थान',
      faq: 'सवाल-जवाब',
      contact: 'संपर्क',
      enquireNow: 'पूछताछ करें',
      callLabel: 'कॉल',
      openMenuAria: 'नेविगेशन मेनू खोलें',
      closeMenuAria: 'नेविगेशन मेनू बंद करें',
      languageAria: 'वेबसाइट की भाषा चुनें',
      languageMenuAria: 'उपलब्ध भाषाएँ',
    },
    hero: {
      regionLabel: 'PDPU क्रॉस रोड · कुडासन, गांधीनगर',
      headline: 'कुडासन, गांधीनगर में आरामदायक एयर-कंडीशन्ड ठहराव।',
      subheadline:
        'भाईजीपुरा चार रास्ता और PDPU क्रॉस रोड के पास श्याम सुकन कॉम्प्लेक्स में स्थित Hotel Royal Mansion शैक्षणिक, कॉर्पोरेट और पारिवारिक मेहमानों का AC कमरों, 24-घंटे फ्रंट डेस्क, रूम सर्विस, मुफ़्त Wi-Fi, लिफ्ट, लॉन्ड्री और ऑन-साइट पार्किंग के साथ स्वागत करता है।',
      enquireCta: 'उपलब्धता के लिए पूछताछ करें',
      viewRoomsCta: 'कमरे देखें',
      entranceCaptionLocation: 'कुडासन · गांधीनगर',
      entranceImgAlt:
        'कुडासन, गांधीनगर में Hotel Royal Mansion भवन का बाहरी दृश्य और साइनबोर्ड',
      backdropImgAlt: 'Hotel Royal Mansion का ग्लास फ्रंटेज बाहरी दृश्य',
      stats: [
        { value: 'AC कमरे', label: 'क्लासिक, डीलक्स और एग्ज़ीक्यूटिव कमरे' },
        { value: '24-घंटे', label: 'फ्रंट डेस्क और अतिथि सहायता' },
        { value: 'मुफ़्त Wi-Fi', label: 'निःशुल्क इंटरनेट कनेक्टिविटी' },
        { value: 'पार्किंग व लिफ्ट', label: 'परिसर में सुविधाजनक व्यवस्था' },
      ],
    },
    about: {
      kicker: 'Hotel Royal Mansion के बारे में',
      headline: 'PDPU क्रॉस रोड के पास स्वागतपूर्ण रिसेप्शन और शांत AC कमरे।',
      paragraphs: [
        'भाईजीपुरा चार रास्ता, कुडासन स्थित श्याम सुकन कॉम्प्लेक्स की दूसरी मंज़िल पर स्थित Hotel Royal Mansion विश्वविद्यालय आगंतुकों, GIFT City के कॉर्पोरेट यात्रियों और गांधीनगर आने वाले परिवारों के लिए स्वच्छ और सुव्यवस्थित आवास प्रदान करता है।',
        'मेहमानों का हमारी रिसेप्शन लॉबी में आरामदायक लाउंज बैठने की व्यवस्था, 24-घंटे फ्रंट डेस्क सहायता, पैसेंजर लिफ्ट, अटैच्ड आधुनिक वॉशरूम, रूम सर्विस, लॉन्ड्री सहायता और सुविधाजनक ऑन-साइट पार्किंग के साथ स्वागत किया जाता है।',
      ],
      metrics: [
        { value: '24/7', label: 'फ्रंट डेस्क सहायता' },
        { value: 'AC', label: 'एयर-कंडीशन्ड कमरे' },
        { value: '7', label: 'मुख्य अतिथि सुविधाएँ' },
      ],
      receptionBadgeHours: '24-घंटे फ्रंट डेस्क',
      receptionCardTitle: 'रिसेप्शन लाउंज और चेक-इन डेस्क',
      receptionImgAlt:
        'Hotel Royal Mansion का रिसेप्शन लाउंज सोफ़ा सेटअप और प्रकाशित फ्रंट डेस्क',
    },
    rooms: {
      kicker: 'गेस्ट रूम्स',
      headline: 'कुडासन में सुखद ठहराव के लिए तैयार एयर-कंडीशन्ड कमरे।',
      filterAria: 'कमरे के प्रकार फ़िल्टर करें',
      tabs: {
        all: 'सभी AC कमरे',
        double: 'डीलक्स कमरे',
        twin: 'क्लासिक कमरे',
      },
      quickTags: ['एयर कंडीशनिंग', 'मुफ़्त Wi-Fi', 'रूम सर्विस'],
      viewDetails: 'कमरे का विवरण देखें',
      enquire: 'पूछताछ',
      closeModalAria: 'कमरे का विवरण बंद करें',
      highlightsHeading: 'कमरे की विशेषताएँ',
      whatsappEnquiry: 'WhatsApp पूछताछ',
      enquireThisRoom: 'इस कमरे के बारे में पूछें',
      whatsappRoomMessage: (roomName) =>
        `नमस्ते Hotel Royal Mansion, मुझे ${roomName} की उपलब्धता के बारे में जानकारी चाहिए।`,
      items: {
        'deluxe-striped-ac': {
          name: 'डीलक्स वॉर्म-वुड AC रूम',
          categoryLabel: 'डीलक्स कमरे',
          bedding: 'डबल बेड',
          summary:
            'वॉर्म कोव सीलिंग लाइटिंग, स्ट्राइप्ड वॉल पैनलिंग पर बैकलिट वुडन हेडबोर्ड, फुल-हाइट वॉर्डरोब, ड्रेसिंग मिरर और लाउंज चेयर वाला एयर-कंडीशन्ड डबल कमरा।',
          highlights: [
            'साफ सफेद लिनन और बैकलिट हेडबोर्ड के साथ डबल बेड',
            'स्प्लिट AC और सीलिंग फैन',
            'फुल-हाइट वुडन वॉर्डरोब और प्रकाशित आईना',
            'मुफ़्त Wi-Fi और रूम सर्विस',
          ],
        },
        'superior-textured-ac': {
          name: 'स्टडी डेस्क सहित सुपीरियर AC रूम',
          categoryLabel: 'डीलक्स कमरे',
          bedding: 'डबल बेड और वर्क कॉर्नर',
          summary:
            'टेक्स्चर्ड स्लेट एक्सेंट वॉल, वॉर्म कोव लाइटिंग, वुडन TV कंसोल, समर्पित वर्क चेयर और विशाल वॉर्डरोब से सुसज्जित आधुनिक गेस्ट रूम।',
          highlights: [
            'वॉर्म बैकलिट हेडबोर्ड और साफ बेडिंग के साथ डबल बेड',
            'फ्लैट-स्क्रीन TV कंसोल और एग्ज़ीक्यूटिव वर्क चेयर',
            'पूरा वुडन वॉर्डरोब और कोव सीलिंग लाइटिंग',
            'अटैच्ड आधुनिक बाथरूम और 24-घंटे फ्रंट डेस्क',
          ],
        },
        'executive-blue-desk-ac': {
          name: 'एग्ज़ीक्यूटिव ब्लू-वॉल AC रूम',
          categoryLabel: 'डीलक्स कमरे',
          bedding: 'डबल बेड और वर्क डेस्क',
          summary:
            'जियोमेट्रिक ब्लू फ़ीचर वॉल, वुडन नाइटस्टैंड, बेडसाइड पावर स्विच, बड़ा वॉर्डरोब और एर्गोनॉमिक वर्क डेस्क वाला उज्ज्वल AC डबल कमरा।',
          highlights: [
            'बेडसाइड पावर सॉकेट और ड्रॉअर यूनिट के साथ डबल बेड',
            'समर्पित स्टडी डेस्क और कुशन्ड ऑफ़िस चेयर',
            'स्प्लिट AC और वॉल-माउंटेड फैन',
            'निःशुल्क Wi-Fi और लॉन्ड्री सेवा',
          ],
        },
        'royal-navy-kettle-ac': {
          name: 'रॉयल कुशन-बैक AC रूम',
          categoryLabel: 'क्लासिक कमरे',
          bedding: 'डबल बेड',
          summary:
            'पैडेड नेवी हेडबोर्ड, टेराकोटा कुशन, बेडसाइड इलेक्ट्रिक केटल ट्रे, इंटरकॉम टेलीफ़ोन, पीले पर्दे और पावर सॉकेट वाला स्वच्छ डबल कमरा।',
          highlights: [
            'कुशन्ड नेवी हेडबोर्ड और ताज़ा लिनन के साथ डबल बेड',
            'इन-रूम इलेक्ट्रिक केटल और बेडसाइड इंटरकॉम फोन',
            'डुअल बेडसाइड सॉकेट और स्ट्राइप्ड वॉल',
            'मुफ़्त Wi-Fi और रूम सर्विस',
          ],
        },
        'classic-white-linen-ac': {
          name: 'क्लासिक डबल AC रूम',
          categoryLabel: 'क्लासिक कमरे',
          bedding: 'डबल बेड',
          summary:
            'ताज़ा सफेद स्ट्राइप्ड लिनन, वॉर्म वुडन हेडबोर्ड, सुनहरे पर्दे, खिड़की की हरियाली और बेडसाइड इंटरकॉम वाला शांत एयर-कंडीशन्ड डबल कमरा।',
          highlights: [
            'सफेद स्ट्राइप्ड होटल बेडिंग के साथ डबल बेड',
            'एयर कंडीशनिंग, प्राकृतिक रोशनी और पर्दे',
            '24-घंटे फ्रंट डेस्क से जुड़ा इंटरकॉम टेलीफ़ोन',
            'लिफ्ट सुविधा और ऑन-साइट पार्किंग सहायता',
          ],
        },
      },
    },
    amenities: {
      kicker: 'अतिथि सुविधाएँ',
      headline: 'गांधीनगर में सहज और आरामदायक ठहराव के लिए आवश्यक सुविधाएँ।',
      corridorKicker: 'लिफ्ट और कॉरिडोर पहुँच',
      corridorTitle: 'पॉलिश्ड मार्बल गेस्ट फ़्लोर विंग्स',
      corridorImgAlt:
        'कमरा संख्या 201 और 202 के दरवाज़ों के साथ Hotel Royal Mansion का दूसरी मंज़िल का कॉरिडोर',
      bathroomKicker: 'अटैच्ड एन-सुइट बाथरूम',
      bathroomTitle: 'आधुनिक टाइल्ड वॉशरूम और गर्म पानी',
      bathroomImgAlt:
        'Hotel Royal Mansion में रेन शॉवर और गर्म पानी के गीज़र सहित स्वच्छ अटैच्ड बाथरूम',
      items: {
        wifi: {
          title: 'मुफ़्त Wi-Fi',
          subtitle: 'पूरे परिसर में कनेक्टिविटी',
          description:
            'मेहमानों के लिए कमरों और रिसेप्शन क्षेत्र में निःशुल्क वायरलेस इंटरनेट की सुविधा।',
        },
        ac: {
          title: 'एयर कंडीशनिंग',
          subtitle: 'गेस्ट रूम में स्प्लिट AC',
          description:
            'सभी अतिथि कमरों में व्यक्तिगत तापमान नियंत्रण के लिए स्प्लिट AC यूनिट्स।',
        },
        parking: {
          title: 'पार्किंग',
          subtitle: 'परिसर में पार्किंग सुविधा',
          description:
            'कुडासन, गांधीनगर स्थित श्याम सुकन कॉम्प्लेक्स में मेहमानों के लिए समर्पित पार्किंग व्यवस्था।',
        },
        'room-service': {
          title: 'रूम सर्विस',
          subtitle: 'कमरे में त्वरित सहायता',
          description:
            'रिसेप्शन डेस्क के माध्यम से सीधे समन्वित त्वरित रूम सर्विस और हाउसकीपिंग सुविधा।',
        },
        'front-desk': {
          title: '24-घंटे फ्रंट डेस्क',
          subtitle: 'दिन-रात रिसेप्शन सेवा',
          description:
            'चेक-इन, स्थानीय दिशा-निर्देश और अतिथि अनुरोधों के लिए 24 घंटे सक्रिय रिसेप्शन काउंटर।',
        },
        laundry: {
          title: 'लॉन्ड्री',
          subtitle: 'वस्त्र देखभाल सेवा',
          description:
            'व्यावसायिक, शैक्षणिक और लंबे ठहराव के लिए सुविधाजनक अतिथि लॉन्ड्री सेवा।',
        },
        lift: {
          title: 'लिफ्ट',
          subtitle: 'एलिवेटर सुविधा',
          description:
            'सामान के साथ दूसरी मंज़िल पर रिसेप्शन और कमरों तक आसानी से पहुँचने के लिए पैसेंजर लिफ्ट।',
        },
      },
    },
    gallery: {
      kicker: 'प्रॉपर्टी गैलरी',
      headline: 'Hotel Royal Mansion के भीतर — बाहरी स्वरूप, रिसेप्शन और कमरे।',
      filterAria: 'गैलरी फ़ोटो फ़िल्टर करें',
      tabs: {
        all: 'सभी',
        entrance: 'प्रवेश और लॉबी',
        rooms: 'गेस्ट रूम्स',
        washrooms: 'कॉरिडोर और वॉशरूम',
      },
      closeLightboxAria: 'गैलरी लाइटबॉक्स बंद करें',
      prevAria: 'पिछली तस्वीर',
      nextAria: 'अगली तस्वीर',
      prevLabel: 'पिछला',
      nextLabel: 'अगला',
      items: {
        'gal-exterior-front': {
          title: 'Hotel Royal Mansion मुख्य बाहरी स्वरूप',
          categoryLabel: 'प्रवेश और लॉबी',
          caption:
            'Hotel Royal Mansion साइनबोर्ड और नीले ग्लास फ्रंटेज वाला भवन दृश्य।',
        },
        'gal-exterior-angle': {
          title: 'बाहरी एलिवेशन और ग्लास फ़साड',
          categoryLabel: 'प्रवेश और लॉबी',
          caption:
            'कुडासन में श्याम सुकन कॉम्प्लेक्स स्थित Hotel Royal Mansion का कोने का दृश्य।',
        },
        'gal-lobby-lounge': {
          title: 'रिसेप्शन लाउंज और सोफ़ा सीटिंग',
          categoryLabel: 'प्रवेश और लॉबी',
          caption:
            'L-आकार का गेस्ट लाउंज सोफ़ा, फ्रॉस्टेड ग्लास दरवाज़ा और प्रकाशित रिसेप्शन डेस्क।',
        },
        'gal-reception-desk': {
          title: '24-घंटे रिसेप्शन और फ्रंट डेस्क',
          categoryLabel: 'प्रवेश और लॉबी',
          caption:
            'स्प्लिट AC और वॉर्म लाइटिंग के साथ स्टाफ़्ड वुडन चेक-इन काउंटर।',
        },
        'gal-reception-corridor': {
          title: 'मुख्य लॉबी और गेस्ट विंग प्रवेश',
          categoryLabel: 'प्रवेश और लॉबी',
          caption:
            'गेस्ट रूम कॉरिडोर में खुलती विशाल मार्बल-टाइल्ड रिसेप्शन लॉबी।',
        },
        'gal-corridor-201': {
          title: 'दूसरी मंज़िल का गेस्ट कॉरिडोर',
          categoryLabel: 'कॉरिडोर और वॉशरूम',
          caption:
            'रीसेस्ड सीलिंग लाइट्स और कमरा 201 व 202 के दरवाज़ों वाला पॉलिश्ड ग्रे मार्बल हॉलवे।',
        },
        'gal-room-deluxe-wood': {
          title: 'डीलक्स वॉर्म-वुड AC रूम',
          categoryLabel: 'गेस्ट रूम्स',
          caption:
            'बैकलिट हेडबोर्ड, वुडन वॉर्डरोब, वैनिटी मिरर और लाउंज चेयर वाला डबल बेड।',
        },
        'gal-room-superior-tv': {
          title: 'सुपीरियर रूम और TV वर्क डेस्क',
          categoryLabel: 'गेस्ट रूम्स',
          caption:
            'टेक्स्चर्ड एक्सेंट वॉल, फ्लैट-स्क्रीन TV, वॉर्डरोब और वर्क चेयर।',
        },
        'gal-room-blue-desk': {
          title: 'एग्ज़ीक्यूटिव ब्लू-वॉल AC रूम',
          categoryLabel: 'गेस्ट रूम्स',
          caption:
            'जियोमेट्रिक ब्लू वॉल, डबल बेड, स्प्लिट AC, स्टडी डेस्क और बड़ा वॉर्डरोब।',
        },
        'gal-room-navy-kettle': {
          title: 'रॉयल कुशन-बैक AC रूम',
          categoryLabel: 'गेस्ट रूम्स',
          caption:
            'पैडेड नेवी हेडबोर्ड, इलेक्ट्रिक केटल ट्रे, इंटरकॉम फोन और पीले पर्दे।',
        },
        'gal-room-classic-drapes': {
          title: 'क्लासिक डबल AC रूम और पर्दे',
          categoryLabel: 'गेस्ट रूम्स',
          caption:
            'सुनहरे पर्दों के ऊपर स्प्लिट AC, वुडन हेडबोर्ड और इंटरकॉम टेलीफ़ोन।',
        },
        'gal-room-tv-seating': {
          title: 'इन-रूम TV कंसोल और चेयर',
          categoryLabel: 'गेस्ट रूम्स',
          caption:
            'बैकलिट वुडन TV कंसोल, टी टेबल, आर्मचेयर, वॉर्डरोब और ड्रेसिंग मिरर।',
        },
        'gal-room-white-linen': {
          title: 'क्लासिक व्हाइट-लिनन डबल रूम',
          categoryLabel: 'गेस्ट रूम्स',
          caption:
            'ताज़ा सफेद स्ट्राइप्ड होटल लिनन, प्राकृतिक रोशनी और बेडसाइड इंटरकॉम।',
        },
        'gal-bathroom-geyser': {
          title: 'एन-सुइट टाइल्ड बाथरूम और शॉवर',
          categoryLabel: 'कॉरिडोर और वॉशरूम',
          caption:
            'रेन शॉवर, वॉटर हीटर गीज़र और एग्ज़ॉस्ट फैन सहित मार्बल-टाइल्ड वॉशरूम।',
        },
      },
    },
    attractions: {
      kicker: 'आसपास का क्षेत्र और कनेक्टिविटी',
      headline: 'शैक्षणिक और शहर तक पहुँच के लिए PDPU क्रॉस रोड के पास प्रमुख स्थान।',
      exploreMap: 'इंटरैक्टिव मानचित्र देखें',
      frontDeskNote: 'स्थानीय दिशा-निर्देशों के लिए हमारे 24-घंटे फ्रंट डेस्क से पूछें',
      items: {
        'loc-pdpu-corridor': {
          name: 'PDPU क्रॉस रोड और नॉलेज कॉरिडोर',
          tag: 'शैक्षणिक और संस्थागत केंद्र',
          description:
            'PDPU क्रॉस रोड और भाईजीपुरा चार रास्ता के ठीक पास स्थित, जिससे PDEU, GNLU और आसपास के परिसरों में जाने वालों को सीधी सुविधा मिलती है।',
        },
        'loc-kudasan-complex': {
          name: 'श्याम सुकन कॉम्प्लेक्स और कुडासन',
          tag: 'निकटतम क्षेत्र',
          description:
            'कुडासन के श्याम सुकन कॉम्प्लेक्स की दूसरी मंज़िल पर स्थित, जहाँ नज़दीक ही रेस्तराँ, कैफ़े, फ़ार्मेसी और बैंक उपलब्ध हैं।',
        },
        'loc-gandhinagar-transit': {
          name: 'गांधीनगर, GIFT City और एयरपोर्ट संपर्क',
          tag: 'क्षेत्रीय संपर्क',
          description:
            'GIFT City, सरगासण, इंफ़ोसिटी और गांधीनगर–अहमदाबाद मार्ग से सुगम जुड़ाव—लाइव दिशाओं के लिए नीचे मानचित्र देखें।',
        },
      },
    },
    location: {
      kicker: 'स्थान और दिशा-निर्देश',
      headline: 'कुडासन, गांधीनगर में Hotel Royal Mansion का पता।',
      description:
        'भाईजीपुरा चार रास्ता, PDPU क्रॉस रोड पर श्याम सुकन कॉम्प्लेक्स की दूसरी मंज़िल पर ऑन-साइट पार्किंग और 24-घंटे फ्रंट डेस्क चेक-इन के साथ सुविधाजनक रूप से स्थित।',
      addressLabel: 'होटल का पता',
      addressLine1: 'दूसरी मंज़िल, श्याम सुकन कॉम्प्लेक्स, भाईजीपुरा चार रास्ता',
      addressLine2: 'PDPU क्रॉस रोड, कुडासन, गांधीनगर, गुजरात 382421, भारत',
      phoneLabel: 'रिसेप्शन टेलीफ़ोन',
      supportLabel: 'आगमन सहायता',
      supportValue: '24-घंटे फ्रंट डेस्क · ऑन-साइट पार्किंग व लिफ्ट सुविधा',
      openDirections: 'Google Maps में दिशा खोलें',
      recenterHotel: 'होटल पर केंद्रित करें',
      infoWindowDirections: 'दिशा खोलें',
      mapLoadError: 'अभी Google Maps लोड नहीं हो पा रहा है।',
      mapKeyMissing:
        'इंटरैक्टिव मानचित्र अभी उपलब्ध नहीं है। लाइव दिशाओं के लिए नीचे Google Maps खोलें।',
      viewInGoogleMaps: 'Google Maps में देखें',
    },
    faq: {
      kicker: 'अतिथि जानकारी',
      headline: 'अक्सर पूछे जाने वाले प्रश्न।',
      description:
        'कुडासन, गांधीनगर स्थित Hotel Royal Mansion के कमरों, सुविधाओं और हमारे 24-घंटे फ्रंट डेस्क से संपर्क करने से जुड़ी आवश्यक जानकारी।',
      expandAll: 'सभी खोलें',
      collapseAll: 'सभी बंद करें',
      askFrontDesk: 'फ्रंट डेस्क से पूछें',
      items: {
        'faq-location': {
          question: 'Hotel Royal Mansion कहाँ स्थित है?',
          answer:
            'Hotel Royal Mansion दूसरी मंज़िल, श्याम सुकन कॉम्प्लेक्स, भाईजीपुरा चार रास्ता, PDPU क्रॉस रोड, कुडासन, गांधीनगर, गुजरात 382421, भारत में स्थित है।',
        },
        'faq-rooms': {
          question: 'होटल में किस प्रकार के कमरे उपलब्ध हैं?',
          answer:
            'हम स्प्लिट AC, फ्लैट-स्क्रीन TV, वॉर्डरोब, चुनिंदा कमरों में वर्क डेस्क व इलेक्ट्रिक केटल और गर्म पानी के गीज़र वाले अटैच्ड टाइल्ड वॉशरूम सहित क्लासिक, डीलक्स और एग्ज़ीक्यूटिव डबल बेड कमरे प्रदान करते हैं।',
        },
        'faq-facilities': {
          question: 'ठहराव के दौरान कौन-सी अतिथि सुविधाएँ उपलब्ध हैं?',
          answer:
            'Hotel Royal Mansion में मुफ़्त Wi-Fi, एयर कंडीशनिंग, ऑन-साइट पार्किंग, रूम सर्विस, 24-घंटे फ्रंट डेस्क, लॉन्ड्री सेवा और पैसेंजर लिफ्ट जैसी प्रमाणित सुविधाएँ उपलब्ध हैं।',
        },
        'faq-front-desk': {
          question: 'क्या 24 घंटे सहायता के लिए फ्रंट डेस्क उपलब्ध है?',
          answer:
            'जी हाँ। हमारा 24-घंटे फ्रंट डेस्क मेहमानों के आगमन पर सहायता करने, रूम सर्विस और लॉन्ड्री अनुरोधों का समन्वय करने तथा कुडासन व गांधीनगर के दिशा-निर्देश देने के लिए दिन-रात सक्रिय रहता है।',
        },
        'faq-parking-lift': {
          question: 'क्या होटल में ऑन-साइट पार्किंग और लिफ्ट की सुविधा है?',
          answer:
            'जी हाँ। श्याम सुकन कॉम्प्लेक्स की दूसरी मंज़िल पर स्थित Hotel Royal Mansion में सामान के साथ जाने के लिए पैसेंजर लिफ्ट और ऑन-साइट अतिथि पार्किंग की सुविधा है।',
        },
        'faq-enquiry': {
          question:
            'मैं कमरे की उपलब्धता या ठहराव के बारे में पूछताछ कैसे कर सकता हूँ?',
          answer:
            'आप +91 81558 70111 पर कॉल करके, WhatsApp पर संदेश भेजकर या नीचे दिए गए संपर्क फ़ॉर्म के माध्यम से हमारे 24-घंटे फ्रंट डेस्क से सीधे संपर्क कर सकते हैं। इस वेबसाइट पर कोई ऑनलाइन भुगतान नहीं लिया जाता—ठहराव की पुष्टि सीधे हमारे फ्रंट डेस्क द्वारा की जाती है।',
        },
      },
    },
    contact: {
      kicker: 'फ्रंट डेस्क संपर्क',
      headline: 'Hotel Royal Mansion से सीधे बात करें।',
      description:
        'कुडासन, गांधीनगर में कमरे की उपलब्धता, चेक-इन मार्गदर्शन और ठहराव संबंधी पूछताछ के लिए फ़ोन या WhatsApp द्वारा हमारे 24-घंटे फ्रंट डेस्क से संपर्क करें।',
      conciergeHours: '24-घंटे फ्रंट डेस्क',
      whatsappEnquiry: 'WhatsApp पूछताछ',
      callNow: 'अभी कॉल करें',
      formTitle: 'कमरा और ठहराव पूछताछ',
      formSubtitle: '24-घंटे फ्रंट डेस्क · +91 81558 70111',
      nameLabel: 'पूरा नाम *',
      namePlaceholder: 'आपका पूरा नाम',
      phoneLabel: 'फ़ोन / WhatsApp *',
      phonePlaceholder: '+91 98000 00000',
      emailLabel: 'ईमेल पता (वैकल्पिक)',
      emailPlaceholder: 'name@example.com',
      interestLabel: 'पूछताछ का प्रकार',
      interestOptions: {
        availability: 'कमरे की उपलब्धता',
        doubleRoom: 'डीलक्स AC रूम',
        twinRoom: 'क्लासिक AC रूम',
        corporateStay: 'कॉर्पोरेट / ग्रुप ठहराव',
      },
      datesLabel: 'पसंदीदा चेक-इन और चेक-आउट तिथियाँ',
      datesPlaceholder: 'जैसे: चेक-इन तिथि, रातें, मेहमानों की संख्या',
      notesLabel: 'अतिरिक्त अनुरोध',
      notesPlaceholder:
        'आगमन समय, पार्किंग आवश्यकता या कमरे की पसंद साझा करें...',
      notesPrefix: 'रुचि:',
      formDisclaimer:
        'सीधी फ्रंट डेस्क पूछताछ · कोई ऑनलाइन भुगतान नहीं लिया जाता।',
      submitButton: 'पूछताछ तैयार करें',
      validationName: 'कृपया अपना पूरा नाम दर्ज करें।',
      validationContact: 'कृपया फ़ोन नंबर या ईमेल पता दर्ज करें।',
      validationEmail: 'कृपया एक मान्य ईमेल पता दर्ज करें।',
      submittedTitle: 'पूछताछ तैयार है',
      submittedIntroBeforeName: 'धन्यवाद, ',
      submittedIntroAfterName:
        '। Hotel Royal Mansion को अपनी पूछताछ सीधे भेजने के लिए कृपया नीचे WhatsApp या फ़ोन द्वारा हमारे 24-घंटे फ्रंट डेस्क से संपर्क करें।',
      sendViaWhatsapp: 'WhatsApp द्वारा भेजें',
      editEnquiry: 'विवरण संपादित करें',
      whatsappCustomMessage: ({ name, interest, dates, notes }) =>
        `नमस्ते Hotel Royal Mansion, मेरा नाम ${name} है। पूछताछ: ${interest}${
          dates ? ` (${dates})` : ''
        }। ${notes}`,
    },
    footer: {
      regionLabel: 'PDPU क्रॉस रोड · कुडासन, गांधीनगर',
      backToTop: 'ऊपर जाएँ',
      backToTopAria: 'पेज के शीर्ष पर जाएँ',
      copyrightSuffix: 'सर्वाधिकार सुरक्षित।',
    },
    floatingWhatsapp: {
      ariaLabel: 'WhatsApp पर Hotel Royal Mansion से चैट करें (+91 81558 70111)',
      tooltip: 'WhatsApp पर चैट करें',
    },
    imageFallback: {
      subtitle: 'Hotel Royal Mansion · कुडासन, गांधीनगर',
    },
  },
};
