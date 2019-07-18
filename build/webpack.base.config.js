const path = require('path')
const { resolve } = require('../config/util')

module.exports = {
    entry: {

    },
    output: {

    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          //可以在页面中使用@符号表示src目录
          '@': resolve('src'),
        }
    }
}