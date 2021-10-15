<template id="panel">
  <div>
    <b-overlay :show='loading'>
      <slot>
      </slot>
    </b-overlay>
  </div>
</template>

<script>
    export default {
        name: 'panel',

        components: {
        },

        data: () => ({
        }),

        props:{
          loading:{
            type: Boolean,
            default: false,
          }
        },
        methods: {
        }
    };
</script>

<style lang="scss">
    #panel{
        padding: 5px;
        background: #000;
    }
</style>