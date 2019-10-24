import './chunk-17755bd7.js'
import './chunk-90e31a22.js'
import './chunk-1628b87d.js'
import { r as registerComponent, a as registerComponentProgrammatic, u as use } from './chunk-cca88db8.js'
import './chunk-dc5f834f.js'
import Vue from 'vue'
import { M as Modal } from './chunk-9a93b6f5.js'

var ModalProgrammatic = {
    open: function open(params) {
        var content
        var parent
        if (typeof params === 'string') content = params
        var defaultParam = {
            programmatic: true,
            content: content
        }

        if (params.parent) {
            parent = params.parent
            delete params.parent
        }

        var propsData = Object.assign(defaultParam, params)
        var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue
        var ModalComponent = vm.extend(Modal)
        return new ModalComponent({
            parent: parent,
            el: document.createElement('div'),
            propsData: propsData
        })
    }
}
var Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Modal)
        registerComponentProgrammatic(Vue, 'modal', ModalProgrammatic)
    }
}
use(Plugin)

export default Plugin
export { ModalProgrammatic }
