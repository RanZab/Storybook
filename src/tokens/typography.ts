/**
 * Typography Design Tokens
 * Extracted from Figma design system
 */

export const typography = {
  // Font families from Figma
  fontFamily: {
    primary: ['Inter', 'system-ui', 'sans-serif'], // Main font
    heading: ['Sora', 'system-ui', 'sans-serif'], // Heading font
    mono: ['Monaco', 'Consolas', 'monospace'],
  },
  
  // Font sizes from Figma
  fontSize: {
    bodyS: '16px',     // Body M (16px) from Figma
    bodyL: '20px',     // Body XL (20px) from Figma
    h3: '24px',        // H3 (24px) from Figma
    h1: '72px',        // Main heading from Figma
  },
  
  // Font weights from Figma
  fontWeight: {
    regular: 400,
    bold: 700,       // Used throughout Figma design
    semibold: 600,   // Used for main heading (Sora)
  },
  
  // Line heights from Figma
  lineHeight: {
    normal: 1.4,     // Main line height used in Figma
    heading: 1.25,   // 90px/72px = 1.25 for main heading
  },
  
  // Letter spacing from Figma
  letterSpacing: {
    normal: '0',
    tight: '-0.4px', // tracking-[-0.4px] from Figma
  }
} as const;

export type TypographyToken = keyof typeof typography; 