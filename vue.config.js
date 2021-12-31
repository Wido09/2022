module.exports = {
  outputDir: "dist",
  pages: {
    index: {
      entry: 'src/2021/2021.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Telugu'
    },
    omicron: {
      entry: 'src/2022/2022.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Omicron'
    }
  },
  devServer: {
    disableHostCheck: true
  },
  publicPath: process.env.PORT === 13507 ? "/testing-vue/" : "/2022/", // /testing-vue/
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  }
};