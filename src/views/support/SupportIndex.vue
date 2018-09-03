<template>
  <div class="support-wrap">
    <div class="hidden-xs">
    <div class="h33"></div>
    <div class="common-title">{{$t('home.support')}}</div>
    <!-- <div>
      <img src="../../assets/img/about.jpg" alt="">
    </div> -->
    <div class="support-content">
      <!-- <div class="support-detail">
        <p>{{$t('support.p1')}}</p>
        <p>{{$t('support.p2')}}</p>
        <p>{{$t('support.p3')}}</p>
        <p>{{$t('support.p4')}}</p>
        <p v-show="$root.$i18n.locale == 'zh-CN' ">{{$t('support.sEventPhone')}} 010-57800271/ <span class="font-red">christina.you@ucca.org.cn</span></p>
        <p v-show="$root.$i18n.locale == 'en-US' ">{{$t('support.sEventPhone')}}<span class="font-red"> 010-57800271/ christina.you@ucca.org.cn</span></p>
      </div> -->
      <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
      <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
    </div>
    </div>
    <div class="visible-xs msupport-wrap">
      <div class="mobile-common_title">{{$t('home.support')}}</div>
      <div class="msupport-content">
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
  name: 'support-index',
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
    api.getPageByType({ infoCategory: 1 }).then((data) => {
      this.detail = data
    })
  },
  components: {
    FooterMenu,
  },
}
</script>
<style lang="scss">
  .support-content {
    margin-top: 5px;
    margin-bottom: 90px;
    .support-detail {
      width: 750px;
      font-size: 13px;
      font-family: 'Microsoft Yahei';
      line-height: 20px;
      color: #000;
      p {
        padding: 5px 0px;
        text-align: justify;
      }
    }
  }
  .font-red {
    color: #ff0000;
  }
  @media screen and (max-width: 767px) {
    .msupport-content {
      margin-top: 17px;
      img {
        width: 100%;
        height: auto;
      }
      font-family: Helvetica;
      font-size: 12px;
      line-height: 20px;
    }
  }
</style>

