'use strict'

const path = require('path');

const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  lintOnSave: false,
  publicPath: process.env.VUE_APP_PAGE_CONTEXT,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@i': path.resolve(__dirname, './src/assets'),
      }
    },
    plugins: [
      // 查看打包详细配置
      // new BundleAnalyzerPlugin(),
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      // 配置compression-webpack-plugin压缩
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 100
      })
    ]
  },
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
