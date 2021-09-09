<template>
  <form @submit.prevent="submit()">
    <div class="login-page col-sm-12">
        <div class="col-sm-6 row">
            <div class="col-sm-12 mt-2 mb-2">
                Login
            </div>
            <div class="col-sm-12">
                <div class="col-sm-12 mb-2 mt-2">
                    <inputSimple
                        required
                        type="email"
                        text="Usuário"
                        @changeInput="changeEmail"
                        placeholder="E-mail"
                    />
                </div>
                <div class="col-sm-12 mb-2 mt-2">
                    <inputSimple
                        required
                        type="password"
                        text="Senha"
                        placeholder="Senha"
                        v-model="form.password"
                        />
                </div>

                <buttonSimple
                    text="Login">
                </buttonSimple>
            </div>
        </div>
    </div>
  </form>
</template>

<script>
import inputSimple from '@/components/InputSimple.vue'
import buttonSimple from '@/components/ButtonSimple.vue'
    export default {
        components: {
            inputSimple,
            buttonSimple,
        },

        name: 'login',
        data: () => ({
            form: {
            email: 'dlowy12@google.co.uk',
            password: 'xtPqmEFaip2'
            }
        }),

        methods: {
            changeEmail(emailSelecionado){
                console.log('B', emailSelecionado)
                this.form.email = emailSelecionado
            },

            changeSenha(senhaSelecionado){
                this.form.senha = senhaSelecionado
            },

            async submit () {
                try {
                    await this.ActionDoLogin(this.form)
                    this.$router.push({ name: 'login' })
                } catch (err) {
                    alert(err.data ? err.data.message : 'Não foi possível fazer login')
                }
            }
        }
    };
</script>

<style lang="scss">
    .login-page {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        div{
            background: black;
            color: #fff;
            font-weight: 200;
        }
    }
</style>