<template>
  <div class="main-wrap">
    <div class="main-content">
      <div class="calendar-wrap hidden-xs">
        <div class="h15"></div>
        <div class="clearfix">
          <div class="calendar-title">
            <div class="h15"></div>
            <div v-if="isZh">
              <span class="font-en-bold">{{select | date('YYYY')}}</span>年<span class="font-en-bold">{{select | date('M')}}</span>月<span class="font-en-bold">{{select | date('DD')}}</span>日&nbsp;&nbsp;{{select | dateLocale('ddd')}}
            </div>
            <div v-if="!isZh">
              <span class="font-en-bold">{{select | date('YYYY.M.D')}}</span>&nbsp;&nbsp;{{select | date('dddd')}}
            </div>
          </div>
          <div class="calendar-chart">
            <calendar-date @select-date="selectDate" :selected="select"></calendar-date>
          </div>
          <div class="calendar-hour">
            <ul class="list-unstyled">
              <li>{{$t('home.admission')}}</li>
              <li>10:00&nbsp;–&nbsp;19:00 </li>
              <li>{{$t('home.calendarTime')}}</li>
            </ul>
          </div>
        </div>
        <div class="calendar-list">
          <div class="cat-select">
            <div class="cat-select_hd clearfix">
              <div class="cat-list">
                  <ul class="list-unstyled clearfix">
                    <li :class="{active: type=='#all'}"><a @click="go('#all')">{{$t('program.all')}}</a></li>
                    <li :class="{active: type=='#activity'}"><a @click="go('#activity')">{{$t('home.exhibitions')}}</a></li>
                    <li :class="{active: type=='#program'}"><a @click="go('#program')">{{$t('home.programs')}}</a></li>
                    <li :class="{active: type=='#special'}"><a @click="go('#special')">{{$t('program.special')}}</a></li>
                    <li :class="{active: type=='#children'}"><a @click="go('#children')">{{$t('home.childrenAct')}}</a></li>
                  </ul>
              </div>
            </div>
          </div>
          <div id="all" v-if="isMon">
            <div class="closed-date">{{$t('home.closedDate')}}</div>
            <div class="next-day">
              <a @click="selectDate(nextDay)">{{$t('home.nextDay')}}</a>
            </div>
          </div>
          <div id="all" v-if="!isMon">
          <div id="activity" class="calendar-item" v-if="calList.UCCAActivityListDto && calList.UCCAActivityListDto.length > 0">
            <div class="calendar-item_title">{{$t('home.exhibitions')}}</div>
            <div class="">
              <ul class="list-unstyled">
                <li v-for="exhibition in calList.UCCAActivityListDto" :key="exhibition.id">
                  <div class="clearfix">
                    <div class="calendar-item_img">
                      <router-link :to="{name: 'exhibition-detail',params:{id: exhibition.id,type: exhibition.dateType}}">
                        <img :src="exhibition.titleImage.key | qiniu" alt="">
                      </router-link>
                    </div>
                    <div class="calendar-item_info">
                      <div class="calitem-info_hd">
                        <p class="calitem-info_name" v-if="isZh"><router-link :to="{name: 'exhibition-detail',params:{id: exhibition.id,type: exhibition.dateType}}">{{exhibition.name}}</router-link></p>
                        <p class="calitem-info_name" v-if="!isZh"><router-link :to="{name: 'exhibition-detail',params:{id: exhibition.id,type: exhibition.dateType}}">{{exhibition.name_En}}</router-link></p>
                        <p class="calitem-info_date clearfix">
                          <span>{{exhibition.startTime | date('YYYY.M.D')}}&nbsp;-&nbsp;{{exhibition.endTime | date('YYYY.M.D')}}</span>
                          <span class="eshare cal-eshare">
                            <div class="jiathis_style">
                              <a href="http://www.jiathis.com/share" class="jiathis sharethis" target="_blank" style=""></a>
                            </div>
                          </span>
                        </p>
                      </div>
                      <div class="calitem-info_bd">
                        <div class="calitem-info_detail" v-html="exhibition.calendarRemark" v-if="exhibition.calendarRemark && isZh"></div>
                        <div class="calitem-info_detail" v-html="exhibition.calendarRemark_En" v-if="exhibition.calendarRemark_En && !isZh"></div>
                      </div>
                      <div class="calitem-info_ft">
                        <router-link :to="{name: 'exhibition-detail',params:{id: exhibition.id,type: exhibition.dateType}}">{{$t('home.learn')}}</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="h50"></div>
                </li>
              </ul>
            </div>
          </div>
          <div class="calendar-item" id="program" v-if="calList.UCCAEventListDto && calList.UCCAEventListDto.length > 0">
            <div class="calendar-item_title">{{$t('home.programs')}}</div>
            <div class="">
              <ul class="list-unstyled">
                <li v-for="program in calList.UCCAEventListDto" :key="program.id" v-if="program.eventCategory != 7">
                  <div class="clearfix">
                    <div class="calendar-item_img">
                      <router-link :to="{name: 'program-detail',params:{id: program.id,type: program.dateType}}">
                        <img :src="program.titleImage.key | qiniu" alt="">
                      </router-link>
                    </div>
                    <div class="calendar-item_info">
                      <div class="calitem-info_hd">
                        <p class="calitem-info_name" v-if="isZh"><router-link :to="{name: 'program-detail',params:{id: program.id,type: program.dateType}}">{{program.name}}</router-link></p>
                        <p class="calitem-info_name" v-if="!isZh"><router-link :to="{name: 'program-detail',params:{id: program.id,type: program.dateType}}">{{program.name_En}}</router-link></p>
                        <p class="calitem-info_date clearfix">
                          <span>{{program.startDate | date('YYYY.M.D')}}&nbsp;-&nbsp;{{program.endDate | date('YYYY.M.D')}}</span>
                          <span class="eshare cal-eshare">
                            <div class="jiathis_style">
                              <a href="http://www.jiathis.com/share" class="jiathis sharethis" target="_blank" style=""></a>
                            </div>
                          </span>
                        </p>
                      </div>
                      <div class="calitem-info_bd">
                        <div class="calitem-info_detail" v-html="program.calendarRemark" v-if="program.calendarRemark && isZh"></div>
                        <div class="calitem-info_detail" v-html="program.calendarRemark_En" v-if="program.calendarRemark_En && !isZh"></div>
                      </div>
                      <div class="calitem-info_ft">
                        <router-link :to="{name: 'program-detail',params:{id: program.id,type: program.dateType}}">{{$t('home.learn')}}</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="h50"></div>
                </li>
              </ul>
            </div>
          </div>
          <div class="calendar-item" id="special" v-if="calList.UCCAEventListDto && calList.UCCAEventListDto.length > 0 &&count > 0">
            <div class="calendar-item_title">{{$t('program.special')}}</div>
            <div class="">
              <ul class="list-unstyled">
                <li v-for="program in calList.UCCAEventListDto" :key="program.id" v-if="program.eventCategory == 7">
                  <div class="clearfix">
                    <div class="calendar-item_img">
                      <router-link :to="{name: 'program-detail',params:{id: program.id,type: program.dateType}}">
                        <img :src="program.titleImage.key | qiniu" alt="">
                      </router-link>
                    </div>
                    <div class="calendar-item_info">
                      <div class="calitem-info_hd">
                        <p class="calitem-info_name" v-if="isZh"><router-link :to="{name: 'program-detail',params:{id: program.id,type: program.dateType}}">{{program.name}}</router-link></p>
                        <p class="calitem-info_name" v-if="!isZh"><router-link :to="{name: 'program-detail',params:{id: program.id,type: program.dateType}}">{{program.name_En}}</router-link></p>
                        <p class="calitem-info_date clearfix">
                          <span>{{program.startDate | date('YYYY.M.D')}}&nbsp;-&nbsp;{{program.endDate | date('YYYY.M.D')}}</span>
                          <span class="eshare cal-eshare">
                            <div class="jiathis_style">
                              <a href="http://www.jiathis.com/share" class="jiathis sharethis" target="_blank" style=""></a>
                            </div>
                          </span>
                        </p>
                      </div>
                      <div class="calitem-info_bd">
                        <div class="calitem-info_detail" v-html="program.calendarRemark" v-if="program.calendarRemark && isZh"></div>
                        <div class="calitem-info_detail" v-html="program.calendarRemark_En" v-if="program.calendarRemark_En && !isZh"></div>
                      </div>
                      <div class="calitem-info_ft">
                        <router-link :to="{name: 'program-detail',params:{id: program.id,type: program.dateType}}">{{$t('home.learn')}}</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="h50"></div>
                </li>
              </ul>
            </div>
          </div>
          <div class="calendar-item" id="children" v-if="calList.UCCAEduWeekReportDto && calList.UCCAEduWeekReportDto.length > 0">
            <div class="calendar-item_title">{{$t('home.childrenAct')}}</div>
            <div>
              <ul class="list-unstyled">
                <li v-for="act in calList.UCCAEduWeekReportDto" :key="act.id">
                  <div class="clearfix">
                    <div class="calendar-item_img">
                      <a>
                        <img :src="act.banners.image.key | qiniu" alt="">
                      </a>
                    </div>
                    <div class="calendar-item_info">
                      <div class="calitem-info_hd">
                        <p class="calitem-info_name" v-if="isZh">{{act.title}}</p>
                        <p class="calitem-info_name" v-if="!isZh">{{act.title_En}}</p>
                        <p class="calitem-info_date clearfix">
                          <span>{{act.startTime | date('YYYY.M.D')}}&nbsp;-&nbsp;{{act.endTime | date('YYYY.M.D')}}</span>
                          <span class="eshare cal-eshare">
                            <div class="jiathis_style">
                              <a href="http://www.jiathis.com/share" class="jiathis sharethis" target="_blank" style=""></a>
                            </div>
                          </span>
                        </p>
                      </div>
                      <div class="calitem-info_bd">
                        <div class="calitem-info_detail" v-if="isZh">{{act.banners.title}}</div>
                        <div class="calitem-info_detail" v-if="!isZh">{{act.banners.title_En}}</div>
                      </div>
                      <div class="calitem-info_ft">
                        <a @click="showCode(act)" v-if="new Date().getTime() <= new Date(act.endTime).getTime() ">{{$t('home.buy')}}</a>
                        <a :href="act.banners.productCode" v-else>{{$t('activity.viewDetail')}}</a>
                      </div>
                    </div>
                  </div>
                  <div class="h50"></div>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div class="footer-split hidden-xs"></div>
      <footer-menu></footer-menu>
      <div class="visible-xs mcalendar-wrap">
        <div class="mcalendar-chart">
          <calendar-date @select-date="selectDate" :selected="select"></calendar-date>
        </div>
        <div class="mcalendar-title">
          <div v-if="isZh">
            <span class="font-en-bold">{{select | date('YYYY')}}</span>年<span class="font-en-bold">{{select | date('M')}}</span>月<span class="font-en-bold">{{select | date('DD')}}</span>日&nbsp;&nbsp;{{select | dateLocale('ddd')}}
          </div>
          <div v-if="!isZh">
            <span class="font-en-bold">{{select | date('YYYY.M.D')}}</span>&nbsp;&nbsp;{{select | date('dddd')}}
          </div>
        </div>
        <div class="mcalendar-hour">
          <p>{{$t('home.admissionHour')}}</p>
          <p class="mcalendar-open">10:00&nbsp;–&nbsp;19:00</p>
          <p class="mcalendar-week">{{$t('home.calendarTime')}}</p>
        </div>
        <div id="all" v-if="isMon">
          <div class="closed-date">{{$t('home.closedDate')}}</div>
          <div class="next-day">
            <a @click="selectDate(nextDay)">{{$t('home.nextDay')}}</a>
          </div>
        </div>
        <div class="mcalendar-other" v-if="!isMon">
          <div class="mcalendar-rec" v-if="calList.UCCAActivityListDto && calList.UCCAActivityListDto.length > 0">
            <div class="mcalendar-rec_title">{{$t('home.exhibitions')}}</div>
            <router-link class="mcalendar-rec_content" :to="{name: 'exhibition-detail',params:{id: exhibition.id,type: exhibition.dateType}}" v-for="exhibition in calList.UCCAActivityListDto" :key="exhibition.id">
              <div class="img">
                <img :src="exhibition.titleImage.key | qiniu" alt="" >
              </div>
              <div class="mcalendar-rec_name" v-if="isZh">{{exhibition.name}}</div>
              <div class="mcalendar-rec_name" v-if="!isZh">{{exhibition.name_En}}</div>
              <div class="mcalendar-rec_time">{{exhibition.startTime | date('YYYY.M.D')}}&nbsp;-&nbsp;{{exhibition.endTime | date('YYYY.M.D')}}</div>
            </router-link>
          </div>
          <div class="mcalendar-rec" v-if="calList.UCCAEventListDto && calList.UCCAEventListDto.length > 0">
            <div class="mcalendar-rec_title">{{$t('home.programs')}}</div>
            <router-link class="mcalendar-rec_content" v-for="program in calList.UCCAEventListDto" :key="program.id" v-if="program.eventCategory != 7" :to="{name: 'program-detail',params:{id: program.id,type: program.dateType}}">
              <div class="img">
                <img :src="program.titleImage.key | qiniu" alt="">
              </div>
              <div class="mcalendar-rec_name">{{ isZh ? program.name : program.name_En}}</div>
              <div class="mcalendar-rec_time">{{program.startDate | date('YYYY.M.D')}}&nbsp;-&nbsp;{{program.endDate | date('YYYY.M.D')}}</div>
            </router-link>
          </div>
          <div class="mcalendar-rec" v-if="calList.UCCAEventListDto && calList.UCCAEventListDto.length > 0">
            <div class="mcalendar-rec_title">{{$t('program.special')}}</div>
            <router-link class="mcalendar-rec_content" v-for="program in calList.UCCAEventListDto" :key="program.id" v-if="program.eventCategory == 7" :to="{name: 'program-detail',params:{id: program.id,type: program.dateType}}">
              <div class="img">
                <img :src="program.titleImage.key | qiniu" alt="">
              </div>
              <div class="mcalendar-rec_name">{{ isZh ? program.name : program.name_En}}</div>
              <div class="mcalendar-rec_time">{{program.startDate | date('YYYY.M.D')}}&nbsp;-&nbsp;{{program.endDate | date('YYYY.M.D')}}</div>
            </router-link>
          </div>
          <div class="mcalendar-rec" v-if="calList.UCCAEduWeekReportDto && calList.UCCAEduWeekReportDto.length > 0">
            <div class="mcalendar-rec_title">{{$t('home.childrenAct')}}</div>
            <a class="mcalendar-rec_content" v-for="act in calList.UCCAEduWeekReportDto" :key="act.id" @click="showCode(act)" v-if="new Date().getTime() <= new Date(act.endTime).getTime() ">
              <div class="img">
                <img :src="act.banners.image.key | qiniu" alt="">
              </div>
              <div class="mcalendar-rec_name">{{ isZh ? act.title : act.title_En}}</div>
              <div class="mcalendar-rec_time">{{act.startTime | date('YYYY.M.D')}}&nbsp;-&nbsp;{{act.endTime | date('YYYY.M.D')}}</div>
            </a>
            <a class="mcalendar-rec_content" v-for="act in calList.UCCAEduWeekReportDto" :key="act.id" :href="act.banners.productCode" v-if="new Date().getTime() > new Date(act.endTime).getTime() ">
              <div class="img">
                <img :src="act.banners.image.key | qiniu" alt="">
              </div>
              <div class="mcalendar-rec_name">{{ isZh ? act.title : act.title_En}}</div>
              <div class="mcalendar-rec_time">{{act.startTime | date('YYYY.M.D')}}&nbsp;-&nbsp;{{act.endTime | date('YYYY.M.D')}}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <mt-popup v-model="isShow" popup-transition="popup-fade" :modal="true" style="width:400px;min-height:300px">
      <div class="modal-wechat_qrcode text-center">
        <qriously :value="codeText" :size="200" />
        <!-- <vue-q-art :config="config" :downloadButton="downloadButton"></vue-q-art> -->
        <p>{{$t('home.qrcode')}}</p>
      </div>
    </mt-popup>
  </div>
</template>
<script>
import FooterMenu from '@/components/FooterMenu'
import CalendarDate from '@/components/CalendarDate'
import { Popup } from 'mint-ui'
import api from '@/api/api'
import dateFns from 'date-fns'

export default {
  name: 'calendar',
  data() {
    return {
      current: new Date(),
      isShow: false,
      codeText: '',
      calList: {},
      type: '#all',
      select: dateFns.format(new Date(), 'YYYY-MM-DD'),
      count: 0,
    }
  },
  created() {
    this.load()
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
    isMon() {
      return dateFns.getDay(this.select) === 1
    },
    nextDay() {
      return dateFns.addDays(this.select, 1)
    },
  },
  methods: {
    go(selector) {
      const anchor = this.$el.querySelector(selector)
      if (anchor) {
        window.scrollTo(0, anchor.offsetTop)
        this.type = selector
      }
    },
    load() {
      api.getEventByDate({ date: this.select }).then((data) => {
        if (data) {
          if (data.UCCAActivityListDto && data.UCCAActivityListDto.length > 0) {
            data.UCCAActivityListDto.forEach((item) => {
              if (dateFns.isBefore(item.endTime, this.current)) {
                Object.assign(item, { dateType: '3' })
              }
              if (dateFns.isAfter(item.startTime, this.current)) {
                Object.assign(item, { dateType: '2' })
              }
              if (dateFns.isAfter(item.endTime, this.current) && dateFns.isBefore(item.startTime,
              this.current)) {
                Object.assign(item, { dateType: '1' })
              }
            })
          }
          if (data.UCCAEventListDto && data.UCCAEventListDto.length > 0) {
            data.UCCAEventListDto.forEach((item) => {
              if (item.eventCategory === 7) {
                Object.assign(item, { dateType: '3' })
                this.count += 1
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
        }
        this.calList = data
      })
    },
    selectDate(date) {
      this.select = dateFns.format(date, 'YYYY-MM-DD')
      if (dateFns.getDay(date) !== 1) {
        this.load()
      }
    },
    showCode(topic) {
      this.isShow = true
      this.codeText = topic.banners.productCode
    },
  },
  components: {
    FooterMenu,
    CalendarDate,
    Popup,
  },
}
</script>
<style lang="scss">
.modal-wechat_qrcode {
  margin-top: 40px;
}
  .closed-date {
    font-size: 28px;
    padding: 45px 0px 45px 0px;
    font-weight: bold;
  }
  .next-day {
    a {
      cursor: pointer;
      font-size: 13px;
      color: #ed3024;
      font-weight: bold;
      padding-right: 11px;
      background: url(../../assets/img/icon-right.png) right 5px no-repeat;
    }
  }
  .calendar-title {
    font-size: 32px;
    line-height: 36px;
    font-weight: bold;
    width: 430px;
    float: left;
    .font-en-bold {
      font-size: 40px;
    }
  }
  .calendar-chart {
    width: 320px;
    float: left;
    min-height: 200px;
  }
  .calendar-hour {
    width: 250px;
    float: left;
    margin-top: 44px;
    ul {
      >li {
        text-align: right;
        &:first-child {
          font-family: 'Microsoft Yahei';
          color: #999;
          font-size: 13px;
        }
        &+li {
          margin-top: 12px;
          font-size: 24px;
          font-family: 'MetricSemibold',arial;
          &+li {
            margin-top: 2px;
            font-size: 11px;
            line-height: 12px;
            font-family: 'Microsoft Yahei';
          }
        }
      }
    }
  }
  .calendar-item {
    border-bottom: 1px solid #000;
    .calendar-item_title {
      font-size: 28px;
      padding: 45px 0px 45px 0px;
      font-weight: bold;
    }
  }
  .calendar-item_img{
    width: 239px;
    float: left;
    min-width: 239px;
    min-height: 100px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .calendar-item_info {
    width: 741px;
    float: left;
    margin-left: 20px;
  }
  .calitem-info_name {
    font-size: 17px;
    line-height: 20px;
    font-weight: bold;
    a {
      color: #000;
    }
  }
  .calitem-info_date {
    font-size: 18px;
    color: #999;
    font-family: 'MetricSemibold',arial;
    span {
      float: left;
    }
    .eshare.cal-eshare {
      .sharethis {
        float: left !important;
        margin-left: 30px;
      }
    }
  }
  .calitem-info_ft {
    margin-top: 15px;
    a {
      font-family: 'Microsoft Yahei';
      font-weight: bold;
      color: #ed3024;
      font-size: 11px;
      padding-right: 13px;
      cursor: pointer;
      background: url(../../assets/img/icon-show.jpg) right 3px no-repeat;
    }
  }
  .calitem-info_detail {
    margin-top: 15px;
    font-size: 13px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 18px;
    img {
      max-width: 100%;
    }
    p {
      font-family: 'Microsoft Yahei';
      font-size: 11px;
      line-height: 18px;
    }
  }
  @media screen and (max-width: 767px) {
    .mcalendar-title {
      margin-top: 25px;
      font-family: Helvetica;
      font-size: 23px;
      line-height: 25px;
      font-weight: bold;
      .font-en-bold  {
        font-size: 28px;
      }
    }
    .mcalendar-hour {
      margin-top: 5px;
      font-family: Helvetica;
      font-size: 14px;
      line-height: 20px;
      color: #999999;
      font-weight: bold;
      p {
        margin-bottom: 0;
        height: 15px;
      }
      .mcalendar-open {
        height: 20px;
        font-family: 'MetricSemibold';
        font-size: 25px;
        color: #000000;
        margin-top: 6px;
      }
      .mcalendar-week {
        height: 18px;
        font-family: Helvetica;
        font-size: 14px;
        color: #000000;
        font-weight: bold;
      }
    }
    .mcalendar-other {
      .mcalendar-rec {
        margin-top: 25px;
      }
      .mcalendar-rec_title {
        font-size: 20px;
        font-family: Helvetica;
        font-weight: bold;
        padding-top: 25px;
        border-top: 1px solid #000;
      }
      .mcalendar-rec_content {
        .img {
          margin-top: 20px;
          img {
            width: 100%;
            height: auto;
          }
        }
        .mcalendar-rec_name {
          font-family: Helvetica;
          font-size: 14px;
          color: #000000;
          font-weight: bold;
          line-height: 18px;
          margin-top: 10px;
        }
        .mcalendar-rec_time {
          font-family: 'arial';
          font-size: 11px;
          color: #555555;
        }
      }
    }
  }
</style>


