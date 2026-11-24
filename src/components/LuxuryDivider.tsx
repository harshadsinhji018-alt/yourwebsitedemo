export type SectionSurface = 'obsidian' | 'midnight' | 'ivory';

const SURFACE_BG_CLASS: Record<SectionSurface, string> = {
  obsidian: 'bg-[#060911]',
  midnight: 'bg-[#0B1324]',
  ivory: 'bg-[#F6F2EA]',
};

interface SectionSeparatorProps {
  topSurface: SectionSurface;
  bottomSurface: SectionSurface;
}

export function SectionSeparator({
  topSurface,
  bottomSurface,
}: SectionSeparatorProps) {
  const isLightSeam = topSurface === 'ivory' || bottomSurface === 'ivory';

  return (
    <div
      aria-hidden="true"
      className="relative w-full h-8 sm:h-10 flex items-center justify-center overflow-hidden select-none pointer-events-none"
    >
      {/* Top half seamlessly extends outgoing section background */}
      <span
        className={`absolute inset-x-0 top-0 h-1/2 ${SURFACE_BG_CLASS[topSurface]}`}
      />
      {/* Bottom half seamlessly extends incoming section background */}
      <span
        className={`absolute inset-x-0 bottom-0 h-1/2 ${SURFACE_BG_CLASS[bottomSurface]}`}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 flex items-center">
        {/* Left tapering metallic gold hairline */}
        <span
          className={`flex-1 h-px bg-gradient-to-r ${
            isLightSeam
              ? 'from-transparent via-[#8A6A2E]/45 to-[#D4B475]'
              : 'from-transparent via-[#D4B475]/40 to-[#E7CE99]'
          }`}
        />

        {/* Minimal geometric champagne-gold centerpiece */}
        <div className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 shrink-0">
          <span
            className={`w-3.5 sm:w-6 h-px bg-gradient-to-r ${
              isLightSeam
                ? 'from-[#B48E48]/50 to-[#8A6A2E]'
                : 'from-[#D4B475]/45 to-[#E7CE99]'
            }`}
          />
          <span
            className={`w-2.5 h-2.5 rotate-45 flex items-center justify-center border ${
              isLightSeam
                ? 'border-[#8A6A2E] bg-[#F6F2EA] shadow-[0_0_8px_rgba(180,142,72,0.28)]'
                : 'border-[#E7CE99]/90 bg-[#060911] shadow-[0_0_10px_rgba(212,180,117,0.3)]'
            }`}
          >
            <span
              className={`w-1 h-1 ${
                isLightSeam ? 'bg-[#8A6A2E]' : 'bg-[#E7CE99]'
              }`}
            />
          </span>
          <span
            className={`w-3.5 sm:w-6 h-px bg-gradient-to-r ${
              isLightSeam
                ? 'from-[#8A6A2E] to-[#B48E48]/50'
                : 'from-[#E7CE99] to-[#D4B475]/45'
            }`}
          />
        </div>

        {/* Right tapering metallic gold hairline */}
        <span
          className={`flex-1 h-px bg-gradient-to-r ${
            isLightSeam
              ? 'from-[#D4B475] via-[#8A6A2E]/45 to-transparent'
              : 'from-[#E7CE99] via-[#D4B475]/40 to-transparent'
          }`}
        />
      </div>
    </div>
  );
}

interface LuxuryDividerProps {
  tone?: 'dark' | 'light';
  align?: 'left' | 'center';
  variant?: 'editorial' | 'hairline';
  className?: string;
}

export function LuxuryDivider({
  tone = 'dark',
  align = 'left',
  variant = 'editorial',
  className = '',
}: LuxuryDividerProps) {
  const isLight = tone === 'light';

  if (variant === 'hairline') {
    return (
      <div
        aria-hidden="true"
        className={`w-full flex items-center ${className}`}
      >
        <span
          className={`w-1.5 h-1.5 rotate-45 shrink-0 mr-2.5 ${
            isLight ? 'bg-[#8A6A2E]/80' : 'bg-[#D4B475]/85'
          }`}
        />
        <span
          className={`flex-1 h-px bg-gradient-to-r ${
            isLight
              ? 'from-[#8A6A2E]/65 via-[#B48E48]/30 to-transparent'
              : 'from-[#D4B475]/65 via-[#D4B475]/20 to-transparent'
          }`}
        />
      </div>
    );
  }

  if (align === 'center') {
    return (
      <div
        aria-hidden="true"
        className={`w-full flex items-center justify-center ${className}`}
      >
        <span
          className={`flex-1 h-px bg-gradient-to-r ${
            isLight
              ? 'from-transparent via-[#B48E48]/35 to-[#8A6A2E]/75'
              : 'from-transparent via-[#D4B475]/30 to-[#E7CE99]/80'
          }`}
        />
        <span
          className={`mx-3 w-2 h-2 rotate-45 border shrink-0 flex items-center justify-center ${
            isLight ? 'border-[#8A6A2E]/85' : 'border-[#D4B475]/85'
          }`}
        >
          <span
            className={`w-[3px] h-[3px] ${
              isLight ? 'bg-[#8A6A2E]' : 'bg-[#E7CE99]'
            }`}
          />
        </span>
        <span
          className={`flex-1 h-px bg-gradient-to-r ${
            isLight
              ? 'from-[#8A6A2E]/75 via-[#B48E48]/35 to-transparent'
              : 'from-[#E7CE99]/80 via-[#D4B475]/30 to-transparent'
          }`}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`w-full flex items-center ${className}`}
    >
      <div className="flex items-center gap-2 shrink-0">
        <span
          className={`w-2 h-2 rotate-45 border flex items-center justify-center ${
            isLight ? 'border-[#8A6A2E]/85' : 'border-[#D4B475]/90'
          }`}
        >
          <span
            className={`w-[3px] h-[3px] ${
              isLight ? 'bg-[#8A6A2E]' : 'bg-[#E7CE99]'
            }`}
          />
        </span>
        <span
          className={`w-8 sm:w-12 h-px bg-gradient-to-r ${
            isLight
              ? 'from-[#8A6A2E] to-[#B48E48]/60'
              : 'from-[#E7CE99] to-[#D4B475]/60'
          }`}
        />
      </div>
      <span
        className={`flex-1 h-px bg-gradient-to-r ${
          isLight
            ? 'from-[#B48E48]/45 via-[#8A6A2E]/20 to-transparent'
            : 'from-[#D4B475]/50 via-[#D4B475]/20 to-transparent'
        }`}
      />
    </div>
  );
}
