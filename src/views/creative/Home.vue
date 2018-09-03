<template>
  <div class="creative-wrap">
    <div class="hidden-xs">
    <div class="creative-banner_wrap">
      <div class="visit-bg"></div>
        <div class="visit-info">
          <div class="vi-title font-en-bold">Visit Us</div>
          <div class="vi-time">{{$t('home.openTime')}}</div>
          <div class="vi-hour clearfix">
            <div class="pull-left">
              <img src="../../assets/img/cn-open-hour-new.png" alt="">
            </div>
            <div class="pull-right">
              <img src="../../assets/img/cn-close-week.png" alt="">
            </div>
          </div>
          <div class="vi-drive">
            <div class="vi-drive_icon"></div>
            <div class="vi-drive_text">
              <a href="http://cn.bing.com/ditu/?FORM=Z9LH4#Y3A9MzkuOTMxNTMxNDQ5OTExNzN+MTE2LjM3OTIzNDMxNCZsdmw9MTEmc3R5PXImcnRwPWFkci5+cG9zLjM5Ljk4NDE2NF8xMTYuNDk1MTA4XyVFOSU4NSU5MiVFNCVCQiU5OSVFNiVBMSVBNSVFOCVCNyVBRjQlRTUlOEYlQjc3OTglRTglODklQkElRTYlOUMlQUYlRTUlOEMlQkElRTUlODYlODUoJUU4JUJGJTkxJUU1JUE0JUE3JUU1JUIxJUIxJUU1JUFEJTkwJUU2JUExJUE1KSUyQyUyMCVFNSU4QyU5NyVFNCVCQSVBQyVFNSVCOCU4MiUyQyUyMCVFNSU4QyU5NyVFNCVCQSVBQyVFNSVCOCU4Ml8lRTUlQjAlQTQlRTQlQkMlQTYlRTYlOTYlQUYlRTUlQkQlOTMlRTQlQkIlQTMlRTglODklQkElRTYlOUMlQUYlRTQlQjglQUQlRTUlQkYlODNfMDEwLTg0NTk5MjY5X2VfWU40MDY3eDIxMzg3ODE0Jm1vZGU9RCZydG9wPTB+MH4wfg==">{{$t('home.driving1')}}</a>
            </div>
          </div>
          <div class="vi-news">
            <div class="vi-news_title">{{$t('home.update')}}</div>
            <div class="vi-news_list">
              <ul class="list-unstyled">
                <li v-for="news in newsList.list" :key="news.id">
                  <span class="news-dot"></span>
                  <a :href="news.url" v-if="isZh">{{news.title}}</a>
                  <a :href="news.url" v-if="!isZh">{{news.title_En}}</a>
                </li>
              </ul>  
            </div> 
          </div>
        </div>
        <div class="banner-slide">
          <swiper :options="swiperOption" >
            <swiper-slide v-for="banner in bannerList" :key="banner.id">
              <a :href="banner.linkURL">
                <img :src="banner.image.key | qiniu" alt="" v-if="banner.image">
              </a>
              <div class="banner-text">
                <span v-if="isZh">{{banner.title}}</span>
                <span v-if="!isZh">{{banner.title_En}}</span>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
    </div>
    <div class="h50"></div>
    <div class="hot-wrap">
      <ul class="hot-list list-unstyled clearfix">
        <li v-for="hot in hotList" :key="hot.id">
          <div class="hot-img">
            <a :href="hot.linkUrl">
              <img :src="hot.image.key | qiniu" alt="" v-if="hot.image">
            </a>
          </div>
          <div class="hot-title" v-if="isZh">{{hot.title}}</div>
          <div class="hot-title" v-if="!isZh">{{hot.title_En}}</div>
          <div class="hot-brief" v-if="isZh">{{hot.description}}</div>
          <div class="hot-brief" v-if="!isZh">{{hot.description_En}}</div>
        </li>
      </ul>
    </div>
    <div class="edu-split fot-border"></div>
    </div>
    <div class="mcreative-wrap visible-xs mobile-common_wrap">
      <div class="mcreative-header">
        <div class="mcreative-date" v-if="isZh">
          <span class="font-en-bold">{{current | date('YYYY.M.D')}}</span>&nbsp;{{current | dateLocale('dddd')}}
        </div>
        <div class="mcreative-latest">
          <div class="mcreative-latest_title">{{$t('home.update')}}</div>
          <div class="mcreative-latest_list">
            <ul class="list-unstyled">
              <li v-for="news in newsList.list" :key="news.id">
                <span class="news-dot"></span>
                <a :href="news.url" v-if="isZh">{{news.title}}</a>
                <a :href="news.url" v-if="!isZh">{{news.title_En}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mcreative-swipe">
        <swiper :options="swiperOption" >
          <swiper-slide v-for="banner in bannerList" :key="banner.id">
            <a :href="banner.linkURL">
              <img :src="banner.image.key | qiniu" alt="" v-if="banner.image">
            </a>
            <div class="banner-text">
              <span v-if="isZh">{{banner.title}}</span>
              <span v-if="!isZh">{{banner.title_En}}</span>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
      <div class="mcreative-hot">
        <ul class="list-unstyled">
          <li v-for="hot in hotList" :key="hot.id">
            <a :href="hot.linkUrl" class="clearfix">
              <div class="mimg">
                <img :src="hot.image.key | qiniu" alt="" v-if="hot.image">
              </div>
              <div class="mcreative-hot_text">
                <div class="mcreative-hot_title">{{isZh ? hot.title : hot.title_En}}</div>
                <div class="mcreative-hot_brief">{{isZh ? hot.description : hot.description_En}}</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <creative-menu></creative-menu> -->
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import api from '@/api/api'
import CreativeMenu from '@/components/CreativeMenu'

export default {
  name: 'creative-index',
  data() {
    return {
      notNextTick: true,
      emailParam: null,
      current: new Date(),
      newsList: {},
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        // effect: 'fade',
        paginationClickable: true,
      },
      slideOption: {
        slidesPerView: 3,
        loop: true,
        slidesPerGroup: 3,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
      },
      bannerList: [],
      hotList: [],
    }
  },
  created() {
    api.getEduBanner().then((data) => {
      this.bannerList = data
    })
    api.getEduHot().then((data) => {
      this.hotList = data
    })
    api.getHomeNews().then((data) => {
      this.newsList = data
    })
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  components: {
    swiper,
    swiperSlide,
    CreativeMenu,
  },
}
</script>
<style lang="scss">
.creative-wrap {
  .creative-banner_wrap {
    margin-top: 40px;
    position: relative;
    .banner-slide {
      position: relative;
    }
    .banner-text {
      width: 390px;
      position: absolute;
      bottom: 25px;
      left: 30px;
      color: #fff;
      span {
        line-height: 35px;
        font-weight: bold;
        font-size: 34px;
      }
    }
  }
  .visit-info {
    position: absolute;
    z-index: 4;
    width: 198px;
    height: 331px;
    top: 36px;
    right: 40px;
    .vi-title {
      height: 42px;
      text-align: center;
      line-height: 42px;
      color: #eb3024;
      font-size: 28px;
      border-bottom: 1px dotted #fff;
    }
    .vi-time {
      height: 19px;
      line-height: 19px;
      font-size: 10px;
      color: #ccc;
      text-align: center;
      border-bottom: 1px dotted #fff;
      padding-bottom: 3px;
    }
    .vi-hour {
      border-bottom: 1px dotted #fff;
      padding-bottom: 3px;
      .pull-left {
        border-right: 1px dotted #fff;
      }
    }
    .vi-drive {
      height: 22px;
      border-bottom: 1px dotted #fff;
      .vi-drive_icon {
        background: url(../../assets/img/biaoji.png) center center no-repeat;
        width: 10px;
        height: 22px;
        float: left;
        margin-left: 70px;
      }
      .vi-drive_text {
        width: 60px;
        float: left;
        height: 22px;
        line-height: 17px;
        a {
          font-size: 10px;
          color: #fff;
        }
      }
    }
    .vi-news {
      padding-bottom: 5px;
      .vi-news_title {
        height: 28px;
        line-height: 28px;
        text-align: center;
        color: #ccc;
        font-size: 10px;
      }
    }
  }
  .visit-bg {
    opacity: 0.5;
    position: absolute;
    width: 202px;
    height: 331px;
    top: 36px;
    right: 38px;
    background: #000;
    z-index: 3;
  }
}
.hot-title {
  font-size: 20px;
  font-family: "Microsoft Yahei","SimSun";
  font-weight: bold;
  line-height: 20px;
}
.hot-brief {
  font-size: 12px;
  line-height: 18px;
  color: #555;
  font-family: "Microsoft Yahei","SimSun";
  margin-top: 8px;
}
.vi-news_list {
  width: 168px;
  float: left;
  margin-left: 15px;
  .news-dot {
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }
  ul {
    >li {
      overflow: hidden;
      a {
        color: #6dcff6;
        font-size: 13px;
        line-height: 18px;
        &:hover {
          color: #eb3024;
          text-decoration: underline;
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .mcreative-date {
    font-size: 18px;
    margin-top: 5px;
    color: #ccc;
    font-weight: bold;
    .font-en-bold {
      font-size: 24px;
    }
  }
  .mcreative-latest {
    .mcreative-latest_title {
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
      color: #ccc;
      font-size: 13px;
    }
    ul {
      margin-top: 10px;
      font-size: 13px;
      >li {
        margin-top: 6px;
        >a {
          display: block;
          color: #38c;
          font-weight: 700;
          padding-left: 8px;
          line-height: 18px;
          background: url(../../assets/img/icon-point1.png) 0px 9px no-repeat;
          background-size: 5px;
        }
      }
    }
  }
  .mcreative-swipe {
    position: relative;
    a {
      display: block;
    }
    img {
      width: 100%;
      height: auto;
    }
    .banner-text {
      font-size: 18px;
      color: #000;
      font-family: 'MetricSemibold', Arial, Helvetica, sans-serif;
      font-weight: bold;
      padding-top: 10px;
    }
    .swiper-pagination {
      top: 132px;
      width: 100%;
      text-align: right;
      padding: 0;
    }
    .swiper-pagination-bullet {
      width: 4px;
      height: 4px;
    }
  }
  .mcreative-hot {
    margin-top: 30px;
    border-top: 1px solid #000;
    ul {
      >li {
        margin-top: 25px;
        .mimg {
          width: 40%;
          float: left;
          img {
            width: 100%;
            height: auto;
          }
        }
        .mcreative-hot_text {
          float: left;
          padding-left: 8px;
          width: 60%;
          .mcreative-hot_title {
            font-size: 22px;
            color: #000;
            font-family: 'MetricSemibold',Arial, Helvetica, sans-serif;
            line-height: 22px;
            font-weight: bold;
          }
          .mcreative-hot_brief {
            margin-top: 10px;
            font-size: 13px;
            color: #555;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 16px;
            font-weight: normal;
            text-shadow: none;
          }
        }
      }
    }
  }
}
</style>
