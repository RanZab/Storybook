import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spacing } from './Spacing';

const meta: Meta<typeof Spacing> = {
  title: 'Foundations/Spacing',
  component: Spacing,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The spacing and border radius foundation tokens extracted from Figma design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showSpacing: {
      control: 'boolean',
      description: 'Toggle spacing values display',
    },
    showRadius: {
      control: 'boolean',
      description: 'Toggle border radius values display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showSpacing: true,
    showRadius: true,
  },
};

export const SpacingOnly: Story = {
  args: {
    showSpacing: true,
    showRadius: false,
  },
};

export const RadiusOnly: Story = {
  args: {
    showSpacing: false,
    showRadius: true,
  },
}; 