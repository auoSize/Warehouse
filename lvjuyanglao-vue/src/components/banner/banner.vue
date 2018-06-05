<template>
    <div class="top-banner" :style="'background-image: url('+url+')'">   </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    mounted () {},
    created () {},
    mixins: [],
    components: {},
    props: ['url'],
    methods: {}
  }
</script>

<style lang="scss">
.top-banner{
    height: 153px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    margin-top:92px ;
}
</style>
