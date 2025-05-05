'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-f22477ff.js');
require('./helpers.js');
require('./chunk-cd0dcc1d.js');
require('./chunk-ee30b6ca.js');
require('./chunk-ff4db405.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-32feedee.js');
require('./chunk-81a092b8.js');
require('./chunk-85326d0e.js');
require('./chunk-857cce79.js');
require('./chunk-86128bdb.js');
var __chunk_15 = require('./chunk-1d27f7f6.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_15.Datepicker);
  }
};
__chunk_5.use(Plugin);

exports.BDatepicker = __chunk_15.Datepicker;
exports.default = Plugin;
