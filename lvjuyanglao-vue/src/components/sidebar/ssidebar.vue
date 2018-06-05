<template>
    <div class="sidebar">
      <div class="public_ewm" @click="codeShow()" id="public_ewm">
        <img src="../../../static/image/index/ewm.png" alt="">
      </div>
      <div class="public_back" v-show="isShow" @click.stop="codeHide()" id="public_back">
        <div class="public_fff" @click="codeAlertHide()">
          <div class="public_dy">
            <div>
              <img src="../../../static/image/index/dingyue.jpg" alt="">
            </div>
            <span>订阅号</span>
          </div>
          <div class="public_fw">
            <div>
              <img src="../../../static/image/index/fuwu.jpg" alt="">
            </div>
            <span>服务号</span>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
  import $ from 'jquery'
  export default {
    data(){
      return{
        isShow:false
      }
    },
    mounted(){
      let  _this=this;
      $(".public_fff div").on('click',function () {
        _this.isShow=true;
      })
    },
    methods:{
      codeShow(){
        this.isShow=true;
      },
      codeHide(){
        this.isShow=false;
      },
      codeAlertHide(){
        this.isShow=true;
      }
    }
  }
</script>


<style lang="scss" scoped>
  .public_ewm{
    width: 56px;
    height: 56px;
    /*background: url("../../../static/image/index/ewm.png")no-repeat ;*/
    background-color: #fff;
    /*-webkit-background-size: 100% 100%;*/
    /*background-size: 100% 100%;*/
    position: fixed;
    right: 10px;
    bottom: 200px;
    z-index: 99;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .public_back{
    background: rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  }

  .public_fff{
    width: 80%;
    height: 320px;
    border-radius: 3px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -160px 0 0 -40%;
  }
  .public_dy{
    width: 50%;
    float: left;
    text-align: center;
  }
  .public_dy div{
    width: 240px;
    height: 240px;
    margin: 20px auto 0;
    /*background:url("../../../static/image/index/dingyue.jpg") no-repeat;*/
    /*-webkit-background-size: 100% 100%;*/
    /*background-size: 100% 100%;*/
    img{
      width: 100%;
      height: 100%;
    }
  }
  .public_fw{
    width: 50%;
    float: left;
  }
  .public_fw div{
    width: 240px;
    height: 240px;
    margin: 20px auto 0;
    /*background:url("../../../static/image/index/fuwu.jpg") no-repeat;*/
    /*-webkit-background-size: 100% 100%;*/
    /*background-size: 100% 100%;*/
    img{
      width: 100%;
      height: 100%;
    }
  }
  .public_fff span{
    font-size: 20px;
    text-align: center;
    color: #4a4a4a;
    display: block;
    margin-top: 10px;
  }
</style>
