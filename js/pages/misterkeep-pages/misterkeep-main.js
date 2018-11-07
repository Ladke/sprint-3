'use strict'

import {eventBus} from '../../misterkeep-services/evenbus.js';
import { notesService } from '../../misterkeep-services/misterkeep.service.js';
import iconsD from '../../misterkeep-services/icons.js';

import home from '../home-page.js';
import menuTamplate from '../../misterkeep-cmps/menu-tamplate.cmp.js';
import sideBar from '../../misterkeep-cmps/sidebar.cmp.js';
import notesDisplay from '../../misterkeep-cmps/notes-display.cmp.js';

export default {
    components: {
        note: notesDisplay,
        menuTamplate,
        sideBar
    },

    template: `
    <section class="mister-keep">
        <menu-tamplate @change-page="changePage" :labels="labels"> 
            <p class="curr-place__span">{{titleUpperCase}}</p> 
        </menu-tamplate>

        <main class="main-body">
            <side-bar :labels="labels"></side-bar>
            <template>
                <component :is="page"></component>
            </template>
        </main>
    </section>

    `,

    data() {
        return {
            notes: notesService.query(),
            icons: iconsD.lamp,
            labels: ['a', 'b', 'c'],
            page: 'note'
        }
    },

    methods: {
        changePage(page) {
            this.page = page;
            console.log(page);           
        }
    },

    computed: {
        titleUpperCase() {
           return this.page.toUpperCase()
        }
    },

    created() {
        eventBus.$on('change-page', this.changePage)
        // console.log(this.notes)
    },

}