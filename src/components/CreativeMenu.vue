<template>
  <div class="creative-footer">
    <div class="ficons">
      <swiper :options="slideOption">
        <swiper-slide v-for="item in bannerlist" :key="item.id">
          <a :href="item.href">
            <div class="fbox clearfix">
              <div class="fbox-img" v-bind:style="{backgroundImage: 'url('+item.url+')'}"></div>
              <div class="fbox-info">
                <p class="fbox-title" :class="{color1: item.id == 1,color2: item.id == 2,color3: item.id == 3,color4: item.id == 4,color5: item.id == 5,color6: item.id == 6,color7: item.id == 7,color8: item.id == 8,color9: item.id == 9,color10: item.id == 10,color11: item.id == 11,color12: item.id == 12,color13: item.id == 13,color14: item.id == 14,color15: item.id == 15}">{{item.title}}</p>
                <p class="fbox-brief">{{item.brief}}</p>
              </div>
            </div>
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const fimg1 = require('../assets/img/icon_subscribe_qr_code.jpg')
const fimg2 = require('../assets/img/icon_follow-us-on-weibo.jpg')
const fimg3 = require('../assets/img/icon_about-us2.jpg')
const fimg4 = require('../assets/img/icon_address-map.jpg')
const fimg5 = require('../assets/img/icon_visit-ucca2.jpg')
const fimg6 = require('../assets/img/icon_learn-more-about.jpg')
const fimg7 = require('../assets/img/icon_programs.jpg')
const fimg8 = require('../assets/img/icon_learning-outcomes.jpg')
const fimg9 = require('../assets/img/icon_workshops.jpg')
const fimg10 = require('../assets/img/icon_education-framework.jpg')
const fimg11 = require('../assets/img/icon_check-whats-hot-yoday.jpg')
const fimg12 = require('../assets/img/icon_photo-gallery.jpg')
const fimg13 = require('../assets/img/icon_art_classes.jpg')
const fimg14 = require('../assets/img/icon_upcoming-workshops.jpg')
const fimg15 = require('../assets/img/icon_have-an-enquiry.jpg')

export default {
  name: 'footer-menu',
  data() {
    return {
      slideOption: {
        slidesPerView: 3,
        loop: true,
        slidesPerGroup: 3,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
      },
      bannerlist: [
        { id: 1, title: this.$t('home.wechat'), brief: this.$t('home.f1'), url: fimg1, href: '' },
        { id: 2, title: this.$t('home.weibo'), brief: this.$t('home.f2'), url: fimg2, href: 'http://weibo.com/uccacreativestudio' },
        { id: 3, title: this.$t('home.about'), brief: this.$t('home.f3'), url: fimg3, href: '' },
        { id: 4, title: this.$t('home.find'), brief: this.$t('home.f4'), url: fimg4, href: '' },
        { id: 5, title: this.$t('home.visit'), brief: this.$t('home.f5'), url: fimg5, href: '' },
        { id: 6, title: this.$t('home.available'), brief: this.$t('home.f6'), url: fimg6, href: '' },
        { id: 7, title: this.$t('home.programs'), brief: this.$t('home.f7'), url: fimg7, href: '' },
        { id: 8, title: this.$t('home.outcomes'), brief: this.$t('home.f8'), url: fimg8, href: '' },
        { id: 9, title: this.$t('home.workshop'), brief: this.$t('home.f9'), url: fimg9, href: '' },
        { id: 10, title: this.$t('home.education'), brief: this.$t('home.f10'), url: fimg10, href: '' },
        { id: 11, title: this.$t('home.news'), brief: this.$t('home.f11'), url: fimg11, href: '' },
        { id: 12, title: this.$t('home.gallery'), brief: this.$t('home.f12'), url: fimg12, href: '' },
        { id: 13, title: this.$t('home.art'), brief: this.$t('home.f13'), url: fimg13, href: '' },
        { id: 14, title: this.$t('home.upcoming'), brief: this.$t('home.f14'), url: fimg14, href: '' },
        { id: 15, title: this.$t('home.touch'), brief: this.$t('home.f15'), url: fimg15, href: '' },
      ],
    }
  },
  components: {
    swiper,
    swiperSlide,
  },
}
</script>
<style lang="scss">
  .creative-footer {
    .ficons {
      padding: 35px 0px 45px 0px;
      border-top: 1px solid #000;
      border-bottom: 3px solid #000;
      position: relative;
    }
  }
  .fbox {
    margin: 0px 3px;
    padding-top: 10px;
    &:hover {
      .fbox-img {
        background-position:0px -100px;
      }
      .fbox-title {
        color: #ed3024;
      }
    }
    .fbox-img {
      width: 100px;
      height: 99px;
      float: left;
      font-size: 0px;
      line-height: 0px;
      background-position: 0px 0px;
      overflow: hidden;
    }
    .fbox-info {
      width: 205px;
      float: left;
      margin-left: 20px;
    }
    .fbox-title {
      font-size: 20px;
      line-height: 22px;
      font-weight: bold;
    }
    .fbox-brief {
      font-size: 13px;
      line-height: 18px;
      margin-top: 12px;
    }
  }
  .color1 {
    color: #c3ab08;
  }
  .color2 {
    color: #eb111f;
  }
  .color3 {
    color: #ed3024;
  }
  .color4 {
    color: #c0c779;
  }
  .color5 {
    color: #000000;
  }
  .color6 {
    color: #702784;
  }
  .color7 {
    color: #aa975d;
  }
  .color8 {
    color: #f9a872;
  }
  .color9 {
    color: #f05662;
  }
  .color10 {
    color: #005a96;
  }
  .color11 {
    color: #a00c30;
  }
  .color12 {
    color: #00bce7;
  }
  .color13 {
    color: #62bf19;
  }
  .color14 {
    color: #f38aa5;
  }
  .color15 {
    color: #ce91e5;
  }
</style>


