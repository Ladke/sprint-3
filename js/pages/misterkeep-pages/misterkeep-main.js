'use strict'

import {eventBus} from '../../misterkeep-services/evenbus.js';
import { notesService } from '../../misterkeep-services/misterkeep.service.js';
import iconsD from '../../misterkeep-services/icons.js';

import menuTamplate from '../../misterkeep-cmps/menu-tamplate.cmp.js';
import sideBar from '../../misterkeep-cmps/sidebar.cmp.js';
import addNote from '../../misterkeep-cmps/add-note.cmp.js';
import noteCard from '../../misterkeep-cmps/note-card.cmp.js'

export default {
    components: {
        menuTamplate,
        sideBar,
        addNote,
        noteCard
    },

    template: `
    <section class="mister-keep">
        <menu-tamplate @change-type="changeType" :labels="labels"> 
            <p class="curr-place__span">{{titleUpperCase}}</p> 
        </menu-tamplate>

        <main class="main-body">
            <side-bar :labels="labels"></side-bar>

        <section class="notes-main">
            <add-note></add-note>

            <div class="notes-container">
                <note-card  
                    v-for="note in notes" 
                    :note="note"
                    :key="note.id">
                </note-card>
            </div>
        </section> 

            <!-- <template>
                <component :is="page"></component>
            </template> -->
        </main>
    </section>

    `,

    data() {
        return {
            notes: notesService.query(),
            labels: notesService.getLabels(),
            icons: iconsD.lamp,
            type: 'notes'
        }
    },

    methods: {
        changeType(type) {
            this.type = type;
            console.log(type);           
        }
    },

    computed: {
        titleUpperCase() {
           return this.type.toUpperCase()
        }
    },

    created() {
        eventBus.$on('change-type', this.changeType)
        console.log(this.notes)
    },

}