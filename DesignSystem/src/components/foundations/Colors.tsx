import React from 'react';
import { colors } from '../../tokens/colors';

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
  colorList: { label: string; color: string; code: string }[];
}

const ColorSection: React.FC<ColorSectionProps> = ({ title, description, colorList }) => {
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
          {colorList.map((colorItem, index) => (
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