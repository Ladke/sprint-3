export default {
    template:`
    <section class="car-filter">
        <h3>Filter</h3>
        <input type="text" v-model="filter.byVendor" @input="emitFilter" placeholder="Filter Cars" />
    </section>
    `,
    data() {
        return {
            filter: {byVendor: ''}
        }
    },
    methods : {
        emitFilter() {
            this.$emit('filtered', this.filter)
        }
    }
}