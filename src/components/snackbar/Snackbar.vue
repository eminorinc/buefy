<template>
    <transition
        :enter-active-class="transition.enter"
        :leave-active-class="transition.leave">
        <div
            v-show="isActive"
            class="snackbar"
            :class="[type,position]"
            @mouseenter="pause"
            @mouseleave="removePause"
            :role="actionText ? 'alertdialog' : 'alert'">
            <template v-if="$slots.default">
                <slot />
            </template>
            <template v-else>
                <div class="text" v-html="message" />
            </template>
            <div
                v-if="cancelText"
                class="action is-light is-cancel"
                @click="close">
                <button class="button">{{ cancelText }}</button>
            </div>
            <div
                v-if="actionText"
                class="action"
                @click="action(onAction)"
                :class="type">
                <button class="button">{{ actionText }}</button>
            </div>
            <div
                v-if="buttons && buttons.length > 0"
                style="margin-left: 1em">
                <button
                    v-for="(button, i) in buttons"
                    :key="i"
                    :class="button.classes"
                    class="button is-small"
                    style="margin-right: 1em"
                    @click="action(button.action)">
                    <span v-if="button.icon" class="icon">
                        <b-icon
                            :icon="button.icon"
                            size="is-small"/>
                    </span>
                    <span>{{ button.text }}</span>
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
import config from '../../utils/config'
import NoticeMixin from '../../utils/NoticeMixin'

export default {
    name: 'BSnackbar',
    mixins: [NoticeMixin],
    props: {
        actionText: {
            type: String,
            default: 'OK'
        },
        onAction: {
            type: Function,
            default: () => {}
        },
        cancelText: {
            type: String | null,
            default: null
        },
        buttons: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            newDuration: this.duration || config.defaultSnackbarDuration
        }
    },
    methods: {
        /**
        * Click listener.
        * Call action prop before closing (from Mixin).
        */
        action(cb) {
            cb()
            this.close()
        }
    }
}
</script>

<style scoped>
.button.is-text:hover, .button.is-text:focus {
    background-color: initial;
}
</style>
