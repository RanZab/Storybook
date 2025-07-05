/**
 * Color Design Tokens
 * Extracted from Figma design system
 */

export const colors = {
  // Primary colors from Figma
  primary: {
    300: '#E5FF00', // Primary accent color
    700: '#3F3F2B', // Primary dark variant
  },
  
  // Neutral colors from Figma
  neutral: {
    100: '#F0F0F0', // Light neutral
    900: '#010101', // Dark background
    white: '#FFFFFF',
    textPrimary: 'rgba(255, 255, 255, 0.92)', // Main text color
  },
  
  // Background colors
  background: {
    primary: '#010101',
    secondary: '#3F3F2B',
  },
  
  // Text colors
  text: {
    primary: 'rgba(255, 255, 255, 0.92)',
    secondary: '#F0F0F0',
    accent: '#E5FF00',
  }
} as const;

export type ColorToken = keyof typeof colors; 