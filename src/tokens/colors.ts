/**
 * WSC Sports Color Design Tokens
 * Extracted from Figma "Design System for MCP" Colors page
 */

export const colors = {
  // Primary colors - Brand colors for WSC Sports
  primary: {
    100: '#F1FF6C',  // Light yellow
    300: '#E5FF00',  // Base yellow (main brand color)
    500: '#B9D300',  // Yellow-green
    700: '#3F3F2B',  // Dark green
    900: '#333333',  // Dark gray
  },
  
  // Neutral colors - Foundation grays
  neutral: {
    0: '#FFFFFF',    // Pure white
    100: '#F0F0F0',  // Very light gray
    200: '#BABABA',  // Light gray
    300: '#8E8E8E',  // Medium gray
    400: '#616161',  // Darker gray
    500: '#404040',  // Dark gray
    600: '#333333',  // Darker gray
    700: '#282828',  // Very dark gray
    800: '#181818',  // Almost black
    900: '#010101',  // Pure black
  },
  
  // Alert colors - Error states
  alert: {
    100: '#FF5368',  // Light red
    300: '#FF364E',  // Medium red
    500: '#AF001B',  // Dark red
    700: '#500009',  // Very dark red
  },
  
  // Warning colors - Caution states
  warning: {
    100: '#FFCE66',  // Light orange
    300: '#FFAE00',  // Orange
    500: '#B27A00',  // Dark orange
    700: '#805700',  // Very dark orange
  },
  
  // Success colors - Positive states
  success: {
    100: '#00E5A0',  // Light green
    300: '#00B27C',  // Green
    500: '#007F58',  // Dark green
    700: '#006547',  // Very dark green
  },
  
  // Semantic aliases for easier usage
  background: {
    primary: '#010101',      // Main background
    secondary: '#282828',    // Secondary background
    surface: '#333333',      // Surface elements
  },
  
  text: {
    primary: 'rgba(255, 255, 255, 0.92)',  // Main text
    secondary: '#F0F0F0',    // Secondary text
    accent: '#E5FF00',       // Accent text
    muted: '#8E8E8E',        // Muted text
  },
  
  border: {
    primary: '#333333',      // Primary borders
    secondary: '#282828',    // Secondary borders
    accent: '#E5FF00',       // Accent borders
  }
} as const;

export type ColorToken = keyof typeof colors;

// Helper function to get color values
export const getColor = (colorPath: string) => {
  const keys = colorPath.split('.');
  let value: any = colors;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) return undefined;
  }
  
  return value;
}; 