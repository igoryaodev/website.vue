<template>
    <div class="news-wrap">
      <div class="news-header clearfix">
        <div class="news-latest pull-left">
          <div class="news-latest_title">{{$t('home.latest')}}</div>
          <div class="latest-news">
            <ul class="list-unstyled">
              <li v-for="(m,index) in newsList.list" :key="m.id" v-if="index<3">
                <router-link :to="{name: 'news-index',params:{id: m.id}}" v-if="isZh">{{m.title}}</router-link>
                <router-link :to="{name: 'news-index',params:{id: m.id}}" v-if="!isZh">{{m.title_En}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="news-date pull-left">
          <calendar-date :selected="select"></calendar-date>
        </div>
        <div class="open-time pull-left">
          <p class="open-hour">{{$t('home.openTime')}}</p>
          <p class="hour-info">10:00 - 18:30</p>
          <p class="weekday-info">{{$t('home.weekday')}}</p>
        </div>
      </div>
      <div class="news-content">
        <div class="news-content_title">{{$t('home.news1')}}</div>
        <div class="news-item_list">
          <div class="clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
            <news-item v-for="item in newsList.list" :key="item.id" :news="item"></news-item>
          </div>
          <p v-show="show" class="page-infinite-loading"></p>
        </div>
      </div>
      <div class="footer-split"></div>
      <creative-menu></creative-menu>
    </div>
</template>
<script>
import CalendarDate from '@/components/CalendarDate'
import CreativeMenu from '@/components/CreativeMenu'
import NewsItem from '@/views/news/NewsItem'
import { InfiniteScroll } from 'mint-ui'
import dateFns from 'date-fns'
import api from '@/api/api'

export default {
  name: 'news-list',
  data() {
    return {
      select: dateFns.format(new Date(), 'YYYY-MM-DD'),
      newsList: {
        list: [],
      },
      page: 1,
      pageSize: 10,
      loading: false,
      show: false,
    }
  },
  created() {
    // api.getNews({ page: 1, pageSize: 10 }).then((data) => {
    //   this.newsList = data
    // })
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  methods: {
    loadMore() {
      this.loading = true
      this.show = true
      setTimeout(() => {
        api.getNews(
          { pageSize: this.pageSize, page: this.page })
        .then((data) => {
          /* eslint no-param-reassign: "off" */
          data.list = this.newsList.list.concat(data.list)
          this.newsList = data
          this.page += 1
          if (this.page > data.totalPages) {
            this.loading = true
          } else {
            this.loading = false
          }
          this.show = false
        })
      }, 500)
    },
  },
  components: {
    CalendarDate,
    CreativeMenu,
    NewsItem,
    InfiniteScroll,
  },
}
</script>
<style lang="scss">
  .news-wrap {
    margin-top: 44px;
    .news-latest {
      width: 376px;
      .news-latest_title {
        color: #999;
        font-size: 12px;
      }
    }
    .news-date {
      width: 464px;
      .calendar {
        width: 240px;
        .calendar-weeks {
          >span {
            font-size: 13px;
            height: 16px;
            line-height: 16px;
          }
        }
      }
    }
    .open-time {
      width: 160px;
      text-align: right;
      >p {
        margin-bottom: 0;
      }
      .open-hour {
        color: #999;
        font-size: 12px;
      }
      .hour-info {
        font-size: 18px;
        color: #000;
        margin-top: 12px;
        font-family: "MetricSemibold","Microsoft Yahei","SimSun";
      }
      .weekday-info {
        line-height: 14px;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
  .news-header {
    padding-bottom: 30px;
    border-bottom: 1px solid #000;
  }
  .news-content {
    .news-content_title {
      font-size: 34px;
      color: #000;
      line-height: 36px;
      margin-top: 45px;
      font-family: "SimHei";
    }
    .news-item_list {
      margin-top: 30px;
    }
  }
  .latest-news {
    width: 90%;
    ul {
      margin-top: 10px;
      li {
        font-size: 12px;
        color: #000;
        font-family: "Microsoft Yahei","SimSun";
        line-height: 18px;
        a {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>


