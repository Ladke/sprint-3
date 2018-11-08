'use strict'
import {eventBus} from '../misterkeep-services/evenbus.js';

export default {
    props: ['noteCard'],

    template: `
            <div>
                <label 
                    v-for="option in options"
                    class="color-radio"
                    :style="{ backgroundColor: option }">
                    <input type="radio" class="radio-bax" :value="option" v-model="pickedColor" @change="setColor">
                </label>
            </div>
    `,

    data() {
        return {
            options: ["white", "red", "yellow", "green", "blue"],
            pickedColor: ''
        }
    },

    methods: {
        setColor() {
            eventBus.$emit('change-color', this.pickedColor, this.noteCard)           
        }
    }
}