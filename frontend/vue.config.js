const path = require('path');

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src')
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    }
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3000/",
        changeOrigin: false,
        pathRewrite: { "^/api/": "/" },
      },
    }
  },
}
