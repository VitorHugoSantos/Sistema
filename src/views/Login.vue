<template>
  <form @submit.prevent="submit()">
    <div class="login-page col-sm-12">
        <div class="col-sm-6 divLogin row">
            <div class="col-sm-12 mt-3 mb-2">
                <span>Login</span>
            </div>
            <div class="col-sm-12 row">
                <div class="col-sm-12 mb-2 mt-2">
                    <inputSimple
                        required
                        type="email"
                        text="Usuário"
                        @changeInput="changeEmail"
                        placeholder="Usuário"
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
                <div class="col-sm-12 mt-3">
                    <buttonSimple
                        text="Login"
                        width='30%'
                        @clickButton="submit">
                    </buttonSimple>
                </div>
            </div>
            <div class="col-sm-12 row">
                <div class="col-sm-8 mt-3 pl-0 al-l cursor-pointer">
                    Esqueceu a senha?
                </div>
                <div class="col-sm-4 mt-3 pr-0 cursor-pointer">
                    Cadastrar
                </div>
            </div>
        </div>
    </div>
  </form>
</template>

<script>
import inputSimple from '@/components/Input/InputSimple.vue'
import buttonSimple from '@/components/Button/ButtonSimple.vue'
// import axios from 'axios'
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
                this.form.email = emailSelecionado
            },

            changeSenha(senhaSelecionado){
                this.form.senha = senhaSelecionado
            },

            async submit () {
                // let results = await axios.post('http://localhost:8000/api/login/users', {'aa':'bb'});
                this.$router.push({ name: 'agendamento' })
                // try {
                //     await this.ActionDoLogin(this.form)
                //     this.$router.push({ name: 'login' })
                // } catch (err) {
                //     alert(err.data ? err.data.message : 'Não foi possível fazer login')
                // }
            },
        }
    };
</script>

<style lang="scss">
    .login-page {
        height: 90vh;
        width: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: black;
        .divLogin{
            background: #232323;
            height: 50vh;
            width: 10vh;
            border: 1px solid #fff;
            span{
                font-size: 20px;
                font-weight: bold;
            }
        }
        div{
            color: #fff;
            font-weight: 200;
        }
    }
</style>