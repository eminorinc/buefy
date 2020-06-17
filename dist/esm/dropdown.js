import './chunk-83de1508.js';
import './chunk-b76a6c1d.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import './chunk-b3471279.js';
import { D as Dropdown, a as DropdownItem } from './chunk-7a4023e0.js';
export { D as BDropdown, a as BDropdownItem } from './chunk-7a4023e0.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Dropdown);
    registerComponent(Vue, DropdownItem);
  }
};
use(Plugin);

export default Plugin;
