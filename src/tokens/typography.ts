/**
 * WSC Sports Typography Design Tokens
 * Extracted from Figma "Design System for MCP" Typography page
 */

export const typography = {
  // Font families from Figma
  fontFamily: {
    primary: ['Inter', 'system-ui', 'sans-serif'], // Main font family
    heading: ['Sora', 'system-ui', 'sans-serif'], // For main page titles only
    mono: ['Monaco', 'Consolas', 'monospace'],
  },
  
  // Font sizes from Figma typography system
  fontSize: {
    // Headlines
    h1: '40px',       // Headline 1 - 2.857rem
    h2: '32px',       // Headline 2 - 2.286rem  
    h3: '24px',       // Headline 3 - 1.714rem
    
    // Body text
    bodyXL: '20px',   // Body XL - 1.429rem
    bodyL: '18px',    // Body L - 1.286rem
    bodyM: '16px',    // Body M - 1.143rem (base)
    bodyS: '14px',    // Body S - 1rem
    bodyXS: '12px',   // Body XS - 0.857rem
    
    // Labels
    label: '11px',    // Label - 0.786rem
    
    // Page title (uses Sora)
    pageTitle: '72px', // Main page title
  },
  
  // Font weights from Figma
  fontWeight: {
    regular: 400,     // Regular - body text, long-form content
    semibold: 600,    // Semi-Bold - subheadings, form labels, emphasis
    bold: 700,        // Bold - headings, section titles, button labels
  },
  
  // Line heights from Figma (all use 140%)
  lineHeight: {
    normal: 1.4,      // 140% - used for all body text and headlines
    heading: 1.25,    // 125% - used for page titles (Sora)
    relaxed: 1.6,     // 160% - used in some descriptions
  },
  
  // Letter spacing
  letterSpacing: {
    normal: '0',
    tight: '-0.4px',  // Used in body text
    wide: '0.025em',
  },
  
  // Typography scale with complete definitions
  scale: {
    h1: {
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: 1.4,
      fontFamily: 'Inter, system-ui, sans-serif',
      usage: 'Used for large, attention-grabbing headlines in promotional areas or in rules system.',
    },
    h2: {
      fontSize: '32px', 
      fontWeight: 700,
      lineHeight: 1.4,
      fontFamily: 'Inter, system-ui, sans-serif',
      usage: 'Used for page titles, section headers, and prominent UI headings.',
    },
    h3: {
      fontSize: '24px',
      fontWeight: 700, 
      lineHeight: 1.4,
      fontFamily: 'Inter, system-ui, sans-serif',
      usage: 'Useful for page intros, grouped sections, or modal headlines.',
    },
    bodyXL: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: 'Inter, system-ui, sans-serif', 
      usage: 'Used for subheadings, section intros, or supporting titles.',
    },
    bodyL: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: 'Inter, system-ui, sans-serif',
      usage: 'Used to emphasize body text or create light hierarchy above 16px. Ideal for callouts or key details.',
    },
    bodyM: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.4, 
      fontFamily: 'Inter, system-ui, sans-serif',
      usage: 'Used for long-form content such as paragraphs and main descriptions, and main tabs labels',
    },
    bodyS: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: 'Inter, system-ui, sans-serif',
      usage: 'Used for primary content like input text, labels, links, and secondary tabs labels',
    },
    bodyXS: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: 'Inter, system-ui, sans-serif',
      usage: 'Used for secondary information such as captions, helper text, timeline labels, or tooltips.',
    },
    label: {
      fontSize: '11px',
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: 'Inter, system-ui, sans-serif',
      usage: 'Used for tab labels and chart metadata',
    },
  }
} as const;

export type TypographyToken = keyof typeof typography;

// Helper function to get typography styles
export const getTypographyStyle = (variant: keyof typeof typography.scale) => {
  return typography.scale[variant];
}; 