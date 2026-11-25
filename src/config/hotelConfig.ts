export interface RoomItem {
  id: string;
  name: string;
  category: 'Deluxe Rooms' | 'Classic Rooms';
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

export interface InstagramPostItem {
  id: string;
  image: string;
}

/**
 * Centralized configuration for Hotel Royal Mansion, Kudasan, Gandhinagar.
 * Verified via Google Maps profile (https://maps.app.goo.gl/DJbKADscn5VAZ1nF7).
 * Uses exclusively the 14 property photographs provided by the user.
 */
export const HOTEL_CONFIG = {
  name: 'Hotel Royal Mansion',
  displayBrand: 'HOTEL ROYAL MANSION',
  regionLabel: 'PDPU Cross Road · Kudasan, Gandhinagar',
  heroHeadline: 'Refined air-conditioned stays in Kudasan, Gandhinagar.',
  heroSubheadline:
    'Situated at Shyam Sukan Complex near Bhaijipura Char Rasta and PDPU Cross Road, Hotel Royal Mansion welcomes academic, corporate, and family guests with AC rooms, a 24-hour front desk, room service, free Wi-Fi, lift access, laundry, and on-site parking.',
  contact: {
    addressLine1: '2nd Floor, Shyam Sukan Complex, Bhaijipura Char Rasta',
    addressLine2: 'PDPU Cross Road, Kudasan, Gandhinagar, Gujarat 382421, India',
    fullAddress:
      'Hotel Royal Mansion, 2nd Floor, Shyam Sukan Complex, Bhaijipura Char Rasta, PDPU Cross Road, Kudasan, Gandhinagar, Gujarat 382421, India',
    phoneDisplay: '+91 81558 70111',
    phoneHref: 'tel:+918155870111',
    whatsappNumber: '918155870111',
    whatsappPrefill:
      'Hello Hotel Royal Mansion (Kudasan, Gandhinagar), I would like to enquire about room availability.',
    floatingWhatsappNumber: '918155870111',
    floatingWhatsappPrefill:
      'Hello Hotel Royal Mansion (Kudasan, Gandhinagar), I would like to enquire about room availability and stay details.',
    email: 'hotelroyalmansion111@gmail.com',
    conciergeHours: '24-Hour Front Desk',
  },
  location: {
    // Verified Kudasan, Gandhinagar coordinates resolved from supplied Google Maps profile.
    defaultCenter: { lat: 23.1606071, lng: 72.6364299 },
    searchQuery:
      'Hotel Royal Mansion, 2nd Floor, Shyam Sukan Complex, Bhaijipura Char Rasta, PDPU Cross Road, Kudasan, Gandhinagar, Gujarat 382421, India',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=23.1606071,72.6364299',
    searchUrl: 'https://maps.app.goo.gl/DJbKADscn5VAZ1nF7',
  },
  images: {
    heroBackdrop: '/assets/aistudio/image_db0ca1c0.png',
    heroEntrance: '/assets/aistudio/image_94de092c.png',
    aboutReception: '/assets/aistudio/image_51307cc6.png',
    amenitiesCorridor: '/assets/aistudio/image_8abd17eb.png',
    amenitiesBathroom: '/assets/aistudio/image_4d200146.png',
  },
  heroStats: [
    { value: 'AC Rooms', label: 'Classic, Deluxe & Executive Rooms' },
    { value: '24-Hour', label: 'Front Desk & Guest Assistance' },
    { value: 'Free Wi-Fi', label: 'Complimentary Connectivity' },
    { value: 'Parking & Lift', label: 'On-Site Guest Conveniences' },
  ],
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
  },
  rooms: [
    {
      id: 'deluxe-striped-ac',
      name: 'Deluxe Warm-Wood AC Room',
      category: 'Deluxe Rooms',
      bedding: 'Double Bed',
      image: '/assets/aistudio/image_f9149da0.png',
      aspectClass: 'aspect-[16/10]',
      summary:
        'Air-conditioned double room featuring warm cove ceiling lighting, a backlit wooden headboard against striped wall paneling, full-height wardrobe, dressing mirror, and lounge chair.',
      highlights: [
        'Double bed with crisp white linens & backlit headboard',
        'Split Air Conditioning & ceiling fan',
        'Full-height wooden wardrobe & illuminated mirror',
        'Free Wi-Fi & Room Service',
      ],
    },
    {
      id: 'superior-textured-ac',
      name: 'Superior AC Room with Study Desk',
      category: 'Deluxe Rooms',
      bedding: 'Double Bed & Work Corner',
      image: '/assets/aistudio/image_e2c7bda5.png',
      aspectClass: 'aspect-[4/3]',
      summary:
        'Contemporary guest room highlighted by a textured slate accent wall, warm cove lighting, wooden TV entertainment console, dedicated work chair, and spacious wardrobe.',
      highlights: [
        'Double bed with warm backlit headboard & crisp bedding',
        'Flat-screen TV console & executive work chair',
        'Full wooden wardrobe & cove ceiling lighting',
        'Attached modern bathroom & 24-Hour Front Desk',
      ],
    },
    {
      id: 'executive-blue-desk-ac',
      name: 'Executive Blue-Wall AC Room',
      category: 'Deluxe Rooms',
      bedding: 'Double Bed & Work Desk',
      image: '/assets/aistudio/image_d4974404.png',
      aspectClass: 'aspect-[4/3]',
      summary:
        'Bright AC double room designed with a geometric blue feature wall, wooden nightstand, multi-plug bedside switches, tall wardrobe, and an ergonomic work desk setup.',
      highlights: [
        'Double bed with bedside power sockets & drawer unit',
        'Dedicated study desk & cushioned office chair',
        'Split Air Conditioning & wall-mounted fan',
        'Complimentary Wi-Fi & Laundry service',
      ],
    },
    {
      id: 'royal-navy-kettle-ac',
      name: 'Royal Cushion-Back AC Room',
      category: 'Classic Rooms',
      bedding: 'Double Bed',
      image: '/assets/aistudio/image_460622f7.png',
      aspectClass: 'aspect-[4/3]',
      summary:
        'Clean double room featuring a padded navy headboard, warm terracotta cushions, bedside electric kettle tray, intercom telephone, yellow window drapes, and power outlets.',
      highlights: [
        'Double bed with cushioned navy headboard & fresh linens',
        'In-room electric kettle & bedside intercom phone',
        'Dual bedside sockets & striped feature wall',
        'Free Wi-Fi & Room Service',
      ],
    },
    {
      id: 'classic-white-linen-ac',
      name: 'Classic Double AC Room',
      category: 'Classic Rooms',
      bedding: 'Double Bed',
      image: '/assets/aistudio/image_752a4d19.png',
      aspectClass: 'aspect-[4/3]',
      summary:
        'Serene air-conditioned double room dressed in crisp white striped linens with warm wooden headboard, golden window curtains, greenery views, and bedside intercom.',
      highlights: [
        'Double bed with white striped hotel bedding',
        'Air Conditioning, natural daylight & curtains',
        'Bedside intercom telephone to 24-Hour Front Desk',
        'Lift access & On-Site Parking support',
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
        'Dedicated on-site parking convenience at Shyam Sukan Complex in Kudasan, Gandhinagar.',
      iconName: 'Car',
    },
    {
      id: 'room-service',
      title: 'Room Service',
      subtitle: 'In-Room Assistance',
      description:
        'Prompt room service and housekeeping support coordinated directly through the reception desk.',
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
        'Convenient guest laundry service available for business, academic, and extended stays.',
      iconName: 'Shirt',
    },
    {
      id: 'lift',
      title: 'Lift',
      subtitle: 'Elevator Access',
      description:
        'Passenger lift providing effortless access to our 2nd-floor reception and guest rooms with luggage.',
      iconName: 'ArrowUpDown',
    },
  ] as AmenityItem[],
  gallery: [
    {
      id: 'gal-exterior-front',
      title: 'Hotel Royal Mansion Front Facade',
      category: 'Entrance & Lobby',
      caption: 'Building elevation showing the Hotel Royal Mansion signage and blue glass frontage.',
      image: '/assets/aistudio/image_fce7176d.png',
      aspectClass: 'aspect-[16/10]',
    },
    {
      id: 'gal-exterior-angle',
      title: 'Exterior Elevation & Glass Frontage',
      category: 'Entrance & Lobby',
      caption: 'Corner view of Hotel Royal Mansion at Shyam Sukan Complex in Kudasan.',
      image: '/assets/aistudio/image_db0ca1c0.png',
      aspectClass: 'aspect-[16/10]',
    },
    {
      id: 'gal-lobby-lounge',
      title: 'Reception Lounge & Sofa Seating',
      category: 'Entrance & Lobby',
      caption: 'L-shaped guest lounge sofa, frosted glass entry door, and illuminated reception desk.',
      image: '/assets/aistudio/image_51307cc6.png',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'gal-reception-desk',
      title: '24-Hour Reception & Front Desk',
      category: 'Entrance & Lobby',
      caption: 'Staffed wooden check-in counter with split AC and warm cove lighting.',
      image: '/assets/aistudio/image_13e27bc7.png',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'gal-reception-corridor',
      title: 'Main Lobby & Guest Wing Entry',
      category: 'Entrance & Lobby',
      caption: 'Spacious marble-tiled reception foyer opening directly into the guest room corridor.',
      image: '/assets/aistudio/image_94de092c.png',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'gal-corridor-201',
      title: 'Second-Floor Guest Corridor',
      category: 'Corridors & Washrooms',
      caption: 'Polished grey marble hallway with recessed ceiling lights and numbered room doors 201 & 202.',
      image: '/assets/aistudio/image_8abd17eb.png',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'gal-room-deluxe-wood',
      title: 'Deluxe Warm-Wood AC Room',
      category: 'Guest Rooms',
      caption: 'Double bed with backlit headboard, wooden wardrobe, vanity mirror, and lounge chair.',
      image: '/assets/aistudio/image_f9149da0.png',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'gal-room-superior-tv',
      title: 'Superior Room & TV Work Desk',
      category: 'Guest Rooms',
      caption: 'Textured accent wall, wall-mounted flat-screen TV, wardrobe, and work chair.',
      image: '/assets/aistudio/image_e2c7bda5.png',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'gal-room-blue-desk',
      title: 'Executive Blue-Wall AC Room',
      category: 'Guest Rooms',
      caption: 'Geometric blue wall, double bed, split AC, study desk, and tall wardrobe.',
      image: '/assets/aistudio/image_d4974404.png',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'gal-room-navy-kettle',
      title: 'Royal Cushion-Back AC Room',
      category: 'Guest Rooms',
      caption: 'Padded navy headboard, electric kettle tray, intercom telephone, and yellow curtains.',
      image: '/assets/aistudio/image_460622f7.png',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'gal-room-classic-drapes',
      title: 'Classic Double AC Room & Drapes',
      category: 'Guest Rooms',
      caption: 'Split AC above tall golden curtains, wooden headboard, and intercom telephone.',
      image: '/assets/aistudio/image_c4d07238.png',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'gal-room-tv-seating',
      title: 'In-Room TV Console & Chair',
      category: 'Guest Rooms',
      caption: 'Backlit wooden TV console, tea table, armchair, wardrobe, and dressing mirror.',
      image: '/assets/aistudio/image_76e95183.png',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'gal-room-white-linen',
      title: 'Classic White-Linen Double Room',
      category: 'Guest Rooms',
      caption: 'Fresh white striped hotel linens, natural window daylight, and bedside intercom.',
      image: '/assets/aistudio/image_752a4d19.png',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'gal-bathroom-geyser',
      title: 'En-Suite Tiled Bathroom & Shower',
      category: 'Corridors & Washrooms',
      caption: 'Marble-finish tiled washroom with rain shower, water heater geyser, and exhaust fan.',
      image: '/assets/aistudio/image_4d200146.png',
      aspectClass: 'aspect-[4/3]',
    },
  ] as GalleryItem[],
  localityHighlights: [
    {
      id: 'loc-pdpu-corridor',
      name: 'PDPU Cross Road & Knowledge Corridor',
      tag: 'Academic & Institutional Hub',
      description:
        'Positioned right off PDPU Cross Road and Bhaijipura Char Rasta, providing direct access for visitors heading to PDEU, GNLU, and surrounding campuses.',
    },
    {
      id: 'loc-kudasan-complex',
      name: 'Shyam Sukan Complex & Kudasan',
      tag: 'Immediate Vicinity',
      description:
        'Located on the 2nd floor of Shyam Sukan Complex in thriving Kudasan with everyday dining spots, cafes, pharmacies, and banks right nearby.',
    },
    {
      id: 'loc-gandhinagar-transit',
      name: 'Gandhinagar, GIFT City & Airport Links',
      tag: 'Regional Connectivity',
      description:
        'Smooth road links toward GIFT City, Sargasan, Infocity, and the Gandhinagar–Ahmedabad corridor—open the interactive map below for live directions.',
    },
  ] as LocalityItem[],
  faqs: [
    {
      id: 'faq-location',
      question: 'Where is Hotel Royal Mansion located?',
      answer:
        'Hotel Royal Mansion is located on the 2nd Floor of Shyam Sukan Complex at Bhaijipura Char Rasta, PDPU Cross Road, Kudasan, Gandhinagar, Gujarat 382421, India.',
    },
    {
      id: 'faq-rooms',
      question: 'What room configurations are available at the hotel?',
      answer:
        'We offer air-conditioned Classic, Deluxe, and Executive Double Bed Rooms with split AC, flat-screen TVs, wardrobes, work desks in select layouts, electric kettles in select rooms, and modern attached tiled washrooms with hot-water geysers.',
    },
    {
      id: 'faq-facilities',
      question: 'Which guest facilities are provided during a stay?',
      answer:
        'Verified facilities at Hotel Royal Mansion include Free Wi-Fi, Air Conditioning, On-Site Parking, Room Service, a 24-Hour Front Desk, Laundry support, and passenger Lift access.',
    },
    {
      id: 'faq-front-desk',
      question: 'Is the front desk available for round-the-clock assistance?',
      answer:
        'Yes. Our 24-Hour Front Desk is staffed day and night to assist arriving guests, coordinate room service and laundry requests, and share local directions around Kudasan and Gandhinagar.',
    },
    {
      id: 'faq-parking-lift',
      question: 'Does the property offer lift access and on-site parking?',
      answer:
        'Yes. Located on the 2nd floor of Shyam Sukan Complex, Hotel Royal Mansion offers passenger lift access with luggage as well as convenient on-site guest parking.',
    },
    {
      id: 'faq-enquiry',
      question: 'How can I check room availability or enquire about a stay?',
      answer:
        'You can contact our 24-Hour Front Desk directly by calling +91 81558 70111, messaging on WhatsApp, or submitting an enquiry in the Contact section below. This website does not collect online payments—stay details are confirmed directly with our front desk.',
    },
  ] as FaqItem[],
  instagram: {
    handle: '@hotelroyalmansiongandhinagar',
    profileUrl: 'https://www.instagram.com/hotelroyalmansiongandhinagar/',
    posts: [
      { id: 'ig-exterior', image: '/assets/aistudio/image_fce7176d.png' },
      { id: 'ig-deluxe', image: '/assets/aistudio/image_f9149da0.png' },
      { id: 'ig-lounge', image: '/assets/aistudio/image_51307cc6.png' },
      { id: 'ig-study', image: '/assets/aistudio/image_e2c7bda5.png' },
      { id: 'ig-kettle', image: '/assets/aistudio/image_460622f7.png' },
      { id: 'ig-corridor', image: '/assets/aistudio/image_8abd17eb.png' },
    ] as InstagramPostItem[],
  },
};
