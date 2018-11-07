'use strict'

import { notesService } from '../../misterkeep-services/misterkeep.service.js';

export default {
    components: {

    },

    template: `
        <div>welcome</div>
    `,

    data() {
        return {
            notes: notesService.query()
        }
    },

    methods: {

    },

    computed: {

    },

    created() {
        console.log(this.notes)
    },

}