<template>
  <div class="teach-wrap common-wrap">
    <div class="hidden-xs">
    <div class="common-title">{{$t('home.teachingService')}}</div>
    <div class="brief-detail" v-if="isZh && pageDetail.list" v-html="pageDetail.list[0].description"></div>
    <div class="brief-detail" v-if="!isZh && pageDetail.list" v-html="pageDetail.list[0].description_En"></div>
    <div class="footer-split fot-border"></div>
    </div>
    <div class="visible-xs mobile-common_wrap mcreative-wrap">
      <div class="mobile-common_title">{{$t('home.teachingService')}}</div>
      <div class="mteach-detail">
        <div class="brief-detail" v-if="isZh && pageDetail.list" v-html="pageDetail.list[0].description"></div>
        <div class="brief-detail" v-if="!isZh && pageDetail.list" v-html="pageDetail.list[0].description_En"></div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/api'

export default {
  name: 'teach-service',
  data() {
    return {
      pageDetail: {},
    }
  },
  created() {
    api.getWeekendShop({ infoCategory: 7 }).then((data) => {
      this.pageDetail = data
    })
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
}
</script>

