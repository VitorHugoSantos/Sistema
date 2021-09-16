<template>
	<div id="agenda" class="nopadding">
        <div>
            <selectAll 
                :options='optionsTeste'
                @changeSelect="selecionados"/>
        </div>
        <div id="app">
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
    import selectAll from '@/components/SelectAll.vue'
	export default {
		name: 'agenda',
        components: {
			CalendarView,
			CalendarViewHeader,
            selectAll,
		},

		data: function() {
			return { 
                showDate: new Date(),
                objt:[
                {
                    id: '2',
                    title: 'Event',
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
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		color: #2c3e50;
		height: 67vh;
		width: 90vw;
		margin-left: auto;
		margin-right: auto;

	}
    // Calendario
    .cv-wrapper{
        // Cabeçalho
        .cv-header{
            text-align: right;
            .cv-header-nav{
                width: 35%;
                .previousYear{
                    display: none;
                }
                .previousPeriod{
                }
                .nextPeriod{
                }
                .nextYear{
                    display: none;
                }
                .currentPeriod{
                }
            }
            .periodLabel{
                display: block;
                text-align: center;
            }
        }
        //Dias da semana
        .cv-header-days{
            .cv-header-day{
                border-radius: 5px;
                background: #f0f0f0;
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
                        // Número do dia
                        .cv-day-number{
                            font-weight: bold;
                        }
                    }
                    // Item do dia
                    .cv-item{
                        margin-left: 10px;
                        width: 80px;
                        height: 60px;
                    }
                }
            }
        }
    }
</style>