<template>
    <div class="provide">

        <ul class="data-list">
            <li v-for="(item,i) in dataList">
              <div class="data-list-content">
                <!--<router-link :to={name:item.path,query:{href:item.href,height:item.height}}>-->
                  <!--<img :src=item.src alt="">-->
                  <!--<div class="name">{{item.name}}</div>-->
                <!--</router-link> -->

                <a :href="item.href">
                  <img :src=item.src alt="">
                  <div class="name">{{item.name}}</div>
                </a>
              </div>
            </li>
        </ul>
        <my-pages />
    </div>
</template>

<script>
  import bannerUrl from '../../components/banner/banner.vue'
  import myPages from '../../components/pages/pages.vue'
  export default {
    data () {
      return {
        bannerUrl: require('../../../static/image/provide/banner_03.png'),
        navList: [
          require('../../../static/image/provide/ju_03.png'),
          require('../../../static/image/provide/ju_04.png'),
        ],
        dataList: [
          {
            name: '海南',
            src: require('../../../static/image/provide/tu1.png'),
            path:'provideDetails',
            href:'https://mp.weixin.qq.com/s/ZRfDBEISic9U_neEYM6-0g',
            height:'11954px'
          },
          {
            name: '乐山',
            src: require('../../../static/image/provide/tu2.png'),
            path:'provideDetails',
            href:'https://mp.weixin.qq.com/s/GGH6j7FzfxYA2ZhMsLgyvQ',
            height:'21213px'
          },
          {
            name: '天悦湾',
            src: require('../../../static/image/provide/tu3.png'),
            path:'provideDetails',
            href:'https://mp.weixin.qq.com/s/dDngoF_KcI7TKTJx64lb8g',
            height:'7541px'
          },{
            name: '杭州',
            src: require('../../../static/image/provide/tu4.jpg'),
            path:'provideDetails',
            href:'https://mp.weixin.qq.com/s/aeGgtUh8MQR799B605al4w',
            height:'5428px'
          }
        ]
      }
    },
    mounted () {

    },
    created () {},
    mixins: [],
    components: {
      bannerUrl,
      myPages
    },
    props: [],
    methods: {}
  }
</script>

<style lang="scss">
    .provide {
        & > .title {
            font-size: 26px;
            color: #00a0e9;
            text-align: center;
            line-height: 60px;
            height: 60px;
            background-color: #FBF5F5;
            box-shadow: 0 0 5px #666;
        }
        .nav-list {
            display: flex;
            width: 400px;
            margin: 10px auto 40px;
            li {
                flex: 1;
                position: relative;
                &:first-child {
                    left: 20px;
                }
                &:last-child {
                    right: 20px;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .data-list {
            width: 100%;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            li {
                float: left;
                width: 33.333%;
                border: none;
                padding: 0;
                margin: 0;
              .data-list-content {
                width: 176px;
                border: 1px solid #e0e0e0;
                padding: 10px;
                margin: 0 auto 24px;
                img {
                  width: 100%;
                  height: 176px;
                }
                .name {
                  font-size: 22px;
                  color: #009966;
                  text-align: center;
                  padding-top: 15px;
                }
              }
            }
        }
    }
</style>
