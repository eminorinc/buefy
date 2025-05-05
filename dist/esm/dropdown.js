import './chunk-94a101ab.js';
import './helpers.js';
import './chunk-6985c8ce.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import './chunk-28fd8807.js';
import { a as Dropdown, D as DropdownItem } from './chunk-33b054ae.js';
export { a as BDropdown, D as BDropdownItem } from './chunk-33b054ae.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Dropdown);
    registerComponent(Vue, DropdownItem);
  }
};
use(Plugin);

export default Plugin;
