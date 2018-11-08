'use strict'
import { notesService } from '../misterkeep-services/misterkeep.service.js';
import {eventBus} from '../misterkeep-services/evenbus.js';
import iconsD from '../misterkeep-services/icons.js';

import noteControllers from './note-controllers.cmp.js';

export default {
    props: ['note'],

    components: {
        noteControllers
    },

    template: `
        <div class="note-card" @mouseenter="openControllers" @mouseleave="openControllers">
            <svg 
                class="icon_small icon-edit-note" 
                v-if="isShow"  viewBox="0 0 24 24"
                @click="editNote(note.id)">
                <path :d="editIcon" title="edit"></path>
            </svg>
            <h2 class="note-title">{{note.title}}</h2>
            <p class="note-text">{{note.text}}</p>

            <div class="controllers-box">
                <note-controllers v-if="isShow" :isNote="true"></note-controllers>
            </div>
        </div>
    `,

    data() {
        return {
            editIcon: iconsD.edit,
            isShow: false
        }
    },

    methods: {
        openControllers() {
            this.isShow = !this.isShow;
        },
        editNote(id) {
            // eventBus.$emit('edit-note', this.note)
            // notesService.removeNote(id)
        }
    },

    computed: {

    },

    mounted() {
        console.log(this.note)
    }
}