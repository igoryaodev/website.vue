<template>
<div class="main-wrap">
  <div class="main-content">
    <div class="benefit-wrap hidden-xs">
      <div class="common-title">{{$t('support.benefit')}}</div>
      <div class="clearfix">
        <div class="tleft">
          <p>{{$t('support.b1')}}</p>
          <p>{{$t('support.b2')}}</p>
          <p><strong>{{$t('support.b3')}}</strong></p>
          <p><strong>{{$t('support.b4')}}</strong></p>
        </div>
      </div>
      <div class="visit-border"></div>
      <div class="clearfix">
        <div class="tleft">
          <div class="sub-title">{{$t('support.ucmember')}}</div>
          <div class="h45"></div>
          <div class="th-title">{{$t('support.annual')}}</div>
          <div class="h15"></div>
          <div>
            <img src="../../assets/img/fee-cn1.jpg" alt="" v-if="isZh">
            <img src="../../assets/img/fee-en1.jpg" alt="" v-if="!isZh">
          </div>
          <div class="benefit-info">
            <ul class="list-unstyled">
              <li>
                {{$t('support.rule1')}}
                <br>
                <i></i>{{$t('support.rule2')}}
                <br>
                <i></i>
              </li>
              <li>{{$t('support.rule3')}}<br><i></i></li>
              <li>
                {{$t('support.rule4')}}
                <br>
                <i></i>{{$t('support.rule5')}}
                <br>
                <i></i>{{$t('support.rule6')}}
                <br>
                <i></i>{{$t('support.rule7')}}
                <br>
                <i></i>{{$t('support.rule8')}}<br><i></i>
              </li>
              <li>
                {{$t('support.rule9')}}
                <br>
                <i></i>
              </li>
              <li>
                {{$t('support.rule10')}}
                <br>
                <i></i>
              </li>
              <li>
                {{$t('support.rule11')}}
                <br>
                <i></i>
              </li>
              <li>
                {{$t('support.rule12')}}
                <br>
                <i></i>{{$t('support.rule13')}}
                <br>
                <i></i>{{$t('support.rule14')}}
                <br>
                <i></i>{{$t('support.rule15')}}
                <br>
                <i></i>
              </li>
            </ul>
          </div>
          <div>
            <span class="red-rule">*</span>
            {{$t('support.rule16')}}
          </div>
        </div>
      </div>
      <div class="visit-border"></div>
      <div class="clearfix">
        <div class="tleft easy-way">
          <div class="sub-title">{{$t('support.easyway')}}</div>
          <div class="qrcode">
            <div class="code-wrap">
              <a>{{$t('support.joinNow')}}</a>
              <img class="wechat-code" src="" alt="">
            </div>
            <div class="member-phone">
              <p>{{$t('support.memberPhone')}}<strong>+86 10 5780 0200</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-split hidden-xs"></div>
    <div class="visible-xs mbenefit-wrap">
      <div class="mobile-common_title">{{$t('support.benefit')}}</div>
      <div class="mbenefit-content">
        <p>{{$t('support.b1')}}</p>
        <p>{{$t('support.b2')}}</p>
        <p><strong>{{$t('support.b3')}}</strong></p>
        <p><strong>{{$t('support.b4')}}</strong></p>
      </div>
      <div class="visit-border"></div>
      <div class="mbenefit-member">
        <div class="sub-title">{{$t('support.ucmember')}}</div>
        <div class="th-title">{{$t('support.annual')}}</div>
        <img src="../../assets/img/fee-cn1.jpg" alt="" v-if="isZh">
        <img src="../../assets/img/fee-en1.jpg" alt="" v-if="!isZh">
        <div class="mbenefit-info">
          <ul class="list-unstyled">
            <li>{{$t('support.rule1')}}{{$t('support.rule2')}}<span v-if="isZh">(<router-link :to="{name: 'exhibition-current'}">详见展览信息</router-link>)</span></li>
            <li>{{$t('support.rule3')}}</li>
            <li>{{$t('support.rule4')}}{{$t('support.rule5')}}{{$t('support.rule6')}}{{$t('support.rule7')}}{{$t('support.rule8')}}<span v-if="isZh">(<router-link :to="{name: 'program-current'}">详见公共项目活动信息</router-link>)</span></li>
            <li>{{$t('support.rule9')}}</li>
            <li>{{$t('support.rule10')}}<span v-if="isZh">(<router-link :to="{name: 'program-current'}">详见公共项目活动信息</router-link>)</span></li>
            <li>{{$t('support.rule11')}}</li>
            <li>{{$t('support.rule12')}}{{$t('support.rule13')}}{{$t('support.rule14')}}{{$t('support.rule15')}}</li>
          </ul>
          <div>
            <span class="red-rule">*</span>
            {{$t('support.rule16')}}
          </div>
          <div class="mbenefit-phone">{{$t('support.mphone')}} +86 10 5780 0200</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'member-benefit',
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
}
</script>
<style lang="scss">
  .sub-title {
    font-size: 28px;
    line-height: 30px;
    font-weight: bold;
  }
  .th-title {
    font-size: 17px;
    line-height: 20px;
    font-weight: bold;
  }
  .easy-way {
    .sub-title {
      margin-bottom: 65px;
    }
    .qrcode {
      position: relative;
      float: left;
      width: 100%;
      .code-wrap {
        height: 0;
      }
      a {
        width: 190px;
        float: left;
        background: #ed3024;
        color: #fff;
        text-align: center;
        font-size: 15px;
        padding: 13px 0px 13px 0px;
      }
    }
    .member-phone {
      width: 500px;
      float: left;
      margin-left: 30px;
      margin-top: 3px;
      font-size: 13px;
      color: #666;
      line-height: 20px;
      p {
        padding: 8px 0px;
        line-height: 20px;
        text-align: justify;
      }
    }
  }
  .benefit-info {
    margin-top: 60px;
    ul {
      >li {
        font-size: 13px;
        line-height: 24px;
        i {
          margin-left: 87.5px;
        }
      }
    }
  }
  .red-rule {
    color: #ed3024;
  }
  @media screen and (max-width: 767px) {
    .mbenefit-member {
      .sub-title {
        font-family: Helvetica;
        font-weight: bold;
        font-size: 20px;
      }
      .th-title {
        font-family: Helvetica;
        font-weight: bold;
        font-size: 14px;
        margin-top: 8px;
        margin-bottom: 15px;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      ul {
        margin-top: 10px;
        li {
          font-family: Helvetica,Arial, Helvetica, sans-serif;
          font-size: 12px;
          line-height: 18px;
          color: #000;
          span {
            margin-left: 3px;
          }
          a {
            color: #ed3024;
          }
        }
      }
      .mbenefit-phone {
        margin-top: 25px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 13px;
        color: #ed3024;
      }
    }
  }
</style>

