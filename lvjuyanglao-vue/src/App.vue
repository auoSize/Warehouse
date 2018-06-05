<template>
    <div id="app">
        <my-header/>
        <router-view/>
        <my-footer/>
        <mySidebar/>
    </div>
</template>

<script>
  import './style/reset.css'
  import myHeader from './components/header/haeder.vue'
  import myFooter from './components/footer/footer.vue'
  import mySidebar from './components/sidebar/ssidebar.vue'


  export default {
    name: 'App',
    components: {
      myHeader,
      myFooter,
      mySidebar
    }
  }
</script>

<style lang="scss">

</style>
