import { useCallback, useState } from 'react';
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
} from '@vis.gl/react-google-maps';
import { Compass, ExternalLink, MapPin, Navigation } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';

const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as
  | string
  | undefined;

function HotelMapCanvas() {
  const map = useMap();
  const loadingStatus = useApiLoadingStatus();
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoOpen, setInfoOpen] = useState(true);

  const handleRecenter = useCallback(() => {
    if (!map) return;
    map.panTo(HOTEL_CONFIG.location.coordinates);
    map.setZoom(14);
    setInfoOpen(true);
  }, [map]);

  if (
    loadingStatus === APILoadingStatus.FAILED ||
    loadingStatus === APILoadingStatus.AUTH_FAILURE
  ) {
    return <MapFallbackCard reason="Unable to load Google Maps right now." />;
  }

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-sm overflow-hidden border border-[#0B1324]/15 shadow-[0_24px_60px_rgba(6,9,17,0.14)] bg-[#0B1324]">
      <GoogleMap
        mapId="DEMO_MAP_ID"
        defaultCenter={HOTEL_CONFIG.location.coordinates}
        defaultZoom={14}
        gestureHandling="cooperative"
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        style={{ width: '100%', height: '100%' }}
      >
        <AdvancedMarker
          ref={markerRef}
          position={HOTEL_CONFIG.location.coordinates}
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
            maxWidth={260}
            onCloseClick={() => setInfoOpen(false)}
          >
            <div className="p-1 text-[#0B1324]">
              <p className="font-serif text-base font-semibold">
                {HOTEL_CONFIG.name}
              </p>
              <p className="text-xs text-[#2B3447] mt-1">
                {HOTEL_CONFIG.contact.addressLine1}
                <br />
                {HOTEL_CONFIG.contact.addressLine2}
              </p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${HOTEL_CONFIG.location.coordinates.lat},${HOTEL_CONFIG.location.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#8A6A2E] underline"
              >
                <span>Open Directions</span>
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
        <button
          type="button"
          onClick={handleRecenter}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#F6F2EA] bg-[#060911]/90 hover:bg-[#0B1324] border border-[#D4B475]/40 rounded-sm shadow-lg transition-colors cursor-pointer"
        >
          <Compass className="w-3.5 h-3.5 text-[#D4B475]" />
          <span>Recenter Estate</span>
        </button>
      </div>
    </div>
  );
}

function MapFallbackCard({ reason }: { reason: string }) {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${HOTEL_CONFIG.location.coordinates.lat},${HOTEL_CONFIG.location.coordinates.lng}`;
  return (
    <div className="w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-sm border border-[#0B1324]/15 bg-[#0B1324] text-[#F6F2EA] flex flex-col items-center justify-center text-center p-8">
      <MapPin className="w-9 h-9 text-[#D4B475] mb-4 stroke-[1.5]" />
      <h3 className="font-serif text-2xl mb-2">{HOTEL_CONFIG.name}</h3>
      <p className="text-sm text-[#C8C1B4] max-w-md mb-6">
        {HOTEL_CONFIG.contact.addressLine1}, {HOTEL_CONFIG.contact.addressLine2}
        . {reason}
      </p>
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider text-[#060911] bg-[#D4B475] hover:bg-[#E7CE99] rounded-sm transition-colors"
      >
        <span>View in Google Maps</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

export function LocationSection() {
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${HOTEL_CONFIG.location.coordinates.lat},${HOTEL_CONFIG.location.coordinates.lng}`;

  return (
    <section
      id="location"
      className="relative bg-[#F6F2EA] text-[#0B1324] py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Arrival & Location Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#8A6A2E] mb-3">
                Location &amp; Arrival
              </p>
              <h2
                className="font-serif text-[clamp(2rem,3.4vw,3rem)] font-medium leading-[1.12] text-[#0B1324] mb-4"
                style={{ textWrap: 'balance' }}
              >
                Discreet coastal access on the Cap-Ferrat peninsula.
              </h2>
              <p className="text-base text-[#2B3447] leading-relaxed">
                Sheltered within private terraced headland gardens, the estate offers direct access by chauffeur, yacht tender, or helicopter.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#0B1324]/15 text-sm">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#8A6A2E] mb-1">
                  Estate Address
                </p>
                <p className="text-[#0B1324] font-medium">
                  {HOTEL_CONFIG.contact.addressLine1}
                </p>
                <p className="text-[#4A5366]">
                  {HOTEL_CONFIG.contact.addressLine2}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wider text-[#8A6A2E] mb-1">
                  Coordinates
                </p>
                <p className="text-[#0B1324] tabular-nums">
                  {HOTEL_CONFIG.location.coordinates.lat.toFixed(4)}° N,{' '}
                  {HOTEL_CONFIG.location.coordinates.lng.toFixed(4)}° E
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wider text-[#8A6A2E] mb-1">
                  Private Transfers
                </p>
                <p className="text-[#2B3447]">
                  {HOTEL_CONFIG.location.airportTransfer}
                </p>
                <p className="text-[#4A5366] mt-0.5">
                  {HOTEL_CONFIG.location.helipadNote}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider text-[#F6F2EA] bg-[#0B1324] hover:bg-[#16233E] rounded-sm transition-colors whitespace-nowrap shrink-0"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D4B475]" />
                <span>Open Directions in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Google Map */}
          <div className="lg:col-span-7">
            {MAPS_API_KEY ? (
              <APIProvider
                apiKey={MAPS_API_KEY}
                libraries={['marker']}
                language="en"
                region="FR"
              >
                <HotelMapCanvas />
              </APIProvider>
            ) : (
              <MapFallbackCard reason="Configure VITE_GOOGLE_MAPS_API_KEY in your environment to enable the interactive map." />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
