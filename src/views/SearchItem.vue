<template>
  <div class="search-result_item">
    <div class="search-result_hd clearfix">
      <div v-if="type == 1">
        <router-link :to="{name: 'exhibition-detail',params:{id: activity.id,type: activity.dateType}}" v-html="fname">
        </router-link>
      </div>
      <div v-if="type == 2">
        <router-link :to="{name: 'program-detail',params:{id: activity.id,type: activity.dateType}}" v-html="fname"></router-link>
      </div>
    </div>
    <div class="search-result_ft"></div>
  </div>
</template>
<script>

export default {
  name: 'search-item',
  props: ['activity', 'type'],
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
    fname() {
      if (this.$root.$i18n.locale === 'zh-CN') {
        return this.activity.name.replace(this.$route.params.key, `<span>${this.$route.params.key}</span>`)
      }
      return this.activity.name_En.replace(this.$route.params.key, `<span>${this.$route.params.key}</span>`)
    },
  },
}
</script>
<style lang="scss">
.search-result_hd {
  >div {
    width: 220px;
    float: left;
    font-size: 20px;
    line-height: 22px;
    font-weight: bold;
    a {
      color: #000;
      span {
        background-color: #ed3024;
        color: #ffffff;
      }
    }
  }
}
.search-result_ft {
  border-top: 1px solid #000;
  margin-top: 45px;
  height: 46px;
}
@media screen and (max-width: 767px){
  .search-result_hd {
    >div {
      width: 100%;
      line-height: 19px;
      font-family: Helvetica;
    }
  }
  .search-result_ft {
    height: 25px;
    margin-top: 22px;
  }
}
</style>


