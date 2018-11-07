'use strict'
import iconsD from '../misterkeep-services/icons.js';

export default {
    components: {
        
    },

    template: `
    <section class="new-note">
        <input
            @click="openForm"
            class="form-input new-note-text"
            v-model="text"
            type="text"
            placeholder="Add new note..."
        >
    </section> 
    `,

    data() {
        return {
            icons: iconsD,
        }
    },

    methods: {

    },

    computed: {

    },

    created() {
        // console.log(this.icons)
    }
}