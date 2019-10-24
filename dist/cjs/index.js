'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

require('./chunk-2777282e.js')
require('./chunk-6ce6eb64.js')
var __chunk_3 = require('./chunk-fb310c0c.js')
require('./chunk-c5724c2f.js')
require('./chunk-d4aef657.js')
var __chunk_6 = require('./chunk-13e039f5.js')
require('./chunk-fdfc3ef2.js')
require('./chunk-012ec96d.js')
var autocomplete = require('./autocomplete.js')
var button = require('./button.js')
require('./chunk-be05f1e8.js')
var checkbox = require('./checkbox.js')
var collapse = require('./collapse.js')
require('./chunk-a74a008c.js')
require('./chunk-68185b37.js')
require('./chunk-0aedbae5.js')
require('./chunk-92295414.js')
var clockpicker = require('./clockpicker.js')
require('./chunk-4a433de0.js')
require('./chunk-99f49d3c.js')
var datepicker = require('./datepicker.js')
require('./chunk-2261a73e.js')
var datetimepicker = require('./datetimepicker.js')
require('vue')
require('./chunk-3c271dc7.js')
var dialog = require('./dialog.js')
var dropdown = require('./dropdown.js')
var field = require('./field.js')
var icon = require('./icon.js')
var input = require('./input.js')
require('./chunk-f1df1c63.js')
var loading = require('./loading.js')
var menu = require('./menu.js')
require('./chunk-4b25fde4.js')
var message = require('./message.js')
var modal = require('./modal.js')
var notification = require('./notification.js')
require('./chunk-6254af2a.js')
var navbar = require('./navbar.js')
var numberinput = require('./numberinput.js')
require('./chunk-b5076884.js')
var pagination = require('./pagination.js')
var progress = require('./progress.js')
var radio = require('./radio.js')
var rate = require('./rate.js')
var select = require('./select.js')
require('./chunk-e1340b6d.js')
var slider = require('./slider.js')
var snackbar = require('./snackbar.js')
require('./chunk-3dffe6e7.js')
var steps = require('./steps.js')
var _switch = require('./switch.js')
var table = require('./table.js')
var tabs = require('./tabs.js')
require('./chunk-6fd4d8b3.js')
var tag = require('./tag.js')
var taginput = require('./taginput.js')
var timepicker = require('./timepicker.js')
var toast = require('./toast.js')
var tooltip = require('./tooltip.js')
var upload = require('./upload.js')

var components = /* #__PURE__ */Object.freeze({
    Autocomplete: autocomplete.default,
    Button: button.default,
    Checkbox: checkbox.default,
    Clockpicker: clockpicker.default,
    Collapse: collapse.default,
    Datepicker: datepicker.default,
    Datetimepicker: datetimepicker.default,
    Dialog: dialog.default,
    Dropdown: dropdown.default,
    Field: field.default,
    Icon: icon.default,
    Input: input.default,
    Loading: loading.default,
    Menu: menu.default,
    Message: message.default,
    Modal: modal.default,
    Navbar: navbar.default,
    Notification: notification.default,
    Numberinput: numberinput.default,
    Pagination: pagination.default,
    Progress: progress.default,
    Radio: radio.default,
    Rate: rate.default,
    Select: select.default,
    Slider: slider.default,
    Snackbar: snackbar.default,
    Steps: steps.default,
    Switch: _switch.default,
    Table: table.default,
    Tabs: tabs.default,
    Tag: tag.default,
    Taginput: taginput.default,
    Timepicker: timepicker.default,
    Toast: toast.default,
    Tooltip: tooltip.default,
    Upload: upload.default
})

var Buefy = {
    install: function install(Vue) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

        // Options
        __chunk_3.setOptions(Object.assign(__chunk_3.config, options)) // Components

        for (var componentKey in components) {
            Vue.use(components[componentKey])
        } // Config component

        var BuefyProgrammatic = {
            setOptions: function setOptions(options) {
                __chunk_3.setOptions(Object.assign(__chunk_3.config, options))
            }
        }
        __chunk_6.registerComponentProgrammatic(Vue, 'config', BuefyProgrammatic)
    }
}
__chunk_6.use(Buefy)

exports.Autocomplete = autocomplete.default
exports.Button = button.default
exports.Checkbox = checkbox.default
exports.Collapse = collapse.default
exports.Clockpicker = clockpicker.default
exports.Datepicker = datepicker.default
exports.Datetimepicker = datetimepicker.default
exports.Dialog = dialog.default
exports.DialogProgrammatic = dialog.DialogProgrammatic
exports.Dropdown = dropdown.default
exports.Field = field.default
exports.Icon = icon.default
exports.Input = input.default
exports.Loading = loading.default
exports.LoadingProgrammatic = loading.LoadingProgrammatic
exports.Menu = menu.default
exports.Message = message.default
exports.Modal = modal.default
exports.ModalProgrammatic = modal.ModalProgrammatic
exports.Notification = notification.default
exports.NotificationProgrammatic = notification.NotificationProgrammatic
exports.Navbar = navbar.default
exports.Numberinput = numberinput.default
exports.Pagination = pagination.default
exports.Progress = progress.default
exports.Radio = radio.default
exports.Rate = rate.default
exports.Select = select.default
exports.Slider = slider.default
exports.Snackbar = snackbar.default
exports.SnackbarProgrammatic = snackbar.SnackbarProgrammatic
exports.Steps = steps.default
exports.Switch = _switch.default
exports.Table = table.default
exports.Tabs = tabs.default
exports.Tag = tag.default
exports.Taginput = taginput.default
exports.Timepicker = timepicker.default
exports.Toast = toast.default
exports.ToastProgrammatic = toast.ToastProgrammatic
exports.Tooltip = tooltip.default
exports.Upload = upload.default
exports.default = Buefy