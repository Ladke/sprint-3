
import iconsD from '../misterkeep-services/icons.js';

export default {

    template: `
    <section class="misterkeep_menu">
        <nav class="menu_nav">
            <div class="menu_burger">
                <svg class="icon icon_burger" viewBox="0 0 24 24"><path :d="icons.burgerBar"></path></svg>
            </div>

            <div class="curr-place">
                <span class="curr-place__span">{{currPlace}}</span>
            </div>

            <div class="side__nav">
                <ul class="top">
                    <li class="nav_item" @click="setPage">notes</li>
                    <li class="nav_item" @click="setPage">reminders</li>
                </ul>
            </div>
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
        setPage(ev) {
            console.log(ev.target.innerText);
        }
    },

    computed: {

    },

    created() {
        console.log(this.icons)
    }
}