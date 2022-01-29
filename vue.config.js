const config = require('./src/http/config');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: config.server,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/'
        },
        ws: false,
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
