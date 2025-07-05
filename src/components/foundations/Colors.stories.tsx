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