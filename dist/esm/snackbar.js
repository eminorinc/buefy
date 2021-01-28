import './chunk-1fafdf15.js';
import { merge } from './helpers.js';
import { c as config, V as VueInstance } from './chunk-6985c8ce.js';
import { _ as __vue_normalize__, a as registerComponentProgrammatic, u as use } from './chunk-cca88db8.js';
import { N as NoticeMixin } from './chunk-9ef3c066.js';

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
    indefinite: {
      type: Boolean,
      default: false
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

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"enter-active-class":_vm.transition.enter,"leave-active-class":_vm.transition.leave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"snackbar",class:[_vm.type,_vm.position],attrs:{"role":_vm.actionText ? 'alertdialog' : 'alert'}},[_c('div',{staticClass:"text",domProps:{"innerHTML":_vm._s(_vm.message)}}),_vm._v(" "),(_vm.actionText)?_c('div',{staticClass:"action",class:_vm.type,on:{"click":function($event){_vm.action(_vm.onAction);}}},[_c('button',{staticClass:"button"},[_vm._v(_vm._s(_vm.actionText))])]):_vm._e(),_vm._v(" "),(_vm.buttons && _vm.buttons.length > 0)?_c('div',{staticStyle:{"margin-left":"1em"}},_vm._l((_vm.buttons),function(button,i){return _c('button',{key:i,staticClass:"button is-small",class:button.classes,staticStyle:{"margin-right":"1em"},on:{"click":function($event){_vm.action(button.action);}}},[(button.icon)?_c('span',{staticClass:"icon"},[_c('b-icon',{attrs:{"icon":button.icon,"size":"is-small"}})],1):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(button.text))])])})):_vm._e()])])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-35b15e68_0", { source: ".button.is-text[data-v-35b15e68]:focus,.button.is-text[data-v-35b15e68]:hover{background-color:initial}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-35b15e68";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var Snackbar = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

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
      position: config.defaultSnackbarPosition || 'is-bottom-right'
    };

    if (params.parent) {
      parent = params.parent;
      delete params.parent;
    }

    var propsData = merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance;
    var SnackbarComponent = vm.extend(Snackbar);
    return new SnackbarComponent({
      parent: parent,
      el: document.createElement('div'),
      propsData: propsData
    });
  }
};
var Plugin = {
  install: function install(Vue) {
    localVueInstance = Vue;
    registerComponentProgrammatic(Vue, 'snackbar', SnackbarProgrammatic);
  }
};
use(Plugin);

export default Plugin;
export { Snackbar as BSnackbar, SnackbarProgrammatic };
