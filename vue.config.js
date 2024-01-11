const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  productionSourceMap: false,
  // 添加此行代码
  lintOnSave: false
})