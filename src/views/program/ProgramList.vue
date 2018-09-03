<template>
  <div class="activity-item_list">
    <div class="activity-item_hd hidden-xs">
      <div class="clearfix">
        <span class="activity-item_title" v-show="$root.$i18n.locale == 'zh-CN' "><router-link :to="{name:'program-detail',params:{id: activity.id,type:type}}">{{activity.name}}</router-link></span>
        <span class="activity-item_title" v-show="$root.$i18n.locale == 'en-US'"><router-link :to="{name:'program-detail',params:{id: activity.id,type:type}}">{{activity.name_En}}</router-link></span>
        <span class="activity-item_date" v-if="activity.startDate != activity.endDate">{{activity.startDate | date('YYYY-M-D')}}&nbsp;-&nbsp;{{activity.endDate | date('YYYY-M-D')}}</span>
        <span class="activity-item_date" v-if="activity.startDate == activity.endDate">{{activity.startDate | date('YYYY-M-D')}}</span>
      </div>
      
      <p class="activity-item_badge">
        <span class="badge badge-default" v-if="$route.name == 'program-current'" @click="goCat(activity.eventCategory)">{{programType}}</span>
        <a :href="item.tagUrl" class="badge badge-default" v-for="item in activity.tags" :key="item.tagName">{{isZh ? item.tagName : item.tagName_En}}</a>
      </p>
    </div>
    <div class="activity-item_bd hidden-xs">
      <router-link :to="{name: 'program-detail',params:{ id: activity.id, type: type}}"><img :src="activity.titleImage.key | qiniu" alt=""></router-link>
    </div>
    <div class="activity-item_ft hidden-xs">
      <router-link :to="{name: 'program-detail',params:{ id: activity.id, type: type}}">{{$t('activity.viewDetail')}}</router-link>
    </div>
    <div class="activity-item_space hidden-xs">&nbsp;</div>
    <router-link class="clearfix visible-xs mprogram-item" :to="{name: 'program-detail',params:{ id: activity.id, type: type}}">
      <div class="mactivity-item_left">
        <div class="mactivity-item_img">
          <img :src="activity.titleImage.key | qiniu" alt="">
        </div>
      </div>
      <div class="mactivity-item_right">
        <div class="mprogram-item_title" v-if="$root.$i18n.locale == 'zh-CN'">{{activity.name}}<br>{{activity.subTitle}}</div>
        <div class="mprogram-item_title" v-if="$root.$i18n.locale == 'en-US'">{{activity.name_En}}<br>{{activity.subTitle_En}}</div>
        <div class="mprogram-item_date" v-if="activity.startDate != activity.endDate">{{activity.startDate | date('YYYY.M.D')}}&nbsp;-&nbsp;{{activity.endDate | date('YYYY.M.D')}}</div>
        <div class="mprogram-item_date" v-if="activity.startDate == activity.endDate">{{activity.startDate | date('YYYY.M.D')}}</div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'program-list',
  props: ['activity', 'type'],
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
    programType() {
      const type = this.activity.eventCategory
      let program
      switch (type) {
        case 1:
          program = this.$t('program.program')
          break
        case 2:
          program = this.$t('program.conversations')
          break
        case 3:
          program = this.$t('program.screen')
          break
        case 4:
          program = this.$t('program.performance')
          break
        case 5:
          program = this.$t('program.workShop')
          break
        case 6:
          program = this.$t('program.member')
          break
        case 7:
          program = this.$t('program.specialEvent')
          break
        default:
          break
      }
      return program
    },
  },
  methods: {
    goCat(type) {
      this.$router.push({ query: { type } })
      this.$router.go(0)
    },
  },
}
</script>
<style lang="scss">
  .activity-item_list {
    position: relative;
    min-height: 150px;
    .activity-item_hd {
      width: 690px;
      margin-left: 120px;
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
    .activity-item_badge  {
      margin-top: 10px;
      margin-bottom: 0;
      .badge {
        background-color: #b6b6b6;
        border-radius: 3px;
        padding: 4px 7px;
        cursor: pointer;
        margin-right: 4px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .activity-item_list {
      min-height: auto;
      margin-top: 25px;
    }
    .mprogram-item {
      display: flex !important;
      align-items: center;
      
      .mactivity-item_left {
        float: left;
        width: 22.9310%;
        img {
          width: 87.9699%;
          height: auto;
        }
      }
      .mactivity-item_right {
        width: 77.0690%;
        float: left;
        .mprogram-item_title {
          font-size: 14px;
          line-height: 15px;
          font-family: Helvetica;
          font-weight: bold;
          color: #000;
        }
        .mprogram-item_date {
          padding-top: 10px;
          font-size: 11px;
          font-family: Arial, Helvetica, sans-serif;
          color: #000;
        }
      }
    }
  }
</style>


