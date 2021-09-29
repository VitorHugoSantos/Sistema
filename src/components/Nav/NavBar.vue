<template>
    <div id="menu">
        <b-navbar toggleable="sm">
            <b-navbar-brand href="#" @click='agendamento'>Agendamentos</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item-dropdown href="#" text="Cadastros">
                        <b-dropdown-item href="#" @click='acessorios'>Acessórios</b-dropdown-item>
                        <b-dropdown-item href="#" @click='cadastroAgendamentos'>Agendar horário</b-dropdown-item>
                        <b-dropdown-item href="#" @click='cadastroGastos'>Gastos</b-dropdown-item>
                        <b-dropdown-item href="#" @click='cadastroRecebimentos'>Recebimentos</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown href="#" text="Relatórios">
                        <b-dropdown-item href="#">Procedimentos realizados</b-dropdown-item>
                        <b-dropdown-item href="#">Procedimentos cancelados</b-dropdown-item>
                        <b-dropdown-item href="#">Extrato</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>Adm</em>
                    </template>
                    <b-dropdown-item href="#" @click="sair">Sair</b-dropdown-item>
                    <b-dropdown-item href="#">Editar</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        components: {
        },

        name: 'NavBar',
        data: () => ({
        }),

        methods: {
            agendamento(){
                this.$router.push({ name: 'agendamento' })
            },

            acessorios(){
                this.$router.push({ name: 'acessorios' })
            },

            cadastroAgendamentos(){
                this.$router.push({ name: 'cadastroAgendamentos' })
            },

            cadastroRecebimentos(){
                this.$router.push({ name: 'cadastroRecebimentos' })
            },

            cadastroGastos(){
                this.$router.push({ name: 'cadastroGastos' })
            },

            sair(){
                this.$router.push({ name: 'login' })
            }
        }
    };
</script>

<style lang="scss">
#menu{
    .navbar{
        background-color: #262626;
        .navbar-brand{
            color: #fff;
        }
        .navbar-collapse{
            .navbar-nav{
                .nav-item{
                    .nav-link{
                        box-shadow: none;
                        color: #fff;
                        padding: 0px;
                        margin-right: 20px;
                    }
                    .dropdown-menu{
                        opacity: 0.9;
                        border-radius: 0px;
                        padding: 0px;
                        font-size: 12px;
                        font-weight: bold;
                        .dropdown-item{
                            border-bottom: 1px solid #000
                        }
                    }
                    .dropdown-item:hover{
                        background: #d9d9d9;
                    }
                }
                .nav-item:hover{
                    ul.dropdown-menu {
                        display: block;    
                    }
                }
            }
        }
    }
}
</style>