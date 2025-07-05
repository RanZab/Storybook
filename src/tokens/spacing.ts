/**
 * Spacing Design Tokens
 * Extracted from Figma Grid & Spacing foundation
 */

export const spacing = {
  none: '0px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '40px',
} as const;

export type SpacingToken = keyof typeof spacing;

// Border Radius values from Figma
export const borderRadius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  full: '9999px', // "All the way radius" from Figma
} as const;

export type BorderRadiusToken = keyof typeof borderRadius; 