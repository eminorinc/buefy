'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

require('./chunk-2777282e.js')
require('./chunk-6ce6eb64.js')
require('./chunk-fb310c0c.js')
require('./chunk-d4aef657.js')
var __chunk_6 = require('./chunk-13e039f5.js')
var __chunk_19 = require('./chunk-4b25fde4.js')

//
var script = {
    name: 'BMessage',
    mixins: [__chunk_19.MessageMixin],
    props: {
        ariaCloseLabel: String
    },
    data: function data() {
        return {
            newIconSize: this.iconSize || this.size || 'is-large'
        }
    }
}

/* script */
const __vue_script__ = script

/* template */
var __vue_render__ = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('transition', {attrs: {'name': 'fade'}}, [(_vm.isActive) ? _c('article', {staticClass: 'message', class: [_vm.type, _vm.size]}, [(_vm.title) ? _c('header', {staticClass: 'message-header'}, [_c('p', [_vm._v(_vm._s(_vm.title))]), _vm._v(' '), (_vm.closable) ? _c('button', {staticClass: 'delete', attrs: {'type': 'button', 'aria-label': _vm.ariaCloseLabel}, on: {'click': _vm.close}}) : _vm._e()]) : _vm._e(), _vm._v(' '), _c('section', {staticClass: 'message-body'}, [_c('div', {staticClass: 'media'}, [(_vm.icon && _vm.hasIcon) ? _c('div', {staticClass: 'media-left'}, [_c('b-icon', {class: _vm.type, attrs: {'icon': _vm.icon, 'pack': _vm.iconPack, 'both': '', 'size': _vm.newIconSize}})], 1) : _vm._e(), _vm._v(' '), _c('div', {staticClass: 'media-content'}, [_vm._t('default')], 2)])])]) : _vm._e()]) }
var __vue_staticRenderFns__ = []

/* style */
const __vue_inject_styles__ = undefined
/* scoped */
const __vue_scope_id__ = undefined
/* module identifier */
const __vue_module_identifier__ = undefined
/* functional template */
const __vue_is_functional_template__ = false
/* style inject */

/* style inject SSR */

var Message = __chunk_6.__vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
)

var Plugin = {
    install: function install(Vue) {
        __chunk_6.registerComponent(Vue, Message)
    }
}
__chunk_6.use(Plugin)

exports.default = Plugin