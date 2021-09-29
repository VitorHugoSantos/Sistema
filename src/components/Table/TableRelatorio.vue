<template>
    <div id="tableRelatorio"
        class="row" align="right">
        <table>
            <header>
                <slot name="header"></slot>
            </header>
            <body>
                <slot name="body"></slot>
            </body>
        </table>
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
    },

    methods:{
    },
  }
</script>
<style lang="scss">
    #tableRelatorio{
    
    }
</style>