<template>
  <div class="team-wrap common-wrap">
    <div class="hidden-xs">
    <div class="common-title">{{$t('about.teamIntro')}}</div>  
    <div class="brief-detail" v-if="isZh && pageDetail.list" v-html="pageDetail.list[0].description"></div>
    <div class="brief-detail" v-if="!isZh && pageDetail.list" v-html="pageDetail.list[0].description_En"></div>
    <div class="visit-border"></div>
    <div class="teacher-list" v-if="pageDetail.list">
      <div class="teacher-item clearfix" v-for="item in pageDetail.list[0].teachs" :key="item.id">
        <div class="teacher-img">
          <img :src="item.image.key | qiniu" alt="">
        </div>
        <div class="teacher-info">
          <p class="teacher-name" v-if="isZh">{{item.name}}</p>
          <p class="teacher-name" v-if="!isZh">{{item.name_En}}</p>
          <p class="teacher-pos" v-if="isZh">{{item.job}}</p>
          <p class="teacher-pos" v-if="!isZh">{{item.job_En}}</p>
          <div class="teacher-brief" v-if="isZh">{{item.desciption}}</div>
          <div class="teacher-brief" v-if="!isZh">{{item.desciption_En}}</div>
        </div>
      </div>
    </div>
    <div class="footer-split fot-border"></div>
    </div>
    <div class="visible-xs mobile-common_wrap mcreative-wrap">
      <div class="mobile-common_title">{{$t('about.teamIntro')}}</div>
      <div class="mbrief-wrap">
        <div class="brief-detail" v-if="isZh && pageDetail.list" v-html="pageDetail.list[0].description"></div>
        <div class="brief-detail" v-if="!isZh && pageDetail.list" v-html="pageDetail.list[0].description_En"></div>
      </div>
      <div class="visit-border"></div>
      <div class="mteacher-list" v-if="pageDetail.list">
        <div class="mteacher-item" v-for="item in pageDetail.list[0].teachs" :key="item.id">
          <div class="clearfix">
            <div class="mteacher-img">
              <img :src="item.image.key | qiniu" alt="">
            </div>
            <div class="mteacher-info">
              <p class="mteacher-name" v-if="isZh">{{item.name}}</p>
              <p class="mteacher-name" v-if="!isZh">{{item.name_En}}</p>
              <p class="mteacher-pos" v-if="isZh">{{item.job}}</p>
              <p class="mteacher-pos" v-if="!isZh">{{item.job_En}}</p>
            </div>
          </div>
          <div class="mteacher-brief" v-if="isZh">{{item.desciption}}</div>
          <div class="mteacher-brief" v-if="!isZh">{{item.desciption_En}}</div>
        </div>
      </div>
    </div>
  </div> 
</template>
<script>
import api from '@/api/api'

export default {
  name: 'team-intro',
  data() {
    return {
      pageDetail: {},
    }
  },
  created() {
    api.getWeekendShop({ infoCategory: 4 }).then((data) => {
      this.pageDetail = data
    })
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
}
</script>
<style lang="scss" scoped>
.teacher-list {
  width: 740px;
}
.teacher-item {
  margin-top: 48px;
  overflow: hidden;
  &:first-child {
    margin-top: 0;
  }
  .teacher-img {
    width: 240px;
    float: left;
    font-size: 0px;
    line-height: 0px;
    margin-top: 1px;
  }
  .teacher-info {
    width: 480px;
    float: left;
    margin-left: 20px;
  }
  .teacher-name {
    color: #000;
    font-family: "MetricSemibold","Microsoft Yahei","SimSun","宋体","黑体","微软雅黑";
    font-size:20px;
    font-weight: bold;
    margin: 0;
  }
  .teacher-pos {
    margin: 0;
    color: #000;
    font-size: 12px;
    font-family: "Microsoft Yahei","SimSun","宋体","黑体","Microsoft Yahei","微软雅黑";
  }
  .teacher-brief {
    font-size: 12px;
    color: #999;
    font-family: "Microsoft Yahei","SimSun","宋体";
    line-height: 18px;
    margin-top: 10px;
  }
}
@media screen and (max-width: 767px){
  .mteacher-item {
    margin-top: 20px;
    &:first-child {
      margin-top: 0;
    }
    .mteacher-img {
      float: left;
      width: 50%;
      img {
        width: 100%;
        height: auto;
      }
    }
    .mteacher-info {
      float: left;
      width: 50%;
      padding-left: 15px;
      .mteacher-name {
        color: #000;
        font-family: "MetricSemibold","Microsoft Yahei","SimSun","宋体","黑体","微软雅黑";
        font-size:20px;
        font-weight: bold;
        margin: 0;
      }
      .mteacher-pos {
        margin: 0;
        color: #000;
        font-size: 12px;
        font-family: "Microsoft Yahei","SimSun","宋体","黑体","Microsoft Yahei","微软雅黑";
      }
    }
    .mteacher-brief {
      font-size: 12px;
      color: #999;
      font-family: "Microsoft Yahei","SimSun","宋体";
      line-height: 18px;
      margin-top: 10px;
    }
  }
}
</style>

