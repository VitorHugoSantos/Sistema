<template>
    <panel :loading='loadingPanel'>
        <div id="extrato" class="m-4">
            <div class="titulo ml-3">
                Extrato
            </div>
            <div class="col-sm-4">
                <inputDataPeriodo 
                    @changeData='changeData'/>
            </div>
            <div class="col-sm-12"><hr></div>
            <div class="col-sm-12 table" v-if='dadosRelatorio.length == undefined'>
                <table>
                    <header>
                        <tr>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                        </tr>
                    </header>
                    <body>
                        <tr v-for='(entrada, e) in dadosRelatorio.entrada'
                            :key="e+'_entrada'"
                            class="entrada">
                            <td>{{transformaData(entrada.recdate)}}</td>
                            <td>{{entrada.recway == 'P' ? 'Penteados' : 'Acessórios'}}</td>
                            <td>R$ {{entrada.recamount}}</td>
                        </tr>
                        <tr v-for='(saida, s) in dadosRelatorio.saida'
                            :key="s+'_saida'"
                            class="saida">
                            <td>{{transformaData(saida.paydate)}}</td>
                            <td>{{saida.descricao}}</td>
                            <td>R$ {{saida.valor}}</td>
                        </tr>
                        <tr class="saldo">
                            <td>Saldo: {{dadosRelatorio.saldo}}</td>
                        </tr>
                    </body>
                </table>
            </div>
            <div v-else>
                <span>Selecione uma data para gerar</span>
            </div>
        </div>
    </panel>
</template>
<script>
    import panel from '@/components/Panel/Panel.vue'
    import axios from 'axios'
    import inputDataPeriodo from '@/components/Data/InputDataPeriodo'
    import { DateTime } from "luxon"
	export default {
		name: 'agenda',
        components: {
            panel,
            inputDataPeriodo,
		},

		data() {
			return { 
                optionsTeste:[
                    { name: 'Vue.js', value: '1' },
                    { name: 'Rails', value: '2' },
                    { name: 'Sinatra', value: '3' },
                    { name: 'Laravel', value: '4', $isDisabled: true },
                    { name: 'Phoenix', value: '5' }
                ],
                dataSelecionada: [],
                dadosRelatorio : [],
                loadingPanel   : false,
            }
		},

		methods: {

            changeData(data){
                this.dataSelecionada = data
                console.log(this.dataSelecionada)
                this.gerarRelatorio()
            },

			gerarRelatorio(){
                this.loadingPanel = true
                axios.post('http://localhost:8000/api/relatorio/extrato/gerar/relatorio',
                        {
                            'data'   : this.dataSelecionada,
                        })
                    .then(dados => {
                        this.dadosRelatorio = dados.data.dados
                        this.loadingPanel = false
                    });
            },

            transformaData(data){
                return DateTime.fromFormat(
                                        data, 'yyyy-LL-dd')
                                        .toFormat('dd/LL/yyyy')
            }
		},
	}
</script>
<style lang="scss">
    #extrato{
        .table{
            table{
                width: 100%;
                header{
                    background-color: #e6e6e6;
                    tr{
                        display: inline-block;
                        width: 100% !important;
                        th{
                            padding: 5px;
                            text-align: left;
                            width: 500px !important;
                        }
                    }
                }
                body{
                    overflow: auto;
                    font-size: 12px;
                    tr{
                        display: inline-block;
                        width: 100%;
                        td{
                            border-top: 1px solid #e6e6e6;
                            padding: 5px;
                            width: 500px !important;
                        }
                    }
                    .entrada{
                        background-color: #99ff99;
                    }
                    .saida{
                        background-color: #ff9999;
                    }
                    .saldo{
                        background-color: #ffffb3;
                    }
                }
            }
        }
    }
</style>