<template>
  <div class="exhibiton-wrap">
    <div class="common-title">{{$t('home.press')}}</div>
    <div class="h23"></div>
    <div class="date-select">
      <div class="clearfix date-hd">
        <div class="date-list clearfix">
          <a class="date-all" @click="search()" :class="{active: !$route.query.createTime}">{{$t('activity.all')}}</a>
          <ul class="date-year list-unstyled">
            <li v-for="t in timeLines" :key="t"><a @click="search(t)" :class="{active: $route.query.createTime}">{{t}}</a></li>
          </ul>
        </div>
        <div class="change-style">
         <!--  <span class="style-item style-list" :class="{'cur-list': !isActive}" @click="changeStyle"></span>
          <span class="style-item style-cube" :class="{'cur-list': isActive}" @click="changeStyle"></span> -->
        </div>
      </div>
      <div class="video-total" v-show="$root.$i18n.locale == 'zh-CN'">
        <span class="now-numbers">{{videos.list.length}}</span> 项搜索结果在 
        <span class="all-numbers">{{videos.totalRecords}}</span> 个新闻中
      </div>
      <div class="video-total" v-show="$root.$i18n.locale == 'en-US'">
        <span class="now-numbers">{{videos.list.length}}</span> Result(s)
      </div>
    </div>
    <div class="video-list clearfix">
	    <div
	      v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="1"
	    >
	      <media-item v-for="video in videos.list" :key="video.id" :video="video"></media-item>
	    </div>
      <p v-show="show" class="page-infinite-loading"></p>
    </div>
    <div class="footer-split"></div>
  </div>
</template>
<script>
import MediaItem from '@/views/media/MediaItem'
import api from '@/api/api'
import { InfiniteScroll } from 'mint-ui'
import dateFns from 'date-fns'

export default {
  name: 'media-all',
  data() {
    return {
      videos: {
        list: [],
      },
      totalPages: 1,
      page: 1,
      curLength: 0,
      totalRecords: 0,
      show: false,
      loading: false,
      timeLines: [],
    }
  },
  methods: {
    search(date) {
      if (date) {
        this.$router.push({ name: 'media-all', query: { createTime: dateFns.format(date, 'YYYY-MM-DD') } })
      } else {
        this.$router.push({ name: 'media-all' })
      }
      this.$router.go(0)
    },
    load() {
      api.getExhibition({ page: 1 }).then((data) => {
        this.videos = data
        this.curLength = data.list.length
        this.totalpages = data.totalPages
        this.totalRecords = data.totalRecords
      })
    },
    loadMore() {
      this.loading = true
      this.show = true
      api.getExhibition({ page: this.page, createTime: this.$route.query.createTime })
      .then((data) => {
        /* eslint no-param-reassign: "off" */
        data.list = this.videos.list.concat(data.list)
        this.videos = data
        this.page += 1
        if (this.page > data.totalPages) {
          this.loading = true
        } else {
          this.loading = false
        }
        this.show = false
      })
      // if (this.page < this.totalPages) {
      //   api.getExhibition({ page: this.page += 1 }).then((data) => {
      //     this.videos.list = data.list.concat(this.videos.list)
      //     this.curLength = data.list.length
      //     this.loading = false
      //   })
      // } else {
      //   this.loading = true
      // }
    },
    timeLine() {
      api.getExhibitionDate().then((data) => {
        this.timeLines = data
      })
    },
  },
  created() {
    // this.load()
    this.timeLine()
  },
  components: {
    MediaItem,
    InfiniteScroll,
  },
}
</script>
<style lang="scss">
  .date-select {
    margin-bottom: 45px;
  }
  .date-hd {
    border-bottom: 3px solid #000;
  }
  .date-list {
    float: left;
    font-size: 15px;
    line-height: 22px;
    width: 960px;
    .date-all {
      float: left;
      margin-right: 19px;
      font-size: 15px;
      color: #000;
      font-family: 'Microsoft Yahei';
    }
    .date-year {
      float: left;
      margin:0;
      >li {
        float: left;
        margin-right: 19px;
        >a {
          color: #999;
          font-family: 'MetricSemibold',Arial, Helvetica, sans-serif;
          &:hover {
            color: #ed3024;
          }
        }
      }
    }
  }
  .change-style {
    float: left;
    width: 40px;
    .style-item {
      float: right;
      width: 11px;
      height: 11px;
      cursor: pointer;
      margin-left: 6px;
    }
    .style-cube {
      background: url(../../assets/img/icon-lista.jpg) center top no-repeat;
    }
    .style-list {
      background: url(../../assets/img/icon-listb.jpg) center top no-repeat;
    }
    .cur-list {
      background-position: center bottom;
    }
  }
  .video-total {
    margin-top: 8px;
    font-size: 13px;
    font-family: 'Microsoft Yahei';
    color: #666;
  }
  .style-item {

  }
</style>
