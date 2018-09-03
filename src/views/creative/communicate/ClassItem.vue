<template>
<div class="classmall-item clearfix">
  <div class="classmall-item_left">
    <span class="onsale">Online Discount</span>
    <img :src="activity.ticketProduct.orderImages.key | qiniu" alt="">
    <div class="class-content">
      <div class="clcontent-detail" v-if="isZh" v-html="activity.ticketProduct.description"></div>
      <div class="clcontent-detail" v-if="!isZh" v-html="activity.ticketProduct.description_en"></div>
      <div class="class-content_icon"></div>
    </div>
  </div>
  <div class="classmall-item_right">
    <div class="classmall-item_title" v-if="isZh">{{activity.ticketProduct.name}}</div>
    <div class="classmall-item_title" v-if="!isZh">{{activity.ticketProduct.name_En}}</div>
    <div class="classmall-item_info">
      <div class="classmall-info_title clearfix focus-info first-row">
        <div class="classdetail-item">{{$t('home.price')}}</div>
        <div class="classdetail-item">{{$t('home.type')}}</div>
        <div class="classdetail-item">{{$t('home.age')}}</div>
      </div>
      <div class="classmall-info_content focus-info clearfix">
        <div class="classdetail-info classdetail-price">
          <div class="class-price">¥{{activity.ticketProduct.startPrice}}</div>
        </div>
        <div class="classdetail-info classdetail-intro">
          <div>{{isZh ? activity.type : activity.type_En }}</div>
        </div>
        <div class="classdetail-info classdetail-intro">
          <div>{{isZh ? activity.age : activity.age_En }}</div>
        </div>
      </div>
      <div class="classmall-info_title clearfix">
        <div class="classdetail-item">{{$t('home.brief')}}</div>
        <div class="classdetail-item">{{$t('home.date')}}</div>
        <div class="classdetail-item">{{$t('home.time')}}</div>
      </div>
      <div class="classmall-info_content clearfix ">
        <div class="classdetail-info class-reminder">
          <div>{{isZh ? activity.ticketProduct.reminder : activity.ticketProduct.reminder_en}}</div>
        </div>
        <div class="classdetail-info classdetail-date">
          <div>{{activity.ticketProduct.startDate | date('YYYY.M.D')}} - {{activity.ticketProduct.endDate | date('YYYY.M.D')}}</div>
        </div>
        <div class="classdetail-info">
          <div>
          </div>
        </div>
      </div>
      <div class="classmall-info_title clearfix">
        
        <div class="classdetail-item">&nbsp;</div>
      </div>
      <div class="classmall-info_content clearfix">
      </div>
    </div>
    <div class="classmall-buy">
      <button class="btn-cart" @click="showQrcode">{{$t('home.buy')}}</button>
    </div>
  </div>
  <mt-popup v-model="isShow" popup-transition="popup-fade" :modal="true" style="width:400px;min-height:300px">
    <div class="modal-wechat_qrcode text-center">
      <img src="../../../assets/img/img-weixin.jpg">
      <p>{{$t('home.qrcode')}}</p>
    </div>
  </mt-popup>
</div>
</template>
<script>
import { Popup } from 'mint-ui'

export default {
  name: 'class-item',
  props: ['activity'],
  data() {
    return {
      num: 1,
      isShow: false,
    }
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  methods: {
    showQrcode() {
      this.isShow = !this.isShow
    },
  },
  components: {
    Popup,
  },
}
</script>
<style lang="scss">
.classmall-item {
  margin-top: 35px;
  padding-bottom: 30px;
  .classmall-item_left {
    width: 240px;
    float: left;
    position: relative;
    img {
      width: 240px;
      height: auto;
    }
    .onsale {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      line-height: 12px;
      font-size: 10px;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.2);
      min-height: 32px;
      min-width: 32px;
      padding: 13px 4px 4px;
      font-weight: bold;
      position: absolute;
      text-align: center;
      top: 0;
      right: 0;
      left: auto;
      margin: -6px -6px 0 0;
      font-family: Arial, Helvetica, sans-serif;
      text-shadow: none;
      background-color: #eb3024;
      color: #fff;
    }
  }
  .classmall-item_right {
    width: 745px;
    float: left;
    margin-left: 15px;
  }
  .classmall-item_title {
    font-size: 20px;
    line-height: 30px;
    margin-top: -5px;
    font-family: "Microsoft Yahei","SimSun";
  }
  .classmall-item_info {
    width: 591px;
    float: left;
    margin-top: 15px;
    .classmall-info_title {
      border: 1px solid #eee;
      border-left: none;
      border-right: none;
      color: #999;
      font-size: 12px;
      font-family: "Microsoft Yahei","SimSun";
      &.focus-info {
        background: #eee;
        border: none;
      }
      &.first-row {
        border-bottom: 1px solid #fff;
      }
      .classdetail-item {
        text-align: center;
        line-height: 30px;
        width: 197px;
        float: left;
        min-height: 10px;
      }
    }
    .classmall-info_content {
      &.focus-info {
        background: #eee;
      }
      >div {
        text-align: center;
        line-height: 30px;
        width: 197px;
        float: left;
        min-height: 10px;
      }
      .class-price {
        color: #5AC327;
        font-weight: normal;
        height: 29px;
        font-size: 13px;
        font-family: "Microsoft Yahei","SimSun";
      }
      .class-quantity {
        margin-left: 60px;
        width: 76px;
        position: relative;
        .btn-minus {
          float: left;
          position: absolute;
          left: 0;
          bottom: 4px;
          text-align: center;
          vertical-align: text-top;
          width: 20px;
          height: 15px;
          color: #5e5e5e;
          text-shadow: 0 1px 0 rgba(255,255,255,0.8);
          padding: 0;
          margin: 0;
          border: none;
          background: none;
          font-family: Arial, Helvetica, sans-serif;
          outline: none;
          box-shadow: none;
          font-size: 18px;
          line-height: 13px;
        }
        input[type=number] {
          -webkit-appearance: none;
          margin-top: 3px;
          margin-left: 20px;
          width: 36px;
          height: 22px;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: bold;
          border: 1px solid #c7c0c7;
          border-right: 1px solid rgb(199,192,199);
          background-color: #f6f4f4;
          font-size: 13px;
          line-height: 15px;
          box-shadow: inset 0 0 2px 0 #f7f6f7;
          font-weight: bold;
          border-top-left-radius: 2px;
          border-bottom-left-radius: 2px;
          float: left;
          padding: 0;
          text-align: center;
          outline: none;
          border: 1px solid #c7c0c7;
          &::-webkit-outer-spin-button,&::-webkit-inner-spin-button {
            display: none;
          }
        }
        .btn-plus {
          float: left;
          position: absolute;
          top: 8px;
          right: 0;
          border: none;
          background: none;
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: normal;
          font-size: 18px;
          height: 18px;
          line-height: 18px;
          outline: none;
          margin-top: -2px;
          box-shadow: none;
          text-align: center;
          vertical-align: text-top;
          width: 20px;
          cursor: pointer;
          color: #5e5e5e;
          text-shadow: 0 1px 0 rgba(255,255,255,0.8);
        }
      }
      select {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        border: none;
        outline: none;
      }
    }
    .classdetail-intro {
      font-size: 13px;
      font-family: "Microsoft Yahei","SimSun";
    }
    .reset {
      font-size: 12px;
      font-family: Arial, Helvetica, sans-serif;
      color: #666;
      text-decoration: underline!important;
      &:hover {
        color:#ed3024;
      }
    }
  }
  .class-content {
    position: absolute;
    width: 745px;
    left: 255px;
    top: 0px;
    background: #fff1f0;
    display: none;
    .clcontent-detail {
      width: 745px;
      border: 1px solid #cfcfcf;
      padding: 35px;
      font-size: 12px;
      line-height: 19px;
      position: relative;
    }
    .class-content_icon {
      width: 6px;
      height: 23px;
      position: absolute;
      top: 0px;
      left: -5px;
      background: url(../../../assets/img/bg-left-jt.png) 0px 0px no-repeat;
    }
  }
  .classmall-item_left:hover {
    .class-content {
      display: block;
    }
  }
  .class-reminder {
    font-size: 13px;
  }
  .classdetail-date {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
  }
  .classmall-buy {
    float: left;
    margin-top: 15px;
    button {
      margin: 0px;
      padding: 0px;
      height: 61px;
      width: 149px;
      box-shadow: none;
      background: #eb3024;
      border: none;
      color: #fff;
      text-shadow: none;
      border-radius: 0px;
      font-size: 16px;
      font-family: 'Microsoft Yahei','微软雅黑';
      font-weight: 100;
      text-align: center;
      line-height: 61px;
    }
  }
  .modal-wechat_qrcode {
    margin-top: 100px;
  }
}
</style>

