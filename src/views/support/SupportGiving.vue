<template>
  <div class="support-wrap">
    <div class="hidden-xs">
    <div class="h33"></div>
    <div class="common-title">{{$t('support.giving')}}</div>
    <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
      <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
    <!-- <div class="clearfix">
      <div class="tleft support-intro">
        <p>{{$t('support.s5')}}</p>
      </div>
    </div>
    <div class="visit-border"></div>
    <div class="giving-list">
      <ul class="list-unstyled">
        <li class="clearfix">
          <div class="gleft">
            <img src="../../assets/img/giving.jpg" alt="">
          </div>
          <div class="gright">
            <div class="gright-hd">{{$t('support.council')}}</div>
            <div class="gright-bd">
              <p>{{$t('support.s6')}}</p>
              <p>{{$t('support.phone1')}}+86 10 5780 0267 /&nbsp;<span><strong><a href="mailto:zong.han@ucca.org.cn">zong.han@ucca.org.cn</a></strong></span></p>
            </div>
            <div class="gright-ft clearfix">
              <a>{{$t('home.learn')}}</a>
            </div>
          </div>
        </li>
        <li class="clearfix">
          <div class="gleft">
            <img src="../../assets/img/S6.jpg" alt="">
          </div>
          <div class="gright">
            <div class="gright-hd">{{$t('support.gala')}}</div>
            <div class="gright-bd">
              <p>{{$t('support.s7')}}</p>
              <p>{{$t('support.phone2')}}&nbsp;+86<br>10 5780 0208&nbsp;/&nbsp;<span><strong><a href="mailto:Charlize.lin@ucca.org.cn">Charlize.lin@ucca.org.cn</a></strong></span></p>
            </div>
            <div class="gright-ft clearfix">
              <a>{{$t('home.learn')}}</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="h90"></div> -->
    </div>
    <div class="visible-xs  msupport-wrap">
      <div class="mobile-common_title">{{$t('support.giving')}}</div>
      <div class="msupport-content">
        <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
        <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/api'

export default {
  name: 'support-giving',
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
    api.getPageByType({ infoCategory: 3 }).then((data) => {
      this.detail = data
    })
  },
}
</script>
<style lang="scss">
</style>

