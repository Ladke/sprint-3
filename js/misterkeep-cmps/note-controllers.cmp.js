'use strict'
import iconsD from '../misterkeep-services/icons.js';
import {eventBus} from '../misterkeep-services/evenbus.js';

export default {
    props: ['noteId'],

    components: {
        
    },

    template: `
        <div class="note-controller">
            <svg class="icon_small ball" viewBox="0 0 24 24"><path :d="icons.ball" title="reminder"></path></svg>

            <svg class="icon_small colors" title="change color" @click="openNev"> 
                <use xlink:href="css/img/symbol.svg#icon-color"></use>
            </svg>
            <svg class="icon_small" viewBox="0 0 24 24"><path :d="icons.achived"></path></svg>
            <svg class="icon_small ball" title="pin to top">
                <use xlink:href="css/img/symbol.svg#icon-pin"></use>
            </svg>

            <svg class="icon_small x" viewBox="0 0 24 24" v-if="noteId"><path :d="icons.x" title="close" @click="deleteNote"></path></svg>
            <slot></slot>
        </div>
    `,

    data() {
        return {
            icons: iconsD,
        }
    },

    methods: {
        deleteNote() {
            eventBus.$emit('delete-note', this.noteId);
        },

        openNev() {
            eventBus.$emit('open-colors');
        }
    },

    computed: {

    },

    mounted() {

    }
}