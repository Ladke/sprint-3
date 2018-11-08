export default {
    template:`
    <section class="email-filter flex ">
    <button>Go</button><input type="text" v-model="searchWord" @input="emitFilter" 
        class="search-input" placeholder=" Search Emails" />
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