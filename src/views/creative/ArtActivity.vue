<template>
  <div class="art-wrap common-wrap">
    <div class="hidden-xs">
    <div class="common-title">{{$t('home.artActivity')}}</div> 
    <div class="artactivity-swiper" v-if="pageDetail.list">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in pageDetail.list[0].Images" :key="item.id">
          <div>
            <img :src="item.key | qiniu" alt="">
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="brief-detail" v-if="isZh && pageDetail.list" v-html="pageDetail.list[0].description"></div>
    <div class="brief-detail" v-if="!isZh && pageDetail.list" v-html="pageDetail.list[0].description_En"></div>
    <div class="footer-split fot-border"></div>
    </div>
    <div class="visible-xs mobile-common_wrap mcreative-wrap">
      <div class="mobile-common_title">{{$t('home.artActivity')}}</div>
      <div class="mart-swipe" v-if="pageDetail.list">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in pageDetail.list[0].Images" :key="item.id">
            <div>
              <img :src="item.key | qiniu" alt="">
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="brief-detail" v-if="isZh && pageDetail.list" v-html="pageDetail.list[0].description"></div>
      <div class="brief-detail" v-if="!isZh && pageDetail.list" v-html="pageDetail.list[0].description_En"></div>
    </div>
  </div>
</template>
<script>
import api from '@/api/api'

export default {
  name: 'art-activity',
  data() {
    return {
      pageDetail: {},
      swiperOption: {
      },
    }
  },
  created() {
    api.getWeekendShop({ infoCategory: 8 }).then((data) => {
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
<style lang="scss">
.brief-detail {
  margin-top: 25px;
}
@media screen and (max-width: 767px) {
  .mart-swipe {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>


