<template id="panel">
  <div>
    <slot>
    </slot>
  </div>
</template>

<script>
    export default {
        name: 'panel',

        components: {
        },

        data: () => ({
        }),

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