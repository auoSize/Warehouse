<template>
    <div class="service">
        <ul>
            <li>
                <div class="title">尊享爱旅会</div>
                <img :src=enjoyUrl alt="" class="image">
                <div class="text">
                    <div class="name">爱旅会九大特权</div>
                    <div class="text-list">1、贵宾厅休息 </div>
                    <div class="text-list">2、预约专车  </div>
                    <div class="text-list"> 3、代定机票、火车票  </div>
                    <div class="text-list"> 4、意外保险   </div>
                    <div class="text-list"> 5、基地入住体验1晚（四大自营基地之一）   </div>
                    <div class="text-list">6、专属路书（量身定制的旅居攻略）   </div>
                    <div class="text-list">7、终身免年费   </div>
                    <div class="text-list">8、专属理财   </div>
                    <div class="text-list">9、1990旅游基金   </div>
                </div>
            </li>
            <li>
                <img :src=serviceUrl alt="" class="image">
                <div class="text">
                    <div class="name">管家式服务</div>
                    <div class="text-list"> 为天下老人提供：快乐、健康、幸福、高品质的晚年生活快乐！ </div>
                    <div class="text-list"> 我们为您提供快乐活动、快乐学习、快乐节日、快乐亲情、快乐农耕、快乐湿地、快乐交友、快乐工作的快乐管家基础服务，助长者乐享精彩活力的第二人生。 </div>
                    <div class="text-list"> 我们为您提供舒适生活、智慧生活、无忧生活三大服务板块。为长者舒适地享受居家生活、安全地享受智慧生活、无忧地享受晚年生活，提供亲人般的服务。 </div>
                    <div class="text-list"> 我们为您提供健康管理、健康咨询、健康应急三大服务板块。配备顶尖的医疗设备、专业的医护人员，保障长者拥有健康的身体，快乐地享受活力晚年生活。 </div>

                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        enjoyUrl: require('../../../static/image/provide/tu1_03.png'),
        serviceUrl: require('../../../static/image/provide/tu2_02.png'),
      }
    },
    mounted () {

    },
    created () {},
    mixins: [],
    components: {},
    props: [],
    methods: {}
  }
</script>

<style lang="scss">
    .service {
        padding: 0 30px;
        li {
            &:nth-child(2) {
                margin-bottom: 70px;
                &:after{
                    display: block;
                    content: '';
                    clear: both;
                }

                .text{
                    width: 400px;
                    float: left;
                    .name{
                        font-size: 24px;
                        color: #444;
                        text-align: center;
                        margin-bottom: 10px;
                    }
                    .text-list{
                        color: #666;
                        font-size: 22px;
                    }
                }
                .image {
                    width: 240px;
                    float: right;
                    margin-top: 60px;
                    margin-right: 0;
                }
            }
            &:nth-child(1) {
                margin-bottom: 50px;
                .image {
                    width: 260px;
                    float: left;
                    margin-left: 20px;
                    margin-top: 60px;
                }
                .text{
                    width: 360px;
                    float: right;
                    .name{
                        font-size: 24px;
                        color: #CDA20B;
                        margin-bottom: 10px;
                    }
                    .text-list{
                        color: #D1B853;
                        font-size: 22px;
                    }
                }
                &:after{
                    display: block;
                    content: '';
                    clear: both;
                }
                .title {
                    font-size: 24px;
                    color: #444;
                    text-align: center;
                    margin-bottom: 27px;
                }
            }
        }
    }
</style>
