<template>
    <div class="experience">
        <div class="title">旅居体验</div>
        <list-array :data="listArray"/>
    </div>
</template>

<script>
  import listArray from './List.vue'

  export default {
    data () {
      return {
        listArray: [
          {
            title: '重庆-成都 四天三夜体验游',
            tig: '四天三晚体验游，畅玩成都 ',
            text: '【四川成都基地】--天回镇和谐之家位于四川省成都市天回镇银杏园社区4组。它环境优美、风格优雅、交通便利，是一家集食宿、休闲、娱乐、康疗于一体的四星级酒店式精品养老公寓。',
            src: require('../../../static/image/experience/tu1.png'),
            list: [
              {
                text: '1、环境优美-空气清新'
              },
              {
                text: '2、高雅旅居-舒适自然'
              },
              {
                text: '3、高端大气-别具一格'
              },
              {
                text: '4、高雅住宿-舒适自然'
              }
            ]
          }
        ]
      }
    },
    mounted () {

    },
    created () {},
    mixins: [],
    components: {
      listArray
    },
    props: [],
    methods: {}
  }
</script>

<style lang="scss">
.experience{
    &>.title{
        font-size: 26px;
        color: #FEFEFE;
        text-align: center;
        line-height: 60px;
        height: 60px;
        background-color: #1280DD;
    }
}
</style>
