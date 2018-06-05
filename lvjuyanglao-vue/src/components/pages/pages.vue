<template>
    <div class="pages">
        <ul class="pagination">
            <li>共 4 条信息 共 1 页 / </li>
            <li v-show="current != 1" @click="current-- && goto(current--)"><a href="#">上一页</a></li>
            <li>首页</li>
            <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" >
                {{index}}
            </li>
            <li>尾页</li>
            <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a href="#">下一页</a>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        current: 1,
        showItem: 9,
        allpage: 1,
        allCount:0,
        pages: [],
        cun:0,
      }
    },
    mounted () {
      this.pagesFun();
    },
    mixins: [],
    components: {},
    methods: {
      goto: function (index) {
        if (index == this.current) return
        this.current = index
        this.pagesFun();
        //这里可以发送ajax请求
      },
      pagesFun: function () {
        this.pages = []
        if (this.current < this.showItem) { //如果当前的激活的项 小于要显示的条数
          //总页数和要显示的条数那个大就显示多少条
          var i = Math.min(this.showItem, this.allpage)
          while (i) {
            this.pages.unshift(i--)
          }
        } else { //当前页数大于显示页数了
          var middle = this.current - Math.floor(this.showItem / 2),//从哪里开始
            i = this.showItem
          if (middle > (this.allpage - this.showItem)) {
            middle = (this.allpage - this.showItem) + 1
          }
          while (i--) {
            this.pages.push(middle++)
          }
        }
//        return pag
      },
    },
    watch:{

    }
  }
</script>

<style lang="scss">
    .pages {
        width: 100%;
        margin: 0 auto 15px;
        overflow: hidden;
    }
    .pagination {
        float: right;
        margin: 20px;
        position: relative;
        display: table;
        li{
            display: table-cell;
            font-size: 20px;
            color: #666;
            padding: 0 5px;
            a{
                font-size: 20px;
                color: #666;
            }
            &.active{
                color: #ea6425;
                a{
                    color: #ea6425;
                }
            }
        }
    }


</style>
