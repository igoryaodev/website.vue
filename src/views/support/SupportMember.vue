<template>
  <div class="support-wrap">
    <div class="hidden-xs">
    <div class="h33"></div>
    <div class="common-title">{{$t('support.membership')}}</div>
    <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
    <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
     <!-- <div class="clearfix">
      <div class="tleft support-intro">
        <p>{{$t('support.m1')}}</p>
        <p>{{$t('support.m2')}}</p>
        <p>{{$t('support.m3')}}</p>
      </div>
    </div> -->
    <div class="visit-border"></div>
    <div class="giving-list">
      <ul class="list-unstyled">
        <li class="clearfix">
          <div class="gleft">
            <img src="../../assets/img/member2.jpg" alt="">
          </div>
          <div class="gright">
            <div class="gright-hd">{{$t('support.joinUcca')}}</div>
            <div class="gright-bd">
              <div class="h25"></div>
            </div>
            <div class="gright-ft clearfix">
              <router-link :to="{name: 'member-benefit'}">{{$t('home.learn')}}</router-link>
            </div>
          </div>
        </li>
        <li class="clearfix">
          <div class="gleft">
            <img src="../../assets/img/member1.jpg" alt="">
          </div>
          <div class="gright">
            <div class="gright-hd">{{$t('support.event')}}</div>
            <div class="gright-bd">
              <div class="h25"></div>
            </div>
            <div class="gright-ft clearfix">
              <router-link :to="{name: 'member-event'}">{{$t('home.learn')}}</router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="h90"></div> 
    </div>
    <div class="visible-xs  msupport-wrap">
      <div class="mobile-common_title">{{$t('support.membership')}}</div>
      <div class="msupport-content">
        <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
        <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
        <div class="msupport-member_list clearfix">
          <div class="msupport-member_item">
            <router-link :to="{name: 'member-benefit'}" class="img"><img src="../../assets/img/member2.jpg"></router-link>
            <div class="msupport-member_name">
              <p>{{$t('support.joinUcca')}}</p>
              <router-link :to="{name: 'member-benefit'}">{{$t('home.learn')}}&nbsp;+</router-link>
            </div>
          </div>
          <div class="msupport-member_item">
            <router-link :to="{name: 'member-event'}" class="img"><img src="../../assets/img/member1.jpg"></router-link>
            <div class="msupport-member_name">
              <p>{{$t('support.event')}}</p>
              <router-link :to="{name: 'member-event'}">{{$t('home.learn')}}&nbsp;+</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/api'

export default {
  name: 'support-member',
  data() {
    return {
      detail: [],
    }
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  created() {
    api.getPageByType({ infoCategory: 5 }).then((data) => {
      this.detail = data
    })
  },
}
</script>
<style lang="scss">
@media screen and (max-width: 767px) {
  .msupport-member_list {
    .msupport-member_item {
      width: 47%;
      float: left;
      &:nth-child(even) {
        float: right;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      .msupport-member_name {
        p {
          font-size: 14px;
          margin-top: 10px;
          font-family: Helvetica;
          font-weight: bold;
          margin-bottom: 0;
        }
        a {
          font-family: Helvetica;
          font-size: 12px;
          line-height: 15px;
          display: block;
          color: #ed3024;
        }
      }
    }
  }
}
</style>

