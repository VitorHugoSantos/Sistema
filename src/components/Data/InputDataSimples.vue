*/ Componente para datas simples
* Props:
*   1- titulo - Se quiser inserir um título no input - Ex: 'Data'
*   2- disabled - Se o componente vai estar desabilitado - Ex: 'true'
*
*
* Eventos:
*  1- change - Para passar a data para a página
*
*
* Informacoes:
*   1- Documentação do componente https://element.eleme.io/#/en-US/component/date-picker
*   2- v-model - Valor de ligação por onde o componente recebe e passa uma data
*   3- type - O tipo que ele será, data siples, de periodo, etc...
*   4- format - O formato que ele vai exibir a data
*   5- value-format - O formato que ele vai receber a data
*   6- clearable - Para retirar a opção de apagar uma data do input
*   7- change - Por onde emite o evento quando selecionado um dia 
*/

<template>
  <div class="block">
    <div class="col-sm-12 p-0">
      {{titulo}}
    </div>
    <div class="col-sm-12 p-0 dataSimple">
      <el-date-picker
        style="width:103%;"
        v-model="data"
        type="date"
        format="dd/MM/yyyy"
        value-format='dd/MM/yyyy'
        :disabled='disabled'
        :clearable='false'
        @change="changeData">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
    import { DateTime } from "luxon";
    export default {
        name:'InputDataPeriodo',
        data() {
            return {
                data: DateTime.now().toFormat('dd/MM/yyyy'),
            };
        },

        props:{
            titulo:{
                type: String,
                default: 'Data',
            },
            disabled:{
                type: Boolean,
                default: false,
            }
        },

        methods: {
            changeData(data){
                console.log(data)
                this.$emit('changeData', data);
            }
        }
    };
</script>
<style lang="scss">
  .block{
    div{
      text-align: left;
    }
  }
</style>