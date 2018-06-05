<template>
    <div class="dynamic-details">
        <div class="content">
          <div class="title">{{title}}</div>
          <div class="cont-text" v-html="InnerHtml">
          </div>
        </div>
      <div class="loading-content"  v-show="isLoading">
        <load-animation />
      </div>
    </div>
</template>


<script>
  import $ from 'jquery'
  import {getArticleh} from '../../service/getData'
  import loading from './../../components/loading/loadNew.vue'

  export default {
    data(){
      return{
        title:'',
        InnerHtml:'',
        isLoading:true
      }
    },
    mounted(){
      $('body,html').scrollTop(0);

      let dataId = this.$route.query.article_id;
      console.log(dataId)
      let data = {
        id: dataId
      };

      getArticleh(data).then(res => {
        this.isLoading=true;
        if(res){
          this.goRender(res);
          this.isLoading=false;
        }
      })
    },
    updated(){
      $(".cont-text img").css({'width':'100%','height':'auto'})
      if( $(".cont-text img").parent().css('text-indent')){
        $(".cont-text img").parent().css({'text-indent':'initial','overflow':'hidden'})
      }
    },
    methods:{
      goRender(data) {
        let _this=this;
        console.log(data)
        let dataArticle = data.data.article;
        _this.title = dataArticle.title
        _this.InnerHtml = dataArticle.content
      }
    },
    components: {
      'load-animation':loading
    },
  }

</script>


<style lang="scss" scoped>
  .content {
    width: 95%;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    .title {
      color: #444444;
      font-size: 26px;
      text-align: center;
      margin: 20px 0;
      font-weight: bold;
    }
    img{
      max-width: 100%;
      max-height:100%;
      /*object-fit: cover;*/
    }
  }

  .loading-content{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #ffffff;
    z-index: 9999;
  }
</style>
