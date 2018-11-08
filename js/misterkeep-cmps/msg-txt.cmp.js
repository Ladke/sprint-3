'use strict'
import {eventBus} from '../misterkeep-services/evenbus.js';
import iconsD from '../misterkeep-services/icons.js';

export default {
    props: ['noteCard'],

    template: `
            <div class="msg-container">
                <svg class="icon close" viewBox="0 0 24 24"><path :d="icons.x" @click="close"></path></svg>
                <p>{{msg}}</p>
            </div>
    `,

    data() {
        return {
            msg: 'note successful was added!',
            type: {
                add: 'note successful was added!',
                remove: 'the note was moved to trash',
                delete: 'note was deleted',
                achived: 'note was successful achived'
            },
            icons: iconsD
        }
    },

    methods: {
        setMsg(action) {
            console.log(action)
            this.msg = this.type[action]
        },
        close() {
            this.$emit('close-msg')
        }
    },
    created() {
        eventBus.$on('add-msg', this.setMsg)
    },
}