<template>
    <panel id="cadastroRecebimentos">
        <div class="m-4">
            <div class="col-sm-12 row p-0 ml-3">
                <div class="titulo col-sm-8 pl-0">
                    Cadastrar recebimentos
                </div>
                <div class="col-sm-4 pr-0" align="right">
                    <buttonCadastro
                        @clickButtonCancelar="cancelar" />
                </div>
            </div>
            <div><hr></div>
            <div class="col-sm-12 row pr-0">
                <div class="col-sm-3">
                    <selectAll 
                        descricao='Categoria*'
                        placeholder='Digite aqui'
                        :options='optionsCategorias'/>
                </div>
                <div class="col-sm-3">
                    <selectAll 
                        descricao='Forma de pagamento*'
                        placeholder='Digite aqui'
                        :options='optionsPagamento'/>
                </div>
                <div class="col-sm-3">
                    <inputDataSimples 
                        titulo='Data*'/>
                </div>
                <div class="col-sm-3">
                    <inputSimple 
                        text='Valor*'
                        type='number'
                        placeholder='Digite aqui'/>
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
                optionsCategorias :[{ name: 'Curto', value: '1' },{ name: 'Longo', value: '2' },],
                optionsPagamento  :[{ name: 'Cartão', value: '1' },{ name: 'Dinheiro', value: '2' },],
            }
		},

		methods: {

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