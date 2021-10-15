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
                @click="clickButtonSalvar"
                :disabled="disabled">Salvar</b-button>
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
        },
        disabled:{
            type: Boolean,
            default: false
        }
    },

    methods:{
        clickButtonCancelar(){
            this.$emit('clickButtonCancelar')
        },

        clickButtonSalvar(){
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
                background: #D76E6E;
                padding: 0px;
                font-size: 14px;
                border: 1px solid #D76E6E;
            }
        }
        .green{
            .btn{
                border-radius: 0px;
                width: 100px;
                height: 30px;
                background: #78B365;
                padding: 0px;
                font-size: 14px;
                border: 1px solid #78B365;
            }
        }
    }
</style>