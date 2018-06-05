<template>
    <div class="provide">
        <banner-url :url="bannerUrl"/>
        <div class="title">旅居养老</div>
        <ul class="nav-list">
            <li @click="clickNavFun(0)">
                <router-link to="/provide">
                    <img :src=navList[index][0] alt="">
                </router-link>
            </li>
            <li @click="clickNavFun(1)">
                <router-link to="/provide/server">
                    <img :src=navList[index][1] alt="">
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
  import bannerUrl from '../../components/banner/banner.vue'
  import myPages from '../../components/pages/pages.vue'
  import $ from 'jquery'

  export default {
    data () {
      return {
        index:0,
        bannerUrl: require('../../../static/image/provide/banner_03.png'),
        navList: [
          [
            require('../../../static/image/provide/ju_03.png'),
            require('../../../static/image/provide/ju_04.png'),
          ],
          [
            require('../../../static/image/provide/ju_003.png'),
            require('../../../static/image/provide/ju_004.png'),
          ]
        ],
        dataList: [
          {
            name: '海南',
            src: require('../../../static/image/provide/tu1.png'),
            path: '/'
          },
          {
            name: '乐山',
            src: require('../../../static/image/provide/tu2.png'),
            path: '/'
          },
          {
            name: '天悦湾',
            src: require('../../../static/image/provide/tu3.png'),
            path: '/'
          }
        ]
      }
    },
    mounted () {

      $('body,html').scrollTop(0);

      this.index=sessionStorage.indexNav || 0;

    },
    created () {},
    mixins: [],
    components: {
      bannerUrl,
      myPages
    },
    props: [],
    methods: {
      clickNavFun(i){
          this.index = i;
          sessionStorage.setItem('indexNav',i);
      }
    }
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
            width: 350px;
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
    }
</style>
