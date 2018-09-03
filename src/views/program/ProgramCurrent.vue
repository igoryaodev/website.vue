<template>
  <div class="exhibiton-wrap">
    <div class="hidden-xs">
    <div class="h33"></div>
    <div class="common-title">{{$t('program.current')}}</div>
    <div class="h23"></div>
    <div class="date-select">
      <div class="clearfix date-hd">
        <div class="date-list clearfix">
          <ul class="date-year list-unstyled">
            <li><a @click="search(0)" :class="{active: type == 0}">{{$t('program.program')}}</a></li>
            <li><a @click="search(2)" :class="{active: type == 2}">{{$t('program.conversations')}}</a></li>
            <li><a @click="search(3)" :class="{active: type == 3}">{{$t('program.screen')}}</a></li>
            <li><a @click="search(4)" :class="{active: type == 4}">{{$t('program.performance')}}</a></li>
            <li><a @click="search(5)" :class="{active: type == 5}">{{$t('program.workShop')}}</a></li>
            <li><a @click="search(6)" :class="{active: type == 6}">{{$t('program.member')}}</a></li>
            <li><a @click="search(7)" :class="{active: type == 7}">{{$t('program.specialEvent')}}</a></li>
            <li><a @click="search(0)" :class="{active: type == 0}">{{$t('program.all')}}</a></li>
          </ul>
        </div>
        <div class="change-style">
          <span class="style-item style-list" :class="{'cur-list': isActive}" @click="changeStyle1"></span>
          <span class="style-item style-cube" :class="{'cur-list': !isActive}" @click="changeStyle2"></span>
        </div>
      </div>
      <div class="activity-total" v-show="$root.$i18n.locale == 'zh-CN'">
        <span class="now-numbers">{{activityList.list.length}}</span>项搜索结果在所有 
        <span class="all-numbers">{{activityList.totalRecords}}</span> 个项目中
      </div>
      <div class="activity-total" v-show="$root.$i18n.locale == 'en-US'">
        <span class="now-numbers">{{activityList.list.length}}</span>Result(s)
      </div>
    </div>
    <div class="activity-list clearfix" v-if="!isActive">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
        <program-item v-for="activity in activityList.list" :key="activity.id" :activity="activity" :type="'1'"></program-item>
      </div>
      <p v-show="show" class="page-infinite-loading"></p>
    </div>
    <div class="activity-list" v-if="isActive">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
        <program-list v-for="activity in activityList.list" :key="activity.id" :activity="activity" :type="'1'"></program-list>
      </div>
      <p v-show="show" class="page-infinite-loading"></p>
    </div>
    <div class="footer-split"></div>
    </div>
    <div class="visible-xs mobile-common_wrap">
      <div class="mobile-common_title">{{$t('program.current')}}</div>
      <div class="mobile-select_date">
        <p>{{$t('program.filterProgram')}}</p>
        <div class="mselect-date_list">
          <!-- <select v-model="selectedDate">
            <option value="0">{{$t('program.program')}}</option>
            <option value="2">{{$t('program.conversations')}}</option>
            <option value="3">{{$t('program.screen')}}</option>
            <option value="4">{{$t('program.performance')}}</option>
            <option value="5">{{$t('program.workShop')}}</option>
            <option value="6">{{$t('program.member')}}</option>
            <option value="7">{{$t('program.specialEvent')}}</option>
            <option value="all">{{$t('program.all')}}</option>
          </select> -->
          <multiselect :options="dateList" v-model="selectTime" :show-pointer="false" selected-label="" select-label="" label="name" @input="loadFilter" deselect-label="" :placeholder="''"></multiselect>
        </div>
      </div>
      <div class="mobile-program_list">
        <div class="clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
          <program-list v-for="activity in activityList.list" :key="activity.id" :activity="activity" :type="'1'"></program-list>
        </div>
        <p v-show="show" class="page-infinite-loading"></p>
      </div>
    </div>
  </div>
</template>
<script>
import ProgramItem from '@/views/program/ProgramItem'
import ProgramList from '@/views/program/ProgramList'
import { InfiniteScroll } from 'mint-ui'
import { Multiselect } from 'vue-multiselect'
import api from '@/api/api'

export default {
  name: 'program-current',
  data() {
    return {
      activityList: {
        list: [],
      },
      selectedDate: 1,
      isActive: localStorage.getItem('isActive') === 'true',
      loading: false,
      show: false,
      page: 1,
      type: this.$route.query.type || 0,
      selectTime: {
        value: this.$route.query.type || 0,
        name: this.$route.query.name || this.$t('program.program'),
      },
      dateList: [
        { name: this.$t('program.program'), value: '0' },
        { name: this.$t('program.conversations'), value: '2' },
        { name: this.$t('program.screen'), value: '3' },
        { name: this.$t('program.performance'), value: '4' },
        { name: this.$t('program.workShop'), value: '5' },
        { name: this.$t('program.member'), value: '6' },
        { name: this.$t('program.specialEvent'), value: '7' },
        { name: this.$t('program.all'), value: '0' },
      ],
    }
  },
  created() {
    // timeType 1:近期 2:过往
    // api.getProgram({ page: 1, timeType: 1 }).then((data) => {
    //   this.activityList = data
    // })
  },
  components: {
    ProgramItem,
    ProgramList,
    InfiniteScroll,
    Multiselect,
  },
  methods: {
    loadFilter() {
      this.$router.push({ name: 'program-current', query: { type: this.selectTime.value, name: this.selectTime.name } })
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
    search(type) {
      this.$router.push({ name: 'program-current', query: { type } })
      this.$router.go(0)
    },
    loadMore() {
      this.loading = true
      this.show = true
      setTimeout(() => {
        api.getProgram({ timeType: 1, eventCategory: this.type, page: this.page })
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
.win-main {
  .multiselect--active {
    z-index: 20;
  }
  .multiselect__content-wrapper {
    z-index: 20;
  }
}
</style>
