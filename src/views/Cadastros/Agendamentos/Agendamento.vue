<template>
    <panel id="cadastroAgendamento">
        <div class="m-4">
            <div class="col-sm-12 row p-0 ml-3">
                <div class="titulo col-sm-5 pl-0">
                    Cadastrar Agendamento
                </div>
                <div class="col-sm-3">
                    <buttonSimple
                        style="width:100%;"
                        text="Cadastrar cliente"
                        v-b-modal.my-modal>
                    </buttonSimple>
                </div>
                <div class="col-sm-4 pr-0" align="right">
                    <buttonCadastro
                        @clickButtonCancelar="cancelar" />
                </div>
            </div>
            <div><hr></div>
            <div class="col-sm-12 row pr-0" align='left'>
                <div class="col-sm-3 pr-0">
                    <selectAll 
                        descricao='Cliente*'
                        placeholder='Digite aqui'
                        :options='optiosComprimentoCabelo'/>
                </div>
                <div class="col-sm-3 pr-0">
                    <selectAll 
                        descricao='Comprimento do cabelo*'
                        placeholder='Digite aqui'
                        :options='optiosComprimentoCabelo'/>
                </div>
                <div class="col-sm-3 pr-0">
                    <selectAll 
                        descricao='Tipo de penteado*'
                        placeholder='Digite aqui'
                        :options='optionsTipoPenteado'/>
                </div>
                <div class="col-sm-3 pr-0">
                    <inputDataSimples 
                        titulo='Data e hora do penteado*'/>
                </div>
            </div>
            <div class="col-sm-12 row pr-0 mt-2" align='left'>
                <div class="col-sm-3 pr-0">
                    <inputSimple 
                        text='Tempo deslocamento*'
                        type='time'
                        placeholder='Digite aqui'/>
                </div>
                <div class="col-sm-3 pr-0">
                    <inputSimple 
                        text='Tempo serviço*'
                        type='time'
                        placeholder='Digite aqui'/>
                </div>
                <div class="col-sm-3 pr-0">
                    <inputSimple 
                        text='Hora do evento*'
                        type='time'
                        placeholder='Digite aqui'/>
                </div>
            </div>
            <div class="col-sm-12 row pl-0 mt-2">
                <div class="col-sm-3 pl-0">
                    <b-form-checkbox
                        id="testePenteado"
                        v-model="testePenteado">
                        Teste penteado
                    </b-form-checkbox>
                </div>
                <div class="col-sm-1">
                    <b-form-checkbox
                        id="acessorios"
                        v-model="acessorios">
                        Acessórios
                    </b-form-checkbox>
                </div>
            </div>
            <div class="col-sm-12 row pl-0">
                <div class="col-sm-3">
                    <div v-show="testePenteado" 
                        class="col-sm-12">
                        <inputDataSimples 
                            titulo='Data e hora do teste de penteado'/>
                    </div>
                    <div v-show="testePenteado" 
                        class="col-sm-12">
                        <inputSimple 
                            text='Tempo estimado'
                            type='time'
                            placeholder='Digite aqui'/>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div v-show="acessorios" 
                        class="col-sm-12 pl-0">
                        <selectAll 
                            descricao='Acessórios'
                            placeholder='Digite aqui'
                            :options='optionsAcessorios'/>
                    </div>
                    <div v-show="acessorios" 
                        class="col-sm-12 pl-0">
                        <inputDataSimples 
                            titulo='Data da devolução'/>
                    </div>
                </div>
            </div>
            <div><hr></div>
            (*) Campos obrigatórios
        </div>
        <div>
            <b-modal 
                id="my-modal"
                v-model="show"
                title="Cadastrar cliente"
                @ok="salvarCliente">
                <div class="col-sm-12 row">
                    <div class="col-sm-6">
                        <inputSimple 
                            text='Nome cliente'
                            type='text'
                            placeholder='Digite aqui'/>
                    </div>
                    <div class="col-sm-6">
                        <inputSimple 
                            text='Número telefone'
                            type='number'
                            placeholder='Digite aqui'/>
                    </div>
                </div>
            </b-modal>
        </div>

    </panel>
</template>
<script>
    import panel from '@/components/Panel/Panel.vue'
    import inputSimple from '@/components/Input/InputSimple.vue'
    import buttonCadastro from '@/components/Button/ButtonCadastros.vue'
    import selectAll from '@/components/Select/SelectAll.vue'
    import inputDataSimples from '@/components/Data/InputDataSimples.vue'
    import buttonSimple from '@/components/Button/ButtonSimple.vue'
	export default {
		name: 'agenda',
        components: {
            panel,
            inputSimple,
            buttonCadastro,
            selectAll,
            inputDataSimples,
            buttonSimple,
		},

		data(){
			return { 
                optiosComprimentoCabelo:[{ name: 'Curto', value: '1' },{ name: 'Longo', value: '2' },],
                optionsTipoPenteado:[{ name: 'Tipo 1', value: '1' },{ name: 'Tipo 2', value: '2' },],
                optionsAcessorios:[{ name: 'Acessório 1', value: '1' },{ name: 'Acessório 2', value: '2' },],
                testePenteado : false,
                acessorios    : false,
                show          : false,
            }
		},

		methods: {

            cancelar(){
                this.$router.push({ name: 'agendamento' })
            },

            salvarCliente(){
                this.show = false
            }
		}
	}
</script>
<style lang="scss">
    #cadastroAgendamento{
       
    }
</style>