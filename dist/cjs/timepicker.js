'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-f22477ff.js');
require('./helpers.js');
require('./chunk-cd0dcc1d.js');
require('./chunk-ee30b6ca.js');
require('./chunk-ff4db405.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-32feedee.js');
require('./chunk-ec523aac.js');
require('./chunk-81a092b8.js');
require('./chunk-85326d0e.js');
require('./chunk-857cce79.js');
require('./chunk-86128bdb.js');
var __chunk_16 = require('./chunk-746bf797.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_16.Timepicker);
  }
};
__chunk_5.use(Plugin);

exports.BTimepicker = __chunk_16.Timepicker;
exports.default = Plugin;
