'use strict'
const base = require('./webpack.base.config')
const merge = require('webpack-merge')
console.log('params***', process.argv)
let HOST = process.argv.splice(2)[0] || 'prod';
module.exports = merge(base)