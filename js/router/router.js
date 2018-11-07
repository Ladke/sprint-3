import homePage from '../pages/home-page.js';
import misterKeep from '../pages/misterkeep-pages/misterkeep-main.js';

var routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/misterkeep',
        component: misterKeep
    }
]

Vue.use(VueRouter);
var Router = new VueRouter({
    routes
})

export default Router;