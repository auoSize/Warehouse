<template>
    <div class="elderAssessment">
      <!--start 老人评估-->
      <div class="section_overflow">

        <div class="section1">
          <div class="section_center">
            <div class="section_top_title">
              <h2>老人评估系统</h2>
              <p>从四大方面为老年人进行综合能力评估，形成老年人生活自理能力报告，为老年人入院准备、日常照护、康复护理、健康管理等提供科学的依据，为政府、养老机构等提供精准的数据报告，合理规划养老服务资源。</p>
            </div>
            <div class="section1-cont">
              <ul>
                <li>
                  <div>
                    <img src="../../../static/image/serviceElder/icon1.png" alt=""/>
                  </div>
                  <div class="section1-two">
                    <p class="section1-p1">日常生活活动评估</p>
                    <p class="section1-p2">为老人进行日常生活活动评估，判断老人日常生活活动能力，形成日常生活活动评估报告。</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="../../../static/image/serviceElder/icon2.png" alt=""/>
                  </div>
                  <div class="section1-two">
                    <p class="section1-p1">精神状态评估</p>
                    <p class="section1-p2">为老人进行精神状态评估，判断老人精神状态情况，得出老人精神状态结论。</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="../../../static/image/serviceElder/icon3.png" alt=""/>
                  </div>
                  <div class="section1-two">
                    <p class="section1-p1">感知觉与沟通评估</p>
                    <p class="section1-p2">为老人进行感知觉与沟通评估，评估老人感觉、知觉、日常沟通等情况，形成感知觉与沟通评估结果。</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="../../../static/image/serviceElder/icon4.png" alt=""/>
                  </div>
                  <div class="section1-two">
                    <p class="section1-p1">社会参与评估</p>
                    <p class="section1-p2">为老人进行社会参与评估，通过老人社会活动、人际交往能力，判断老人社会参与能力情况。</p>
                  </div>
                </li>
              </ul>
              <div class="section1-brackets">
                <img src="../../../static/image/serviceElder/brackets.png" alt=""/>
              </div>
              <div class="section1-summary">
                <div>
                  <img src="../../../static/image/serviceElder/icon5.png" alt=""/>
                </div>
                <p class="section1-summary-title">综合评估报告</p>
                <p class="section1-summary-text">自动分析形成老人综合能力评估报告，亲属、养老机构、政府相关部门可根据此报告为老人合理配置养老资源。</p>
              </div>
              <div class="section1-footer">
                <img src="../../../static/image/serviceElder/computer.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end 老人评估-->

    </div>
</template>


<script>
  import $ from 'jquery'

  export default {
    data(){
      return{

      }
    },
    mounted (){
      $('body,html').scrollTop(0);

    },
    components: {

    },
  }
</script>


<style scoped>
  @import "/static/css/elderAssessment.css";
</style>
