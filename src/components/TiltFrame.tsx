import { type ReactNode, useRef, useState } from 'react';

interface TiltFrameProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

/**
 * Subtle hardware-accelerated 3D perspective tilt container on pointer hover.
 * Uses only CSS transform with smooth settling curve.
 */
export function TiltFrame({
  children,
  className = '',
  maxTilt = 4.5,
}: TiltFrameProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState(
    'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  );
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = frameRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * (maxTilt * 2);
    const rotateX = (0.5 - py) * (maxTilt * 2);

    setTransform(
      `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) scale3d(1.01, 1.01, 1.01)`
    );
    setGlarePos({ x: px * 100, y: py * 100, opacity: 0.14 });
  };

  const handleMouseLeave = () => {
    setTransform(
      'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    );
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-200"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(231, 206, 153, 0.32), transparent 60%)`,
        }}
      />
    </div>
  );
}
