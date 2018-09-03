<template>
  <div class="weekend-wrap common-wrap">
    <div class="hidden-xs">
    <div class="common-title">{{$t('home.artStore')}}</div>
    <div class="clearfix">
      <div class="tleft" v-if="weekend.list">
        <div class="weekend-brief" v-html="weekend.list[0].description" v-if="isZh"></div>
        <div class="weekend-brief" v-html="weekend.list[0].description_En" v-if="!isZh"></div>
        <div class="past-weekend clearfix">
          <div class="past-weekend_left">
          </div>
          <div class="past-weekend_right">
            <div class="weekend-time" v-if="isZh">{{weekend.list[0].moreInfo}}</div>
            <div class="weekend-time" v-if="!isZh">{{weekend.list[0].moreInfo_En}}</div>
          </div>
        </div>
      </div>
      <div class="tright" v-if="weekend.list">
        <div class="past-weekend_list">
            <swiper :options="swiperOption">
              <swiper-slide v-for="item in weekend.list[0].Images" :key="item.id">
                <div>
                  <img :src="item.key | qiniu" alt="">
                </div>
              </swiper-slide>
            </swiper>
          </div>
      </div>
    </div>
    <div class="visit-border"></div>
    <div class="recent-topics">
      <div class="recent-topics_title clearfix">
        <a @click="showTopic" :class="{active: !isPast}">{{$t('home.recentTopic')}}</a>
        <a @click="showTopic(2)" :class="{active: isPast}">{{$t('home.pastTopic')}}</a>
      </div>
      <div v-if="!isPast">
        <div class="recent-topics_list clearfix" v-if="weekend.list && weekend.list[0].UCCAEduWeekReportDto">
          <div class="recent-topics_item" v-for="topic in weekend.list[0].UCCAEduWeekReportDto" :key="topic.id">
            <div class="recent-topic_img">
                <img :src="topic.banners.image.key | qiniu" alt="">
            </div>
            <div class="recent-topic_info">
              <div class="recent-topic_text" v-if="isZh">{{topic.banners.title}}</div>
              <div class="recent-topic_text" v-if="!isZh">{{topic.banners.title_En}}</div>
              <a class="recent-buy" @click="showCode(topic)">{{$t('home.buy')}}</a>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="recent-topics_list clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
          <div class="recent-topics_item" v-for="topic in pastList.list" :key="topic.id">
            <div class="recent-topic_img">
                <img :src="topic.banners.image.key | qiniu" alt="">
            </div>
            <div class="recent-topic_info">
              <div class="recent-topic_text" v-if="isZh">{{topic.banners.title}}</div>
              <div class="recent-topic_text" v-if="!isZh">{{topic.banners.title_En}}</div>
              <a class="recent-buy" :href="topic.banners.productCode">{{$t('activity.viewDetail')}}</a>
            </div>
          </div>
        </div>
        <p v-show="show" class="page-infinite-loading"></p>
      </div>
    </div>
    <div class="footer-split fot-border"></div>
    </div>
    <div class="visible-xs mobile-common_wrap mcreative-wrap">
      <div class="mobile-common_title">{{$t('home.artStore')}}</div>
      <div v-if="weekend.list">
        <div class="mweekend-swipe">
          <swiper :options="swiperOption">
            <swiper-slide v-for="item in weekend.list[0].Images" :key="item.id">
              <div>
                <img :src="item.key | qiniu" alt="">
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="weekend-brief" v-html="weekend.list[0].description" v-if="isZh"></div>
        <div class="weekend-brief" v-html="weekend.list[0].description_En" v-if="!isZh"></div>
      </div>
      <div class="mrecent-topic">
        <div class="mrecent-topics_title clearfix">
          <a @click="showTopic" :class="{active: !isPast}">{{$t('home.recentTopic')}}</a>
          <a @click="showTopic(2)" :class="{active: isPast}">{{$t('home.pastTopic')}}</a>
        </div>
        <div v-if="!isPast">
          <div class="mrecent-topics_list" v-if="weekend.list && weekend.list[0].UCCAEduWeekReportDto">
            <div class="mrecent-topics_item clearfix" v-for="topic in weekend.list[0].UCCAEduWeekReportDto" :key="topic.id">
              <div class="mrecent-topic_img">
                  <img :src="topic.banners.image.key | qiniu" alt="">
              </div>
              <div class="mrecent-topic_info">
                <div class="mrecent-topic_text" v-if="isZh">{{ isZh ? topic.banners.title : topic.banners.title_En}}</div>
                <a class="recent-buy" @click="showCode(topic)">{{$t('home.buy')}}</a>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="mrecent-topics_list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
            <div class="mrecent-topics_item clearfix" v-for="topic in pastList.list" :key="topic.id">
              <div class="mrecent-topic_img">
                  <img :src="topic.banners.image.key | qiniu" alt="">
              </div>
              <div class="mrecent-topic_info">
                <div class="mrecent-topic_text" v-if="isZh">{{ isZh ? topic.banners.title : topic.banners.title_En}}</div>
                <a class="recent-buy" :href="topic.banners.productCode">{{$t('activity.viewDetail')}}</a>
              </div>
            </div>
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
import { Popup, InfiniteScroll } from 'mint-ui'
import api from '@/api/api'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'weekend-store',
  data() {
    return {
      weekend: {},
      isShow: false,
      codeText: '123',
      pastList: {
        list: [],
      },
      loading: false,
      show: false,
      page: 1,
      isPast: false,
      swiperOption: {
        effect: 'fade',
        autoplay: 2000,
      },
    }
  },
  created() {
    api.getWeekendShop({ infoCategory: 1 }).then((data) => {
      this.weekend = data
    })
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  methods: {
    showCode(topic) {
      this.isShow = true
      this.codeText = topic.banners.productCode
    },
    showTopic(type) {
      if (type === 2) {
        this.isPast = true
      } else {
        this.isPast = false
      }
    },
    loadMore() {
      this.isPast = true
      this.loading = true
      this.show = true
      api.getPastTopicList({ type: 2, page: this.page }).then((data) => {
        /* eslint no-param-reassign: "off" */
        data.list = this.pastList.list.concat(data.list)
        this.pastList = data
        this.page += 1
        if (this.page > data.totalPages) {
          this.loading = true
        } else {
          this.loading = false
        }
        this.show = false
      })
    },
  },
  components: {
    swiper,
    swiperSlide,
    Popup,
    InfiniteScroll,
  },
}
</script>
<style lang="scss">
.modal-wechat_qrcode {
  margin-top: 40px;
}
.past-weekend {
  margin-top: 25px;
}
.past-weekend_left {
  float: left;
  width: 60%;
}
.past-weekend_right {
  float: left;
  width: 40%;
  .weekend-time {
    // padding-left: 20px;
    white-space: pre-line;
  }
}
.weekend-wrap{
  .tleft {
    width: 550px;
  }
  .tright {
    width: 450px;
    margin: 0;
    padding-left: 40px;
    padding-right: 50px;
  }
}
.past-weekend_list {
  img {
    max-width: 100%;
    height: auto;
  }
}
.recent-topics_title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  a {
    float: left;
    padding-left: 10px;
    color: #999;
    cursor: pointer;
    &:first-child{
      border-right: 1px solid #999;
      padding-right: 10px;
      padding-left: 0;
    }
    &:hover {
      color: #000;
    }
    &.active {
      color: #000;
    }
  }
}
.recent-topics_item {
  float: left;
  width: 50%;
  height: 364px;
  .recent-topic_img {
    float: left;
    width: 244px;
    border: 1px solid #ccc;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .recent-topic_info {
    float: left;
    width: 186px;
    margin-left: 28px;
    .recent-topic_text {
      height: 330px;
    }
  }
  .recent-buy {
    display: block;
    height: 25px;
    color: #fff;
    // background-color: #f37826;
    background: linear-gradient(to bottom, #f18a50, #f37826 50%, #f6c09f);
    line-height: 25px;
    text-align: center;
    width: 120px;
    font-family: Helvetica;
    cursor: pointer;
  }
}
@media screen and (max-width: 767px) {
  .mweekend-swipe {
    img {
      width: 100%;
      height: auto;
    }
  }
  .weekend-brief {
    margin-top: 10px;
  }
  .mrecent-topic  {
    margin-top: 20px;
    .mrecent-topics_title {
      font-size: 20px;
      font-weight: bold;
      a {
        float: left;
        width: 50%;
        text-align: left;
        color: #999;
        &.active {
          color: #000;
        }
      }
    }
  }
  .mrecent-topics_item {
    margin-top: 15px;
    .mrecent-topic_img {
      width: 45%;
      float: left;
      border: 1px solid #ccc;
      img {
        width: 100%;
        height: auto;
      }
    }
    .mrecent-topic_info {
      float: left;
      width: 55%;
      padding-left: 10px;
      font-size: 12px;
      font-family: Helvetica;
    }
    .recent-buy {
      display: block;
      height: 25px;
      color: #fff;
      // background-color: #f37826;
      background: linear-gradient(to bottom, #f18a50, #f37826 50%, #f6c09f);
      line-height: 25px;
      text-align: center;
      width: 120px;
      font-family: Helvetica;
      margin-top: 20px;
    }
  }
}
</style>



