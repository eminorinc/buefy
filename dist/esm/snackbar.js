import { c as config, V as VueInstance } from './config-e7d4b9c2.js';
import { N as NoticeMixin } from './NoticeMixin-bd6f61d9.js';
import { n as normalizeComponent, u as use, r as registerComponentProgrammatic } from './plugins-218aea86.js';
import { merge } from './helpers.js';
import './_rollupPluginBabelHelpers-df313029.js';

//
var script = {
  name: 'BSnackbar',
  mixins: [NoticeMixin],
  props: {
    actionText: {
      type: String,
      default: 'OK'
    },
    onAction: {
      type: Function,
      default: function _default() {}
    },
    cancelText: {
      type: String | null,
      default: null
    },
    buttons: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      newDuration: this.duration || config.defaultSnackbarDuration
    };
  },
  methods: {
    /**
    * Click listener.
    * Call action prop before closing (from Mixin).
    */
    action: function action(cb) {
      cb();
      this.close();
    }
  }
};

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"enter-active-class":_vm.transition.enter,"leave-active-class":_vm.transition.leave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"snackbar",class:[_vm.type,_vm.position],attrs:{"role":_vm.actionText ? 'alertdialog' : 'alert'},on:{"mouseenter":_vm.pause,"mouseleave":_vm.removePause}},[(_vm.$slots.default)?[_vm._t("default")]:[_c('div',{staticClass:"text",domProps:{"innerHTML":_vm._s(_vm.message)}})],(_vm.cancelText)?_c('div',{staticClass:"action is-light is-cancel",on:{"click":_vm.close}},[_c('button',{staticClass:"button"},[_vm._v(_vm._s(_vm.cancelText))])]):_vm._e(),(_vm.actionText)?_c('div',{staticClass:"action",class:_vm.type,on:{"click":function($event){return _vm.action(_vm.onAction)}}},[_c('button',{staticClass:"button"},[_vm._v(_vm._s(_vm.actionText))])]):_vm._e(),(_vm.buttons && _vm.buttons.length > 0)?_c('div',{staticStyle:{"margin-left":"1em"}},_vm._l((_vm.buttons),function(button,i){return _c('button',{key:i,staticClass:"button is-small",class:button.classes,staticStyle:{"margin-right":"1em"},on:{"click":function($event){return _vm.action(button.action)}}},[(button.icon)?_c('span',{staticClass:"icon"},[_c('b-icon',{attrs:{"icon":button.icon,"size":"is-small"}})],1):_vm._e(),_c('span',[_vm._v(_vm._s(button.text))])])}),0):_vm._e()],2)])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-66c6bfd2_0", { source: ".button.is-text[data-v-66c6bfd2]:focus,.button.is-text[data-v-66c6bfd2]:hover{background-color:initial}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-66c6bfd2";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

  var Snackbar = __vue_component__;

var localVueInstance;
var SnackbarProgrammatic = {
  open: function open(params) {
    var parent;
    if (typeof params === 'string') {
      params = {
        message: params
      };
    }
    var defaultParam = {
      type: 'is-success',
      position: config.defaultSnackbarPosition || 'is-bottom-right',
      queue: true
    };
    if (params.parent) {
      parent = params.parent;
      delete params.parent;
    }
    var slot;
    if (Array.isArray(params.message)) {
      slot = params.message;
      delete params.message;
    }
    var propsData = merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance;
    var SnackbarComponent = vm.extend(Snackbar);
    var component = new SnackbarComponent({
      parent: parent,
      el: document.createElement('div'),
      propsData: propsData
    });
    if (slot) {
      component.$slots.default = slot;
      component.$forceUpdate();
    }
    return component;
  }
};
var Plugin = {
  install: function install(Vue) {
    localVueInstance = Vue;
    registerComponentProgrammatic(Vue, 'snackbar', SnackbarProgrammatic);
  }
};
use(Plugin);

export { Snackbar as BSnackbar, SnackbarProgrammatic, Plugin as default };
