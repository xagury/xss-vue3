let path = require('path')

function resolve(url) {
  return path.resolve(__dirname, url)
}
const vuxLoader = require('vux-loader')
module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: { // 设置代理
      '/ehaier': {
        target: 'https://m.ehaier.com',
        changeOrigin: true,
        pathRewrite: {
          '^/ehaier': ''
        }
      },
      '/detailEhaier': {
        target: 'https://detail.ehaier.com',
        changeOrigin: true,
        pathRewrite: {
          '^/detailEhaier': ''
        }
      }
    }
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@components/commons', resolve('src/components/commons'))
      .set('@config', resolve('src/config'))
      .set('@stylesheets', resolve('src/stylesheets'))
      .set('@utils', resolve('src/utils'))
      .set('@views', resolve('src/views'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'));
    // 修复HMR
    config.resolve.symlinks(true);
  },
  // configureWebpack: config => {
  //   require('vux-loader').merge(config, {
  //     options: {},
  //     plugins: ['vux-ui']
  //   })
  // },
  
    lintOnSave: false,
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: true, //包含运行时编译器的 Vue 构建版本
    productionSourceMap: false,
    parallel: undefined,
    // css: {
    //   loaderOptions: {
    //     sass: {
    //       data: `
    //         @import "@/assets/styles/_variable.scss";
    //       `
    //     }
    //   }
    // }

}