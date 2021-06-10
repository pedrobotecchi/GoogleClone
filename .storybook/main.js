const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push( 
    {
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    },
    {
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
          loader: 'babel-loader',
          options: {
              cacheDirectory: true,
              plugins: ['@babel/plugin-transform-runtime']
          }
      }]
    },
    {
      test: /\.(jpg|png)$/,
      use: {
        loader: 'url-loader',
      },
    },);

    // Return the altered config
    return config;
  },
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs"
  ]
}