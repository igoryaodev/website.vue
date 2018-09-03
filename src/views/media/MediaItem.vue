<template>
  <div class="wrap">
    <div class="activity-item" @click="showVideo">
        <div class="activity-item_hd">
          <span class="activity-item_title">{{$root.$i18n.locale == 'en' ? video.name_En : video.name}}</span>
          <span class="activity-item_date">{{video.startTime | date('YYYY.MM.DD')}} - {{video.endTime | date('YYYY.MM.DD')}}</span>
          <span class="download-item">
            <a class="danger icon-download" :href="video.fileString" target="_blank">{{$t('activity.download')}}</a>
          </span>
        </div>
        <div class="activity-item_bd">
          <img :src="video.titleImage.key | qiniu" alt="">
          <!-- <div class="video-play"></div> -->
        </div>
        <div class="activity-item_ft">
          <!-- <img :src="video.videoByImage.key|qiniu" width="80" height="80"> -->
          <!-- <span class="video-icon" :class="$root.$i18n.locale == 'en' ? 'video-icon-en' :''"></span> -->
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'media-item',
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
  },
}
</script>
<style scoped lang="scss">
.wrap{
  .download-item {
    font-weight: bold;
  }
  .activity-item {
      margin-left: 23px;
    }
  &:nth-child(3n + 1){
    .activity-item {
      margin-left: 0;
    }
  }
}
  .activity-item {
    >a {
      display: block;
      cursor: pointer;
      &:hover {
        color: #ed3024;
        .activity-item_date {
          color: #ed3024;
        }
      }
    }
    width: 318px;
    min-height: 651px;
    float: left;
    .activity-item_hd {
      min-height: 120px;
      .activity-item_title {
        display: block;
        font-size: 17px;
        line-height: 20px;
        font-weight: bold;
        height: 72px;
        overflow: hidden;
      }
      .activity-item_date {
        font-size: 18px;
        color: #999;
        line-height: 24px;
        font-family: 'MetricSemibold',Arial, Helvetica, sans-serif;
        margin-top: 5px;
        display: inline-block;
        width: 100%;
      }
    }
    .activity-item_bd {
      width: 318px !important;
      height: 418px !important;
      overflow: hidden;
      position: relative;
      margin-top: 20px;
      &:hover{
        .video-play {
          background-position:0px -37px;
        }
      }
      img{
        width: 276px;
        height: auto;
      }
    }
    .activity-item_ft {
      height: 75px;
    }
  }
</style>

