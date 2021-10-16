<template>
    <panel id="cadastroAgendamento" :loading='loadingPanel'>
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
                        @clickButtonSalvar  ='salvarAgendamento'
                        @clickButtonCancelar="cancelar"
                        :disabled="$v.$invalid"/>
                </div>
            </div>
            <div><hr></div>
            <div class="col-sm-12 row pr-0" align='left'>
                <div class="col-sm-3 pr-0">
                    <selectAll 
                        descricao='Cliente*'
                        placeholder='Digite aqui'
                        :options='optiosCliente'
                        @changeSelect ='changeCliente'/>
                </div>
                <div class="col-sm-3 pr-0">
                    <selectAll 
                        descricao='Comprimento do cabelo*'
                        placeholder='Digite aqui'
                        :options='optiosComprimentoCabelo'
                        @changeSelect ='changeComprimentoCabelo'/>
                </div>
                <div class="col-sm-3 pr-0">
                    <selectAll 
                        descricao='Tipo de penteado*'
                        placeholder='Digite aqui'
                        :options='optionsTipoPenteado'
                        @changeSelect ='changeTipoPenteado'/>
                </div>
                <div class="col-sm-3 pr-0">
                    <inputDataSimples 
                        titulo='Data do penteado*'
                        :value='dataNovoPentedo'
                        @changeData='changeDataPenteado'/>
                </div>
            </div>
            <div class="col-sm-12 row pr-0 mt-2" align='left'>
                <div class="col-sm-3 pr-0">
                    <inputSimple 
                        text='Hora do penteado*'
                        type='time'
                        placeholder='Digite aqui'
                        @changeInput='changeHoraPenteado'/>
                </div>
                <div class="col-sm-3 pr-0">
                    <inputSimple 
                        text='Tempo deslocamento*'
                        type='time'
                        placeholder='Digite aqui'
                        @changeInput='changeTempoDeslocamento'/>
                </div>
                <div class="col-sm-3 pr-0">
                    <inputSimple 
                        text='Tempo serviço*'
                        type='time'
                        placeholder='Digite aqui'
                        @changeInput='changeTempoServico'/>
                </div>
                <div class="col-sm-3 pr-0">
                    <inputSimple 
                        text='Hora do evento*'
                        type='time'
                        placeholder='Digite aqui'
                        @changeInput='changeHoraEvento'/>
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
                            placeholder='Digite aqui'
                            @changeInput ='changeNomeCliente'/>
                    </div>
                    <div class="col-sm-6">
                        <inputSimple 
                            text='Número telefone'
                            type='number'
                            placeholder='Digite aqui'
                            @changeInput ='changeNumeroTelefone'/>
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
    import axios from 'axios'
    // import VueSweetalert2 from 'vue-sweetalert2';
    import Swal from 'sweetalert2'
    import { DateTime } from "luxon"
    import { required } from 'vuelidate/lib/validators'
	export default {
		name: 'agendamento',
        components: {
            panel,
            inputSimple,
            buttonCadastro,
            selectAll,
            inputDataSimples,
            buttonSimple,
		},

        validations: {
            cliente:{
                required,
            },

            comprimentoCabelo:{
                required,
            },

            tipoPenteado:{
                required,
            },

            horaPenteado:{
                required,
            },

            tempoDeslocamento:{
                required,
            },

            tempoServiço:{
                required,
            },

            horaEvento:{
                required,
            },
        },

		data(){
			return { 
                optiosCliente : [],
                optiosComprimentoCabelo:[{ name: 'Curto', value: 'C' },{ name: 'Medio', value: 'M' },{ name: 'Longo', value: 'L' }],
                optionsTipoPenteado:[
                        { name: 'Escova', value: 'E' },
                        { name: 'Cachos', value: 'C' },
                        { name: 'Sem preso', value: 'SP'},
                        { name: 'Rabos', value: 'R'},
                        { name: 'Coques', value: 'CQ'},
                        { name: 'Noivas', value: 'N'},
                        ],
                optionsAcessorios:[],
                testePenteado : false,
                acessorios    : false,
                show          : false,
                nomeCliente   : '',
                numeroCliente : '',
                loadingPanel  : false,

                //dados salvar
                comprimentoCabelo : [],
                cliente           : [],
                tipoPenteado      : [],
                dataPenteado      : [],
                horaPenteado      : '',
                tempoDeslocamento : '',
                tempoServiço      : '',
                horaEvento        : '',
                dataTestePenteado : [],
                tempoTeste        : '',
                horaTeste         : '',
                dataNovoPentedo   : '',
            }
		},

		methods: {
            changeCliente(cliente){
                this.cliente = cliente
            },

            changeComprimentoCabelo(comprimento){
                this.comprimentoCabelo = comprimento
            },

            changeTipoPenteado(tipo){
                this.tipoPenteado = tipo
            },

            changeDataPenteado(data){
                this.dataPenteado = data
            },

            changeHoraPenteado(hora){
                this.horaPenteado = hora
            },

            changeTempoDeslocamento(tempo){
                this.tempoDeslocamento = tempo
            },

            changeTempoServico(tempo){
                this.tempoServiço = tempo
            },

            changeHoraEvento(hora){
                this.horaEvento = hora
            },

            salvarAgendamento(){
                this.loadingPanel = true
                var objt = {
                    'haicliente'   : this.cliente,
                    'haisize'      : this.comprimentoCabelo,
                    'haitype'      : this.tipoPenteado,
                    'haieventtime' : this.horaEvento,
                    'haidistime'   : this.tempoDeslocamento,
                    'haiexetime'   : this.tempoServiço,
                    'haistatus'    : false,
                    'haicancelDesc' : '',
                    'haitest'       : this.testePenteado,
                    'dataPenteado'  : this.dataPenteado,
                    'horaPenteado'  : this.horaPenteado,
                    'dataTeste'     : this.dataTestePenteado,
                    'tempoTeste'    : this.tempoTeste,
                    'horaTeste'     : this.horaTeste,
                }
                axios.post('http://localhost:8000/api/cadastro/agendamento/salvar', objt)
                    .then(dados => {
                        if(dados.status == 201){
                            this.loadingPanel = false
                            this.$router.push({ name: 'agendamento' })
                        } else if(dados.status == 202){
                            this.loadingPanel = false
                            Swal.fire({
                                title: 'Oops..',
                                text: dados.data.message,
                                icon: 'warning',
                            })
                        }else {
                            this.loadingPanel = false
                            Swal.fire({
                                title: 'Oops...',
                                text: 'Algo deu errado, tente novamente mais tarde',
                                icon: 'error',
                            })
                        }
                    });
            },

            cancelar(){
                this.$router.push({ name: 'agendamento' })
            },

            buscaCliente(){
                this.loadingPanel = true
                axios.post('http://localhost:8000/api/cadastro/agendamento/busca/cliente')
                    .then(dados => {
                        this.optiosCliente = dados.data.dados
                        this.loadingPanel = false
                    });
            },

            buscaAcessorios(){
                this.loadingPanel = true
                axios.post('http://localhost:8000/api/cadastro/agendamento/busca/acessorios')
                    .then(dados => {
                        this.optionsAcessorios = dados.data.dados
                        this.loadingPanel = false
                    });
            },

            // modal
            changeNomeCliente(nome){
                this.nomeCliente = nome
            },

            changeNumeroTelefone(numero){
                this.numeroCliente = numero
            },

            salvarCliente(){
                this.loadingPanel = true
                axios.post('http://localhost:8000/api/cadastro/agendamento/salvar/cliente', 
                    {'cliname':this.nomeCliente, 'cliphone':this.numeroCliente})
                    .then(dados => {
                        if(dados.status == 201){
                            this.loadingPanel = false
                            this.buscaCliente()
                        } else {
                            this.loadingPanel = false
                            Swal.fire({
                                title: 'Oops...',
                                text: 'Algo deu errado, tente novamente mais tarde',
                                icon: 'error',
                            })
                        }
                    });
            },
		},

        mounted(){
            if(this.$route.params.data != undefined){
                var data = DateTime.fromJSDate(
                                        this.$route.params.data).toFormat('dd/LL/yyyy')
                this.dataNovoPentedo = data
                this.dataPenteado    = data
            }
            this.buscaCliente()
            this.buscaAcessorios()
        }
	}
</script>
<style lang="scss">
    #cadastroAgendamento{
       
    }
</style>