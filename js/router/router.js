import homePage from '../pages/home-page.js';

var routes = [{
        path: '/',
        component: homePage
    },
    // {
    //     path: '/books',
    //     component: bookApp
    // },
    // {
    //     path: '/books/:bookID',
    //     component: bookDetails
    // }

    // {path: '/book-edit', component: bookEdit }
]

Vue.use(VueRouter);
var Router = new VueRouter({
    routes
})

export default Router;