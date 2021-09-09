<template>
    <div id="inputSimple">
        <div>
            {{text}}
        </div>
        <div>
            <b-input 
                :type="type"
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
            default: ''
        }
    },

    methods:{
        changeInput(value){
            console.log('A', value)
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
            }

        }
    }
</style>