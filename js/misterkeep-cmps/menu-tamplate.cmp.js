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
    <section class="misterkeep_menu">
        <nav class="menu_nav">
            <div class="menu_burger">
                <svg class="icon icon_burger" viewBox="0 0 24 24"><path :d="icons.burgerBar"></path></svg>
            </div>
            <div class="icon-box">
                <svg class="icon icon_lamp" viewBox="0 0 24 24"><path :d="icons.lamp"></path></svg>
                <slot></slot> 
            </div> 

            <search-notes></search-notes>
        </nav>
    </section> 
    `,

    data() {
        return {
            icons: iconsD,
            currPlace: 'notes'
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