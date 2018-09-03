<template>
  <div class="main-wrap">
    <div class="main-content">
      <div class="prdetail-wrap clearfix hidden-xs">
        <div class="h33"></div>
        <div class="prdetail-wrap_left">
          <div class="program-eshare eshare">
            <div class="jiathis_style">
                <a href="http://www.jiathis.com/share" class="jiathis sharethis" target="_blank" style=""></a>
            </div>
            <a :href="item.tagUrl" class="badge badge-default pull-right" v-for="item in programDetail.tags" :key="item.tagName">{{isZh ? item.tagName : item.tagName_En}}</a>
            <span class="badge badge-default pull-right">{{programType}}</span>
          </div>
          <div class="program-detail_title" v-if="isZh">{{programDetail.name}}</div>
          <div class="program-detail_title tile_en" v-if="!isZh">{{programDetail.name_En}}</div>
          <div class="program-detail_title" v-if="isZh">{{programDetail.subTitle}}</div>
          <div class="program-detail_title" v-if="!isZh">{{programDetail.subTitle_En}}</div>
          <p class="program-detail_date" v-if="programDetail.timePonitType == 1 && (programDetail.startDate != programDetail.endDate)">{{programDetail.startDate | date('YYYY.M.D')}} - {{programDetail.endDate | date('YYYY.M.D')}}<span v-if="programDetail.timePonitType == 1 && programDetail.startTime">{{programDetail.startTime}}-{{programDetail.endTime}}</span></p>
          <p class="program-detail_date" v-if="programDetail.timePonitType == 1 && (programDetail.startDate == programDetail.endDate)">{{programDetail.startDate | date('YYYY.M.D')}}<span v-if="programDetail.timePonitType == 1 && programDetail.startTime">{{programDetail.startTime}}-{{programDetail.endTime}}</span></p>
          <p class="date-point" v-if="programDetail.timePonitType == 2">
            <span v-for="(date,index) in programDetail.uccaEventTimePoint" :key="date.id">{{date.dateTime | date('YYYY.M.D')}}<i v-if="index != (programDetail.uccaEventTimePoint.length - 1)">;</i></span>
          </p>
          <p class="program-detail_hall" v-if="programDetail.videoHall && isZh">{{programDetail.videoHall}}</p>
          <p class="program-detail_hall" v-if="programDetail.videoHall_En && !isZh">{{programDetail.videoHall_En}}</p>
          <p class="program-detail_child" v-if="programDetail.childTitle && isZh">{{programDetail.childTitle}}</p>
          <p class="program-detail_child" v-if="programDetail.childTitle_En && !isZh">{{programDetail.childTitle_En}}</p>
          <div class="clearfix">
            <div class="prdetail-content_left">
                <img :src="programDetail.conentImage.key | qiniu" alt="" v-if="programDetail.conentImage">
            </div>
            <div class="prdetail-content_right">
              <div class="program-detail_content" v-html="programDetail.bottonDescription" v-if="isZh"></div>
              <div class="program-detail_content en" v-html="programDetail.bottonDescription_En" v-if="!isZh"></div>
              
            </div>
          </div>
          <!-- <div class="prdetail-content_bot">
            <div class="program-detail_content" v-html="programDetail.description.value" v-if="programDetail.description && isZh"></div>
            <div class="program-detail_content" v-html="programDetail.description.valueEn" v-if="programDetail.description && !isZh"></div>
          </div> -->
          <div class="prdetail-content_bot" v-for="d in programDetail.DescriptionList" :key="d.title">
            <p class="horizontal"><br></p>
            <div class="d-title" v-if="d.title && isZh">{{d.title}}</div>
            <div class="d-title d-title_en" v-if="d.title_En && !isZh">{{d.title_En}}</div>
            <div class="d-content" v-html="d.description" v-if="d.description && isZh"></div>
            <div class="d-content" v-html="d.description_En" v-if="d.description_En && !isZh"></div>
          </div>
        </div>
        <div class="prdetail-wrap_right">
          <!-- <div class="program-detail_intro">
            <div class="prdetail-intro_hd">
              <span>{{programType}}</span>
            </div>
            <div class="prdetail-intro_bd">
              <ul class="list-unstyled">
                <li v-if="programDetail.timePonitType == 1 && (programDetail.startDate != programDetail.endDate)">{{programDetail.startDate | date('YYYY.M.D')}} - {{programDetail.endDate | date('YYYY.M.D')}}</li>
                <li v-if="programDetail.timePonitType == 1 && (programDetail.startDate == programDetail.endDate)">{{programDetail.startDate | date('YYYY.M.D')}}</li>
                <li class="date-point" v-if="programDetail.timePonitType == 2">
                  <span v-for="(date,index) in programDetail.uccaEventTimePoint" :key="date.id">{{date.dateTime | date('YYYY.M.D')}}<i v-if="index != (programDetail.uccaEventTimePoint.length - 1)">;</i></span>
                </li>
                <li class="prdetail-new" v-if="programDetail.timePonitType == 1 && programDetail.startTime">{{programDetail.startTime}}-{{programDetail.endTime}}</li>
                <li class="prdetail-new" v-if="programDetail.videoHall && isZh">{{programDetail.videoHall}}</li>
                <li class="prdetail-new" v-if="programDetail.videoHall_En && !isZh">{{programDetail.videoHall_En}}</li>
                <li class="prdetail-new" v-if="programDetail.childTitle && isZh">{{programDetail.childTitle}}</li>
                <li class="prdetail-new" v-if="programDetail.childTitle_En && !isZh">{{programDetail.childTitle_En}}</li>
                <li class="prdetail-new" v-if="isZh"><a :href="programDetail.relationLink">{{programDetail.relationName}}</a></li>
                <li class="prdetail-new" v-if="!isZh"><a :href="programDetail.relationLink">{{programDetail.relationName_En}}</a></li>
              </ul>
            </div>
          </div> -->
          <div class="program-detail_intro">
            <div class="program-detail_weibo" v-if="isZh">
            </div>
            <div class="program-detail_weibo_en" v-if="!isZh">
            </div>
          </div>
        </div>
      </div>
      <footer-member></footer-member>
      <div class="mprdetail-wrap mobile-common_wrap visible-xs">
        <div class="mexdetail-title" v-if="isZh">{{programDetail.name}}</div>
        <div class="mexdetail-title" v-if="!isZh">{{programDetail.name_En}}</div>
        <mobile-share></mobile-share>
        <div class="mprdetail-intro">
          <div class="mprdetail-intro_type">{{programType}}</div>
          <div class="mprdetail-intro_item" v-if="programDetail.timePonitType == 1 && (programDetail.startDate != programDetail.endDate)"><span>{{programDetail.startDate | date('YYYY.M.D')}} - {{programDetail.endDate | date('YYYY.M.D')}}</span></div>
          <div class="mprdetail-intro_item" v-if="programDetail.timePonitType == 1 && (programDetail.startDate == programDetail.endDate)"><span>{{programDetail.startDate | date('YYYY.M.D')}}</span></div>
          <div class="mprdetail-intro_item" v-if="programDetail.timePonitType == 2">
            <span v-for="(date,index) in programDetail.uccaEventTimePoint" :key="date.id">{{date.dateTime | date('YYYY.M.D')}}<i v-if="index != (programDetail.uccaEventTimePoint.length - 1)">;</i></span>
          </div>
          <div class="mprdetail-intro_item" v-if="programDetail.timePonitType == 1 && programDetail.startTime">{{programDetail.startTime}}-{{programDetail.endTime}}</div>
          <div class="mprdetail-intro_item" v-if="isZh"><span>{{programDetail.videoHall}}</span></div>
          <div class="mprdetail-intro_item" v-if="!isZh"><span>{{programDetail.videoHall_En}}</span></div>
          <div class="mprdetail-intro_item" v-if="isZh && programDetail.childTitle"><span>{{programDetail.childTitle}}</span></div>
          <div class="mprdetail-intro_item" v-if="!isZh && programDetail.childTitle_En"><span>{{programDetail.childTitle_En}}</span></div>
          <!-- <div class="mprdetail-intro_item" v-if="isZh"><span><a :href="programDetail.relationLink">{{programDetail.relationName}}</a></span></div>
          <div class="mprdetail-intro_item" v-if="!isZh"><span><a :href="programDetail.relationLink">{{programDetail.relationName_En}}</a></span></div> -->
        </div>
        <div class="mprdetail-content">
          <div>
            <img :src="programDetail.conentImage.key | qiniu" alt="" v-if="programDetail.conentImage">
          </div>
          <div class="mprdetail-content_info"  v-html="programDetail.bottonDescription" v-if="isZh"></div>
          <div class="mprdetail-content_info"  v-html="programDetail.bottonDescription_En" v-if="!isZh"></div>
          <div class="mprogram-tips">{{$t('program.programTips')}}</div>
          <div class="mprdetail-stage_list">
            <div class="mprdetail-stage_item" v-for="(stage,index) in programDetail.DescriptionList" :key="stage.id">
              <div class="mprdetail-stage_content clearfix" @click="showMore(index)" :class="{active: show && index == num}">
                <div class="mprdetail-stage_title" v-if="isZh">{{stage.title}}</div>
                <div class="mprdetail-stage_title" v-if="!isZh">{{stage.title_En}}</div>
                <div class="mprdetail-stage_control">
                  <div></div>
                </div>
              </div>
              <div class="mprdetail-stage_info" v-html="stage.description" v-if="isZh && show && index == num"></div>
              <div class="mprdetail-stage_info" v-html="stage.description_En" v-if="!isZh && show && index == num"></div>
            </div>
          </div>
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
  name: 'program-detail',
  data() {
    return {
      programDetail: {},
      show: false,
      num: null,
    }
  },
  created() {
    api.getProgramById(this.$route.params.id).then((data) => {
      this.programDetail = data
    })
  },
  methods: {
    showMore(index) {
      this.show = !this.show
      this.num = index
    },
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
    programType() {
      const type = this.programDetail.eventCategory
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
  components: {
    FooterMember,
    MobileShare,
  },
}
</script>
<style lang="scss">
.program-eshare {
  .badge {
    background-color: #b6b6b6;
    border-radius: 3px;
    padding: 4px 7px;
    margin-right: 4px;
  }
}
.program-detail_date {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  span {
    margin-left: 10px;
  }
}
.program-detail_hall, .program-detail_child {
  font-size: 17px;
  color: #898989;
  font-weight: bold;
  margin: 0;
}
.program-detail_child {
  margin-bottom: 20px;
}
.horizontal{
  border-top: 1px solid #000; margin-top: 45px; height: 46px; 
}
.d-title{
  font-size: 26px;
  line-height: 30px;
  font-weight: bold;
  margin-bottom: 13px;
}
.d-title.d-title_en{
  font-size: 38px;
}
.d-content{
  p{
    font-size: 13px;
    color: #666;
    padding: 8px 0px;
    line-height: 20px;
    text-align: justify;
    margin-bottom: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  a{
    color: #ed3024 !important;
    &:hover{
      text-decoration: underline;
    }
  }
}
.program-detail_content.en{
    font-family: Arial, Helvetica, sans-serif;
}
  .prdetail-wrap {
    .prdetail-wrap_left {
      width: 750px;
      float: left;
    }
    .prdetail-wrap_right {
      width: 190px;
      float: left;
      margin-left: 60px;
    }
    .program-detail_title {
      font-size: 32px;
      line-height: 36px;
      font-weight: bold;
    }
    .program-detail_title.tile_en {
      font-size: 42px;
    }
  }
  .prdetail-content_left {
    width: 240px;
    float: left;
    img {
      max-width: 100%;
    }
  }
  .prdetail-content_right {
    width: 490px;
    float: left;
    margin-left: 15px;
  }
  .win-main {
    .program-eshare {
      min-height: 24px;
      margin-top: 6px;
      &.eshare .sharethis {
        float: left !important;
      }
    }
  }
  .program-detail_intro {
    width: 188px;
    border: 1px solid #000;
    margin-bottom: 10px;
    .prdetail-intro_hd {
      width: 184px;
      display: block;
      margin: 2px;
      background: #666;
      text-align: center;
      color: #fff;
      font-size: 13px;
      line-height: 28px;
      font-weight: bold;
      font-family: 'Microsoft Yahei';
    }
    .prdetail-intro_bd {
      ul {
        width: 184px;
        margin-left: 2px;
        margin-bottom: 0;
        >li {
          text-align: center;
          width: 100%;
          padding: 10px 0px 6px 0px;
          font-size: 17px;
          border-bottom: 1px dotted #000;
          font-family: 'MetricSemibold',Arial, Helvetica, sans-serif;
          &:last-child {
            border-bottom: 0;
          }
        }
        .prdetail-new {
          font-size: 13px;
          font-family: 'Microsoft Yahei';
          padding: 10px 0px;
          font-weight: bold;
        }
      }
    }
  }
  .program-detail_weibo {
    width: 184px;
    margin: 2px;
    height: 26px;
    background: url(../../assets/img/bg-weibo-cn.jpg) 0px 0px no-repeat #666;
  }
  .program-detail_weibo_en {
    width: 184px;
    margin: 2px;
    height: 26px;
    background: url(../../assets/img/bg-weibo-en.png) 0px 0px no-repeat #666;
  }
  .date-point {
    i {
      font-style: normal;
      margin: 0 2px;
    }
  }
  @media screen and (max-width: 767px) {
    .mprdetail-intro {
      margin-top: 15px;
      border: 1px solid #000;
      box-sizing: border-box;
      font-family: Helvetica;
      font-weight: bold;
      .mprdetail-intro_item {
        border-top: 1px dotted #000;
        font-size: 20px;
        line-height: 20px;
        padding: 8px 0px 8px 0px;
        span {
          width: 88.7574%;
          margin: 0px auto;
          display: block;
        }
        a {
          color: #ed3024;
        }
      }
      .mprdetail-intro_type {
        height: 26px;
        background: #666;
        width: 100%;
        font-size: 15px;
        color: #fff;
        text-indent: 17px;
        line-height: 30px;
        padding-bottom: 4px;
      }
    }
    .mprdetail-content {
      margin-top: 25px;
      img {
        width: 100%;
        height: auto;
      }
      .mprdetail-content_info {
        margin-top: 24px;
        font-size: 12px;
        line-height: 19px;
      }
    }
    .mprogram-tips {
      font-size: 12px;
      color: #ed3024;
      font-weight: bold;
      margin-bottom: 7px;
    }
    .mprdetail-stage_list {
      margin-bottom: 20px;
      .mprdetail-stage_item {
        padding-top: 20px;
        border-top: 1px solid #000;
        margin-top: 20px;
      }
      .mprdetail-stage_title {
        font-size: 20px;
        line-height: 19px;
        width: 93.1034%;
        float: left;
        font-family: Helvetica;
        font-weight: bold;
      }
      .mprdetail-stage_content.active {
        .mprdetail-stage_control {
          >div {
            width: 100%;
            height: 20px;
            background: url(../../assets/img/tbg-11.png) right 0px no-repeat;
            background-size: contain;
          }
        }
      }
      .mprdetail-stage_control {
        width: 6.8966%;
        float: left;
        >div {
          width: 100%;
          height: 20px;
          background: url(../../assets/img/tbg-10.png) right 0px no-repeat;
          background-size: contain;
        }
      }
      .mprdetail-stage_info {
        font-size: 12px;
        line-height: 19px;
        margin-top: 8px;
        font-family: Helvetica;
      }
    }
  }
</style>

