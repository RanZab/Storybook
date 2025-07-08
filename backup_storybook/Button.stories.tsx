import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Complete button system with 5 variants (Primary, Secondary, Tertiary, Alternative, Alert) featuring Material Design ripple effects and exact WSC Sports Figma specifications. Each variant has 6 states: Default, Hover, Active, Focused, Pressed, Disabled.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'alternative', 'alert'],
      description: 'Button variant style',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive Playground
export const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all button variants with ripple effects. Click anywhere on the button to see the ripple emanate from the touch point. Test hover, focus, and active states.',
      },
    },
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px', 
      backgroundColor: '#010101', 
      padding: '48px',
      borderRadius: '12px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ 
        color: '#F0F0F0', 
        fontSize: '32px', 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '16px' 
      }}>
        WSC Sports Button System
      </div>
      
      <div style={{ 
        color: '#8E8E8E', 
        fontSize: '16px',
        textAlign: 'center',
        marginBottom: '32px' 
      }}>
        All variants with Material Design ripple effects - Click any button to see the ripple animation
      </div>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button variant="primary" onClick={() => console.log('Primary clicked!')}>
          Primary
        </Button>
        <Button variant="secondary" onClick={() => console.log('Secondary clicked!')}>
          Secondary
        </Button>
        <Button variant="tertiary" onClick={() => console.log('Tertiary clicked!')}>
          Tertiary
        </Button>
        <Button variant="alternative" onClick={() => console.log('Alternative clicked!')}>
          Alternative
        </Button>
        <Button variant="alert" onClick={() => console.log('Alert clicked!')}>
          Alert
        </Button>
      </div>
      
      <div style={{ 
        color: '#8E8E8E', 
        fontSize: '14px',
        textAlign: 'center',
        marginTop: '24px' 
      }}>
        ✨ 6 states per variant: Default • Hover • Active • Focused • Pressed • Disabled
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all 5 button variants with Material Design ripple effects. Each variant has its own color scheme and interaction patterns matching the WSC Sports design system exactly as specified in Figma.',
      },
      source: {
        code: `
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="alternative">Alternative</Button>
<Button variant="alert">Alert</Button>
        `,
      },
    },
  },
};

// Primary Button States
export const PrimaryStates: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px', 
      backgroundColor: '#010101', 
      padding: '32px',
      borderRadius: '8px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ 
        color: '#F0F0F0', 
        fontSize: '20px', 
        fontWeight: 'bold',
        marginBottom: '16px' 
      }}>
        Primary Button - All Figma States
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '100px' }}>
        <span style={{ color: '#F0F0F0', fontSize: '14px', fontWeight: '600', width: '80px' }}>
          Default
        </span>
        <Button variant="primary">Button</Button>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '100px' }}>
        <span style={{ color: '#F0F0F0', fontSize: '14px', fontWeight: '600', width: '80px' }}>
          Disabled
        </span>
        <Button variant="primary" disabled>Button</Button>
      </div>
      
      <div style={{ 
        color: '#8E8E8E', 
        fontSize: '12px',
        marginTop: '16px' 
      }}>
        Interactive states (hover, focus, active, pressed) are shown when you interact with the default button above.
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Primary button showing Default and Disabled states from Figma. Interactive with the default button to see Hover, Focus, Active, and Pressed states with ripple effects.',
      },
    },
  },
};

// Secondary Button States
export const SecondaryStates: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px', 
      backgroundColor: '#010101', 
      padding: '32px',
      borderRadius: '8px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ 
        color: '#F0F0F0', 
        fontSize: '20px', 
        fontWeight: 'bold',
        marginBottom: '16px' 
      }}>
        Secondary Button - All Figma States
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '100px' }}>
        <span style={{ color: '#F0F0F0', fontSize: '14px', fontWeight: '600', width: '80px' }}>
          Default
        </span>
        <Button variant="secondary">Button</Button>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '100px' }}>
        <span style={{ color: '#F0F0F0', fontSize: '14px', fontWeight: '600', width: '80px' }}>
          Disabled
        </span>
        <Button variant="secondary" disabled>Button</Button>
      </div>
      
      <div style={{ 
        color: '#8E8E8E', 
        fontSize: '12px',
        marginTop: '16px' 
      }}>
        Secondary button with outlined style and yellow accent color. Features hover background changes and ripple effects.
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Secondary button with outlined style and yellow accent color. Features hover background changes and ripple effects.',
      },
    },
  },
};

// Alert Button States
export const AlertStates: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px', 
      backgroundColor: '#010101', 
      padding: '32px',
      borderRadius: '8px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ 
        color: '#F0F0F0', 
        fontSize: '20px', 
        fontWeight: 'bold',
        marginBottom: '16px' 
      }}>
        Alert Button - All Figma States
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '100px' }}>
        <span style={{ color: '#F0F0F0', fontSize: '14px', fontWeight: '600', width: '80px' }}>
          Default
        </span>
        <Button variant="alert">Delete</Button>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '100px' }}>
        <span style={{ color: '#F0F0F0', fontSize: '14px', fontWeight: '600', width: '80px' }}>
          Disabled
        </span>
        <Button variant="alert" disabled>Delete</Button>
      </div>
      
      <div style={{ 
        color: '#8E8E8E', 
        fontSize: '12px',
        marginTop: '16px' 
      }}>
        Alert button for destructive actions with red color scheme and white focus ring.
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alert button for destructive actions with red color scheme and white focus ring.',
      },
    },
  },
};

// Interactive Ripple Demo
export const RippleEffectDemo: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px', 
      alignItems: 'center',
      backgroundColor: '#010101', 
      padding: '48px',
      borderRadius: '12px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ 
        color: '#F0F0F0', 
        fontSize: '24px', 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '16px' 
      }}>
        Material Design Ripple Effects
      </div>
      
      <div style={{ 
        color: '#8E8E8E', 
        fontSize: '14px',
        textAlign: 'center',
        marginBottom: '24px',
        maxWidth: '500px'
      }}>
        Click anywhere on the buttons to see the ripple effect emanate from the exact touch point. 
        Each variant has its own ripple color optimized for contrast and accessibility.
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '16px',
        width: '100%',
        maxWidth: '600px'
      }}>
        <Button variant="primary" onClick={() => console.log('Primary ripple!')}>
          Primary
        </Button>
        <Button variant="secondary" onClick={() => console.log('Secondary ripple!')}>
          Secondary
        </Button>
        <Button variant="tertiary" onClick={() => console.log('Tertiary ripple!')}>
          Tertiary
        </Button>
        <Button variant="alternative" onClick={() => console.log('Alternative ripple!')}>
          Alternative
        </Button>
        <Button variant="alert" onClick={() => console.log('Alert ripple!')}>
          Alert
        </Button>
      </div>
      
      <div style={{ 
        color: '#8E8E8E', 
        fontSize: '12px',
        textAlign: 'center',
        marginTop: '24px',
        maxWidth: '400px'
      }}>
        🎯 Touch-point origin • ⚡ 600ms duration • 🎨 Variant-specific colors • ⌨️ Keyboard accessible
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of the Material Design ripple effect across all button variants. Each variant has optimized ripple colors for maximum visual impact.',
      },
      source: {
        code: `
// Each variant automatically gets the appropriate ripple color:
<Button variant="primary">Primary</Button>     // Dark ripple on yellow
<Button variant="secondary">Secondary</Button> // Yellow ripple on dark
<Button variant="tertiary">Tertiary</Button>   // Yellow ripple on dark
<Button variant="alternative">Alternative</Button> // Light ripple on dark
<Button variant="alert">Alert</Button>         // Light ripple on red

// Ripple effect includes:
// - Touch-point origin tracking
// - Material motion curves: cubic-bezier(0, 0, 0.2, 1)
// - Automatic color optimization per variant
// - Keyboard accessibility (center ripple on Space/Enter)
        `,
      },
    },
  },
};

// Accessibility Features
export const AccessibilityDemo: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px',
      backgroundColor: '#010101',
      padding: '32px',
      borderRadius: '8px'
    }}>
      <div style={{ color: '#F0F0F0', fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
        Accessibility & Keyboard Navigation
      </div>
      
      <div style={{ color: '#8E8E8E', fontSize: '14px', marginBottom: '16px' }}>
        Try keyboard navigation: Tab to focus, Space/Enter to activate with center ripple
      </div>
      
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button variant="primary" onClick={() => alert('Keyboard accessible!')}>
          Tab + Space/Enter
        </Button>
        <Button variant="secondary" aria-label="Save your work" onClick={() => alert('Screen reader friendly!')}>
          Save Work
        </Button>
        <Button variant="alert" onClick={() => alert('Destructive action!')}>
          Delete Item
        </Button>
        <Button variant="alternative" disabled aria-label="This action is currently unavailable">
          Disabled Action
        </Button>
      </div>
      
      <div style={{ color: '#8E8E8E', fontSize: '12px', marginTop: '16px' }}>
        ✅ WCAG 2.1 AA compliant • ⌨️ Full keyboard navigation • 🔍 Screen reader support • 
        🎯 Proper focus indicators • 📱 Touch-friendly 44px targets
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including keyboard navigation, screen reader support, and WCAG compliance across all variants.',
      },
    },
  },
};

// Real-world Usage Examples
export const UsageExamples: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px',
      backgroundColor: '#010101',
      padding: '32px',
      borderRadius: '8px'
    }}>
      <div style={{ color: '#F0F0F0', fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
        Real-world Usage Examples
      </div>
      
      {/* Form Actions */}
      <div>
        <div style={{ color: '#F0F0F0', fontSize: '14px', marginBottom: '12px' }}>Form Actions</div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => alert('Form submitted!')}>
            Submit Form
          </Button>
          <Button variant="secondary" onClick={() => alert('Form saved as draft!')}>
            Save Draft
          </Button>
          <Button variant="tertiary" onClick={() => alert('Form cancelled!')}>
            Cancel
          </Button>
        </div>
      </div>
      
      {/* Navigation */}
      <div>
        <div style={{ color: '#F0F0F0', fontSize: '14px', marginBottom: '12px' }}>Navigation</div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => alert('Next step!')}>
            Continue
          </Button>
          <Button variant="alternative" onClick={() => alert('Going back!')}>
            Back
          </Button>
        </div>
      </div>
      
      {/* Destructive Actions */}
      <div>
        <div style={{ color: '#F0F0F0', fontSize: '14px', marginBottom: '12px' }}>Destructive Actions</div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="alert" onClick={() => alert('Account deleted!')}>
            Delete Account
          </Button>
          <Button variant="secondary" onClick={() => alert('Action cancelled!')}>
            Keep Account
          </Button>
        </div>
      </div>
      
      {/* Full Width */}
      <div>
        <div style={{ color: '#F0F0F0', fontSize: '14px', marginBottom: '12px' }}>Full Width</div>
        <Button variant="primary" fullWidth onClick={() => alert('Full width action!')}>
          Get Started
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage patterns showing how different button variants work together in common UI scenarios, following the exact Figma specifications.',
      },
      source: {
        code: `
// Form actions
<Button variant="primary">Submit Form</Button>
<Button variant="secondary">Save Draft</Button>
<Button variant="tertiary">Cancel</Button>

// Navigation
<Button variant="primary">Continue</Button>
<Button variant="alternative">Back</Button>

// Destructive actions
<Button variant="alert">Delete Account</Button>
<Button variant="secondary">Keep Account</Button>

// Full width
<Button variant="primary" fullWidth>Get Started</Button>
        `,
      },
    },
  },
}; 