import type { Meta, StoryObj } from '@storybook/react';
import { Colors } from './Colors';

const meta: Meta<typeof Colors> = {
  title: 'Foundations/Colors',
  component: Colors,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete WSC Sports color palette including primary, neutral, alert, warning, and success colors extracted from Figma design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showAll: {
      control: 'boolean',
      description: 'Toggle to show all color palettes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showAll: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
import { Colors } from '@wsc-sports/design-system';

function MyComponent() {
  return <Colors showAll={true} />;
}
        `,
      },
    },
  },
};

export const PrimaryFocus: Story = {
  args: {
    showAll: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The primary brand colors for WSC Sports, featuring dynamic yellows and greens inspired by athletic competition.',
      },
    },
  },
};

export const UsageExample: Story = {
  args: {
    showAll: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of how to use color tokens in your components.',
      },
      source: {
        code: `
import { colors } from '@wsc-sports/design-system';

function MyComponent() {
  return (
    <div style={{
      backgroundColor: colors.neutral[900],
      color: colors.neutral[100],
      padding: '20px'
    }}>
      <h1 style={{ color: colors.primary[300] }}>
        Brand Title
      </h1>
      <p style={{ color: colors.neutral[300] }}>
        Secondary text
      </p>
      <button style={{
        backgroundColor: colors.primary[300],
        color: colors.neutral[900],
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px'
      }}>
        Primary Button
      </button>
    </div>
  );
}
        `,
      },
    },
  },
}; 