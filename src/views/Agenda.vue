<template>
	<div id="agendamento" class="m-4">
        <div class="titulo">
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
</template>
<script>
    import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
    // import panel from '@/components/Panel.vue'
	export default {
		name: 'agenda',
        components: {
			CalendarView,
			CalendarViewHeader,
            // panel,
		},

		data: function() {
			return { 
                showDate: new Date(),
                objt:[
                {
                    id: '2',
                    title: 'Raísa <p> Penteado',
                    startDate: new Date(),
                },
                ],
                optionsTeste:[
                    { name: 'Vue.js', value: '1' },
                    { name: 'Rails', value: '2' },
                    { name: 'Sinatra', value: '3' },
                    { name: 'Laravel', value: '4', $isDisabled: true },
                    { name: 'Phoenix', value: '5' }
                ]
            }
		},

		methods: {
			setShowDate(d) {
				this.showDate = d;
			},

            novoAgendamento(data){
                console.log(data)
            },

            itemCalendario(item){
                console.log(item)
            },

            //Método para trocar a data do evento arrastando, 
            // é passado a data que é recebida do calendario para a prop startDate do objeto do calendario
            onDrop(item, date){
                console.log('objt', this.objt[0].startDate, 'item', date)
                this.objt[0].startDate = date
            },

            selecionados(selecionados){
                console.log(selecionados)
            }
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