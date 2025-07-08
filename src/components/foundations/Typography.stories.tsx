import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Foundations/Typography',
  component: Typography,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The complete WSC Sports typography system extracted from Figma, showcasing all text styles, weights, and usage guidelines.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Complete typography system showing all available text styles from Headline 1 down to Label, with usage guidelines and technical specifications.',
      },
      source: {
        code: `
import { Typography } from '@wsc-sports/design-system';

function MyComponent() {
  return <Typography />;
}
        `,
      },
    },
  },
};

export const UsageExample: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Example of how to use individual typography styles in your components.',
      },
      source: {
        code: `
import { typography } from '@wsc-sports/design-system';

function MyComponent() {
  return (
    <div>
      <h1 style={{
        fontSize: typography.fontSize.h1,
        fontWeight: typography.fontWeight.bold,
        color: '#F0F0F0'
      }}>
        Page Title
      </h1>
      <p style={{
        fontSize: typography.fontSize.bodyM,
        fontWeight: typography.fontWeight.regular,
        color: '#F0F0F0'
      }}>
        Body text using design system tokens
      </p>
    </div>
  );
}
        `,
      },
    },
  },
}; 