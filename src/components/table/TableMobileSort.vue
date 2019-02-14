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
                {{ column.label }}
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
                mobileSort: this.currentSortColumn,
                parsedColumns: []
            }
        },
        computed: {
            calculateParsedColumns() {
                if (this.columns) {
                    return this.columns.reduce((res, current) => [...res, current, current], [])
                }
                return []
            }
        },
        watch: {
            mobileSort(column) {
                this.$emit('sort', column)
            },

            currentSortColumn(column) {
                this.mobileSort = column
            }
        },
        methods: {
            sort() {
                this.$emit('sort', this.mobileSort)
            }
        }
    }
</script>
