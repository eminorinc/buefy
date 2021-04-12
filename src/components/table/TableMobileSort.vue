<template>
    <div
        :style="customStyle"
        class="table-mobile-sort"
        style="z-index:0;width:1px;height:1px;right:83px;position:absolute;
        background:transparent;top:0;-moz-appearance:none;-webkit-appearance: none;"
    >
        <b-select
            v-model="sortMultipleSelect"
            expanded
            v-if="sortMultiple">
            <option
                v-for="(column, index) in columns"
                v-if="column.sortable"
                :key="index"
                :value="column">
                {{ getLabel(column) }}
                <template v-if="getSortingObjectOfColumn(column)">
                    <template v-if="columnIsDesc(column)">
                        &#8595;
                    </template>
                    <template v-else>
                        &#8593;
                    </template>
                </template>
            </option>
        </b-select>
        <b-select
            :custom-style="customSelectStyle"
            v-model="mobileSort"
            class="mobile-sort"
            v-else
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
        sortMultipleData: Array,
        isAsc: Boolean,
        columns: Array,
        placeholder: String,
        customStyle: String,
        customSelectStyle: String,
        sortMultiple: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            sortMultipleSelect: '',
            mobileSort: { column: this.currentSortColumn, index: null },
            defaultEvent: {
                shiftKey: true,
                altKey: true,
                ctrlKey: true
            },
            ignoreSort: false
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
        sortMultipleSelect(column) {
            if (this.ignoreSort) {
                this.ignoreSort = false
            } else {
                this.$emit('sort', column, this.defaultEvent)
            }
        },
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
            const mobileSortOptions = column.mobileSortOptions || column.$attrs['mobile-sort-options']
            if (mobileSortOptions) {
                if (index % 2 === 0) {
                    return `${column.label}: ${mobileSortOptions[0]}`
                } else {
                    return `${column.label}: ${mobileSortOptions[1]}`
                }
            }
            return column.label
        },
        getSortingObjectOfColumn(column) {
            return this.sortMultipleData.filter((i) =>
                i.field === column.field)[0]
        },
        columnIsDesc(column) {
            let sortingObject = this.getSortingObjectOfColumn(column)
            if (sortingObject) {
                return !!(sortingObject.order && sortingObject.order === 'desc')
            }
            return true
        },
        getLabel(column) {
            let sortingObject = this.getSortingObjectOfColumn(column)
            if (sortingObject) {
                return column.label + '(' + (this.sortMultipleData.indexOf(sortingObject) + 1) + ')'
            }
            return column.label
        }
    }
}
</script>
