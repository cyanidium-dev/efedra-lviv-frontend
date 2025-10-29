import React, { CSSProperties, PropsWithChildren, useId } from 'react';

type GlassFilterProps = PropsWithChildren<{
  className?: string;
  borderRadius?: number | string;
  frost?: number; // px blur
  refraction?: number; // 0..1 -> displacement scale
  dispersion?: number; // 0..1 -> chromatic aberration strength
  depth?: number; // 0..1 -> shadow strength
  lightAngle?: number; // degrees 0..360
  lightIntensity?: number; // 0..1 -> highlight opacity
  tintColor?: string; // glass tint base color
  tintOpacity?: number; // 0..1
}>;

/**
 * Generic glass filter panel that approximates Figma-like glass with:
 * - Frost (backdrop blur)
 * - Refraction (noise-based displacement)
 * - Dispersion (subtle chromatic edging)
 * - Depth (multi-layer shadow)
 * - Light (angled highlight wash)
 */
const GlassFilter: React.FC<GlassFilterProps> = ({
  children,
  className,
  borderRadius = 16,
  frost = 12,
  refraction = 0.3,
  dispersion = 0.15,
  depth = 0.4,
  lightAngle = 120,
  lightIntensity = 0.35,
  tintColor = '#FFFFFF',
  tintOpacity = 0.12,
}) => {
  const filterId = useId().replace(/:/g, '-');

  const radius =
    typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius;

  // Clamp helpers
  const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
  const frostPx = Math.max(0, frost);
  const refractScale = Math.round(clamp01(refraction) * 25); // 0..25 reasonable range
  const dispersionStrength = clamp01(dispersion);
  const depthStrength = clamp01(depth);
  const lightOpacity = clamp01(lightIntensity);

  const wrapperStyle: CSSProperties = {
    position: 'relative',
    borderRadius: radius,
    overflow: 'hidden',
    // Don't set background here - let the backdrop-filter layer handle it
  };

  // Depth via layered drop shadows
  const depthShadow = `0 1px 2px rgba(0,0,0,${0.06 * depthStrength}), 0 8px 24px rgba(0,0,0,${0.18 * depthStrength})`;

  // Dispersion via faint colored inner glows (approximation)
  const dispersionShadow = `inset 0 0 0.5px rgba(255,0,0,${0.12 * dispersionStrength}), inset 0 0 0.5px rgba(0,150,255,${0.12 * dispersionStrength})`;

  // Light highlight gradient overlay rotated by angle
  const lightGradient = `linear-gradient(${lightAngle}deg, rgba(255,255,255,${0.55 * lightOpacity}) 0%, rgba(255,255,255,${0.18 * lightOpacity}) 20%, rgba(255,255,255,0) 55%)`;

  // Extract RGB from tintColor for rgba
  const getTintRgba = (color: string, opacity: number) => {
    // Handle hex colors (with or without alpha)
    if (color.startsWith('#')) {
      const hex = color.slice(1);
      if (hex.length === 6 || hex.length === 8) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        // If hex has alpha (8 chars), extract it, otherwise use provided opacity
        const alpha =
          hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : opacity;
        return `rgba(${r},${g},${b},${alpha})`;
      }
    }
    // Fallback for rgb/rgba strings
    if (color.includes('rgba') || color.includes('rgb')) {
      return color;
    }
    // Default to white if unrecognized
    return `rgba(255,255,255,${opacity})`;
  };

  // Frost layer styles (backdrop blur + saturation)
  // This layer blurs whatever is behind the GlassFilter component
  const frostStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    backdropFilter: `blur(${frostPx}px) saturate(1.25)`,
    WebkitBackdropFilter: `blur(${frostPx}px) saturate(1.25)`,
    background: getTintRgba(tintColor, tintOpacity),
    filter: `url(#noise-displace-${filterId})`,
    boxShadow: `${depthShadow}, ${dispersionShadow}`,
    borderRadius: radius,
    pointerEvents: 'none',
    zIndex: 1,
  };

  const lightStyle: CSSProperties = {
    position: 'absolute',
    inset: '-20%', // bleed outside for smoothness when rotated
    backgroundImage: lightGradient,
    pointerEvents: 'none',
    mixBlendMode: 'soft-light',
    borderRadius: radius,
    zIndex: 2,
  };

  return (
    <div className={className} style={wrapperStyle}>
      {/* Displacement filter definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
        <filter
          id={`noise-displace-${filterId}`}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          {/* Noise as height map */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            seed="2"
            result="noise"
          />
          {/* Gentle smoothing */}
          <feGaussianBlur in="noise" stdDeviation="0.6" result="blur" />
          {/* Chromatic dispersion by offsetting channels slightly */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="blur"
            scale={refractScale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Frosted and refracted layer */}
      <div aria-hidden style={frostStyle} />

      {/* Light highlight */}
      <div aria-hidden style={lightStyle} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3 }}>{children}</div>
    </div>
  );
};

export default GlassFilter;
