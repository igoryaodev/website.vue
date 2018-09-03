<template>
  <div class="artclass-wrap common-wrap">
    <div class="hidden-xs">
      <div class="common-title">{{$t('about.become')}}</div>
      <div class="clearfix">
        <div class="tleft">
          <div class="brief-detail" v-if="isZh && pageDetail.list" v-html="pageDetail.list[0].description"></div>
          <div class="brief-detail" v-if="!isZh && pageDetail.list" v-html="pageDetail.list[0].description_En"></div>
        </div>
        <div class="tright">
          <div class="artclass-right" v-if="pageDetail.list">
            <div class="">
              <img :src="pageDetail.list[0].rightImage.key | qiniu" alt="">
            </div>
            <div class="">
              <h4 v-if="isZh">{{pageDetail.list[0].rightTitle}}</h4>
              <h4 v-if="!isZh">{{pageDetail.list[0].rightTitle_En}}</h4>
              <p v-if="isZh">{{pageDetail.list[0].rightDescription}}</p>
              <p v-if="!isZh">{{pageDetail.list[0].rightDescription_En}}</p>
              <router-link :to="{name:'contact-index'}" class="recent-buy">{{$t('home.trial')}}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="visit-border"></div>
    </div>
    <div class="visible-xs mobile-common_wrap mcreative-wrap">
      <div class="mobile-common_title">{{$t('about.become')}}</div>
      <div class="mbrief-wrap">
        <div class="brief-detail" v-if="isZh && pageDetail.list" v-html="pageDetail.list[0].description"></div>
        <div class="brief-detail" v-if="!isZh && pageDetail.list" v-html="pageDetail.list[0].description_En"></div>
      </div>
      <div class="visit-border"></div>
      <div class="martclass clearfix" v-if="pageDetail.list">
        <div class="martclass-img">
          <img :src="pageDetail.list[0].rightImage.key | qiniu" alt="">
        </div>
        <div class="martclass-info">
          <h4 v-if="isZh">{{pageDetail.list[0].rightTitle}}</h4>
          <h4 v-if="!isZh">{{pageDetail.list[0].rightTitle_En}}</h4>
          <p v-if="isZh">{{pageDetail.list[0].rightDescription}}</p>
          <p v-if="!isZh">{{pageDetail.list[0].rightDescription_En}}</p>
          <router-link :to="{name:'contact-index'}" class="recent-buy">{{$t('home.trial')}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/api'

export default {
  name: 'art-become',
  data() {
    return {
      pageDetail: {},
    }
  },
  created() {
    api.getWeekendShop({ infoCategory: 9 }).then((data) => {
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
<style lang="scss" scoped>
.tleft {
  width: 660px;
  margin-right: 90px;
}
.recent-buy {
    display: block;
    height: 25px;
    color: #fff;
    // background-color: #f37826;
    background: linear-gradient(to bottom, #f18a50, #f37826 50%, #f6c09f);
    line-height: 25px;
    text-align: center;
    width: 120px;
    font-family: Helvetica;
    cursor: pointer;
    margin: 0 auto;
  }
  @media screen and (max-width: 767px){
    .martclass-img {
      float: left;
      width: 50%;
      img {
        width: 100%;
        height: auto;
      }
    }
    .martclass-info {
      float: left;
      width: 50%;
      padding-left: 10px;
    }
    .recent-buy {
      margin: 0;
    }
  }
</style>
