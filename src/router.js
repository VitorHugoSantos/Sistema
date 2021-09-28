import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Agendamento from './views/Agendamento/Agenda.vue';
import Acessorios from './views/Cadastros/Acessorios/Acessorios.vue';
import CadastroAgendamento from './views/Cadastros/Agendamentos/Agendamento.vue'

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
            path: '/agendamento',
            name: 'agendamento',
            component: Agendamento,
            children: [
                //cadastros
                
              ]
        },
        // Cadastro de acessorios
        {
            path: '/agendamento/cadastros/acessorios',
            name: 'acessorios',
            component: Acessorios,
        },
        // Cadastro de agendamentos
        {
            path: '/agendamento/cadastros/agendamentos',
            name: 'cadastroAgendamentos',
            component: CadastroAgendamento,
        },
    ]
})