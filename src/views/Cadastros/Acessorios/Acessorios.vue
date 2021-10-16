<template>
    <panel id="cadastroAcessorios" :loading='loadingPanel'>
        <div class="m-4">
            <div class="col-sm-12 row p-0 ml-3">
                <div class="titulo col-sm-8 pl-0">
                    Cadastro acessórios
                </div>
                <div class="col-sm-4 pr-0" align="right">
                    <buttonCadastro
                        @clickButtonSalvar   ="salvarAcessorio"
                        @clickButtonCancelar ="cancelar"
                        :disabled="$v.$invalid"/>
                </div>
            </div>
            <div><hr></div>
            <div class="col-sm-12 row pr-0">
                <div class="col-sm-4">
                    <inputSimple 
                        text='Nome do acessório*'
                        placeholder='Digite aqui'
                        @changeInput='changeNomeAcessorio'/>
                </div>
                <div class="col-sm-4">
                    <inputSimple 
                        text='Descrição*'
                        placeholder='Digite aqui'
                        @changeInput='changeDescricao'/>
                </div>
            </div>
            <div><hr></div>
            (*) Campos obrigatórios
        </div>
    </panel>
</template>
<script>
    import panel from '@/components/Panel/Panel.vue'
    import inputSimple from '@/components/Input/InputSimple.vue'
    import buttonCadastro from '@/components/Button/ButtonCadastros.vue'
    import axios from 'axios'
    import VueSweetalert2 from 'vue-sweetalert2';
    import { required } from 'vuelidate/lib/validators'
	export default {
		name: 'agenda',
        components: {
            panel,
            inputSimple,
            buttonCadastro,
		},

        validations: {
            acessorio:{
                required,
            },

            descricao:{
                required,
            }
        },

		data: function() {
			return { 
                acessorio    : '',
                descricao    : '',
                loadingPanel : false,
            }
		},

		methods: {

            changeNomeAcessorio(nome){
                this.acessorio = nome
            },

            changeDescricao(descricao){
                this.descricao = descricao
            },

            salvarAcessorio(){
                this.loadingPanel = true
                axios.post('http://localhost:8000/api/cadastro/acessorio/salvar', 
                    {'accdescr': this.descricao, 'acctype': this.acessorio})
                    .then(dados => {
                        if(dados.status == 201){
                            this.loadingPanel = false
                            this.$router.push({ name: 'agendamento' })
                        } else {
                            this.loadingPanel = false
                            VueSweetalert2.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Algo deu errado, tente novamente mais tarde',
                            })                  
                        }
                    });
            },

            cancelar(){
                this.$router.push({ name: 'agendamento' })
            }
		}
	}
</script>
<style lang="scss">
    #cadastroAcessorios{
       
    }
</style>