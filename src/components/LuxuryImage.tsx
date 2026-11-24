import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface LuxuryImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function LuxuryImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  loading = 'lazy',
}: LuxuryImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0B1324] via-[#111C33] to-[#060911] border border-[#D4B475]/20 text-center p-6 ${className}`}
      >
        <Building2 className="w-8 h-8 text-[#D4B475]/70 mb-3 stroke-[1.25]" />
        <p className="font-serif text-lg text-[#F6F2EA] tracking-wide">
          {fallbackTitle || alt}
        </p>
        <span className="mt-1 text-xs text-[#C8C1B4] tracking-wider">
          The Aurelia Grand
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#0B1324] ${className}`}>
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#0B1324] via-[#111C33] to-[#060911] animate-pulse"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
