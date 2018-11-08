export default {
    template:`
    <section class="email-filter">
        <input type="text" v-model="searchWord" @input="emitFilter" placeholder="Search Emails" /><span>Go</span>
    </section>
    `,
    data() {
        return {
            searchWord: '',

        }
    },
    methods : {
        emitFilter() {
            this.$emit('filtered', this.searchWord)
        }
    }
}