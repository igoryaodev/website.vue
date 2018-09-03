<template>
  <div class="ficons hidden-xs">
    <ul class="ficons-list list-unstyled clearfix">
      <router-link :to="{name: 'exhibition-master'}" tag="li" exact>
        <a class="clearfix">
          <div class="ficon-img ficon-1"></div>
          <div class="ficon-title">{{$t('home.exhibitions')}}</div>
        </a>
      </router-link>
      <router-link :to="{name: 'program'}" tag="li">
        <a class="clearfix" >
          <div class="ficon-img ficon-2"></div>
          <div class="ficon-title">{{$t('home.programs')}}</div>
        </a>
      </router-link>
      <router-link  :to="{name: 'support-member'}" tag="li">
        <a class="clearfix">
          <div class="ficon-img ficon-3"></div>
          <div class="ficon-title">{{$t('home.member')}}</div>
        </a>
      </router-link>
      <router-link :to="{name: 'shop'}" tag="li">
        <a class="clearfix" >
          <div class="ficon-img ficon-4"></div>
          <div class="ficon-title ficon-store">UCCASTORE</div>
        </a>
      </router-link>
      <router-link :to="{name: 'support-master'}" tag="li" :class="{'not-member': $route.name =='support-member'}">
        <a class="clearfix">
          <div class="ficon-img ficon-5"></div>
          <div class="ficon-title">{{$t('home.support')}}</div>
        </a>
      </router-link>
      <router-link :to="{name: 'careers'}" tag="li">
        <a class="clearfix">
          <div class="ficon-img ficon-6"></div>
          <div class="ficon-title">{{$t('home.jobs')}}</div>
        </a>
      </router-link>
      <router-link :to="{name: 'Visit'}" tag="li">
        <a class="clearfix">
          <div class="ficon-img ficon-7"></div>
          <div class="ficon-title">{{$t('home.visit1')}}</div>
        </a>
      </router-link>
      <router-link :to="{name: 'contact'}" tag="li">
        <a class="clearfix">
          <div class="ficon-img ficon-8"></div>
          <div class="ficon-title">{{$t('home.contactUs')}}</div>
        </a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'footer-menu',
}
</script>
<style lang="scss">
  .ficons {
    border-width: 3px 0px 1px 0px;
    border-style: solid;
    border-color: #000;
    padding: 50px 0px;
  }
  .ficons-list {
    >li {
      float: left;
      width: 79px;
      margin-left: 36px;
      text-align: center;
      cursor: pointer;
      &:first-child {
        margin-left: 0px;
        text-align: left;
        .ficon-title {
          width: 59px;
          float: left;
          margin-top: 12px;
          padding-left: 18px;
        }
      }
      &:nth-child(2) {
        margin-left: 50px;
      }
      &:nth-child(n+3) {
        margin-left: 55px;
      }
      &:last-child {
        margin-left: 0;
        float: right;
        text-align: right;
      }
      a {
        display: block;
        font-size: 13px;
        line-height: 12px;
        color: #999;
        font-family: 'Microsoft Yahei';
        &.active {
          color: #ed3024;
          .ficon-5 {
            background-position:center -31px;
          }
        }
      }
      .ficon-img {
        width: 79px;
        float: left;
        height: 30px;
        background-position: center top;
        background-repeat: no-repeat;
      }
      .ficon-title {
        width: 79px;
        float: left;
        margin-top: 12px;
      }
      .ficon-1 {
        background-image: url(../assets/img/fia.png);
        background-position: 12px top;
      }
      .ficon-2 {
        background-image: url(../assets/img/fib.png);
      }
      .ficon-3 {
        background-image: url(../assets/img/fid.png);
      }
      .ficon-4 {
        background-image: url(../assets/img/fie.png);
      }
      .ficon-5 {
        background-image: url(../assets/img/fif.png);
      }
      .ficon-6 {
        background-image: url(../assets/img/fig.png);
      }
      .ficon-7 {
        background-image: url(../assets/img/fih.png);
      }
      .ficon-8 {
        background-image: url(../assets/img/fii.png);
        background-position: 32px top;
      }
      &:hover,&.active {
        a {
          color: #ed3024;
        }
        .ficon-img {
          background-position:12px -41px;
        }
        .ficon-2 {
          background-position:center -36px;
        }
        .ficon-3 {
          background-position:center -31px;
        }
        .ficon-4 {
          background-position:center -36px;
        }
        .ficon-5 {
          background-position:center -31px;
        }
        .ficon-6 {
          background-position:center -38px;
        }
        .ficon-7 {
          background-position:center -39px;
        }
        .ficon-8 {
          background-position:32px -35px;
        }
      }
      &.active.not-member {
        &:hover {
          a {
            color: #ed3024;
          }
          .ficon-5 {
            background-position:center -31px;
          }
        }
        a {
          color: #999;
        }
        .ficon-5 {
          background-position: center top;
        }
      }
    }
    .ficon-store {
      letter-spacing: -2px;
      font-weight: bold;
    }
  }
</style>


