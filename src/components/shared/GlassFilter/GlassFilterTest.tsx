'use client';

import React, {
  CSSProperties,
  PropsWithChildren,
  useId,
  useRef,
  useEffect,
  useState,
} from 'react';

type GlassFilterTestProps = PropsWithChildren<{
  className?: string;
  /** Frosting blur amount in pixels (default: 10px, or read from --glass-frosting CSS variable) */
  frosting?: number;
  /** Tint color - hex, rgb, or rgba string (default: white, or read from --glass-tint-color CSS variable) */
  tintColor?: string;
  /** Tint opacity - 0 to 1 (default: 0.1, or read from --glass-tint-opacity CSS variable) */
  tintOpacity?: number;
  /** Refraction scale for liquid lens effect (default: 0.3, or read from --glass-refraction CSS variable) */
  refraction?: number;
  /** Border radius (default: 0, or read from --glass-border-radius CSS variable) */
  borderRadius?: number | string;
  /** Highlight color for specular effect (default: rgba(255,255,255,0.3), or read from --glass-highlight-color CSS variable) */
  highlightColor?: string;
  /** Text color (default: inherit, or read from --glass-text-color CSS variable) */
  textColor?: string;
}>;

export const GlassFilterTest: React.FC<GlassFilterTestProps> = ({
  children,
  className = '',
  frosting: propFrosting,
  tintColor: propTintColor,
  tintOpacity: propTintOpacity,
  refraction: propRefraction,
  borderRadius: propBorderRadius,
  highlightColor: propHighlightColor,
  textColor: propTextColor,
}) => {
  const filterId = useId().replace(/:/g, '-');
  const containerRef = useRef<HTMLDivElement>(null);
  const [cssVars, setCssVars] = useState({
    frosting: 10,
    tintColor: '#FFFFFF',
    tintOpacity: 0.1,
    refraction: 0.3,
    borderRadius: '0',
    highlightColor: 'rgba(255,255,255,0.3)',
    textColor: 'inherit',
  });

  // Read CSS variables from the element or its parent
  useEffect(() => {
    if (containerRef.current) {
      // Try reading from the element itself first, then from parent
      const element = containerRef.current;
      const parent = element.parentElement;
      const elementStyle = getComputedStyle(element);
      const parentStyle = parent ? getComputedStyle(parent) : null;

      const getVar = (varName: string, defaultValue: string | number) => {
        const elementValue = elementStyle.getPropertyValue(varName).trim();
        if (elementValue) return elementValue;
        if (parentStyle) {
          const parentValue = parentStyle.getPropertyValue(varName).trim();
          if (parentValue) return parentValue;
        }
        return defaultValue;
      };

      setCssVars({
        frosting: parseFloat(getVar('--glass-frosting', '10') as string) || 10,
        tintColor:
          (getVar('--glass-tint-color', '#FFFFFF') as string) || '#FFFFFF',
        tintOpacity:
          parseFloat(getVar('--glass-tint-opacity', '0.1') as string) || 0.1,
        refraction:
          parseFloat(getVar('--glass-refraction', '0.3') as string) || 0.3,
        borderRadius: (getVar('--glass-border-radius', '0') as string) || '0',
        highlightColor:
          (getVar(
            '--glass-highlight-color',
            'rgba(255,255,255,0.3)'
          ) as string) || 'rgba(255,255,255,0.3)',
        textColor:
          (getVar('--glass-text-color', 'inherit') as string) || 'inherit',
      });
    }
  }, []);

  // Use props if provided, otherwise fall back to CSS variables, then defaults
  const frosting = propFrosting ?? cssVars.frosting;
  const tintColor = propTintColor ?? cssVars.tintColor;
  const tintOpacity = propTintOpacity ?? cssVars.tintOpacity;
  const refraction = propRefraction ?? cssVars.refraction;
  const borderRadius = propBorderRadius ?? cssVars.borderRadius;
  const highlightColor = propHighlightColor ?? cssVars.highlightColor;
  const textColor = propTextColor ?? cssVars.textColor;

  const radius =
    typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius;

  // Convert tint color to rgba string
  const getTintRgba = (color: string, opacity: number) => {
    if (color.startsWith('#')) {
      const hex = color.slice(1);
      if (hex.length === 6 || hex.length === 8) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        const alpha =
          hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : opacity;
        return `rgba(${r},${g},${b},${alpha})`;
      }
    }
    if (color.includes('rgba') || color.includes('rgb')) {
      // If it's already rgba/rgb, try to replace alpha if needed
      if (color.includes('rgba')) {
        return color;
      }
      if (color.includes('rgb(')) {
        const rgb = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (rgb) {
          return `rgba(${rgb[1]},${rgb[2]},${rgb[3]},${opacity})`;
        }
      }
      return color;
    }
    return `rgba(255,255,255,${opacity})`;
  };

  const tintRgba = getTintRgba(tintColor, tintOpacity);

  const cardStyle: CSSProperties = {
    position: 'relative',
    borderRadius: radius,
    overflow: 'hidden',
  };

  const glassFilterStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    backdropFilter: `blur(${frosting}px)`,
    WebkitBackdropFilter: `blur(${frosting}px)`,
    filter: `url(#liquid-lens-${filterId})`,
  };

  const glassOverlayStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    background: tintRgba,
  };

  const glassSpecularStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    zIndex: 2,
    borderRadius: radius,
    boxShadow: `inset 1px 1px 0 ${highlightColor}, inset 0 0 5px ${highlightColor}`,
  };

  const glassContentStyle: CSSProperties = {
    position: 'relative',
    zIndex: 3,
  };

  return (
    <>
      {/* SVG filter definition */}
      <svg style={{ display: 'none' }} aria-hidden>
        <filter
          id={`liquid-lens-${filterId}`}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feImage
            x="0"
            y="0"
            result="normalMap"
            href="data:image/svg+xml;utf8,
               <svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
                 <radialGradient id='nmap' cx='50%' cy='50%' r='50%'>
                   <stop offset='0%' stop-color='rgb(128,128,255)'/>
                   <stop offset='100%' stop-color='rgb(255,255,255)'/>
                 </radialGradient>
                 <rect width='100%' height='100%' fill='url(%23nmap)'/>
               </svg>"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="normalMap"
            scale={refraction}
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feMerge>
            <feMergeNode in="displaced" />
          </feMerge>
        </filter>
      </svg>

      {/* Glass card container */}
      <div ref={containerRef} className={className} style={cardStyle}>
        <div style={glassFilterStyle} aria-hidden />
        <div style={glassOverlayStyle} aria-hidden />
        <div style={glassSpecularStyle} aria-hidden />
        <div style={glassContentStyle}>{children}</div>
      </div>
    </>
  );
};
