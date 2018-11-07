'use strict'
import addNote from './add-note.cmp.js'

export default {
    components: {
        addNote
    },

    template: `
    <section class="notes-main">
        <add-note></add-note>
    </section> 
    `,

    data() {
        return {

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