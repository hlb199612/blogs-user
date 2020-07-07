'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
// const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production'){
  //     return {
  //       plugins: [
  //         new CompressionWebpackPlugin({
  //           filename: '[path].gz[query]',
  //           algorithm: 'gzip',
  //           test: productionGzipExtensions,
  //           threshold: 2048,
  //           minRatio: 0.8
  //         })
  //       ]
  //     }
  //   }
  // },
  devServer: {
    host: "127.0.0.1",
    port: 8080,
    overlay: {
      warning: false,
      errors: false
    },
    proxy: {
      '/apis':{
        target:'https://blogme.top/',
        changeOrigin:true,
        pathRewrite:{
          '^/apis':'/'
        }
      },
      '/music':{
        target:'https://blogme.top:3000/',
        changeOrigin:true,
        pathRewrite:{
          '^/music':'/'
        }
      }
    }
  },
}
