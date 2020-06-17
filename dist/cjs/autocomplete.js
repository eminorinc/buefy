'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-660f82d6.js');
require('./helpers.js');
require('./chunk-8806479f.js');
require('./chunk-f45d15e3.js');
require('./chunk-e2a9477f.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-1b66437c.js');
var __chunk_7 = require('./chunk-70e87809.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_7.Autocomplete);
  }
};
__chunk_5.use(Plugin);

exports.BAutocomplete = __chunk_7.Autocomplete;
exports.default = Plugin;
