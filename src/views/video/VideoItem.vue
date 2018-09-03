<template>
  <div class="video-item">
    <div @click="showVideo" class="hidden-xs">
        <div class="video-item_hd">
          <span class="video-item_title">{{$root.$i18n.locale == 'en-US' ? video.title_En : video.title}}</span>
          <span class="video-item_date">{{video.timelength}}&nbsp;&nbsp;{{video.publishTime | date('YYYY.MM.DD')}}</span>
        </div>
        <div class="video-item_bd">
          <img :src="video.titleImage.key | qiniu" alt="">
          <div class="video-play"></div>
        </div>
        <div class="activity-item_ft">
          <img :src="video.videoByImage.key|qiniu" width="80" height="80">
          <!-- <span class="video-icon" :class="$root.$i18n.locale == 'en' ? 'video-icon-en' :''"></span> -->
        </div>
    </div>
    <div class="visible-xs" @click="showMobileVideo(video)">
      <div class="img">
        <img :src="video.titleImage.key | qiniu" alt="">
        <div class="mvideo-play"></div>
      </div>
      <div class="mvideo-item_info">
        <span class="video-item_title">{{$root.$i18n.locale == 'en-US' ? video.title_En : video.title}}</span>
        <span class="video-item_date">{{video.publishTime | date('YYYY.MM.DD')}}</span>
        <span class="video-item_date">{{video.timelength}}</span>
      </div>
      <div class="mvidoe-item_badge">
        <img :src="video.videoByImage.key|qiniu" alt="">
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
              {{$root.$i18n.locale == 'zh-CN' ? video.title : video.title_En}}
            </div>
            <div class="mt-share eshare">
              <div class="jiathis_style">
                <a href="http://www.jiathis.com/share" class="jiathis sharethis" target="_blank" style=""></a>
              </div>
            </div>
          </div>
          <div class="clearfix">
            <img :src="video.videoByImage.key|qiniu" width="80" height="80">
          </div>
          <div class="clearfix">
            <embed :src="video.videoUrl" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="640" height="360" style="visibility:visible!important;">
          </div>
        </div>
      </div>
    </mt-popup> 
  </div>
</template>
<script>
import { Popup } from 'mint-ui'


export default {
  name: 'video-item',
  props: ['video'],
  data() {
    return {
      popupVisible: false,
    }
  },
  methods: {
    showVideo() {
      this.popupVisible = !this.popupVisible
    },
    showMobileVideo(video) {
      this.$emit('startVideo', video)
    },
  },
  components: {
    Popup,
  },
}
</script>
<style scoped lang="scss">
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
  .video-item {
    >a {
      display: block;
      cursor: pointer;
      &:hover {
        color: #ed3024;
        .video-item_date {
          color: #ed3024;
        }
      }
    }
    width: 316px;
    float: left;
    margin-left: 26px;
    &:nth-child(3n+1) {
      margin-left: 0;
    }
    .video-item_hd {
      min-height: 98px;
      .video-item_title {
        display: block;
        font-size: 17px;
        line-height: 20px;
        font-weight: bold;
        height: 68px;
        overflow: hidden;
      }
      .video-item_date {
        font-size: 18px;
        color: #999;
        line-height: 24px;
        font-family: 'MetricSemibold',Arial, Helvetica, sans-serif;
        margin-top: 10px;
        display: inline-block;
        width: 100%;
      }
    }
    .video-item_bd {
      width: 318px !important;
      height: 318px !important;
      overflow: hidden;
      position: relative;
      &:hover{
        .video-play {
          background-position:0px -37px;
        }
      }
    }
    .video-item_ft {
      height: 75px;
    }
  }
  @media screen and (max-width: 767px) {
    .en-style {
      .video-item {
        .video-item_title {
          font-family: 'MetricSemibold';
        }
        .video-item_date {
          font-family: 'MetricSemibold';
        }
      }
    }
    .video-item {
      display: inline-block;
      width: 47.4138%;
      margin-left: 0;
      margin-top: 25px;
      &:nth-child(even) {
        float: right;
      }
      .img {
        position: relative;
        img {
          width: 100%;
          height: auto;
        }
        .mvideo-play {
          position: absolute;
          width: 20px;
          height: 20px;
          right: 10px;
          bottom: 10px;
          background: url(../../assets/img/tbg-8.png) center center no-repeat;
          background-size: contain;
        }
      }
      .mvidoe-item_badge {
        img {
          max-width: 100%;
          height: auto;
        }
      }
      .mvideo-item_info {
        font-family: Helvetica;
        font-weight: bold;
      }
      .video-item_title {
        font-size: 14px;
        line-height: 18px;
        margin-top: 5px;
        display: block;
      }
      .video-item_date {
        font-size: 14px;
        color: #999;
        margin-top: 5px;
        display: block;
      }
    }
  }
</style>

