'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-f22477ff.js');
require('./helpers.js');
require('./chunk-cd0dcc1d.js');
require('./chunk-ee30b6ca.js');
require('./chunk-ff4db405.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-32feedee.js');
var __chunk_7 = require('./chunk-39ae042c.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_7.Autocomplete);
  }
};
__chunk_5.use(Plugin);

exports.BAutocomplete = __chunk_7.Autocomplete;
exports.default = Plugin;
