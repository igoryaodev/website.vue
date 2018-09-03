<template>
  <div class="aboutus-wrap">
    <div class="hidden-xs">
      <div class="h33"></div>
      <div class="common-title">{{$t('about.leadership')}}</div>
      <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
      <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
    </div>
    <div class="visible-xs mabout_wrap">
      <div class="mobile-common_title">{{$t('about.leadership')}}</div>
      <div class="mabout-content">
        <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
        <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/api'

export default {
  name: 'about-leader',
  data() {
    return {
      detail: [],
    }
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  created() {
    api.getPageByType({ infoCategory: 8 }).then((data) => {
      this.detail = data
    })
  },
}
</script>