<template>
    <div id="ButtonSimpleCadastro" class="row" align="right">
        <div class="red mr-2">
            <b-button 
                :type='type'
                @click="clickButtonCancelar">Cancelar</b-button>
        </div>
        <div class="green ml-2">
            <b-button
                :type='type' 
                @click="clickButtonSalvar">Salvar</b-button>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
          valorInput: '',
      }
    },

    props:{
        type:{
            type: String,
            default: 'text'
        }
    },

    methods:{
        clickButtonCancelar(){
            console.log('A')
            this.$emit('clickButtonCancelar')
        },

        clickButtonSalvar(){
            console.log('B')
            this.$emit('clickButtonSalvar')
        }
    },
  }
</script>
<style lang="scss">
    #ButtonSimpleCadastro{
        width: 300px;
        .btn-secondary:focus{
            box-shadow: none;
        }
        .red{
            .btn{
                border-radius: 0px;
                width: 100px;
                height: 30px;
                background: red;
                padding: 0px;
                font-size: 14px;
            }
        }
        .green{
            .btn{
                border-radius: 0px;
                width: 100px;
                height: 30px;
                background: green;
                padding: 0px;
                font-size: 14px;
            }
        }
    }
</style>