'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-f22477ff.js');
require('./helpers.js');
require('./chunk-cd0dcc1d.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-81a092b8.js');
var __chunk_12 = require('./chunk-85326d0e.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_12.Dropdown);
    __chunk_5.registerComponent(Vue, __chunk_12.DropdownItem);
  }
};
__chunk_5.use(Plugin);

exports.BDropdown = __chunk_12.Dropdown;
exports.BDropdownItem = __chunk_12.DropdownItem;
exports.default = Plugin;
