import React from 'react';
import { colors } from '../tokens/colors';
import { typography } from '../tokens/typography';

export interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'alternative' | 'alert';
  /** Button size - currently only medium is supported */
  size?: 'medium';
  /** Disabled state */
  disabled?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Button HTML type */
  type?: 'button' | 'submit' | 'reset';
  /** Additional CSS classes */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
  /** Accessibility label */
  'aria-label'?: string;
}

interface RippleEffect {
  id: number;
  x: number;
  y: number;
  size: number;
  variant: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className,
  style,
  'aria-label': ariaLabel,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [ripples, setRipples] = React.useState<RippleEffect[]>([]);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const rippleIdRef = React.useRef(0);

  const getButtonState = () => {
    if (disabled) return 'disabled';
    if (isActive) return 'active';
    if (isFocused) return 'focused';
    if (isHovered) return 'hover';
    return 'default';
  };

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || !buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    
    // Calculate ripple position relative to button
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Calculate ripple size - should be large enough to cover the button
    const size = Math.max(rect.width, rect.height) * 2;
    
    const newRipple: RippleEffect = {
      id: rippleIdRef.current++,
      x,
      y,
      size,
      variant: variant || 'primary',
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  const getRippleColor = (rippleVariant: string): string => {
    switch (rippleVariant) {
      case 'primary':
        return 'rgba(51, 51, 51, 0.3)'; // Dark ripple on yellow background
      case 'secondary':
        return 'rgba(229, 255, 0, 0.3)'; // Yellow ripple on transparent/dark background
      case 'tertiary':
        return 'rgba(229, 255, 0, 0.3)'; // Yellow ripple on transparent/dark background
      case 'alternative':
        return 'rgba(240, 240, 240, 0.3)'; // Light ripple on dark background
      case 'alert':
        return 'rgba(240, 240, 240, 0.3)'; // Light ripple on red background
      default:
        return 'rgba(51, 51, 51, 0.3)';
    }
  };

  const getButtonStyles = (): React.CSSProperties => {
    const state = getButtonState();
    
    const baseStyles: React.CSSProperties = {
      fontFamily: typography.fontFamily.primary.join(', '),
      fontSize: '14px',
      fontWeight: typography.fontWeight.bold,
      lineHeight: '1.4',
      border: 'none',
      borderRadius: '8px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s cubic-bezier(0, 0, 0.2, 1)', // Material motion curve
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      outline: 'none',
      position: 'relative',
      width: fullWidth ? '100%' : 'auto',
      minWidth: '64px',
      padding: '8px 16px',
      height: '32px',
      boxSizing: 'border-box',
      overflow: 'hidden', // Clip ripple to button shape
      ...style,
    };

    // Variant and state-specific styles based on exact Figma specifications
    switch (variant) {
      case 'primary':
        switch (state) {
          case 'disabled':
            return {
              ...baseStyles,
              backgroundColor: colors.primary[700], // #3F3F2B
              color: colors.neutral[300],           // #8E8E8E
            };
          case 'active':
            return {
              ...baseStyles,
              backgroundColor: colors.primary[400], // #C2FF00
              color: colors.primary[900],           // #333333
            };
          case 'focused':
            return {
              ...baseStyles,
              backgroundColor: colors.primary[300], // #E5FF00
              color: colors.primary[900],           // #333333
              boxShadow: '0px 0px 0px 2px rgba(229, 255, 0, 0.4)', // Focus ring from Figma
            };
          case 'hover':
            return {
              ...baseStyles,
              backgroundColor: colors.primary[200], // #F4FF99
              color: colors.primary[900],           // #333333
            };
          default:
            return {
              ...baseStyles,
              backgroundColor: colors.primary[300], // #E5FF00
              color: colors.primary[900],           // #333333
            };
        }

      case 'secondary':
        switch (state) {
          case 'disabled':
            return {
              ...baseStyles,
              backgroundColor: 'transparent',
              color: colors.primary[700],           // #3F3F2B
              border: `1px solid ${colors.primary[700]}`, // #3F3F2B
            };
          case 'active':
            return {
              ...baseStyles,
              backgroundColor: colors.neutral[700], // #282828
              color: colors.primary[400],           // #C2FF00
              border: `1px solid ${colors.primary[400]}`, // #C2FF00
            };
          case 'focused':
            return {
              ...baseStyles,
              backgroundColor: colors.neutral[900], // #010101
              color: colors.primary[300],           // #E5FF00
              border: `1px solid ${colors.primary[300]}`, // #E5FF00
              boxShadow: '0px 0px 0px 2px rgba(229, 255, 0, 0.4)', // Focus ring from Figma
            };
          case 'hover':
            return {
              ...baseStyles,
              backgroundColor: colors.neutral[600], // #333333
              color: colors.primary[200],           // #F4FF99
              border: `1px solid ${colors.primary[200]}`, // #F4FF99
            };
          default:
            return {
              ...baseStyles,
              backgroundColor: 'transparent',
              color: colors.primary[300],           // #E5FF00
              border: `1px solid ${colors.primary[300]}`, // #E5FF00
            };
        }

      case 'tertiary':
        switch (state) {
          case 'disabled':
            return {
              ...baseStyles,
              backgroundColor: 'transparent',
              color: colors.primary[700],           // #3F3F2B
            };
          case 'active':
            return {
              ...baseStyles,
              backgroundColor: colors.neutral[700], // #282828
              color: colors.primary[400],           // #C2FF00
            };
          case 'focused':
            return {
              ...baseStyles,
              backgroundColor: colors.neutral[900], // #010101
              color: colors.primary[300],           // #E5FF00
              boxShadow: '0px 0px 0px 2px rgba(229, 255, 0, 0.4)', // Focus ring from Figma
            };
          case 'hover':
            return {
              ...baseStyles,
              backgroundColor: colors.neutral[600], // #333333
              color: colors.primary[200],           // #F4FF99
            };
          default:
            return {
              ...baseStyles,
              backgroundColor: 'transparent',
              color: colors.primary[300],           // #E5FF00
            };
        }

      case 'alternative':
        switch (state) {
          case 'disabled':
            return {
              ...baseStyles,
              backgroundColor: colors.neutral[800], // #181818
              color: colors.neutral[700],           // #282828
            };
          case 'active':
            return {
              ...baseStyles,
              backgroundColor: colors.neutral[700], // #282828
              color: colors.primary[400],           // #C2FF00
            };
          case 'focused':
            return {
              ...baseStyles,
              backgroundColor: colors.neutral[700], // #282828
              color: colors.neutral[100],           // #F0F0F0
              boxShadow: '0px 0px 0px 2px rgba(229, 255, 0, 0.4)', // Focus ring from Figma
            };
          case 'hover':
            return {
              ...baseStyles,
              backgroundColor: colors.neutral[600], // #333333
              color: colors.neutral[100],           // #F0F0F0
            };
          default:
            return {
              ...baseStyles,
              backgroundColor: colors.neutral[700], // #282828
              color: colors.neutral[100],           // #F0F0F0
            };
        }

      case 'alert':
        switch (state) {
          case 'disabled':
            return {
              ...baseStyles,
              backgroundColor: colors.alert[900],   // #8E1616
              color: colors.neutral[200],           // #BABABA
            };
          case 'active':
            return {
              ...baseStyles,
              backgroundColor: colors.alert[500],   // #B72C2C
              color: colors.neutral[100],           // #F0F0F0
            };
          case 'focused':
            return {
              ...baseStyles,
              backgroundColor: colors.alert[300],   // #FF3131
              color: colors.neutral[100],           // #F0F0F0
              boxShadow: '0px 0px 0px 2px #F0F0F0', // White focus ring from Figma
            };
          case 'hover':
            return {
              ...baseStyles,
              backgroundColor: colors.alert[100],   // #FF6161
              color: colors.neutral[100],           // #F0F0F0
            };
          default:
            return {
              ...baseStyles,
              backgroundColor: colors.alert[300],   // #FF3131
              color: colors.neutral[100],           // #F0F0F0
            };
        }

      default:
        return baseStyles;
    }
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      setIsActive(true);
      createRipple(event);
    }
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  const handleFocus = () => {
    if (!disabled) {
      setIsFocused(true);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  // Handle keyboard interactions (accessibility)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === ' ' || event.key === 'Enter') {
      if (!disabled) {
        setIsActive(true);
        // Create ripple at center for keyboard activation
        if (buttonRef.current) {
          const rect = buttonRef.current.getBoundingClientRect();
          const mockEvent = {
            clientX: rect.left + rect.width / 2,
            clientY: rect.top + rect.height / 2,
          } as React.MouseEvent<HTMLButtonElement>;
          createRipple(mockEvent);
        }
      }
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === ' ' || event.key === 'Enter') {
      setIsActive(false);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes ripple {
            0% {
              transform: scale(0);
              opacity: 0.6;
            }
            50% {
              opacity: 0.3;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }
          
          .ripple {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            animation: ripple 600ms cubic-bezier(0, 0, 0.2, 1);
          }
        `}
      </style>
      <button
        ref={buttonRef}
        type={type}
        className={className}
        style={getButtonStyles()}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-pressed={isActive}
        // Accessibility improvements
        tabIndex={disabled ? -1 : 0}
        role="button"
        {...props}
      >
        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="ripple"
            style={{
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
              backgroundColor: getRippleColor(ripple.variant),
            }}
          />
        ))}
        
        {/* Button content */}
        {children}
      </button>
    </>
  );
};

export default Button; 