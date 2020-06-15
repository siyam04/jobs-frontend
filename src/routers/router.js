/*system*/
import Vue from 'vue'
import VueRouter from 'vue-router'

/*custom components*/
import Home from '../views/Home'


/*inserting VueRouter to the Vue framework*/
Vue.use(VueRouter);

/*array of paths*/
const routes = [
    {path: '/', component: Home, name: 'Home'},
    // {path: '/blog', component: Blog, name: 'Blog'},
    // {path: '/posts/:id', component: Posts, name: 'Posts'},
];

/*exporting Array of paths*/
export const router = new VueRouter({
    mode: 'history', //hides hash in url after localhost:8080
    routes: routes
});


