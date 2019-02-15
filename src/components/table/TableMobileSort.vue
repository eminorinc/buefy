<template>
    <div
        :style="customStyle"
        class="table-mobile-sort"
        style="z-index:0;width:1px;height:1px;right:83px;position:absolute;
        background:transparent;top:0;-moz-appearance:none;-webkit-appearance: none;"
    >
        <b-select :custom-style="customSelectStyle" v-model="mobileSort" >
            <option
                v-for="(column, index) in calculateParsedColumns"
                v-if="column.sortable"
                :key="index"
                :value="column">
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
            customStyle: String,
            customSelectStyle: String
        },
        data() {
            return {
                mobileSort: this.currentSortColumn
            }
        },
        computed: {
            calculateParsedColumns() {
                if (this.columns) {
                    const newColumns = this.columns.reduce(
                        (res, current) => [...res, current, current], [])
                    const newNewCol = newColumns.map((c, i) => {
                        const sortOrder = i % 2 === 0 ? 'asc' : 'desc'
                        return {...c, sort_order: sortOrder}
                    })
                    console.log(newNewCol)
                    return newNewCol
                }
                return []
            }
        },
        watch: {
            mobileSort(column) {
                if (this.currentSortColumn === column) return
                console.log('column from mobileSort:')
                console.log(column)
                this.$emit('sort', column)
            },
            currentSortColumn(column) {
                console.log('column from currentSortColumn:')
                console.log(column)
                this.mobileSort = column
            }
        },
        methods: {
            sort() {
                console.log('column from sort method:')
                console.log(this.mobileSort)
                this.$emit('sort', this.mobileSort)
            },
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
