'use strict'

import { notesService } from '../../misterkeep-services/misterkeep.service.js';
import iconsD from '../../misterkeep-services/icons.js';

import home from '../home-page.js';
import menuTamplate from '../../misterkeep-cmps/menu-tamplate.cmp.js';

export default {
    components: {
        home,
        menuTamplate
    },

    template: `
    <section class="mister-keep">
        <menu-tamplate></menu-tamplate>

        <template>
            <component is="home"></component>
        </template>
    </section>

    `,

    data() {
        return {
            notes: notesService.query(),
            icons: iconsD.lamp
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