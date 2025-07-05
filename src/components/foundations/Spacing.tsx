import React from 'react';
import { spacing, borderRadius } from '../../tokens';

interface SpacingProps {
  /**
   * Show spacing values in a visual format
   */
  showSpacing?: boolean;
  /**
   * Show border radius values
   */
  showRadius?: boolean;
}

export const Spacing: React.FC<SpacingProps> = ({ 
  showSpacing = true, 
  showRadius = true 
}) => {
  const spacingValues = [
    { label: '4px', value: spacing.xs },
    { label: '8px', value: spacing.sm },
    { label: '16px', value: spacing.md },
    { label: '24px', value: spacing.lg },
    { label: '32px', value: spacing.xl },
    { label: '40px', value: spacing.xxl },
  ];

  const radiusValues = [
    { label: '0 px', value: borderRadius.none, style: { borderRadius: '0px' } },
    { label: '4 px', value: borderRadius.sm, style: { borderRadius: '4px' } },
    { label: '8 px', value: borderRadius.md, style: { borderRadius: '8px' } },
    { label: 'All the way radius', value: borderRadius.full, style: { borderRadius: '32px' } },
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
              Grid & Spacing
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
            width: '900px'
          }}>
            Grid & Spacing
          </h1>
          <p style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: 1.4,
            color: '#F0F0F0',
            letterSpacing: '-0.4px',
            margin: 0,
            width: '780px'
          }}>
            Layout grids establish structure, hierarchy, and alignment across the interface. 
            Consistent spacing reinforces visual rhythm and clarity, enhancing readability and 
            creating balanced, well-organized designs.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '200px' }}>
        {/* Spacers Section */}
        {showSpacing && (
          <div style={{ width: '354px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 700, 
              color: 'rgba(255, 255, 255, 0.92)',
              marginBottom: '24px',
              margin: '0 0 24px 0'
            }}>
              Spacers
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {spacingValues.map((item, index) => (
                <div key={index}>
                  <div style={{
                    backgroundColor: '#3F3F2B',
                    height: item.value,
                    width: '100%',
                    marginBottom: '8px'
                  }} />
                  <span style={{ 
                    fontSize: '16px', 
                    fontWeight: 700, 
                    color: 'rgba(255, 255, 255, 0.92)' 
                  }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Radius Section */}
        {showRadius && (
          <div>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 700, 
              color: 'rgba(255, 255, 255, 0.92)',
              marginBottom: '24px',
              margin: '0 0 24px 0'
            }}>
              Radius
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {radiusValues.map((item, index) => (
                <div key={index}>
                  <div style={{
                    backgroundColor: '#3F3F2B',
                    height: '32px',
                    width: '80px',
                    marginBottom: '8px',
                    border: '2px dashed #F1FF6C',
                    ...item.style
                  }} />
                  <span style={{ 
                    fontSize: '16px', 
                    fontWeight: 700, 
                    color: 'rgba(255, 255, 255, 0.92)' 
                  }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 