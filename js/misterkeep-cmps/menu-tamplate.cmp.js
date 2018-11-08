'use strict'
import iconsD from '../misterkeep-services/icons.js';

import searchNotes from './searchbar.cmp.js';
import sideBar from './sidebar.cmp.js';
import navApp from './nav-app.cmp.js';

export default {
    props: ['labels'],

    components: {
        searchNotes,
        sideBar,
        navApp
    },

    template: `
    <section class="misterkeep_menu">
        <nav class="menu_nav">
            <div class="menu_burger" @click="openSideNav">
                <svg class="icon icon_burger" viewBox="0 0 24 24"><path :d="icons.burgerBar"></path></svg>
            </div>
            <div class="icon-box">
                <svg class="icon icon_lamp" viewBox="0 0 24 24"><path :d="icons.lamp"></path></svg>
                <slot></slot> 
            </div> 

            <search-notes></search-notes>

            <div class="nav-btn" @click="toggleNav">
                <svg class="icon nav-icon" viewBox="0 0 24 24"><path :d="icons.nav"></path></svg>
            </div>
        </nav>
            <transition name="slide-down">
                <nav-app v-if="isShow"></nav-app>
            </transition>
    </section> 
    `,

    data() {
        return {
            icons: iconsD,
            isShow: false,
            currPlace: 'notes'
        }
    },

    methods: {
        toggleNav() {
            this.isShow = !this.isShow;
        },
        openSideNav(){
            this.$emit('open-nav')
        }
    },

    computed: {

    },

    created() {
        // console.log(this.icons)
    }
}