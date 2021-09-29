<template>
    <panel>
        <div id="extrato" class="m-4">
            <div class="titulo ml-3">
                Extrato
            </div>
            <div><hr></div>
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
                        <tr>
                            <td>Data</td>
                            <td>Descrição</td>
                            <td>Observação</td>
                            <td>Valor</td>
                        </tr>
                    </body>
                </table>
            </div>
        </div>
    </panel>
</template>
<script>
    import panel from '@/components/Panel/Panel.vue'
	export default {
		name: 'agenda',
        components: {
            panel,
		},

		data() {
			return { 
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
			
		}
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