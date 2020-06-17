'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-660f82d6.js');
require('./helpers.js');
require('./chunk-8806479f.js');
require('./chunk-f45d15e3.js');
require('./chunk-e2a9477f.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-1b66437c.js');
require('./chunk-b3c8a350.js');
require('./chunk-c5b5b708.js');
require('./chunk-fde28540.js');
require('./chunk-f0f3b352.js');
require('./chunk-554a53a0.js');
var __chunk_16 = require('./chunk-6d62acaa.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_16.Timepicker);
  }
};
__chunk_5.use(Plugin);

exports.BTimepicker = __chunk_16.Timepicker;
exports.default = Plugin;
