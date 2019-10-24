<template>
    <div
        :style="customStyle"
        class="table-mobile-sort"
        style="z-index:0;width:1px;height:1px;right:83px;position:absolute;
        background:transparent;top:0;-moz-appearance:none;-webkit-appearance: none;"
    >
        <b-select
            :custom-style="customSelectStyle"
            v-model="mobileSort"
            class="mobile-sort"
        >
            <template v-if="placeholder">
                <option
                    v-show="showPlaceholder"
                    :value="{}"
                    selected
                    disabled
                    hidden>
                    {{ placeholder }}
                </option>
            </template>
            <option
                v-for="(column, index) in calculateParsedColumns"
                v-if="column.sortable"
                :key="index"
                :value="{column, index}">
                {{ calculateLabel(column, index) }}
            </option>
        </b-select>
    </div>
</template>

<script>
import Select from '../select/Select'
import Icon from '../icon/Icon'

export default {
    name: 'BTableMobileSort',
    components: {
        [Select.name]: Select,
        [Icon.name]: Icon
    },
    props: {
        currentSortColumn: Object,
        isAsc: Boolean,
        columns: Array,
        placeholder: String,
        customStyle: String,
        customSelectStyle: String
    },
    data() {
        return {
            mobileSort: { column: this.currentSortColumn, index: null }
        }
    },
    computed: {
        calculateParsedColumns() {
            if (this.columns) {
                return this.columns.reduce((res, current) => [...res, current, current], [])
            }
            return []
        },
        showPlaceholder() {
            return !this.columns || !this.columns.some((column) => column === this.mobileSort)
        }
    },
    watch: {
        mobileSort(newVal, oldVal) {
            if (newVal.column !== oldVal.column || newVal.index !== oldVal.index) {
                if (this.currentSortColumn === newVal.column &&
                    newVal.index === oldVal.index) return
                this.$emit('sort', newVal.column, newVal.index % 2 === 0 ? 'asc' : 'desc')
            }
        },
        currentSortColumn(column) {
            this.mobileSort.column = column
        }
    },
    methods: {
        calculateLabel(column, index) {
            if (column.mobileSortOptions) {
                if (index % 2 === 0) {
                    return `${column.label}: ${column.mobileSortOptions[0]}`
                } else {
                    return `${column.label}: ${column.mobileSortOptions[1]}`
                }
            }
            return column.label
        }
    }
}
</script>
