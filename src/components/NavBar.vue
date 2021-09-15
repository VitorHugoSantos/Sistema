<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Agendamentos</b-nav-item>
                    <b-nav-item-dropdown href="#" text="Cadastros">
                        <b-dropdown-item href="#">Acessórios</b-dropdown-item>
                        <b-dropdown-item href="#">Gastos</b-dropdown-item>
                        <b-dropdown-item href="#">Recebimentos</b-dropdown-item>
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
                    <b-dropdown-item href="#">Sair</b-dropdown-item>
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
        }
    };
</script>

<style lang="scss">

</style>