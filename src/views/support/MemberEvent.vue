<template>
  <div class="memberevent-wrap">
    <div class="hidden-xs">
    <div class="common-title">{{$t('support.memberEvent')}}</div>
    <div class="date-select">
      <div class="clearfix date-hd">
        <div class="date-list clearfix">
          <!-- <a class="date-all"@click="search()" :class="{active: !$route.query.createTime}">{{$t('activity.all')}}</a> -->
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
        <span class="now-numbers">{{activityList.list.length}}</span>项搜索结果在所有 
        <span class="all-numbers">{{activityList.totalRecords}}</span> 个活动中
      </div>
      <div class="activity-total" v-show="$root.$i18n.locale == 'en-US'">
        <span class="now-numbers">{{activityList.list.length}}</span>Result(s)
      </div>
    </div>
    <div class="activity-list clearfix" v-if="isActive">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
        <program-item v-for="activity in activityList.list" :key="activity.id" :activity="activity" :type="activity.dateType"></program-item>
      </div>
      <p v-show="show" class="page-infinite-loading"></p>
    </div>
    <div class="activity-list" v-if="!isActive">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
        <program-list v-for="activity in activityList.list" :key="activity.id" :activity="activity" :type="activity.dateType"></program-list>
      </div>
      <p v-show="show" class="page-infinite-loading"></p>
    </div>
    <div class="footer-split"></div>
    </div>
    <div class="visible-xs mevent-wrap">
      <div class="mobile-common_title">{{$t('support.memberEvent')}}</div>
      <div class="mobile-select_date">
        <p>{{$t('program.filterEvent')}}</p>
        <div class="mselect-date_list">
          <!-- <select v-model="selectedDate">
            <option value="all">{{$t('activity.all')}}</option>
            <option v-for="date in dateList" :key="date.id" v-bind:value="date">{{date}}</option>
          </select> -->
          <multiselect :options="dateList" v-model="selectTime" :show-pointer="false" selected-label="" select-label="" @input="loadFilter" deselect-label="" :placeholder="''"></multiselect>
        </div>
      </div>
      <div class="mobile-events">
        <div class="clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
          <program-list v-for="activity in activityList.list" :key="activity.id" :activity="activity" :type="activity.dateType"></program-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProgramItem from '@/views/program/ProgramItem'
import ProgramList from '@/views/program/ProgramList'
import { InfiniteScroll } from 'mint-ui'
import { Multiselect } from 'vue-multiselect'
import dateFns from 'date-fns'
import api from '@/api/api'

export default {
  name: 'member-event',
  data() {
    return {
      isActive: localStorage.getItem('isActive') === 'true',
      current: new Date(),
      activityList: {
        list: [],
      },
      dateList: [],
      selectTime: this.$route.query.createTime ? dateFns.format(this.$route.query.createTime, 'YYYY') : this.$t('activity.all'),
      loading: false,
      show: false,
      selectedDate: 'all',
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
    api.getProgramDate({ eventCategory: 6 }).then((data) => {
      if (data) {
        this.dateList = data
      }
      this.dateList.unshift(this.$t('activity.all'))
    })
  },
  methods: {
    loadFilter() {
      if (this.selectTime !== this.$t('activity.all')) {
        this.$router.push({ name: 'member-event', query: { createTime: dateFns.format(this.selectTime, 'YYYY-MM-DD') } })
      } else {
        this.$router.push({ name: 'member-event' })
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
        this.$router.push({ name: 'member-event', query: { createTime: dateFns.format(date, 'YYYY-MM-DD') } })
      } else {
        this.$router.push({ name: 'member-event' })
      }
      this.$router.go(0)
    },
    loadMore() {
      this.loading = true
      this.show = true
      setTimeout(() => {
        api.getProgram({ eventCategory: 6, page: this.page })
        .then((data) => {
          /* eslint no-param-reassign: "off" */
          data.list = this.activityList.list.concat(data.list)
          if (data) {
            if (data.list && data.list.length > 0) {
              data.list.forEach((item) => {
                if (dateFns.isBefore(item.endDate, this.current)) {
                  Object.assign(item, { dateType: 2 })
                }
                if (dateFns.isAfter(item.endDate, this.current)) {
                  Object.assign(item, { dateType: 1 })
                }
              })
            }
          }
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
  components: {
    ProgramItem,
    ProgramList,
    InfiniteScroll,
    Multiselect,
  },
}
</script>

