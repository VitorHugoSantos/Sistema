<template>
    <div id="ButtonSimple">
        <div style="width:100%;">
            <b-button :style="'width:'+width" @click="clickButton">{{text}}</b-button>
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
        text:{
            type: String,
            required: true,
        },

        width:{
            type: String,
            default: '100%;'
        }
    },

    methods:{
        clickButton(){
            this.$emit('clickButton')
        }
    },
  }
</script>
<style lang="scss">
    #ButtonSimple{
        .btn{
            border-radius: 0px;
            width: 100px;
            height: 30px;
            background: green;
            padding: 0px;
            font-size: 14px;
        }
        .btn-secondary:focus{
            box-shadow: none;
        }
    }
</style>