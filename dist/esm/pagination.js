import './chunk-f2006744.js'
import './helpers.js'
import './chunk-b76a6c1d.js'
import './chunk-c8434a6f.js'
import { r as registerComponent, u as use } from './chunk-cca88db8.js'
import { P as Pagination, a as PaginationButton } from './chunk-4dc010ac.js'
export { P as BPagination, a as BPaginationButton } from './chunk-4dc010ac.js'

var Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Pagination)
        registerComponent(Vue, PaginationButton)
    }
}
use(Plugin)

export default Plugin
