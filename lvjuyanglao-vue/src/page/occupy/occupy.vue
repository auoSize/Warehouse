<template>
    <div class="occupy">
        <div class="title">居家养老服务</div>
        <div class="section">
            <div class="name">居家养老服务</div>
            <div class="text">五福云健康为退休老人们搭建了一个健康、安全、充满爱的活动中心——老吾老居家养老服务中心。活动中心有：健身区、书法区、麻将、电子阅览区、阅读区、手工区、品茶区、观影区还有身体检查测量等等，致力于为老年人提供一个休闲、娱乐、交流、活动的平台，努力实现老有所养、老有所医、老有所教、老有所学、老有所为、老有所乐。以“替天下儿女尽孝，为社会家庭分忧”为理念，为老人们带去关怀，让笑容常挂他们的脸上。</div>
        </div>
        <div class="swiper-container-content">
            <div class="swiper-container swiper-container-section">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in addressList">
                        <img :src=item.url alt="">
                        <div class="name">{{item.name}}</div>
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination "></div>
            </div>
            <div class="swiper-button-prev "></div>
            <div class="swiper-button-next "></div>
        </div>

    </div>
</template>

<script>
  import Swiper from 'swiper'
  import '../../style/swiper.min.css'
  export default {
    data () {
      return {}
    },
    mounted () {
      new Swiper('.swiper-container-section', {
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 20,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      })
    },
    created () {},
    mixins: [],
    components: {},
    props: [],
    methods: {}
  }
</script>

<style lang="scss">
.occupy{
    &>.title{
        font-size: 24px;
        color: #fff;
        text-align: center;
        line-height: 60px;
        height: 60px;
        background-color: #E94F06;
    }
    .section{
        background-color: #00a0e9;
        height: 340px;
        padding: 45px 20px 20px;
        .name{
            font-size: 36px;
            text-align: center;
            color: #F5F5F5;
            margin-bottom: 20px;
        }
        .text{
            font-size: 12px;
            color: #f5f5f5;
        }
    }
}
</style>