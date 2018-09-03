<template>
  <div class="main-wrap">
    <div class="main-content">
      <div class="visit-wrap hidden-xs">
        <div class="visit-title">{{$t('home.visit')}}</div>
        <div class="visit-border"></div>
        <div class="visit-item-title">{{$t('home.admission')}}</div>
        <div>
          <img src="../assets/img/opentime.jpg" alt="">
        </div>
        <div class="h25"></div>
        <div class="visit-member">
          <div>
            <p>{{$t('home.docentService')}}</p>
            <p>&nbsp;</p>
            <div class="join-docent">
              <a>{{$t('home.joinDocent')}}</a>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        </div>
        <div class="visit-border"></div>
        <div class="visit-item-title">{{$t('home.admissionFee')}}</div>
        <div class="visit-ticket clearfix">
          <div>
            <div class="visit-sub-title">{{$t('home.generalAdmission')}}</div>
            <div><img src="../assets/img/603.jpg" alt=""></div>
          </div>
          <div>
            <div class="visit-sub-title">{{$t('home.onlineAdmission')}}</div>
            <div><img src="../assets/img/502.jpg" alt=""></div>
          </div>
        </div>
        <div class="visit-sub-title visit-half">{{$t('home.half')}}</div>
        <div>
          <img src="../assets/img/banjia.jpg" alt="">
        </div>
        <div class="visit-sub-title visit-free">{{$t('home.free')}}</div>
        <div>
          <img src="../assets/img/mainpiao2.jpg" alt="">
        </div>
        <div class="join-docent join-membership">
          <router-link :to="{name: 'support-member'}">{{$t('home.joinMember')}}</router-link>
          <img class="wechat-qrcode" src="../assets/img/qrcode.png" alt="">
        </div>
        <div class="visit-sub-title visit-group">{{$t('home.groupAdmission')}}</div>
        <div><img src="../assets/img/vt5.jpg" alt=""></div>
        <div class="visit-border"></div>
        <div class="tour-wrap">
          <div class="visit-item-title">{{$t('home.guidedTours')}}</div>
          <div class="tour-content">
            <p>{{$t('home.tour1')}}</p>
            <p>&nbsp;</p>
            <p>{{$t('home.tour2')}}</p>
          </div>
          <div class="visit-sub-title visit-tour-time">{{$t('home.tourTime')}}</div>
          <div><img src="../assets/img/opentime.jpg" alt=""></div>
          <div class="visit-sub-title visit-reservation">{{$t('home.reservation')}}</div>
          <div><img src="../assets/img/visit-reservation-cn1.jpg" alt=""></div>
          <div class="h25"></div>
          <div class="visit-sub-title">{{$t('home.additionalInfo')}}</div>
          <ul class="visit-info-list list-unstyled">
            <li>{{$t('home.info1')}}</li>
            <li>{{$t('home.info2')}}</li>
            <li>{{$t('home.info3')}}</li>
            <li>{{$t('home.info4')}}</li>
            <li v-if="!isZh">{{$t('home.info5')}}</li>
          </ul>
        </div>
        <div class="visit-border"></div>
        <div class="visit-border"></div>
        <div class="tour-wrap">
          <div class="visit-item-title">{{$t('home.addressAndMap')}}</div>
          <div><img src="../assets/img/vt7.jpg" alt=""></div>
          <div class="h10"></div>
          <div class="visit-addr-info">
            <p>{{$t('home.address')}}</p>
            <p>{{$t('home.tel')}}</p>
            <p>{{$t('home.fax')}}</p>
          </div>
          <div class="h20"></div>
          <div><a href="http://cn.bing.com/ditu/?FORM=Z9LH4#Y3A9MzkuOTMwNzYxODU3ODIzNX4xMTYuMzc5MjM0MzE0Jmx2bD0xMSZzdHk9ciZydHA9YWRyLn5wb3MuMzkuOTgzMzk1XzExNi40ODQxODlfJUU1JThDJTk3JUU0JUJBJUFDJUU1JUI4JTgyJUU2JTlDJTlEJUU5JTk4JUIzJUU1JThDJUJBJUU5JTg1JTkyJUU0JUJCJTk5JUU2JUExJUE1JUU4JUI3JUFGNCVFNSU4RiVCNzc5OCVFOCU4OSVCQSVFNiU5QyVBRiVFNSU4QyVCQV8lRTUlQjAlQTQlRTQlQkMlQTYlRTYlOTYlQUYlRTUlQkQlOTMlRTQlQkIlQTMlRTglODklQkElRTYlOUMlQUYlRTQlQjglQUQlRTUlQkYlODNfX2VfWU40MDY3eDM0MjY4MjI0Jm1vZGU9RCZydG9wPTB+MH4wfg==" class="bing-map icon-right" target="_blank">{{$t('home.viewBing')}}</a></div>
        </div>
        <div class="visit-border"></div>
        <div class="visit-item-title">{{$t('home.driving')}}</div>
        <div><img src="../assets/img/vt8-cn.jpg" alt=""></div>
        <div class="footer-split"></div>
      </div>
      <footer-menu></footer-menu>
      <div class="visible-xs mobile-visit_wrap">
        <div class="mobile-common_title">{{$t('home.visit')}}</div>
        <div class="mvisit-item">
          <div class="mvisit-item_title">{{$t('home.admission')}}</div>
          <div class="img"><img src="../assets/img/i-33.png"></div>
          <p class="last-hour">{{$t('home.lastHour')}}</p>
        </div>
        <div class="mvisit-item">
          <div class="mvisit-item_title">{{$t('home.admissionFee')}}</div>
          <div class="mvisit-item_subtitle">{{$t('home.generalAdmission')}}</div>
          <div class="mvisit-item_price clearfix"><span>60</span><span>/{{$t('home.per')}}</span></div>
          <div class="mvisit-item_subtitle">{{$t('home.onlineAdmission')}}</div>
          <div class="mvisit-item_price clearfix"><span>50</span><span>/{{$t('home.per')}}</span></div>
          <div class="mvisit-item_half">
            <div class="mvisit-item_subtitle">{{$t('home.half')}}</div>
            <div class="mvisit-half_list">
              <ul class="list-unstyled clearfix">
                <li>
                  <div class="mvisit-half_item clearfix">
                    <div class="img"><img src="../assets/img/i-13.png"></div>
                    <div class="words">{{$t('home.student')}}<br>({{$t('home.scard')}})</div>
                  </div>
                </li>
                <li>
                  <div class="mvisit-half_item clearfix">
                    <div class="img"><img src="../assets/img/i-30.png"></div>
                    <div class="words">{{$t('home.old')}}<br>({{$t('home.idcard')}})</div>
                  </div>
                </li>
                <li>
                  <div class="mvisit-half_item clearfix">
                    <div class="img"><img src="../assets/img/i-29.png"></div>
                    <div class="words">{{$t('home.disable')}}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="mvisit-item_half mvisit-item_free">
            <div class="mvisit-item_subtitle">{{$t('home.free')}}</div>
            <div class="mvisit-half_list">
              <ul class="list-unstyled clearfix">
                <li>
                  <div class="mvisit-half_item clearfix">
                    <div class="img"><img src="../assets/img/i-28.png"></div>
                    <div class="words">{{$t('home.14m')}}<br>{{$t('home.child')}}</div>
                  </div>
                </li>
                <li>
                  <div class="mvisit-half_item clearfix">
                    <div class="img"><img src="../assets/img/i-14.png"></div>
                    <div class="words">{{$t('home.umember')}}<br>({{$t('home.mcard')}})</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="mvisit-item_contact">
            <div class="mvisit-item_subtitle">{{$t('home.contactNum')}}</div>
            <div class="clearfix">
              <div class="icon"><img src="../assets/img/i-31.png"></div>
              <div class="mvisit-contact_word"><a href="tel:+86-10-57800200">+86 10 5780 0200</a></div>
            </div>
            <div class="clearfix">
              <div class="icon" style="padding-top: 3px;"><img src="../assets/img/i-32.png"></div>
              <div class="mvisit-contact_word"><a href="mailto:visit@ucca.org.cn">visit@ucca.org.cn</a></div>
            </div>
            <div class="mvisit-contact_tips">{{$t('home.vi1')}}</div>
          </div>
          <div class="mvisit-group">
            <div class="mvisit-item_title">{{$t('home.groupAdmission')}}</div>
            <div class="mvisit-group_info">
              <p>{{$t('home.tour1')}}</p>
              <p>{{$t('home.tour2')}}</p>
            </div>
            <div class="mvisit-group_tips">
              <div class="mvisit-item_subtitle">{{$t('home.additionalInfo')}}</div>
              <ul class="visit-info-list list-unstyled">
                <li>{{$t('home.info1')}}</li>
                <li>{{$t('home.info2')}}</li>
                <li>{{$t('home.info3')}}</li>
                <li>{{$t('home.info4')}}</li>
                <li v-if="!isZh">{{$t('home.info5')}}</li>
              </ul>
            </div>
          </div>
          <div class="mvisit-map">
            <div class="mvisit-item_title">{{$t('home.addressAndMap')}}</div>
            <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler">
              <bm-marker :position="center" :dragging="true"></bm-marker>
            </baidu-map>
            <div class="mvisit-map_info">
              {{$t('home.address')}}
              <br>
              {{$t('home.tel1')}}&nbsp;
              <b><a href="tel:86-10-57800200">+86 10 5780 0200</a></b>
              <br>
              {{$t('home.fax1')}}&nbsp;
              <b>+86 10 5780 0220</b>
            </div>
          </div>
          <div class="mvisit-driving">
            <div class="mvisit-item_title">{{$t('home.driving')}}</div>
            <div class="clearfix mvisit-drive1">
              <div class="icon"><div><img src="../assets/img/i-17.png"></div></div>
              <div class="mvisit-drive_word">{{$t('home.travel1')}}</div>
            </div>
            <div class="clearfix mvisit-drive2">
              <div class="icon"><div><img src="../assets/img/tbg-19.png"></div></div>
              <div class="mvisit-drive_word">{{$t('home.travel2')}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FooterMenu from '@/components/FooterMenu'

export default {
  name: 'visit',
  data() {
    return {
      center: {
        lng: 0,
        lat: 0,
      },
      zoom: 3,
    }
  },
  computed: {
    isZh() {
      return this.$i18n.locale === 'zh-CN'
    },
  },
  methods: {
    handler() {
      this.center.lng = 116.501376
      this.center.lat = 39.990254
      this.zoom = 25
    },
  },
  components: {
    FooterMenu,
  },
}
</script>
<style lang="scss">
  .visit-wrap {
    .visit-title {
      font-size: 32px;
      font-weight: bold;
      padding: 45px 0 0;
    }
    .visit-item-title {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 25px;
    }
  }
  
  .visit-member {
    font-size: 13px;
    line-height: 24px;
    p {
      margin: 0;
    }
  }
  .join-docent {
    position: relative;
    a {
      display: inline-block;
      width: 190px;
      background: #ed3024;
      color: #fff;
      text-align: center;
      font-size: 15px;
      padding: 13px 0;
      &:hover {
        color: #fff;
      }
    }
  }
  .visit-ticket {
    >div {
      float: left;
      width: 33%; 
    }
  }
  .visit-sub-title {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .visit-half {
    margin-top: 55px;
  }
  .visit-free {
    margin-top: 35px;
  }
  .visit-group {
    margin-top: 58px;
  }
  .tour-wrap {
    width: 750px;
  }
  .tour-content {
    font-size: 13px;
    color: #666;
    line-height: 20px;
    >p {
      padding: 8px 0;
      text-align: justify;
      margin-bottom: 0;
    }
  }
  .visit-tour-time {
    margin-top: 35px;
    margin-bottom: 15px;
  }
  .visit-reservation {
    margin-top: 65px;
    margin-bottom: 15px;
  }
  .visit-info-list {
    >li {
      padding-left: 13px;
      font-size: 13px;
      color: #666;
      height: 25px;
      background: url('../assets/img/icon-point.png') 0px 5px no-repeat;
    }
  }
  .visit-addr-info {
    font-size: 13px;
    line-height: 24px;
    p {
      margin-bottom: 0;
    }
  }
  .bing-map {
    font-size: 13px;
    color: #ed3024;
    font-weight: bold;
  }
  .icon-right {
    padding-right: 11px;
    background: url(../assets/img/icon-right.png) right 5px no-repeat;
  }
  .join-membership:hover {
    .wechat-qrcode {
      display: block;
    }
  }
  .wechat-qrcode {
    display: none;
    position: absolute;
    width: 120px;
    top: -8px;
    left: 190px;
  }
  @media screen and (max-width: 767px) {
    .mobile-visit_wrap {
      .mobile-common_title {
        padding-top: 8px;
        border-bottom: 1px solid #000;
      }
      .mvisit-item {
        margin-top: 25px;
        .mvisit-item_title {
          font-size: 20px;
          line-height: 12px;
          padding-top: 6px;
          font-family: Helvetica;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .img {
          width: 68.9655%;
          img {
            width: 100%;
            height: auto;
          }
        }
        .last-hour {
          font-size: 12px;
          font-family: Helvetica;
          margin-bottom: 0;
          margin-top: 7px;
        }
      }
      .mvisit-item_subtitle {
        font-size: 12px;
        line-height: 7px;
        padding-top: 4px;
        font-family: Helvetica;
        font-weight: bold;
        margin-top: 15px;
      }
      .mvisit-item_price {
        color: #ed3024;
        margin-top: 5px;
        span:last-child {
          font-size: 12px;
          margin-top: 10px;
          line-height: 7px;
          padding-top: 4px;
          float: left;
          font-family: Helvetica;
          font-weight: bold;
        }
        span:first-child {
          font-size: 22px;
          line-height: 12px;
          padding-top: 10px;
          float: left;
          font-weight: bold;
          font-family: Helvetica;
        }
      }
    }
    .mvisit-item_half {
      .mvisit-item_subtitle {
        margin-top: 40px;
      }
      .mvisit-half_list {
        margin-top: 14px;
      }
      li {
        width: 52.4138%;
        float: left;
        margin-bottom: 15px;
        &:nth-child(even) {
          width: 47.5862%;
        }
        .mvisit-half_item {
          .img {
            float: left;
            width: 33.5526%;
            img {
              width: 80.3922%;
              height: auto;
            }
          }
          .words {
            width: 66.4474%;
            float: left;
            font-size: 12px;
            line-height: 14px;
            padding-top: 9px;
          }
        }
      }
    }
    .mvisit-item_free {
      .mvisit-item_subtitle {
        margin-top: 14px;
      }
    }
    .mvisit-item_contact {
      .mvisit-item_subtitle {
        margin-bottom: 7px;
      }
      .icon {
        width: 12.4138%;
        float: left;
        img {
          width: 100%;
          height: auto;
        }
      }
      .mvisit-contact_word {
        width: 87.5%;
        float: left;
        line-height: 24px;
        font-family: Helvetica;
        a {
          font-size: 30px;
          color: #ed3024;
        }
      }
      .mvisit-contact_tips {
        font-size: 12px;
        line-height: 19px;
        font-family: Helvetica;
        margin-top: 14px;
      }
    }
    .mvisit-group {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #000;
      .mvisit-group_info {
        font-size: 12px;
        line-height: 19px;
        font-family: Helvetica;
      }
      .mvisit-group_tips {
        font-size: 12px;
        line-height: 7px;
        padding-top: 4px;
      }
      .visit-info-list {
        >li {
          font-size: 12px;
          height: auto;
          line-height: 19px;
          margin-top: 12px;
          color: #000;
        }
      }
    }
    .mvisit-map {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #000;
      .mvisit-map_info {
        margin-top: 14px;
        font-size: 12px;
        line-height: 19px;
        font-family: Helvetica;
      }
    }
    .mvisit-driving {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #000;
      .icon {
        width: 12.4138%;
        float: left;
        >div {
          width: 68.0556%;
        }
        img {
          width: 100%;
          height: auto;
        }
      }
      .mvisit-drive_word {
        width: 87.5862%;
        float: left;
        font-size: 12px;
        line-height: 14px;
        font-family: Helvetica;
      }
      .mvisit-drive1 {
        margin-top: 10px;
      }
      .mvisit-drive2 {
        margin-top: 20px;
        margin-bottom: 35px;
      }
    }
  }
  .bm-view {
    width: 100%;
    height: 300px;
  }
</style>


