import React, { useState, useRef } from 'react';
import { typography } from '../tokens/typography';

// X icon component matching Figma design
const XIcon = ({ size = 16, color = '#F0F0F0' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 4L4 12M4 4L12 12" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Search icon component matching Figma design
const SearchIcon = ({ size = 16, color = '#F0F0F0' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle 
      cx="7.5" 
      cy="7.5" 
      r="6" 
      stroke={color} 
      strokeWidth="1.5" 
      fill="none"
    />
    <path 
      d="M13.5 13.5L10.5 10.5" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

// Dropdown arrow icon component matching Figma design
const DropdownIcon = ({ size = 16, color = '#F0F0F0' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M4 6L8 10L12 6" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Generate unique ID for styling
let inputIdCounter = 0;

export interface TextInputProps {
  /** Input variant type */
  variant?: 'text' | 'search' | 'numeric';
  /** Current value of the input */
  value?: string;
  /** Callback fired when the value changes */
  onChange?: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input is in error state */
  error?: boolean;
  /** Whether the input should take full width */
  fullWidth?: boolean;
  /** Input ID for accessibility */
  id?: string;
  /** Input name attribute */
  name?: string;
  /** Accessibility label */
  'aria-label'?: string;
  /** Additional CSS classes */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

export const TextInput: React.FC<TextInputProps> = ({
  variant = 'text',
  value = '',
  onChange,
  placeholder,
  disabled = false,
  error = false,
  fullWidth = false,
  id,
  name,
  'aria-label': ariaLabel,
  className,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const uniqueId = React.useMemo(() => id || `text-input-${++inputIdCounter}`, [id]);

  // Get default placeholder based on variant
  const getDefaultPlaceholder = () => {
    switch (variant) {
      case 'search':
        return 'Search';
      case 'numeric':
        return '0';
      default:
        return 'Add a name';
    }
  };

  const finalPlaceholder = placeholder !== undefined ? placeholder : getDefaultPlaceholder();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent the button mousedown from causing input to lose focus
    event.preventDefault();
    event.stopPropagation();
    
    if (onChange) {
      onChange('');
    }
    
    // Ensure input stays focused after clearing
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const getState = () => {
    if (disabled) return 'disable';
    if (error) return 'error';
    if (isFocused && value) return 'selected-filled';
    if (isFocused) return 'selected';
    if (value && isHovered) return 'hover'; // Hover effect for filled state
    if (value) return 'filled';
    if (isHovered) return 'hover';
    return 'default';
  };

  const getStyles = (): React.CSSProperties => {
    const state = getState();
    
    const baseStyles: React.CSSProperties = {
      borderRadius: '8px',
      padding: '8px',
      border: '1px solid',
      outline: 'none',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      width: fullWidth ? '100%' : '240px',
      minHeight: '37px', // 21px content + 16px padding
      boxSizing: 'border-box',
      cursor: disabled ? 'not-allowed' : 'text',
      ...style,
    };

    switch (state) {
      case 'hover':
        return {
          ...baseStyles,
          backgroundColor: '#333333',
          borderColor: 'transparent',
        };
      case 'selected':
        return {
          ...baseStyles,
          backgroundColor: '#282828',
          borderColor: '#ffffff',
        };
      case 'selected-filled':
        return {
          ...baseStyles,
          backgroundColor: '#282828',
          borderColor: '#ffffff',
        };
      case 'filled':
        return {
          ...baseStyles,
          backgroundColor: '#282828',
          borderColor: '#333333',
        };
      case 'disable':
        return {
          ...baseStyles,
          backgroundColor: '#181818',
          borderColor: '#282828',
        };
      case 'error':
        return {
          ...baseStyles,
          backgroundColor: '#282828',
          borderColor: '#ff3131',
        };
      default: // default
        return {
          ...baseStyles,
          backgroundColor: '#282828',
          borderColor: '#333333',
        };
    }
  };

  const getTextColor = () => {
    const state = getState();
    switch (state) {
      case 'hover':
        return '#f0f0f0';
      case 'selected':
        return '#8e8e8e';
      case 'selected-filled':
        return '#f0f0f0';
      case 'filled':
        return '#f0f0f0';
      case 'disable':
        return '#5d5d5d';
      case 'error':
        return '#f0f0f0';
      default: // default
        return '#bababa';
    }
  };

  const getPlaceholderColor = () => {
    const state = getState();
    switch (state) {
      case 'hover':
        return '#f0f0f0';
      case 'selected':
        return '#8e8e8e';
      case 'disable':
        return '#5d5d5d';
      default:
        return '#bababa';
    }
  };

  const getIconColor = () => {
    const state = getState();
    switch (state) {
      case 'hover':
        return '#f0f0f0';
      case 'selected':
        return '#8e8e8e';
      case 'selected-filled':
        return '#f0f0f0';
      case 'filled':
        return '#f0f0f0';
      case 'disable':
        return '#5d5d5d';
      case 'error':
        return '#f0f0f0';
      default: // default
        return '#bababa';
    }
  };

  const containerStyles = getStyles();
  const textColor = getTextColor();
  const placeholderColor = getPlaceholderColor();
  const iconColor = getIconColor();
  const state = getState();
  const showCursor = (state === 'selected' || state === 'selected-filled' || state === 'error') && isFocused;
  const showClearButton = state === 'selected-filled' && (variant === 'text' || variant === 'search');
  const showLeftIcon = variant === 'search';
  const showRightIcon = variant === 'numeric';

  // Get input type based on variant
  const getInputType = () => {
    switch (variant) {
      case 'numeric':
        return 'number';
      default:
        return 'text';
    }
  };

  return (
    <>
      <style>
        {`
          #${uniqueId} {
            background: transparent !important;
            border: none !important;
            outline: none !important;
            color: ${textColor} !important;
            font-family: ${typography.fontFamily.primary.join(', ')} !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 1.4 !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            min-height: 21px !important;
            caret-color: ${showCursor ? '#E5FF00' : 'transparent'} !important;
          }
          
          #${uniqueId}::placeholder {
            color: ${placeholderColor} !important;
            font-family: ${typography.fontFamily.primary.join(', ')} !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 1.4 !important;
            opacity: 1 !important;
          }
          
          #${uniqueId}::-webkit-input-placeholder {
            color: ${placeholderColor} !important;
            font-family: ${typography.fontFamily.primary.join(', ')} !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 1.4 !important;
            opacity: 1 !important;
          }
          
          #${uniqueId}::-moz-placeholder {
            color: ${placeholderColor} !important;
            font-family: ${typography.fontFamily.primary.join(', ')} !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 1.4 !important;
            opacity: 1 !important;
          }
          
          #${uniqueId}:-ms-input-placeholder {
            color: ${placeholderColor} !important;
            font-family: ${typography.fontFamily.primary.join(', ')} !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 1.4 !important;
            opacity: 1 !important;
          }

          /* Hide number input spinners */
          #${uniqueId}::-webkit-outer-spin-button,
          #${uniqueId}::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          
          #${uniqueId}[type=number] {
            -moz-appearance: textfield;
          }
        `}
      </style>
      <div
        className={className}
        style={containerStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          width: '100%',
          gap: '8px' 
        }}>
          {/* Left icon for search variant */}
          {showLeftIcon && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              width: '16px',
              height: '16px',
            }}>
              <SearchIcon size={16} color={iconColor} />
            </div>
          )}

          {/* Text content */}
          <div style={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            height: '21px',
          }}>
            <input
              ref={inputRef}
              type={getInputType()}
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={finalPlaceholder}
              disabled={disabled}
              id={uniqueId}
              name={name}
              aria-label={ariaLabel}
              {...props}
            />
          </div>

          {/* Clear button for text and search variants (selected filled state) */}
          {showClearButton && (
            <button
              type="button"
              onMouseDown={handleClear}
              style={{
                background: 'transparent',
                border: 'none',
                padding: '2px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '2px',
                width: '16px',
                height: '16px',
                flexShrink: 0,
                zIndex: 10,
              }}
              aria-label="Clear input"
            >
              <XIcon size={12} color="#F0F0F0" />
            </button>
          )}

          {/* Right icon for numeric variant */}
          {showRightIcon && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              width: '16px',
              height: '16px',
            }}>
              <DropdownIcon size={16} color={iconColor} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TextInput; 