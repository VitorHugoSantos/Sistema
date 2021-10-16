<template>
    <panel>
        <div id="agendamento" class="m-4">
            <div class="titulo ml-3">
                Agendamentos
            </div>
            <div><hr></div>
            <div id="agenda" class="col-sm-12">
                <CalendarView
                    :show-date="showDate"
                    :items="objt"
                    :enable-drag-drop='true'
                    @click-date="novoAgendamento"
                    @click-item="itemCalendario"
                    @drop-on-date="onDrop">
                    <template #header="{ headerProps }">
                        <CalendarViewHeader
                            :header-props="headerProps"
                            @input="setShowDate" />
                    </template>
                </CalendarView>
            </div>
        </div>
    </panel>
</template>
<script>
    import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
    import panel from '@/components/Panel/Panel.vue'
    import axios from 'axios'
    // import VueSweetalert2 from 'vue-sweetalert2';
    import { DateTime } from "luxon"
    import Swal from 'sweetalert2'
	export default {
		name: 'agenda',
        components: {
			CalendarView,
			CalendarViewHeader,
            panel,
		},

		data: function() {
			return { 
                showDate: new Date(),
                objt:[],
            }
		},

		methods: {

            buscaAgendamentos(){
                axios.post('http://localhost:8000/api/agenda/busca/horarios')
                    .then(dados => {
                        if(dados.status == 200){
                            this.objt = dados.data.dados
                            for(var i = 0; i < this.objt.length; i++){
                                var data = DateTime.fromFormat(
                                        this.objt[i].startdate, 'yyyy-LL-dd HH:mm:ss').toJSDate()
                                var dataTitle = DateTime.fromFormat(
                                        this.objt[i].startdate, 'yyyy-LL-dd HH:mm:ss')
                                        .toFormat('HH:mm')
                                this.objt[i].startDate = data
                                this.objt[i].title = dataTitle+' - '+this.objt[i].title
                            }
                        } else {
                            Swal.fire({
                                title: 'Oops...',
                                text: 'Algo deu errado, tente novamente mais tarde',
                                icon: 'error',
                            })
                        }
                    });
            },

			setShowDate(d) {
				this.showDate = d;
			},

            novoAgendamento(data){
                this.$router.push({ name: 'cadastroAgendamentos', params: {data:data}})
            },

            itemCalendario(item){
                console.log(item)
            },

            //Método para trocar a data do evento arrastando, 
            // é passado a data que é recebida do calendario para a prop startDate do objeto do calendario
            onDrop(item, date){
                for(var i = 0; i < this.objt.length; i++){
                    if(this.objt[i].id == item.id){
                        console.log(this.objt[i], date)
                        var data = DateTime.fromJSDate(
                                                    date).toFormat('yyyy-LL-dd')
                        var hora = DateTime.fromFormat(
                                                    this.objt[i].startdate, 'yyyy-LL-dd HH:mm:ss')
                                                    .toFormat('HH:mm')
                        this.objt[i]['dataEdicao'] = data+' '+hora
                        var posicao = i
                        axios.post('http://localhost:8000/api/agenda/altera/horario',
                                    {'dado':this.objt[i]})
                            .then(dados => {
                                if(dados.status == 201){
                                    this.objt[posicao].startDate = date
                                    var data = DateTime.fromJSDate(
                                                    this.objt[posicao].startDate).toFormat('yyyy-LL-dd')
                                    var hora = DateTime.fromFormat(
                                                    this.objt[posicao].startdate, 'yyyy-LL-dd HH:mm:ss')
                                                    .toFormat('HH:mm')
                                    this.objt[posicao].startdate = data+' '+hora
                                } else if(dados.status == 202){
                                    Swal.fire({
                                        title: 'Oops..',
                                        text: dados.data.message,
                                        icon: 'warning',
                                    })
                                }
                            });
                    }
                }
            },

            selecionados(selecionados){
                console.log(selecionados)
            }
		},

        mounted(){
            this.buscaAgendamentos()
        }
	}
</script>
<style lang="scss">
    #agendamento{
        .titulo{
            font-size: 18px;
            text-align: left;
        }
        #agenda{
            height :  67vh;
            // Calendario
            .cv-wrapper{
                // Cabeçalho
                .cv-header{
                    background-color: #737373;
                    .cv-header-nav{
                        width: 10%;
                        text-align: left;
                        margin-left: 30px;
                        .previousYear{
                            display: none;
                        }
                        .previousPeriod{
                            background: transparent;
                            color: #004d1a;
                            border: none;
                            font-size: 20px;
                            padding: 0px;
                            margin-right: 20px;
                        }
                        .nextPeriod{
                            background: transparent;
                            color: #004d1a;
                            border: none;
                            font-size: 20px;
                            padding: 0px;
                            margin-left: 20px;
                        }
                        .nextYear{
                            display: none;
                        }
                        .currentPeriod{
                            display: none;
                        }
                    }
                    .periodLabel{
                        display: block;
                        text-align: left;
                        color: #004d1a;
                        font-size: 16px;
                    }
                }
                //Dias da semana
                .cv-header-days{
                    overflow-y: scroll;
                    .cv-header-day{
                        background-color: #999999;
                        color: #004d1a;
                    }
                }
                //Semana do calendario
                .cv-weeks{
                    .cv-week{
                        .cv-weekdays{
                            overflow-y: scroll;
                            text-align: center;
                            // Dia do calendario
                            .cv-day{
                                border-radius: 5px;
                                box-shadow: 5px 3px 3px #f0f0f0;
                                margin: 2px;
                                // Número do dia
                                .cv-day-number{
                                    color: #004d1a;
                                }
                            }
                            .cv-day:hover{
                                border-radius: 5px;
                                box-shadow: inset 10px 5px 5px #f0f0f0;
                                cursor: pointer;
                            }
                            // Item do dia
                            .cv-item{
                                border-radius: 5px;
                                margin-left: 5px;
                                margin-top: 6px;
                                width: 12%;
                                height: 50%;
                                font-size: 10px;
                            }
                            .cv-item:hover{
                                background-color: #f0f0f0;
                                cursor: grab;
                            }
                        }
                    }
                }
            }
        }
    }
</style>