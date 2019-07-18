const path = require('path')
const { resolve } = require('../config/util')
console.log('params***', process.argv)
console.log('env***', process.env.NODE_ENV)
const cardName = process.argv.concat().pop();
console.log('card name', cardName)
function normalizeCardName(name){
    return name.split('-').map((item,index) =>{
        if(index === 0) {
            return item.toLowerCase()
        } else {
            return item.slice(0, 1).toUpperCase() + item.slice(1)
        }
    }).join('')
}
let cardEntryName = [normalizeCardName(cardName)]
let entry = {}
cardEntryName.map(item => {
    entry[item] = resolve(`src/${cardName}/index.js`)
})
module.exports = {
    entry: entry,
    output: {
        filename: '[name].[hash:8].js',
        path: resolve('dist')
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