'use strict'

import iconsD from '../misterkeep-services/icons.js';

export default {
    template: `
        <div class="notes-filter">

                <input
                    ref="search"
                    @change="search"
                    class="form-input"
                    id="search"
                    v-model="filter"
                    type="text"
                    placeholder="search here..."
                    name="search"
                >
                <svg class="icon search_icon" @click="search" viewBox="0 0 24 24"><path :d="icons.search"></path></svg>

        </div>
    `,

    data() {
        return {
            filter: '',
            icons: iconsD
        }
    },

    methods: {
        search(){
            console.log(this.filter);
            this.filter = '';
        },

        removeFocus() {           
            this.filter = '';
            this.$refs.search.blur();
        }
    },

    computed: {

    }
}