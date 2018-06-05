<template>
    <div id="app">
      <div class="content">
        <iframe :src="url" :height="height" scrolling="no">

        </iframe>
      </div>
    </div>
</template>


<script>
  import $ from 'jquery'
  export default {
    data(){
      return{
        url:this.$route.query.href,
        height:this.$route.query.height
      }
    },
    mounted () {

      $.ajaxPrefilter(function (options) {
        // if (options.crossDomain && jQuery.support.cors) {
        if (options.crossDomain) {
          var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
//          options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
          //options.url = "http://cors.corsproxy.io/url=" + options.url;
        }
      });

      var share_link = this.url ;//微信文章地址

      $.get(
        share_link,
        function (response) {
          console.log("> ", response);
          var html = response;
          html = html.replace(/data-src/g, "src");
          var html_src = 'data:text/html;charset=utf-8,' + html;
          $("iframe").attr("src", html_src);
        }
      );
    }
  }
</script>


<style scoped>
  .content{
    width: 100%;
    border: none;
  }
  .content iframe{
    width: 100%;
    outline: none;
    border: none;
   }
</style>
