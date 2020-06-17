import './chunk-83de1508.js';
import './helpers.js';
import './chunk-b76a6c1d.js';
import './chunk-d1abbabc.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import { P as Pagination, a as PaginationButton } from './chunk-950df65a.js';
export { P as BPagination, a as BPaginationButton } from './chunk-950df65a.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Pagination);
    registerComponent(Vue, PaginationButton);
  }
};
use(Plugin);

export default Plugin;
