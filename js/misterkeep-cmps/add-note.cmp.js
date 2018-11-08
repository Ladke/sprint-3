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
                v-if="onEdit"
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

            <note-controllers  v-if="onEdit">
                <colors-checkbox v-if="showColors"></colors-checkbox>
            </note-controllers>
        </section> 
    `,

    data() {
        return {
            icons: iconsD,
            onEdit: false,
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
            this.onEdit = true;
            this.$refs.textInput.focus();
        },
        
        focusInput() {
            this.$refs.textInput.focus();
        },
        close(e) {
            if (! this.$refs.noteInput.contains(e.target)){
                this.commitNote()
            }
        },
        commitNote() {
            this.onEdit = false;
            this.showColors = false;

            // console.log(this.note.text);
            if(this.note.text !== '' || this.note.title !== '') {
                let newNote = {
                    text :this.note.text,
                    title: this.note.title,
                    id: utils.makeId(),
                    date: undefined,
                    isReminder: false,
                    isPinned: false,
                    isComplited: false,
                    label: '',
                    img: '',
                    backgroundColor: this.note.backgroundColor,
                }

                notesService.addNote(newNote)
            }

            this.clearInput();
        },

        clearInput(){
            this.note.text = '';
            this.note.title = '';
            this.note.backgroundColor = '';
        },

        changeColor(color) {
            this.note.backgroundColor = color;
            console.log(this.note.backgroundColor);
        }
    },

    computed: {

    },

    created() {
        window.addEventListener('click', this.close);

        eventBus.$on('open-colors', () => this.showColors = !this.showColors);

        eventBus.$on('change-color', this.changeColor);

        eventBus.$on('edit-note', (note) => {
            document.event.target = this.$refs.textInput;
            this.note = note;
            this.openForm();
        });
        
    },
    
    beforeDestroy() {
        window.removeEventListener('click', this.close)
    },
}