<template>
    <div class="main-wrap">
      <div class="main-content">
        <div class="mbanner-wrap visible-xs">
          <div class="mbanner-item" v-for="s in bannerList" :key="s.id">
            <router-link v-if="s.activityType == 1 && s.uccaActivyDto" :to="{name: 'exhibition-detail',params: {id: s.activityId,type:1}}">
              <img :src="s.uccaActivyDto.coverImage.key | qiniu" alt="" v-if="s.uccaActivyDto.coverImage">
            </router-link>
            <router-link v-if="s.activityType == 2 && s.uccaEventDto" :to="{name: 'program-detail',params: {id: s.activityId,type: 1}}">
              <img :src="s.uccaEventDto.coverImage.key | qiniu" alt="" v-if="s.uccaEventDto.coverImage">
            </router-link>
            <div class="mbanner-item_title" v-if="s.uccaActivyDto || s.uccaEventDto">
              <span class="banner-txt_hd" v-if="s.activityType == 1 && $root.$i18n.locale=='zh-CN' ">{{s.uccaActivyDto.name}}</span>
              <span class="banner-txt_hd" v-if="s.activityType == 1 && $root.$i18n.locale=='en-US' ">{{s.uccaActivyDto.name_En}}</span>
              <span class="banner-txt_hd" v-if="s.activityType == 2 && $root.$i18n.locale=='zh-CN' ">{{s.uccaEventDto.name}}</span>
              <span class="banner-txt_hd" v-if="s.activityType == 2 && $root.$i18n.locale=='en-US'">{{s.uccaEventDto.name_En}}</span>
            </div>
          </div>
        </div> 
        <div class="mhot-wrap clearfix visible-xs">
          <div class="mhot-item" v-for="hot in hotList" :key="hot.id">
            <div class="mhot-item_img">
              <router-link v-if="hot.activityType == 1" :to="{name: 'exhibition-detail',params: {id: hot.activityId,type: 1}}">
                <img :src="hot.uccaActivyDto.pageImage.key | qiniu" alt="" v-if="hot.uccaActivyDto.pageImage">
              </router-link>
              <router-link v-if="hot.activityType == 2" :to="{name: 'program-detail',params: {id: hot.activityId,type: 1}}">
                <img :src="hot.uccaEventDto.pageImage.key | qiniu" alt="" v-if="hot.uccaEventDto.pageImage">
              </router-link>
            </div>
            <div class="mhot-item_title">
              <span v-if="hot.activityType == 1 && $root.$i18n.locale == 'zh-CN' " >{{hot.uccaActivyDto.name}}</span>
              <span v-if="hot.activityType == 1 && $root.$i18n.locale == 'en-US' " >{{hot.uccaActivyDto.name_En}}</span>
              <span v-if="hot.activityType == 2 && $root.$i18n.locale == 'zh-CN' ">{{hot.uccaEventDto.name}}</span>
              <span v-if="hot.activityType == 2 && $root.$i18n.locale == 'en-US' ">{{hot.uccaEventDto.name_En}}</span>
            </div>
          </div>
        </div>
        <div class="h20 hidden-xs"></div>
        <div class="banner-wrap hidden-xs">
          <div class="visit-bg"></div>
          <div class="visit">
            <div class="v1">{{$t('home.visitTime')}}</div>
            <div class="v2 clearfix">
              <div class="v2-left">
                <div class="v2-left-hd">{{$t('home.tuesday')}}</div>
                <div class="v2-left-bd">{{$t('home.to')}}</div>
                <div class="v2-left-ft">{{$t('home.sunday')}}</div>
              </div>
              <div class="v2-right">
                <div class="v2-right-hd">
                  <span class="font-en-bold">10:00</span>
                </div>
                <div class="v2-right-bd">
                  <span class="font-en-bold">-</span>
                  <span class="font-en-bold end-time">19:00</span>
                </div>
                <div class="v2-right-ft">{{$t('home.lastEntry')}} 18:30</div>
              </div>
            </div>
            <div class="v3">
              <div class="v3-title">{{$t('home.newsLetter')}}</div>
              <div class="v3-content clearfix">
                <form action="https://ucca.us5.list-manage.com/subscribe/post?u=6dd7fea2625efd05a367a346f&amp;id=56ed2f9e84" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <input v-if="$root.$i18n.locale == 'zh-CN' " type="email" placeholder="您的邮箱地址" name="EMAIL" class="email" id="mce-EMAIL" required>
                  <input v-if="$root.$i18n.locale == 'en-US' " type="email" placeholder="Your Email Address" name="EMAIL" class="email" id="mce-EMAIL" required>
                  <button class="submit-email" type="submit" name="subscribe" id="mc-embedded-subscribe"></button>
                </form>
              </div>
            </div>
            <div class="v4">
              {{$t('home.china')}}
              <br>
              {{$t('home.platform')}}
            </div>
            <div class="v5">
              <a href="http://cn.bing.com/ditu/?FORM=Z9LH4#Y3A9MzkuOTMwNzYxODU3ODIzNX4xMTYuMzc5MjM0MzE0Jmx2bD0xMSZzdHk9ciZydHA9YWRyLn5wb3MuMzkuOTgzMzk1XzExNi40ODQxODlfJUU1JThDJTk3JUU0JUJBJUFDJUU1JUI4JTgyJUU2JTlDJTlEJUU5JTk4JUIzJUU1JThDJUJBJUU5JTg1JTkyJUU0JUJCJTk5JUU2JUExJUE1JUU4JUI3JUFGNCVFNSU4RiVCNzc5OCVFOCU4OSVCQSVFNiU5QyVBRiVFNSU4QyVCQV8lRTUlQjAlQTQlRTQlQkMlQTYlRTYlOTYlQUYlRTUlQkQlOTMlRTQlQkIlQTMlRTglODklQkElRTYlOUMlQUYlRTQlQjglQUQlRTUlQkYlODNfX2VfWU40MDY3eDM0MjY4MjI0Jm1vZGU9RCZydG9wPTB+MH4wfg==">{{$t('home.map')}}</a>
            </div>
          </div>
          <div class="banner-list">
            <swiper :options="swiperOption">
              <swiper-slide v-for="slide in bannerList" :key="slide.id">
                <router-link v-if="slide.activityType == 1 && slide.uccaActivyDto" :to="{name: 'exhibition-detail',params: {id: slide.activityId,type:1}}">
                  <img :src="slide.uccaActivyDto.coverImage.key | qiniu" alt="" v-if="slide.uccaActivyDto.coverImage">
                </router-link>
                <router-link v-if="slide.activityType == 2 && slide.uccaEventDto" :to="{name: 'program-detail',params: {id: slide.activityId,type: 1}}">
                  <img :src="slide.uccaEventDto.coverImage.key | qiniu" alt="" v-if="slide.uccaEventDto.coverImage">
                </router-link>
                <div class="banner-txt" v-if="slide.uccaActivyDto || slide.uccaEventDto">
                  <span class="banner-txt_hd" v-if="slide.activityType == 1 && $root.$i18n.locale=='zh-CN' ">{{slide.uccaActivyDto.name}}</span>
                  <span class="banner-txt_hd" v-if="slide.activityType == 1 && $root.$i18n.locale=='en-US' ">{{slide.uccaActivyDto.name_En}}</span>
                  <span class="banner-txt_hd" v-if="slide.activityType == 2 && $root.$i18n.locale=='zh-CN' ">{{slide.uccaEventDto.name}}</span>
                  <span class="banner-txt_hd" v-if="slide.activityType == 2 && $root.$i18n.locale=='en-US'">{{slide.uccaEventDto.name_En}}</span>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>

        <div class="h50 hidden-xs"></div>
        <div class="hot-wrap hidden-xs">
          <ul class="hot-list list-unstyled clearfix">
            <li v-for="hot in hotList" :key="hot.id">
              <div class="hot-img">
                <router-link v-if="hot.activityType == 1" :to="{name: 'exhibition-detail',params: {id: hot.activityId,type: 1}}">
                  <img :src="hot.uccaActivyDto.pageImage.key | qiniu" alt="" v-if="hot.uccaActivyDto.pageImage">
                </router-link>
                <router-link v-if="hot.activityType == 2" :to="{name: 'program-detail',params: {id: hot.activityId,type: 1}}">
                  <img :src="hot.uccaEventDto.pageImage.key | qiniu" alt="" v-if="hot.uccaEventDto.pageImage">
                </router-link>
              </div>
              <div class="hot-caption">
                <router-link v-if="hot.activityType == 1 && $root.$i18n.locale == 'zh-CN' " :to="{name: 'exhibition-detail',params: {id: hot.activityId,type: 1}}">{{hot.uccaActivyDto.name}}</router-link>
                <router-link v-if="hot.activityType == 1 && $root.$i18n.locale == 'en-US' " :to="{name: 'exhibition-detail',params: {id: hot.activityId,type: 1}}">{{hot.uccaActivyDto.name_En}}</router-link>
                <router-link v-if="hot.activityType == 2 && $root.$i18n.locale == 'zh-CN' " :to="{name: 'program-detail',params: {id: hot.activityId,type: 1}}">{{hot.uccaEventDto.name}}</router-link>
                <router-link v-if="hot.activityType == 2 && $root.$i18n.locale == 'en-US' " :to="{name: 'program-detail',params: {id: hot.activityId,type: 1}}">{{hot.uccaEventDto.name_En}}</router-link>
              </div>
            </li>
          </ul>
        </div>

        <div class="project-wrap hidden-xs">
          <swiper :options="slideOption">
            <swiper-slide>
              <div class="project-img">
                <a>
                  <img src="../assets/img/project1.jpg" alt="">
                </a>
              </div>
              <div class="project-info">
                <div class="project-info-title">
                  <a>{{$t('home.docent')}}</a>
                </div>
                <div class="project-info-content">
                  <a>{{$t('home.docentCon')}}</a>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="project-img">
                <a href="http://www.creative-studio.cn/">
                  <img src="../assets/img/project2.jpg" alt="">
                </a>
              </div>
              <div class="project-info">
                <div class="project-info-title">
                  <a href="http://www.creative-studio.cn/">{{$t('home.studio')}}</a>
                </div>
                <div class="project-info-content">
                  <a href="http://www.creative-studio.cn/">{{$t('home.studioCon')}}</a>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="project-img">
                <router-link :to="{name: 'member-benefit'}">
                  <img src="../assets/img/project3.jpg" alt="">
                </router-link>
              </div>
              <div class="project-info">
                <div class="project-info-title">
                  <router-link :to="{name: 'member-benefit'}">{{$t('home.proMember')}}</router-link>
                </div>
                <div class="project-info-content">
                  <router-link :to="{name: 'member-benefit'}">{{$t('home.memberCon')}}</router-link>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>

      </div>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import { MessageBox } from 'mint-ui'
    import api from '@/api/api'

    // const url1 = require('../assets/img/project1.jpg')
    // const url2 = require('../assets/img/project2.jpg')
    // const url3 = require('../assets/img/project3.jpg')

    export default {
      name: 'index',
      data() {
        return {
          notNextTick: true,
          emailParam: null,
          swiperOption: {
            autoplay: 3000,
            pagination: '.swiper-pagination',
            effect: 'fade',
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
          // proList: [
          //   { id: 1, url: url1, title: this.$t('home.docent'), content: this.$t('home.docentCon') },
          //   { id: 2, url: url2, title: this.$t('home.studio'), content: this.$t('home.studioCon') },
          //   { id: 3, url: url3, title: this.$t('home.proMember'),  },
          // ],
        }
      },
      created() {
        // pagetype 1:banner 2: hot
        api.getHome({ pageType: 1 }).then((data) => {
          if (data) {
            this.bannerList = data.list
          }
        })
        api.getHome({ pageType: 2 }).then((data) => {
          if (data) {
            this.hotList = data.list
          }
        })
      },
      methods: {
        submit() {
          if (this.emailParam) {
            api.subscribe({ email: this.emailParam }).then((data) => {
              if (data) {
                MessageBox.alert(this.$t('home.success'), '').then(() => {
                  this.emailParam = null
                })
              }
            })
          } else {
            MessageBox.alert(this.$t('home.pleaseEmail'), '')
          }
        },
      },
      components: {
        swiper,
        swiperSlide,
      },
    }
</script>
<style lang="scss">
.banner-wrap {
  position: relative;
  height: 400px;
}
.banner-list {
  img {
    height: 400px;
    width: 100%;
  }
}
.visit-bg {
  position: absolute;
  width: 203px;
  height: 331px;
  top: 36px;
  right: 38px;
  background: #000;
  z-index: 3;
  opacity: .6;
  filter: alpha(opacity=60);
}
.visit {
  position: absolute;
  width: 197px;
  height: 331px;
  top: 36px;
  right: 41px;
  z-index: 4;
  .v1 {
    height: 66px;
    padding-top: 20px;
    font-weight: bold;
    letter-spacing: 5px;
    font-size: 20px;
    color: #ed3024;
    text-align: center;
  }
  .v2 {
    color: #fff;
    border-bottom: 1px dotted #fff;
  }
  .v2-left {
    float: left;
    width: 70px;
    margin-left: 10px;
  }
  .v2-left-hd, .v2-left-ft{
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    margin-top: 8px;
    letter-spacing: 5px;
    font-weight: bold;
  }
  .v2-left-bd {
    color: #ccc;
    font-size: 10px;
    line-height: 13px;
    text-align: center;
    margin-top: 8px;
  }
  .v2-right {
    float: left;
    width: 101px;
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px dotted #fff;
  }
  .v2-right-hd,.v2-right-bd {
    float: left;
    font-size: 33px;
    height: 27px;
    line-height: 32px;
    span {
      float: left;
    }
  }
  .v2-right-hd {
    margin-top: 9px;
    span {
      padding-left: 14px;
    }
  }
  .v2-right-bd {
    margin-top: -3px;
    span.end-time {
      padding-left: 5px;
    }
  }
  .v2-right-ft {
    color: #ccc;
    line-height: 13px;
    margin-top: 2px;
    padding-bottom: 5px;
    font-size: 10px;
    box-sizing: content-box;
    float: left;
  }
  .v3 {
    border-bottom: 1px dotted #fff;
    .v3-title {
      text-align: center;
      font-size: 10px;
      color: #ccc;
      margin-top: 10px;
    }
    form {
      width: 100%;
      float: left;
      margin-top: 15px;
      padding-bottom: 18px;
    }
    .submit-email {
      width: 27px;
      height: 33px;
      float: left;
      border: 2px solid #fff!important;
      border-left: none!important;
      background: url(../assets/img/icon-arrow-right.png) center center no-repeat #000!important;
      color: #000!important;
      text-indent: -999em;
      font-size: 0px!important;
      cursor: pointer;
      padding: 0;
    }
  }
  .v3-content input {
    width: 144px;
    height: 33px;
    float: left;
    border: 2px solid #fff;
    background: #000;
    color: #fff;
    margin-left: 10px;
    font-size: 13px;
    padding: 0 6px;
    &:focus {
      outline: none;
    }
  }
  .v4 {
    font-size: 14px;
    color: #fff;
    text-align: center;
    line-height: 20px;
    padding: 6px 0;
    box-sizing: content-box;
    border-bottom: 1px dotted #fff;
  }
  .v5 {
    text-align: center;
    a {
      color: #fff;
      font-size: 10px;
      padding-left: 8px;
      background: url('../assets/img/icon-position.png') left 3px no-repeat;
    }
  }
}
.hot-wrap {
  margin-bottom: 45px;
}
.hot-list {
  >li {
    float: left;
    width:240px;
    margin-left: 13px;
    &:first-child {
      margin-left: 0;
    }
    .hot-img {
      margin-bottom: 10px;
      img {
        max-width: 100%;
        height: auto;
      }
    }
    .hot-caption {
      font-size: 16px;
      line-height: 20px;
      color: #000;
      font-weight: bold;
      margin-bottom: 10px;
      a {
        color: #000;
      }
    }
  }
}
.project-wrap {
  padding: 45px 0;
  border-width: 1px 0 3px 0;
  border-style: solid;
  border-color: #000;
  position: relative;
  .swiper-container {
    width: 999px;
  }
  .project-img {
    float: left;
    width: 100px;
    margin-top: 8px;
    >a {
      float: left;
      width: 100%;
      font-size: 0;
    }
  }
  .project-info {
    width: 170px;
    float: left;
    margin-left: 15px;
    .project-info-title {
      font-size: 16px;
      color: #999;
      font-weight: bold;
      a {
        color: #999;
      }
    }
    .project-info-content {
      font-size: 13px;
      line-height: 18px;
      color: #000;
      a {
        color: #000;
      }
    }
  }
}
</style>