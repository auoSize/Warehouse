<template>
    <div class="list-style">
        <ul>
            <li class="" v-for="(item,i) in data" :class="(i+1)%2==0?'even':null">
                <div class='con'>
                    <div class="title">{{item.title}} <img :src=icon alt=""/></div>
                    <div class='tig'>{{item.tig}}</div>
                    <div class="text">{{item.text}}</div>
                    <div class="num" v-for="(val,j) in item.list">{{val.text}}</div>

                    <router-link :to="{name:'experienceDetails',query:{Index:i}}" class="link">>>了解更多</router-link>
                </div>

                <img :src=item.src alt="" class='back'/>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        icon: require('../../../static/image/experience/tubiao.png')
      }
    },
    mounted () {

    },
    created () {},
    mixins: [],
    components: {},
    props: ['data'],
    methods: {

    }
  }
</script>

<style lang="scss">
    .list-style {
        li {
            padding: 15px 42px 33px;
            border: 1px solid #b4b4b4;
            position: relative;
            margin-bottom: 30px;
            &.even{
                .back{
                    position: static;
                    float: left;
                    margin-top: 15px;
                }
                .con{
                    float: right;
                }
                &:after{
                    content: '';
                    display: block;
                    clear: both;
                }
            }
        }
        .back {
            width: 300px;
            height: 200px;
            position: absolute;
            top: 30px;
            right: 42px;
        }
        .con {
            width: 320px;
            font-size: 22px;
            color: #666;
            .tig {
                padding: 5px 0;
            }
            .text {
                margin-bottom: 5px;
            }
            .num {
                margin-bottom: 5px;
            }
            .link {
                width: 100%;
                display: block;
                text-align: right;
                font-size: 18px;
            }
        }
        .title {
            font-size: 24px;
            color: #1280DD;
            position: relative;
            img {
                width: 14px;
                height: 16px;
                position: absolute;
                left: -20px;
                top: 8px;
            }
        }
    }
</style>
