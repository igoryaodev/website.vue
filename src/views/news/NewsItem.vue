<template>
  <div class="news-item clearfix">
    <div class="nitem-img">
      <img :src="news.image.key | qiniu" alt="">
    </div>
    <div class="nitem-info">
      <div class="ninfo-title" v-if="isZh">{{news.title}}</div>
      <div class="ninfo-title" v-if="!isZh">{{news.title_En}}</div>
      <div class="ninfo-date font-en-bold">{{news.dateTime | date('YYYY.M.D')}}</div>
      <div class="ninfo-brief" v-if="isZh">{{news.subTitle}}</div>
      <div class="ninfo-brief" v-if="!isZh">{{news.subTitle_En}}</div>
      <div class="ninfo-more">
        <router-link :to="{name: 'news-index',params: {id: news.id}}" class="icon-more">{{$t('activity.readMore')}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'news-item',
  props: ['news'],
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
}
</script>

<style lang="scss">
.news-item {
  margin-top: 47px;
  &:first-child {
    margin-top: 0;
  }
  .nitem-img {
    width: 240px;
    float: left;
    overflow: hidden;
    font-size: 0px;
    line-height: 0px;
    min-height: 240px;
    margin-top: 3px;
  }
  .nitem-info {
    width: 740px;
    float: left;
    margin-left: 20px;
    .ninfo-title {
      font-size: 24px;
      color: #000;
      font-family: "Microsoft Yahei","SimSun","SimHei";
      line-height: 26px;
      font-weight: bold;
    }
    .ninfo-date {
      margin-top: 10px;
      color: #999;
      font-size: 20px;
    }
    .ninfo-brief {
      font-size: 12px;
      color: #000;
      font-family: "Microsoft Yahei","SimSun";
      line-height: 18px;
      margin-top: 15px;
    }
    .ninfo-more {
      margin-top: 25px;
      a {
        font-size: 12px;
        color: #ed3024;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .icon-more {
        padding-right: 13px;
        background: url(../../assets/img/icon-show.jpg) right 3px no-repeat;
      }
    }
  }
}
</style>

