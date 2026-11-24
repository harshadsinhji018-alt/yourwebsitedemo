export interface RoomItem {
  id: string;
  name: string;
  category: 'Double Bed Rooms' | 'Twin Bed Rooms';
  bedding: string;
  image: string;
  aspectClass: string;
  summary: string;
  highlights: string[];
}

export interface AmenityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName:
    | 'Wifi'
    | 'Wind'
    | 'Car'
    | 'BellRing'
    | 'Clock'
    | 'Shirt'
    | 'ArrowUpDown';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Entrance & Lobby' | 'Guest Rooms' | 'Corridors & Washrooms';
  caption: string;
  image: string;
  aspectClass: string;
}

export interface LocalityItem {
  id: string;
  name: string;
  tag: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * Centralized configuration for Hotel Silver Inn, Naroda, Ahmedabad.
 * Unverified fields (such as room tariffs or external email) are kept optional/omitted.
 */
export const HOTEL_CONFIG = {
  name: 'Hotel Silver Inn',
  displayBrand: 'HOTEL SILVER INN',
  regionLabel: 'GIDC Naroda · Ahmedabad, Gujarat',
  heroHeadline: 'Comfortable air-conditioned stays in Naroda, Ahmedabad.',
  heroSubheadline:
    'Located in Avadhpuri Society, GIDC Naroda, Hotel Silver Inn welcomes business and family guests with clean AC rooms, a 24-hour front desk, room service, free Wi-Fi, lift access, laundry, and on-site parking.',
  contact: {
    addressLine1: 'Avadhpuri Society, Chandresh Society, Makarpura',
    addressLine2: 'GIDC Naroda, Ahmedabad, Gujarat 382330, India',
    fullAddress:
      'Hotel Silver Inn, Avadhpuri Society, Chandresh Society, Makarpura, GIDC Naroda, Ahmedabad, Gujarat 382330, India',
    phoneDisplay: '+91 97270 50641',
    phoneHref: 'tel:+919727050641',
    whatsappNumber: '919727050641',
    whatsappPrefill:
      'Hello Hotel Silver Inn (Naroda, Ahmedabad), I would like to enquire about room availability.',
    floatingWhatsappNumber: '919875274952',
    floatingWhatsappPrefill:
      'Hello Hotel Silver Inn (Naroda, Ahmedabad), I would like to enquire about room availability and stay details.',
    conciergeHours: '24-Hour Front Desk',
  },
  location: {
    // Default Naroda GIDC Ahmedabad map center; dynamically refined via Google Places searchByText when Maps loads.
    defaultCenter: { lat: 23.0812, lng: 72.6626 },
    searchQuery:
      'Hotel Silver Inn, Avadhpuri Society, Chandresh Society, Makarpura, GIDC Naroda, Ahmedabad, Gujarat 382330, India',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Hotel+Silver+Inn+Avadhpuri+Society+Chandresh+Society+Makarpura+GIDC+Naroda+Ahmedabad+Gujarat+382330+India',
    searchUrl:
      'https://www.google.com/maps/search/?api=1&query=Hotel+Silver+Inn+Avadhpuri+Society+Chandresh+Society+Makarpura+GIDC+Naroda+Ahmedabad+Gujarat+382330+India',
  },
  images: {
    heroBackdrop: '/assets/aistudio/image_310d8ee5.png',
    heroEntrance: '/assets/aistudio/image_d8fc4def.png',
    aboutReception: '/assets/aistudio/image_8d453873.png',
    amenitiesCorridor: '/assets/aistudio/image_c29f0cf1.png',
    amenitiesBathroom: '/assets/aistudio/image_2a2bc8d2.png',
  },
  heroStats: [
    { value: 'AC Rooms', label: 'Climate-Controlled Guest Rooms' },
    { value: '24-Hour', label: 'Front Desk & Guest Assistance' },
    { value: 'Free Wi-Fi', label: 'Complimentary Connectivity' },
    { value: 'Parking & Lift', label: 'On-Site Guest Conveniences' },
  ],
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
  },
  rooms: [
    {
      id: 'twin-bed-ac-family',
      name: 'Twin-Bed AC Room',
      category: 'Twin Bed Rooms',
      bedding: 'Two Double Beds',
      image: '/assets/aistudio/image_310d8ee5.png',
      aspectClass: 'aspect-[16/10]',
      summary:
        'Spacious air-conditioned twin-bed room featuring two crisp white beds, fluted navy paneling, a backlit walnut television wall, ceiling fan, full-length mirror, and storage cabinet.',
      highlights: [
        'Two comfortable double beds with fresh linens',
        'Split Air Conditioning & ceiling fan',
        'Wall-mounted flat-screen TV with console',
        'Free Wi-Fi & Room Service',
      ],
    },
    {
      id: 'twin-bed-ac-lounge',
      name: 'Twin-Bed AC Room with Seating',
      category: 'Twin Bed Rooms',
      bedding: 'Two Double Beds & Lounge Sofa',
      image: '/assets/aistudio/image_72c891e3.png',
      aspectClass: 'aspect-square',
      summary:
        'Well-lit twin-bed accommodation offering two double beds, an indoor two-seater sofa lounge, split AC, patterned window curtains, and direct access to an attached tiled washroom.',
      highlights: [
        'Two double beds plus two-seater guest seating',
        'Split Air Conditioning & overhead ceiling fan',
        'Attached modern en-suite washroom',
        '24-Hour Front Desk & Laundry access',
      ],
    },
    {
      id: 'deluxe-ac-double-101',
      name: 'AC Double Bed Room (Room 101 Wing)',
      category: 'Double Bed Rooms',
      bedding: 'Double Bed',
      image: '/assets/aistudio/image_446ecbe9.png',
      aspectClass: 'aspect-[3/4]',
      summary:
        'Bright air-conditioned double room with tiled flooring, dark wood-framed television console, luggage bench, dressing mirror, and attached bathroom.',
      highlights: [
        'Double bed with crisp white linens',
        'Split Air Conditioning & ceiling fan',
        'Television console & luggage table',
        'Complimentary Wi-Fi & Room Service',
      ],
    },
    {
      id: 'executive-blue-ac-double',
      name: 'AC Double Bed Room (Blue Feature Wall)',
      category: 'Double Bed Rooms',
      bedding: 'Double Bed',
      image: '/assets/aistudio/image_cd5b411e.png',
      aspectClass: 'aspect-[3/4]',
      summary:
        'Clean, well-appointed double room featuring a serene blue accent wall, fluted paneling, bedside charging sockets, nightstand, and split air conditioning.',
      highlights: [
        'Double bed with bedside nightstand & power outlets',
        'Split Air Conditioning & ceiling fan',
        'Window drapery & storage cabinet',
        'Free Wi-Fi & 24-Hour Front Desk',
      ],
    },
    {
      id: 'classic-ac-double',
      name: 'Standard AC Double Room',
      category: 'Double Bed Rooms',
      bedding: 'Double Bed',
      image: '/assets/aistudio/image_fe188326.png',
      aspectClass: 'aspect-[3/4]',
      summary:
        'Comfortable double-bed room equipped with bedside intercom telephone, power points, patterned curtains, fluted wall paneling, and easy corridor access.',
      highlights: [
        'Double bed with bedside intercom phone',
        'Air Conditioning & ceiling fan',
        'Lift access from reception lobby',
        'Room Service & Laundry support',
      ],
    },
  ] as RoomItem[],
  amenities: [
    {
      id: 'wifi',
      title: 'Free Wi-Fi',
      subtitle: 'Property-Wide Connectivity',
      description:
        'Complimentary wireless internet access available for guests across rooms and reception areas.',
      iconName: 'Wifi',
    },
    {
      id: 'ac',
      title: 'Air Conditioning',
      subtitle: 'Split AC in Guest Rooms',
      description:
        'Individual climate-controlled split air conditioning units installed across guest accommodations.',
      iconName: 'Wind',
    },
    {
      id: 'parking',
      title: 'Parking',
      subtitle: 'On-Site Guest Convenience',
      description:
        'Dedicated parking support for guests arriving by private vehicle in GIDC Naroda.',
      iconName: 'Car',
    },
    {
      id: 'room-service',
      title: 'Room Service',
      subtitle: 'In-Room Assistance',
      description:
        'Prompt room service support coordinated directly through the reception desk.',
      iconName: 'BellRing',
    },
    {
      id: 'front-desk',
      title: '24-Hour Front Desk',
      subtitle: 'Round-the-Clock Reception',
      description:
        'Staffed reception counter ready to assist with check-in, local directions, and guest requests anytime.',
      iconName: 'Clock',
    },
    {
      id: 'laundry',
      title: 'Laundry',
      subtitle: 'Garment Care Support',
      description:
        'Convenient guest laundry service available for business and extended stays.',
      iconName: 'Shirt',
    },
    {
      id: 'lift',
      title: 'Lift',
      subtitle: 'Elevator Access',
      description:
        'Passenger lift providing effortless floor-to-floor access with luggage.',
      iconName: 'ArrowUpDown',
    },
  ] as AmenityItem[],
  gallery: [
    {
      id: 'gal-entrance-glass',
      title: 'Hotel Silver Inn Main Entrance',
      category: 'Entrance & Lobby',
      caption: 'Glass entrance doors opening directly into the bright reception hall.',
      image: '/assets/aistudio/image_d8fc4def.png',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-entrance-sign',
      title: 'Illuminated Hotel Signage',
      category: 'Entrance & Lobby',
      caption: 'Illuminated Hotel Silver Inn entrance signboard welcoming arriving guests.',
      image: '/assets/aistudio/image_1d257dd2.png',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-reception-desk',
      title: 'Reception & Front Desk',
      category: 'Entrance & Lobby',
      caption: 'Clean wood-and-white reception desk with warm under-counter lighting.',
      image: '/assets/aistudio/image_8d453873.png',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-reception-lounge',
      title: 'Front Desk & Guest Assistance',
      category: 'Entrance & Lobby',
      caption: '24-hour front desk counter with blue LED cove ceiling and visitor information.',
      image: '/assets/aistudio/image_4b4dcc17.png',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-reception-full',
      title: 'Lobby Waiting Area & Lounge',
      category: 'Entrance & Lobby',
      caption: 'Spacious tiled reception floor, check-in desk, lounge seating, and CCTV-monitored lobby.',
      image: '/assets/aistudio/image_bf6a7561.png',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-corridor',
      title: 'Guest Floor Corridor',
      category: 'Corridors & Washrooms',
      caption: 'Brightly lit corridor with wall sconces, fire safety equipment, and solid wood room doors.',
      image: '/assets/aistudio/image_c29f0cf1.png',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-twin-wide',
      title: 'Twin-Bed AC Room Overview',
      category: 'Guest Rooms',
      caption: 'Two double beds, fluted navy paneling, and backlit TV console.',
      image: '/assets/aistudio/image_310d8ee5.png',
      aspectClass: 'aspect-[16/10]',
    },
    {
      id: 'gal-twin-cove',
      title: 'Twin-Bed Room Ceiling Lighting',
      category: 'Guest Rooms',
      caption: 'Warm cove ceiling lighting, twin double beds, and patterned curtains.',
      image: '/assets/aistudio/image_49f43158.png',
      aspectClass: 'aspect-square',
    },
    {
      id: 'gal-twin-sofa',
      title: 'Twin-Bed Room & Lounge Seating',
      category: 'Guest Rooms',
      caption: 'Spacious family layout with red two-seater seating.',
      image: '/assets/aistudio/image_72c891e3.png',
      aspectClass: 'aspect-square',
    },
    {
      id: 'gal-room-101',
      title: 'Room 101 Double AC Interior',
      category: 'Guest Rooms',
      caption: 'Split AC, wall-mounted TV, mirror, and luggage bench.',
      image: '/assets/aistudio/image_446ecbe9.png',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-room-blue',
      title: 'Blue Accent Double AC Room',
      category: 'Guest Rooms',
      caption: 'Clean double bed with bedside power sockets and fluted accent wall.',
      image: '/assets/aistudio/image_cd5b411e.png',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-room-tv-angle',
      title: 'Double Room TV & Storage Corner',
      category: 'Guest Rooms',
      caption: 'Wall-mounted TV, split AC, mirror, and wooden storage cabinet.',
      image: '/assets/aistudio/image_f0029c6d.png',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-room-vanity',
      title: 'In-Room Basin & TV Console',
      category: 'Guest Rooms',
      caption: 'Vanity mirror, cabinet washbasin, flat-screen TV, split AC, and wooden luggage table.',
      image: '/assets/aistudio/image_3f96b02e.png',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-room-coral',
      title: 'Double Room with Intercom',
      category: 'Guest Rooms',
      caption: 'Double bed with bedside telephone and dark fluted paneling.',
      image: '/assets/aistudio/image_fe188326.png',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-bath-shower',
      title: 'En-suite Bathroom & Rain Shower',
      category: 'Corridors & Washrooms',
      caption: 'Modern marble-toned wall tiling, geyser, overhead shower, and basin.',
      image: '/assets/aistudio/image_2a2bc8d2.png',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-bath-grey',
      title: 'Attached Marble-Tiled Bathroom',
      category: 'Corridors & Washrooms',
      caption: 'Clean attached bathroom with grey marble-finish walls, washbasin, and shower fixtures.',
      image: '/assets/aistudio/image_0f281de6.png',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-bath-washroom',
      title: 'Attached Guest Washroom',
      category: 'Corridors & Washrooms',
      caption: 'Clean tiled washroom with ventilated window and modern sanitary fittings.',
      image: '/assets/aistudio/image_15835407.png',
      aspectClass: 'aspect-[3/4]',
    },
  ] as GalleryItem[],
  localityHighlights: [
    {
      id: 'loc-gidc-naroda',
      name: 'GIDC Naroda Industrial Estate',
      tag: 'Business District',
      description:
        'Positioned right inside GIDC Naroda, offering direct convenience for visiting engineers, corporate executives, and industrial suppliers.',
    },
    {
      id: 'loc-makarpura-society',
      name: 'Avadhpuri & Chandresh Society',
      tag: 'Immediate Vicinity',
      description:
        'Located in the Makarpura residential-commercial belt of Naroda with easy access to neighborhood shops, ATMs, and pharmacies.',
    },
    {
      id: 'loc-ahmedabad-connectivity',
      name: 'Ahmedabad City & Transit Access',
      tag: 'Regional Connectivity',
      description:
        'Connected to Naroda Road, Ring Road, and wider Ahmedabad transit corridors—open the interactive map below for live directions and nearby places.',
    },
  ] as LocalityItem[],
  faqs: [
    {
      id: 'faq-location',
      question: 'Where is Hotel Silver Inn located?',
      answer:
        'Hotel Silver Inn is situated at Avadhpuri Society, Chandresh Society, Makarpura, GIDC Naroda, Ahmedabad, Gujarat 382330, India—offering direct access to GIDC Naroda and surrounding Ahmedabad road links.',
    },
    {
      id: 'faq-rooms',
      question: 'What room configurations are available at the hotel?',
      answer:
        'We offer air-conditioned Double Bed Rooms and Twin-Bed AC Rooms featuring two double beds (with two-seater lounge seating in select twin layouts). Rooms include split AC, ceiling fans, flat-screen TVs, storage cabinets, and attached tiled washrooms.',
    },
    {
      id: 'faq-facilities',
      question: 'Which guest facilities are provided during a stay?',
      answer:
        'Verified facilities at Hotel Silver Inn include Free Wi-Fi, Air Conditioning, On-Site Parking, Room Service, a 24-Hour Front Desk, Laundry service, and passenger Lift access.',
    },
    {
      id: 'faq-front-desk',
      question: 'Is the front desk available for round-the-clock assistance?',
      answer:
        'Yes. Our 24-Hour Front Desk is staffed day and night to assist arriving guests, coordinate room service and laundry requests, and share local directions.',
    },
    {
      id: 'faq-parking-lift',
      question: 'Does the property offer on-site parking and lift access?',
      answer:
        'Yes. Hotel Silver Inn provides on-site guest parking in GIDC Naroda along with a passenger lift for easy floor-to-floor access with luggage.',
    },
    {
      id: 'faq-enquiry',
      question: 'How can I check room availability or enquire about a stay?',
      answer:
        'You can contact our 24-Hour Front Desk directly by calling +91 97270 50641, messaging on WhatsApp, or submitting an enquiry in the Contact section below. This website does not collect online payments—stay details are confirmed directly with our front desk.',
    },
  ] as FaqItem[],
};
