<template>
    <div class="header">
        <div class="logo"></div>
        <div class="header-name">{{headerName}}</div>
        <div class="nav-icon" @click="navToggleFun" v-bind:class="{ active: isActive }"></div>
        <ul id="nav" class="nav-list" v-bind:class="{ active: isActive }">
            <li v-for="(item,index) in navList" :key="index" @click="navToggleFun">
              <router-link v-bind:to="{path:item.path}">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  import $ from 'jquery';

  export default {

    data () {
      return {
        headerName: '爱游天下 旅居全球',
        isActive:false,
        navList:[
          {
            path: '/home',
            name: '首页',
            isActive:true
          },
          {
            path: '/dynamic',
            name: '五福动态',
            isActive:false
          },
          {
            path: '/experience',
            name: '旅居体验',
            isActive:false
          },
          {
            path: '/provide',
            name: '旅居养老',
            isActive:false
          },
          {
            path: '/wisdom',
            name: '智慧养老',
            isActive:false
          },
          {
            path: '/understand',
            name: '了解五福',
            isActive:false
          }
        ]
      }
    },
    mounted(){
      let _this=this;
      $(document).click(function(event){
        var _con = $('.header');  // 设置目标区域
        if(!_con.is(event.target) && _con.has(event.target).length === 0){
//          $('#nav').slideUp('slow');  //滑动消失
//          $('#nav').hide(1000);     //淡出消失
          _this.active=false;
        }
      });
    },
    methods: {
      navToggleFun: function () {
        this.isActive = !this.isActive;
      }
    }
  }
</script>

<style lang="scss">
    .router-link-exact-active , .router-link-active{
      color: #f24501;
    }
    .header {
        width: 100%;
        background-color: #fff;
        padding: 22px 0 18px 0;
        border-bottom: 1px solid #e1e1e1;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        .logo {
            width: 202px;
            height: 51px;
            background-image: url("/static/image/index/logo.png");
            background-size: cover;
            margin-left: 35px;
        }
        .header-name {
            font-size: 30px;
            color: #555;
            position: absolute;
            left: 276px;
            top: 30px;
        }
        .nav-icon {
            width: 40px;
            height: 24px;
            background-image: url("/static/image/index/nav-icon.png");
            background-size: cover;
            position: absolute;
            right: 21px;
            top: 39px;
            transition:all 0.5s ease-in-out;
            &.active {
                transform: rotate(90deg);
                transition:all 0.5s ease-in-out;
            }
        }
        .nav-list{
            position: absolute;
            width: 100%;
            left: 0;
            top:89px;
            z-index: 2;
            background-color: #fff;
            display: none;
            &.active{
                display: block;
            }
            li{
                width: 100%;
                height: 60px;
                line-height: 60px;
                text-align: center;
                font-size: 28px;
              a{
                display: inline-block;
                width: 100%;
                height: 100%;
              }
            }
        }

    }
</style>
