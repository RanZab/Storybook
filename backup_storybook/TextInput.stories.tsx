import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Design System/Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Text input component with support for text, search, and numeric variants. Extracted from Figma Input Fields with all 7 states: Default, Hover, Selected, Selected Filled, Filled, Disabled, Error.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{
        backgroundColor: '#010101', // neutral.900 from our color palette
        padding: '40px',
        borderRadius: '8px',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'search', 'numeric'],
      description: 'Input variant type',
    },
    value: {
      control: 'text',
      description: 'Current value of the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text (auto-determined by variant if not provided)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the input is in error state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input should take full width',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'text',
    placeholder: '',
    disabled: false,
    error: false,
    fullWidth: false,
  },
  render: (args) => {
    const [value, setValue] = useState('');
    
    return (
      <div style={{ 
        backgroundColor: '#010101', 
        padding: '32px',
        borderRadius: '8px',
        minWidth: '300px'
      }}>
        <TextInput
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all TextInput props and variants. Change the controls to see different states and behaviors.',
      },
    },
  },
};

// Text Input - All States (matching Figma exactly)
export const TextInputStates: Story = {
  render: () => {
    const [defaultValue, setDefaultValue] = useState('');
    const [hoverValue, setHoverValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedFilledValue, setSelectedFilledValue] = useState('Jordan');
    const [filledValue, setFilledValue] = useState('Add a name');
    const [errorValue, setErrorValue] = useState('Jordan');

    return (
      <div style={{
        backgroundColor: '#010101',
        padding: '32px',
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif',
        minWidth: '400px'
      }}>
        {/* Title */}
        <div style={{
          color: 'rgba(255, 255, 255, 0.92)',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '56px',
          letterSpacing: '-0.48px'
        }}>
          Text
        </div>

        {/* States */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          {/* Default */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Default
            </div>
            <TextInput
              variant="text"
              value={defaultValue}
              onChange={setDefaultValue}
            />
          </div>

          {/* Hover */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Hover
            </div>
            <TextInput
              variant="text"
              value={hoverValue}
              onChange={setHoverValue}
            />
          </div>

          {/* Selected */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Selected
            </div>
            <TextInput
              variant="text"
              value={selectedValue}
              onChange={setSelectedValue}
            />
          </div>

          {/* Selected Filled */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Selected Filled
            </div>
            <TextInput
              variant="text"
              value={selectedFilledValue}
              onChange={setSelectedFilledValue}
            />
          </div>

          {/* Filled */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Filled
            </div>
            <TextInput
              variant="text"
              value={filledValue}
              onChange={setFilledValue}
            />
          </div>

          {/* Disabled */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Disabled
            </div>
            <TextInput
              variant="text"
              value="Add a name"
              disabled
            />
          </div>

          {/* Error */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Error
            </div>
            <TextInput
              variant="text"
              value={errorValue}
              onChange={setErrorValue}
              error
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Text input showing all 7 states from Figma: Default, Hover, Selected, Selected Filled, Filled, Disabled, Error.',
      },
    },
  },
};

// Search Input - All States (matching Figma exactly)
export const SearchInputStates: Story = {
  render: () => {
    const [defaultValue, setDefaultValue] = useState('');
    const [hoverValue, setHoverValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedFilledValue, setSelectedFilledValue] = useState('Jordan');
    const [filledValue, setFilledValue] = useState('Add a name');
    const [errorValue, setErrorValue] = useState('Jordan');

    return (
      <div style={{
        backgroundColor: '#010101',
        padding: '32px',
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif',
        minWidth: '400px'
      }}>
        {/* Title */}
        <div style={{
          color: 'rgba(255, 255, 255, 0.92)',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '56px',
          letterSpacing: '-0.48px'
        }}>
          Search
        </div>

        {/* States */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          {/* Default */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Default
            </div>
            <TextInput
              variant="search"
              value={defaultValue}
              onChange={setDefaultValue}
            />
          </div>

          {/* Hover */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Hover
            </div>
            <TextInput
              variant="search"
              value={hoverValue}
              onChange={setHoverValue}
            />
          </div>

          {/* Selected */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Selected
            </div>
            <TextInput
              variant="search"
              value={selectedValue}
              onChange={setSelectedValue}
            />
          </div>

          {/* Selected Filled */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Selected Filled
            </div>
            <TextInput
              variant="search"
              value={selectedFilledValue}
              onChange={setSelectedFilledValue}
            />
          </div>

          {/* Filled */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Filled
            </div>
            <TextInput
              variant="search"
              value={filledValue}
              onChange={setFilledValue}
            />
          </div>

          {/* Disabled */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Disabled
            </div>
            <TextInput
              variant="search"
              value="Add a name"
              disabled
            />
          </div>

          {/* Error */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Error
            </div>
            <TextInput
              variant="search"
              value={errorValue}
              onChange={setErrorValue}
              error
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Search input with magnifying glass icon showing all 7 states from Figma. Includes clear button when filled.',
      },
    },
  },
};

// Numeric Input - All States (matching Figma exactly)
export const NumericInputStates: Story = {
  render: () => {
    const [defaultValue, setDefaultValue] = useState('');
    const [hoverValue, setHoverValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedFilledValue, setSelectedFilledValue] = useState('0');
    const [filledValue, setFilledValue] = useState('0');
    const [errorValue, setErrorValue] = useState('0');

    return (
      <div style={{
        backgroundColor: '#010101',
        padding: '32px',
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif',
        minWidth: '400px'
      }}>
        {/* Title */}
        <div style={{
          color: 'rgba(255, 255, 255, 0.92)',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '56px',
          letterSpacing: '-0.48px'
        }}>
          Numeric
        </div>

        {/* States */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          {/* Default */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Default
            </div>
            <TextInput
              variant="numeric"
              value={defaultValue}
              onChange={setDefaultValue}
            />
          </div>

          {/* Hover */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Hover
            </div>
            <TextInput
              variant="numeric"
              value={hoverValue}
              onChange={setHoverValue}
            />
          </div>

          {/* Selected */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Selected
            </div>
            <TextInput
              variant="numeric"
              value={selectedValue}
              onChange={setSelectedValue}
            />
          </div>

          {/* Selected Filled */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Selected Filled
            </div>
            <TextInput
              variant="numeric"
              value={selectedFilledValue}
              onChange={setSelectedFilledValue}
            />
          </div>

          {/* Filled */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Filled
            </div>
            <TextInput
              variant="numeric"
              value={filledValue}
              onChange={setFilledValue}
            />
          </div>

          {/* Disabled */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Disabled
            </div>
            <TextInput
              variant="numeric"
              value="0"
              disabled
            />
          </div>

          {/* Error */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.4',
              width: '120px'
            }}>
              Error
            </div>
            <TextInput
              variant="numeric"
              value={errorValue}
              onChange={setErrorValue}
              error
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Numeric input with dropdown arrow and number type validation. No browser spinners, no clear button - exactly as shown in Figma.',
      },
    },
  },
};

// All Variants Comparison
export const AllVariants: Story = {
  render: () => {
    const [textValue, setTextValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [numericValue, setNumericValue] = useState('');

    return (
      <div style={{
        backgroundColor: '#010101',
        padding: '32px',
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif',
        minWidth: '500px'
      }}>
        <div style={{
          color: 'rgba(255, 255, 255, 0.92)',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '32px'
        }}>
          All Input Variants
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Text Input */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 600
            }}>
              Text Input
            </div>
            <TextInput
              variant="text"
              value={textValue}
              onChange={setTextValue}
              placeholder="Add a name"
            />
          </div>

          {/* Search Input */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 600
            }}>
              Search Input
            </div>
            <TextInput
              variant="search"
              value={searchValue}
              onChange={setSearchValue}
              placeholder="Search"
            />
          </div>

          {/* Numeric Input */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 600
            }}>
              Numeric Input
            </div>
            <TextInput
              variant="numeric"
              value={numericValue}
              onChange={setNumericValue}
              placeholder="0"
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of all three input variants with their distinctive icons and behaviors.',
      },
    },
  },
};

// Usage Examples
export const UsageExample: Story = {
  render: () => {
    return (
      <div style={{
        backgroundColor: '#010101',
        padding: '32px',
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif'
      }}>
        <div style={{
          color: 'rgba(255, 255, 255, 0.92)',
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '24px'
        }}>
          Usage Examples
        </div>

        <div style={{
          backgroundColor: '#282828',
          padding: '16px',
          borderRadius: '8px',
          fontFamily: 'Monaco, Consolas, monospace',
          fontSize: '14px',
          color: '#F0F0F0',
          overflow: 'auto'
        }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`// Import the component
import { TextInput } from '@your-org/design-system';

// Text input for names, titles, etc.
<TextInput 
  variant="text"
  value={name}
  onChange={setName}
  placeholder="Enter your name"
/>

// Search input with magnifying glass icon
<TextInput 
  variant="search"
  value={searchQuery}
  onChange={setSearchQuery}
  placeholder="Search products"
/>

// Numeric input with dropdown arrow
<TextInput 
  variant="numeric"
  value={quantity}
  onChange={setQuantity}
  placeholder="0"
/>

// Error state
<TextInput 
  variant="text"
  value={email}
  onChange={setEmail}
  error={!isValidEmail}
  placeholder="email@example.com"
/>

// Disabled state
<TextInput 
  variant="text"
  value="Read only"
  disabled
/>`}
          </pre>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Common usage patterns and code examples for the TextInput component.',
      },
    },
  },
};





 