'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

require('./chunk-2777282e.js')
require('./chunk-6ce6eb64.js')
require('./chunk-fb310c0c.js')
require('./chunk-d4aef657.js')
var __chunk_6 = require('./chunk-13e039f5.js')
var __chunk_21 = require('./chunk-b5076884.js')

var Plugin = {
    install: function install(Vue) {
        __chunk_6.registerComponent(Vue, __chunk_21.Pagination)
        __chunk_6.registerComponent(Vue, __chunk_21.PaginationButton)
    }
}
__chunk_6.use(Plugin)

exports.default = Plugin
