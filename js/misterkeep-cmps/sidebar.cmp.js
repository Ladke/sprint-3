'use strict'

import iconsD from '../misterkeep-services/icons.js';
import {eventBus} from '../misterkeep-services/evenbus.js';

export default {
    props: ['labels'],

    template: `
            <div class="side__nav">
                <ul class="side__nav-list top">
                    <li class="nav_item" @click="setPage">
                        <svg class="icon lamp" viewBox="0 0 24 24"><path :d="icons.lamp"></path></svg>
                        notes
                    </li>
                    <li class="nav_item" @click="setPage">
                        <svg class="icon ball" viewBox="0 0 24 24"><path :d="icons.ball"></path></svg>
                        reminders
                    </li>
                </ul>

                <div class="nav_label">
                    <h2 class="nav_text">labels</h2>

                    <ul class="side__nav-list middle">
                        <li 
                            v-for="(label, index) in labels"
                            class="nav_item" 
                            @click="setPage"
                            :key="index">{{label}}</li>

                        <li class="nav_item add_label" @click="addLabel">
                            <svg class="icon add" viewBox="0 0 24 24"><path :d="icons.edit"></path></svg>
                            add label
                        </li>
                    </ul>
                </div>

                <div class="nav_bottom">
                    <ul class="side__nav-list bottom">
                        <li class="nav_item archive" @click="setPage">
                            <svg class="icon add" viewBox="0 0 24 24"><path :d="icons.achived"></path></svg>
                            achived
                        </li>

                        <li class="nav_item trash" @click="setPage">
                            <svg class="icon add" viewBox="0 0 24 24"><path :d="icons.trash"></path></svg>
                            trash
                        </li>
                    </ul>
                </div>
            </div>

    `,

    data() {
        return {
            icons: iconsD
        }
    },

    methods: {
            setPage(ev) {
                eventBus.$emit('change-page', ev.target.innerText);
            },
            addLabel() {
                console.log('add')
            }
    },

    computed: {

    }
}