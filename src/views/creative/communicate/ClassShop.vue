<template>
  <div class="class-shop common-wrap">
    <div class="hidden-xs">
    <div class="common-title">{{$t('home.shop')}}</div>
    <div class="classshop-detail">创意教育课程和活动可以在线支付啦，赶快选购适合您家人的课程吧！</div>
    <div class="classmall-content">
      <div class="classmall-filter clearfix">
        <ul class="list-unstyled cat-filter">
          <li v-for="cat in catList.list" :key="cat.id" :class="{'current-cat': cat.id == selectId}" @click="filterPro(cat.id)"><a>{{isZh ? cat.name:cat.name_En}}</a></li>
        </ul>
      </div>
      <div class="classmall-filter_result">
        <span>{{productList.totalRecords}}</span>&nbsp;个
      </div>
      <div class="classmall-list">
        <div class="clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
          <class-item v-for="product in productList.list" :key="product.id" :activity="product"></class-item>
        </div>
        <p v-show="show" class="page-infinite-loading"></p>
      </div>
    </div>
    <div class="footer-split fot-border"></div>
    </div>
    <div class="visible-xs mobile-common_wrap mcreative-wrap">
      <div class="mobile-common_title">{{$t('home.shop')}}</div>
      <div class="mclasshop-detail">创意教育课程和活动可以在线支付啦，赶快选购适合您家人的课程吧！</div>
    </div>
  </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui'
import ClassItem from '@/views/creative/communicate/ClassItem'
import api from '@/api/api'

export default {
  name: 'class-shop',
  data() {
    return {
      productList: {
        list: [],
      },
      catList: {},
      error: null,
      loading: false,
      show: false,
      page: 1,
      selectId: null,
    }
  },
  beforeRouteEnter(to, from, next) {
    api.getEduShopType().then((data) => {
      next((vm) => {
        vm.setData(data)
      })
    })
  },
  created() {
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  methods: {
    filterPro(id) {
      this.selectId = id
      this.loadMore()
    },
    setData(post) {
      this.catList = post
      if (this.catList.list && this.catList.list.length > 0) {
        this.selectId = this.catList.list[0].id
      }
    },
    loadMore() {
      this.loading = true
      this.show = true
      if (this.selectId) {
        api.getEduShopList({ page: this.page, shopTypeId: this.selectId })
        .then((data) => {
          /* eslint no-param-reassign: "off" */
          data.list = this.productList.list.concat(data.list)
          this.productList = data
          this.page += 1
          if (this.page > data.totalPages) {
            this.loading = true
          } else {
            this.loading = false
          }
          this.show = false
        })
      }
    },
  },
  components: {
    ClassItem,
    InfiniteScroll,
  },
}
</script>
<style lang="scss">
.classmall-content {
  margin-top: 45px;
  .classmall-filter {
    border-bottom: 3px solid #000;
    .cat-filter {
      float: left;
      width: 860px;
      margin-bottom: 0;
      >li {
        float: left;
        width: 104px;
        height: 30px;
        background: #f1f1f1;
        text-align: center;
        color: #999;
        margin: 0px;
        border-right: 1px solid #ddd;
        padding-top: 4px;
        font-size: 12px;
        font-family: "Microsoft Yahei","SimSun";
        font-weight: bold;
        cursor: pointer;
        &.current-cat {
          background: #ed3024;
          >a {
            color: #fff;
          }
        }
        >a {
          color: #999;
          line-height: 22px;
        }
      }
    }
  }
  .classmall-filter_result {
    line-height: 29px;
    font-family: "Microsoft Yahei","SimSun";
    font-size: 12px;
    color: #666;
    span {
      font-weight: bold;
      color: #000;
    }
  }
}
</style>


