'use strict'
import { notesService } from '../misterkeep-services/misterkeep.service.js';
import utils from '../misterkeep-services/util.service.js';
import iconsD from '../misterkeep-services/icons.js';
import {eventBus} from '../misterkeep-services/evenbus.js';

import noteControllers from './note-controllers.cmp.js';
import colorsCheckbox from './colors-checkbox.cmp.js';

export default {
    components: {
        noteControllers,
        colorsCheckbox
    },

    template: `
        <section class="new-note" ref="noteInput" :style= "{backgroundColor: this.note.backgroundColor }">
            <input
                v-if="showForm"
                class="new-note-text"
                v-model="note.title"
                @keypress.enter="focusInput"
                type="text"
                placeholder="Title"
            >

            <textarea
                @click.prevent="openForm"
                ref='textInput'
                class="new-note-text"
                v-model="note.text"
                rows="4"
                placeholder="Add new note...">
            </textarea>

            <note-controllers  v-if="showForm">
                <colors-checkbox v-if="showColors"></colors-checkbox>
            </note-controllers>
        </section> 
    `,

    data() {
        return {
            icons: iconsD,
            showForm: false,
            showColors: false,
            note: {
                title: '',
                text: '',
                backgroundColor: ''
            }
        }
    },

    methods: {
        openForm() {
            this.showForm = true;
            this.$refs.textInput.focus();
            this.note.onEdit = true;
        },
        
        focusInput() {
            this.$refs.textInput.focus();
        },

        isNote() {
            return this.note.text !== '' || this.note.title !== '';
        },

        close(e) {         
            if (! this.$refs.noteInput.contains(e.target) && this.isNote() && this.note.onEdit){
                this.commitNote()               
            } 
        },

        commitNote() {
            let newNote = {
                text :this.note.text,
                title: this.note.title,
                id: utils.makeId(),
                date: undefined,
                reminder: false,
                isPinned: false,
                achived: false,
                trash: false,
                onEdit: false,
                label: '',
                img: '',
                backgroundColor: this.note.backgroundColor,
            }

            notesService.addNote(newNote)

            this.resetState();
        },

        resetState(){
            this.showForm = false;
            this.showColors = false;
            this.note.text = '';
            this.note.title = '';
            this.note.backgroundColor = '';
        },

        changeColor(color, note) {
            if(note) return;
            
            this.note.backgroundColor = color;
        }
    },

    computed: {

    },

    created() {
        window.addEventListener('click', this.close);

        eventBus.$on('open-colors', () => this.showColors = !this.showColors);

        eventBus.$on('change-color', this.changeColor);

        eventBus.$on('edit-note', (note) => {
            if (this.isNote()) {
                this.commitNote()
            }
            this.note = note;
            this.$refs.textInput.focus(); 
        });
        
    },
    
    beforeDestroy() {
        window.removeEventListener('click', this.close)
    },
}


 