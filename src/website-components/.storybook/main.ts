/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const config = {
  stories: ["../src/stories/**/*.stories.@(tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal: (config) => {
    config.module.rules.push(
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        oneOf: [
          {
            test: /\.module.scss$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]--[local]--[hash:hex:5]",
                    exportLocalsConvention: "dashesOnly",
                    namedExport: true,
                    auto: undefined,
                  },
                },
              },
              {
                loader: "postcss-loader",
                options: {
                  execute: false,
                },
              },
              "sass-loader",
            ],
          },
          {
            test: /\.scss$/,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  execute: false,
                },
              },
              "sass-loader",
            ],
          },
        ],
      }
    );

    return config;
  },
};

export default config;
