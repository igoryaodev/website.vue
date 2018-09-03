<template>
  <div class="aboutus-wrap">
    <div class="hidden-xs">
    <div class="h33"></div>
    <div class="common-title">{{$t('about.about')}}</div>
    <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
    <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
    <!-- <div>
      <img src="../../assets/img/about.jpg" alt="">
    </div>
    <div class="clearfix about-info">
      <div class="tleft about-intro">
        <p>{{$t('about.p1')}}</p>
      </div>
    </div> -->
    <div class="footer-split"></div>
    </div>
    <div class="visible-xs mabout_wrap">
      <div class="mobile-common_title">{{$t('about.about')}}</div>
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
  name: 'about-index',
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
    api.getPageByType({ infoCategory: 6 }).then((data) => {
      this.detail = data
    })
  },
}
</script>
<style lang="scss">
  .about-info {
    margin-top: 15px;
  }
  @media screen and (max-width: 767px) {
    .mabout-content {
      margin-top: 25px;
      font-family: Helvetica;
      font-size: 12px;
      line-height: 20px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
</style>

