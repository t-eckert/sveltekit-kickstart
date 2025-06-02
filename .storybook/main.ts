import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|ts|svelte)"
  ],
  "addons": [
    "@storybook/addon-svelte-csf"
  ],
  "framework": {
    "name": "@storybook/sveltekit",
    "options": {}
  },
  "typescript": {
    "check": false,
    "reactDocgen": false
  },
  "viteFinal": async (config) => {
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      '@storybook/addon-svelte-csf'
    ];
    return config;
  }
};
export default config;