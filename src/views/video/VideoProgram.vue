<template>
  <div class="exhibiton-wrap">
    <div class="hidden-xs">
    <div class="h33"></div>
    <div class="common-title">{{$t('activity.public')}}</div>
    <div class="h23"></div>
    <div class="date-select">
      <div class="clearfix date-hd">
        <div class="date-list clearfix">
          <!-- <a class="date-all" @click="search()" :class="{active: !$route.query.createTime}">{{$t('activity.all')}}</a> -->
          <ul class="date-year list-unstyled">
            <li v-for="date in timeLines" :key="date.id">
              <a @click="search(date)" :class="{all: !$route.query.createTime && date == $t('activity.all'), active: $route.query.createTime && activeDate == date }">{{date}}</a>
              <!-- <a @click="search(t)" :class="{active: $route.query.createTime}">{{t}}</a> -->
            </li>
          </ul>
        </div>
        <div class="change-style">
         <!--  <span class="style-item style-list" :class="{'cur-list': !isActive}" @click="changeStyle"></span>
          <span class="style-item style-cube" :class="{'cur-list': isActive}" @click="changeStyle"></span> -->
        </div>
      </div>
      <div class="video-total" v-show="$root.$i18n.locale == 'zh-CN'">
        <span class="now-numbers">{{videos.list.length}}</span> 项搜索结果在 
        <span class="all-numbers">{{videos.totalRecords}}</span> 个视频中
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
        <video-item v-for="video in videos.list" :key="video.id" :video="video"></video-item>
      </div>
      <p v-show="show" class="page-infinite-loading"></p>
    </div>
    <div class="footer-split"></div>
    </div>
    <div class="visible-xs mvideo-wrap">
      <div class="mobile-common_title">{{$t('activity.public')}}</div>
      <div class="mobile-select_date">
        <p>{{$t('home.filterVideo')}}</p>
        <div class="mselect-date_list">
          <!-- <select v-model="selectedDate">
            <option value="all">{{$t('activity.all')}}</option>
            <option v-for="date in timeLines" :key="date.id" v-bind:value="date">{{date}}</option>
          </select> -->
          <multiselect :options="timeLines" v-model="selectTime" :show-pointer="false" selected-label="" select-label="" @input="loadFilter" deselect-label="" :placeholder="''"></multiselect>
        </div>
      </div>
      <div class="mvideo-list">
        <div class="clearfix"
	      v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="1"
	    >
	      <video-item v-for="video in videos.list" :key="video.id" :video="video"></video-item>
	    </div>
      </div>
    </div>
  </div>
</template>
<script>
import VideoItem from '@/views/video/VideoItem'
import api from '@/api/api'
import { InfiniteScroll } from 'mint-ui'
import { Multiselect } from 'vue-multiselect'
import dateFns from 'date-fns'

export default {
  name: 'video-program',
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
      selectedDate: 'all',
      selectTime: this.$route.query.createTime ? dateFns.format(this.$route.query.createTime, 'YYYY') : this.$t('activity.all'),
    }
  },
  computed: {
    activeDate() {
      if (this.$route.query.createTime) {
        return dateFns.format(this.$route.query.createTime, 'YYYY')
      }
      return this.$t('activity.all')
    },
  },
  methods: {
    loadFilter() {
      if (this.selectTime !== this.$t('activity.all')) {
        this.$router.push({ name: 'video-program', query: { createTime: dateFns.format(this.selectTime, 'YYYY-MM-DD') } })
      } else {
        this.$router.push({ name: 'video-program' })
      }
      this.$router.go(0)
    },
    search(date) {
      if (date !== this.$t('activity.all')) {
        this.$router.push({ name: 'video-program', query: { createTime: dateFns.format(date, 'YYYY-MM-DD') } })
      } else {
        this.$router.push({ name: 'video-program' })
      }
      this.$router.go(0)
    },
    load() {
      api.getvideoList({ page: 1, videoType: 2 }).then((data) => {
        this.videos = data
        this.curLength = data.list.length
        this.totalpages = data.totalPages
        this.totalRecords = data.totalRecords
      })
    },
    loadMore() {
      this.loading = true
      this.show = true
      api.getvideoList({ page: this.page, videoType: 2, createTime: this.$route.query.createTime })
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
      //   api.getvideoList({ page: this.page += 1, videoType: 2 }).then((data) => {
      //     this.videos.list = data.list.concat(this.videos.list)
      //     this.curLength = data.list.length
      //     this.loading = false
      //   })
      // } else {
      //   this.loading = true
      // }
    },
    timeLine() {
      api.getVideoDate({ videoType: 2 }).then((data) => {
        if (data) {
          this.timeLines = data
        }
        this.timeLines.unshift(this.$t('activity.all'))
      })
    },
  },
  created() {
    // this.load()
    this.timeLine()
  },
  components: {
    VideoItem,
    InfiniteScroll,
    Multiselect,
  },
}
</script>
<style lang="scss">
</style>
