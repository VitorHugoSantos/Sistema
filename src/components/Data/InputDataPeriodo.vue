*/ Componente para datas simples
* Props:
*   1- titulo - Se quiser inserir um título no input - Ex: 'Data'
*   2- disabled - Se o componente vai estar desabilitado - Ex: 'true'
*
*
* Eventos:
*  1- changeData - Para passar a data para a página
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
*   8- range-separator - Caracter que separa as datas de início e fim
*   9- picker-options - Atalhos que ficam na lateral do calendario
*/

<template>
  <div class="block">
    <div class="col-sm-12">
      Data
    </div>
    <div class="col-sm-12">
      <el-date-picker
        v-model="date"
        type="daterange"
        format="dd/MM/yyyy"
        value-format='dd/MM/yyyy'
        range-separator=" - "
        start-placeholder="Início"
        end-placeholder="Fim"
        :picker-options="pickerOptions"
        @change="changeData">
      </el-date-picker>
    </div>
  </div>
</template>
<script>
  import { DateTime } from "luxon"
  import pickerOptions from "./DatePicker.js"
  export default {
    name:'InputDataPeriodo',

    data() {
      return {
        date: [DateTime.now().toFormat('dd/MM/yyyy'),  DateTime.now().toFormat('dd/MM/yyyy')],
        pickerOptions: pickerOptions,
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
      changeData(date){
        this.$emit('changeData', date);
      }
    },
    
  };
</script>
<style lang="scss">
  .block{
    margin: 5px;
    div{
      text-align: left;
    }
  }
</style>