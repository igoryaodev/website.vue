<template>
  <div class="aboutus-wrap maboutus-wrap">
    <div class="hidden-xs">
    <div class="h33"></div>
    <div class="common-title">{{$t('about.founder')}}</div>
    <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
    <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
    <!-- <div>
      <img src="../../assets/img/b1.jpg" alt="">
    </div>
    <div class="clearfix founder-intro">
      <div class="tleft about-intro">
        <p>{{$t('about.p2')}}</p>
        <p>&nbsp;</p>
      </div>
      <div class="tright">
        <ul class="list-unstyled founder-list">
          <li>{{$t('about.founder1')}}</li>
          <li>{{$t('about.founder2')}}</li>
          <li>{{$t('about.founder3')}}</li>
        </ul>
      </div>
    </div> -->
    <div class="h90"></div>
    </div>
    <div class="visible-xs mabout_wrap">
      <div class="mobile-common_title">{{$t('about.founder')}}</div>
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
  name: 'about-founders',
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
    api.getPageByType({ infoCategory: 7 }).then((data) => {
      this.detail = data
    })
  },
}
</script>
<style lang="scss">
  .founder-intro {
    margin-top: 15px;
  }
 .about-intro {
   p {
     text-align: justify;
     padding: 5px 0px;
     margin-bottom: 0;
     font-size: 13px;
     font-family: Arial, Helvetica, sans-serif;
     line-height: 18px;
     color: #000;
   }
 }
 .founder-list {
   margin-top: 4px;
   margin-bottom: 0;
   >li {
    text-align: right;
    font-size: 11px;
    color: #666;
    &:first-child {
      color: #000;
      font-size: 13px;
      font-family: 'MetricSemibold',Arial, Helvetica, sans-serif;
    }
   }
 }
</style>
