<template>
  <div class="support-wrap">
    <div class="hidden-xs">
    <div class="h33"></div>
    <div class="common-title">{{$t('support.hostEvent')}}</div>
    <div class="address-list">
      <swiper :options="addrOption">
        <swiper-slide v-for="item in bannerList" :key="item.id">
          <img :src="item.url" alt="">
        </swiper-slide>
      </swiper>
      <div class="bottom-controller">
        <div class="bot-ctrl_wrap">
          <a class="ctrl-prev"></a>
          <a class="ctrl-next"></a>
        </div>
        <div class="ctrl-img">
          <div class="focus-img">
            <img src="../../assets/img/pointer.png" alt="">
          </div>
          <swiper :options="galleryOption" class="gallery-bottom">
            <swiper-slide v-for="item in smallList" :key="item.id">
              <img :src="item.url" alt="">
              <div class="bd-hover"></div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
    <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
    <!-- <div class="support-download">
      <a>{{$t('support.download')}}<span>{{$t('support.brochure')}}</span></a>
    </div>
    <div class="support-intro">
      <p>{{$t('support.event1')}}</p>
      <p>{{$t('support.event2')}}</p>
      <p>{{$t('support.event3')}}</p>
      <p>{{$t('support.eventPhone1')}}&nbsp;<a>yixuan.wu@ucca.org.cn</a>{{$t('support.eventPhone2')}}&nbsp;010-57800297/18610875160</p>
    </div>
    <div class="visit-border"></div>
    <div class="giving-list">
      <ul class="list-unstyled">
        <li class="clearfix">
          <div class="gleft">
            <img src="../../assets/img/addr1.jpg" alt="">
          </div>
          <div class="gright">
            <div class="gright-hd">{{$t('support.pavilion')}}</div>
            <div class="gright-bd">
              <p>{{$t('support.addr1')}}</p>
            </div>
          </div>
        </li>
        <li class="clearfix">
          <div class="gleft">
            <img src="../../assets/img/addr2.jpg" alt="">
          </div>
          <div class="gright">
            <div class="gright-hd">{{$t('support.atrium')}}</div>
            <div class="gright-bd">
              <p>{{$t('support.addr2')}}</p>
            </div>
          </div>
        </li>
        <li class="clearfix">
          <div class="gleft">
            <img src="../../assets/img/addr3.jpg" alt="">
          </div>
          <div class="gright">
            <div class="gright-hd">{{$t('support.auditorium')}}</div>
            <div class="gright-bd">
              <p>{{$t('support.addr3')}}</p>
            </div>
          </div>
        </li>
        <li class="clearfix">
          <div class="gleft">
            <img src="../../assets/img/addr4.jpg" alt="">
          </div>
          <div class="gright">
            <div class="gright-hd">{{$t('support.workshop')}}</div>
            <div class="gright-bd">
              <p>{{$t('support.addr4')}}</p>
            </div>
          </div>
        </li>
        <li class="clearfix">
          <div class="gleft">
            <img src="../../assets/img/addr5.jpg" alt="">
          </div>
          <div class="gright">
            <div class="gright-hd">{{$t('support.salon')}}</div>
            <div class="gright-bd">
              <p>{{$t('support.addr5')}}</p>
            </div>
          </div>
        </li>
        <li class="clearfix">
          <div class="gleft">
            <img src="../../assets/img/addr6.jpg" alt="">
          </div>
          <div class="gright">
            <div class="gright-hd">{{$t('support.greatHall')}}</div>
            <div class="gright-bd">
              <p>{{$t('support.addr6')}}</p>
            </div>
          </div>
        </li>
        <li class="clearfix">
          <div class="gleft">
            <img src="../../assets/img/addr7.jpg" alt="">
          </div>
          <div class="gright">
            <div class="gright-hd">{{$t('support.canting')}}</div>
            <div class="gright-bd">
              <p>{{$t('support.addr7')}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="h90"></div> -->
    </div>
    <div class="visible-xs  msupport-wrap">
      <div class="mobile-common_title">{{$t('support.hostEvent')}}</div>
      <div class="msupport-content">
        <div class="msupport-img_list">
          <swiper :options="swiperOption">
            <swiper-slide v-for="item in bannerList" :key="item.id">
              <img :src="item.url" alt="">
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
        <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
        <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import api from '@/api/api'

const host1 = require('../../assets/img/about.jpg')
const host2 = require('../../assets/img/host1.jpg')
const host3 = require('../../assets/img/host2.jpg')
const host4 = require('../../assets/img/host3.jpg')
const host5 = require('../../assets/img/host4.jpg')
const host6 = require('../../assets/img/host5.jpg')
const host7 = require('../../assets/img/host6.jpg')
const host8 = require('../../assets/img/host7.jpg')
const host9 = require('../../assets/img/host8.jpg')
const host10 = require('../../assets/img/host9.jpg')

const small1 = require('../../assets/img/small1.jpg')
const small2 = require('../../assets/img/small2.jpg')
const small3 = require('../../assets/img/small3.jpg')
const small4 = require('../../assets/img/small4.jpg')
const small5 = require('../../assets/img/small5.jpg')
const small6 = require('../../assets/img/small6.jpg')
const small7 = require('../../assets/img/small7.jpg')
const small8 = require('../../assets/img/small8.jpg')
const small9 = require('../../assets/img/small9.jpg')
const small10 = require('../../assets/img/small10.jpg')

export default {
  name: 'support-event',
  data() {
    return {
      addrOption: {
        autoplay: 3000,
        effect: 'fade',
      },
      swiperOption: {
        pagination: '.swiper-pagination',
        effect: 'fade',
        paginationClickable: true,
      },
      galleryOption: {
        slideToClickedSlide: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        spaceBetween: 10,
        autoplay: 3000,
      },
      detail: [],
      bannerList: [
        { id: 1, url: host1 },
        { id: 2, url: host2 },
        { id: 3, url: host3 },
        { id: 4, url: host4 },
        { id: 5, url: host5 },
        { id: 6, url: host6 },
        { id: 7, url: host7 },
        { id: 8, url: host8 },
        { id: 9, url: host9 },
        { id: 10, url: host10 },
      ],
      smallList: [
        { id: 1, url: small1 },
        { id: 2, url: small2 },
        { id: 3, url: small3 },
        { id: 4, url: small4 },
        { id: 5, url: small5 },
        { id: 6, url: small6 },
        { id: 7, url: small7 },
        { id: 8, url: small8 },
        { id: 9, url: small9 },
        { id: 10, url: small10 },
      ],
    }
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  created() {
    api.getPageByType({ infoCategory: 4 }).then((data) => {
      this.detail = data
    })
  },
  components: {
    swiper,
    swiperSlide,
  },
}
</script>
<style lang="scss">
  .address-list {
    position: relative;
  }
  .bottom-controller {
    width: 1000px;
    height: 100px;
    position: absolute;
    left: 0px;
    bottom: 0 !important;
    background: url(../../assets/img/bg_controller.png) 0px 0px repeat;
    z-index: 100;
  }
  .bot-ctrl_wrap {
    width: 1000px;
    position: relative;
    height: 100px;
  }
  .ctrl-prev {
    background: url(../../assets/img/bg-prev.png) 0px 0px no-repeat;
    width: 10px;
    height: 17px;
    overflow: hidden;
    position: absolute;
    left: 210px!important;
    top: 41px;
    text-indent: 999em;
    cursor: pointer;
  }
  .ctrl-next {
    background: url(../../assets/img/bg-next.png) 0px 0px no-repeat;
    width: 10px;
    height: 17px;
    overflow: hidden;
    position: absolute;
    right: 10px!important;
    top: 41px;
    text-indent: 999em;
    cursor: pointer;
  }
  .ctrl-prev:hover,
  .ctrl-next:hover { 
    background-position:0px -17px;
  }
  .ctrl-img {
    width: 730px;
    height: 100px;
    position: absolute;
    right: 35px;
    bottom: 0px;
    .swiper-container {
      height: 100px;
    }
    .focus-img {
      width: 84px;
      height: 84px;
      position: absolute;
      border: 2px solid #fff;
      top: 8px;
      z-index: 1000;
      cursor: pointer;
      left: 0px;
      img {
        position: absolute;
        z-index: 1001;
        left: 32px;
        display: none;
      }
    }
    .swiper-slide {
      width: 84px;
      margin-top: 8px;
      height: 84px;
      &:hover {
        .bd-hover {
          display: block;
        }
      }
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .support-download {
    font-size: 13px;
    font-family: 'Microsoft Yahei';
    line-height: 20px;
    color: #000;
    margin-top: 10px;
    a {
      color: #ed3024;
      font-weight: bold;
      padding-left: 19px;
      background: url(../../assets/img/icon-down.png) 0px 2px no-repeat;
      span {
        color: #000;
        font-weight: normal;
        margin-left: 3px;
      }
    }
  }
  .bd-hover {
    position: absolute;
    left: 0px;
    top: 0px;
    border: 2px solid #eb3024;
    width: 84px;
    height: 84px;
    display: none;
  }
  @media screen and (max-width: 767px) {
    .msupport-img_list {
      position: relative;
      .swiper-pagination {
        position: absolute;
        width: 100%;
        height: 5px;
        bottom: -5px;
        top: auto;
      }
      .swiper-pagination-bullet {
        width: 5px;
        height: 5px;
        margin-right: 5px;
        margin-left: 0;
      }
    }
  }
</style>

