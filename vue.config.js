const { resolve } = require('path');

module.exports = {
  runtimeCompiler: true,
  css: {
    sourceMap: true,
    requireModuleExtension: true,
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/styles/variables.scss";
        `,
        sassOptions: {
          indentWidth: 2,
          includePaths: [
            resolve(__dirname, 'node_modules'),
            resolve(__dirname, 'src', 'assets', 'styles'),
          ],
        },
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map',
    devServer: {
      disableHostCheck: true,
      clientLogLevel: 'info',
      watchOptions: {
        poll: true,
      },
    },
  },
  pwa: {
    themeColor: '#4ABC87',
    msTileColor: '#362D2D',
    manifestOptions: {
      background_color: '#362D2D',
    },
  },
};
