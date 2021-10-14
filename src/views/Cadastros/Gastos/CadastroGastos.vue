<template>
    <panel id="cadastroGastos">
        <div class="m-4">
            <div class="col-sm-12 row p-0 ml-3">
                <div class="titulo col-sm-8 pl-0">
                    Cadastrar gastos
                </div>
                <div class="col-sm-4 pr-0" align="right">
                    <buttonCadastro
                        @clickButtonSalvar   ="salvarGasto"
                        @clickButtonCancelar ="cancelar" />
                </div>
            </div>
            <div><hr></div>
            <div class="col-sm-12 row pr-0">
                <div class="col-sm-3">
                    <selectAll 
                        descricao='Tipo de gasto*'
                        placeholder='Digite aqui'
                        :options='optionsGasto'
                        @changeSelect ='changeTipoGasto'/>
                </div>
                <div class="col-sm-3">
                    <inputSimple 
                        text='Descrição do gasto'
                        placeholder='Digite aqui'
                        @changeInput='changeDescricao'/>
                </div>
                <div class="col-sm-3">
                    <inputSimple 
                        text='Valor*'
                        type='number'
                        placeholder='Digite aqui'
                        @changeInput='changeValor'/>
                </div>
                <div class="col-sm-3">
                    <inputDataSimples 
                        titulo='Data*'
                        @changeData='changeData'/>
                </div>
                <div class="col-sm-3 mt-2">
                    <selectAll 
                        descricao='Forma de pagamento*'
                        placeholder='Digite aqui'
                        :options='optionsPagamento'
                        @changeSelect ='changeFormaPagamento'/>
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
    import inputDataSimples from '@/components/Data/InputDataSimples.vue'
    import inputSimple from '@/components/Input/InputSimple.vue'
    import axios from 'axios'
	export default {
		name: 'agenda',
        components: {
            panel,
            buttonCadastro,
            selectAll,
            inputDataSimples,
            inputSimple,
		},

		data: function() {
			return { 
                optionsGasto      :[
                    { name: 'Acessórios', value: 'A' },
                    { name: 'Brindes', value: 'B' },
                    { name: 'Cursos', value: 'C' },
                    { name: 'Equipamentos', value: 'E' },
                    { name: 'Gasto fixo', value: 'GF' },
                    { name: 'Manutenção', value: 'M' },
                    { name: 'Produtos', value: 'P' },
                    ],
                optionsPagamento  :[{ name: 'Cartão', value: 'C' },
                    { name: 'Dinheiro', value: 'D' },
                    { name: 'Pix', value: 'P' },
                    { name: 'Outros', value: 'O' },],
                tipoGastoSelecionado      : [],
                descricaoSelecionada      : '',
                valorSelecionado          : '',
                dataSelecionada           : [],
                formaPagamentoSelecionada : []
            }
		},

		methods: {

            changeTipoGasto(gasto){
                this.tipoGastoSelecionado = gasto
            },

            changeDescricao(descricao){
                this.descricaoSelecionada = descricao
            },

            changeValor(valor){
                this.valorSelecionado = valor
            },

            changeData(data){
                this.dataSelecionada = data
            },

            changeFormaPagamento(pagamento){
                this.formaPagamentoSelecionada = pagamento
            },

            salvarGasto(){
                axios.post('http://localhost:8000/api/cadastro/gastos/salvar',
                        {
                            'payamont'     :this.valorSelecionado,
                            'paycategory' :this.tipoGastoSelecionado,
                            'payway'      :this.formaPagamentoSelecionada,
                            'paydescr'    :this.descricaoSelecionada,
                            'paydate'     :this.dataSelecionada,
                            
                        })
                    .then(dados => {
                        console.log(dados)
                    });
            },

            cancelar(){
                this.$router.push({ name: 'agendamento' })
            }
		}
	}
</script>
<style lang="scss">
    #cadastroGastos{
       
    }
</style>