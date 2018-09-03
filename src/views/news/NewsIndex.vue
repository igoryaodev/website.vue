<template>
  <div class="news-detail">
    <div class="clearfix">
      <div class="tleft">
        <div class="ndetail-title" v-if="isZh">{{newsDetail.title}}</div>
        <div class="ndetail-title" v-if="!isZh">{{newsDetail.title_En}}</div>
        <div class="ndetail-back clearfix">
          <div class="ndetail-back_left">
            <span class="back-icon"></span>
            <span class="back-news">
              <router-link :to="{name: 'news-list'}">{{$t('home.backNews')}}</router-link>
            </span>
          </div>
          <div class="ndetail-back_right">
            <div class="eshare">
              <div class="jiathis_style">
                <a href="http://www.jiathis.com/share" class="jiathis sharethis" target="_blank" style=""></a>
              </div>
            </div>
          </div>
        </div>
        <div class="ndetail-content" v-if="isZh" v-html="newsDetail.description"></div>
        <div class="ndetail-content" v-if="!isZh" v-html="newsDetail.description_En"></div>
      </div>
      <div class="tright">
        <div class="ndetail-date">
          <div class="ndetail-year" v-if="isZh">{{newsDetail.dateTime | date('YYYY')}}年{{newsDetail.dateTime | date('M')}}月</div>
          <div class="ndetail-day">{{newsDetail.dateTime | date('D')}}</div>
          <div class="ndetail-week">{{newsDetail.dateTime | dateLocale('ddd')}}</div>
        </div>
      </div>
    </div>
    <div class="footer-split fot-border"></div>
  </div> 
</template>
<script>
import api from '@/api/api'

export default {
  name: 'news-index',
  data() {
    return {
      newsDetail: {},
    }
  },
  created() {
    api.getNewsById(this.$route.params.id).then((data) => {
      this.newsDetail = data
    })
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
}
</script>
<style lang="scss">
.news-detail {
  margin-top: 60px;
  .tright {
    width: 190px;
    float: left;
    margin-left: 60px;
  }
  .ndetail-title {
    font-size: 34px;
    color: #000;
    font-family: "SimHei","Microsoft Yahei";
    line-height: 36px;
  }
  .ndetail-back {
    margin-top: 10px;
  }
  .ndetail-content {
    margin-top: 45px;
  }
}
.ndetail-back_left {
  float: left;
  width: 175px;
  .back-icon {
    width: 11px;
    height: 11px;
    float: left;
    background: url(../../assets/img/bg-list.png) 0px 0px no-repeat;
    margin-top: 6px;
  }
  .back-news {
    width: 159px;
    float: left;
    margin-left: 4px;
    a {
      color: #999;
      font-size: 12px;
      font-family: "Microsoft Yahei";
    }
  }
}
.ndetail-back_right {
  width: 100px;
  float: left;
  .eshare .jiathis {
    float: left !important;
  }
}
.ndetail-date {
  width: 190px;
  border: 1px solid #000;
  text-align: center;
  .ndetail-year {
    width: 184px;
    margin: 2px 0px 0px 2px;
    line-height: 22px;
    background: #eb3024;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
  }
  .ndetail-day {
    font-size: 40px;
    color: #000;
    line-height: 42px;
  }
  .ndetail-week {
    height: 20px;
    font-size: 10px;
    color: #999;
  }
}
</style>

