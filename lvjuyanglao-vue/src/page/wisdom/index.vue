<template>
    <div class="wisdom">
        <side-menu />
        <router-view></router-view>
    </div>
</template>

<script>
  import sideMenu from './sideMenu.vue';
  import $ from 'jquery'

  export default {
    data () {
      return {}
    },
    mounted () {
      $('body,html').scrollTop(0);
    },
    created () {},
    mixins: [],
    components: {
      sideMenu
    },
    props: [],
    methods: {}
  }
</script>

<style lang="scss">

</style>
