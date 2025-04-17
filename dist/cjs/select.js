'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-f22477ff.js');
require('./helpers.js');
require('./chunk-cd0dcc1d.js');
require('./chunk-ee30b6ca.js');
require('./chunk-ff4db405.js');
var __chunk_5 = require('./chunk-13e039f5.js');
var __chunk_14 = require('./chunk-86128bdb.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_14.Select);
  }
};
__chunk_5.use(Plugin);

exports.BSelect = __chunk_14.Select;
exports.default = Plugin;
