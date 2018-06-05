<template>
    <div class="sideMenu">
        <div class="sideCont">
            <div class="side side1">
                <div class="side2">
                    <img id="sideImg" @click="menuControl" :src=serviceUrl alt=""/>
                </div>
            </div>
            <ul class="side" id="sideNav">

              <li v-for="(item,i) in linkArray" @click="navActive(i)" :class="cur == i ? 'side_active' : ''">
                <router-link :to="{name:item.path,params:{curIndex:i}}">{{item.name}}</router-link>
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    data () {
      return {
        cur:0,
        serviceUrl:require('../../../static/image/product/service01.png'),
        linkArray:[
          {
            name:'居家养老平台',
            path:'wisdom'
          },
          {
            name:'机构养老平台',
            path:'mechanism'
          },
          {
            name:'老人评估系统',
            path:'elderAssessment'
          },
          {
            name:'多功能数字阅读',
            path:'numberRead'
          }
        ]
      }
    },
    mounted () {

      this.cur=this.$route.params.curIndex || sessionStorage.isCur || 0;

      $(document).click(function(event){
        var _con = $('.sideMenu');  // 设置目标区域
        if(!_con.is(event.target) && _con.has(event.target).length === 0){
          $(".sideCont").removeClass("activeSide");
        }
      });

      $(".section1").on('click',function (e) {
        $(".sideCont").removeClass("activeSide");
      })

      $(".header").on('click',function (e) {
        $(".sideCont").removeClass("activeSide");
      })
    },
    created () {},
    mixins: [],
    components: {},
    props: [],
    methods: {
      menuControl(){
        if($(".sideCont").css("margin-right")=="0px"||$(".sideCont").css("margin-right")==0){
          $(".sideCont").removeClass("activeSide");
        }else $(".sideCont").addClass("activeSide");
      },
      navActive(i){
        this.cur=i;
        sessionStorage.setItem('isCur', i);
        $(".sideCont").removeClass("activeSide");
      }
    },
    watch: {
      '$route' (to, from) {
       let curIndex = this.$route.params.curIndex
        sessionStorage.setItem('isCur', curIndex);
      }
    }

  }
</script>

<style lang="scss">
    body{
        margin: 0;
        padding: 0;
    }
    .sideMenu{
        position: fixed;
        right: 0;
        height: 100%;
        z-index: 99;
    }
    .sideCont{
        width: 200px;
        height: 100%;
        overflow: hidden;
        margin-right: -200px;
        transition: 0.1s;
        -webkit-transition: 0.1s;
        -moz-transition:0.1s ;
    }
    .side{
        float: left;
        position: relative;
    }
    .side1{
        width: 80px;
        height: 80px;
        color: #000;
        overflow: hidden;
        position: absolute;
        left: -50px;
        top:50%;
        margin-top: -40px;
    }
    .side2{
        width: 100%;
        height: 100%;
        border-radius: 40px;
        background: rgba(51,51,51,.9);
        text-indent: 10px;
    }
    .side1 img{
        width: 40px;
        height: 40px;
        display: inline;
        position: relative;
        top:20px;
    }
    .sideMenu ul{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: rgba(51,51,51,.9);
    }
    .sideMenu ul li {
        list-style: none;
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        color: #fff;
        text-align: center;
        padding: 20px 0;
    }
    .sideMenu ul li:nth-child(1){
        margin-top: 200px;
    }
    .sideMenu ul li span{
        display: inline-block;
    }
    .sideMenu ul li a{
        display: inline-block;
        font-size: 25px;
        color: #fff;
    }
    .activeSide {
        margin-right: 0 !important;
        transition: 0.1s;
        -webkit-transition: 0.1s;
        -moz-transition: 0.1s;
    }
    .side_active a{
        color: #f24501 !important;
    }
</style>
