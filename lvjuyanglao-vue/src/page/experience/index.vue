<template>
    <div id="app">
      <banner-url :url="bannerUrl"/>

      <router-view></router-view>
    </div>
</template>


<script>
  import bannerUrl from '../../components/banner/banner.vue'
  import $ from 'jquery'

  export default {
    data(){
      return{
        bannerUrl: require('../../../static/image/experience/banner.png'),
      }
    },
    mounted(){
      $('body,html').scrollTop(0);
    },
    components: {
      bannerUrl,
    },
  }
</script>


<style scoped>

</style>
