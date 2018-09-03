<template>
  <div class="job-wrap">
    <div class="hidden-xs">
    <div class="h33"></div>
    <div class="clearfix">
      <div class="tleft">
        <div class="common-title" v-if="isZh">{{jobDetail.jobName}}</div>
        <div class="common-title" v-if="!isZh">{{jobDetail.jobName_En}}</div>
        <div class="eshare clearfix">
          <div class="jiathis_style">
            <a href="http://www.jiathis.com/share" class="jiathis sharethis" target="_blank" style=""></a>
          </div>
        </div>
        <div class="job-info">
          <ul class="list-unstyled">
            <li>
              <span>{{$t('about.req')}}</span>
              <span>&nbsp;:&nbsp;</span>
              <span>{{jobDetail.jobCode}}</span>
            </li>
            <li v-if="jobDetail.departmentDto">
              <span>{{$t('about.jobCat')}}</span>
              <span>&nbsp;:&nbsp;</span>
              <span v-if="isZh">{{jobDetail.departmentDto.name}}</span>
              <span v-if="!isZh">{{jobDetail.departmentDto.name_En}}</span>
            </li>
            <li v-if="jobDetail.LevelDto">
              <span>{{$t('about.jobLevel')}}</span>
              <span>&nbsp;:&nbsp;</span>
              <span v-if="isZh">{{jobDetail.LevelDto.jobLevel}}</span>
              <span v-if="!isZh">{{jobDetail.LevelDto.jobLevel_En}}</span>
            </li>
            <li>
              <span>{{$t('about.type')}}</span>
              <span>&nbsp;:&nbsp;</span>
              <span v-if="isZh">{{jobDetail.jobType}}</span>
              <span v-if="!isZh">{{jobDetail.jobType_En}}</span>
            </li>
          </ul>
        </div>
        <div class="visit-border"></div>
        <div class="job-duty">
          <div class="job-item_title">{{$t('about.jobDuty')}}</div>
          <div class="job-item_detail" v-if="isZh" v-html="jobDetail.jobResponsibility"></div>
          <div class="job-item_detail" v-if="!isZh" v-html="jobDetail.jobResponsibility_En"></div>
        </div>
        <div class="visit-border"></div>
        <div class="job-duty">
          <div class="job-item_title">{{$t('about.jobAsk')}}</div>
          <div class="job-item_detail" v-if="isZh" v-html="jobDetail.jobQualifications"></div>
          <div class="job-item_detail" v-if="!isZh" v-html="jobDetail.jobQualifications_En"></div>
        </div>
        <div class="visit-border"></div>
        <div class="job-apply clearfix">
          <router-link :to="{name: 'join-us',params: {id: $route.params.id}}" class="apply-btn">{{$t('about.apply')}}</router-link>
          <router-link :to="{name: 'careers'}" class="apply-link">{{$t('about.findJob')}}</router-link>
        </div>
      </div>
    </div>
    <div class="footer-split"></div>
    <footer-member></footer-member>
    </div>
    <div class="visible-xs mabout_wrap">
      <div class="mobile-common_title">{{ isZh ? jobDetail.jobName : jobDetail.jobName_En}}</div>
      <mobile-share></mobile-share>
      <ul class="list-unstyled mjob-detail_intro">
        <li>
          <span>{{$t('about.req')}}</span>
          <span>&nbsp;:&nbsp;</span>
          <span>{{jobDetail.jobCode}}</span>
        </li>
        <li v-if="jobDetail.departmentDto">
          <span>{{$t('about.jobCat')}}</span>
          <span>&nbsp;:&nbsp;</span>
          <span v-if="isZh">{{jobDetail.departmentDto.name}}</span>
          <span v-if="!isZh">{{jobDetail.departmentDto.name_En}}</span>
        </li>
        <li v-if="jobDetail.LevelDto">
          <span>{{$t('about.jobLevel')}}</span>
          <span>&nbsp;:&nbsp;</span>
          <span v-if="isZh">{{jobDetail.LevelDto.jobLevel}}</span>
          <span v-if="!isZh">{{jobDetail.LevelDto.jobLevel_En}}</span>
        </li>
        <li>
          <span>{{$t('about.type')}}</span>
          <span>&nbsp;:&nbsp;</span>
          <span v-if="isZh">{{jobDetail.jobType}}</span>
          <span v-if="!isZh">{{jobDetail.jobType_En}}</span>
        </li>
      </ul>
      <div class="mjob-detail_list">
        <div class="mjob-detail_item">
          <div class="mjob-item_hd">
            <span>{{$t('about.jobDuty')}}</span>
            <div class="mjob-item_control" @click="toggle1" :class="{current: show1}"></div>
          </div>
          <div v-show="show1">
            <div class="mjob-item_bd" v-if="isZh" v-html="jobDetail.jobResponsibility"></div>
            <div class="mjob-item_bd" v-if="!isZh" v-html="jobDetail.jobResponsibility_En"></div>
          </div>
        </div>
        <div class="mjob-detail_item">
          <div class="mjob-item_hd">
            <span>{{$t('about.jobAsk')}}</span>
            <div class="mjob-item_control" @click="toggle2" :class="{current: show2}"></div>
          </div>
          <div v-show="show2">
            <div class="mjob-item_bd" v-if="isZh" v-html="jobDetail.jobQualifications"></div>
            <div class="mjob-item_bd" v-if="!isZh" v-html="jobDetail.jobQualifications_En"></div>
          </div>
        </div>
      </div>
      <div class="mjob-detail_link">
        <div class="link1">
          <router-link :to="{name: 'careers'}">{{$t('about.findJob')}}</router-link>
        </div>
        <div class="link2">
          <a>{{$t('about.jobpc')}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FooterMember from '@/components/FooterMember'
import MobileShare from '@/components/MobileShare'
import api from '@/api/api'

export default {
  name: 'job-detail',
  data() {
    return {
      jobDetail: {},
      show1: false,
      show2: false,
    }
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  created() {
    api.getJobById(this.$route.params.id).then((data) => {
      this.jobDetail = data
    })
  },
  methods: {
    toggle1() {
      this.show1 = !this.show1
    },
    toggle2() {
      this.show2 = !this.show2
    },
  },
  components: {
    FooterMember,
    MobileShare,
  },
}
</script>
<style lang="scss">
.job-wrap{
  .eshare {
    float: left !important;
    margin-top: 6px;
  }
  .common-title {
    padding-bottom: 0;
  }
  .job-item_title {
    font-size: 26px;
    line-height: 30px;
    font-weight: bold;
    margin-bottom: 13px;
  }
}
.job-apply {
  .apply-btn {
    width: 190px;
    float: left;
    text-align: center;
    font-size: 15px;
    color: #fff;
    background: #ed3024;
    padding: 15px 0px 15px 0px;
  }
  .apply-link {
    font-size: 13px;
    color: #ed3024;
    font-weight: bold;
    float: left;
    margin: 15px 0px 0px 10px;
  }
}
@media screen and (max-width: 767px) {
  .mjob-detail_intro {
    margin-top: 15px;
    margin-bottom: 0;
    padding-bottom: 25px;
    border-bottom: 1px solid #000;
    li {
      span {
        font-family: Helvetica;
        font-size: 12px;
        height: 20px;
        color: #999;
        &:first-child {
          width: 28%;
          float: left;
        }
        &:last-child {
          color: #000;
          margin-left: 10px;
        }
      }
    }
  }
  .mjob-detail_item {
    padding-bottom: 25px;
    border-bottom: 1px solid #000;
    .mjob-item_hd {
      height: 20px;
      margin-top: 25px;
      span {
        font-family: Helvetica;
        font-size: 20px;
        font-weight: bold;
      }
      .mjob-item_control {
        background: url(../../assets/img/jia.png) no-repeat;
        background-size: contain;
        width: 7%;
        height: 100%;
        float: right;
        &.current {
          background: url(../../assets/img/jian.png) no-repeat;
          background-size: contain;
        }
      }
    }
    .mjob-item_bd {
      margin-top: 20px;
      font-family: Helvetica;
      font-size: 12px;
      line-height: 20px;
      padding-left: 20px;
    }
  }
  .mjob-detail_link {
    .link1 {
      margin-top: 20px;
      a {
        color: #ed3024;
        font-family: Helvetica;
        font-size: 12px;
        text-decoration: none;
        font-weight: bold;
      }
    }
    .link2 {
      margin-top: 10px;
      a {
        color: #ed3024;
        font-family: Helvetica;
        font-size: 12px;
        text-decoration: none;
      }
    }
  }
}
</style>
