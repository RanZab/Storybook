import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Simple test component
const TestComponent = () => (
  <div style={{ 
    padding: '20px', 
    backgroundColor: '#010101', 
    color: '#E5FF00', 
    fontFamily: 'Arial, sans-serif' 
  }}>
    <h1>✅ Storybook is Working!</h1>
    <p>This is a simple test component to verify our fresh setup.</p>
  </div>
);

const meta: Meta<typeof TestComponent> = {
  title: 'Test/BasicTest',
  component: TestComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithMessage: Story = {
  render: () => (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#010101', 
      color: '#E5FF00', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1>🎉 Fresh Storybook Setup Complete!</h1>
      <p>Ready to test your design system components.</p>
    </div>
  ),
}; 