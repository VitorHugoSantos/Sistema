<template>
    <div id="inputSimple">
        <div>
            {{text}}
        </div>
        <div>
            <b-input 
                :type="type"
                :placeholder='placeholder'
                @change="changeInput">
            </b-input>
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
        value:{
            type: [String, Number],
            default: ''
        },

        text:{
            type: String,
            default: 'Texto do input',
        },

        type:{
            type: String,
            default: 'text'
        },

        placeholder:{
            type: String,
            default: ''
        }
    },

    methods:{
        changeInput(value){
            this.$emit('changeInput', value)
        }
    },
  }
</script>
<style lang="scss">
    #inputSimple{
        div{
            text-align: left;
            .form-control{
                border-radius: 0px !important;
                background: none;
                height: 40px;
            }

        }
    }
</style>