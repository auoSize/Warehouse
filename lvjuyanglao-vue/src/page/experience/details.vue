<template>
  <div class="list-style">
    <ul>
      <li class="" v-if="Index == i" v-for="(item,i) in listArray" :class="(i+1)%2==0?'even':null">
        <div class='con'>
          <div class="title">{{item.title}} <img :src=icon alt=""/></div>
          <div class='tig'>{{item.tig}}</div>
          <div class="text">{{item.text}}</div>
          <div class="num" v-for="(item,j) in item.list">{{item.text}}</div>

        </div>

        <img :src=item.src alt="" class='back'/>
      </li>
    </ul>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    data () {
      return {
        Index:0,
        icon: require('../../../static/image/experience/tubiao.png'),
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
          },
          {
            title: '重庆-成都 四天三夜体验游',
            tig: '四天三晚体验游，畅玩成都 ',
            text: '【四川成都基地】--天回镇和谐之家位于四川省成都市天回镇银杏园社区4组。它环境优美、风格优雅、交通便利，是一家集食宿、休闲、娱乐、康疗于一体的四星级酒店式精品养老公寓。',
            src: require('../../../static/image/experience/tu2.png'),
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
          },
          {
            title: '重庆-成都 四天三夜体验游',
            tig: '四天三晚体验游，畅玩成都 ',
            text: '【四川成都基地】--天回镇和谐之家位于四川省成都市天回镇银杏园社区4组。它环境优美、风格优雅、交通便利，是一家集食宿、休闲、娱乐、康疗于一体的四星级酒店式精品养老公寓。',
            src: require('../../../static/image/experience/tu3.png'),
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
      $('body,html').scrollTop(0);

      this.Index=this.$route.query.Index;

    },
    created () {

    },
    mixins: [],
    components: {},
    props: [],
    methods: {

    }
  }
</script>

<style lang="scss">
  .list-style {
    li {
      padding: 15px 42px 33px;
      border: 1px solid #b4b4b4;
      position: relative;
      margin-bottom: 30px;
      &.even{
        .back{
          position: static;
          float: left;
          margin-top: 15px;
        }
        .con{
          float: right;
        }
        &:after{
          content: '';
          display: block;
          clear: both;
        }
      }
    }
    .back {
      width: 289px;
      height: 194px;
      position: absolute;
      top: 30px;
      right: 42px;
    }
    .con {
      width: 320px;
      font-size: 20px;
      color: #666;
      .tig {
        padding: 5px 0;
      }
      .text {
        margin-bottom: 5px;
      }
      .num {
        margin-bottom: 5px;
      }
      .link {
        width: 100%;
        display: block;
        text-align: right;
      }
    }
    .title {
      font-size: 22px;
      color: #1280DD;
      position: relative;
      img {
        width: 14px;
        height: 16px;
        position: absolute;
        left: -20px;
        top: 8px;
      }
    }
  }
</style>
