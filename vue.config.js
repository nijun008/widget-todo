const path = require("path")

const widget_name = process.env.npm_package_libName
const widget_version = process.env.npm_package_version

const buildConfig = {
  css: {
    sourceMap: false,
    // css打包到js
    extract: false,
  },
  configureWebpack: config => {
    config.entry = './widget/index.js'
    config.output.library = widget_name
    config.output.filename = `${widget_name}/${widget_version}/index.js`
    config.output.libraryTarget = 'umd'
    // config.output.libraryExport = 'default'
    // CDN
    // config.externals = {
    //   vue: 'Vue'
    // }
    // config.resolve = {
    //   extensions: ['.js', '.vue', '.json']
    // }

    // config.plugins.push(new webpack.BannerPlugin(buildInfo))
  },
  chainWebpack: config => {
      config.module
        .rule('js')
        .include.add(path.resolve('widget'))
        .end()
        .use('babel')
        .loader('babel-loader')
        .tap(options => options)
      config.optimization.delete('splitChunks')
      config.plugins.delete('copy')
      config.plugins.delete('html')
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      config.plugins.delete('hmr')
      config.entryPoints.delete('app')

      // 图片打入JS中
      config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, { limit: 1024 * 1024, esModule: false }))
  },
  outputDir: 'lib',
  productionSourceMap: false,
}

module.exports = process.env.NODE_ENV === 'development' ? {} : buildConfig