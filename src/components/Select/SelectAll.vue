/*
Componente do select
    Utilizando o Vue-multiselect https://vue-multiselect.js.org/#sub-getting-started
    Props
    options = Valores para aparecerem no select, Array, 
        Ex: [{ name: 'Vue.js', value: '1' },{ name: 'Rails', value: '2' },]
        Sempre tem que ser uma array com objetos dentro desta forma. 
        Name é detectado pelo label para saber qual deve ser mostrado e 
        value pelo track-by como se fosse um id.
    allow-empty = se o valor pode ser desmarcado ou não, Boolean, Ex: true.
    multiple = se o select é multiplo, Boolean, Ex: true.
*/

<template>
  <div id="select">
    {{descricao}}
    <multiselect 
        v-model          ="valoresSelecionados"
        placeholder      ="Selecione"
        track-by         ="value"
        label            ="name"
        select-label     ="V"
        deselectLabel    ="X"
        selectedLabel    ='V'
        :loading         ="loading"
        :options         ="options" 
        :close-on-select ="!multiple"
        :allow-empty     ="desmarcar"
        :multiple        ="multiple"
        :disabled        ='disabled'
        @input           ="changeOptions">
    </multiselect>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
      name:'selectAll',
    // OR register locally
    components: { Multiselect },
    data () {
      return {
          valoresSelecionados : null,
      }
    },

    props:{
        options:{
            type: Array,
            required: true,
        },

        multiple:{
            type: Boolean,
            default: false,
        },

        desmarcar:{
            type: Boolean,
            default: true,
        },

        loading:{
            type: Boolean,
            default: false,
        },

        disabled:{
            type: Boolean,
            default: false,
        },

        descricao:{
            type: String,
            default: "",
        }

    },

    methods: {
        changeOptions(selecionados){
            this.$emit('changeSelect', selecionados)
        }
    }
  }
</script>

<!-- New step!
     Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
#select{
    text-align: left;
    .multiselect{
        // ícone do select
        .multiselect__select{
        }

        // Select
        .multiselect__tags{
            border-radius: 0px;
            height: 40px;
            //Input de busca
            .multiselect__input{
            }
            .multiselect__single{
                font-size: 12px;
            }
        }

        //Div com as options
        .multiselect__content-wrapper{
            // Lista
            .multiselect__content{
                // Elemento da lista
                .multiselect__element{
                    //Span com a escrita
                    .multiselect__option{
                        font-size: 12px;
                    }
                    //Span com escrita com hover no icone
                    .multiselect__option--highlight::after{
                        background: #ededed;
                        color: #000;
                        font-weight: bold;
                    }
                    //Span com escrita com hover
                    .multiselect__option--highlight{
                        color: #000;
                        font-weight: bold;
                        background: #ededed;
                    }
                    .multiselect__option--selected{
                        background: #ededed;
                    }
                }

            }
        }
    }
}
</style>