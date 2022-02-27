const config = require('./src/http/config');

module.exports = {
  devServer: {
<<<<<<< HEAD
    port: 8080,
    host: 'localhost',
    https: false,
    open: true,
    proxy: {
      '/api': {
        target: 'http://api.bilibili.com',
        chagOrigin: true,
        pathRewrite: {
          '^/api': '',
        }
=======
    proxy: {
      '/api': {
        target: config.server,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/'
        },
        ws: false,
>>>>>>> 927d1e450ef27bb3f975a5cb5eb70698496205e6
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
