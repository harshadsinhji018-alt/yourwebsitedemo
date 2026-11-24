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
      regionLabel: 'GIDC Naroda · Ahmedabad, Gujarat',
      headline: 'Comfortable air-conditioned stays in Naroda, Ahmedabad.',
      subheadline:
        'Located in Avadhpuri Society, GIDC Naroda, Hotel Silver Inn welcomes business and family guests with clean AC rooms, a 24-hour front desk, room service, free Wi-Fi, lift access, laundry, and on-site parking.',
      enquireCta: 'Enquire for Availability',
      viewRoomsCta: 'View Rooms',
      entranceCaptionLocation: 'GIDC Naroda · Ahmedabad',
      entranceImgAlt:
        'Hotel Silver Inn main glass entrance doorway in Naroda, Ahmedabad',
      backdropImgAlt: 'Hotel Silver Inn air-conditioned twin room interior',
      stats: [
        { value: 'AC Rooms', label: 'Climate-Controlled Guest Rooms' },
        { value: '24-Hour', label: 'Front Desk & Guest Assistance' },
        { value: 'Free Wi-Fi', label: 'Complimentary Connectivity' },
        { value: 'Parking & Lift', label: 'On-Site Guest Conveniences' },
      ],
    },
    about: {
      kicker: 'About Hotel Silver Inn',
      headline: 'A welcoming reception and modern guest rooms in GIDC Naroda.',
      paragraphs: [
        'Situated in Avadhpuri Society, Chandresh Society, Makarpura, GIDC Naroda, Hotel Silver Inn provides clean, well-maintained accommodation tailored for corporate visitors, industrial travelers, and visiting families in Ahmedabad.',
        'Guests are greeted at our bright reception lobby with 24-hour front desk support, lift access to guest floors, private attached washrooms, room service, laundry support, and dedicated parking.',
      ],
      metrics: [
        { value: '24/7', label: 'Front Desk Support' },
        { value: 'AC', label: 'Air-Conditioned Rooms' },
        { value: '7', label: 'Core Guest Facilities' },
      ],
      receptionBadgeHours: '24-Hour Front Desk',
      receptionCardTitle: 'Reception & Guest Check-In Desk',
      receptionImgAlt:
        'Hotel Silver Inn illuminated reception desk and front lobby',
    },
    rooms: {
      kicker: 'Guest Rooms',
      headline: 'Air-conditioned rooms built for restful stays in Naroda.',
      filterAria: 'Filter room configurations',
      tabs: {
        all: 'All AC Rooms',
        double: 'Double Bed Rooms',
        twin: 'Twin Bed Rooms',
      },
      quickTags: ['Air Conditioning', 'Free Wi-Fi', 'Room Service'],
      viewDetails: 'View Room Details',
      enquire: 'Enquire',
      closeModalAria: 'Close room details',
      highlightsHeading: 'Room Highlights',
      whatsappEnquiry: 'WhatsApp Enquiry',
      enquireThisRoom: 'Enquire About This Room',
      whatsappRoomMessage: (roomName) =>
        `Hello Hotel Silver Inn, I would like to enquire about availability for the ${roomName}.`,
      items: {
        'twin-bed-ac-family': {
          name: 'Twin-Bed AC Room',
          categoryLabel: 'Twin Bed Rooms',
          bedding: 'Two Double Beds',
          summary:
            'Spacious air-conditioned twin-bed room featuring two crisp white beds, fluted navy paneling, a backlit walnut television wall, ceiling fan, full-length mirror, and storage cabinet.',
          highlights: [
            'Two comfortable double beds with fresh linens',
            'Split Air Conditioning & ceiling fan',
            'Wall-mounted flat-screen TV with console',
            'Free Wi-Fi & Room Service',
          ],
        },
        'twin-bed-ac-lounge': {
          name: 'Twin-Bed AC Room with Seating',
          categoryLabel: 'Twin Bed Rooms',
          bedding: 'Two Double Beds & Lounge Sofa',
          summary:
            'Well-lit twin-bed accommodation offering two double beds, an indoor two-seater sofa lounge, split AC, patterned window curtains, and direct access to an attached tiled washroom.',
          highlights: [
            'Two double beds plus two-seater guest seating',
            'Split Air Conditioning & overhead ceiling fan',
            'Attached modern en-suite washroom',
            '24-Hour Front Desk & Laundry access',
          ],
        },
        'deluxe-ac-double-101': {
          name: 'AC Double Bed Room (Room 101 Wing)',
          categoryLabel: 'Double Bed Rooms',
          bedding: 'Double Bed',
          summary:
            'Bright air-conditioned double room with tiled flooring, dark wood-framed television console, luggage bench, dressing mirror, and attached bathroom.',
          highlights: [
            'Double bed with crisp white linens',
            'Split Air Conditioning & ceiling fan',
            'Television console & luggage table',
            'Complimentary Wi-Fi & Room Service',
          ],
        },
        'executive-blue-ac-double': {
          name: 'AC Double Bed Room (Blue Feature Wall)',
          categoryLabel: 'Double Bed Rooms',
          bedding: 'Double Bed',
          summary:
            'Clean, well-appointed double room featuring a serene blue accent wall, fluted paneling, bedside charging sockets, nightstand, and split air conditioning.',
          highlights: [
            'Double bed with bedside nightstand & power outlets',
            'Split Air Conditioning & ceiling fan',
            'Window drapery & storage cabinet',
            'Free Wi-Fi & 24-Hour Front Desk',
          ],
        },
        'classic-ac-double': {
          name: 'Standard AC Double Room',
          categoryLabel: 'Double Bed Rooms',
          bedding: 'Double Bed',
          summary:
            'Comfortable double-bed room equipped with bedside intercom telephone, power points, patterned curtains, fluted wall paneling, and easy corridor access.',
          highlights: [
            'Double bed with bedside intercom phone',
            'Air Conditioning & ceiling fan',
            'Lift access from reception lobby',
            'Room Service & Laundry support',
          ],
        },
      },
    },
    amenities: {
      kicker: 'Guest Facilities',
      headline: 'Essential comforts for effortless stays in GIDC Naroda.',
      corridorKicker: 'Lift & Corridor Access',
      corridorTitle: 'Brightly Lit Guest Floor Wings',
      corridorImgAlt:
        'Hotel Silver Inn well-lit guest floor corridor and safety appointments',
      bathroomKicker: 'Attached En-suite Baths',
      bathroomTitle: 'Modern Tiled Washrooms & Hot Water',
      bathroomImgAlt:
        'Clean attached en-suite bathroom with shower and geyser at Hotel Silver Inn',
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
            'Dedicated parking support for guests arriving by private vehicle in GIDC Naroda.',
        },
        'room-service': {
          title: 'Room Service',
          subtitle: 'In-Room Assistance',
          description:
            'Prompt room service support coordinated directly through the reception desk.',
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
            'Convenient guest laundry service available for business and extended stays.',
        },
        lift: {
          title: 'Lift',
          subtitle: 'Elevator Access',
          description:
            'Passenger lift providing effortless floor-to-floor access with luggage.',
        },
      },
    },
    gallery: {
      kicker: 'Property Gallery',
      headline: 'Inside Hotel Silver Inn — entrance, reception, and rooms.',
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
        'gal-entrance-glass': {
          title: 'Hotel Silver Inn Main Entrance',
          categoryLabel: 'Entrance & Lobby',
          caption:
            'Glass entrance doors opening directly into the bright reception hall.',
        },
        'gal-entrance-sign': {
          title: 'Illuminated Hotel Signage',
          categoryLabel: 'Entrance & Lobby',
          caption:
            'Illuminated Hotel Silver Inn entrance signboard welcoming arriving guests.',
        },
        'gal-reception-desk': {
          title: 'Reception & Front Desk',
          categoryLabel: 'Entrance & Lobby',
          caption:
            'Clean wood-and-white reception desk with warm under-counter lighting.',
        },
        'gal-reception-lounge': {
          title: 'Front Desk & Guest Assistance',
          categoryLabel: 'Entrance & Lobby',
          caption:
            '24-hour front desk counter with blue LED cove ceiling and visitor information.',
        },
        'gal-reception-full': {
          title: 'Lobby Waiting Area & Lounge',
          categoryLabel: 'Entrance & Lobby',
          caption:
            'Spacious tiled reception floor, check-in desk, lounge seating, and CCTV-monitored lobby.',
        },
        'gal-corridor': {
          title: 'Guest Floor Corridor',
          categoryLabel: 'Corridors & Washrooms',
          caption:
            'Brightly lit corridor with wall sconces, fire safety equipment, and solid wood room doors.',
        },
        'gal-twin-wide': {
          title: 'Twin-Bed AC Room Overview',
          categoryLabel: 'Guest Rooms',
          caption:
            'Two double beds, fluted navy paneling, and backlit TV console.',
        },
        'gal-twin-cove': {
          title: 'Twin-Bed Room Ceiling Lighting',
          categoryLabel: 'Guest Rooms',
          caption:
            'Warm cove ceiling lighting, twin double beds, and patterned curtains.',
        },
        'gal-twin-sofa': {
          title: 'Twin-Bed Room & Lounge Seating',
          categoryLabel: 'Guest Rooms',
          caption: 'Spacious family layout with red two-seater seating.',
        },
        'gal-room-101': {
          title: 'Room 101 Double AC Interior',
          categoryLabel: 'Guest Rooms',
          caption: 'Split AC, wall-mounted TV, mirror, and luggage bench.',
        },
        'gal-room-blue': {
          title: 'Blue Accent Double AC Room',
          categoryLabel: 'Guest Rooms',
          caption:
            'Clean double bed with bedside power sockets and fluted accent wall.',
        },
        'gal-room-tv-angle': {
          title: 'Double Room TV & Storage Corner',
          categoryLabel: 'Guest Rooms',
          caption:
            'Wall-mounted TV, split AC, mirror, and wooden storage cabinet.',
        },
        'gal-room-vanity': {
          title: 'In-Room Basin & TV Console',
          categoryLabel: 'Guest Rooms',
          caption:
            'Vanity mirror, cabinet washbasin, flat-screen TV, split AC, and wooden luggage table.',
        },
        'gal-room-coral': {
          title: 'Double Room with Intercom',
          categoryLabel: 'Guest Rooms',
          caption:
            'Double bed with bedside telephone and dark fluted paneling.',
        },
        'gal-bath-shower': {
          title: 'En-suite Bathroom & Rain Shower',
          categoryLabel: 'Corridors & Washrooms',
          caption:
            'Modern marble-toned wall tiling, geyser, overhead shower, and basin.',
        },
        'gal-bath-grey': {
          title: 'Attached Marble-Tiled Bathroom',
          categoryLabel: 'Corridors & Washrooms',
          caption:
            'Clean attached bathroom with grey marble-finish walls, washbasin, and shower fixtures.',
        },
        'gal-bath-washroom': {
          title: 'Attached Guest Washroom',
          categoryLabel: 'Corridors & Washrooms',
          caption:
            'Clean tiled washroom with ventilated window and modern sanitary fittings.',
        },
      },
    },
    attractions: {
      kicker: 'Neighborhood & Connectivity',
      headline: 'Positioned in GIDC Naroda for business and city access.',
      exploreMap: 'Explore Interactive Map',
      frontDeskNote: 'Ask our 24-Hour Front Desk for local directions',
      items: {
        'loc-gidc-naroda': {
          name: 'GIDC Naroda Industrial Estate',
          tag: 'Business District',
          description:
            'Positioned right inside GIDC Naroda, offering direct convenience for visiting engineers, corporate executives, and industrial suppliers.',
        },
        'loc-makarpura-society': {
          name: 'Avadhpuri & Chandresh Society',
          tag: 'Immediate Vicinity',
          description:
            'Located in the Makarpura residential-commercial belt of Naroda with easy access to neighborhood shops, ATMs, and pharmacies.',
        },
        'loc-ahmedabad-connectivity': {
          name: 'Ahmedabad City & Transit Access',
          tag: 'Regional Connectivity',
          description:
            'Connected to Naroda Road, Ring Road, and wider Ahmedabad transit corridors—open the interactive map below for live directions and nearby places.',
        },
      },
    },
    location: {
      kicker: 'Location & Directions',
      headline: 'Find Hotel Silver Inn in GIDC Naroda, Ahmedabad.',
      description:
        'Conveniently positioned in Avadhpuri Society, Chandresh Society, Makarpura, GIDC Naroda with on-site parking and 24-hour front desk check-in.',
      addressLabel: 'Hotel Address',
      addressLine1: 'Avadhpuri Society, Chandresh Society, Makarpura',
      addressLine2: 'GIDC Naroda, Ahmedabad, Gujarat 382330, India',
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
        'Essential details about guest rooms, property facilities, and reaching our 24-hour front desk at Hotel Silver Inn in GIDC Naroda.',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      askFrontDesk: 'Ask the Front Desk',
      items: {
        'faq-location': {
          question: 'Where is Hotel Silver Inn located?',
          answer:
            'Hotel Silver Inn is situated at Avadhpuri Society, Chandresh Society, Makarpura, GIDC Naroda, Ahmedabad, Gujarat 382330, India—offering direct access to GIDC Naroda and surrounding Ahmedabad road links.',
        },
        'faq-rooms': {
          question: 'What room configurations are available at the hotel?',
          answer:
            'We offer air-conditioned Double Bed Rooms and Twin-Bed AC Rooms featuring two double beds (with two-seater lounge seating in select twin layouts). Rooms include split AC, ceiling fans, flat-screen TVs, storage cabinets, and attached tiled washrooms.',
        },
        'faq-facilities': {
          question: 'Which guest facilities are provided during a stay?',
          answer:
            'Verified facilities at Hotel Silver Inn include Free Wi-Fi, Air Conditioning, On-Site Parking, Room Service, a 24-Hour Front Desk, Laundry service, and passenger Lift access.',
        },
        'faq-front-desk': {
          question:
            'Is the front desk available for round-the-clock assistance?',
          answer:
            'Yes. Our 24-Hour Front Desk is staffed day and night to assist arriving guests, coordinate room service and laundry requests, and share local directions.',
        },
        'faq-parking-lift': {
          question:
            'Does the property offer on-site parking and lift access?',
          answer:
            'Yes. Hotel Silver Inn provides on-site guest parking in GIDC Naroda along with a passenger lift for easy floor-to-floor access with luggage.',
        },
        'faq-enquiry': {
          question:
            'How can I check room availability or enquire about a stay?',
          answer:
            'You can contact our 24-Hour Front Desk directly by calling +91 97270 50641, messaging on WhatsApp, or submitting an enquiry in the Contact section below. This website does not collect online payments—stay details are confirmed directly with our front desk.',
        },
      },
    },
    contact: {
      kicker: 'Contact Front Desk',
      headline: 'Speak directly with Hotel Silver Inn.',
      description:
        'Reach our 24-hour front desk by telephone or WhatsApp for room availability, check-in guidance, and stay enquiries in GIDC Naroda, Ahmedabad.',
      conciergeHours: '24-Hour Front Desk',
      whatsappEnquiry: 'WhatsApp Enquiry',
      callNow: 'Call Now',
      formTitle: 'Room & Stay Enquiry',
      formSubtitle: '24-Hour Front Desk · +91 97270 50641',
      nameLabel: 'Full Name *',
      namePlaceholder: 'Your full name',
      phoneLabel: 'Phone / WhatsApp *',
      phonePlaceholder: '+91 98000 00000',
      emailLabel: 'Email Address (Optional)',
      emailPlaceholder: 'name@example.com',
      interestLabel: 'Enquiry Type',
      interestOptions: {
        availability: 'Room Availability',
        doubleRoom: 'Double Bed AC Room',
        twinRoom: 'Twin Bed AC Room',
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
        '. To send your enquiry directly to Hotel Silver Inn, please reach our 24-Hour Front Desk via WhatsApp or telephone below.',
      sendViaWhatsapp: 'Send via WhatsApp',
      editEnquiry: 'Edit Enquiry Details',
      whatsappCustomMessage: ({ name, interest, dates, notes }) =>
        `Hello Hotel Silver Inn, my name is ${name}. Enquiry: ${interest}${
          dates ? ` (${dates})` : ''
        }. ${notes}`,
    },
    footer: {
      regionLabel: 'GIDC Naroda · Ahmedabad, Gujarat',
      backToTop: 'Back to Top',
      backToTopAria: 'Back to top',
      copyrightSuffix: 'All rights reserved.',
    },
    floatingWhatsapp: {
      ariaLabel: 'Chat with Hotel Silver Inn on WhatsApp (+919875274952)',
      tooltip: 'Chat on WhatsApp',
    },
    imageFallback: {
      subtitle: 'Hotel Silver Inn · Naroda, Ahmedabad',
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
      regionLabel: 'GIDC નરોડા · અમદાવાદ, ગુજરાત',
      headline: 'નરોડા, અમદાવાદમાં આરામદાયક એર-કન્ડિશન્ડ રોકાણ.',
      subheadline:
        'અવધપુરી સોસાયટી, GIDC નરોડામાં આવેલ Hotel Silver Inn બિઝનેસ અને પરિવારિક મહેમાનોનું સ્વચ્છ AC રૂમ્સ, 24-કલાક ફ્રન્ટ ડેસ્ક, રૂમ સર્વિસ, મફત Wi-Fi, લિફ્ટ, લોન્ડ્રી અને પાર્કિંગ સાથે સ્વાગત કરે છે.',
      enquireCta: 'ઉપલબ્ધતા માટે પૂછપરછ કરો',
      viewRoomsCta: 'રૂમ્સ જુઓ',
      entranceCaptionLocation: 'GIDC નરોડા · અમદાવાદ',
      entranceImgAlt:
        'નરોડા, અમદાવાદમાં Hotel Silver Inn નો મુખ્ય કાચનો પ્રવેશદ્વાર',
      backdropImgAlt: 'Hotel Silver Inn ના એર-કન્ડિશન્ડ ટ્વિન રૂમનું આંતરિક દ્રશ્ય',
      stats: [
        { value: 'AC રૂમ્સ', label: 'એર-કન્ડિશન્ડ ગેસ્ટ રૂમ્સ' },
        { value: '24-કલાક', label: 'ફ્રન્ટ ડેસ્ક અને મહેમાન સહાય' },
        { value: 'મફત Wi-Fi', label: 'નિઃશુલ્ક ઇન્ટરનેટ કનેક્ટિવિટી' },
        { value: 'પાર્કિંગ અને લિફ્ટ', label: 'સ્થળ પર સુવિધાજનક વ્યવસ્થા' },
      ],
    },
    about: {
      kicker: 'Hotel Silver Inn વિશે',
      headline: 'GIDC નરોડામાં આવકારદાયક રિસેપ્શન અને આધુનિક ગેસ્ટ રૂમ્સ.',
      paragraphs: [
        'અવધપુરી સોસાયટી, ચંદ્રેશ સોસાયટી, મકરપુરા, GIDC નરોડામાં આવેલ Hotel Silver Inn અમદાવાદ આવતા કોર્પોરેટ મુલાકાતીઓ, ઔદ્યોગિક પ્રવાસીઓ અને પરિવારો માટે સ્વચ્છ અને સુવ્યવસ્થિત રહેવાની સુવિધા પૂરી પાડે છે.',
        'મહેમાનોનું અમારી તેજસ્વી રિસેપ્શન લોબીમાં 24-કલાક ફ્રન્ટ ડેસ્ક સહાય, ઉપરના માળ માટે લિફ્ટ, અટેચ્ડ વોશરૂમ, રૂમ સર્વિસ, લોન્ડ્રી સહાય અને સમર્પિત પાર્કિંગ સાથે સ્વાગત કરવામાં આવે છે.',
      ],
      metrics: [
        { value: '24/7', label: 'ફ્રન્ટ ડેસ્ક સહાય' },
        { value: 'AC', label: 'એર-કન્ડિશન્ડ રૂમ્સ' },
        { value: '7', label: 'મુખ્ય મહેમાન સુવિધાઓ' },
      ],
      receptionBadgeHours: '24-કલાક ફ્રન્ટ ડેસ્ક',
      receptionCardTitle: 'રિસેપ્શન અને ચેક-ઇન ડેસ્ક',
      receptionImgAlt: 'Hotel Silver Inn નું પ્રકાશિત રિસેપ્શન ડેસ્ક અને લોબી',
    },
    rooms: {
      kicker: 'ગેસ્ટ રૂમ્સ',
      headline: 'નરોડામાં શાંતિપૂર્ણ રોકાણ માટે તૈયાર એર-કન્ડિશન્ડ રૂમ્સ.',
      filterAria: 'રૂમ પ્રકાર ફિલ્ટર કરો',
      tabs: {
        all: 'તમામ AC રૂમ્સ',
        double: 'ડબલ બેડ રૂમ્સ',
        twin: 'ટ્વિન બેડ રૂમ્સ',
      },
      quickTags: ['એર કન્ડિશનિંગ', 'મફત Wi-Fi', 'રૂમ સર્વિસ'],
      viewDetails: 'રૂમ વિગતો જુઓ',
      enquire: 'પૂછપરછ',
      closeModalAria: 'રૂમ વિગતો બંધ કરો',
      highlightsHeading: 'રૂમની વિશેષતાઓ',
      whatsappEnquiry: 'WhatsApp પૂછપરછ',
      enquireThisRoom: 'આ રૂમ વિશે પૂછપરછ કરો',
      whatsappRoomMessage: (roomName) =>
        `નમસ્તે Hotel Silver Inn, મને ${roomName} ની ઉપલબ્ધતા વિશે પૂછપરછ કરવી છે.`,
      items: {
        'twin-bed-ac-family': {
          name: 'ટ્વિન-બેડ AC રૂમ',
          categoryLabel: 'ટ્વિન બેડ રૂમ્સ',
          bedding: 'બે ડબલ બેડ',
          summary:
            'વિશાળ એર-કન્ડિશન્ડ ટ્વિન-બેડ રૂમ, જેમાં બે સ્વચ્છ સફેદ બેડ, નેવી ફ્લૂટેડ પેનલિંગ, બેકલિટ વોલનટ ટીવી વોલ, સીલિંગ ફેન, ફુલ-લેન્થ મિરર અને સ્ટોરેજ કેબિનેટ ઉપલબ્ધ છે.',
          highlights: [
            'તાજા લિનન સાથે બે આરામદાયક ડબલ બેડ',
            'સ્પ્લિટ AC અને સીલિંગ ફેન',
            'કન્સોલ સાથે વોલ-માઉન્ટેડ ફ્લેટ-સ્ક્રીન TV',
            'મફત Wi-Fi અને રૂમ સર્વિસ',
          ],
        },
        'twin-bed-ac-lounge': {
          name: 'બેઠક વ્યવસ્થા સાથે ટ્વિન-બેડ AC રૂમ',
          categoryLabel: 'ટ્વિન બેડ રૂમ્સ',
          bedding: 'બે ડબલ બેડ અને લાઉન્જ સોફા',
          summary:
            'પ્રકાશમય ટ્વિન-બેડ રૂમ જેમાં બે ડબલ બેડ, ઇન્ડોર ટુ-સીટર સોફા બેઠક, સ્પ્લિટ AC, ડિઝાઇનર પડદા અને અટેચ્ડ ટાઇલ્ડ વોશરૂમની સુવિધા છે.',
          highlights: [
            'બે ડબલ બેડ અને ટુ-સીટર ગેસ્ટ સીટિંગ',
            'સ્પ્લિટ AC અને ઓવરહેડ સીલિંગ ફેન',
            'આધુનિક અટેચ્ડ એન-સ્યુટ વોશરૂમ',
            '24-કલાક ફ્રન્ટ ડેસ્ક અને લોન્ડ્રી સુવિધા',
          ],
        },
        'deluxe-ac-double-101': {
          name: 'AC ડબલ બેડ રૂમ (રૂમ 101 વિંગ)',
          categoryLabel: 'ડબલ બેડ રૂમ્સ',
          bedding: 'ડબલ બેડ',
          summary:
            'ટાઇલ્ડ ફ્લોરિંગ, ડાર્ક વુડ-ફ્રેમ્ડ ટીવી કન્સોલ, લગેજ બેન્ચ, ડ્રેસિંગ મિરર અને અટેચ્ડ બાથરૂમ સાથેનો પ્રકાશમય AC ડબલ રૂમ.',
          highlights: [
            'સ્વચ્છ સફેદ લિનન સાથે ડબલ બેડ',
            'સ્પ્લિટ AC અને સીલિંગ ફેન',
            'ટીવી કન્સોલ અને લગેજ ટેબલ',
            'મફત Wi-Fi અને રૂમ સર્વિસ',
          ],
        },
        'executive-blue-ac-double': {
          name: 'AC ડબલ બેડ રૂમ (બ્લુ ફીચર વોલ)',
          categoryLabel: 'ડબલ બેડ રૂમ્સ',
          bedding: 'ડબલ બેડ',
          summary:
            'શાંત બ્લુ એક્સેન્ટ વોલ, ફ્લૂટેડ પેનલિંગ, બેડસાઇડ ચાર્જિંગ સોકેટ્સ, નાઇટસ્ટેન્ડ અને સ્પ્લિટ AC સાથે સુસજ્જ સ્વચ્છ ડબલ રૂમ.',
          highlights: [
            'બેડસાઇડ નાઇટસ્ટેન્ડ અને પાવર આઉટલેટ્સ સાથે ડબલ બેડ',
            'સ્પ્લિટ AC અને સીલિંગ ફેન',
            'વિન્ડો પડદા અને સ્ટોરેજ કેબિનેટ',
            'મફત Wi-Fi અને 24-કલાક ફ્રન્ટ ડેસ્ક',
          ],
        },
        'classic-ac-double': {
          name: 'સ્ટાન્ડર્ડ AC ડબલ રૂમ',
          categoryLabel: 'ડબલ બેડ રૂમ્સ',
          bedding: 'ડબલ બેડ',
          summary:
            'બેડસાઇડ ઇન્ટરકોમ ટેલિફોન, પાવર પોઇન્ટ્સ, પડદા, ફ્લૂટેડ વોલ પેનલિંગ અને સરળ કોરિડોર પ્રવેશ સાથે આરામદાયક ડબલ-બેડ રૂમ.',
          highlights: [
            'બેડસાઇડ ઇન્ટરકોમ ફોન સાથે ડબલ બેડ',
            'એર કન્ડિશનિંગ અને સીલિંગ ફેન',
            'રિસેપ્શન લોબીથી લિફ્ટની સુવિધા',
            'રૂમ સર્વિસ અને લોન્ડ્રી સહાય',
          ],
        },
      },
    },
    amenities: {
      kicker: 'મહેમાન સુવિધાઓ',
      headline: 'GIDC નરોડામાં સરળ અને આરામદાયક રોકાણ માટે આવશ્યક સુવિધાઓ.',
      corridorKicker: 'લિફ્ટ અને કોરિડોર પ્રવેશ',
      corridorTitle: 'પ્રકાશમય ગેસ્ટ ફ્લોર વિંગ્સ',
      corridorImgAlt:
        'Hotel Silver Inn નો તેજસ્વી ગેસ્ટ ફ્લોર કોરિડોર અને સુરક્ષા વ્યવસ્થા',
      bathroomKicker: 'અટેચ્ડ એન-સ્યુટ બાથરૂમ',
      bathroomTitle: 'આધુનિક ટાઇલ્ડ વોશરૂમ અને ગરમ પાણી',
      bathroomImgAlt:
        'Hotel Silver Inn ખાતે શાવર અને ગીઝર સાથે સ્વચ્છ અટેચ્ડ બાથરૂમ',
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
            'GIDC નરોડામાં ખાનગી વાહન સાથે આવતા મહેમાનો માટે સમર્પિત પાર્કિંગ વ્યવસ્થા.',
        },
        'room-service': {
          title: 'રૂમ સર્વિસ',
          subtitle: 'રૂમમાં ઝડપી સહાય',
          description:
            'રિસેપ્શન ડેસ્ક મારફતે સીધી સંકલિત ઝડપી રૂમ સર્વિસ સુવિધા.',
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
            'બિઝનેસ અને લાંબા રોકાણ માટે સુવિધાજનક મહેમાન લોન્ડ્રી સેવા.',
        },
        lift: {
          title: 'લિફ્ટ',
          subtitle: 'એલિવેટર સુવિધા',
          description:
            'લગેજ સાથે એક માળથી બીજા માળે સરળતાથી જવા માટે પેસેન્જર લિફ્ટ.',
        },
      },
    },
    gallery: {
      kicker: 'પ્રોપર્ટી ગેલેરી',
      headline: 'Hotel Silver Inn ની અંદર — પ્રવેશદ્વાર, રિસેપ્શન અને રૂમ્સ.',
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
        'gal-entrance-glass': {
          title: 'Hotel Silver Inn મુખ્ય પ્રવેશદ્વાર',
          categoryLabel: 'પ્રવેશ અને લોબી',
          caption: 'સીધા તેજસ્વી રિસેપ્શન હોલમાં ખૂલતા કાચના પ્રવેશદ્વાર.',
        },
        'gal-entrance-sign': {
          title: 'પ્રકાશિત હોટેલ સાઇનબોર્ડ',
          categoryLabel: 'પ્રવેશ અને લોબી',
          caption:
            'આવતા મહેમાનોનું સ્વાગત કરતું પ્રકાશિત Hotel Silver Inn સાઇનબોર્ડ.',
        },
        'gal-reception-desk': {
          title: 'રિસેપ્શન અને ફ્રન્ટ ડેસ્ક',
          categoryLabel: 'પ્રવેશ અને લોબી',
          caption:
            'વોર્મ અન્ડર-કાઉન્ટર લાઇટિંગ સાથે સ્વચ્છ વુડ-અને-વ્હાઇટ રિસેપ્શન ડેસ્ક.',
        },
        'gal-reception-lounge': {
          title: 'ફ્રન્ટ ડેસ્ક અને મહેમાન સહાય',
          categoryLabel: 'પ્રવેશ અને લોબી',
          caption:
            'બ્લુ LED કોવ સીલિંગ અને મુલાકાતી માહિતી સાથે 24-કલાક ફ્રન્ટ ડેસ્ક કાઉન્ટર.',
        },
        'gal-reception-full': {
          title: 'લોબી વેઇટિંગ એરિયા અને લાઉન્જ',
          categoryLabel: 'પ્રવેશ અને લોબી',
          caption:
            'વિશાળ ટાઇલ્ડ રિસેપ્શન ફ્લોર, ચેક-ઇન ડેસ્ક, બેઠક અને CCTV નિગરાણી લોબી.',
        },
        'gal-corridor': {
          title: 'ગેસ્ટ ફ્લોર કોરિડોર',
          categoryLabel: 'કોરિડોર અને વોશરૂમ',
          caption:
            'વોલ સ્કોન્સિસ, ફાયર સેફ્ટી સાધનો અને સોલિડ વુડ રૂમ દરવાજા સાથે પ્રકાશિત કોરિડોર.',
        },
        'gal-twin-wide': {
          title: 'ટ્વિન-બેડ AC રૂમ ઝલક',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption: 'બે ડબલ બેડ, ફ્લૂટેડ નેવી પેનલિંગ અને બેકલિટ TV કન્સોલ.',
        },
        'gal-twin-cove': {
          title: 'ટ્વિન-બેડ રૂમ સીલિંગ લાઇટિંગ',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption: 'વોર્મ કોવ સીલિંગ લાઇટિંગ, ટ્વિન ડબલ બેડ અને ડિઝાઇનર પડદા.',
        },
        'gal-twin-sofa': {
          title: 'ટ્વિન-બેડ રૂમ અને લાઉન્જ બેઠક',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption: 'લાલ ટુ-સીટર બેઠક સાથે વિશાળ ફેમિલી લેઆઉટ.',
        },
        'gal-room-101': {
          title: 'રૂમ 101 ડબલ AC ઇન્ટિરિયર',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption: 'સ્પ્લિટ AC, વોલ-માઉન્ટેડ TV, અરીસો અને લગેજ બેન્ચ.',
        },
        'gal-room-blue': {
          title: 'બ્લુ એક્સેન્ટ ડબલ AC રૂમ',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption:
            'બેડસાઇડ પાવર સોકેટ્સ અને ફ્લૂટેડ એક્સેન્ટ વોલ સાથે સ્વચ્છ ડબલ બેડ.',
        },
        'gal-room-tv-angle': {
          title: 'ડબલ રૂમ TV અને સ્ટોરેજ કોર્નર',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption: 'વોલ-માઉન્ટેડ TV, સ્પ્લિટ AC, અરીસો અને લાકડાનું સ્ટોરેજ કેબિનેટ.',
        },
        'gal-room-vanity': {
          title: 'ઇન-રૂમ બેસિન અને TV કન્સોલ',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption:
            'વેનિટી મિરર, કેબિનેટ વોશબેસિન, ફ્લેટ-સ્ક્રીન TV, સ્પ્લિટ AC અને લગેજ ટેબલ.',
        },
        'gal-room-coral': {
          title: 'ઇન્ટરકોમ સાથે ડબલ રૂમ',
          categoryLabel: 'ગેસ્ટ રૂમ્સ',
          caption:
            'બેડસાઇડ ટેલિફોન અને ડાર્ક ફ્લૂટેડ પેનલિંગ સાથે ડબલ બેડ.',
        },
        'gal-bath-shower': {
          title: 'એન-સ્યુટ બાથરૂમ અને રેઇન શાવર',
          categoryLabel: 'કોરિડોર અને વોશરૂમ',
          caption:
            'આધુનિક માર્બલ-ટોન વોલ ટાઇલિંગ, ગીઝર, ઓવરહેડ શાવર અને બેસિન.',
        },
        'gal-bath-grey': {
          title: 'અટેચ્ડ માર્બલ-ટાઇલ્ડ બાથરૂમ',
          categoryLabel: 'કોરિડોર અને વોશરૂમ',
          caption:
            'ગ્રે માર્બલ-ફિનિશ દિવાલો, વોશબેસિન અને શાવર ફિટિંગ સાથે સ્વચ્છ બાથરૂમ.',
        },
        'gal-bath-washroom': {
          title: 'અટેચ્ડ ગેસ્ટ વોશરૂમ',
          categoryLabel: 'કોરિડોર અને વોશરૂમ',
          caption:
            'વેન્ટિલેટેડ બારી અને આધુનિક સેનિટરી ફિટિંગ સાથે સ્વચ્છ ટાઇલ્ડ વોશરૂમ.',
        },
      },
    },
    attractions: {
      kicker: 'આસપાસનો વિસ્તાર અને કનેક્ટિવિટી',
      headline: 'બિઝનેસ અને શહેર પ્રવેશ માટે GIDC નરોડામાં શ્રેષ્ઠ સ્થાન.',
      exploreMap: 'ઇન્ટરેક્ટિવ નકશો જુઓ',
      frontDeskNote: 'સ્થાનિક દિશાઓ માટે અમારા 24-કલાક ફ્રન્ટ ડેસ્કને પૂછો',
      items: {
        'loc-gidc-naroda': {
          name: 'GIDC નરોડા ઇન્ડસ્ટ્રિયલ એસ્ટેટ',
          tag: 'બિઝનેસ વિસ્તાર',
          description:
            'GIDC નરોડાની અંદર જ સ્થિત, જેથી મુલાકાતી એન્જિનિયરો, કોર્પોરેટ અધિકારીઓ અને ઔદ્યોગિક સપ્લાયર્સને સીધી સગવડ મળે.',
        },
        'loc-makarpura-society': {
          name: 'અવધપુરી અને ચંદ્રેશ સોસાયટી',
          tag: 'નજીકનો વિસ્તાર',
          description:
            'નરોડાના મકરપુરા રહેણાંક-વ્યાપારી પટ્ટામાં આવેલ છે, જ્યાંથી દુકાનો, ATM અને ફાર્મસી સુધી સરળ પહોંચ છે.',
        },
        'loc-ahmedabad-connectivity': {
          name: 'અમદાવાદ શહેર અને ટ્રાન્ઝિટ કનેક્ટિવિટી',
          tag: 'પ્રાદેશિક જોડાણ',
          description:
            'નરોડા રોડ, રિંગ રોડ અને અમદાવાદના મુખ્ય માર્ગો સાથે જોડાયેલ—લાઇવ દિશાઓ અને નજીકના સ્થળો માટે નીચેનો નકશો ખોલો.',
        },
      },
    },
    location: {
      kicker: 'સ્થાન અને દિશા-નિર્દેશ',
      headline: 'GIDC નરોડા, અમદાવાદમાં Hotel Silver Inn શોધો.',
      description:
        'અવધપુરી સોસાયટી, ચંદ્રેશ સોસાયટી, મકરપુરા, GIDC નરોડામાં સ્થળ પર પાર્કિંગ અને 24-કલાક ફ્રન્ટ ડેસ્ક ચેક-ઇન સાથે સુવિધાજનક સ્થાન.',
      addressLabel: 'હોટેલનું સરનામું',
      addressLine1: 'અવધપુરી સોસાયટી, ચંદ્રેશ સોસાયટી, મકરપુરા',
      addressLine2: 'GIDC નરોડા, અમદાવાદ, ગુજરાત 382330, ભારત',
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
        'GIDC નરોડામાં આવેલ Hotel Silver Inn ના ગેસ્ટ રૂમ્સ, સુવિધાઓ અને 24-કલાક ફ્રન્ટ ડેસ્ક સંપર્ક વિશે જરૂરી વિગતો.',
      expandAll: 'બધા ખોલો',
      collapseAll: 'બધા બંધ કરો',
      askFrontDesk: 'ફ્રન્ટ ડેસ્કને પૂછો',
      items: {
        'faq-location': {
          question: 'Hotel Silver Inn ક્યાં આવેલું છે?',
          answer:
            'Hotel Silver Inn અવધપુરી સોસાયટી, ચંદ્રેશ સોસાયટી, મકરપુરા, GIDC નરોડા, અમદાવાદ, ગુજરાત 382330, ભારત ખાતે આવેલું છે—જે GIDC નરોડા અને અમદાવાદના મુખ્ય માર્ગો સાથે સરળ જોડાણ આપે છે.',
        },
        'faq-rooms': {
          question: 'હોટેલમાં કયા પ્રકારના રૂમ્સ ઉપલબ્ધ છે?',
          answer:
            'અમારી પાસે એર-કન્ડિશન્ડ ડબલ બેડ રૂમ્સ અને બે ડબલ બેડ ધરાવતા ટ્વિન-બેડ AC રૂમ્સ (પસંદગીના ટ્વિન રૂમમાં ટુ-સીટર સોફા બેઠક સાથે) ઉપલબ્ધ છે. રૂમમાં સ્પ્લિટ AC, સીલિંગ ફેન, ફ્લેટ-સ્ક્રીન TV, સ્ટોરેજ કેબિનેટ અને અટેચ્ડ ટાઇલ્ડ વોશરૂમ સામેલ છે.',
        },
        'faq-facilities': {
          question: 'રોકાણ દરમિયાન મહેમાનોને કઈ સુવિધાઓ મળે છે?',
          answer:
            'Hotel Silver Inn ખાતે મફત Wi-Fi, એર કન્ડિશનિંગ, સ્થળ પર પાર્કિંગ, રૂમ સર્વિસ, 24-કલાક ફ્રન્ટ ડેસ્ક, લોન્ડ્રી સેવા અને પેસેન્જર લિફ્ટ જેવી પ્રમાણિત સુવિધાઓ ઉપલબ્ધ છે.',
        },
        'faq-front-desk': {
          question: 'શું રાત-દિવસ સહાય માટે ફ્રન્ટ ડેસ્ક ઉપલબ્ધ છે?',
          answer:
            'હા. અમારું 24-કલાક ફ્રન્ટ ડેસ્ક મહેમાનોના આગમન સમયે સહાય, રૂમ સર્વિસ અને લોન્ડ્રી સંકલન તથા સ્થાનિક દિશા-નિર્દેશ માટે દિવસ-રાત કાર્યરત રહે છે.',
        },
        'faq-parking-lift': {
          question: 'શું પ્રોપર્ટીમાં પાર્કિંગ અને લિફ્ટની સુવિધા છે?',
          answer:
            'હા. Hotel Silver Inn GIDC નરોડામાં સ્થળ પર મહેમાન પાર્કિંગ અને લગેજ સાથે સરળ અવરજવર માટે પેસેન્જર લિફ્ટની સુવિધા આપે છે.',
        },
        'faq-enquiry': {
          question:
            'હું રૂમની ઉપલબ્ધતા કે રોકાણ વિશે પૂછપરછ કેવી રીતે કરી શકું?',
          answer:
            'તમે +91 97270 50641 પર કૉલ કરીને, WhatsApp પર સંદેશ મોકલીને અથવા નીચેના સંપર્ક ફોર્મ દ્વારા અમારા 24-કલાક ફ્રન્ટ ડેસ્કનો સીધો સંપર્ક કરી શકો છો. આ વેબસાઇટ પર કોઈ ઓનલાઈન ચુકવણી લેવામાં આવતી નથી—રોકાણની વિગતો સીધી ફ્રન્ટ ડેસ્ક દ્વારા નક્કી થાય છે.',
        },
      },
    },
    contact: {
      kicker: 'ફ્રન્ટ ડેસ્ક સંપર્ક',
      headline: 'Hotel Silver Inn સાથે સીધો સંપર્ક કરો.',
      description:
        'GIDC નરોડા, અમદાવાદમાં રૂમ ઉપલબ્ધતા, ચેક-ઇન માર્ગદર્શન અને રોકાણની પૂછપરછ માટે ફોન અથવા WhatsApp દ્વારા અમારા 24-કલાક ફ્રન્ટ ડેસ્કનો સંપર્ક કરો.',
      conciergeHours: '24-કલાક ફ્રન્ટ ડેસ્ક',
      whatsappEnquiry: 'WhatsApp પૂછપરછ',
      callNow: 'હમણાં કૉલ કરો',
      formTitle: 'રૂમ અને રોકાણ પૂછપરછ',
      formSubtitle: '24-કલાક ફ્રન્ટ ડેસ્ક · +91 97270 50641',
      nameLabel: 'પૂરું નામ *',
      namePlaceholder: 'તમારું પૂરું નામ',
      phoneLabel: 'ફોન / WhatsApp *',
      phonePlaceholder: '+91 98000 00000',
      emailLabel: 'ઈમેલ સરનામું (વૈકલ્પિક)',
      emailPlaceholder: 'name@example.com',
      interestLabel: 'પૂછપરછનો પ્રકાર',
      interestOptions: {
        availability: 'રૂમની ઉપલબ્ધતા',
        doubleRoom: 'ડબલ બેડ AC રૂમ',
        twinRoom: 'ટ્વિન બેડ AC રૂમ',
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
        '. Hotel Silver Inn ને તમારી પૂછપરછ સીધી મોકલવા માટે કૃપા કરીને નીચે WhatsApp અથવા ફોન દ્વારા અમારા 24-કલાક ફ્રન્ટ ડેસ્કનો સંપર્ક કરો.',
      sendViaWhatsapp: 'WhatsApp દ્વારા મોકલો',
      editEnquiry: 'વિગતો સુધારો',
      whatsappCustomMessage: ({ name, interest, dates, notes }) =>
        `નમસ્તે Hotel Silver Inn, મારું નામ ${name} છે. પૂછપરછ: ${interest}${
          dates ? ` (${dates})` : ''
        }. ${notes}`,
    },
    footer: {
      regionLabel: 'GIDC નરોડા · અમદાવાદ, ગુજરાત',
      backToTop: 'ઉપર જાઓ',
      backToTopAria: 'પેજની ઉપર જાઓ',
      copyrightSuffix: 'સર્વાધિકાર સુરક્ષિત.',
    },
    floatingWhatsapp: {
      ariaLabel: 'WhatsApp પર Hotel Silver Inn સાથે ચેટ કરો (+919875274952)',
      tooltip: 'WhatsApp પર ચેટ કરો',
    },
    imageFallback: {
      subtitle: 'Hotel Silver Inn · નરોડા, અમદાવાદ',
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
      regionLabel: 'GIDC नरोडा · अहमदाबाद, गुजरात',
      headline: 'नरोडा, अहमदाबाद में आरामदायक एयर-कंडीशन्ड ठहराव।',
      subheadline:
        'अवधपुरी सोसाइटी, GIDC नरोडा में स्थित Hotel Silver Inn बिज़नेस और पारिवारिक मेहमानों का स्वच्छ AC कमरों, 24-घंटे फ्रंट डेस्क, रूम सर्विस, मुफ़्त Wi-Fi, लिफ्ट, लॉन्ड्री और ऑन-साइट पार्किंग के साथ स्वागत करता है।',
      enquireCta: 'उपलब्धता के लिए पूछताछ करें',
      viewRoomsCta: 'कमरे देखें',
      entranceCaptionLocation: 'GIDC नरोडा · अहमदाबाद',
      entranceImgAlt:
        'नरोडा, अहमदाबाद में Hotel Silver Inn का मुख्य कांच का प्रवेश द्वार',
      backdropImgAlt: 'Hotel Silver Inn के एयर-कंडीशन्ड ट्विन कमरे का दृश्य',
      stats: [
        { value: 'AC कमरे', label: 'एयर-कंडीशन्ड गेस्ट रूम' },
        { value: '24-घंटे', label: 'फ्रंट डेस्क और अतिथि सहायता' },
        { value: 'मुफ़्त Wi-Fi', label: 'निःशुल्क इंटरनेट कनेक्टिविटी' },
        { value: 'पार्किंग व लिफ्ट', label: 'परिसर में सुविधाजनक व्यवस्था' },
      ],
    },
    about: {
      kicker: 'Hotel Silver Inn के बारे में',
      headline: 'GIDC नरोडा में स्वागतपूर्ण रिसेप्शन और आधुनिक गेस्ट रूम।',
      paragraphs: [
        'अवधपुरी सोसाइटी, चंद्रेश सोसाइटी, मकरपुरा, GIDC नरोडा में स्थित Hotel Silver Inn अहमदाबाद आने वाले कॉर्पोरेट यात्रियों, औद्योगिक अतिथियों और परिवारों के लिए स्वच्छ और सुव्यवस्थित आवास प्रदान करता है।',
        'मेहमानों का हमारी उज्ज्वल रिसेप्शन लॉबी में 24-घंटे फ्रंट डेस्क सहायता, ऊपरी मंज़िलों के लिए लिफ्ट, अटैच्ड वॉशरूम, रूम सर्विस, लॉन्ड्री सहायता और समर्पित पार्किंग के साथ स्वागत किया जाता है।',
      ],
      metrics: [
        { value: '24/7', label: 'फ्रंट डेस्क सहायता' },
        { value: 'AC', label: 'एयर-कंडीशन्ड कमरे' },
        { value: '7', label: 'मुख्य अतिथि सुविधाएँ' },
      ],
      receptionBadgeHours: '24-घंटे फ्रंट डेस्क',
      receptionCardTitle: 'रिसेप्शन और चेक-इन डेस्क',
      receptionImgAlt: 'Hotel Silver Inn का प्रकाशित रिसेप्शन डेस्क और लॉबी',
    },
    rooms: {
      kicker: 'गेस्ट रूम्स',
      headline: 'नरोडा में सुखद ठहराव के लिए तैयार एयर-कंडीशन्ड कमरे।',
      filterAria: 'कमरे के प्रकार फ़िल्टर करें',
      tabs: {
        all: 'सभी AC कमरे',
        double: 'डबल बेड कमरे',
        twin: 'ट्विन बेड कमरे',
      },
      quickTags: ['एयर कंडीशनिंग', 'मुफ़्त Wi-Fi', 'रूम सर्विस'],
      viewDetails: 'कमरे का विवरण देखें',
      enquire: 'पूछताछ',
      closeModalAria: 'कमरे का विवरण बंद करें',
      highlightsHeading: 'कमरे की विशेषताएँ',
      whatsappEnquiry: 'WhatsApp पूछताछ',
      enquireThisRoom: 'इस कमरे के बारे में पूछें',
      whatsappRoomMessage: (roomName) =>
        `नमस्ते Hotel Silver Inn, मुझे ${roomName} की उपलब्धता के बारे में जानकारी चाहिए।`,
      items: {
        'twin-bed-ac-family': {
          name: 'ट्विन-बेड AC रूम',
          categoryLabel: 'ट्विन बेड कमरे',
          bedding: 'दो डबल बेड',
          summary:
            'विशाल एयर-कंडीशन्ड ट्विन-बेड कमरा, जिसमें दो साफ सफेद बेड, नेवी फ्लूटेड पैनलिंग, बैकलिट वॉलनट टीवी वॉल, सीलिंग फैन, फुल-लेंथ मिरर और स्टोरेज कैबिनेट मौजूद है।',
          highlights: [
            'ताज़ा लिनन के साथ दो आरामदायक डबल बेड',
            'स्प्लिट AC और सीलिंग फैन',
            'कंसोल सहित वॉल-माउंटेड फ्लैट-स्क्रीन TV',
            'मुफ़्त Wi-Fi और रूम सर्विस',
          ],
        },
        'twin-bed-ac-lounge': {
          name: 'बैठक व्यवस्था सहित ट्विन-बेड AC रूम',
          categoryLabel: 'ट्विन बेड कमरे',
          bedding: 'दो डबल बेड और लाउंज सोफा',
          summary:
            'रोशनीदार ट्विन-बेड कमरा जिसमें दो डबल बेड, इनडोर टू-सीटर सोफा सीटिंग, स्प्लिट AC, पैटर्न वाले पर्दे और अटैच्ड टाइल्ड वॉशरूम की सुविधा है।',
          highlights: [
            'दो डबल बेड और टू-सीटर अतिथि बैठक व्यवस्था',
            'स्प्लिट AC और ओवरहेड सीलिंग फैन',
            'आधुनिक अटैच्ड एन-सुइट वॉशरूम',
            '24-घंटे फ्रंट डेस्क और लॉन्ड्री सुविधा',
          ],
        },
        'deluxe-ac-double-101': {
          name: 'AC डबल बेड रूम (रूम 101 विंग)',
          categoryLabel: 'डबल बेड कमरे',
          bedding: 'डबल बेड',
          summary:
            'टाइल्ड फ़्लोरिंग, डार्क वुड-फ़्रेम्ड टीवी कंसोल, लगेज बेंच, ड्रेसिंग मिरर और अटैच्ड बाथरूम वाला उज्ज्वल AC डबल कमरा।',
          highlights: [
            'साफ सफेद लिनन के साथ डबल बेड',
            'स्प्लिट AC और सीलिंग फैन',
            'टीवी कंसोल और लगेज टेबल',
            'निःशुल्क Wi-Fi और रूम सर्विस',
          ],
        },
        'executive-blue-ac-double': {
          name: 'AC डबल बेड रूम (ब्लू फीचर वॉल)',
          categoryLabel: 'डबल बेड कमरे',
          bedding: 'डबल बेड',
          summary:
            'शांत नीली एक्सेंट दीवार, फ्लूटेड पैनलिंग, बेडसाइड चार्जिंग सॉकेट, नाइटस्टैंड और स्प्लिट एयर कंडीशनिंग से सुसज्जित स्वच्छ डबल कमरा।',
          highlights: [
            'बेडसाइड नाइटस्टैंड और पावर सॉकेट के साथ डबल बेड',
            'स्प्लिट AC और सीलिंग फैन',
            'विंडो पर्दे और स्टोरेज कैबिनेट',
            'मुफ़्त Wi-Fi और 24-घंटे फ्रंट डेस्क',
          ],
        },
        'classic-ac-double': {
          name: 'स्टैंडर्ड AC डबल रूम',
          categoryLabel: 'डबल बेड कमरे',
          bedding: 'डबल बेड',
          summary:
            'बेडसाइड इंटरकॉम टेलीफ़ोन, पावर पॉइंट्स, पर्दे, फ्लूटेड वॉल पैनलिंग और आसान कॉरिडोर पहुँच वाला आरामदायक डबल-बेड कमरा।',
          highlights: [
            'बेडसाइड इंटरकॉम फोन सहित डबल बेड',
            'एयर कंडीशनिंग और सीलिंग फैन',
            'रिसेप्शन लॉबी से लिफ्ट की सुविधा',
            'रूम सर्विस और लॉन्ड्री सहायता',
          ],
        },
      },
    },
    amenities: {
      kicker: 'अतिथि सुविधाएँ',
      headline: 'GIDC नरोडा में सहज और आरामदायक ठहराव के लिए आवश्यक सुविधाएँ।',
      corridorKicker: 'लिफ्ट और कॉरिडोर पहुँच',
      corridorTitle: 'रोशनीदार गेस्ट फ़्लोर विंग्स',
      corridorImgAlt:
        'Hotel Silver Inn का उज्ज्वल गेस्ट फ्लोर कॉरिडोर और सुरक्षा व्यवस्था',
      bathroomKicker: 'अटैच्ड एन-सुइट बाथरूम',
      bathroomTitle: 'आधुनिक टाइल्ड वॉशरूम और गर्म पानी',
      bathroomImgAlt:
        'Hotel Silver Inn में शॉवर और गीज़र सहित स्वच्छ अटैच्ड बाथरूम',
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
            'GIDC नरोडा में निजी वाहन से आने वाले मेहमानों के लिए समर्पित पार्किंग व्यवस्था।',
        },
        'room-service': {
          title: 'रूम सर्विस',
          subtitle: 'कमरे में त्वरित सहायता',
          description:
            'रिसेप्शन डेस्क के माध्यम से सीधे समन्वित त्वरित रूम सर्विस सुविधा।',
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
            'व्यावसायिक और लंबे ठहराव के लिए सुविधाजनक अतिथि लॉन्ड्री सेवा।',
        },
        lift: {
          title: 'लिफ्ट',
          subtitle: 'एलिवेटर सुविधा',
          description:
            'सामान के साथ हर मंज़िल पर आसानी से आने-जाने के लिए पैसेंजर लिफ्ट।',
        },
      },
    },
    gallery: {
      kicker: 'प्रॉपर्टी गैलरी',
      headline: 'Hotel Silver Inn के भीतर — प्रवेश द्वार, रिसेप्शन और कमरे।',
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
        'gal-entrance-glass': {
          title: 'Hotel Silver Inn मुख्य प्रवेश द्वार',
          categoryLabel: 'प्रवेश और लॉबी',
          caption: 'सीधे उज्ज्वल रिसेप्शन हॉल में खुलते कांच के प्रवेश द्वार।',
        },
        'gal-entrance-sign': {
          title: 'प्रकाशित होटल साइनबोर्ड',
          categoryLabel: 'प्रवेश और लॉबी',
          caption:
            'आने वाले मेहमानों का स्वागत करता प्रकाशित Hotel Silver Inn साइनबोर्ड।',
        },
        'gal-reception-desk': {
          title: 'रिसेप्शन और फ्रंट डेस्क',
          categoryLabel: 'प्रवेश और लॉबी',
          caption:
            'गर्म अंडर-काउंटर लाइटिंग वाला स्वच्छ वुड-और-व्हाइट रिसेप्शन डेस्क।',
        },
        'gal-reception-lounge': {
          title: 'फ्रंट डेस्क और अतिथि सहायता',
          categoryLabel: 'प्रवेश और लॉबी',
          caption:
            'नीली LED कोव सीलिंग और आगंतुक जानकारी के साथ 24-घंटे फ्रंट डेस्क काउंटर।',
        },
        'gal-reception-full': {
          title: 'लॉबी प्रतीक्षा क्षेत्र और लाउंज',
          categoryLabel: 'प्रवेश और लॉबी',
          caption:
            'विशाल टाइल्ड रिसेप्शन फ़्लोर, चेक-इन डेस्क, बैठक व्यवस्था और CCTV निगरानी लॉबी।',
        },
        'gal-corridor': {
          title: 'गेस्ट फ़्लोर कॉरिडोर',
          categoryLabel: 'कॉरिडोर और वॉशरूम',
          caption:
            'वॉल लाइट्स, अग्नि सुरक्षा उपकरण और ठोस लकड़ी के दरवाज़ों वाला रोशनीदार कॉरिडोर।',
        },
        'gal-twin-wide': {
          title: 'ट्विन-बेड AC रूम दृश्य',
          categoryLabel: 'गेस्ट रूम्स',
          caption: 'दो डबल बेड, फ्लूटेड नेवी पैनलिंग और बैकलिट TV कंसोल।',
        },
        'gal-twin-cove': {
          title: 'ट्विन-बेड रूम सीलिंग लाइटिंग',
          categoryLabel: 'गेस्ट रूम्स',
          caption: 'वॉर्म कोव सीलिंग लाइटिंग, ट्विन डबल बेड और पैटर्न वाले पर्दे।',
        },
        'gal-twin-sofa': {
          title: 'ट्विन-बेड रूम और लाउंज सीटिंग',
          categoryLabel: 'गेस्ट रूम्स',
          caption: 'लाल टू-सीटर सोफा सीटिंग के साथ विशाल फ़ैमिली लेआउट।',
        },
        'gal-room-101': {
          title: 'रूम 101 डबल AC इंटीरियर',
          categoryLabel: 'गेस्ट रूम्स',
          caption: 'स्प्लिट AC, वॉल-माउंटेड TV, आईना और लगेज बेंच।',
        },
        'gal-room-blue': {
          title: 'ब्लू एक्सेंट डबल AC रूम',
          categoryLabel: 'गेस्ट रूम्स',
          caption:
            'बेडसाइड पावर सॉकेट और फ्लूटेड एक्सेंट दीवार वाला स्वच्छ डबल बेड।',
        },
        'gal-room-tv-angle': {
          title: 'डबल रूम TV और स्टोरेज कोना',
          categoryLabel: 'गेस्ट रूम्स',
          caption: 'वॉल-माउंटेड TV, स्प्लिट AC, आईना और लकड़ी का स्टोरेज कैबिनेट।',
        },
        'gal-room-vanity': {
          title: 'इन-रूम बेसिन और TV कंसोल',
          categoryLabel: 'गेस्ट रूम्स',
          caption:
            'वैनिटी मिरर, कैबिनेट वॉशबेसिन, फ्लैट-स्क्रीन TV, स्प्लिट AC और लकड़ी की टेबल।',
        },
        'gal-room-coral': {
          title: 'इंटरकॉम सहित डबल रूम',
          categoryLabel: 'गेस्ट रूम्स',
          caption:
            'बेडसाइड टेलीफ़ोन और डार्क फ्लूटेड पैनलिंग के साथ डबल बेड।',
        },
        'gal-bath-shower': {
          title: 'एन-सुइट बाथरूम और रेन शॉवर',
          categoryLabel: 'कॉरिडोर और वॉशरूम',
          caption:
            'आधुनिक मार्बल-टोन वॉल टाइलिंग, गीज़र, ओवरहेड शॉवर और बेसिन।',
        },
        'gal-bath-grey': {
          title: 'अटैच्ड मार्बल-टाइल्ड बाथरूम',
          categoryLabel: 'कॉरिडोर और वॉशरूम',
          caption:
            'ग्रे मार्बल-फ़िनिश दीवारों, वॉशबेसिन और शॉवर फ़िटिंग्स वाला स्वच्छ बाथरूम।',
        },
        'gal-bath-washroom': {
          title: 'अटैच्ड गेस्ट वॉशरूम',
          categoryLabel: 'कॉरिडोर और वॉशरूम',
          caption:
            'वेंटिलेटेड खिड़की और आधुनिक सैनिटरी फ़िटिंग्स वाला स्वच्छ टाइल्ड वॉशरूम।',
        },
      },
    },
    attractions: {
      kicker: 'आसपास का क्षेत्र और कनेक्टिविटी',
      headline: 'व्यापार और शहर तक पहुँच के लिए GIDC नरोडा में प्रमुख स्थान।',
      exploreMap: 'इंटरैक्टिव मानचित्र देखें',
      frontDeskNote: 'स्थानीय दिशा-निर्देशों के लिए हमारे 24-घंटे फ्रंट डेस्क से पूछें',
      items: {
        'loc-gidc-naroda': {
          name: 'GIDC नरोडा इंडस्ट्रियल एस्टेट',
          tag: 'बिज़नेस ज़िला',
          description:
            'GIDC नरोडा के भीतर स्थित, जिससे आने वाले इंजीनियरों, कॉर्पोरेट अधिकारियों और औद्योगिक आपूर्तिकर्ताओं को सीधी सुविधा मिलती है।',
        },
        'loc-makarpura-society': {
          name: 'अवधपुरी और चंद्रेश सोसाइटी',
          tag: 'निकटतम क्षेत्र',
          description:
            'नरोडा के मकरपुरा आवासीय-व्यावसायिक क्षेत्र में स्थित, जहाँ से स्थानीय दुकानों, ATM और फ़ार्मेसी तक आसान पहुँच है।',
        },
        'loc-ahmedabad-connectivity': {
          name: 'अहमदाबाद शहर और ट्रांज़िट कनेक्टिविटी',
          tag: 'क्षेत्रीय संपर्क',
          description:
            'नरोडा रोड, रिंग रोड और अहमदाबाद के प्रमुख मार्गों से जुड़ा हुआ—लाइव दिशाओं और नजदीकी स्थानों के लिए नीचे मानचित्र देखें।',
        },
      },
    },
    location: {
      kicker: 'स्थान और दिशा-निर्देश',
      headline: 'GIDC नरोडा, अहमदाबाद में Hotel Silver Inn का पता।',
      description:
        'अवधपुरी सोसाइटी, चंद्रेश सोसाइटी, मकरपुरा, GIDC नरोडा में ऑन-साइट पार्किंग और 24-घंटे फ्रंट डेस्क चेक-इन के साथ सुविधाजनक रूप से स्थित।',
      addressLabel: 'होटल का पता',
      addressLine1: 'अवधपुरी सोसाइटी, चंद्रेश सोसाइटी, मकरपुरा',
      addressLine2: 'GIDC नरोडा, अहमदाबाद, गुजरात 382330, भारत',
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
        'GIDC नरोडा स्थित Hotel Silver Inn के कमरों, सुविधाओं और हमारे 24-घंटे फ्रंट डेस्क से संपर्क करने से जुड़ी आवश्यक जानकारी।',
      expandAll: 'सभी खोलें',
      collapseAll: 'सभी बंद करें',
      askFrontDesk: 'फ्रंट डेस्क से पूछें',
      items: {
        'faq-location': {
          question: 'Hotel Silver Inn कहाँ स्थित है?',
          answer:
            'Hotel Silver Inn अवधपुरी सोसाइटी, चंद्रेश सोसाइटी, मकरपुरा, GIDC नरोडा, अहमदाबाद, गुजरात 382330, भारत में स्थित है—जहाँ से GIDC नरोडा और अहमदाबाद के मुख्य मार्गों तक सीधी पहुँच मिलती है।',
        },
        'faq-rooms': {
          question: 'होटल में किस प्रकार के कमरे उपलब्ध हैं?',
          answer:
            'हम एयर-कंडीशन्ड डबल बेड कमरे और दो डबल बेड वाले ट्विन-बेड AC कमरे (चुनिंदा ट्विन कमरों में टू-सीटर सोफा सीटिंग सहित) प्रदान करते हैं। कमरों में स्प्लिट AC, सीलिंग फैन, फ्लैट-स्क्रीन TV, स्टोरेज कैबिनेट और अटैच्ड टाइल्ड वॉशरूम शामिल हैं।',
        },
        'faq-facilities': {
          question: 'ठहराव के दौरान कौन-सी अतिथि सुविधाएँ उपलब्ध हैं?',
          answer:
            'Hotel Silver Inn में मुफ़्त Wi-Fi, एयर कंडीशनिंग, ऑन-साइट पार्किंग, रूम सर्विस, 24-घंटे फ्रंट डेस्क, लॉन्ड्री सेवा और पैसेंजर लिफ्ट जैसी प्रमाणित सुविधाएँ उपलब्ध हैं।',
        },
        'faq-front-desk': {
          question: 'क्या 24 घंटे सहायता के लिए फ्रंट डेस्क उपलब्ध है?',
          answer:
            'जी हाँ। हमारा 24-घंटे फ्रंट डेस्क मेहमानों के आगमन पर सहायता करने, रूम सर्विस और लॉन्ड्री अनुरोधों का समन्वय करने तथा स्थानीय दिशा-निर्देश देने के लिए दिन-रात सक्रिय रहता है।',
        },
        'faq-parking-lift': {
          question: 'क्या होटल में ऑन-साइट पार्किंग और लिफ्ट की सुविधा है?',
          answer:
            'जी हाँ। Hotel Silver Inn GIDC नरोडा में ऑन-साइट अतिथि पार्किंग और सामान के साथ मंज़िलों पर आसानी से जाने के लिए पैसेंजर लिफ्ट की सुविधा प्रदान करता है।',
        },
        'faq-enquiry': {
          question:
            'मैं कमरे की उपलब्धता या ठहराव के बारे में पूछताछ कैसे कर सकता हूँ?',
          answer:
            'आप +91 97270 50641 पर कॉल करके, WhatsApp पर संदेश भेजकर या नीचे दिए गए संपर्क फ़ॉर्म के माध्यम से हमारे 24-घंटे फ्रंट डेस्क से सीधे संपर्क कर सकते हैं। इस वेबसाइट पर कोई ऑनलाइन भुगतान नहीं लिया जाता—ठहराव की पुष्टि सीधे हमारे फ्रंट डेस्क द्वारा की जाती है।',
        },
      },
    },
    contact: {
      kicker: 'फ्रंट डेस्क संपर्क',
      headline: 'Hotel Silver Inn से सीधे बात करें।',
      description:
        'GIDC नरोडा, अहमदाबाद में कमरे की उपलब्धता, चेक-इन मार्गदर्शन और ठहराव संबंधी पूछताछ के लिए फ़ोन या WhatsApp द्वारा हमारे 24-घंटे फ्रंट डेस्क से संपर्क करें।',
      conciergeHours: '24-घंटे फ्रंट डेस्क',
      whatsappEnquiry: 'WhatsApp पूछताछ',
      callNow: 'अभी कॉल करें',
      formTitle: 'कमरा और ठहराव पूछताछ',
      formSubtitle: '24-घंटे फ्रंट डेस्क · +91 97270 50641',
      nameLabel: 'पूरा नाम *',
      namePlaceholder: 'आपका पूरा नाम',
      phoneLabel: 'फ़ोन / WhatsApp *',
      phonePlaceholder: '+91 98000 00000',
      emailLabel: 'ईमेल पता (वैकल्पिक)',
      emailPlaceholder: 'name@example.com',
      interestLabel: 'पूछताछ का प्रकार',
      interestOptions: {
        availability: 'कमरे की उपलब्धता',
        doubleRoom: 'डबल बेड AC रूम',
        twinRoom: 'ट्विन बेड AC रूम',
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
        '। Hotel Silver Inn को अपनी पूछताछ सीधे भेजने के लिए कृपया नीचे WhatsApp या फ़ोन द्वारा हमारे 24-घंटे फ्रंट डेस्क से संपर्क करें।',
      sendViaWhatsapp: 'WhatsApp द्वारा भेजें',
      editEnquiry: 'विवरण संपादित करें',
      whatsappCustomMessage: ({ name, interest, dates, notes }) =>
        `नमस्ते Hotel Silver Inn, मेरा नाम ${name} है। पूछताछ: ${interest}${
          dates ? ` (${dates})` : ''
        }। ${notes}`,
    },
    footer: {
      regionLabel: 'GIDC नरोडा · अहमदाबाद, गुजरात',
      backToTop: 'ऊपर जाएँ',
      backToTopAria: 'पेज के शीर्ष पर जाएँ',
      copyrightSuffix: 'सर्वाधिकार सुरक्षित।',
    },
    floatingWhatsapp: {
      ariaLabel: 'WhatsApp पर Hotel Silver Inn से चैट करें (+919875274952)',
      tooltip: 'WhatsApp पर चैट करें',
    },
    imageFallback: {
      subtitle: 'Hotel Silver Inn · नरोडा, अहमदाबाद',
    },
  },
};
