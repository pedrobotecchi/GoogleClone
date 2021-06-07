
// .storybook/main.js
const path = require("path");
// your app's webpack.config.js
const custom = require('../webpack.config');

console.log("custom.devServer", custom)

module.exports = {
  webpackFinal: async (config) => {
    return { 
      ...config,
      module: { ...config.module, rules: custom.module.rules },
      entry: custom.entry,
      output: custom.output,
      devServer: custom.devServer,
      plugins: custom.plugins
    };
  },
  core: {
    builder: "webpack5",
  },
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}