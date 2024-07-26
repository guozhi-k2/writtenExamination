const { defineConfig } = require('@vue/cli-service')
const fs = require("fs")
const path = require('path')
const port = 8080 // 端口
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    host: '0.0.0.0',
    port: port,
    open: true,
    https: {
      cert: fs.readFileSync(path.join(__dirname, "src/utils/ssl/cert.crt")),
      key: fs.readFileSync(path.join(__dirname, "src/utils/ssl/cert-key.pem"))
    },
    proxy: {
      '/api': {
        target: 'https://llm-summarizer.ga.skyvault.cn:30443', // 目标代理地址
        changeOrigin: true, // 是否改变源
        // pathRewrite: {
        //   '^/api': '' // 重写路径： 去掉路径中开头的'/api'
        // },
        headers: {
          'Access-Control-Allow-Origin': 'application/json'
        }
      }
    },
    // disableHostCheck: true
  }
})
