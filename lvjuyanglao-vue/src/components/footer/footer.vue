<template>
    <div class="footer">
        <ul class="list">
            <li v-for="(item,index) in FooterAddressList" :key="index">
                <div class="name">{{item.name}}</div>
                <div class="text">
                    <span>{{item.phone}}</span><span>{{item.yb}}</span><span>{{item.qq}}</span>
                </div>
                <div class="text">
                    <span>{{item.email}}</span><span>{{item.address}}</span>
                </div>

            </li>
        </ul>
        <div class="copyright">Copyright (c) 2017 五福云健康科技有限公司. All Rights Reserved 京ICP备15042027号-1 </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        FooterAddressList: [
          {
            name: '重庆公司',
            address: '地点：重庆市江北区北滨路368号金源时代广场6楼',
            phone: '电话：133-5033-0239 / 134-5214-8667',
            qq: 'QQ：393195362',
            yb: '邮编：400020',
            email: '邮箱：wf5fdl@163.com'
          },
          {
            name: '成都公司',
            address: '地点：成都市高新区天府大道中段1388号',
            phone: '电话：133-5033-0239',
            qq: 'QQ：393195362',
            yb: '邮编：610093',
            email: '邮箱：wf5fdl@163.com'
          },
          {
            name: '北京公司',
            address: '   地点：北京市丰台区莲花池东路126号9层',
            phone: '电话：134-5214-8667',
            qq: 'QQ：393195362',
            yb: ' 邮编：100071',
            email: '邮箱：wf5fdl@163.com'
          }
        ],
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
    .footer {
        background-color: #333;
        .list {
            color: #DEDEDE;
            li {
                border-bottom: 1px dashed #C1C1C1;
                .name {
                    font-size: 28px;
                    padding: 16px 0 24px 0;
                    text-align: center;
                }
                .text {
                    font-size: 20px;
                    text-align: center;
                    color: #C1C1C1;
                    padding-bottom: 5px;
                    span {
                        padding: 0 10px;
                    }
                }
            }

        }
        .copyright{
            font-size: 12px;
            color: #f8f8f8;
            height: 36px;
            text-align: center;
            line-height: 36px;
            background-color: #232323;
        }
    }
</style>
