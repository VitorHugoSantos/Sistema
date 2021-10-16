<template>
    <panel>
        <div id="extrato" class="m-4">
            <div class="titulo ml-3">
                Extrato
            </div>
            <div class="col-sm-4">
                <inputDataPeriodo 
                    @changeData='changeData'/>
            </div>
            <div class="col-sm-12"><hr></div>
            <div class="col-sm-12 table">
                <table>
                    <header>
                        <tr>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th>Observação</th>
                            <th>Valor</th>
                        </tr>
                    </header>
                    <body>
                        <template v-for='(entrada, e) in dadosRelatorio.entrada'>
                            <tr :key="e">
                                <td>{{entrada.recdate}}</td>
                                <td>{{entrada.recway == 'P' ? 'Penteados' : 'Acessórios'}}</td>
                                <td>Observação</td>
                                <td>{{entrada.recamount}}</td>
                            </tr>
                        </template>
                        <template v-for='(saida, s) in dadosRelatorio.saida'>
                            <tr :key="s">
                                <td>{{saida.paydate}}</td>
                                <td>{{saida.descricao}}</td>
                                <td>Observação</td>
                                <td>{{saida.valor}}</td>
                            </tr>
                        </template>
                        <template>
                            <tr>
                                <td>{{dadosRelatorio.saldo}}</td>
                            </tr>
                        </template>
                    </body>
                </table>
            </div>
        </div>
    </panel>
</template>
<script>
    import panel from '@/components/Panel/Panel.vue'
    import axios from 'axios'
    import inputDataPeriodo from '@/components/Data/InputDataPeriodo'
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
            }
		},

		methods: {

            changeData(data){
                this.dataSelecionada = data
                console.log(this.dataSelecionada)
                this.gerarRelatorio()
            },

			gerarRelatorio(){
                axios.post('http://localhost:8000/api/relatorio/extrato/gerar/relatorio',
                        {
                            'data'   : this.dataSelecionada,
                        })
                    .then(dados => {
                        this.dadosRelatorio = dados.data.dados
                        console.log(dados)
                    });
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
                    tr{
                        width: 100% !important;
                    }
                }
            }
        }
    }
</style>