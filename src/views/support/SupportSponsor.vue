<template>
  <div class="support-wrap">
    <div class="hidden-xs">
    <div class="h33"></div>
    <div class="common-title">{{$t('support.sponsor')}}</div>
    <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
    <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
    </div>
    <div class="visible-xs  msupport-wrap">
      <div class="mobile-common_title">{{$t('support.sponsor')}}</div>
      <div class="msupport-content">
        <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
        <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
      </div>
    </div>
    <!-- <div class="clearfix">
      <div class="tleft support-intro">
        <p>{{$t('support.s1')}}</p>
        <p>{{$t('support.s2')}}</p>
        <p>{{$t('support.s3')}}</p>
        <p>{{$t('support.s4')}}</p>
      </div>
    </div>
    <div class="visit-border"></div>
    <div class="clearfix">
      <div class="tleft">
        <div class="sponsor-title">{{$t('support.corporate')}}</div>
        <div class="sponsor-item">
          <ul class="list-unstyled clearfix">
            <li v-for="item in sponsorList" :key="item.id"><a :href="item.url" target="_blank"><img :src="item.path" alt=""></a></li>
          </ul>
        </div>
        <div class="h70"></div>
        <div class="sponsor-title">{{$t('support.hotel')}}</div>
        <div class="sponsor-item">
          <ul class="list-unstyled clearfix">
            <li v-for="item in hotel" :key="item.id"><a :href="item.url" target="_blank"><img :src="item.path" alt=""></a></li>
          </ul>
        </div>
        <div class="h70"></div>
        <div class="sponsor-title">{{$t('support.media')}}</div>
        <div class="sponsor-item">
          <ul class="list-unstyled clearfix">
            <li v-for="item in media" :key="item.id"><a :href="item.url" target="_blank"><img :src="item.path" alt=""></a></li>
          </ul>
        </div>
        <div class="h70"></div>
        <div class="sponsor-title">{{$t('support.cultural')}}</div>
        <div class="sponsor-item">
          <ul class="list-unstyled clearfix">
            <li v-for="item in culture" :key="item.id"><a :href="item.url" target="_blank"><img :src="item.path" alt=""></a></li>
          </ul>
        </div>
        <div class="h70"></div>
        <div class="sponsor-title">{{$t('support.foundations')}}</div>
        <div class="sponsor-item">
          <ul class="list-unstyled clearfix">
            <li v-for="item in foundations" :key="item.id"><a :href="item.url" target="_blank"><img :src="item.path" alt=""></a></li>
          </ul>
        </div>
        <div class="h70"></div>
        <div class="sponsor-title">{{$t('support.embassies')}}</div>
        <div class="sponsor-item">
          <ul class="list-unstyled clearfix">
            <li v-for="item in emlist" :key="item.id"><a :href="item.url" target="_blank"><img :src="item.path" alt=""></a></li>
          </ul>
        </div>
        <div class="h70"></div>
      </div>
    </div>
    <div class="h90"></div> -->
  </div>
</template>
<script>
import api from '@/api/api'

const sponsor1 = require('../../assets/img/lvmh.jpg')
const sponsor2 = require('../../assets/img/Rolex.jpg')
const sponsor3 = require('../../assets/img/Barco.gif')
const sponsor4 = require('../../assets/img/dior1.jpg')
const sponsor5 = require('../../assets/img/jnby.jpg')
const sponsor6 = require('../../assets/img/WT.jpg')
const sponsor7 = require('../../assets/img/gebe.jpg')
const sponsor8 = require('../../assets/img/davidoff.jpg')

const url1 = 'http://www.lvmh.com'
const url2 = 'http://www.rolex.com/zh-hans?cmpid=baidu-brand-zone-title'
const url3 = 'http://www.barco.com.cn/zh-CN/'
const url4 = 'http://www.dior.cn/home/zh_cn?utm_source=baidu&utm_medium=brandzone&utm_campaign=title'
const url5 = 'http://www.jnby.com'
const url6 = 'http://www.wticn.com'
const url7 = 'http://www.genelec.cn/'
const url8 = 'http://www.davidoffartinitiative.com'

const hotel1 = require('../../assets/img/east1.jpg')

const hurl1 = 'http://www.east-beijing.com/en/default.aspx'

const media1 = require('../../assets/img/artspy.jpg')
const media2 = require('../../assets/img/artron.jpg')
const media3 = require('../../assets/img/artmap.jpg')
const media4 = require('../../assets/img/logo2015-01.png')

const murl1 = 'http://www.artspy.cn'
const murl2 = 'http://artron.net'
const murl3 = 'http://www.artinthecity.cn/cn/'
const murl4 = 'http://www.vart.cc'

const culture1 = require('../../assets/img/asialink.jpg')
const culture2 = require('../../assets/img/goethe.jpg')
const culture3 = require('../../assets/img/Google.jpg')
const culture4 = require('../../assets/img/cac.jpg')

const curl1 = 'http://asialink.unimelb.edu.au'
const curl2 = 'http://www.goethe.de/ins/cn/zh/pek.html?wt_sc=beijing'
const curl3 = 'https://www.google.com/culturalinstitute/u/0/home'
const curl4 = 'http://www.chronusartcenter.org/index.aspx'

const foundation1 = require('../../assets/img/NCAF.jpg')
const foundation2 = require('../../assets/img/H2.jpg')

const furl1 = 'http://www.ncartfoundation.org'
const furl2 = ''

const em1 = require('../../assets/img/netherlands-1.jpg')
const em2 = require('../../assets/img/France.jpg')
const em3 = require('../../assets/img/Poland.jpg')
const em4 = require('../../assets/img/American.jpg')

const eurl1 = 'http://china-cn.nlembassy.org/'
const eurl2 = 'http://www.ambafrance-cn.org/-中文-'
const eurl3 = 'http://pekin.msz.gov.pl/zh/'
const eurl4 = 'http://chinese.usembassy-china.org.cn/'

export default {
  name: 'support-sponsor',
  data() {
    return {
      sponsorList: [
        { id: 1, path: sponsor1, url: url1 },
        { id: 2, path: sponsor2, url: url2 },
        { id: 3, path: sponsor3, url: url3 },
        { id: 4, path: sponsor4, url: url4 },
        { id: 5, path: sponsor5, url: url5 },
        { id: 6, path: sponsor6, url: url6 },
        { id: 7, path: sponsor7, url: url7 },
        { id: 8, path: sponsor8, url: url8 },
      ],
      hotel: [
        { id: 1, path: hotel1, url: hurl1 },
      ],
      media: [
        { id: 1, path: media1, url: murl1 },
        { id: 2, path: media2, url: murl2 },
        { id: 3, path: media3, url: murl3 },
        { id: 4, path: media4, url: murl4 },
      ],
      culture: [
        { id: 1, path: culture1, url: curl1 },
        { id: 2, path: culture2, url: curl2 },
        { id: 3, path: culture3, url: curl3 },
        { id: 4, path: culture4, url: curl4 },
      ],
      foundations: [
        { id: 1, path: foundation1, url: furl1 },
        { id: 2, path: foundation2, url: furl2 },
      ],
      emlist: [
        { id: 1, path: em1, url: eurl1 },
        { id: 2, path: em2, url: eurl2 },
        { id: 3, path: em3, url: eurl3 },
        { id: 4, path: em4, url: eurl4 },
      ],
      detail: [],
    }
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  created() {
    api.getPageByType({ infoCategory: 2 }).then((data) => {
      this.detail = data
    })
  },
}
</script>
<style lang="scss">
  .support-intro {
    p {
      text-align: justify;
    }
  }
  .sponsor-title {
    font-size: 17px;
    font-weight: bold;
  }
  .sponsor-item {
    margin-top: 15px;
    ul {
      margin-bottom: 0;
      >li {
        width: 142px;
        float: left;
        margin-top: 10px;
        margin-left: 10px;
        &:nth-child(5n+1) {
          margin-left: 0;
        }
      }
    }
  }
</style>
