'use strict'
import iconsD from '../misterkeep-services/icons.js';

import searchNotes from './searchbar.cmp.js';
import sideBar from './sidebar.cmp.js';

export default {
    props: ['labels'],

    components: {
        searchNotes,
        sideBar
    },

    template: `
            <nav class="side__nav-list links">
                <li class="nav-item link-item">
                    <svg class="icon home" viewBox="0 0 24 24"><path :d="icons.home"></path></svg>
                    <router-link class= "link nav-item" exact to = "/" >home</router-link>
                </li>

                <li class="nav-item link-item">
                    <svg class="icon email-icon" viewBox="0 0 32 32" ><path :d="icons.email"></path></svg>
                    <router-link class= "link" exact to = "/misteremail" >mister email</router-link>
                </li>
            </nav>
    `,

    data() {
        return {
            icons: iconsD,
        }
    },

    methods: {

    },

    computed: {

    },

    created() {
        // console.log(this.icons)
    }
}