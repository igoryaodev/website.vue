<template>
  <div class="main-wrap">
    <div class="main-content">
      <div class="shop-wrap hidden-xs">
        <div class="clearfix">
          <div class="tleft">
            <div class="common-title">{{$t('shop.welcome')}}</div>
            <div class="wordg">{{$t('shop.p1')}}</div>
          </div>
          <div class="tright">
            <ul class="list-unstyled shop-info">
              <li>{{$t('shop.hour')}}</li>
              <li class="shop-day">{{$t('shop.day')}}</li>
              <li class="shop-time">10:00 AM-19:00 PM</li>
              <li class="shop-contact">{{$t('shop.contact')}}</li>
              <li class="shop-phone">+86 10 5780 0224</li>
              <li class="shop-email">uccastore@ucca.org.cn</li>
              <li class="shop-weibo"><span>{{$t('shop.weibo')}}：</span>@UCCASTORE</li>
              <li class="shop-wechat"><span>{{$t('shop.wechat')}}：</span>UCCAstore</li>
              <li class="shop-taobao"><a href="https://shop109959538.taobao.com/?spm=a230r.7195193.1997079397.2.6T1rZs">{{$t('shop.taobao')}}：UCCASTORE</a></li>
            </ul>
          </div>
        </div>
        <div class="shop-banner">
          <swiper :options="bannerOption">
            <swiper-slide v-for="banner in bannerList" :key="banner.id">
              <div class="shop-banner_img">
                <a :href="banner.url">
                  <img :src="banner.image.key | qiniu" alt="">
                </a>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="shop-rec">
          <div class="clearfix">
            <div class="shop-rec_left" v-if="shopContent.image">
              <img :src="shopContent.image.key | qiniu" alt="">
            </div>
            <div class="shop-rec_right">
              <div class="shop-rec_title" v-if="isZh">{{shopContent.title}}</div>
              <div class="shop-rec_title" v-if="!isZh">{{shopContent.title_En}}</div>
              <div class="shop-rec_date eshare clearfix">
                <div class="jiathis_style"><a href="http://www.jiathis.com/share" class="jiathis sharethis" target="_blank" style="">&nbsp;&nbsp;</a></div>
              </div>
              <div class="shop-rec_content" v-html="shopContent.description" v-if="isZh"></div>
              <div class="shop-rec_content" v-html="shopContent.description_En" v-if="!isZh"></div>
              <div class="shop-rec_more">
                <a :href="shopContent.linkUrl">{{$t('home.learn')}}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="product-list">
          <div class="product-list_title" v-if="$route.query.type == 1">{{$t('shop.limit')}}</div>
          <div class="product-list_title" v-if="$route.query.type == 2">{{$t('shop.design')}}</div>
          <div class="product-list_title" v-if="$route.query.type == 3">{{$t('shop.book')}}</div>
          <div class="product-list_title" v-if="$route.query.type == 4">{{$t('shop.catalogue')}}</div>
          <div class="product-list_title" v-if="$route.query.type == 5">{{$t('shop.event')}}</div>
          <div class="cat-select">
            <div class="cat-select_hd clearfix">
              <div class="cat-list">
                <ul class="list-unstyled clearfix">
                  <li :class="{active: !$route.query.type}"><a @click="search()">{{$t('program.all')}}</a></li>
                  <li :class="{active: $route.query.type == 1}"><a @click="search(1)" >{{$t('shop.limit')}}</a></li>
                  <li :class="{active: $route.query.type == 2}"><a @click="search(2)" >{{$t('shop.design')}}</a></li>
                  <li :class="{active: $route.query.type == 3}"><a @click="search(3)" >{{$t('shop.book')}}</a></li>
                  <li :class="{active: $route.query.type == 4}"><a @click="search(4)" >{{$t('shop.catalogue')}}</a></li>
                  <li :class="{active: $route.query.type == 5}"><a @click="search(5)" >{{$t('shop.event')}}</a></li>
                </ul>
              </div>
            </div>
            <div class="cat-select_bd">
              <div class="pro-total" v-if="isZh">
                <span class="now-nums">{{productList.list.length}}</span> 项搜索结果在所有
                <span class="all-nums">{{productList.totalRecords}}</span> 个项目中
              </div>
              <div class="pro-total" v-if="!isZh">
                <span class="now-nums">{{productList.list.length}}</span> out of 
                <span class="all-nums">{{productList.totalRecords}}</span> items
              </div>
            </div>
          </div>
          <div>
            <div class="clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
              <shop-item v-for="product in productList.list" :key="product.id" :product="product"></shop-item>
            </div>
            <p v-show="show" class="page-infinite-loading"></p>
          </div>
        </div>
      </div>
      <div class="footer-split hidden-xs"></div>
      <footer-menu></footer-menu>
      <div class=" mobile-shop_wrap visible-xs">
        <div class="mobile-shop_title">{{$t('shop.welcome')}}</div>
        <div class="mshop-open_time">
          <div class="mshop-open_title">{{$t('shop.hour')}}</div>
          <div class="mshop-open_info">{{$t('shop.day')}}&nbsp;&nbsp;10:00 AM-19:00 PM</div>
        </div>
        <div class="mshop-open_time">
          <div class="mshop-open_title">{{$t('shop.contact')}}</div>
          <div class="mshop-open_list">
            <div class="phone"><a href="tel:+86 10 5780 0224">+86 10 5780 0224</a></div>
            <div class="email"><a href="mailto:uccastore@ucca.org.cn">uccastore@ucca.org.cn</a></div>
            <div class="weibo">@UCCASTORE</div>
            <div class="wechat">UCCASTORE</div>
            <div class="taobao"><a href="https://shop109959538.taobao.com/?spm=a230r.7195193.1997079397.2.6T1rZs">{{$t('shop.taobao')}}</a></div>
          </div>
        </div>
        <div class="mshop-img_list">
          <swiper :options="swiperOption">
            <swiper-slide v-for="banner in bannerList" :key="banner.id">
              <div class="shop-banner_img">
                <a :href="banner.url">
                  <img :src="banner.image.key | qiniu" alt="">
                </a>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
        <div class="mshop-intro">{{$t('shop.p1')}}</div>
        <div class="mshop-other">
          <div class="mshop-recommand">
            <div class="mshop-other_title">{{$t('shop.rec')}}</div>
            <div class="img" v-if="shopContent.image">
              <img :src="shopContent.image.key | qiniu" alt="">
            </div>
            <div class="shop-rec_title" v-if="isZh">{{shopContent.title}}</div>
            <div class="shop-rec_title" v-if="!isZh">{{shopContent.title_En}}</div>
            <div class="shop-rec_content" v-html="shopContent.description" v-if="isZh"></div>
            <div class="shop-rec_content" v-html="shopContent.description_En" v-if="!isZh"></div>
            <a class="mexdetail-show_more" :href="shopContent.linkUrl">
              <div>{{$t('activity.viewMore')}}</div>
            </a>
          </div>
          <div class="mshop-filter">
            <div class="mobile-select_date">
              <p>{{$t('shop.cat')}}</p>
              <div class="mselect-date_list">
                <select v-model="selectedDate">
                  <option value="0">{{$t('program.all')}}</option>
                  <option value="2">{{$t('shop.limit')}}</option>
                  <option value="3">{{$t('shop.design')}}</option>
                  <option value="4">{{$t('shop.book')}}</option>
                  <option value="5">{{$t('shop.catalogue')}}</option>
                  <option value="6">{{$t('shop.event')}}</option>
                </select>
              </div>
            </div>
            <div class="mshop-filter_list clearfix">
              <div class="clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
                <shop-item v-for="product in productList.list" :key="product.id" :product="product"></shop-item>
              </div>
            </div>
            <div class="weshare clearfix">
              <div class="weshare-left">
                <img src="../../assets/img/store-weibo.png">
                <p>@UCCASTORE</p>
              </div>
              <div class="weshare-right">
                <img src="../../assets/img/store-wechat.jpg">
                <p>WeChat QR code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { InfiniteScroll } from 'mint-ui'
import FooterMenu from '@/components/FooterMenu'
import ShopItem from '@/views/shop/ShopItem'
import api from '@/api/api'

export default {
  name: 'shop',
  data() {
    return {
      bannerList: {},
      productList: {
        list: [],
      },
      selectedDate: 0,
      bannerOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        effect: 'fade',
        paginationClickable: true,
      },
      swiperOption: {
        pagination: '.swiper-pagination',
        effect: 'fade',
        paginationClickable: true,
      },
      shopContent: {},
      loading: false,
      show: false,
      page: 1,
    }
  },
  created() {
    api.getShopCarousel().then((data) => {
      this.bannerList = data
    })
    api.getShopContent().then((data) => {
      if (data) {
        this.shopContent = data[0]
      }
    })
    // api.getProductList({ page: 1, isEnable: '' }).then((data) => {
    //   this.productList = data
    // })
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  methods: {
    search(type) {
      this.$router.push({ name: 'shop', query: { type } })
      this.$router.go(0)
    },
    loadMore() {
      this.loading = true
      this.show = true
      setTimeout(() => {
        api.getProductList({ isEnable: '', page: this.page, category: this.$route.query.type }).then((data) => {
          /* eslint no-param-reassign: "off" */
          data.list = this.productList.list.concat(data.list)
          this.productList = data
          this.page += 1
          if (this.page > data.totalPages) {
            this.loading = true
          } else {
            this.loading = false
          }
          this.show = false
        })
      }, 500)
    },
  },
  components: {
    FooterMenu,
    swiper,
    swiperSlide,
    ShopItem,
    InfiniteScroll,
  },
}
</script>
<style lang="scss">
  .shop-info {
    >li {
      text-align: right;
      &:first-child {
        margin-top: 45px;
        font-family: 'Microsoft Yahei';
        color: #999;
        font-size: 17px;
      }
    }
    .shop-day {
      font-size: 13px;
      height: 10px;
    }
    .shop-time {
      font-size: 13px;
      line-height: 18px;
      margin-top: 5px;
      font-family: 'MetricSemibold',Arial, Helvetica, sans-serif;
    }
    .shop-contact {
      margin-top: 12px;
      color: #999;
      font-size: 17px;
      font-family: 'Microsoft Yahei' !important;
      line-height: 18px;
    }
    .shop-phone {
      font-size: 13px;
      font-family: 'MetricSemibold',Arial, Helvetica, sans-serif !important;
      color: #000;
      height: 10px;
      margin-top: 7px;
    }
    .shop-email {
      font-size: 13px;
      font-family: 'MetricSemibold' !important;
      margin-top: 3px;
      color: #000;
      height: 10px;
    }
    .shop-weibo,.shop-wechat,.shop-taobao {
      margin-top: 4px;
      font-size: 13px;
      font-family: 'MetricSemibold' !important;
      color: #000;
      height: 10px;
      span {
        font-size: 12px;
        font-weight: bold;
      }
      a {
        color: #ed3024;
        font-weight: bold;
        font-size: 12px;
      }
    }
  }
  .shop-banner {
    position: relative;
    height: 400px;
    .shop-banner_img {
      width: 1000px;
      height: 350px;
      position: relative;
      overflow: hidden;
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .swiper-container {
      overflow: visible;
    }
    .swiper-pagination {
      top: 362px !important;
    }
  }
  .product-list {
    margin-top: 35px;
  }
  .product-list_title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .shop-rec {
    padding: 50px 0px;
    border-top: solid 1px #000000;
    border-bottom: solid 1px #000000;
    margin: 40px 0;
    margin-top: 20px;
    .shop-rec_left {
      float: left;
      width: 212px;
      height: 317px;
    }
    .shop-rec_right {
      width: 770px;
      float: left;
      padding-left: 20px;
    }
    .shop-rec_title {
      font-family: 'Microsoft Yahei','Simhei',Arial, Helvetica, sans-serif;
      font-size: 26px;
    }
    .shop-rec_date {
      margin-top: 20px;
      .jiathis_style {
        width: 50px;
        float: left;
      }
    }
    .shop-rec_content {
      font-family: "微软雅黑",Arial;
      margin-top: 10px;
      color: #666;
      p {
        line-height: 20px;
        font-size: 11px;
        margin: 0;
      }
    }
    .shop-rec_more {
      float: left;
      width: auto;
      height: 20px;
      line-height: 18px;
      padding-left: 20px;
      margin-top: 20px;
      padding-right: 20px;
      background: url(../../assets/img/icon-show.jpg) no-repeat right center;
      a {
        font-family: "微软雅黑",Arial;
        font-size: 12px;
        color: #f1331d;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .mobile-shop_title {
      font-family: Helvetica;
      font-size: 23px;
      line-height: 25px;
      font-weight: bold;
      margin-top: 10px;
    }
    .mshop-open_time {
      margin-top: 10px;
      .mshop-open_title {
        font-family: Helvetica;
        font-size: 14px;
        line-height: 20px;
        color: #999999;
        font-weight: bold;
      }
      .mshop-open_info {
        font-family: Helvetica;
        font-size: 14px;
        line-height: 20px;
        font-weight: bold;
      }
    }
    .mshop-open_list {
      >div {
        width: 100%;
        text-indent: 10%;
        margin-top: 5px;
        height: 20px;
        line-height: 20px;
        font-size: 20px;
        font-family: 'MetricSemibold';
        font-weight: normal;
      }
      .phone {
        background: url(../../assets/img/d_tel.png) no-repeat 7px top;
        background-size: auto 16px;
      }
      .email {
        background: url(../../assets/img/d_email.png) no-repeat 2px center;
        background-size: auto 16px;
      }
      .weibo {
        background: url(../../assets/img/d_sina.png) no-repeat 3px center;
        background-size: auto 16px;
      }
      .wechat {
        background: url(../../assets/img/d_wechat.png) no-repeat 3px center;
        background-size: auto 16px;
      }
      .taobao {
        background: url(../../assets/img/d_taobao.png) no-repeat 3px center;
        background-size: auto 16px;
        a {
          color:#ed3024;
        }
      }
    }
    .mshop-img_list {
      margin-top: 25px;
      position: relative;
      padding-bottom: 15px;
      img {
        width: 100%;
        height: auto;
      }
      .swiper-pagination {
        position: absolute;
        width: 100%;
        height: 5px;
        bottom: 10px;
        top: auto;
      }
      .swiper-pagination-bullet {
        width: 5px;
        height: 5px;
      }
    }
    .mshop-intro {
      padding-top: 10px;
      font-family: Helvetica;
      font-size: 12px;
      line-height: 20px;
      padding-bottom: 10px;
    }
    .mshop-other {
      >div {
        margin-top: 25px;
        padding-top: 25px;
        border-top: 1px solid #000;
      }
      .mshop-other_title {
        font-size: 20px;
        font-family: Helvetica;
        font-weight: bold;
      }
      .img {
        margin-top: 20px
      }
      img {
        width: 100%;
        height: auto;
      }
      .shop-rec_title {
        font-family: Helvetica;
        font-size: 14px;
        color: #000000;
        font-weight: bold;
        line-height: 18px;
        margin-top: 10px;
      }
      .shop-rec_content {
        padding-top: 10px;
        font-family: Helvetica;
        font-size: 12px;
        line-height: 20px;
        padding-bottom: 10px;
      }
    }
    .mshop-filter_list {
      margin-top: 25px;
    }
    .weshare {
      margin-top: 50px;
      >div {
        float: left;
        width: 50%;
        text-align: center;
        img {
          width: 80%;
          height: auto;
        }
        p {
          font-family: Helvetica;
          font-size: 12px;
          margin-bottom: 0;
          margin-top: 5px;
        }
      }
    }
  }
</style>


