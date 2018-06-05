<template>
    <div class="dynamic">
        <div class="title">五福动态</div>

        <ul class="nav-list">
            <li v-for="(item,index) in navList" @click="navClickFun(index)" :class="{active:index==indexNum}">
                {{item.name}}
            </li>
        </ul>

        <div v-show="loadShow" class="loading-show">
          <load-new />
        </div>

        <ul class="news-list">
            <li v-for="(item,index) in listArray">
              <router-link :to="{path:'/dynamic/details',query:{article_id:item.id}}">
                <div class="image"><img :src=item.src alt=""/></div>
                <div class="content">
                    <div class="title">{{item.title}}</div>
                    <div class="text">{{item.text}}</div>
                </div>
                <div class="time-style">
                    <div class="icon"><img
                            :src=newsIcon alt=""/></div>
                    <div class="time">{{item.time}}</div>
                </div>
              </router-link>
            </li>

        </ul>

      <new-pages
        :page-index="currentPage"
        :total="count"
        :page-size="pageSize"
        @change="pageChange">
      </new-pages>
    </div>
</template>

<script>
  import loadNew from '../../components/loading/loadNew.vue'
  import newPages from '../../components/pages/pageNew.vue'
  import {getNews} from  '../../service/getData'

  export default {
    data () {
      return {
        newsIcon: require('../../../static/image/dynamic/calendar_01.png'),
        indexNum: 0,
        navList: [
          {
            id: 6,
            name: '旅居动态'
          },
          {
            id: 7,
            name: '健康养老'
          },
          {
            id: 5,
            name: '养老政策'
          }
        ],
        listArray: [],
        newsCategory: {
          category_id: 6,
          page: 1,
          page_limit: 10
        },
        pageSize : 10 , //每页显示20条数据
        currentPage : 1, //当前页码
        count : 1, //总记录数
        loadShow:true
      }
    },
    mounted () {
      this.indexNum = sessionStorage.numIndex || 0;
      this.newsCategory.category_id=this.navList[this.indexNum].id;
      this.interfaceFun();
    },
    mixins: [],
    components: {
      'new-pages':newPages,
      'load-new':loadNew
    },
    methods: {
      //从page组件传递过来的当前page
      pageChange (page) {
        this.currentPage = page;
        this.newsCategory.page=page;
        this.interfaceFun();
      },
      navClickFun: function (i) {
        this.currentPage=1;
        this.newsCategory.page=1;
        this.indexNum = i;
        sessionStorage.setItem('numIndex',i);
        this.newsCategory.category_id = this.navList[i].id;
        this.interfaceFun();
      },
      //调用接口
      interfaceFun() {
        this.loadShow=true;
        this.listArray='';
        getNews(this.newsCategory).then(res => {
          if (res.resp_code == 1) {
            this.goRender(res);
            this.loadShow=false;
          }
        })
      },
      //右边数据
      goRender(data) {
        let dataList = data.data.article.list;
        let newTotalData = data.data.article.pageInfo;
        let newData = [];
        dataList.map((item, i) => {
          let data = {
            id: item.article_id,
            src: item.image,
            title: item.title,
            text: item.description,
            time: item.create_time,
            context: item.content
          }
          newData.push(data)
        });

       this.listArray = newData;

        this.count = newTotalData.allCount

      },
    }
  }
</script>

<style lang="scss">
    .dynamic {
        & > .title {
            font-size: 26px;
            color: #FEFEFE;
            text-align: center;
            line-height: 60px;
            height: 60px;
            background-color: #ea6425;
        }
        .nav-list {
            display: flex;
            width: 470px;
            margin: 18px auto 32px;
            li {
                flex: 1;
                font-size: 24px;
                text-align: center;
                height: 44px;
                line-height: 44px;
                &.active {
                    background-color: #ffb180;
                    color: #fff;
                }
            }
        }
        .news-list {
            width: 680px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            li {
                margin-bottom: 30px;
                position: relative;
                .image {
                    width: 200px;
                    height: 160px;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .content {
                    width: 360px;
                    position: absolute;
                    left: 220px;
                    top: 0;
                    color: #666;
                    .title {
                        font-size: 24px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        margin-bottom: 8px;
                        margin-top: 5px;
                    }
                    .text {
                        max-height:92px;
                        font-size: 22px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                    }
                }
                .time-style {
                    position: absolute;
                    right: 0;
                    top: 12px;
                    .icon {
                        width: 37px;
                        height: 34px;
                        margin: 0 auto;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .time {
                        font-size: 16px;
                        color: #666;
                        padding-top: 5px;
                    }
                }
            }
        }
        .loading-show{
          width: 100%;
          height: 400px;
        }
    }
</style>
