import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#010101',
        },
        {
          name: 'light',
          value: '#F0F0F0',
        },
      ],
    },
    docs: {
      theme: {
        base: 'dark',
      },
    },
    themes: {
      default: 'dark',
      list: [
        {
          name: 'dark',
          class: 'dark-theme',
          color: '#ffffff',
          background: '#010101',
        },
        {
          name: 'light',
          class: 'light-theme',
          color: '#000000',
          background: '#F0F0F0',
        },
      ],
    },
  },
};

export default preview; 