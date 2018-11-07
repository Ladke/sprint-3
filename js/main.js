'use strict'

import Router from './router/router.js';

import headerTamplate from './tamplates/header-tamplate.js';
import homePage from './pages/home-page.js';
import misterKeep from './pages/misterkeep-pages/misterkeep-main.js';


new Vue({
    el: '.app',

    router: Router,

    components: {
        headerTamplate,
        homePage,
        misterKeep
    }
})