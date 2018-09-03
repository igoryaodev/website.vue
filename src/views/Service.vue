<template>
  <div class="main-wrap">
    <div class="main-content">
      <div class="service-wrap hidden-xs">
        <div class="common-title">{{$t('home.terms')}}</div>
        <div class="service-detail" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
        <div class="service-detail" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
      </div>
      <footer-menu></footer-menu>
      <div class="mservice-wrap visible-xs">
        <div class="mobile-common_title">{{$t('home.terms')}}</div>
        <div class="mservice-content">
          <div class="service-detail" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
          <div class="service-detail" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FooterMenu from '@/components/FooterMenu'
import api from '@/api/api'

export default {
  name: 'service',
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
    api.getPageByType({ infoCategory: 10 }).then((data) => {
      this.detail = data
    })
  },
  components: {
    FooterMenu,
  },
}
</script>

