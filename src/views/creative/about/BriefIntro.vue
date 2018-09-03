<template>
  <div class="brief-wrap common-wrap">
    <div class="hidden-xs">
    <div class="common-title">{{$t('about.briefIntro')}}</div>
    <div class="brief-detail" v-if="isZh && pageDetail.list" v-html="pageDetail.list[0].description"></div>
    <div class="brief-detail" v-if="!isZh && pageDetail.list" v-html="pageDetail.list[0].description_En"></div>
    <div class="footer-split fot-border"></div>
    </div>
    <div class="visible-xs mobile-common_wrap mcreative-wrap">
      <div class="mobile-common_title">{{$t('about.briefIntro')}}</div>
      <div class="mbrief-wrap">
        <div class="brief-detail" v-if="isZh && pageDetail.list" v-html="pageDetail.list[0].description"></div>
        <div class="brief-detail" v-if="!isZh && pageDetail.list" v-html="pageDetail.list[0].description_En"></div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/api'

export default {
  name: 'brief-intro',
  data() {
    return {
      pageDetail: {},
    }
  },
  created() {
    api.getWeekendShop({ infoCategory: 2 }).then((data) => {
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

