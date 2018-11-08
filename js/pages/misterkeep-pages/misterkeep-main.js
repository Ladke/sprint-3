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
        <menu-tamplate @change-type="changeType" :labels="labels" @open-nav="openSideNav"> 
            <p class="curr-place__span">{{titleUpperCase}}</p> 
        </menu-tamplate>

        <main class="main-body">
            <transition name="side__nav">
                <side-bar :labels="labels" v-if="showNav"></side-bar>
            </transition>

        <section class="notes-main">
            <add-note></add-note>

            <div class="notes-container">
                <note-card  
                    v-for="note in notesToShow" 
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
            filter: '',
            type: 'notes',
            showNav: false
        }
    },

    methods: {
        changeType(type) {
            this.type = type;
            console.log(type);           
        },
        removeNote(id) {          
            notesService.removeNote(id)
            this.notes = notesService.query();
        },
        changeColor(color, currNote) {
            if(currNote) {
                notesService.editNote(currNote.id, {backgroundColor: color});
                this.notes = notesService.query();
            }
        },
        openSideNav() {
            this.showNav = !this.showNav
        },
        setFilter(filter) {
            this.filter = filter;
        }
    },

    computed: {
        titleUpperCase() {
           return this.type.toUpperCase()
        },
        notesToShow() {
            if (!this.filter) return this.notes;
            
            return this.notes
                    .filter(note => note.title.match(this.filter) || note.text.match(this.filter))
        }
    },

    created() {
        eventBus.$on('change-type', this.changeType);
        eventBus.$on('delete-note', this.removeNote);
        eventBus.$on('change-color', this.changeColor);
        eventBus.$on('set-filter', this.setFilter);
        console.log(this.notes)
    },

}