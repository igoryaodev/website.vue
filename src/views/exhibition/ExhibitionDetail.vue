<template>
  <div class="main-wrap">
    <div class="main-content">
      <div class="exdetail-wrap hidden-xs">
        <div class="h33"></div>
        <div class="exdetail-title clearfix">
          <div class="exdetail-title_left" v-if="isZh">{{activityDetail.name}}</div>
          <div class="exdetail-title_left" v-if="!isZh">{{activityDetail.name_En}}</div>
          <div class="exdetail-title_right">
            <p class="font-en-bold">{{activityDetail.startTime | date('YYYY.M.D')}}&nbsp;-&nbsp;{{activityDetail.endTime | date('YYYY.M.D')}}</p>
            <p class="exdetail-addr" v-if="isZh">{{activityDetail.hall}}</p>
            <p class="exdetail-addr" v-if="!isZh">{{activityDetail.hall_En}}</p>
          </div>
        </div>
        <div class="jump-list">
          <ul class="list-unstyled clearfix">
            <li :class="{active: type=='#eabout'}" @click="go('#eabout')">{{$t('activity.about')}}</li>
            <li :class="{active: type=='#eworks'}"  v-if="activityWorks && activityWorks.length > 0" @click="go('#eworks')">{{$t('activity.exhibitionWorks')}}</li>
            <li :class="{active: type=='#eviews'}" v-if="activityLives && activityLives.length > 0" @click="go('#eviews')">{{$t('activity.view')}}</li>
            <li :class="{active: type=='#eprograms'}" v-if="activityDetail.uccaEventDto" @click="go('#eprograms')">{{$t('activity.program')}}</li>
            <li :class="{active: type=='#evideos'}" v-if="activityDetail.uccaVideo" @click="go('#evideos')">{{$t('activity.video')}}</li>
            <li class="eshare">
              <div class="jiathis_style">
                <a href="http://www.jiathis.com/share" class="jiathis sharethis" target="_blank" style=""></a>
              </div>
            </li>
          </ul>
        </div>
        <div id="eabout">
          <div v-if="activityDetail.articleImage">
            <img :src="activityDetail.articleImage.key | qiniu" alt="">
          </div>
          <div class="exdetail-intro clearfix">
            <div class="exdetail-intro_left">
              <div v-html="activityDetail.description.value" v-if="activityDetail.description && isZh"></div>
              <div v-html="activityDetail.description.valueEn" v-if="activityDetail.description && !isZh"></div>
              <p class="download-activity">
                <a :href="activityDetail.fileString" v-if="isZh">下载“{{activityDetail.name}}”新闻稿</a>
                <a :href="activityDetail.fileString" v-if="!isZh">Download "{{activityDetail.name_En}}" press release</a>
              </p>
              <div class="intro-more" :class="{current: isMore}">
                <div v-html="activityDetail.readMore" v-if="isZh"></div>
                <div v-html="activityDetail.readMore_En" v-if="!isZh"></div>
              </div>
              <div class="more-control clearfix" :class="{current: isMore}" @click="showMore()" v-if="activityDetail.readMore">
                <span class="icon-more">{{$t('activity.readMore')}}</span>
                <span class="icon-hide">{{$t('activity.collapse')}}</span>
              </div>
            </div>
            <div class="exdetail-intro_right">
              <div class="exdetail-intro_content" v-html="activityDetail.workDescription" v-if="isZh"></div>
              <div class="exdetail-intro_content" v-html="activityDetail.workDescription_En" v-if="!isZh"></div>
              <!-- <ul class="list-unstyled" v-if="activityDetail.workDescription && isZh">
                <li v-for="pic in activityDetail.workDescription.split('\n')" :key="pic.id">{{pic}}</li>
              </ul>
              <ul class="list-unstyled" v-if="activityDetail.workDescription_En && !isZh">
                <li v-for="pic in activityDetail.workDescription_En.split('\n')" :key="pic.id">{{pic}}</li>
              </ul> -->
            </div>
          </div>
        </div>
        <div class="visit-border"></div>
        <div id="eworks" v-if="activityWorks && activityWorks.length > 0">
          <div class="eitem-title clearfix">
            <div class="eitem-title_left">{{$t('activity.exhibitionWorks')}}</div>
            <div class="eitem-title_right">
              <span class="all-step">&nbsp;/&nbsp;{{Math.ceil(activityWorks.length / 4)}}</span>
              <span class="now-step">{{activeIndex}}</span>
            </div>
          </div>
          <div class="eworks-list">
            <swiper :options="workOption" ref="work">
              <swiper-slide v-for="work in activityWorks" :key="work.id">
                 <div class="ework-item">
                  <div class="ework-item_hd">
                    <light-box album="exhibition" :src="work.bImage.key | qiniu" index-tmpl="${d}/${total}">
                      <img :src="work.image.key | qiniu" alt="">
                    </light-box>
                  </div>
                  <div class="ework-item_bd">
                    <p class="ework-item_art"  v-if="isZh">{{work.author}}</p>
                    <p class="ework-item_art" v-if="!isZh">{{work.author_En}}</p>
                    <p class="ework-item_name" v-if="isZh">{{work.watchTitle}}</p>
                    <p class="ework-item_name" v-if="!isZh">{{work.watchTitle_En}}</p>
                  </div>
                  <div class="ework-item_ft" v-if="isZh">
                    <span v-for="p in work.brief.split('\n')" :key="p.id">{{p}}</span>
                  </div>
                  <div class="ework-item_ft" v-if="!isZh">
                    <span v-for="p in work.brief_En.split('\n')" :key="p.id">{{p}}</span>
                  </div>
                </div> 
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev" slot="button-prev" @click="prev()"></div>
            <div class="swiper-button-next" slot="button-next" @click="next()"></div>
          </div>
          <div class="visit-border"></div>
        </div>
        
        <div id="eviews" class="eviews" v-if="activityLives && activityLives.length > 0">
          <div class="eitem-title clearfix">
            <div class="eitem-title_left">{{$t('activity.view')}}</div>
            <div class="eitem-title_right" v-if="activityLives.length > 8">
              <em class="eitem-toggle" :class="{current: isCurrent}" @click="showLive()"></em>
            </div>
          </div>
          <div class="eviews-list">
            <ul class="list-unstyled clearfix show-eviews" v-if="activityLives">
              <li v-for="(live,index) in activityLives" :key="live.id" v-if="index < 8">
                <light-box album="exhibition" :src="live.bImage.key | qiniu" index-tmpl="${d}/${total}"><img :src="live.image.key | qiniu" alt=""></light-box>
              </li>
            </ul>
            <transition name="slide">
              <ul class="list-unstyled clearfix more-eviews" :class="{current: isCurrent}" v-if="activityLives && activityLives.length > 8">
                <li v-for="(live,index) in activityLives" :key="live.id" v-if="index >7">
                  <light-box album="exhibition" :src="live.bImage.key | qiniu" index-tmpl="${d}/${total}"><img :src="live.image.key | qiniu" alt=""></light-box>
                </li>
              </ul>
            </transition>
          </div>
          <div class="visit-border"></div>
        </div>
        <div id="eprograms" v-if="activityDetail.uccaEventDto">
          <div class="eitem-title clearfix">
            <div class="eitem-title_left">{{$t('activity.program')}}</div>
          </div>
          <div class="eprograms-list">
              <swiper :options="programOption">
                <swiper-slide v-for="program in activityDetail.uccaEventDto" :key="program.id">
                  <div class="eprogram-item">
                    <div class="eprogram-item_hd">
                      <router-link :to="{name: 'program-detail',params:{id: program.id, type: program.dateType} }">
                        <img :src="program.titleImage.key | qiniu" alt="">
                      </router-link>
                    </div>
                    <div class="eprogram-item_bd">
                      <p class="eprogram-item_date">{{program.startDate | date('YYYY.M.D')}}</p>
                      <p class="eprogram-item_name" v-if="isZh">{{program.name}}</p>
                      <p class="eprogram-item_name" v-if="!isZh">{{program.name_En}}</p>
                    </div>
                    <div class="eprogram-item_ft">
                      <p>{{program.startTime}}-{{program.endTime}}</p>
                      <p v-if="isZh">{{program.videoHall}}</p>
                      <p v-if="!isZh">{{program.videoHall_En}}</p>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </div>
          <div class="visit-border"></div>
        </div>
        <div id="evideos" v-if="activityDetail.uccaVideo">
          <div class="eitem-title clearfix">
            <div class="eitem-title_left">{{$t('activity.video')}}</div>
          </div>
          <div class="evideos-list">
            <swiper :options="videoOption">
              <swiper-slide v-for="video in activityDetail.uccaVideo" :key="video.id">
                <div class="evideo-item" @click="showVideo(video)">
                  <div class="evideo-item_hd">
                    <img :src="video.titleImage.key | qiniu" alt="">
                    <div class="video-play"></div>
                  </div>
                  <div class="evideo-item_bd">
                    <p class="evideo-item_title" v-if="isZh">{{video.title}}</p>
                    <p class="evideo-item_title" v-if="!isZh">{{video.title_En}}</p>
                    <p class="evideo-item_time font-en-bold">{{video.timelength}}</p>
                  </div>
                  <div class="evideo-item_ft">
                    <img :src="video.videoByImage.key | qiniu" alt="">
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
        </div>
        <mt-popup v-model="popupVisible" popup-transition="popup-fade" :modal="true" :closeOnClickModal="true">
          <div>
            <div class="mt-header">
              <span class="icon-close" @click="showVideo"></span>
            </div>
            <div class="mt-box">
              <div class="clearfix">
                <div class="mt-title">
                  {{isZh ? video.title : video.title_En}}
                </div>
                <div class="mt-share eshare">
                  <div class="jiathis_style">
                    <a href="http://www.jiathis.com/share" class="jiathis sharethis" target="_blank" style=""></a>
                  </div>
                </div>
              </div>
              <div class="clearfix" v-if="video.videoByImage">
                <img :src="video.videoByImage.key|qiniu" width="80" height="80">
              </div>
              <div class="clearfix">
                <embed :src="video.videoUrl" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="640" height="360" style="visibility:visible!important;">
              </div>
            </div>
          </div>
        </mt-popup> 
      </div>
      <div class="footer-split hidden-xs"></div>
      <footer-member></footer-member>
      <div class="mexdetail-wrap mobile-common_wrap visible-xs">
        <div class="mexdetail-title" v-if="isZh">{{activityDetail.name}}</div>
        <div class="mexdetail-title" v-if="!isZh">{{activityDetail.name_En}}</div>
        <mobile-share></mobile-share>
        <div class="mexdetail-date">{{activityDetail.startTime | date('YYYY.M.D')}}&nbsp;-&nbsp;{{activityDetail.endTime | date('YYYY.M.D')}}<br>
          <span v-if="isZh">{{activityDetail.hall}}</span>
          <span v-if="!isZh">{{activityDetail.hall_En}}</span>
        </div>
        <div class="mexdetail-content">
          <div class="mexdetail-img" v-if="activityDetail.articleImage">
            <img :src="activityDetail.articleImage.key | qiniu">
            <div class="icon-info" @click="showInfo"></div>
          </div>
          <div class="icon-info_content" v-show="isInfo">
            <div class="icon-info_detail">
              <div class="icon_info_detail_close" @click="closeInfo"></div>
              <div class="icon_info_detail_corner"></div>
              <div class="icon_info_detail_content">
                <div v-html="activityDetail.workDescription" v-if="isZh"></div>
                <div v-html="activityDetail.workDescription_En" v-if="!isZh"></div>
              </div>
            </div>
          </div>
          <div class="mexdetail-content_intro" v-html="activityDetail.description.value" v-if="activityDetail.description && isZh"></div>
          <div class="mexdetail-content_intro" v-html="activityDetail.description.valueEn" v-if="activityDetail.description && !isZh"></div>
          <p class="download-activity">
            <a :href="activityDetail.fileString" v-if="isZh">下载“{{activityDetail.name}}”新闻稿</a>
            <a :href="activityDetail.fileString" v-if="!isZh">Download "{{activityDetail.name_En}}" press release</a>
          </p>
          <div class="mexdetail-content_more" v-show="isMore">
            <div v-html="activityDetail.readMore" v-if="isZh"></div>
            <div v-html="activityDetail.readMore_En" v-if="!isZh"></div>
          </div>
          <div class="mexdetail-show_more" @click="showMore" v-if="activityDetail.readMore && !isMore">
            <div>{{$t('activity.viewMore')}}</div>
          </div>
        </div>
        <div class="mexdetail-works" v-if="activityWorks && activityWorks.length >0">
          <div class="mexdetail-works_title">{{$t('activity.exhibitionWorks')}}</div>
          <div class="mexdetail-works_list clearfix">
            <div class="mexdetail-works_item" v-for="(w,index) in activityWorks" :key="w.id" :class="{hide: index > 3, show: isWorkMore}">
              <div class="img" @click="showWorkSwipe">
                <img :src="w.image.key | qiniu">
              </div>
              <div class="info">
                <p class="ework-item_art"  v-if="isZh">{{w.author}}</p>
                <p class="ework-item_art" v-if="!isZh">{{w.author_En}}</p>
                <p class="ework-item_name" v-if="isZh">{{w.watchTitle}}</p>
                <p class="ework-item_name" v-if="!isZh">{{w.watchTitle_En}}</p>
                <div class="ework-item_ft" v-if="isZh">
                  <span v-for="p in w.brief.split('\n')" :key="p.id">{{p}}</span>
                </div>
                <div class="ework-item_ft" v-if="!isZh">
                  <span v-for="p in w.brief_En.split('\n')" :key="p.id">{{p}}</span>
                </div>
              </div>
            </div>
            <image-swipe :show="workShow" @closeSwipe="closeWorkSwipe">
              <div class="imgswipe-wrap">
                <swiper :options="imgswipeOption">
                  <swiper-slide v-for="workimg in activityWorks" :key="workimg.id">
                    <div class="workimg-wrap"><img :src="workimg.image.key | qiniu"></div>
                  </swiper-slide>
                </swiper>
              </div>
            </image-swipe>
          </div>
          <div class="mexdetail-show_more" @click="showWorkMore" v-if="!isWorkMore && activityWorks.length > 4">
            <div>{{$t('activity.viewMore')}}</div>
          </div>
        </div>
        <div class="mexdetail-live" v-if="activityLives && activityLives.length > 0">
          <div class="mexdetail-title">{{$t('activity.view')}}</div>
          <div class="mexdetail-live_list clearfix">
            <div class="mexdetail-live_item" v-for="(l,index) in activityLives" :key="l.id" :class="{hide: index > 7, show: isLiveMore}" @click="showLiveSwipe">
              <img :src="l.image.key | qiniu">
            </div>
          </div>
          <div class="mexdetail-show_more" @click="showLiveMore" v-if="!isLiveMore && activityLives.length > 8">
            <div>{{$t('activity.viewMore')}}</div>
          </div>
          <image-swipe :show="liveShow" @closeSwipe="closeLiveSwipe">
            <div class="imgswipe-wrap">
              <swiper :options="imgswipeOption">
                <swiper-slide v-for="liveimg in activityLives" :key="liveimg.id">
                  <div class="workimg-wrap"><img :src="liveimg.bImage.key | qiniu"></div>
                </swiper-slide>
              </swiper>
            </div>
          </image-swipe>
        </div>
        <div class="mexdetail-program" v-if="activityDetail.uccaEventDto">
          <div class="mexdetail-title">{{$t('activity.program')}}</div>
          <div class="mexdetail-program_list clearfix">
            <div class="mexdetail-program_item" v-for="pro in activityDetail.uccaEventDto" :key="pro.id">
              <router-link :to="{name: 'program-detail',params:{id: pro.id, type: pro.dateType} }">
                <div class="img">
                  <img :src="pro.titleImage.key | qiniu" alt="">
                </div>
                <div class="mexdetail-program_title" v-if="isZh">{{pro.name}}</div>
                <div class="mexdetail-program_title" v-if="!isZh">{{pro.name_En}}</div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="mexdetail-video" v-if="activityDetail.uccaVideo">
          <div class="mexdetail-title">{{$t('activity.video')}}</div>
          <div class="mexdetail-video_list clearfix">
            <div class="mexdetail-video_item" v-for="vi in activityDetail.uccaVideo" :key="vi.id" @click="showMobileVideo(vi)">
              <div class="img">
                <img :src="vi.titleImage.key | qiniu">
                <div class="img-btn"></div>
              </div>
              <div class="mexdetail-video_time">{{vi.timelength}}</div>
            </div>
          </div> 
          <image-swipe :show="videoShow" @closeSwipe="closeVideoSwipe">
            <div class="imgswipe-wrap">
              <iframe frameborder="0" width="100%" height="auto" :src="mvideo.mobileVideoUrl" allowfullscreen></iframe>
            </div>
          </image-swipe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import LightBox from 'vue-lightbox'
import dateFns from 'date-fns'
import FooterMember from '@/components/FooterMember'
import MobileShare from '@/components/MobileShare'
import ImageSwipe from '@/components/ImageSwipe'
import api from '@/api/api'

export default {
  name: 'exhibition-detail',
  data() {
    return {
      activeIndex: 1,
      current: new Date(),
      notNextTick: true,
      isCurrent: false,
      isWorkMore: false,
      isLiveMore: false,
      isMore: false,
      type: '#eabout',
      activityDetail: {},
      activityWorks: [],
      activityLives: [],
      popupVisible: false,
      video: {},
      mvideo: {},
      workShow: false,
      liveShow: false,
      videoShow: false,
      imgswipeOption: {
        loop: true,
      },
      workOption: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        speed: 2000,
      },
      programOption: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        speed: 2000,
      },
      videoOption: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        speed: 2000,
        grabCursor: true,
      },
      isInfo: false,
    }
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  created() {
    api.getExhibitionById(this.$route.params.id).then((data) => {
      if (data.uccaEventDto && data.uccaEventDto.length > 0) {
        data.uccaEventDto.forEach((item) => {
          if (item.eventCategory === 7) {
            Object.assign(item, { dateType: '3' })
          } else {
            if (dateFns.isBefore(item.endDate, this.current)) {
              Object.assign(item, { dateType: '2' })
            }
            if (dateFns.isAfter(item.endDate, this.current)) {
              Object.assign(item, { dateType: '1' })
            }
          }
        })
      }
      this.activityDetail = data
    })
    api.getExhibitionWork(this.$route.params.id).then((data) => {
      this.activityWorks = data
    })
    api.getExhibitionLive(this.$route.params.id).then((data) => {
      this.activityLives = data
    })
  },
  methods: {
    showWorkSwipe() {
      this.workShow = true
    },
    closeWorkSwipe() {
      this.workShow = false
    },
    showLiveSwipe() {
      this.liveShow = true
    },
    closeLiveSwipe() {
      this.liveShow = false
    },
    closeVideoSwipe() {
      this.videoShow = false
    },
    next() {
      this.activeIndex += 1
    },
    prev() {
      this.activeIndex -= 1
    },
    showInfo() {
      this.isInfo = true
    },
    closeInfo() {
      this.isInfo = false
    },
    showLive() {
      this.isCurrent = !this.isCurrent
    },
    showMore() {
      this.isMore = !this.isMore
    },
    showWorkMore() {
      this.isWorkMore = !this.isWorkMore
    },
    showLiveMore() {
      this.isLiveMore = !this.isLiveMore
    },
    go(selector) {
      const anchor = this.$el.querySelector(selector)
      document.body.scrollTop = anchor.offsetTop
      this.type = selector
    },
    showVideo(video) {
      if (video) {
        this.video = video
      }
      this.$nextTick(() => {
        this.popupVisible = !this.popupVisible
      })
    },
    showMobileVideo(video) {
      this.$nextTick(() => {
        if (video) {
          this.mvideo = video
        }
        this.videoShow = true
      })
    },
  },
  components: {
    swiper,
    swiperSlide,
    FooterMember,
    LightBox,
    MobileShare,
    ImageSwipe,
  },
}
</script>
<style lang="scss">
.mint-popup{
    width: 740px;
    min-height: 560px; 
    .mt-header{
      width: 100%;
      height: 30px;
    }
    .mt-box{
      box-sizing: border-box;
      padding: 20px 50px;
      .mt-title{
        font-size: 28px;
        font-weight: bold;
        width: 580px;
        float: left;
        &:before,
        &:after{
          content: ''
        }
      }
    }
  }
 .slide-enter-active,.slide-leave-active {
   transition: max-height .5s;
 }
 .slide-enter,.slide-leave-to {
   max-height: 0;
 }
  .exdetail-title {
    margin-bottom: 35px;
  }
  .exdetail-title_left {
    float: left;
    width: 630px;
    font-size: 32px;
    line-height: 36px;
    font-weight: bold;
  }
  .exdetail-title_right {
    width: 370px;
    float: left;
    text-align: right;
    p {
      font-size: 24px;
      line-height: 22px;
      margin: 0;
    }
    .exdetail-addr {
      font-size: 16px;
    }
  }
  .exdetail-intro {
    margin-top: 10px;
    .exdetail-intro_left {
      width: 750px;
      float: left;
      font-family: 'Microsoft Yahei';
      line-height: 20px;
      img {
        max-width: 100%;
      }
    }
    .exdetail-intro_right {
      width: 239px;
      float: left;
      margin-left: 11px;
      text-align: right;
      font-size: 11px;
      color: #666;
      li {
        margin-top: 5px;
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
  .download-activity {
    font-size: 13px;
    font-family: 'Microsoft Yahei';
    line-height: 20px;
    a {
      color: #ed3024;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .intro-more {
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    &.current {
      max-height: 4500px;
    }
  }
  .more-control {
    font-size: 13px;
    font-family: 'Microsoft Yahei';
    line-height: 20px;
    color: #000;
    margin-top: 20px;
    span {
      float: left;
      font-size: 13px;
      font-weight: bold;
      color: #ed3024;
      cursor: pointer;
    }
    .icon-more {
      padding-right: 13px;
      background: url(../../assets/img/icon-show.jpg) right 3px no-repeat;
    }
    .icon-hide {
      display: none;
      padding-right: 13px;
      background: url(../../assets/img/icon-hide.jpg) right 3px no-repeat;
    }
    &.current {
      .icon-more {
        display: none;
      }
      .icon-hide {
        display: block;
      }
    }
  }
  .jump-list {
    border-bottom: 3px solid #000;
    margin-bottom: 20px;
    >ul{
      margin: 0;
      >li {
        float: left;
        margin-left: 20px;
        color: #999;
        font-size: 13px;
        line-height: 26px;
        cursor: pointer;
        letter-spacing: 3px;
        &:first-child {
          margin-left: 0;
        }
        &.active {
          color: #000;
        }
        &:last-child {
          float: right;
        }
      }
    }
  }
  .eitem-title {
    margin-bottom: 25px;
    .eitem-title_left {
      width: 750px;
      float: left;
      font-size: 28px;
    }
    .eitem-title_right {
      width: 239px;
      float: left;
      margin-left: 11px;
      span {
        float: right;
        font-size: 30px;
        color: #999;
        font-family: 'metric-regular',Arial, Helvetica, sans-serif;
      }
    }
  }
  .eworks-list {
    position: relative;
    .ework-item {
      width: 239px;
      .ework-item_hd {
        height: 239px;
        cursor: pointer;
      }
      p {
        margin: 0;
      }
      .ework-item_art {
        margin-top: 20px;
        font-size: 13px;
      }
      .ework-item_name {
        font-style: normal;
        font-size: 15px;
        color: #666;
        font-family: 'metric-regular',Arial, Helvetica, sans-serif;
        margin-top: 3px
      }
      .ework-item_ft {
        span {
          display: block;
          font-size: 11px;
          font-family: 'Microsoft Yahei';
          margin-top: 3px;
          color: #666;
          &:first-child {
            margin-top: 0;
          }
        }
      }
    }
  }
  .eitem-toggle {
    float: right;
    width: 24px;
    height: 24px;
    background: url(../../assets/img/icon-plus.jpg) 0px 0px no-repeat;
    cursor: pointer;
    margin-top: 4px;
    &:hover {
      background-position:0px -48px;
    }
    &.current {
      background-position: 0px -24px;
      &:hover {
        background-position:0px -72px;
      }
    }
  }
  .show-eviews,.more-eviews {
    >li {
      width: 239px;
      float: left;
      margin-left: 14px;
      margin-top: 5px;
      cursor: pointer;
      &:nth-child(4n+1) {
        margin-left: 0;
      }
    }
  }
  .more-eviews {
    max-height: 0;
    transition: max-height 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    overflow: hidden;
    &.current {
      max-height: 600px;
    }
  }
  .eprograms-list {
    position: relative;
    .eprogram-item {
      width: 239px;
      margin-top: 5px;
      .eprogram-item_hd {
        height: 239px;
        img {
          height: 100%;
          width: auto;
        }
      }
      .eprogram-item_date {
        font-size: 30px;
        color: #999;
        margin-top: 10px;
        line-height: 22px;
        font-family: 'MetricSemibold',arial;
        margin-bottom: 0;
      }
      .eprogram_item_name {
        font-size: 13px;
        line-height: 18px;
        margin-top: 8px;
        margin-bottom: 0;
      }
      .eprogram-item_ft {
        p {
          font-size: 11px;
          color: #666;
          line-height: 18px;
          margin-top: 6px;
          margin-bottom: 0;
          font-family: 'Microsoft Yahei',Arial, Helvetica, sans-serif;
        }
      }
    }
  }
  .evideos-list {
    position: relative;
    .evideo-item {
      &:hover {
        .video-play {
          background-position:0px -37px;
        }
      }
      .evideo-item_hd {
        width: 239px;
        height: 239px;
        overflow: hidden;
        position: relative;
        img {
          width: 100%;
          height: auto;
        }
      }
      .evideo-item_title {
        margin-top: 15px;
        font-size: 13px;
        line-height: 18px;
        margin-bottom: 0;
      }
      .evideo-item_time {
        font-size: 18px;
        color: #999;
        margin-top: 10px;
        margin-bottom: 0;
      }
    }
  }
  @media screen and (max-width:767px) {
    .mexdetail-date {
      font-size: 20px;
      line-height: 19px;
      font-family: Helvetica;
      font-weight: bold;
      margin-top: 15px;
    }
    .mexdetail-content {
      margin-top: 15px;
      img {
        max-width: 100%;
        height: auto;
      }
      .mexdetail-img {
        position: relative;
      }
      .icon-info {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 10px;
        bottom: 12px;
        background: url(../../assets/img/tbg-14.png) center center no-repeat;
        background-size: contain;
      }
      .icon-info_content {
        position: relative;
        z-index: 5;
        .icon-info_detail {
          position: absolute;
          width: 100%;
          top: 0px;
          left: 0px;
          background: #fff;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }
        .icon_info_detail_close {
          width: 30px;
          height: 30px;
          position: absolute;
          right: 5px;
          top: 5px;
          background: url(../../assets/img/tbg-20.png) 0px 0px no-repeat;
          z-index: 5;
        }
        .icon_info_detail_corner {
          position: absolute;
          width: 20px;
          height: 10px;
          top: -10px;
          right: 14px;
          background: url(../../assets/img/tbg-15.png) center center no-repeat;
        }
        .icon_info_detail_content {
          padding: 10px 0px;
          font-size: 12px;
          font-family: Arial, Helvetica, sans-serif;
          line-height: 19px;
          width: 92%;
          margin: 0px auto;
          p {
            margin: 0;
          }
        }
      }
      .mexdetail-content_intro {
        margin-top: 15px;
        font-size: 12px;
        line-height: 19px;
        font-family: Helvetica;
      }
      .download-activity {
        font-size: 12px;
      }
    }
    .mexdetail-works {
      margin-top: 25px;
      padding-top: 25px;
      border-top: 1px solid #000;
      .mexdetail-works_title {
        font-size: 20px;
        line-height: 12px;
        padding-top: 6px;
        font-family: Helvetica;
        font-weight: bold;
      }
      .mexdetail-works_list {
        margin-top: 10px;
        .mexdetail-works_item {
          display: inline-block;
          width: 47.5862%;
          margin-top: 12px;
          &:nth-child(even) {
            float: right;
          }
          img {
            max-width: 100%;
            height: auto;
          }
          .ework-item_art {
            font-family: 'metric-semibold', Arial, Helvetica, sans-serif;
            font-size: 12px;
            line-height: 15px;
            padding-bottom: 2px;
            margin-top: 5px;
            padding-top: 0px;
            margin-bottom: 0;
          }
          .ework-item_name {
            font-family: 'metric-regular', Arial, Helvetica, sans-serif;
            font-size: 12px;
            color: #000;
            line-height: 12px;
            padding-top: 3px;
            margin-bottom: 0;
          }
          .ework-item_ft {
            span {
              display: block;
              font-family: 'metric-regular', Arial, Helvetica, sans-serif;
              font-size: 12px;
              color: #000;
              line-height: 12px;
              padding-top: 3px;
              margin-bottom: 0;
            }
          }
        }
      }
    }
    .mexdetail-live,.mexdetail-program,.mexdetail-video {
      margin-top: 25px;
      border-top: 1px solid #000;
    }
    .mexdetail-live_list {
      margin-top: 10px;
      .mexdetail-live_item {
        width: 25.862069%;
        float: left;
        margin-top: 10px;
        &:nth-child(4n+4) {
          width: 22.413793%;
          img {
            width: 100%;
            height: auto;
          }
        }
        img {
          width: 86.66666667%;
          height: auto;
        }
      }
    }
    .mexdetail-program_list {
      margin-top: 10px;
      .mexdetail-program_item {
        width: 47.5862%;
        display: inline-block;
        margin-top: 27px;
        img {
          width: 100%;
          height: auto;
        }
        &:nth-child(even) {
          width: 47.5862%;
          float: right;
        }
        .mexdetail-program_title {
          font-size: 14px;
          line-height: 15px;
          margin-top: 10px;
          font-family: Helvetica;
          font-weight: bold;
          color: #000;
        }
      }
    }
    .mexdetail-video_list {
      margin-top: 10px;
      .mexdetail-video_item {
        width: 25.862069%;
        float: left;
        .img {
          position: relative;
          img {
            width: 100%;
            height: auto;
          }
          .img-btn {
            position: absolute;
            width: 18px;
            height: 18px;
            z-index: 1;
            left: 7px;
            bottom: 7px;
            background: url(../../assets/img/tbg-8.png) 0px 0px no-repeat;
            background-size: contain;
          }
        }
        &:nth-child(4n+4) {
          width: 22.413793%;
        }
        .mexdetail-video_time {
          font-size: 14px;
          margin-top: 9px;
          font-family: Helvetica;
          font-weight: bold;
        }
      }
    }
  }
</style>


