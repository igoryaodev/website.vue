<template>
  <div class="exhibiton-wrap">
    <div class="hidden-xs">
    <div class="h33"></div>
    <div class="common-title">{{$t('activity.curExhib')}}</div>
    <div class="h23"></div>
    <div class="date-select">
      <div class="clearfix date-hd">
        <div class="date-list clearfix">
          <!-- <a class="date-all" @click="search()" :class="{active: !$route.query.createTime}">{{$t('activity.all')}}</a> -->
          <ul class="date-year list-unstyled">
            <li v-for="date in dateList" :key="date.id">
              <a @click="search(date)" :class="{all: !$route.query.createTime && date == $t('activity.all'), active: $route.query.createTime && activeDate == date }">{{date}}</a>
            </li>
          </ul>
        </div>
        <div class="change-style">
          <span class="style-item style-list" :class="{'cur-list': isActive}" @click="changeStyle1"></span>
          <span class="style-item style-cube" :class="{'cur-list': !isActive}" @click="changeStyle2"></span>
        </div>
      </div>
      <div class="activity-total" v-show="$root.$i18n.locale == 'zh-CN'">
        <span class="now-numbers">{{activityList.list.length}}</span>项搜索结果在 
        <span class="all-numbers">{{activityList.totalRecords}}</span> 个展览中
      </div>
      <div class="activity-total" v-show="$root.$i18n.locale == 'en-US'">
        <span class="now-numbers">{{activityList.list.length}}</span> Result(s)
      </div>
    </div>
    <div class="activity-list" v-if="!isActive">
      <div class="clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
        <exhibition-item v-for="activity in activityList.list" :key="activity.id" :activity="activity" :type="'1'"></exhibition-item>
      </div>
      <p v-show="show" class="page-infinite-loading">
      </p>
    </div>
    <div class="activity-list" v-if="isActive">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
        <exhibition-list v-for="activity in activityList.list" :key="activity.id" :activity="activity" :type="'1'"></exhibition-list>
      </div>
      <p v-show="show" class="page-infinite-loading"></p>
    </div>
    <div class="footer-split"></div>
    </div>
    <div class="visible-xs mobile-common_wrap">
      <div class="mobile-common_title">{{$t('activity.curExhib')}}</div>
      <div class="mobile-select_date">
        <p>{{$t('activity.selectDate')}}</p>
        <div class="mselect-date_list">
          <!-- <select v-model="selectedDate">
            <option value="all">{{$t('activity.all')}}</option>
            <option v-for="date in dateList" :key="date.id" v-bind:value="date">{{date}}</option>
          </select> -->
          <multiselect :options="dateList" v-model="selectTime" :show-pointer="false" selected-label="" select-label="" @input="loadFilter" deselect-label="" :placeholder="''"></multiselect>
        </div>
      </div>
      <div class="mobile-exhibition_list">
        <div class="clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
          <exhibition-item v-for="activity in activityList.list" :key="activity.id" :activity="activity" :type="'1'"></exhibition-item>
        </div>
        <p v-show="show" class="page-infinite-loading"></p>
      </div>
    </div>
  </div>
</template>
<script>
import ExhibitionItem from '@/views/exhibition/ExhibitionItem'
import ExhibitionList from '@/views/exhibition/ExhibitionList'
import { Multiselect } from 'vue-multiselect'
import { InfiniteScroll } from 'mint-ui'
import dateFns from 'date-fns'
import api from '@/api/api'

export default {
  name: 'exhibition-current',
  data() {
    return {
      activityList: {
        list: [],
      },
      selectedDate: 'all',
      selectTime: this.$route.query.createTime ? dateFns.format(this.$route.query.createTime, 'YYYY') : this.$t('activity.all'),
      dateList: [],
      isActive: localStorage.getItem('isActive') === 'true',
      loading: false,
      show: false,
      page: 1,
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
  created() {
    // // searchType 1: 即将,2: 正在,3:过往
    // api.getExhibition({ searchType: 2, page: 1 }).then((data) => {
    //   this.activityList = data
    // })
    api.getExhibitionDate({ searchType: 2 }).then((data) => {
      if (data) {
        this.dateList = data
      }
      this.dateList.unshift(this.$t('activity.all'))
    })
  },
  components: {
    ExhibitionItem,
    ExhibitionList,
    InfiniteScroll,
    Multiselect,
  },
  methods: {
    loadFilter() {
      if (this.selectTime !== this.$t('activity.all')) {
        this.$router.push({ name: 'exhibition-current', query: { createTime: dateFns.format(this.selectTime, 'YYYY-MM-DD') } })
      } else {
        this.$router.push({ name: 'exhibition-current' })
      }
      this.$router.go(0)
    },
    changeStyle1() {
      this.isActive = true
      localStorage.setItem('isActive', this.isActive)
    },
    changeStyle2() {
      this.isActive = false
      localStorage.setItem('isActive', this.isActive)
    },
    search(date) {
      if (date !== this.$t('activity.all')) {
        this.$router.push({ name: 'exhibition-current', query: { createTime: dateFns.format(date, 'YYYY-MM-DD') } })
      } else {
        this.$router.push({ name: 'exhibition-current' })
      }
      this.$router.go(0)
    },
    loadMore() {
      this.loading = true
      this.show = true
      setTimeout(() => {
        api.getExhibition(
          { searchType: 2, page: this.page, createTime: this.$route.query.createTime })
        .then((data) => {
          /* eslint no-param-reassign: "off" */
          data.list = this.activityList.list.concat(data.list)
          this.activityList = data
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
}
</script>
<style lang="scss">
  @media screen and(max-width: 767px) {
    .mobile-exhibition_list {
      margin-top: 25px;
    }
  }
</style>
