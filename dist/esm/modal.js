import './chunk-94a101ab.js';
import { merge } from './helpers.js';
import { V as VueInstance } from './chunk-6985c8ce.js';
import { r as registerComponent, a as registerComponentProgrammatic, u as use } from './chunk-cca88db8.js';
import './chunk-28fd8807.js';
import { M as Modal } from './chunk-6d20d31f.js';
export { M as BModal } from './chunk-6d20d31f.js';

var localVueInstance;
var ModalProgrammatic = {
  open: function open(params) {
    var parent;
    if (typeof params === 'string') {
      params = {
        content: params
      };
    }
    var defaultParam = {
      programmatic: true
    };
    if (params.parent) {
      parent = params.parent;
      delete params.parent;
    }
    var propsData = merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance;
    var ModalComponent = vm.extend(Modal);
    return new ModalComponent({
      parent: parent,
      el: document.createElement('div'),
      propsData: propsData
    });
  }
};
var Plugin = {
  install: function install(Vue) {
    localVueInstance = Vue;
    registerComponent(Vue, Modal);
    registerComponentProgrammatic(Vue, 'modal', ModalProgrammatic);
  }
};
use(Plugin);

export default Plugin;
export { ModalProgrammatic };
