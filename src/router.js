import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Agenda from './views/Agenda.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        //Login
        {
            path: '/',
            name: 'login',
            component : Login,
        },

        //Agenda
        {
            path: '/agenda',
            name: 'agenda',
            component : Agenda,
        },
    ]
})