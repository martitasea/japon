require('dotenv').config();

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  staticDirs: ['../static'],

  addons: ['@storybook/addon-links', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  core: {
    disableTelemetry: true
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
