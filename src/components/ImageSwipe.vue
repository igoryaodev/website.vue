<template>
  <div class="mimage-swipe" :class="{current: show}">
    <div class="mimage-swipe_bg"></div>
    <div class="mimage-swipe_close" @click="close"></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'image-swipe',
  props: ['show'],
  methods: {
    close() {
      this.$emit('closeSwipe')
    },
  },
}
</script>
<style lang="scss">
.mimage-swipe {
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: -3;
  opacity: 0;
  height: 100%;
  &.current {
    z-index: 82;
    opacity: 1;
  }
}
.imgswipe-wrap {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  z-index: 83;
  .workimg-wrap {
    text-align: center;
    img {
      max-width: 100%;
      height: auto;
    }
  }
}
.mimage-swipe_bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
  background: #000;
  opacity: 1;
}
.mimage-swipe_close {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 4;
  background: url(../assets/img/tbg-16.png) center center no-repeat;
  background-size: contain;
}
</style>


