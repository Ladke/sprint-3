export default {
    template: `
        <section class="header-top">
            <nav class="header-nav">

                    <li class="nav-item">
                        <router-link name= "link" exact to = "/" >home
                            <!-- <svg class="header_icon">
                                <use xlink:href="/img/SVG/symbol-header.svg#icon-home"></use>
                            </svg> -->
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link name= "link" exact to = "/misteremail" >mister email
                            <!-- <svg class="header_icon">
                                <use xlink:href="/img/SVG/symbol-header.svg#icon-home"></use>
                            </svg> -->
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link name= "link" exact to = "/misterkeep" >mister keep
                            <!-- <svg class="header_icon">
                                <use xlink:href="/img/SVG/symbol-header.svg#icon-home"></use>
                            </svg> -->
                        </router-link>
                    </li>
            </nav>

        </section> 
    `
}