<template>
  <div class="activity-item_list">
    <div class="activity-item_hd clearfix">
      <span class="activity-item_title" v-show="$root.$i18n.locale == 'zh-CN' "><router-link :to="{name: 'exhibition-detail',params: {id: activity.id, type: type}}">{{activity.name}}</router-link></span>
      <span class="activity-item_title" v-show="$root.$i18n.locale == 'en-US'"><router-link :to="{name: 'exhibition-detail',params: {id: activity.id, type: type}}">{{activity.name_En}}</router-link></span>
      <span class="activity-item_date">{{activity.startTime | date('YYYY-MM-DD')}}&nbsp;-&nbsp;{{activity.endTime | date('YYYY-MM-DD')}}</span>
    </div>
    <div class="activity-item_bd">
      <router-link :to="{name: 'exhibition-detail',params: {id: activity.id, type: type}}"><img :src="activity.titleImage.key | qiniu" alt=""></router-link>
    </div>
    <div class="activity-item_ft">
      <router-link :to="{name: 'exhibition-detail',params: {id: activity.id, type: type}}">{{$t('activity.viewDetail')}}</router-link>
    </div>
    <div class="activity-item_space">&nbsp;</div>
  </div>
</template>
<script>
export default {
  name: 'exhibition-list',
  props: ['activity', 'type'],
}
</script>
<style lang="scss">
  .activity-item_list {
    position: relative;
    min-height: 150px;
    .activity-item_hd { 
      width: 690px;
      margin-left: 120px;
      float: left;
      &:hover {
        .activity-item_date {
          color: #ed3024;
        }
        .activity-item_title {
          a {
            color: #ed3024;
          }
        }
      }
      .activity-item_title {
        font-size: 17px;
        line-height: 24px;
        width: 420px;
        float: left;
        font-weight: bold;
        a {
          color: #000;
        }
      }
      .activity-item_date {
        font-size: 18px;
        color: #999;
        line-height: 24px;
        width: 245px;
        float: left;
        margin-left: 25px;
        font-family: 'MetricSemibold',Arial, Helvetica, sans-serif;
      }
    }
    .activity-item_bd {
      position: absolute;
      width: 100px;
      height: 150px;
      left: 0px;
      top: 5px;
      img {
        width: 100px;
        height: 150px;
      }
    }
    .activity-item_ft {
      width: 190px;
      float: right;
      a {
        width: 186px;
        float: left;
        border: 2px solid #000;
        text-align: center;
        color: #000;
        font-size: 13px;
        padding: 13px 0px 13px 0px;
        letter-spacing: 2px;
        &:hover {
          border:2px solid #ed3024; 
          color:#ed3024;
        }
      }
    }
    .activity-item_space {
      height: 156px;
    }
  }
</style>


