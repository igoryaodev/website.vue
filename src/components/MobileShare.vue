<template>
  <div class="mobile-share">
    <a @click="showNote">{{$t('home.share')}}</a>
    <div class="note-share" v-show="isNote">
      <div class="note-bg">
        <div class="note-close clearfix" @click="close">
          <div></div>
        </div>
        <div class="note-box">
          <div class="note-main">{{$t('home.browserShare')}}<br>{{$t('home.wechatShare')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'mobile-share',
  data() {
    return {
      isNote: false,
    }
  },
  methods: {
    showNote() {
      this.isNote = true
    },
    close() {
      this.isNote = false
    },
  },
}
</script>
<style lang="scss">
.mobile-share {
  margin-top: 7px;
  a {
    font-size: 12px;
    color: #999;
    display: inline-block;
    padding-left: 10px;
    background: url(../assets/img/tbg-9.png) 0px 1px no-repeat;
    background-size: 8px 11px;
  }
}
.note-share {
  width: 100%;
  position: fixed;
  left: 0px;
  top: 40%;
  z-index: 1200;
  .note-bg {
    background: #ed3024;
    width: 88%;
    margin: 0px auto;
    max-width: 330px;
    padding-bottom: 30px;
  }
  .note-close {
    >div {
      width: 30px;
      height: 30px;
      float: right;
      background: url(../assets/img/tbg-20a.png) 0px 0px no-repeat;
    }
  }
  .note-box {
    width: 96%;
    margin: 0px auto;
    .note-main {
      text-align: center;
      font-size: 13px;
      color: #fff;
      line-height: 18px;
    }
  }
}
</style>

