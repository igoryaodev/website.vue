<template>
    <header class="header">
        <div class="visible-xs mobile-header">
          <div class="mobile-header_logo clearfix">
            <div class="mobile-logo_left">
              <router-link :to="{name: 'Index'}"><img src="../assets/img/logo.jpg"></router-link>
            </div>
            <div class="mobile-logo_right">
              <div class="mobile-lan">
                <a @click="changeLang">{{lang}}</a>
              </div>
              <div class="mobile-search">
                <div class="mobile-search_icon" @click="showSearch"></div>
              </div>
            </div>
          </div>
          <div class="mobile-search_wrap" v-show="isSearch">
            <div class="search-caret"></div>
            <div class="mobile-search_input">
              <div class="clearfix">
                <input type="text" maxlength="33" :placeholder="$t('home.searchTips')" v-model="key" @keyup.enter="goSearch">
                <button class="search-btn" @click="goSearch"></button>
              </div>
            </div>
          </div>
          <div class="mobile-header_menu">
            <div class="mobile-navmenu">
              <ul class="list-unstyled clearfix" :class="{active: !isIndex,'is-en': $root.$i18n.locale == 'en-US'}">
                <router-link class="nav-menu-item" :to="{name: 'Visit'}" tag="li"><a>{{$t('home.visit')}}</a></router-link>
                <router-link class="nav-menu-item" to="/exhibitions" tag="li">
                  <a>{{$t('home.exhibitions')}}</a>
                  <ul class="list-unstyled nav-submenu clearfix">
                    <li :class="{current: isCurrent}"><router-link :to="{name: 'exhibition-current'}">{{$t('activity.current')}}</router-link></li>
                    <li :class="{current: isPlan}"><router-link :to="{name: 'exhibition-upcoming'}">{{$t('activity.upcoming')}}</router-link></li>
                    <li :class="{current: isPast}"><router-link :to="{name: 'exhibition-past'}">{{$t('activity.past')}}</router-link></li>
                  </ul>
                </router-link>
                <router-link class="nav-menu-item" to="/programs" tag="li">
                  <a>{{$t('home.programs')}}</a>
                  <ul class="list-unstyled nav-submenu clearfix">
                    <li :class="{current: isCurrent}"><router-link :to="{name: 'program-current'}">{{$t('program.current')}}</router-link></li>
                    <li :class="{current: isPlan}"><router-link :to="{name: 'program-past'}">{{$t('program.past')}}</router-link></li>
                    <li :class="{current: isPast}"><router-link :to="{name: 'program-special'}">{{$t('program.special')}}</router-link></li>
                  </ul>
                </router-link>
                <router-link class="nav-menu-item" to="/creative" tag="li">
                  <a>{{$t('home.creative')}}</a>
                  <ul class="list-unstyled nav-submenu clearfix">
                    <li><router-link :to="{name: 'creative-index'}">{{$t('home.home')}}</router-link></li>
                    <li>
                      <a>{{$t('home.artClass')}}</a>
                      <ul class="dropdown-menu" v-if="catList">
                        <li v-for="sub in catList.list" :key="sub.id" @click="goArt(sub.id)" :class="{active: $route.name == 'art-detail' && $route.params.id == sub.id }">
                          <a v-if="isZh">{{sub.name}}</a>
                          <a v-if="!isZh">{{sub.name_En}}</a>
                        </li>
                      </ul>
                    </li>
                    <router-link :to="{name: 'weekend-store'}" tag="li">
                      <a>{{$t('home.artStore')}}</a>
                    </router-link>
                    <router-link :to="{name: 'art-activity'}" tag="li"><a>{{$t('home.artActivity')}}</a></router-link>
                    <router-link :to="{name: 'communicate-master'}" tag="li">
                      <a>{{$t('home.communicate')}}</a>
                      <ul class="dropdown-menu">
                        <router-link :to="{name:'shop-class'}" tag="li"><a>{{$t('home.shop')}}</a></router-link>
                        <router-link :to="{name: 'teach-service'}" tag="li"><a>{{$t('home.teachingService')}}</a></router-link>
                      </ul>
                    </router-link>
                    <router-link :to="{name:'contact-index'}" tag="li">
                      <a>{{$t('home.contact')}}</a>
                      <ul class="dropdown-menu">
                        <router-link :to="{name:'trial'}" tag="li"><a>{{$t('home.trial')}}</a></router-link>
                        <router-link :to="{name: 'careers'}" tag="li"><a>{{$t('home.careers')}}</a></router-link>
                      </ul>
                    </router-link>
                    <router-link :to="{name: 'about-master'}" tag="li">
                      <a>{{$t('home.about')}}</a>
                      <ul class="dropdown-menu">
                        <router-link :to="{name: 'brief-intro'}" tag="li"><a>{{$t('about.briefIntro')}}</a></router-link>
                        <router-link :to="{name: 'edu-framework'}" tag="li"><a>{{$t('about.eduPhilosophy')}}</a></router-link>
                        <router-link :to="{name: 'team-intro'}" tag="li"><a>{{$t('about.teamIntro')}}</a></router-link>
                        <router-link :to="{name: 'news-list'}" tag="li"><a>{{$t('about.press')}}</a></router-link>
                      </ul>
                    </router-link>
                  </ul>
                </router-link>
                <li class="mobile-toggle_menu" @click="showHideNav">
                  <a></a>
                </li>
                <router-link class="nav-menu-item hide-navitem" v-show="isShow" :to="{name: 'shop'}" tag="li"><a>{{$t('home.uccastore')}}</a></router-link>
                <router-link class="nav-menu-item hide-navitem" v-show="isShow" :to="{name: 'calendar'}" tag="li"><a>{{$t('home.calendar')}}</a></router-link>
                <router-link class="nav-menu-item hide-navitem" v-show="isShow" to="/video" tag="li">
                  <a>{{$t('home.videos')}}</a>
                  <ul class="list-unstyled nav-submenu clearfix">
                    <li><router-link :to="{name: 'video-all'}">{{$t('activity.all')}}</router-link></li>
                    <li><router-link :to="{name: 'video-exhibition'}">{{$t('home.exhibitions')}}</router-link></li>
                    <li><router-link :to="{name: 'video-program'}">{{$t('home.programs')}}</router-link></li>
                    <li><router-link :to="{name: 'video-special'}">{{$t('program.special')}}</router-link></li>
                  </ul>
                </router-link>
                <router-link class="nav-menu-item hide-navitem" v-show="isShow" to="/support" tag="li">
                  <a>{{$t('home.support')}}</a>
                  <ul class="list-unstyled nav-submenu clearfix">
                    <li><router-link :to="{name: 'support-index'}">{{$t('support.support')}}</router-link></li>
                    <li><router-link :to="{name: 'support-sponsor'}">{{$t('support.sponsor')}}</router-link></li>
                    <li><router-link :to="{name: 'support-giving'}">{{$t('support.giving')}}</router-link></li>
                    <li><router-link :to="{name: 'support-event'}">{{$t('support.hostEvent')}}</router-link></li>
                    <li><router-link :to="{name: 'support-member'}">{{$t('support.membership')}}</router-link></li>
                  </ul>
                </router-link>
                <router-link class="nav-menu-item hide-navitem" v-show="isShow" to="/about" tag="li">
                  <a>{{$t('home.about')}}</a>
                  <ul class="list-unstyled nav-submenu clearfix">
                    <li><router-link :to="{name: 'about-index'}">{{$t('about.about')}}</router-link></li>
                    <!-- <li><router-link :to="{name: 'about-founders'}">{{$t('about.founder')}}</router-link></li> -->
                    <li><router-link :to="{name: 'about-leader'}">{{$t('about.leadership')}}</router-link></li>
                    <li><router-link :to="{name: 'careers'}">{{$t('about.career')}}</router-link></li>
                  </ul>
                </router-link>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-content clearfix hidden-xs">
            <div class="header-content-left">
                <router-link :to="{name: 'Index'}">
                    <div class="logo"></div>
                </router-link>
            </div>
            <div class="header-content-right">
              <div class="hcontent-right_info">
                <div class="worda">
                  <router-link :to="{name: 'calendar'}" class="current-calendar" v-show="$root.$i18n.locale =='zh-CN' ">
                    <span class="font-en-bold">{{current | date('YYYY')}}</span>年<span class="font-en-bold">{{current | date('M')}}</span>月<span class="font-en-bold">{{current | date('DD')}}</span>日&nbsp;{{current | dateLocale('ddd')}}
                  </router-link>
                  <router-link :to="{name: 'calendar'}" class="current-calendar" v-show="$root.$i18n.locale =='en-US' ">
                    <span class="font-en-bold">{{current | date('YYYY.M.D')}}</span>&nbsp;{{current | date('dddd')}}
                  </router-link>
                  <router-link :to="{name: 'support-member'}" class="join-member">{{$t('home.membership')}}</router-link>
                </div>
                <div class="header-sns">
                  <ul class="h-sns-list list-unstyled clearfix">
                    <li><a @click="subscribe">{{$t('home.subscription')}}</a></li>
                    <li class="focus-show" :class="{active: isFocus}" v-on:mouseleave="focus">
                      <a id="focus">{{$t('home.followus')}}</a>
                      <div class="focus-list">
                        <div>
                          <ul class="share-list list-unstyled clearfix">
                            <li><a href="http://weibo.com/ucca" target="_blank"></a></li>
                            <li><a href="http://site.douban.com/ucca/" target="_blank"></a></li>
                            <li class="weixin">
                              <a href="#"></a>
                              <div class="weixin-img">
                                <img src="../assets/img/img-weixin.jpg" alt="">
                              </div>
                            </li>
                            <li><a href="https://www.facebook.com/UCCA798?ref=ts&fref=ts" target="_blank"></a></li>
                            <li><a href="http://instagram.com/ucca798" target="_blank"></a></li>
                            <li><a href="https://twitter.com/UCCA798" target="_blank"></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li><router-link :to="{name: 'media'}">{{$t('home.press')}}</router-link></li>
                    <li><router-link :to="{name: 'contact-post'}">{{$t('home.contact')}}</router-link></li>
                    <li class="lan"><a @click="changeLang">{{lang}}</a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div class="h30 hidden-xs"></div>
        <div class="nav-list clearfix hidden-xs" :class="{active: !isIndex}">
          <div class="nav-list-menu">
            <div class="menu-main-container">
              <ul class="nav-menu list-unstyled clearfix" :class="{active: !isIndex,'is-en': $root.$i18n.locale == 'en-US'}">
                <router-link class="nav-menu-item" :to="{name: 'Visit'}" tag="li"><a>{{$t('home.visit')}}</a></router-link>
                <router-link class="nav-menu-item" to="/exhibitions" tag="li">
                  <a>{{$t('home.exhibitions')}}</a>
                  <ul class="list-unstyled nav-submenu clearfix">
                    <li :class="{current: isCurrent}"><router-link :to="{name: 'exhibition-current'}">{{$t('activity.current')}}</router-link></li>
                    <li :class="{current: isPlan}"><router-link :to="{name: 'exhibition-upcoming'}">{{$t('activity.upcoming')}}</router-link></li>
                    <li :class="{current: isPast}"><router-link :to="{name: 'exhibition-past'}">{{$t('activity.past')}}</router-link></li>
                  </ul>
                </router-link>
                <router-link class="nav-menu-item" to="/programs" tag="li">
                  <a>{{$t('home.programs')}}</a>
                  <ul class="list-unstyled nav-submenu clearfix">
                    <li :class="{current: isCurrent}"><router-link :to="{name: 'program-current'}">{{$t('program.current')}}</router-link></li>
                    <li :class="{current: isPlan}"><router-link :to="{name: 'program-past'}">{{$t('program.past')}}</router-link></li>
                    <li :class="{current: isPast}"><router-link :to="{name: 'program-special'}">{{$t('program.special')}}</router-link></li>
                  </ul>
                </router-link>
                <router-link class="nav-menu-item" to="/creative" tag="li">
                  <a>{{$t('home.creative')}}</a>
                  <ul class="list-unstyled nav-submenu clearfix">
                    <li><router-link :to="{name: 'creative-index'}">{{$t('home.home')}}</router-link></li>
                    <li>
                      <router-link :to="{name: 'artclass-intro'}">{{$t('home.artClass')}}</router-link>
                      <ul class="dropdown-menu" v-if="catList">
                        <li v-for="sub in catList.list" :key="sub.id" @click="goArt(sub.id)" :class="{active: $route.name == 'art-detail' && $route.params.id == sub.id }">
                          <a v-if="isZh">{{sub.name}}</a>
                          <a v-if="!isZh">{{sub.name_En}}</a>
                        </li>
                      </ul>
                    </li>
                    <router-link :to="{name: 'weekend-store'}" tag="li">
                      <a>{{$t('home.artStore')}}</a>
                    </router-link>
                    <router-link :to="{name: 'art-activity'}" tag="li"><a>{{$t('home.artActivity')}}</a></router-link>
                    <router-link :to="{name: 'communicate-master'}" tag="li">
                      <a>{{$t('home.communicate')}}</a>
                      <ul class="dropdown-menu">
                        <!-- <router-link :to="{name:'shop-class'}" tag="li"><a>{{$t('home.shop')}}</a></router-link> -->
                        <router-link :to="{name: 'teach-service'}" tag="li"><a>{{$t('home.teachingService')}}</a></router-link>
                      </ul>
                    </router-link>
                    <router-link :to="{name:'contact-index'}" tag="li">
                      <a>{{$t('home.trial')}}</a>
                      <!-- <ul class="dropdown-menu">
                        <router-link :to="{name:'trial'}" tag="li"><a>{{$t('home.trial')}}</a></router-link>
                        <router-link :to="{name: 'careers'}" tag="li"><a>{{$t('home.careers')}}</a></router-link>
                      </ul> -->
                    </router-link>
                    <router-link :to="{name: 'about-master'}" tag="li">
                      <a>{{$t('home.about')}}</a>
                      <ul class="dropdown-menu">
                        <router-link :to="{name: 'brief-intro'}" tag="li"><a>{{$t('about.briefIntro')}}</a></router-link>
                        <router-link :to="{name: 'edu-framework'}" tag="li"><a>{{$t('about.eduPhilosophy')}}</a></router-link>
                        <router-link :to="{name: 'team-intro'}" tag="li"><a>{{$t('about.teamIntro')}}</a></router-link>
                        <router-link :to="{name: 'news-list'}" tag="li"><a>{{$t('about.press')}}</a></router-link>
                      </ul>
                    </router-link>
                  </ul>
                </router-link>
                <router-link class="nav-menu-item" :to="{name: 'shop'}" tag="li"><a>{{$t('home.uccastore')}}</a></router-link>
                <router-link class="nav-menu-item" :to="{name: 'calendar'}" tag="li"><a>{{$t('home.calendar')}}</a></router-link>
                <router-link class="nav-menu-item" to="/video" tag="li">
                  <a>{{$t('home.videos')}}</a>
                  <ul class="list-unstyled nav-submenu clearfix">
                    <li><router-link :to="{name: 'video-all'}">{{$t('activity.all')}}</router-link></li>
                    <li><router-link :to="{name: 'video-exhibition'}">{{$t('home.exhibitions')}}</router-link></li>
                    <li><router-link :to="{name: 'video-program'}">{{$t('home.programs')}}</router-link></li>
                    <li><router-link :to="{name: 'video-special'}">{{$t('program.special')}}</router-link></li>
                  </ul>
                </router-link>
                <router-link class="nav-menu-item" to="/support" tag="li">
                  <a>{{$t('home.support')}}</a>
                  <ul class="list-unstyled nav-submenu clearfix">
                    <li><router-link :to="{name: 'support-index'}">{{$t('support.support')}}</router-link></li>
                    <li><router-link :to="{name: 'support-sponsor'}">{{$t('support.sponsor')}}</router-link></li>
                    <li><router-link :to="{name: 'support-giving'}">{{$t('support.giving')}}</router-link></li>
                    <li><router-link :to="{name: 'support-event'}">{{$t('support.hostEvent')}}</router-link></li>
                    <li><router-link :to="{name: 'support-member'}">{{$t('support.membership')}}</router-link></li>
                  </ul>
                </router-link>
                <router-link class="nav-menu-item" to="/about" tag="li">
                  <a>{{$t('home.about')}}</a>
                  <ul class="list-unstyled nav-submenu clearfix">
                    <li><router-link :to="{name: 'about-index'}">{{$t('about.about')}}</router-link></li>
                    <!-- <li><router-link :to="{name: 'about-founders'}">{{$t('about.founder')}}</router-link></li> -->
                    <li><router-link :to="{name: 'about-leader'}">{{$t('about.leadership')}}</router-link></li>
                    <li><router-link :to="{name: 'careers'}">{{$t('about.career')}}</router-link></li>
                  </ul>
                </router-link>
              </ul>
            </div>
          </div>
          <div class="nav-list-search" @mouseover="showSearch" @mouseout="showSearch">
            <div class="search-icon"></div>
            <div class="search-input_wrap" v-show="isSearch">
              <div class="search-input">
                <div class="search-input_form clearfix">
                  <input type="text" v-model="key" :placeholder="$t('home.searchTips')" @keyup.enter="goSearch">
                  <button class="search-btn" @click="goSearch"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      <mt-popup v-model="isShowM" popup-transition="popup-fade" :modal="true" style="width:600px;min-height:300px">
      <div class="email-modal">
        <div class="email-header clearfix">
          <span class="icon-close" @click="close_subscribe"></span>
        </div>
        <div class="subloading">
          <p class="page-infinite-loading" style="" v-if="showLoading"></p>
        </div>
        <iframe id='iframe_subscribe' name='iframe_subscribe' src="" width="600" height="300" frameborder="0" v-if="!emailModal"></iframe>
        <div id="mc_embed_signup" v-show="emailModal">
          <form action="https://ucca.us5.list-manage.com/subscribe/post?u=6dd7fea2625efd05a367a346f&amp;id=56ed2f9e84" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="iframe_subscribe" novalidate>
            <div id="mc_embed_signup_scroll">
              <p class="tiny required" v-if="$root.$i18n.locale =='zh-CN'">(<span class="asterisk">*</span> 必填 )</p>
              <p class="tiny required" v-if="$root.$i18n.locale =='en-US'">(<span class="asterisk">*</span> indicates required)</p>
              <label for="mce-EMAIL" style="float:left;margin-right:20px;">
                <span class="mce-EMAIL" v-if="$root.$i18n.locale =='zh-CN'">电子邮箱</span> 
                <span class="mce-EMAIL-en" v-if="$root.$i18n.locale =='en-US'">Email Address</span> 
                <span class="req asterisk">*</span>
              </label>
              <input v-if="$root.$i18n.locale =='zh-CN'" type="email" name="EMAIL" class="email" id="mce-EMAIL" placeholder="您的邮箱地址" required>
              <input v-if="$root.$i18n.locale =='en-US'" type="email" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email" required>
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6dd7fea2625efd05a367a346f_56ed2f9e84" tabindex="-1"></div>
              <div class="clear" v-if="$root.$i18n.locale =='zh-CN'"><input type="submit" value="订阅" name="subscribe" id="mc-embedded-subscribe" class="button" @click="submitForm"></div>
              <div class="clear" v-if="$root.$i18n.locale =='en-US'"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" @click="submitForm"></div>
            </div>
          </form>
        </div>
      </div>
    </mt-popup>
    </header>
</template>
<script>
  import { Popup, MessageBox } from 'mint-ui'
  import api from '@/api/api'
  import bus from '@/utility/bus'

  export default {
    name: 'top-header',
    data() {
      return {
        lang: 'EN',
        current: new Date(),
        emailModal: false,
        message: null,
        isFocus: false,
        catList: null,
        isShow: false,
        isShowM: false,
        showLoading: false,
        key: null,
        isSearch: false,
      }
    },
    watch: {
      $route(to, from) {
        if (to.path !== from.path) {
          this.isShow = false
        }
      },
    },
    created() {
      this.currentLang()
      api.getClassCat().then((data) => {
        this.catList = data
      })
    },
    mounted() {
      bus.$on('subscribe', () => {
        this.emailModal = true
        this.isShowM = !this.isShowM
      })
      bus.$on('focus', () => {
        this.isFocus = true
      })
    },
    methods: {
      showSearch() {
        this.isSearch = !this.isSearch
      },
      goSearch() {
        this.$router.push({ name: 'search', params: { key: this.key } })
        this.$router.go(0)
      },
      goArt(id) {
        this.$router.push({ name: 'art-detail', params: { id } })
        this.$router.go(0)
      },
      showHideNav() {
        this.isShow = !this.isShow
      },
      changeLang() {
        if (this.$root.$i18n.locale === 'zh-CN') {
          this.$root.$i18n.locale = 'en-US'
          window.localStorage.setItem('lang', 'EN')
          this.lang = '中文'
        } else {
          this.$root.$i18n.locale = 'zh-CN'
          window.localStorage.setItem('lang', '中文')
          this.lang = 'EN'
        }
      },
      currentLang() {
        if (window.localStorage.getItem('lang') === 'EN') {
          this.$root.$i18n.locale = 'en-US'
          this.lang = '中文'
        } else {
          this.$root.$i18n.locale = 'zh-CN'
          this.lang = 'EN'
        }
      },
      subscribe() {
        this.emailModal = true
        this.isShowM = !this.isShowM
      },
      close_subscribe() {
        this.isShowM = !this.isShowM
      },
      save() {
        if (this.message) {
          api.subscribe({ email: this.message }).then((data) => {
            if (data) {
              MessageBox.alert(this.$t('home.success'), '').then(() => {
                this.emailModal = false
              })
            }
          })
        } else {
          MessageBox.alert(this.$t('home.pleaseEmail'), '')
        }
      },
      focus() {
        this.isFocus = false
      },
      submitForm() {
        this.emailModal = !this.emailModal
        this.showLoading = !this.showLoading
        const self = this
        setTimeout(() => {
          self.showLoading = !self.showLoading
        }, 3000)
      },
    },
    computed: {
      isIndex() {
        return this.$route.name === 'Index'
      },
      isZh() {
        return this.$root.$i18n.locale === 'zh-CN'
      },
      isCurrent() {
        return this.$route.params.type === '1'
      },
      isPlan() {
        return this.$route.params.type === '2'
      },
      isPast() {
        return this.$route.params.type === '3'
      },
    },
    components: {
      Popup,
    },
  }
</script>

<style lang="scss">
.mint-msgbox {
  width: 300px;
}

.header {
  width: 1000px;
  margin: 0 auto;
  .header-content {
    margin-top: 40px;
  }
}

.header-content-left {
  float: left;
  width: 470px;
  overflow: hidden;
}

.header-content-right {
  width: 330px;
  float: right;
}

.logo {
  background: url('../assets/img/logo.jpg') center center no-repeat;
  width: 341px;
  height: 60px;
}

.join-member {
  margin-left: 26px;
}
.mce-EMAIL{
  margin-left: 76px;
}
.mce-EMAIL-en{
  margin-left: 61px;
}
.worda a {
  font-weight: bold;
  font-size: 16px;
  color: #ccc;
  cursor: pointer;
  &:hover {
    color: #ed3024;
    text-decoration: none;
  }
  span {
    font-size: 21px;
    font-weight: normal;
  }
}

.h-sns-list {
  >li {
    float: left;
    font-size: 13px;
    font-family: 'metric-regular', Arial, Helvetica, sans-serif;
    margin-left: 10px;
    position: relative;
    &:first-child {
      margin-left: 0;
    }
    &.lan {
      text-align: right;
      float: right;
      font-size: 12px;
      margin-top: -6px;
      font-family: 'Microsoft Yahei', '微软雅黑';
    }
    >a {
      color: #000;
      cursor: pointer;
      &:hover {
        color: #ed3024;
        text-decoration: none;
      }
    }
    .active {
      color: #ed3024;
      text-decoration: none;
    }
  }
}

.nav-list {
  width: 1000px;
  background: #fff;
  border-width: 3px 0px 1px 0px;
  border-style: solid;
  border-color: #000;
  .nav-list-menu {
    width: 964px;
    float: left;
  }
  .nav-list-search {
    float: left;
    width: 36px;
    height: 45px;
    position: relative;
    z-index: 10;
    .search-icon {
      background: url('../assets/img/icon-search.jpg') right bottom no-repeat;
      float: left;
      width: 36px;
      height: 19px;
      cursor: pointer;
      margin-top: 12px;
    }
  }
  &.active {
    .search-icon {
      background: url(../assets/img/icon-searcha.jpg) right bottom no-repeat;
    }
  }
}

.menu-main-container {
  float: left;
  width: 100%;
  margin-top: 11px;
  height: 34px;
}

.nav-menu {
  width: 100%;
  position: relative;
  margin-bottom: 0;
  &.active {
    a {
      color: #999;
    }
  }
  &.is-en {
    >li>a {
      letter-spacing: initial;
    }
  }
  >li {
    float: left;
    font-size: 17px;
    color: #000;
    margin-left: 25px;
    &.active {
      >a {
        color: #000;
      }
    }
    &:first-child {
      margin-left: 0;
    }
    >a {
      color: #000;
      font-weight: bold;
      letter-spacing: 4px;
      cursor: pointer;
      &:hover {
        color: #ed3024;
        text-decoration: none;
      }
    }
  }
}

.nav-submenu {
  display: none;
  position: absolute;
  width: 1000px;
  top: 35px;
  left: 0px;
  padding-top: 0px;
  >li {
    float: left;
    margin-left: 18px;
    position: relative;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      .dropdown-menu {
        display: block;
      }
    }
    &.active {
      >a {
        color: #000;
      }
    }
    &.current {
      >a {
        color: #000;
      }
    }
    >a {
      display: block;
      color: #999;
      font-size: 13px;
      font-weight: normal;
      margin-top: 5px;
      cursor: pointer;
      &:hover {
        color: #ed3024;
      }
      &.active {
        color: #000;
      }
    }
  }
  .dropdown-menu {
    border-radius: 0;
    padding: 0;
    margin: 0;
    top: 28px;
    >li {
      height: 38px;
      line-height: 38px;
      width: 100%;
      margin: 0px;
      &.active {
        a {
          background: #fff;
          color: #000;
        }
      }
      >a {
        width: 100%;
        display: block;
        text-indent: 2em;
        color: #999;
        font-size: 12px;
        font-weight: normal;
        line-height: inherit;
        padding: 0;
        &:hover {
          color: #fff;
          background-color: #eb3024;
        }
      }
    }
  }
}

.nav-menu-item.active {
  .nav-submenu {
    display: block;
    border-bottom: 1px solid #000;
  }
}

.focus-show:hover {
  .focus-list {
    display: block;
  }
}

.focus-show.active {
  .focus-list {
    display: block;
  }
}

.focus-list {
  position: absolute;
  display: none;
  left: 0px;
  top: 16px;
  width: 136px;
  >div {
    width: 154px;
    float: left;
    border: 1px solid #ccc;
    background: #fff;
    height: 50px;
  }
  .share-list {
    float: left;
    margin: 16px 0px 0px 14px;
  }
}

.email-modal {
  width: 600px;
  height: 300px;
  .email-header {
    padding: 1px 5px;
    border: 1px solid #e5e5e5;
  }
  .email-box {
    padding: 0 5px;
    font-size: 12px;
    color: #333;
    margin-top: 50px;
    .form-group {
      width: 340px;
      margin: 0 auto;
    }
    label {
      font-weight: normal;
      margin-right: 6px;
    }
    em {
      font-style: normal;
      color: #ff0000;
    }
  }
}

#mc_embed_signup form {
  display: block;
  position: relative;
  text-align: left;
  padding: 10px 0 10px 3%
}

#mc_embed_signup h2 {
  font-weight: bold;
  padding: 0;
  margin: 15px 0;
  font-size: 1.4em;
}

#mc_embed_signup input {
  border: 1px solid #999;
  -webkit-appearance: none;
}

#mc_embed_signup input[type=checkbox] {
  -webkit-appearance: checkbox;
}

#mc_embed_signup input[type=radio] {
  -webkit-appearance: radio;
}

#mc_embed_signup input:focus {
  border-color: #333;
}

#mc_embed_signup .button {
  clear: both;
  background-color: #aaa;
  border: 0 none;
  border-radius: 4px;
  letter-spacing: .03em;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  height: 32px;
  line-height: 32px;
  margin: 0 5px 10px 0;
  padding: 0;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
  width: auto;
  transition: all 0.23s ease-in-out 0s;
}

#mc_embed_signup .button:hover {
  background-color: #777;
}

#mc_embed_signup .small-meta {
  font-size: 11px;
}

#mc_embed_signup .nowrap {
  white-space: nowrap;
}

#mc_embed_signup .clear {
  clear: none;
  display: inline;
}

#mc_embed_signup label {
  display: block;
  font-size: 16px;
  padding-bottom: 10px;
  font-weight: bold;
}

#mc_embed_signup input.email {
  font-family: "Open Sans", "Helvetica Neue", Arial, Helvetica, Verdana, sans-serif;
  font-size: 12px;
  display: block;
  padding: 0 0.4em;
  margin: 0 4% 10px 0;
  min-height: 32px;
  width: 58%;
  min-width: 130px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

#mc_embed_signup input.button {
  // display: block;
  width: 35%;
  margin: 20px 0 10px 170px;
  min-width: 90px;
}

#mc_embed_signup div#mce-responses {
  float: left;
  top: -1.4em;
  padding: 0em .5em 0em .5em;
  overflow: hidden;
  width: 90%;
  margin: 0 5%;
  clear: both;
}

#mc_embed_signup div.response {
  margin: 1em 0;
  padding: 1em .5em .5em 0;
  font-weight: bold;
  float: left;
  top: -1.5em;
  z-index: 1;
  width: 80%;
}

#mc_embed_signup #mce-error-response {
  display: none;
}

#mc_embed_signup #mce-success-response {
  color: #529214;
  display: none;
}

#mc_embed_signup label.error {
  display: block;
  float: none;
  width: auto;
  margin-left: 1.05em;
  text-align: left;
  padding: .5em 0;
}

#mc_embed_signup {
  background: #fff;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
}
@media screen and (max-width:767px) {
      .header {
        width: 100%;
        padding-top: 19px;
      }
      .mobile-header_logo {
        position: relative;
      }
      .mobile-logo_left {
        float: left;
        width: 81.0345%;
        a {
          display: block;
          width: 71.4894%;
          img {
            width: 100%;
          }
        }
      }
      .mobile-search_wrap {
        position: relative;
        margin-bottom: 10px;
        .search-caret {
          position: absolute;
          top: -9px;
          width: 16px;
          height: 9px;
          background: url(../assets/img/tbg-17.png) center center no-repeat;
          right: 4.6875%;
        }
        .mobile-search_input {
          height: 42px;
          background: #f6f4f4;
          position: relative;
          top: 0px;
          left: 0px;
          >div {
            width: 90.625%;
            margin: 0px auto;
            position: relative;
          }
        }
        input[type=text] {
          width: 86.2069%;
          float: left;
          height: 42px;
          border: none;
          background: none;
          font-size: 12px;
          color: #999;
          &:focus {
            outline: none;
          }
        }
        .search-btn {
          height: 42px;
          border: none;
          background: url(../assets/img/tbg-18.png) right center no-repeat;
          background-size: 6px 11px;
          margin: 0px;
          padding: 0px;
          box-sizing: border-box;
          width: 12%;
          float: right;
          position: absolute;
          right: 0px;
          top: 1px;
          z-index: 5;
          &:focus {
            outline: none;
          }
        }
      }
      .mobile-logo_right {
        width: 60px;
        position: absolute;
        right: 0px;
        bottom: -6px;
        height: 100%;
        .mobile-lan {
          float: left;
          width: 32px;
          margin-top: 6px;
          background: url(../assets/img/tbg-3.png) right 5px no-repeat;
          background-size: 1px 12px;
          a {
            font-family: Helvetica;
            font-size: 12px;
            text-decoration: none;
            color: #000;
            margin-top: 3px;
            display: inline-block;
          }
        }
        .mobile-search {
          float: left;
          position: relative;
          margin-top: 2px;
          width: 28px;
          height: 30px;
          .mobile-search_icon {
            width: 12px;
            height: 12px;
            float: right;
            background: url(../assets/img/tbg-2.png) 0px 0px no-repeat;
            background-size: contain;
            margin-top: 9px;
          }
        }
      }
      .mobile-header_menu {
        margin-top: 15px;
      }
      .mobile-navmenu {
        border-top: 3px solid #000;
        border-bottom: 1px solid #000;
        >ul.active {
          a {
            color: #999;
          }
        }
        >ul {
          margin: 16px 0px 10px 0px;
          position: relative;
          >li {
            float: left;
            margin-left: 15px;
            &:first-child {
              margin-left: 0;
            }
            &.active {
              color: #000;
              a {
                color: #000;
              }
            }
            &:nth-child(6) {
              margin-top: 10px;
              border-top: 1px solid #000;
            }
            &.hide-navitem {
              display: list-item;
              width: 100%;
              padding-top: 10px;
              padding-bottom: 17px;
              position: relative;
              margin: 0;
              border-bottom: 1px dotted #000;
              z-index: 100;
              background: #fff;
              >a {
                display: block;
                width: 100%;
                float: left;
                height: 20px;
                padding-top: 5px;
              }
              &:last-child {
                padding-bottom: 5px;
                border-bottom: 0;
              }
              .nav-submenu {
                display: block;
                position: relative;
                width: 100%;
                float: left;
                top: 0px;
                border: none;
                margin: 0;
                height: auto !important;
                >li {
                  width: 100%;
                  float: left;
                  margin: 0px;
                  >a {
                    display: block;
                    width: 100%;
                    height: 20px;
                    padding-top: 5px;
                    font-size: 12px;
                    font-family: Helvetica;
                    color: #999;
                    font-weight: normal;
                  }
                }
              }
            }
            &.active {
              .nav-submenu {
                display: block;
                position: absolute;
                left: 0px;
                top: 48px;
                width: 100%;
                border-bottom: 1px solid #000;
                padding-bottom: 9px;
                height: auto !important;
                >li {
                  >a {
                    font-size: 12px;
                    font-family: Helvetica;
                    color: #999;
                    font-weight: normal;
                    &.active {
                      color: #000;
                    }
                  }
                  &.current {
                    >a {
                      color: #000;
                    }
                  }
                }
              }
            }
            &.active.hide-navitem {
              .nav-submenu {
                display: block;
                position: relative;
                width: 100%;
                float: left;
                top: 0px;
                border: none;
                margin: 0;
                height: auto !important;
              }
            }
            .nav-submenu {
              >li {
                float: left;
                margin-right: 15px;
                margin-left: 0;
              }
            }
            >a {
              font-size: 14px;
              text-decoration: none;
              font-family: Helvetica;
              color: #000;
              font-weight: bold;
            }
          }
        }
        .mobile-toggle_menu {
          width: 30px;
          height: 30px;
          background-color: #fff;
          margin-top: -4px;
          display: block;
          background: url(../assets/img/tbg-4.png) center center no-repeat;
          background-size: 30px 60px;
          background-position: 0px 0px;
          float: right;
          border: none;
          padding: 0px;
          a {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .required {
    text-align: right;
    font-size: 11px;
    font-weight: bold;
    padding-right: 20px;
    margin-bottom: 60px
    }
    .asterisk {
    visibility: visible !important;
    color: red;
    }
    #mc_embed_signup_scroll label{
      line-height: 150%;
      font-family: Arial;
      font-size: 12px;
      color: #333333;
      font-weight: normal;
    padding-top: 5px;
    }
    // hr{
    //   margin-bottom: 20px;
    //   margin-left: -18px;
    //   border-color:#e6e4e4;
    // }
</style>