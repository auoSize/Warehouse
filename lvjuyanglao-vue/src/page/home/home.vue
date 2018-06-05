<template>
    <div class="home">
        <nav class="banner">
            <div class="swiper-container swiper-container-banner">
                <div class="swiper-wrapper">
                    <div class="swiper-slide " v-for="(item , index) in bannerList">
                        <img :src="item.url">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </nav>
        <div class="section section1">
            <div class="title">旅居基地</div>
            <div class="swiper-container-content">
                <div class="swiper-container swiper-container-section">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in addressList">
                          <!--<router-link :to={name:item.path,query:{href:item.href,height:item.height}}>-->
                            <!--<img :src=item.src alt="">-->
                            <!--<div class="name">{{item.name}}</div>-->
                          <!--</router-link> -->

                          <a :href="item.href">
                            <img :src=item.src alt="">
                            <div class="name">{{item.name}}</div>
                          </a>
                        </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination "></div>
                </div>
                <div class="swiper-button-prev "></div>
                <div class="swiper-button-next "></div>
            </div>
        </div>
        <div class="section2">
            <div class="center">
                <div class="title">重庆 成都</div>
                <div class="title title2">四天三夜 <br/>.体验游</div>
                <img :src="backSection" alt="" class="image">
                <div class="more">
                    <div class="icon"></div>
                    <router-link to="/experience"><span>更多体验游</span></router-link>
                </div>
            </div>
        </div>
        <div class="section3">
            <div class="name">旅居风采</div>
            <ul class="list">
                <li v-for="(item,index) in sectionList"><img :src=item.url alt=""></li>
            </ul>
        </div>
        <div class="section4">
            <div class="title">新闻动态</div>
            <ul class="list">
                <li v-for="(item,index) in newsList">
                  <div>
                    <router-link v-bind:to="{name:'dynamicDetails',query:{article_id:item.id}}">{{item.title}}</router-link>
                  </div>
                </li>
                <li>
                  <div>
                    <router-link to="/dynamic">>> 更多</router-link>
                  </div>
                </li>
            </ul>
        </div>
        <div class="section section5">
            <div class="title">智慧养老</div>
            <ul class="list">
                <li v-for="(item,i) in dataList" v-bind:style="{color:item.color,background:item.backColor}">
                    <router-link :to="{name:item.path,params:{curIndex:i}}">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import '../../style/swiper.min.css'
  import $ from 'jquery'
  import {getRecommend}from '../../service/getData'

  export default {
    data () {
      return {
        name: 'home页',
        backSection:require('../../../static/image/index/tu22_03.png'),
        bannerList: [
          {url: require('../../../static/image/index/banner.png')},
        ],
        addressList: [
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
        ],
        sectionList: [
          {url: require('../../../static/image/index/lvjufengcai1.png')},
          {url:require('../../../static/image/index/lvjufengcai2.png')},
          {url: require('../../../static/image/index/lvjufengcai3.png')},
          {url: require('../../../static/image/index/lvjufengcai4.png')},
        ],
        newsList: [
          {
            id:1,
            title: '重庆市人民政府办公厅 关于扶持发展社 '
          },
        ],
        dataList: [
          {
            title: '居家养老平台',
            color: '#fff',
            backColor: '#51b9bc',
            path: 'wisdom',
          },
          {
            title: '机构养老平台',
            color: '#fff',
            backColor: '#f56548',
            path: 'mechanism',
          },
          {
            title: '老年人评估系统',
            color: '#fff',
            backColor: '#ffc80a',
            path: 'elderAssessment',
          },
          {
            title: '多功能数字阅读系统',
            color: '#666',
            backColor: '#fff',
            path: 'numberRead',
          }
        ]
      }
    },
    mounted () {
      $('body,html').scrollTop(0);

      //初始化swiper
      new Swiper('.swiper-container-banner', {
        paginationClickable: true,
        loop: true,
        speed: 600,
        autoplay: 1500
      })
      new Swiper('.swiper-container-section', {
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 20,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      })

      getRecommend().then(res => {
        if (res.resp_code == 1) {
          this.goRender(res);
        }
      })

    },
    created () {},
    mixins: [],
    components: {},
    props: [],
    methods: {

      goRender(data) {
        let _this =this;

        let leftData = data.data.recommendArticle,
          rightData = data.data.rollnews1,
          rightData2 = data.data.rollnews2;
        let leftNewData = [], rightNewData = [];
        leftData.map((item, i) => {
          leftNewData.push({
            id: item.article_id,
            src: item.image,
            title: item.title,
            text: item.description,
            content: item.content
          })
        });

        rightData.map((item, i) => {
          rightNewData.push({
            id: item.article_id,
            title: item.title,
            description: item.description,
            time: item.create_time
          })
        });

        rightData2.map((item, i) => {
          if (i < 2) {
            rightNewData.push({
              title: item.title,
            })
          }
        });


        _this.newsList = rightNewData;

      }
    }
  }
</script>

<style lang="scss">
    .home {
        .banner {
            height: 300px;
            margin-top:92px;
            img {
                width: 100%;
                height: 100%;
            }
            .swiper-container {
                height: 100%;
            }
        }
        .section {
            .title {
                font-size: 26px;
                color: #555;
                padding: 27px 0 12px 0;
                text-align: center;
            }
        }
        .section1 {
            margin-bottom: 26px;
            .swiper-container-content {
                position: relative;
            }
            .swiper-slide {
                width: 208px !important;
                padding: 15px;
                margin-bottom: 1px;
                border: 1px solid #dcdbdb;
                .name {
                    font-size: 24px;
                    color: #009966;
                    padding-top: 19px;
                    text-align: center;
                }
                img {
                    width: 100%;
                    height: 208px;
                }
            }
            .swiper-container-section {
                width: 540px;
                margin: 0 auto;
                overflow: hidden;
                position: relative;
                left: 10px;
            }
            .swiper-button-prev {
                width: 23px;
                height: 38px;
                background-image: url("/static/image/index/prev.png");
                background-size: cover;
                margin-top: -19px;
                left: 27px;
            }
            .swiper-button-next {
                width: 23px;
                height: 38px;
                margin-top: -19px;
                right: 27px;
                background-image: url("/static/image/index/next.png");
                background-size: cover;
            }
        }
        .section2 {
            position: relative;
            height: 270px;
            .center {
                width: 620px;
                margin: 0 auto;
                height: 100%;
                position: relative;
              overflow: hidden;
                .title {
                    font-size: 20px;
                    color: #DDDDDD;
                    position: absolute;
                    width: 12px;
                    text-align: center;
                    top: 68px;
                    &.title2 {
                        top: 20px;
                        left: 24px;
                    }
                }
                .image {
                    width: 525px;
                    height: 249px;
                    position: absolute;
                    top: 10px;
                    left: 60px;
                    z-index: 2;
                }
                .more {
                    position: absolute;
                    right: 15px;
                    z-index: 2;
                    bottom: 0;
                    text-align: center;
                    .icon {
                        width: 8px;
                        height: 6px;
                        background-image: url("/static/image/index/dwon_03.png");
                        background-size: cover;
                        margin-bottom: 5px;
                        margin-left: 5px;
                    }
                    span {
                        display: inline-block;
                        font-size: 16px;
                        color: #038CEE;
                        width: 8px;
                        text-align: center;
                        line-height: 18px;
                    }
                }
            }
            &:before {
                position: absolute;
                content: '';
                width: 25%;
                left: 0;
                top: 0;
                height: 100%;
                background-color: #038bed;
            }
            &:after {
                position: absolute;
                right: 0;
                top: 0;
                content: '';
                width: 75%;
                height: 100%;
                background-color: #e1dfdf;
            }
        }
        .section3 {
            padding: 40px 78px 0;
            position: relative;
            height: 305px;
            .name {
                font-size: 26px;
                width: 25px;
                color: #555;
                position: relative;
                top: 60px;
                left: 40px;
                &:before {
                    height: 65px;
                    content: '';
                    display: block;
                    border-left: 2px solid #555;
                    position: absolute;
                    left: 50%;
                    margin-left: -1px;
                    top: -65px;
                }
                &:after {
                    height: 65px;
                    content: '';
                    display: block;
                    border-left: 2px solid #555;
                    position: absolute;
                    left: 50%;
                    margin-left: -1px;
                    bottom: -65px;
                }
            }
            .list {
                position: absolute;
                top: 40px;
                left: 185px;
                width: 420px;
                li {
                    width: 176px;
                    height: 117px;
                    margin: 0 48px 32px 0;
                    float: left;
                    &:nth-child(even) {
                        margin-right: 0;
                    }
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .section4 {
            padding-bottom: 25px;
            text-align: center;
            .title{
              font-size: 26px;
            }
            .list {
                width: 480px;
                margin: 0 auto;
                li {
                    width: 100%;
                    height: 40px;
                    background-color: #e5672c;
                    font-size: 24px;
                    line-height: 40px;
                    color: #fff;
                    text-align: left;
                    margin-bottom: 2px;
                  div{
                      width: 80%;
                      margin: 0 auto;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                    &:last-child {
                        text-align: right;
                        font-size: 18px;
                    }
                    a {
                        color: #fff;
                    }
                }
            }
        }
        .section5 {
            .list {
                width: 510px;
                margin: 0 auto 10px;
                li {
                    width: 235px;
                    height: 120px;
                    float: left;
                    border: 1px solid #93acac;
                    margin: 0 30px 16px 0;
                    box-shadow: 0 0 10px #333;
                    text-align: center;
                    line-height: 120px;
                    font-size: 22px;
                    color: #fff;
                    &:nth-child(even){
                        margin-right: 0;
                    }
                }
                &:after {
                    content: '';
                    display: block;
                    clear: both;
                }
            }
        }
    }
</style>
