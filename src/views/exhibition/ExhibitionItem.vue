<template>
  <div class="activity-item">
    <router-link :to="{name: 'exhibition-detail',params: {id: activity.id,type: type}}">
      <div class="activity-item_hd hidden-xs">
        <span class="activity-item_title" v-show="$root.$i18n.locale == 'zh-CN'">{{activity.name}}</span>
        <span class="activity-item_title" v-show="$root.$i18n.locale == 'en-US'">{{activity.name_En}}</span>
        <span class="activity-item_date">{{activity.startTime | date('YYYY.M.D')}}&nbsp;-&nbsp;{{activity.endTime | date('YYYY.M.D')}}</span>
      </div>
      <div class="mactivity-item_bd">
        <img :src="activity.titleImage.key | qiniu" alt="">
      </div>
      <div class="mactivity-item_hd visible-xs">
        <span class="activity-item_title" v-show="$root.$i18n.locale == 'zh-CN'">{{activity.name}}</span>
        <span class="activity-item_title" v-show="$root.$i18n.locale == 'en-US'">{{activity.name_En}}</span>
        <span class="activity-item_date">{{activity.startTime | date('YYYY.M.D')}}&nbsp;-&nbsp;{{activity.endTime | date('YYYY.M.D')}}</span>
      </div>
      <div class="activity-item_ft hidden-xs">&nbsp;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'exhibition-item',
  props: ['activity', 'type'],
}
</script>
<style lang="scss">
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
    width: 316px;
    float: left;
    margin-left: 26px;
    &:nth-child(3n+1) {
      margin-left: 0;
    }
    .activity-item_hd {
      min-height: 115px;
      .activity-item_title {
        display: block;
        font-size: 17px;
        line-height: 20px;
        font-weight: bold;
        height: 60px;
        overflow: hidden;
      }
      .activity-item_date {
        font-size: 18px;
        color: #999;
        line-height: 24px;
        font-family: 'MetricSemibold',Arial, Helvetica, sans-serif;
        margin-top: 10px;
      }
    }
    .activity-item_bd {
      width: 316px;
      height: 474px;
      overflow: hidden;
    }
    .activity-item_ft {
      height: 75px;
    }
  }
  @media screen and (max-width: 767px) {
    .activity-item {
      width: 100%;
      margin: 0;
      margin-top: 35px;
      &:first-child {
        margin-top: 0;
      }
      img {
        width: 100%;
        height: auto;
      }
      .mactivity-item_hd {
        .activity-item_title {
          font-size: 20px;
          line-height: 19px;
          margin-top: 10px;
          color: #000;
          font-family: Helvetica;
          font-weight: bold;
          display: block;
        }
        .activity-item_date {
          display: block;
          font-size: 11px;
          line-height: 9px;
          color: #555;
          margin-top: 5px;
          font-family: Arial, Helvetica, sans-serif;
        }
      }
    }
  }
</style>

