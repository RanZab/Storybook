import React from 'react';
import { colors } from '../../tokens';

interface ColorSwatchProps {
  color: string;
  label: string;
  colorCode: string;
  size?: 'normal' | 'large';
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, label, colorCode, size = 'normal' }) => {
  const swatchStyle = {
    backgroundColor: color,
    width: size === 'large' ? '200px' : '176px',
    height: '80px',
    borderRadius: '8px',
    marginBottom: '16px',
    border: color === '#010101' ? '1px solid #ffffff' : 'none',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={swatchStyle} />
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '16px',
        fontWeight: 700,
        color: 'rgba(255, 255, 255, 0.92)',
      }}>
        <span>{label}</span>
        <span>{colorCode}</span>
      </div>
    </div>
  );
};

interface ColorSectionProps {
  title: string;
  description: string;
  colors: { label: string; color: string; code: string }[];
}

const ColorSection: React.FC<ColorSectionProps> = ({ title, description, colors }) => {
  return (
    <div style={{ marginBottom: '40px' }}>
      <div style={{ display: 'flex', gap: '52px', alignItems: 'flex-start' }}>
        <div style={{ 
          width: '406px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <h3 style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '24px',
            fontWeight: 700,
            color: 'rgba(255, 255, 255, 0.92)',
            margin: 0,
            lineHeight: 1.4
          }}>
            {title}
          </h3>
          <p style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '20px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.92)',
            margin: 0,
            lineHeight: 1.4,
            letterSpacing: '-0.4px'
          }}>
            {description}
          </p>
        </div>
        
        <div style={{ 
          display: 'flex', 
          gap: '16px',
          flexWrap: 'wrap',
          flex: 1
        }}>
          {colors.map((colorItem, index) => (
            <ColorSwatch
              key={index}
              color={colorItem.color}
              label={colorItem.label}
              colorCode={colorItem.code}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export interface ColorsProps {
  /**
   * Show all color palettes
   */
  showAll?: boolean;
}

export const Colors: React.FC<ColorsProps> = () => {
  const primaryColors = [
    { label: '100', color: colors.primary[100], code: '#F1FF6C' },
    { label: '300 (Base)', color: colors.primary[300], code: '#E5FF00' },
    { label: '500', color: colors.primary[500], code: '#B9D300' },
    { label: '700', color: colors.primary[700], code: '#3F3F2B' },
    { label: '900', color: colors.primary[900], code: '#333333' },
  ];

  const neutralColors = [
    { label: '0', color: colors.neutral[0], code: '#FFFFFF' },
    { label: '100', color: colors.neutral[100], code: '#F0F0F0' },
    { label: '200', color: colors.neutral[200], code: '#BABABA' },
    { label: '300', color: colors.neutral[300], code: '#8E8E8E' },
    { label: '400', color: colors.neutral[400], code: '#616161' },
    { label: '500', color: colors.neutral[500], code: '#404040' },
    { label: '600', color: colors.neutral[600], code: '#333333' },
    { label: '700', color: colors.neutral[700], code: '#282828' },
    { label: '800', color: colors.neutral[800], code: '#181818' },
    { label: '900', color: colors.neutral[900], code: '#010101' },
  ];

  const alertColors = [
    { label: '100', color: colors.alert[100], code: '#FF5368' },
    { label: '300', color: colors.alert[300], code: '#FF364E' },
    { label: '500', color: colors.alert[500], code: '#AF001B' },
    { label: '700', color: colors.alert[700], code: '#500009' },
  ];

  const warningColors = [
    { label: '100', color: colors.warning[100], code: '#FFCE66' },
    { label: '300', color: colors.warning[300], code: '#FFAE00' },
    { label: '500', color: colors.warning[500], code: '#B27A00' },
    { label: '700', color: colors.warning[700], code: '#805700' },
  ];

  const successColors = [
    { label: '100', color: colors.success[100], code: '#00E5A0' },
    { label: '300', color: colors.success[300], code: '#00B27C' },
    { label: '500', color: colors.success[500], code: '#007F58' },
    { label: '700', color: colors.success[700], code: '#006547' },
  ];

  return (
    <div style={{ 
      backgroundColor: '#010101', 
      padding: '80px', 
      fontFamily: 'Inter, system-ui, sans-serif',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '68px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '48px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ 
              color: '#F0F0F0', 
              fontSize: '20px', 
              fontWeight: 700 
            }}>
              Foundations
            </span>
            <span style={{ color: '#F0F0F0', fontSize: '20px' }}>›</span>
            <span style={{ 
              color: '#F0F0F0', 
              fontSize: '20px', 
              fontWeight: 700 
            }}>
              Colors
            </span>
          </div>
          <span style={{ 
            color: '#F0F0F0', 
            fontSize: '20px', 
            fontWeight: 700,
            textDecoration: 'underline'
          }}>
            StoryBook Link
          </span>
        </div>
        
        <div style={{ maxWidth: '1620px' }}>
          <h1 style={{ 
            fontFamily: 'Sora, system-ui, sans-serif',
            fontWeight: 600,
            fontSize: '72px',
            lineHeight: '90px',
            color: '#E5FF00',
            margin: '0 0 48px 0',
          }}>
            Colors
          </h1>
          <div style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '20px',
            lineHeight: 1.4,
            color: '#F0F0F0',
            letterSpacing: '-0.4px',
            marginBottom: '20px'
          }}>
            <p style={{ margin: '0 0 20px 0' }}>
              WSC Sports' design system will feature a dynamic and energetic color palette inspired by the intensity of athletic competition. Bold <strong>primary colors</strong> will enhance visibility and clarity, while sleek <strong>neutral tones</strong> provide balance and professionalism. <strong>Supporting colors</strong> will add depth and flexibility, guiding user focus and reinforcing key actions.
            </p>
            <p style={{ margin: 0 }}>
              The combination ensures a modern, high-performance aesthetic, aligning with the fast-paced world of sports.
            </p>
          </div>
        </div>
      </div>

      {/* Primary Colors Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 700, 
          color: 'rgba(255, 255, 255, 0.92)',
          marginBottom: '24px',
          fontFamily: 'Inter, system-ui, sans-serif',
          letterSpacing: '-0.48px'
        }}>
          Primary Colors
        </h2>
        <ColorSection
          title="Primary"
          description="The primary color is our brand color, shaping the look and feel across interactive elements like buttons, links, and inputs."
          colors={primaryColors}
        />
      </div>

      {/* Neutral Colors */}
      <ColorSection
        title="Neutral"
        description="Neutral color anchors the system; nearly every UI element- text, form fields, surfaces, and dividers- displays natural hues."
        colors={neutralColors}
      />

      {/* Alert Colors */}
      <ColorSection
        title="Alert"
        description="Error colors signal negative or destructive actions, marking error states like action failures, lost connections, etc."
        colors={alertColors}
      />

      {/* Warning Colors */}
      <ColorSection
        title="Warning"
        description="Warning colors indicate that an action may be destructive or on hold, grabbing user attention in confirmations."
        colors={warningColors}
      />

      {/* Success Colors */}
      <ColorSection
        title="Success"
        description="Success colors communicate a positive action, positive trend, or a successful confirmation."
        colors={successColors}
      />
    </div>
  );
}; 