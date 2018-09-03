<template>
  <div class="artclass-wrap common-wrap">
    <div class="hidden-xs">
    <div class="clearfix">
      <div class="tleft">
        <div class="common-title" v-if="isZh">{{artDetail.title}}</div>
        <div class="common-title" v-if="!isZh">{{artDetail.title_En}}</div>
        <div class="artclass-intro" v-html="artDetail.description" v-if="isZh"></div>
        <div class="artclass-intro" v-html="artDetail.description_En" v-if="!isZh"></div>
      </div>
      <div class="tright">
        <div class="artclass-banner">
          <swiper :options="swiperOption">
            <swiper-slide v-for="slide in artDetail.uccaEduCreativityImageDto" :key="slide.id">
              <div>
                <img :src="slide.key | qiniu" alt="">
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="visit-border"></div>
    <div class="artclass-item_list">
      <ul class="list-unstyled clearfix">
        <li v-for="item in artDetail.uccaEduCreativityContentDto" :key="item.id">
          <div class="artclass-item_img">
            <div class="img-cover"></div>
            <img :src="item.image.key | qiniu" alt="">
          </div>
          <div class="artitem-title" v-if="isZh">{{item.title}}</div>
          <div class="artitem-title" v-if="!isZh">{{item.title}}</div>
          <div class="artitem-brief" v-if="isZh">{{item.desciption}}</div>
          <div class="artitem-brief" v-if="!isZh">{{item.desciption_En}}</div>
          <div class="artitem-link">
            <router-link :to="{name:'trial'}" v-if="isZh">{{item.buttonName}}</router-link>
            <router-link :to="{name:'trial'}" v-if="!isZh">{{item.buttonName_En}}</router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="visit-border"></div>
    </div>
    <div class="visible-xs mobile-common_wrap mcreative-wrap">
      <div class="mobile-common_title">{{isZh ? artDetail.title : artDetail.title_En}}</div>
      <div class="mclass-detail" v-html="artDetail.description" v-if="isZh"></div>
      <div class="mclass-detail" v-html="artDetail.description" v-if="!isZh"></div>
      <div class="mclass-swipe">
        <swiper :options="swiperOption">
          <swiper-slide v-for="slide in artDetail.uccaEduCreativityImageDto" :key="slide.id">
            <div>
              <img :src="slide.key | qiniu" alt="">
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="martclass-item_list">
        <div class="martclass-item_wrap clearfix" v-for="item in artDetail.uccaEduCreativityContentDto" :key="item.id">
          <div class="martclass-item_img" >
            <div class="img-cover"></div>
            <img :src="item.image.key | qiniu" alt="">
          </div>
          <div class="martclass-item_info">
            <div class="martitem-title" v-if="isZh">{{item.title}}</div>
            <div class="martitem-title" v-if="!isZh">{{item.title}}</div>
            <div class="martitem-brief" v-if="isZh">{{item.desciption}}</div>
            <div class="martitem-brief" v-if="!isZh">{{item.desciption_En}}</div>
            <div class="martitem-link">
              <router-link :to="{name:'trial'}" v-if="isZh">{{item.buttonName}}</router-link>
              <router-link :to="{name:'trial'}" v-if="!isZh">{{item.buttonName_En}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import api from '@/api/api'

export default {
  name: 'artclass-detail',
  data() {
    return {
      artDetail: {},
      swiperOption: {
        effect: 'fade',
        direction: 'vertical',
        height: 300,
        autoplay: 2000,
      },
    }
  },
  created() {
    api.getArtClass(this.$route.params.id).then((data) => {
      this.artDetail = data
    })
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  components: {
    swiper,
    swiperSlide,
  },
}
</script>
<style lang="scss" scoped>
.artclass-banner {
  margin-top: 40px;
}
.tleft {
  width: 660px;
  margin-right: 50px;
}
.tright {
  width: 289px;
  margin-left: 0;
}
.swiper-container {
  height: 200px;
  img {
    max-width: 100%;
    height: auto;
  }
}
.artclass-intro {
  margin-top: 45px;
  font-size: 12px;
  color: #000;
  font-family: "Microsoft Yahei","SimSun";
  line-height: 18px;
}
.artclass-item_list {
  ul {
    >li {
      float: left;
      width: 333px;
    }
  }
}
.artclass-item_img {
  width: 319px;
  height: 456px;
  padding: 19px 0px 0px 19px;
  position: relative;
  .img-cover {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 319px;
    height: 456px;
    background: url(../../../assets/img/bg-frame.png) 0px 0px no-repeat;
  }
}
.artitem-title{
  margin-top: 15px;
  font-size: 20px;
  color: #000;
  font-family: "MetricSemibold","Microsoft Yahei","SimSun";
  font-weight: bold;
}
.artitem-brief {
  font-size: 12px;
  color: #999;
  font-family: "Microsoft Yahei","SimSun";
  line-height: 18px;
}
.artitem-link {
  margin-top: 25px;
  a {
    display: inline-block;
    background: #ed3024;
    color: #fff;
    font-size: 18px;
    font-family: 'Microsoft Yahei';
    padding: 9px 32px 10px 32px;
  }
}
@media screen and (max-width: 767px){
  .mclass-swipe {
    img {
      width: 100%;
      height: auto;
    }
  }
  .martclass-item_wrap {
    margin-top: 20px;
    .martclass-item_img {
      width: 50%;
      float: left;
      position: relative;
      img {
        max-width: 100%;
        height: auto;
      }
      .img-cover {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: url(../../../assets/img/bg-frame.png) 0px 0px no-repeat;
        background-size: contain;
      }
    }
    .martclass-item_info {
      float: left;
      width: 50%;
      padding-left: 10px;
      .martitem-title {
        // margin-top: 15px;
        font-size: 20px;
        color: #000;
        font-family: "MetricSemibold","Microsoft Yahei","SimSun";
        font-weight: bold;
      }
      .martitem-brief {
        font-size: 12px;
        color: #999;
        font-family: "Microsoft Yahei","SimSun";
        line-height: 18px;
      }
      .martitem-link {
        margin-top: 25px;
        a {
          display: inline-block;
          background: #ed3024;
          color: #fff;
          font-size: 16px;
          font-family: 'Microsoft Yahei';
          width: 100%;
          text-align: center;
          padding: 5px 0;
          cursor: pointer;
          // padding: 9px 32px 10px 32px;
        }
      }
    }
  }
}
</style>


