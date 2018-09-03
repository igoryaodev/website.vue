<template>
  <div>
    <div class="wrap mobile-wrap bga-back-top" :class="{'en-style': $root.$i18n.locale== 'en-US', 'mac-main': isMac}">
      <top-header></top-header>
      <div class="win-main">
        <router-view></router-view>
        
      </div>
      <bot-footer></bot-footer>
    </div>
    <vm-back-top :bottom="300">
      <img src="./assets/img/bg-backtotop.jpg" alt="">
    </vm-back-top>
  </div>
  
</template>

<script>
import TopHeader from '@/components/Header'
import BotFooter from '@/components/Footer'

export default {
  name: 'app',
  data() {
    return {
      initContent: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
    }
  },
  metaInfo() {
    return {
      title: 'UCCA',
      meta: [
        { name: 'viewport', content: this.initContent },
      ],
    }
  },
  computed: {
    isMac() {
      return navigator.userAgent.indexOf('Mac') !== -1
    },
  },
  components: {
    TopHeader,
    BotFooter,
  },
  watch: {
    $route() {
      document.getElementById('uccajia').remove()
      this.init()
      window.scrollTo(0, 0)
    },
  },
  created() {
    if (navigator.userAgent.indexOf('iPad') !== -1) {
      this.initContent = 'width=device-width, initial-scale=0.75,user-scalable=yes, minimum-scale=0.75, maximum-scale=3.0'
    } else {
      this.initContent = 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'
    }
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

<style lang="scss" scoped>
.vm-back-top {
  left: 50%;
  margin-left: 550px;
  right: auto !important;
}
</style>
