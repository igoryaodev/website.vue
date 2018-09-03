<template>
  <div class="main-wrap">
    <div class="main-content">
      <div class="search-wrap hidden-xs">
        <div class="search-result_title" v-if="isZh">您的 "{{$route.params.key}}" 查询结果共有<span>{{count}}</span>个</div>
        <div class="search-result_title" v-if="!isZh"><span>{{count}}</span> Search Results for: {{$route.params.key}}</div>
        <div class="search-result_list">
          <div class="clearfix">
            <search-item v-for="activity in searchResult.UCCACtivityDto" :key="activity.id" :activity="activity" :type="1"></search-item>
            <search-item v-for="activity in searchResult.UCCAEvnetDto" :key="activity.id" :activity="activity" :type="2"></search-item>
          </div>
          <p v-show="show" class="page-infinite-loading"></p>
        </div>
      </div>
      <div class="footer-split hidden-xs"></div>
      <footer-menu></footer-menu>
      <div class="visible-xs msearch-result_wrap">
        <div class="msearch-result_title" v-if="isZh">您的”{{$route.params.key}}“ 查询结果共有<span>{{count}}</span>个</div>
        <div class="msearch-result_title" v-if="!isZh"><span>{{count}}</span> Search Results for: {{$route.params.key}}</div>
        <div class="search-result_list">
          <div class="clearfix">
            <search-item v-for="activity in searchResult.UCCACtivityDto" :key="activity.id" :activity="activity" :type="1"></search-item>
            <search-item v-for="activity in searchResult.UCCAEvnetDto" :key="activity.id" :activity="activity" :type="2"></search-item>
          </div>
          <p v-show="show" class="page-infinite-loading"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchItem from '@/views/SearchItem'
import { InfiniteScroll } from 'mint-ui'
import FooterMenu from '@/components/FooterMenu'
import api from '@/api/api'
import dateFns from 'date-fns'

export default {
  name: 'search-result',
  data() {
    return {
      activityList: {
        list: [],
      },
      loading: false,
      show: false,
      page: 1,
      searchResult: {
        UCCACtivityDto: [],
        UCCAEvnetDto: [],
      },
      current: new Date(),
    }
  },
  created() {
    this.show = true
    api.search(this.$route.params.key).then((data) => {
      this.show = false
      this.searchResult = data
      if (data.UCCACtivityDto && data.UCCACtivityDto.length > 0) {
        data.UCCACtivityDto.forEach((item) => {
          if (dateFns.isBefore(item.endTime, this.current)) {
            Object.assign(item, { dateType: '3' })
          }
          if (dateFns.isAfter(item.startTime, this.current)) {
            Object.assign(item, { dateType: '2' })
          }
          if (dateFns.isAfter(item.endTime, this.current) && dateFns.isBefore(item.startTime,
          this.current)) {
            Object.assign(item, { dateType: '1' })
          }
        })
      }
      if (data.UCCAEvnetDto && data.UCCAEvnetDto.length > 0) {
        data.UCCAEvnetDto.forEach((item) => {
          if (item.eventCategory === 7) {
            Object.assign(item, { dateType: '3' })
          } else {
            if (dateFns.isBefore(item.endDate, this.current)) {
              Object.assign(item, { dateType: '2' })
            }
            if (dateFns.isAfter(item.endDate, this.current)) {
              Object.assign(item, { dateType: '1' })
            }
          }
        })
      }
    })
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
    count() {
      return this.searchResult.UCCACtivityDto.length + this.searchResult.UCCAEvnetDto.length
    },
  },
  methods: {
    loadMore() {
      this.loading = true
      this.show = true
      api.search(this.$route.params.key)
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
    },
  },
  components: {
    SearchItem,
    InfiniteScroll,
    FooterMenu,
  },
}
</script>
<style lang="scss">
.search-result_title {
  font-size: 32px;
  line-height: 36px;
  font-weight: bold;
  margin: 45px 0;
}
@media screen and (max-width: 767px) {
  .msearch-result_title {
    font-size: 30px;
    padding: 23px 0px 18px 0px;
    font-family: Helvetica;
    font-weight: bold;
  }
}
</style>

