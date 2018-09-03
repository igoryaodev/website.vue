<template>
  <div class="board-wrap">
    <div class="hidden-xs">
      <div class="h33"></div>
      <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
      <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
    </div>
    <div class="visible-xs mabout_wrap">
      <!-- <div class="mobile-common_title">{{$t('about.about')}}</div> -->
      <div class="mabout-content">
        <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
        <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
      </div>
    </div>
  </div>
</template>
<script>
import FooterMenu from '@/components/FooterMenu'
import api from '@/api/api'

export default {
  name: 'about-board',
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
    api.getPageByType({ infoCategory: 12 }).then((data) => {
      this.detail = data
    })
  },
  components: {
    FooterMenu,
  },
}
</script>