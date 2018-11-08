import iconsD from '../misterkeep-services/icons.js';

export default {
    template: `     
                <div class="home-backgroand">
                    <div class="home-contant">
                        <h1 class="home-header">
                            welcome to your own personal organizer
                        </h1>

                        <router-link class= "link" exact to = "/misteremail" >
                            <svg class="icon-home icon_mail-home" viewBox="0 0 32 32"><path :d="icons.email"></path></svg>
                        </router-link>

                        <router-link class= "link" exact to = "/misterkeep" >
                            <svg class="icon-home icon_note-home" viewBox="0 0 32 32"><path :d="icons.note"></path></svg>
                        </router-link>
                    </div>

                    <ul class="slideshow">           
                        <li v-for="n in 5"></li>
                    </ul>
                </div>                                                  
    `,
    data() {
        return {
            icons: iconsD
        }
    }
}