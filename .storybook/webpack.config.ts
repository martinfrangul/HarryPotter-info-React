const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config, { configType }) => {
    // Encuentra y usa la regla CSS existente y agrega el cargador de PostCSS
    const cssRule = config.module.rules.find(rule => rule.test && rule.test.test('.css'));
    if (cssRule) {
      // Agrega el cargador de PostCSS al array de cargadores
      cssRule.use.push({
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss'),  // Integra TailwindCSS
              require('autoprefixer'), // Añade prefijos de CSS automáticamente
            ],
          },
        },
      });
    }

    // Retorna la configuración alterada
    return config;
  },
};


import type { StorybookConfig } from "@storybook/react-vite";


const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],


  webpackFinal: async (config) => {
    // Find and use the existing CSS rule and add PostCSS loader
    const cssRule = config.module.rules.find(rule => rule.test && rule.test.test('.css'));
    if (cssRule) {
      cssRule.use = [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ];
    }

    return config;
  },

  
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  
};
export default config;
