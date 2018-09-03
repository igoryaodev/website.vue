<template>
  <footer class="footer">
    <div class="footer-content clearfix hidden-xs">
      <div class="footer-content-left">
        <ul class="site-list list-unstyled">
          <li>
            <a><img src="../assets/img/logo2.png"></a>
          </li>
          <li>
            <div class="footer-menu">
              <ul class="list-unstyled">
                <li><a @click="showSub">{{$t('home.subscription')}}</a></li>
                <li><a @click="showFocus('#focus')">{{$t('home.followus')}}</a></li>
                <li><router-link :to="{name: 'media-all'}">{{$t('home.press')}}</router-link></li>
              </ul>
            </div>
          </li>
          <li>
            <div class="footer-menu">
              <ul class="list-unstyled">
                <li><router-link :to="{name: 'service'}">{{$t('home.service')}}</router-link></li>
                <li><router-link :to="{name: 'privacy'}">{{$t('home.privacy')}}</router-link></li>
                <li><router-link :to="{name: 'sitemap'}">{{$t('home.sitemap')}}</router-link></li>
                <li><a href="http://www.surveymonkey.com/s/NPCPWCZ" target="_blank">{{$t('home.feedback')}}</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div class="footer-menu">
              <ul class="list-unstyled">
                <li>{{$t('home.copyright')}}</li>
                <li>{{$t('home.rights')}}</li>
                <li>&nbsp;</li>
                <li>京ICP备08004966号-2.</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer-content-right">
        <ul class="share-list list-unstyled clearfix">
          <li><a href="http://weibo.com/ucca" target="_blank"></a></li>
          <li><a href="http://site.douban.com/ucca/" target="_blank"></a></li>
          <li class="weixin">
            <a href="#"></a>
            <div class="weixin-img">
              <img src="../assets/img/img-weixin.jpg" alt="">
            </div>
          </li>
          <li><a href="https://www.facebook.com/UCCA798?ref=ts&fref=ts" target="_blank"></a></li>
          <li><a href="http://instagram.com/ucca798" target="_blank"></a></li>
          <li><a href="https://twitter.com/UCCA798" target="_blank"></a></li>
        </ul>
      </div>
    </div>
    <div class="mfooter-wrap visible-xs">
      <div class="mfooter-slide">
        <swiper :options="swiperOption">
          <swiper-slide>
            <router-link class="clearfix" :to="{name: 'exhibition-master'}" exact>
              <div class="ficon-img ficon-1"></div>
              <div class="ficon-title">{{$t('home.exhibitions')}}</div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link class="clearfix" :to="{name: 'program'}">
              <div class="ficon-img ficon-2"></div>
              <div class="ficon-title">{{$t('home.programs')}}</div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link class="clearfix" :to="{name: 'support-member'}">
              <div class="ficon-img ficon-3"></div>
              <div class="ficon-title">{{$t('home.member')}}</div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link class="clearfix" :to="{name: 'shop'}">
              <div class="ficon-img ficon-4"></div>
              <div class="ficon-title ficon-store">UCCASTORE</div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link class="clearfix" :to="{name: 'support-master'}" :class="{'not-member': $route.name =='support-member'}">
              <div class="ficon-img ficon-5"></div>
              <div class="ficon-title">{{$t('home.support')}}</div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link class="clearfix" :to="{name: 'careers'}">
              <div class="ficon-img ficon-6"></div>
              <div class="ficon-title">{{$t('home.jobs')}}</div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link class="clearfix" :to="{name: 'Visit'}">
              <div class="ficon-img ficon-7"></div>
              <div class="ficon-title">{{$t('home.visit1')}}</div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link class="clearfix" :to="{name: 'contact'}">
              <div class="ficon-img ficon-8"></div>
              <div class="ficon-title">{{$t('home.contactUs')}}</div>
            </router-link>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
      <div class="mfooter-content">
        <div class="mfooter-service">
          <ul class="list-unstyled">
            <li><router-link :to="{name: 'service'}">{{$t('home.service')}}</router-link></li>
            <li><router-link :to="{name: 'privacy'}">{{$t('home.privacy')}}</router-link></li>
          </ul>
        </div>
        <div class="mfooter-focus">
          <div class="mfooter-focus_title">{{$t('home.followus')}}</div>
          <div class="mfooter-focus_img">
            <ul class="list-unstyled clearfix">
              <li><a href="http://weibo.com/ucca"><img src="../assets/img/i-6.png"></a></li>
              <li class="db"><a href="http://site.douban.com/ucca/"><img src="../assets/img/i-7.png"></a></li>
              <li><a><img src="../assets/img/i-8.png"></a></li>
              <li class="fb"><a href="https://www.facebook.com/UCCA798?ref=ts&fref=ts"><img src="../assets/img/i-9.png"></a></li>
              <li class="un"><a href="http://instagram.com/ucca798"><img src="../assets/img/i-10.png"></a></li>
              <li class="tw"><a href="https://twitter.com/UCCA798"><img src="../assets/img/i-11.png"></a></li>
            </ul>
          </div>
        </div>
        <div class="mfooter-copyright">© 2007-2016 Ullens Center for Contemporary Art.<br>All Rights Reserved.<br>京ICP备08004966号-2.</div>
        <div class="mfooter-qrcode">
          <img src="../assets/img/img-weixin.jpg">
        </div>
        <div class="mfooter-logo">
          <a>
            <img src="../assets/img/tbg-5.png">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import bus from '@/utility/bus'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'bot-footer',
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
      },
    }
  },
  methods: {
    showSub() {
      bus.$emit('subscribe')
    },
    showFocus(selector) {
      const anchor = this.$root.$el.querySelector(selector)
      document.body.scrollTop = anchor.offsetTop
      bus.$emit('focus')
    },
  },
  components: {
    swiper,
    swiperSlide,
  },
}
</script>
<style lang="scss">
  .footer {
    width: 1000px;
    margin: 0 auto;
    .footer-content {
      margin-top: 25px;
      margin-bottom: 75px;
    }
    .footer-content-left {
      float: left;
      width: 830px;
    }
    .footer-content-right {
      float: left;
      width: 170px;
    }
    .site-list {
      >li {
        float: left;
        font-family: 'Microsoft YaHei';
        &:first-child {
          margin-top: 3px;
        }
        +li {
          margin-left: 75px;
        }
        +li+li {
          margin-left: 90px;
        }
        +li+li+li {
          margin-left: 100px;
        }
      }
      .footer-menu {
        ul>li {
          font-family: 'Microsoft YaHei';
          font-size: 11px;
          color: #a4a5a4;
          line-height: 15px;
          >a {
            cursor: pointer;
            color: #a4a5a4;
          }
        }
      }
    }
  }
  .share-list {
    float: right;
    width: 134px;
    >li {
      float: left;
      width: 22px;
      height: 15px;
      background: url(../assets/img/icon-ft.png) no-repeat;
      background-position: 0 0;
      >a {
        float: left;
        width: 22px;
        height: 15px;
        cursor: pointer;
      }
      +li {
        background-position: -22px 0px;
      }
      +li+li {
        background-position: -44px 0px;
      }
      +li+li+li {
        background-position: -66px 0px;
      }
      +li+li+li+li {
        background-position: -88px 0px;
        +li {
            background-position: -110px 0px;
        }
      }
    }
    .weixin {
      position: relative;
      z-index: 3;
      &:hover .weixin-img {
        display: block;
      }
      .weixin-img {
        display: none;
        position: absolute;
        left: 0;
        top: 12px;
        width: 100px;
        height: 100px;
        overflow: hidden;
      }
    }
  }
  @media screen and (max-width:767px) {
    .footer {
      width: 90.625%;
      margin: 0 auto;
      padding-bottom: 55px;
    }
    .mfooter-content {
      margin-top: 25px;
    }
    .mfooter-slide {
      padding-top: 28px;
      padding-bottom: 28px;
      border-top: 3px solid #000;
      border-bottom: 1px solid #000;
      position: relative;
      .ficon-img {
        height: 30px;
        background-position: center top;
        background-repeat: no-repeat;
      }
      .ficon-1 {
        background-image: url(../assets/img/fia.png);
      }
      .ficon-2 {
        background-image: url(../assets/img/fib.png);
      }
      .ficon-3 {
        background-image: url(../assets/img/fid.png);
      }
      .ficon-4 {
        background-image: url(../assets/img/fie.png);
      }
      .ficon-5 {
        background-image: url(../assets/img/fif.png);
      }
      .ficon-6 {
        background-image: url(../assets/img/fig.png);
      }
      .ficon-7 {
        background-image: url(../assets/img/fih.png);
      }
      .ficon-8 {
        background-image: url(../assets/img/fii.png);
        background-position: 32px top;
      }
      .ficon-title {
        text-align: center;
        font-size: 12px;
        color: #999;
        margin-top: 8px;
      }
      .swiper-button-prev {
        position: absolute;
        top: 50%;
        margin-top: -10px;
        left: -10px;
        width: 20px;
        height: 20px;
        background: url(../assets/img/icon-prev1.png) 0px 0px no-repeat;
        background-size: contain;
      }
      .swiper-button-next {
        position: absolute;
        top: 50%;
        margin-top: -10px;
        right: -10px;
        width: 20px;
        height: 20px;
        background: url(../assets/img/icon-next1.png) 0px 0px no-repeat;
        background-size: contain;
      }
    }
    .mfooter-copyright {
      font-size: 12px;
      line-height: 15px;
      color: #aaa;
      margin-top: 5px;
      font-family: Helvetica;
    }
    .mfooter-qrcode,.mfooter-logo {
      margin-top: 28px;
      a {
        display: block;
        width: 39.6552%;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
</style>
