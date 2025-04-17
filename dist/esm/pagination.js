import './chunk-94a101ab.js';
import './helpers.js';
import './chunk-6985c8ce.js';
import './chunk-665715e0.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import { P as Pagination, a as PaginationButton } from './chunk-ed64505c.js';
export { P as BPagination, a as BPaginationButton } from './chunk-ed64505c.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Pagination);
    registerComponent(Vue, PaginationButton);
  }
};
use(Plugin);

export default Plugin;
