
<template>
    <div id="MoPaging">
      <ul class="mo-paging">

        <!-- first -->
        <li
          :class="['paging-item', 'paging-item--first', {'paging-item--disabled' : index === 1}]"
          @click="first">首页</li>

        <!-- prev -->
        <li
          :class="['paging-item', 'paging-item--prev', {'paging-item--disabled' : index === 1}]"
          @click="prev">上一页</li>

        <li
          :class="['paging-item', 'paging-item--more']"
          v-if="showPrevMore">...</li>

        <li
          :class="['paging-item', {'paging-item--current' : index === pager}]"
          v-for="pager in pagers"
          @click="go(pager)">{{ pager }}</li>

        <li
          :class="['paging-item', 'paging-item--more']"
          v-if="showNextMore">...</li>

        <!-- next -->
        <li
          :class="['paging-item', 'paging-item--next', {'paging-item--disabled' : index === pages}]"
          @click="next">下一页</li>

        <!-- last -->
        <li
          :class="['paging-item', 'paging-item--last', {'paging-item--disabled' : index === pages}]"
          @click="last">尾页</li>

      </ul>
    </div>
</template>


<script>
 export  default {
   name : 'MoPaging',
   //通过props来接受从父组件传递过来的值
   props : {

     //页面中的可见页码，其他的以...替代, 必须是奇数
     perPages : {
       type : Number,
       default : 5
     },

     //当前页码
     pageIndex : {
       type : Number,
       default : 1
     },

     //每页显示条数
     pageSize : {
       type : Number,
       default : 10
     },

     //总记录数
     total : {
       type : Number,
       default : 1
     },

   },
   methods : {
     prev(){
       if (this.index > 1) {
         this.go(this.index - 1)
       }
     },
     next(){
       if (this.index < this.pages) {
         this.go(this.index + 1)
       }
     },
     first(){
       if (this.index !== 1) {
         this.go(1)
       }
     },
     last(){
       if (this.index != this.pages) {
         this.go(this.pages)
       }
     },
     go (page) {
       if (this.index !== page) {
         this.index = page
         //父组件通过change方法来接受当前的页码
         this.$emit('change', this.index)
       }
     }
   },
   computed : {

     //计算总页码
     pages(){
       return Math.ceil(this.size / this.limit)
     },

     //计算页码，当count等变化时自动计算
     pagers () {
       const array = []
       const perPages = this.perPages
       const pageCount = this.pages
       let current = this.index
       const _offset = (perPages - 1) / 2


       const offset = {
         start : current - _offset,
         end   : current + _offset
       }

       //-1, 3
       if (offset.start < 1) {
         offset.end = offset.end + (1 - offset.start)
         offset.start = 1
       }
       if (offset.end > pageCount) {
         offset.start = offset.start - (offset.end - pageCount)
         offset.end = pageCount
       }
       if (offset.start < 1) offset.start = 1

       this.showPrevMore = (offset.start > 1)
       this.showNextMore = (offset.end < pageCount)

       for (let i = offset.start; i <= offset.end; i++) {
         array.push(i)
       }

       return array
     }
   },
   data () {
     return {
       index : this.pageIndex, //当前页码
       limit : this.pageSize, //每页显示条数
       size : this.total || 1, //总记录数
       showPrevMore : false,
       showNextMore : false
     }
   },
   watch : {
     pageIndex(val) {
       this.index = val || 1
     },
     pageSize(val) {
       this.limit = val || 10
     },
     total(val) {
       this.size = val || 1
     }
   }
 }
</script>


<style lang="scss" scoped>
  #MoPaging{
    width: 100%;
    overflow: hidden;
    margin: 16px 0;
    background: #ffffff;
  }
  .mo-paging {
    display: block;
    text-align: center;
    padding: 0;
    font-size: 0;
    list-style: none;
    user-select: none;
  > .paging-item {
    display: inline;
    font-size: 20px;
    position: relative;
    padding: 4px 10px;
    line-height: 1.42857143;
    text-decoration: none;
    /*border: 1px solid #ccc;*/
    background-color: #fff;
    margin: 0 5px 0 0;
    cursor: pointer;
    color: #666666;
  &:first-child {
     margin-left: 0;
   }
  &:hover {
     background-color: #ffffff;
     color: #f24501;
   }
  &.paging-item--disabled,
  &.paging-item--more{
     background-color: #fff;
     color: #cccccc;
   }
        &.paging-item--disabled {
      cursor: not-allowed;
      opacity: .75;
    }
  &.paging-item--more,
  &.paging-item--current {
     cursor: default;
   }
    &.paging-item--current {
      background-color: #ffffff;
      color:#f24501;
      position: relative;
      z-index: 1;
      border-color: #ffffff;
    }
  }
  }
</style>
