import heroHotelImg from '../assets/images/hero_grand_hotel_1795492945950.jpg';
import lobbyAtriumImg from '../assets/images/hotel_lobby_atrium_1795492945828.jpg';
import presidentialSuiteImg from '../assets/images/suite_presidential_1795492946891.jpg';
import harborSuiteImg from '../assets/images/suite_harbor_king_1795492946919.jpg';
import diningRoomImg from '../assets/images/restaurant_fine_dining_1795492947530.jpg';
import infinityPoolImg from '../assets/images/pool_terrace_twilight_1795492947983.jpg';
import spaSanctuaryImg from '../assets/images/spa_sanctuary_1795492948424.jpg';

export interface RoomItem {
  id: string;
  name: string;
  category: 'Signature Suites' | 'Harbor Rooms';
  sizeSqm: number;
  view: string;
  bedding: string;
  occupancy: string;
  ratePerNight: string;
  image: string;
  summary: string;
  highlights: string[];
}

export interface AmenityItem {
  id: string;
  title: string;
  hours: string;
  description: string;
  iconName:
    | 'Waves'
    | 'Sparkles'
    | 'Wine'
    | 'Compass'
    | 'Car'
    | 'Dumbbell'
    | 'Clock'
    | 'Shield';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Architecture' | 'Suites' | 'Culinary & Spa';
  caption: string;
  image: string;
  span?: 'wide' | 'standard';
}

export interface AttractionItem {
  id: string;
  name: string;
  distance: string;
  travelTime: string;
  category: string;
  description: string;
}

export interface DiningHighlight {
  id: 'tasting' | 'cellar' | 'private';
  label: string;
  subtitle: string;
  schedule: string;
  dressCode: string;
  courses: { name: string; detail: string }[];
}

/**
 * Centralized hotel configuration.
 * Update name, address, phone, WhatsApp, coordinates, rooms, or imagery here
 * to adapt this showcase for any luxury hospitality property.
 */
export const HOTEL_CONFIG = {
  name: 'The Aurelia Grand',
  regionLabel: 'Mediterranean Coastline · Cap-Ferrat',
  heroHeadline: 'Timeless coastal architecture, composed for quiet sanctuary.',
  heroSubheadline:
    'Perched above a private limestone cove, The Aurelia Grand pairs forty-two ocean-facing suites with thermal mineral baths, candlelit gastronomy, and discreet concierge hospitality.',
  establishedYear: '1928',
  contact: {
    addressLine1: '18 Promenade des Falaises',
    addressLine2: '06230 Saint-Jean-Cap-Ferrat, France',
    phoneDisplay: '+33 4 93 00 42 18',
    phoneHref: 'tel:+33493004218',
    whatsappNumber: '33493004218',
    whatsappPrefill:
      'Hello Concierge at The Aurelia Grand, I would like to enquire about an upcoming stay.',
    email: 'concierge@aureliagrand.example',
    conciergeHours: '24-Hour Private Concierge Desk',
  },
  location: {
    coordinates: { lat: 43.6836, lng: 7.3342 },
    googleMapsPlaceQuery: 'Saint-Jean-Cap-Ferrat, France',
    airportTransfer: '28 min via private chauffeur from Nice Côte d’Azur Airport',
    helipadNote: 'Private helipad & tender pier access by prior arrangement',
  },
  images: {
    hero: heroHotelImg,
    aboutAtrium: lobbyAtriumImg,
    poolTerrace: infinityPoolImg,
    spaSanctuary: spaSanctuaryImg,
    diningRoom: diningRoomImg,
  },
  heroStats: [
    { value: '42', label: 'Private Suites & Villas' },
    { value: '28°C', label: 'Heated Saltwater Infinity Pool' },
    { value: '24/7', label: 'Dedicated Butler Service' },
    { value: '1928', label: 'Heritage Coastal Estate' },
  ],
  about: {
    kicker: 'The Estate',
    headline: 'A limestone sanctuary shaped by sea light and architectural restraint.',
    paragraphs: [
      'Originally commissioned as a private coastal residence in 1928, The Aurelia Grand was restored over four years using hand-dressed Provençal limestone, brushed champagne brass, and deep midnight-veined marble.',
      'Every arrival unfolds through the double-height Grand Atrium overlooking the sea terrace, where natural twilight reflections meet hushed acoustic calm and unhurried personal service.',
    ],
    metrics: [
      { value: '1.8 ha', label: 'Terraced Mediterranean Gardens' },
      { value: '42', label: 'Oceanfront Suites & Penthouses' },
      { value: '1,200 m²', label: 'Subterranean Thermal Sanctuary' },
    ],
  },
  rooms: [
    {
      id: 'presidential-penthouse',
      name: 'The Sovereign Horizon Penthouse',
      category: 'Signature Suites',
      sizeSqm: 185,
      view: 'Panoramic Sea & Cove',
      bedding: 'Custom Emperor King',
      occupancy: 'Up to 4 Guests',
      ratePerNight: '€3,400',
      image: presidentialSuiteImg,
      summary:
        'Spanning the entire top coastal wing, featuring a wrap-around limestone terrace, private dining salon, walnut library millwork, and dedicated 24-hour butler service.',
      highlights: [
        '65 m² private twilight terrace with outdoor fire hearth',
        'Deep soaking carved travertine bath with sea horizon views',
        'Complimentary round-trip chauffeur airport transfer',
        'Private access to the upper thermal sanctuary circuit',
      ],
    },
    {
      id: 'cap-ferrat-terrace-suite',
      name: 'Champagne Terrace Suite',
      category: 'Signature Suites',
      sizeSqm: 112,
      view: 'Bay & Pine Peninsula',
      bedding: 'King Four-Poster',
      occupancy: 'Up to 3 Guests',
      ratePerNight: '€2,150',
      image: harborSuiteImg,
      summary:
        'A light-filled corner suite dressed in warm limestone, raw champagne silk drapery, and bespoke oak cabinetry framing sweeping twilight harbor views.',
      highlights: [
        'Separate parlor lounge with curated architectural art books',
        'Floor-to-ceiling acoustic glazing opening onto private loggia',
        'In-suite sommelier cellar & espresso bar',
        'Evening turndown with bespoke botanical pillow mist',
      ],
    },
    {
      id: 'atrium-grand-suite',
      name: 'Grand Atrium Residence',
      category: 'Signature Suites',
      sizeSqm: 96,
      view: 'Reflecting Pool & Gardens',
      bedding: 'King Egyptian Cotton',
      occupancy: 'Up to 2 Guests',
      ratePerNight: '€1,780',
      image: lobbyAtriumImg,
      summary:
        'Positioned above the signature reflecting colonnade, blending midnight-navy paneling with warm brass architectural lighting and peaceful garden vistas.',
      highlights: [
        'Double-vanity veined marble dressing salon',
        'Custom sound system & acoustic privacy insulation',
        'Daily breakfast served in-suite or on the water terrace',
        'Priority seating at L’Orangerie dining room',
      ],
    },
    {
      id: 'harbor-deluxe-king',
      name: 'Harbor View Deluxe King',
      category: 'Harbor Rooms',
      sizeSqm: 58,
      view: 'Coastal Harbor & Marina',
      bedding: 'King Bed',
      occupancy: 'Up to 2 Guests',
      ratePerNight: '€1,120',
      image: harborSuiteImg,
      summary:
        'Intimate coastal elegance featuring hand-troweled lime walls, ivory bouclé seating, and a sheltered balcony suspended above the moored yachts below.',
      highlights: [
        'Private stone balcony with bistro table for morning coffee',
        'Walk-in limestone rainfall shower & heated floors',
        '400-thread-count Italian percale bedding',
        'Complimentary thermal pool & wellness access',
      ],
    },
    {
      id: 'garden-sanctuary-room',
      name: 'Thermal Courtyard King',
      category: 'Harbor Rooms',
      sizeSqm: 54,
      view: 'Olive & Cypress Courtyard',
      bedding: 'King Bed',
      occupancy: 'Up to 2 Guests',
      ratePerNight: '€980',
      image: spaSanctuaryImg,
      summary:
        'Quietly tucked beside the subterranean spa courtyard with direct robe-only elevator access to the heated vitality pools and cedar sauna.',
      highlights: [
        'Direct private lift to the Thermal Wellness Sanctuary',
        'Handcrafted teak writing desk & ambient reading sconces',
        'Complimentary herbal apothecary tea service',
        'Late afternoon check-out upon availability',
      ],
    },
  ] as RoomItem[],
  amenities: [
    {
      id: 'infinity-pool',
      title: 'Heated Rooftop Infinity Pool',
      hours: '07:00 – 22:00 Daily',
      description:
        'Saltwater zero-edge pool heated year-round to 28°C with private travertine cabanas and lantern-lit twilight service.',
      iconName: 'Waves',
    },
    {
      id: 'thermal-spa',
      title: 'Subterranean Thermal Sanctuary',
      hours: '08:00 – 21:00 Daily',
      description:
        'Honed dark slate hydrotherapy circuit, cedar Finnish sauna, mineral steam chamber, and bespoke marine botanical rituals.',
      iconName: 'Sparkles',
    },
    {
      id: 'wine-cellar',
      title: 'Grand Cru Wine Vault',
      hours: 'Private Tastings by Appointment',
      description:
        'Over 1,400 vintage labels housed in a temperature-controlled limestone vault curated by our Head Sommelier.',
      iconName: 'Wine',
    },
    {
      id: 'yacht-pier',
      title: 'Private Tender & Yacht Pier',
      hours: 'Sunrise – Sunset',
      description:
        'Direct cove boarding for Riva day charters, coastal excursions, and private sunset aperitif voyages.',
      iconName: 'Compass',
    },
    {
      id: 'chauffeur',
      title: 'Bespoke Chauffeur Fleet',
      hours: '24-Hour Dispatch',
      description:
        'Whisper-quiet executive sedans and electric grand tourers available for airport transfers and regional touring.',
      iconName: 'Car',
    },
    {
      id: 'movement-studio',
      title: 'Pavilion Movement & Yoga Studio',
      hours: '06:00 – 22:00 Daily',
      description:
        'Ocean-facing studio equipped with artisanal wood-frame equipment, private Reformer Pilates, and guided breathwork.',
      iconName: 'Dumbbell',
    },
    {
      id: 'concierge',
      title: 'Les Clefs d’Or Concierge',
      hours: '24/7 Personal Assistance',
      description:
        'Discreet itinerary curation spanning private gallery viewings, Michelin reservations, and coastal aviation.',
      iconName: 'Clock',
    },
    {
      id: 'privacy',
      title: 'Discreet Estate Security',
      hours: 'Continuous Coverage',
      description:
        'Private subterranean arrival court, discreet biometric suite wings, and confidential VIP arrival protocols.',
      iconName: 'Shield',
    },
  ] as AmenityItem[],
  dining: {
    name: 'L’Orangerie & Le Salon Bleu',
    chef: 'Executive Chef Laurent Moreau',
    summary:
      'Set beneath vaulted midnight-navy ceilings and warm candlelight, L’Orangerie celebrates line-caught Mediterranean seafood, heirloom Provençal produce, and aged coastal vintages.',
    tabs: [
      {
        id: 'tasting',
        label: 'Tasting Menu',
        subtitle: 'Seven-Course Coastal Degustation',
        schedule: 'Dinner · 19:00 – 22:30',
        dressCode: 'Smart Evening Attire',
        courses: [
          {
            name: 'Amuse-Bouche · Blue Lobster Tartlet',
            detail: 'Menton lemon emulsion, sea fennel, aged Oscietra caviar',
          },
          {
            name: 'First Course · Wild Red Mullet Crudo',
            detail: 'Fennel pollen, saffron bouillabaisse reduction, crisp sourdough',
          },
          {
            name: 'Signature Main · Line-Caught Sea Bass',
            detail: 'Artichoke barigoule, black truffle jus, preserved Meyer lemon',
          },
          {
            name: 'Patisserie · Champagne & Fig Mille-Feuille',
            detail: 'Caramelized puff pastry, lavender honey ice cream',
          },
        ],
      },
      {
        id: 'cellar',
        label: 'Wine & Cellar',
        subtitle: 'Curated Sommelier Pairings',
        schedule: 'Cellar Aperitif · 17:30 – 23:30',
        dressCode: 'Evening Casual',
        courses: [
          {
            name: 'Blanc de Blancs Prestige Flight',
            detail: 'Three grower champagnes poured by the glass from magnum',
          },
          {
            name: 'Provençal & Bandol Verticals',
            detail: 'Rare coastal whites and cellar-aged Mourvèdre vintages',
          },
          {
            name: 'Grand Cru Burgundy Library',
            detail: 'Montrachet & Côte de Nuits selections spanning 1998–2019',
          },
          {
            name: 'Artisanal Digestif Trolley',
            detail: 'Small-batch Armagnac, Chartreuse VEP, and botanical infusions',
          },
        ],
      },
      {
        id: 'private',
        label: 'Private Dining',
        subtitle: 'The Glass Vault & Cliff Terrace',
        schedule: 'Lunch & Dinner by Reservation',
        dressCode: 'Tailored to Occasion',
        courses: [
          {
            name: 'The Glass Wine Salon (Up to 14 Guests)',
            detail: 'Candlelit marble table surrounded by illuminated vintage racks',
          },
          {
            name: 'Sea Terrace Sunset Table (Up to 8 Guests)',
            detail: 'Private alcove overlooking the reflecting pool and Mediterranean horizon',
          },
          {
            name: 'Chef’s Bespoke Menu Consultation',
            detail: 'Personalized multi-course menus with custom calligraphy keepsakes',
          },
          {
            name: 'Dedicated Sommelier & Butler',
            detail: 'Uninterrupted private service throughout the evening',
          },
        ],
      },
    ] as DiningHighlight[],
  },
  gallery: [
    {
      id: 'gal-facade',
      title: 'Twilight Reflecting Facade',
      category: 'Architecture',
      caption: 'Hand-dressed limestone arches illuminated beside the coastal reflecting pool at dusk.',
      image: heroHotelImg,
      span: 'wide',
    },
    {
      id: 'gal-atrium',
      title: 'The Grand Atrium',
      category: 'Architecture',
      caption: 'Midnight-navy veined marble columns and bespoke champagne brass chandeliers.',
      image: lobbyAtriumImg,
    },
    {
      id: 'gal-penthouse',
      title: 'Sovereign Horizon Penthouse',
      category: 'Suites',
      caption: 'Walnut architectural millwork opening onto a private Mediterranean sea terrace.',
      image: presidentialSuiteImg,
    },
    {
      id: 'gal-dining',
      title: 'L’Orangerie Candlelit Salon',
      category: 'Culinary & Spa',
      caption: 'Intimate velvet banquettes and our illuminated glass-walled wine library.',
      image: diningRoomImg,
    },
    {
      id: 'gal-pool',
      title: 'Rooftop Saltwater Infinity Pool',
      category: 'Culinary & Spa',
      caption: 'Lantern-lit travertine deck overlooking the evening coastline.',
      image: infinityPoolImg,
      span: 'wide',
    },
    {
      id: 'gal-harbor',
      title: 'Champagne Terrace Suite',
      category: 'Suites',
      caption: 'Warm Provençal limestone walls, silk drapery, and harbor dusk views.',
      image: harborSuiteImg,
    },
    {
      id: 'gal-spa',
      title: 'Subterranean Thermal Bath',
      category: 'Culinary & Spa',
      caption: 'Quiet slate plunge pools and warm indirect architectural lighting.',
      image: spaSanctuaryImg,
    },
  ] as GalleryItem[],
  attractions: [
    {
      id: 'attr-gardens',
      name: 'Peninsula Botanical Villa & Gardens',
      distance: '1.8 km',
      travelTime: '5 min drive',
      category: 'Heritage & Architecture',
      description:
        'Early 20th-century seaside estate famed for nine themed terraced gardens overlooking both Mediterranean bays.',
    },
    {
      id: 'attr-trail',
      name: 'Limestone Coastal Walk',
      distance: '0.2 km',
      travelTime: '3 min walk',
      category: 'Nature & Promenade',
      description:
        'A sheltered waterfront footpath weaving past wild sea pines, sheltered swimming coves, and lighthouse views.',
    },
    {
      id: 'attr-marina',
      name: 'Deep-Water Yacht Marina',
      distance: '2.4 km',
      travelTime: '6 min drive',
      category: 'Maritime & Charter',
      description:
        'Waterfront promenade lined with classic wooden tenders, sailing charters, and open-air espresso terraces.',
    },
    {
      id: 'attr-cliff-village',
      name: 'Hilltop Medieval Stone Village',
      distance: '7.5 km',
      travelTime: '14 min drive',
      category: 'Culture & Artisans',
      description:
        'Cobbled pedestrian lanes suspended high above the sea, home to ceramics ateliers and panoramic botanical gardens.',
    },
    {
      id: 'attr-beach-cove',
      name: 'Sheltered Pebble Cove & Beach Club',
      distance: '0.9 km',
      travelTime: '10 min walk',
      category: 'Sea & Leisure',
      description:
        'Calm turquoise bay protected from offshore swells, ideal for morning paddleboarding and seaside lunches.',
    },
    {
      id: 'attr-art-museum',
      name: 'Mediterranean Modern Art Museum',
      distance: '9.2 km',
      travelTime: '18 min drive',
      category: 'Fine Art & Galleries',
      description:
        'Private coastal collection showcasing 20th-century Riviera painting, bronze sculpture, and rotating exhibitions.',
    },
  ] as AttractionItem[],
};
