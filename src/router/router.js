import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/ebook'
        },
        {
            path: '/ebook',
            name: 'ebook',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "eboot" */ '@/views/EBook.vue'),
        },
    ],
});
