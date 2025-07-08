import React from 'react';
import { colors } from '../../tokens/colors';

interface TypographyProps {
  className?: string;
}

interface TypographyRowProps {
  label: string;
  size: string;
  weight: string;
  lineHeight: string;
  usage: string;
  fontSize: string;
}

const TypographyRow: React.FC<TypographyRowProps> = ({
  label,
  size,
  weight,
  lineHeight,
  usage,
  fontSize,
}) => {
  const baseStyle = {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: fontSize,
    lineHeight: '1.4',
    color: colors.neutral[100],
    width: '400px',
    margin: 0,
    padding: 0,
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 0,
      width: '100%',
    }}>
      {/* Title row with divider */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '36px',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 0,
        width: '100%',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          borderBottom: `1px solid ${colors.neutral[100]}`,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
        }} />
        <div style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '25px',
          color: colors.neutral[100],
          width: '2200px',
        }}>
          {label}
        </div>
      </div>

      {/* Typography examples row */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 0,
        width: '100%',
      }}>
        {/* Regular weight */}
        <div style={{
          ...baseStyle,
          fontWeight: 400,
        }}>
          {label}
        </div>

        {/* Semi-Bold weight */}
        <div style={{
          ...baseStyle,
          fontWeight: 600,
        }}>
          {label}
        </div>

        {/* Bold weight */}
        <div style={{
          ...baseStyle,
          fontWeight: 700,
        }}>
          {label}
        </div>

        {/* Technical specs */}
        <div style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: 400,
          fontSize: '24px',
          lineHeight: '1.4',
          color: colors.neutral[100],
          width: '440px',
          height: '136px',
        }}>
          <p style={{ margin: 0, marginBottom: '0px' }}>Font size: {size}</p>
          <p style={{ margin: 0, marginBottom: '0px' }}>Weight: {weight}</p>
          <p style={{ margin: 0 }}>Line height: {lineHeight}</p>
        </div>

        {/* Usage description */}
        <div style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: 400,
          fontSize: '24px',
          lineHeight: '1.4',
          color: colors.neutral[100],
          width: '560px',
          height: '136px',
        }}>
          <p style={{ margin: 0 }}>{usage}</p>
        </div>
      </div>
    </div>
  );
};

export const Typography: React.FC<TypographyProps> = ({ className }) => {
  return (
    <div
      className={className}
      style={{
        backgroundColor: colors.neutral[900],
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Header Section */}
      <div style={{
        backgroundColor: colors.neutral[900],
        display: 'flex',
        flexDirection: 'column',
        gap: '68px',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        minWidth: '2400px',
        paddingBottom: '96px',
        paddingTop: '80px',
        paddingLeft: '80px',
        paddingRight: '80px',
        position: 'relative',
        borderTop: `5px solid ${colors.neutral[100]}`,
      }}>
        {/* Navigation breadcrumb */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 0,
          width: '100%',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '4px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 0,
          }}>
            <div style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '1.4',
              color: colors.neutral[100],
            }}>
              Foundations
            </div>
            <div style={{
              width: '24px',
              height: '24px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '25%',
                left: '33.333%',
                right: '35.833%',
                bottom: '25%',
                width: '8px',
                height: '12px',
                backgroundColor: colors.neutral[100],
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              }} />
            </div>
            <div style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '1.4',
              color: colors.neutral[100],
            }}>
              Typography
            </div>
          </div>
          <div style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.4',
            color: colors.neutral[100],
            textDecoration: 'underline',
          }}>
            StoryBook Link
          </div>
        </div>

        {/* Main title and description */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          maxWidth: '1620px',
          padding: 0,
        }}>
          <div style={{
            fontFamily: 'Sora, system-ui, sans-serif',
            fontWeight: 600,
            fontSize: '72px',
            lineHeight: '90px',
            color: colors.primary[300],
            width: '900px',
          }}>
            Typography
          </div>
          <div style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '1.6',
            color: colors.neutral[100],
            letterSpacing: '-0.4px',
            width: '100%',
            minWidth: '100%',
          }}>
            <p style={{ margin: 0, marginBottom: '0px' }}>
              Typography defines the visual hierarchy and tone of the interface. It ensures consistency in font styles, sizes, and spacing across all products and platforms.
            </p>
            <p style={{ margin: 0, marginBottom: '0px' }}>
              <span style={{ fontWeight: 600 }}>Regular (400)</span>
              <span style={{ fontWeight: 600 }}> – </span>
              <span>Used for body text, long-form content, descriptions, and supporting text.</span>
            </p>
            <p style={{ margin: 0, marginBottom: '0px' }}>
              <span style={{ fontWeight: 600 }}>Semi-Bold (600)</span>
              <span style={{ fontWeight: 600 }}> – </span>
              <span>Used for subheadings, form labels, or emphasis within body text.</span>
            </p>
            <p style={{ margin: 0 }}>
              <span style={{ fontWeight: 600 }}>Bold (700)</span>
              <span style={{ fontWeight: 600 }}> – </span>
              <span>Reserved for headings, section titles, and button label.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Inter font showcase */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: '80px',
        paddingTop: '40px',
        color: colors.neutral[100],
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: 0,
        }}>
          <div style={{
            fontFamily: 'Sora, system-ui, sans-serif',
            fontWeight: 400,
            fontSize: '48px',
            lineHeight: '90px',
            color: colors.neutral[100],
            width: '900px',
          }}>
            Inter
          </div>
          <div style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 400,
            fontSize: '120px',
            lineHeight: '1.4',
            color: colors.neutral[100],
            width: '900px',
          }}>
            Aa
          </div>
        </div>
        <div style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: 400,
          fontSize: '48px',
          lineHeight: '1.4',
          color: colors.neutral[100],
          width: '900px',
        }}>
          <p style={{ margin: 0 }}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            0123456789 !@#$%^&*()
          </p>
        </div>
      </div>

      {/* Typography scale */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '64px',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: '80px',
        paddingTop: '80px',
        paddingBottom: '80px',
        width: '2199px',
      }}>
        <TypographyRow
          label="Headline 1"
          size="40px | 2.857 rem"
          weight="400, 600 ,700"
          lineHeight="140%"
          usage="Used for large, attention-grabbing headlines in promotional areas or in rules system."
          fontSize="40px"
        />
        <TypographyRow
          label="Headline 2"
          size="32px / 2.286rem"
          weight="400, 600 ,700"
          lineHeight="140%"
          usage="Used for page titles, section headers, and prominent UI headings."
          fontSize="32px"
        />
        <TypographyRow
          label="Headline 3"
          size="24px | 1.714rem"
          weight="400, 600 ,700"
          lineHeight="140%"
          usage="Useful for page intros, grouped sections, or modal headlines."
          fontSize="24px"
        />
        <TypographyRow
          label="Body XL"
          size="20px | 1.429rem"
          weight="400, 600 ,700"
          lineHeight="140%"
          usage="Used for subheadings, section intros, or supporting titles."
          fontSize="20px"
        />
        <TypographyRow
          label="Body L"
          size="18px | 1.286rem"
          weight="400, 600 ,700"
          lineHeight="140%"
          usage="Used to emphasize body text or create light hierarchy above 16px. Ideal for callouts or key details."
          fontSize="18px"
        />
        <TypographyRow
          label="Body M"
          size="16px | 1.143rem"
          weight="400, 600 ,700"
          lineHeight="140%"
          usage="Used for long-form content such as paragraphs and main descriptions, and main tabs labels"
          fontSize="16px"
        />
        <TypographyRow
          label="Body S"
          size="14px | 1 rem"
          weight="400, 600 ,700"
          lineHeight="140%"
          usage="Used for primary content like input text, labels, links, and secondary tabs labels"
          fontSize="14px"
        />
        <TypographyRow
          label="Body XS"
          size="12px | 0.857rem"
          weight="400, 600 ,700"
          lineHeight="140%"
          usage="Used for secondary information such as captions, helper text, timeline labels, or tooltips."
          fontSize="12px"
        />
        <TypographyRow
          label="Label"
          size="11px | 0.786rem"
          weight="400, 600 ,700"
          lineHeight="140%"
          usage="Used for tab labels and chart metadata"
          fontSize="11px"
        />
      </div>
    </div>
  );
};

export default Typography; 