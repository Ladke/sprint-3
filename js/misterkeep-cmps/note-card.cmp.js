'use strict'
import {eventBus} from '../misterkeep-services/evenbus.js';
import { notesService } from '../misterkeep-services/misterkeep.service.js';
import iconsD from '../misterkeep-services/icons.js';

import noteControllers from './note-controllers.cmp.js';
import colorsCheckbox from './colors-checkbox.cmp.js';

export default {
    props: ['note'],

    components: {
        colorsCheckbox,
        noteControllers
    },

    template: `
        <div class="note-card" @mouseenter="openControllers" @mouseleave="closeControllers" :style= "{backgroundColor: this.note.backgroundColor }">
            <svg 
                class="icon_small icon-edit-note" 
                v-if="isShow"  viewBox="0 0 24 24"
                @click="editNote()">
                <path :d="editIcon" title="edit"></path>
            </svg>

            <h2 class="note-title">{{note.title}}</h2>
            <p class="note-text">{{note.text}}</p>

            <div class="controllers-box">
                <note-controllers v-if="isShow" :noteId="this.note.id">
                    <colors-checkbox v-if="showColors" :noteCard="note"></colors-checkbox>
                </note-controllers>
            </div>
        </div>
    `,

    data() {
        return {
            editIcon: iconsD.edit,
            showColors: false,
            isShow: false
        }
    },

    methods: {
        openControllers() {
            this.isShow = true;
        },
        closeControllers() {
            this.isShow = false;
            this.showColors = false;
        },
         
        editNote() {
            eventBus.$emit('edit-note', {...this.note});
            eventBus.$emit('delete-note', this.note.id , true);
            window.scrollTo(0, 0);
        }
    },

    computed: {

    },
    created() {
        eventBus.$on('open-colors', () => {this.showColors = !this.showColors});
    },

    mounted() {
        console.log(this.note)
    }
}