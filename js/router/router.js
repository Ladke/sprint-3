import homePage from '../pages/home-page.js';
import misterKeep from '../pages/misterkeep-pages/misterkeep-main.js';
import emailApp from '../misterEmail/pages/email-app.js';
import emailDetails from '../misterEmail/pages/email-details.js';

var routes = [
            {path: '/',component: homePage},
            {path: '/misterkeep',component: misterKeep},
            {path: '/misteremail', component: emailApp },
            // {path: '/misteremail/edit/:bookId?', component: bookEdit },
            {path: '/misteremail/:emailId', component: emailDetails },
        
]

Vue.use(VueRouter);
var Router = new VueRouter({
    routes
})

export default Router;