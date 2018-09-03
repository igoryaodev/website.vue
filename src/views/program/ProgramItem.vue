<template>
  <div class="activity-item">
    <router-link :to="{name: 'program-detail',params:{ id: activity.id, type: type}}">
      <div class="activity-item_hd">
        <span class="activity-item_title" v-show="$root.$i18n.locale == 'zh-CN'">{{activity.name}}<br>{{activity.subTitle}}</span>
        <span class="activity-item_title" v-show="$root.$i18n.locale == 'en-US'">{{activity.name_En}}<br>{{activity.subTitle_En}}</span>
        <span class="activity-item_date" v-if="activity.startDate != activity.endDate ">{{activity.startDate | date('YYYY.M.D')}}&nbsp;-&nbsp;{{activity.endDate | date('YYYY.M.D')}}</span>
        <span class="activity-item_date" v-if="activity.startDate == activity.endDate ">{{activity.startDate | date('YYYY.M.D')}}</span>
      </div>
    </router-link>
    <p class="activity-item_badge">
      <span class="badge badge-default" v-if="$route.name == 'program-current'" @click="goCat(activity.eventCategory)">{{programType}}</span>
      <a :href="item.tagUrl" class="badge badge-default" v-for="item in activity.tags" :key="item.tagName">{{isZh ? item.tagName : item.tagName_En}}</a>
    </p>
    <router-link :to="{name: 'program-detail',params:{ id: activity.id, type: type}}">
      <div class="activity-item_bd">
        <img :src="activity.titleImage.key | qiniu" alt="">
      </div>
      <div class="activity-item_ft">&nbsp;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'program-item',
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
<style lang="scss" scoped>
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
      min-height: 100px;
      .activity-item_title {
        display: block;
        font-size: 17px;
        line-height: 20px;
        font-weight: bold;
        height: 60px;
        overflow: visible;
      }
      .activity-item_date {
        font-size: 18px;
        color: #999;
        line-height: 24px;
        font-family: 'MetricSemibold',Arial, Helvetica, sans-serif;
        margin-top: 10px;
        display: block;
      }
    }
    .activity-item_bd {
      width: 316px;
      height: 474px;
      overflow: hidden;
      img {
        width: auto;
        height: 100%;
      }
    }
    .activity-item_ft {
      height: 75px;
    }
  }
  .activity-item_badge  {
    .badge {
      background-color: #b6b6b6;
      border-radius: 3px;
      padding: 4px 7px;
      cursor: pointer;
      margin-right: 4px;
    }
  }
</style>

