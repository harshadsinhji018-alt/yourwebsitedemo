import { useCallback, useEffect, useState } from 'react';
import {
  APIProvider,
  APILoadingStatus,
  AdvancedMarker,
  InfoWindow,
  Map as GoogleMap,
  Pin,
  useAdvancedMarkerRef,
  useApiLoadingStatus,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import { Compass, ExternalLink, MapPin, Navigation } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { LuxuryDivider } from './LuxuryDivider';

const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as
  | string
  | undefined;

function HotelMapCanvas() {
  const { t } = useLanguage();
  const map = useMap();
  const placesLib = useMapsLibrary('places');
  const loadingStatus = useApiLoadingStatus();
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoOpen, setInfoOpen] = useState(true);
  const [hotelPosition, setHotelPosition] = useState(
    HOTEL_CONFIG.location.defaultCenter
  );

  // Resolve verified location via Places API (New) searchByText when available
  useEffect(() => {
    if (!placesLib || !map) return;
    let active = true;

    const resolveHotelPlace = async () => {
      try {
        const response = await placesLib.Place.searchByText({
          textQuery: HOTEL_CONFIG.location.searchQuery,
          fields: ['displayName', 'location', 'formattedAddress'],
          maxResultCount: 1,
        });

        const firstPlace = response?.places?.[0];
        if (active && firstPlace?.location) {
          const resolved = {
            lat: firstPlace.location.lat(),
            lng: firstPlace.location.lng(),
          };
          setHotelPosition(resolved);
          map.panTo(resolved);
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        if (
          msg.includes('RESOURCE_EXHAUSTED') ||
          msg.includes('OverQuota') ||
          msg.includes('429')
        ) {
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        }
      }
    };

    resolveHotelPlace();
    return () => {
      active = false;
    };
  }, [placesLib, map]);

  const handleRecenter = useCallback(() => {
    if (!map) return;
    map.panTo(hotelPosition);
    map.setZoom(15);
    setInfoOpen(true);
  }, [map, hotelPosition]);

  if (
    loadingStatus === APILoadingStatus.FAILED ||
    loadingStatus === APILoadingStatus.AUTH_FAILURE
  ) {
    return <MapFallbackCard reason={t.location.mapLoadError} />;
  }

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-sm overflow-hidden border border-[#0B1324]/15 shadow-[0_24px_60px_rgba(6,9,17,0.14)] bg-[#0B1324]">
      <GoogleMap
        mapId="DEMO_MAP_ID"
        defaultCenter={HOTEL_CONFIG.location.defaultCenter}
        defaultZoom={15}
        gestureHandling="cooperative"
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        style={{ width: '100%', height: '100%' }}
      >
        <AdvancedMarker
          ref={markerRef}
          position={hotelPosition}
          onClick={() => setInfoOpen(true)}
          title={HOTEL_CONFIG.name}
        >
          <Pin
            background="#D4B475"
            borderColor="#060911"
            glyphColor="#060911"
            scale={1.25}
          />
        </AdvancedMarker>

        {infoOpen && marker && (
          <InfoWindow
            anchor={marker}
            maxWidth={270}
            onCloseClick={() => setInfoOpen(false)}
          >
            <div className="p-1 text-[#0B1324]">
              <p className="font-serif text-base font-semibold">
                {HOTEL_CONFIG.displayBrand}
              </p>
              <p className="text-xs text-[#2B3447] mt-1 leading-relaxed">
                {t.location.addressLine1}, {t.location.addressLine2}
              </p>
              <a
                href={HOTEL_CONFIG.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#8A6A2E] underline"
              >
                <span>{t.location.infoWindowDirections}</span>
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
        <button
          type="button"
          onClick={handleRecenter}
          className="group inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#F6F2EA] bg-[#060911]/90 hover:bg-[#D4B475] hover:text-[#060911] border border-[#D4B475]/40 hover:border-[#D4B475] rounded-sm shadow-lg hover:shadow-[0_10px_24px_rgba(0,0,0,0.45)] transition-all duration-200 cursor-pointer"
        >
          <Compass className="w-3.5 h-3.5 text-[#D4B475] group-hover:text-[#060911] transition-colors" />
          <span>{t.location.recenterHotel}</span>
        </button>
      </div>
    </div>
  );
}

function MapFallbackCard({ reason }: { reason: string }) {
  const { t } = useLanguage();

  return (
    <div className="w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-sm border border-[#0B1324]/15 bg-[#0B1324] text-[#F6F2EA] flex flex-col items-center justify-center text-center p-8">
      <MapPin className="w-9 h-9 text-[#D4B475] mb-4 stroke-[1.5]" />
      <h3 className="font-serif text-2xl mb-2">{HOTEL_CONFIG.displayBrand}</h3>
      <p className="text-sm text-[#C8C1B4] max-w-md mb-6 leading-relaxed">
        {t.location.addressLine1}, {t.location.addressLine2}. {reason}
      </p>
      <a
        href={HOTEL_CONFIG.location.searchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(212,180,117,0.35)]"
      >
        <span>{t.location.viewInGoogleMaps}</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

export function LocationSection() {
  const { language, t } = useLanguage();

  return (
    <section
      id="location"
      className="relative w-full overflow-x-clip bg-[#F6F2EA] text-[#0B1324] py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Arrival & Location Details */}
          <div className="lg:col-span-5 space-y-6 min-w-0">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#8A6A2E] mb-3">
                {t.location.kicker}
              </p>
              <h2
                className="font-serif text-[clamp(2rem,3.4vw,3rem)] font-medium leading-[1.18] text-[#0B1324] mb-4"
                style={{ textWrap: 'balance' }}
              >
                {t.location.headline}
              </h2>
              <p className="text-base text-[#2B3447] leading-relaxed">
                {t.location.description}
              </p>
            </div>

            <div>
              <LuxuryDivider tone="light" variant="hairline" className="mb-6" />
              <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#8A6A2E] mb-1">
                  {t.location.addressLabel}
                </p>
                <p className="text-[#0B1324] font-medium">
                  {t.location.addressLine1}
                </p>
                <p className="text-[#4A5366]">{t.location.addressLine2}</p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wider text-[#8A6A2E] mb-1">
                  {t.location.phoneLabel}
                </p>
                <a
                  href={HOTEL_CONFIG.contact.phoneHref}
                  className="text-[#0B1324] hover:text-[#8A6A2E] font-medium tabular-nums transition-colors"
                >
                  {HOTEL_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wider text-[#8A6A2E] mb-1">
                  {t.location.supportLabel}
                </p>
                <p className="text-[#2B3447]">{t.location.supportValue}</p>
              </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={HOTEL_CONFIG.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider text-[#F6F2EA] bg-[#0B1324] hover:bg-[#D4B475] hover:text-[#060911] rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(11,19,36,0.24)] whitespace-nowrap shrink-0"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D4B475] group-hover:text-[#060911] transition-colors" />
                <span>{t.location.openDirections}</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Google Map */}
          <div className="lg:col-span-7 min-w-0 w-full">
            {MAPS_API_KEY ? (
              <APIProvider
                apiKey={MAPS_API_KEY}
                libraries={['marker', 'places']}
                language={language}
                region="IN"
              >
                <HotelMapCanvas />
              </APIProvider>
            ) : (
              <MapFallbackCard reason={t.location.mapKeyMissing} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
