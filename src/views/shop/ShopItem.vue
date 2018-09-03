<template>
  <div class="shop-item">
    <div class="shop-item_hd">
      <light-box album="shop" :src="product.convertImage.key | qiniu" index-tmpl="${d} / ${total}">
        <img :src="product.image.key | qiniu" alt="" v-if="product.image">
      </light-box>
    </div>
    <div class="shop-item_bd">
      <p class="shop-item_title" v-show="$root.$i18n.locale == 'zh-CN'">{{product.name}}</p>
      <p class="shop-item_title" v-show="$root.$i18n.locale == 'en-US'">{{product.name_En}}</p>
      <div class="shop-item_intro hidden-xs" v-show="$root.$i18n.locale == 'zh-CN'" v-html="product.description"></div>
      <div class="shop-item_intro hidden-xs" v-show="$root.$i18n.locale == 'en-US'" v-html="product.description_En"></div>
    </div>
    <div class="shop-item_ft">
      <ul class="list-unstyled clearfix">
        <li class="font-en-bold pro-price">¥{{product.price}}</li>
        <li class="pro-share eshare hidden-xs">
          <div class="jiathis_style">
            <a href="http://www.jiathis.com/share" class="jiathis sharethis" target="_blank"></a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import LightBox from 'vue-lightbox'

export default {
  name: 'shop-item',
  props: ['product'],
  components: {
    LightBox,
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const url = 'http://v3.jiathis.com/code/jia.js'
      const script = document.createElement('script')
      script.setAttribute('src', url)
      script.setAttribute('id', 'uccajia')
      document.getElementsByTagName('head')[0].appendChild(script)
    },
  },
}
</script>
<style lang="scss">
  .shop-item {
    width: 318px;
    float: left;
    margin-left: 23px;
    overflow: hidden;
    margin-bottom: 70px;
    &:nth-child(3n+1) {
      margin-left: 0;
    }
    .shop-item_hd {
      cursor: pointer;
    }
    .shop-item_title {
      font-size: 20px;
      line-height: 22px;
      margin-top: 12px;
    }
    .shop-item_intro {
      font-size: 11px;
      line-height: 18px;
      color: #555;
      margin-top: 12px;
      min-height: 108px;
    }
    .shop-item_ft {
      margin-top: 30px;
      ul {
        margin: 0;
        >li {
          float: left;
        }
      }
      .pro-price {
        padding-top: 2px;
        min-width: 110px;
        font-size: 30px;
        color: #ed3024;
      }
      .pro-share {
        width: 30px;
        overflow: hidden;
        margin-top: 6px;
        margin-left: 10px;
        .sharethis {
          width: 36px!important;
          height: 18px!important;
          overflow: hidden;
          padding: 2px 0px 0px 16px!important;
          opacity: 1!important;
          font-size: 15px!important;
          color: #999!important;
          font-family: 'Microsoft Yahei'!important;
          float: none !important;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .shop-item {
      float: left;
      width: 47%;
      margin-left: 0;
      margin-bottom: 25px;
      &:nth-child(even) {
        margin-left: 6%;
      } 
      img {
        width: 100%;
        height: auto;
      }
      .shop-item_title {
        margin-top: 10px;
        font-family: Helvetica;
        font-size: 14px;
        color: #000000;
        font-weight: bold;
        margin-bottom: 0;
        line-height: initial;
      }
      .shop-item_ft {
        margin-top: 5px;
        .pro-price {
          font-family: Helvetica;
          font-weight: bold;
          color: #000;
          font-size: 16px;
        }
      }
    }
  }
</style>

