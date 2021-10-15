<template>
    <panel id="cadastroRecebimentos" :loading='loadingPanel'>
        <div class="m-4">
            <div class="col-sm-12 row p-0 ml-3">
                <div class="titulo col-sm-8 pl-0">
                    Cadastrar recebimentos
                </div>
                <div class="col-sm-4 pr-0" align="right">
                    <buttonCadastro
                        @clickButtonSalvar  ='salvarRecebimento'
                        @clickButtonCancelar="cancelar"
                        :disabled="$v.$invalid"/>
                </div>
            </div>
            <div><hr></div>
            <div class="col-sm-12 row pr-0">
                <div class="col-sm-3">
                    <selectAll 
                        descricao='Categoria*'
                        placeholder='Digite aqui'
                        :options='optionsCategorias'
                        @changeSelect ='changeCategoria'/>
                </div>
                <div class="col-sm-3">
                    <selectAll 
                        descricao='Forma de pagamento*'
                        placeholder='Digite aqui'
                        :options='optionsPagamento'
                        @changeSelect ='changeFormaPagamento'/>
                </div>
                <div class="col-sm-3">
                    <inputDataSimples 
                        titulo='Data*'
                        @changeData='changeData'/>
                </div>
                <div class="col-sm-3">
                    <inputSimple 
                        text='Valor*'
                        type='number'
                        placeholder='Digite aqui'
                        @changeInput='changeValor'/>
                </div>
            </div>
            <div><hr></div>
            (*) Campos obrigatórios
        </div>
    </panel>
</template>
<script>
    import panel from '@/components/Panel/Panel.vue'
    import buttonCadastro from '@/components/Button/ButtonCadastros.vue'
    import selectAll from '@/components/Select/SelectAll.vue'
    import inputSimple from '@/components/Input/InputSimple.vue'
    import inputDataSimples from '@/components/Data/InputDataSimples.vue'
    import VueSweetalert2 from 'vue-sweetalert2';
    import axios from 'axios'
    import { required } from 'vuelidate/lib/validators'
	export default {
		name: 'cadastroRecebimentos',
        components: {
            panel,
            buttonCadastro,
            selectAll,
            inputDataSimples,
            inputSimple,
		},

        validations: {
            formaPagamentoSelecionada:{
                required,
            },

            categoriaSelecionada:{
                required,
            },

            valorSelecionado:{
                required,
            }
        },

		data() {
			return { 
                optionsCategorias :[{ name: 'Penteados', value: 'P' },],
                optionsPagamento  :[
                    { name: 'Cartão', value: 'C' },
                    { name: 'Dinheiro', value: 'D' },
                    { name: 'Pix', value: 'P' },
                    { name: 'Outros', value: 'O' },],
                formaPagamentoSelecionada : [],
                categoriaSelecionada      : [],
                dataSelecionada           : [],
                valorSelecionado          : [],
                loadingPanel              : false,
            }
		},

		methods: {

            changeCategoria(categoria){
                this.categoriaSelecionada = categoria
            },

            changeFormaPagamento(pagamento){
                this.formaPagamentoSelecionada = pagamento
            },

            changeData(data){
                this.dataSelecionada = data
            },

            changeValor(valor){
                this.valorSelecionado = valor
            },

            salvarRecebimento(){
                this.loadingPanel = true
                axios.post('http://localhost:8000/api/cadastro/recebimentos/salvar',
                        {
                            'recamount'   : this.valorSelecionado,
                            'reccategory' : this.categoriaSelecionada,
                            'recway'      : this.formaPagamentoSelecionada,
                            'recdate'     : this.dataSelecionada,
                        })
                    .then(dados => {
                        if(dados.status == 201){
                            this.loadingPanel = false
                            this.$bvToast.toast('Sucesso', {
                                title: 'Cadastrado com sucesso!',
                                autoHideDelay: 5000,
                                variant: 'success',
                                solid: true
                            })
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
    #cadastroRecebimentos{
       
    }
</style>