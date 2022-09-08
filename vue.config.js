const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // Your API Link
    proxy: 'https://jessesfoodblog.herokuapp.com/'
  }
})
module.exports = {
  devServer: {
  proxy: 'https://jessesfoodblog.herokuapp.com/',
  }
  }
