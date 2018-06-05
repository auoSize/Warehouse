<template>
    <div class="numberRead">
      <!--start 多功能数字阅读系统-->
      <div class="section_overflow">

        <!--多数字阅读功能-->
        <div class="section1">
          <div class="section_center">
            <div class="section_top_title">
              <h2>多数字阅读功能系统</h2>
              <p>为老年人提供丰富多样的期刊、杂志、图书、听书等正版数字资源，适老化的设计便于老人用户操作。老人还可自助查询打印近期体检报告，健康情况实时掌握。老人还可通过此系统自助观看电视、电影、综艺节目、戏曲歌舞等。</p>
            </div>
            <div class="section-title">
              <div>
                <img src="../../../static/image/serviceNumberRead/A.png" alt=""/>
              </div>
              <div class="section-title-text">数字阅读</div>
            </div>
            <div class="section-content">
              <img src="../../../static/image/serviceNumberRead/block1.png" alt=""/>
            </div>
            <div class="section-footer-text">
              为用户提供内容丰富的正版期刊杂志、图书、听书等资源，根据老人身体情况、使用习惯进行设计，方便易用，能够满足老年人多元化的精神文化需求。
            </div>
          </div>
        </div>
        <!--多数字阅读功能-->

        <!--健康档案查询-->
        <div class="section section2">
          <div class="section_center">
            <div class="section-title section-title2">
              <div>
                <img src="../../../static/image/serviceNumberRead/B.png" alt=""/>
              </div>
              <div class="section-title-text">健康档案查询</div>
            </div>
            <div class="section-content">
              <img src="../../../static/image/serviceNumberRead/block2.png" alt=""/>
            </div>
            <div class="section-footer-text section-footer-text2">
              用户可在快速自助查询健康体检报告、定期打印健康体检报告，随时掌握身体健康情况。</div>
          </div>
        </div>
        <!--健康档案查询-->

        <!--影视娱乐-->
        <div class="section section3">
          <div class="section_center">
            <div class="section-title">
              <div>
                <img src="../../../static/image/serviceNumberRead/C.png" alt=""/>
              </div>
              <div class="section-title-text">影视娱乐</div>
            </div>
            <div class="section-content">
              <img src="../../../static/image/serviceNumberRead/block3.png" alt=""/>
            </div>
            <div class="section-footer-text">
              用户可自助观看电影、电视剧、综艺节目等，丰富老年人生活娱乐活动。
            </div>
          </div>
        </div>
        <!--影视娱乐-->
      </div>

      <!--end 多功能数字阅读系统-->
    </div>
</template>


<script>
  import $ from 'jquery'

  export default {
    data(){
      return{}
    },
    mounted(){
      $('body,html').scrollTop(0);

    },

  }
</script>


<style scoped>
  @import "/static/css/serviceNumberRead.css";
</style>
