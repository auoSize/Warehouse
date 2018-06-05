
<template>
    <div id="app">
      <bannerUrl :url="bannerUrl" />
      <div class="introduce">
        <div class="title">五福介绍</div>
        <div class="content">
          <div class="nav">
            <ul>
              <li :class="cur == i ? 'active' :''" v-for="(item,i) in introductionArray" @click="tabNav(i)">
                {{item.name}}
              </li>
            </ul>
          </div>
          <div class="text">
            <p v-for="val in introductionArray[cur].text">
              {{val}}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>


<script>

  import bannerUrl from '../../components/banner/banner.vue'
  import $ from 'jquery'
  export default {
    data(){
      return {
        cur: 0,
        bannerUrl: require('../../../static/image/understand/banner_02.png'),
        introductionArray: [
          {
            name:'文化来源',
            text:['五福——原出于《书经》和《洪范》。是古代汉族民间关于幸福观的五条标准。五福的第一福是"长寿"，第二福是"富贵"，第三福是"康宁"，第四福是"好德"，第五福是"善终"。 ',
              '"长寿"是命不夭折而且寿数绵长',
              '"富贵"是钱财富足而且地位尊贵',
              '"康宁"是身体健康而且内心安宁',
              '"好德"是心性仁善而且顺应自然',
              '"善终"是安详离世而且始终以礼',
              '以上是五福公司开办的宗旨，是指每一个通过五福得到帮助的人都能“长寿、富贵、康宁、好德、善终”'
            ]
          },
          {
            name:'愿景',
            text:['本着替天下儿女尽孝、为社会家庭分忧的核心价值观，打造五福成为养老行业的标杆企业']
          },
          {
            name:'使命',
            text:['为天下老人提供：快乐、健康、幸福、高品质的晚年生活']
          },
          {
            name:'服务理念',
            text:['孝善、感恩、诚信、责任、进取']
          }
        ]
      }
    },
    mounted(){
        $('body,html').scrollTop(0);
    },
    methods:{
      tabNav(index) {
        this.cur=index;
      }
    },
    components: {
      bannerUrl
    },
  }

</script>


<style lang="scss" scoped>
  .introduce{
    .title{
      width: 100%;
      height: 60px;
      background: #FF6501;
      line-height: 60px;
      text-align: center;
      font-size: 26px;
      color: #ffffff;
    }
    .content{
      width: 94%;
      margin: 0 auto;
      .nav {
        margin: 18px 0 66px;
        ul{
          width: 100%;
          display: flex;
          justify-content: space-around;
          li{
            float: left;
            line-height: 70px;
            text-align: center;
            width:140px;
            height:70px;
            -webkit-transform:skew(-20deg);
            -moz-transform:skew(-20deg);
            -o-transform:skew(-20deg);
            -ms-transform:skew(-20deg);
            transform:skew(-20deg);
            background:#ffffff;
            box-shadow:5px 5px 10px #BDBDBD;
            cursor: pointer;
            font-size: 24px;
            color: #666666;
            &.active{
              background:#FFB180;
            }
          }
        }
      }
      .text{
        font-size: 22px;
        color: #666666;
        margin-bottom: 230px;
      }
    }
  }
</style>
