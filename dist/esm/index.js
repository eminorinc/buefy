import './chunk-83de1508.js';
import { merge } from './helpers.js';
export { escapeRegExpChars, getValueByPath, indexOf, isMobile, merge, removeElement, sign } from './helpers.js';
import { s as setVueInstance, a as setOptions, c as config } from './chunk-b76a6c1d.js';
import './chunk-03b1476b.js';
import './chunk-d1abbabc.js';
import { a as registerComponentProgrammatic, u as use } from './chunk-cca88db8.js';
import './chunk-b519ae7c.js';
import './chunk-48ea2ceb.js';
import Plugin from './autocomplete.js';
export { default as Autocomplete } from './autocomplete.js';
import Plugin$1 from './button.js';
export { default as Button } from './button.js';
import Plugin$2 from './carousel.js';
export { default as Carousel } from './carousel.js';
import './chunk-a1a77ea5.js';
import './chunk-c2cb52bb.js';
import Plugin$3 from './checkbox.js';
export { default as Checkbox } from './checkbox.js';
import Plugin$5 from './collapse.js';
export { default as Collapse } from './collapse.js';
import './chunk-8a252e8d.js';
import './chunk-b3471279.js';
import './chunk-7a4023e0.js';
import './chunk-f64df75e.js';
import Plugin$4 from './clockpicker.js';
export { default as Clockpicker } from './clockpicker.js';
import './chunk-252fb8a0.js';
import './chunk-7ba7df6c.js';
import Plugin$6 from './datepicker.js';
export { default as Datepicker } from './datepicker.js';
import './chunk-08d175e0.js';
import Plugin$7 from './datetimepicker.js';
export { default as Datetimepicker } from './datetimepicker.js';
import './chunk-64f6afe5.js';
import Plugin$8 from './dialog.js';
export { default as Dialog, DialogProgrammatic } from './dialog.js';
import Plugin$9 from './dropdown.js';
export { default as Dropdown } from './dropdown.js';
import Plugin$a from './field.js';
export { default as Field } from './field.js';
import Plugin$b from './icon.js';
export { default as Icon } from './icon.js';
import Plugin$c from './input.js';
export { default as Input } from './input.js';
import './chunk-b9bdb0e4.js';
import Plugin$d from './loading.js';
export { default as Loading, LoadingProgrammatic } from './loading.js';
import Plugin$e from './menu.js';
export { default as Menu } from './menu.js';
import './chunk-1a510ac8.js';
import Plugin$f from './message.js';
export { default as Message } from './message.js';
import Plugin$g from './modal.js';
export { default as Modal, ModalProgrammatic } from './modal.js';
import Plugin$i from './notification.js';
export { default as Notification, NotificationProgrammatic } from './notification.js';
import './chunk-f24dbbef.js';
import Plugin$h from './navbar.js';
export { default as Navbar } from './navbar.js';
import Plugin$j from './numberinput.js';
export { default as Numberinput } from './numberinput.js';
import './chunk-950df65a.js';
import Plugin$k from './pagination.js';
export { default as Pagination } from './pagination.js';
import Plugin$l from './progress.js';
export { default as Progress } from './progress.js';
import Plugin$m from './radio.js';
export { default as Radio } from './radio.js';
import Plugin$n from './rate.js';
export { default as Rate } from './rate.js';
import Plugin$o from './select.js';
export { default as Select } from './select.js';
import './chunk-465be906.js';
import Plugin$p from './slider.js';
export { default as Slider } from './slider.js';
import Plugin$q from './snackbar.js';
export { default as Snackbar, SnackbarProgrammatic } from './snackbar.js';
import './chunk-0e3f4fb5.js';
import Plugin$r from './steps.js';
export { default as Steps } from './steps.js';
import Plugin$s from './switch.js';
export { default as Switch } from './switch.js';
import Plugin$t from './table.js';
export { default as Table } from './table.js';
import Plugin$u from './tabs.js';
export { default as Tabs } from './tabs.js';
import './chunk-0baa5f10.js';
import Plugin$v from './tag.js';
export { default as Tag } from './tag.js';
import Plugin$w from './taginput.js';
export { default as Taginput } from './taginput.js';
import Plugin$x from './timepicker.js';
export { default as Timepicker } from './timepicker.js';
import Plugin$y from './toast.js';
export { default as Toast, ToastProgrammatic } from './toast.js';
import Plugin$z from './tooltip.js';
export { default as Tooltip } from './tooltip.js';
import Plugin$A from './upload.js';
export { default as Upload } from './upload.js';



var components = /*#__PURE__*/Object.freeze({
    Autocomplete: Plugin,
    Button: Plugin$1,
    Carousel: Plugin$2,
    Checkbox: Plugin$3,
    Clockpicker: Plugin$4,
    Collapse: Plugin$5,
    Datepicker: Plugin$6,
    Datetimepicker: Plugin$7,
    Dialog: Plugin$8,
    Dropdown: Plugin$9,
    Field: Plugin$a,
    Icon: Plugin$b,
    Input: Plugin$c,
    Loading: Plugin$d,
    Menu: Plugin$e,
    Message: Plugin$f,
    Modal: Plugin$g,
    Navbar: Plugin$h,
    Notification: Plugin$i,
    Numberinput: Plugin$j,
    Pagination: Plugin$k,
    Progress: Plugin$l,
    Radio: Plugin$m,
    Rate: Plugin$n,
    Select: Plugin$o,
    Slider: Plugin$p,
    Snackbar: Plugin$q,
    Steps: Plugin$r,
    Switch: Plugin$s,
    Table: Plugin$t,
    Tabs: Plugin$u,
    Tag: Plugin$v,
    Taginput: Plugin$w,
    Timepicker: Plugin$x,
    Toast: Plugin$y,
    Tooltip: Plugin$z,
    Upload: Plugin$A
});

var Buefy = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    setVueInstance(Vue); // Options

    setOptions(merge(config, options, true)); // Components


    for (var componentKey in components) {
      Vue.use(components[componentKey]);
    } // Config component


    var BuefyProgrammatic = {
      getOptions: function getOptions() {
        return config;
      },
      setOptions: function setOptions$1(options) {
        setOptions(merge(config, options, true));
      }
    };
    registerComponentProgrammatic(Vue, 'config', BuefyProgrammatic);
  }
};
use(Buefy);

export default Buefy;
