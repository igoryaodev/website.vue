<template>
  <div class="main-wrap">
    <div class="main-content">
      <div class="service-wrap">
        <div class="common-title">{{$t('home.sitemap')}}</div>
        <div>
          <div class="site-item">
            <ul class="list-unstyled clearfix">
              <li>
                <ul class="list-unstyled">
                  <li>{{$t('home.visit')}}</li>
                  <li><router-link :to="{name: 'Visit'}">{{$t('home.visit')}}</router-link></li>
                </ul>
              </li>
              <li>
                <ul class="list-unstyled">
                  <li>{{$t('home.exhibitions')}}</li>
                  <li><router-link :to="{name: 'exhibition-current'}">{{$t('activity.current')}}</router-link></li>
                  <li><router-link :to="{name: 'exhibition-upcoming'}">{{$t('activity.upcoming')}}</router-link></li>
                  <li><router-link :to="{name: 'exhibition-past'}">{{$t('activity.past')}}</router-link></li>
                </ul>
              </li>
              <li>
                <ul class="list-unstyled">
                  <li>{{$t('home.programs')}}</li>
                  <li><router-link :to="{name: 'program-current'}">{{$t('program.current')}}</router-link></li>
                  <li><router-link :to="{name: 'program-past'}">{{$t('program.past')}}</router-link></li>
                  <li><router-link :to="{name: 'program-special'}">{{$t('program.special')}}</router-link></li>
                </ul>
              </li>
              <li>
                <ul class="list-unstyled">
                  <li>{{$t('home.calendar')}}</li>
                  <li><router-link :to="{name: 'calendar'}">{{$t('home.calendar')}}</router-link></li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="site-item">
            <ul class="list-unstyled clearfix">
              <li>
                <ul class="list-unstyled">
                  <li>{{$t('activity.video')}}</li>
                  <li><router-link :to="{name: 'video-exhibition'}">{{$t('home.exhibitions')}}</router-link></li>
                  <li><router-link :to="{name: 'video-program'}">{{$t('home.programs')}}</router-link></li>
                  <li><router-link :to="{name: 'video-special'}">{{$t('program.special')}}</router-link></li>
                </ul>
              </li>
              <li>
                <ul class="list-unstyled">
                  <li>{{$t('home.uccastore')}}</li>
                  <li><router-link :to="{name: 'shop'}">{{$t('home.uccastore')}}</router-link></li>
                </ul>
              </li>
              <li>
                <ul class="list-unstyled">
                  <li>{{$t('home.create')}}</li>
                  <li><a href="http://www.creative-studio.cn/" target="_blank">{{$t('home.create')}}</a></li>
                </ul>
              </li>
              <li>
                <ul class="list-unstyled">
                  <li>{{$t('support.support')}}</li>
                  <li><router-link :to="{name: 'support-index'}">{{$t('support.support')}}</router-link></li>
                  <li><router-link :to="{name: 'support-sponsor'}">{{$t('support.sponsor')}}</router-link></li>
                  <li><router-link :to="{name: 'support-giving'}">{{$t('support.giving')}}</router-link></li>
                  <li><router-link :to="{name: 'support-event'}">{{$t('support.hostEvent')}}</router-link></li>
                  <li><router-link :to="{name: 'support-member'}">{{$t('support.membership')}}</router-link></li>
                  <li><router-link :to="{name: 'member-benefit'}">{{$t('support.ucca')}}</router-link></li>
                  <li><router-link :to="{name: 'member-event'}">{{$t('support.event')}}</router-link></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="site-item">
            <ul class="list-unstyled clearfix">
              <li>
                <ul class="list-unstyled">
                  <li>{{$t('home.about')}}</li>
                  <li><router-link :to="{name: 'about-index'}">{{$t('about.about')}}</router-link></li>
                  <!-- <li><router-link :to="{name: 'about-founders'}">{{$t('about.founder')}}</router-link></li> -->
                  <li><router-link :to="{name: 'about-leader'}">{{$t('about.leadership')}}</router-link></li>
                  <li><router-link :to="{name: 'about-board'}">{{$t('about.boards')}}</router-link></li>
                  <li><router-link :to="{name: 'about-design'}">{{$t('about.design')}}</router-link></li>
                  <li><router-link :to="{name: 'careers'}">{{$t('about.career')}}</router-link></li>
                </ul>
              </li>
              <li>
                <ul class="list-unstyled">
                  <li>{{$t('home.buyTickets')}}</li>
                  <li><a>{{$t('home.buyTickets')}}</a></li>
                </ul>
              </li>
              <li>
                <ul class="list-unstyled">
                  <li>{{$t('home.press')}}</li>
                  <li><router-link :to="{name: 'media-all'}">{{$t('home.press')}}</router-link></li>
                </ul>
              </li>
              <li>
                <ul class="list-unstyled">
                  <li>{{$t('home.contact')}}</li>
                  <li><router-link :to="{name: 'contact-post'}">{{$t('contact.quiry')}}</router-link></li>
                  <li><a href="http://www.surveymonkey.com/s/NPCPWCZ">{{$t('home.feedback')}}</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="site-item">
            <ul class="list-unstyled clearfix">
              <li>
                <ul class="list-unstyled">
                  <li>{{$t('home.login')}}</li>
                  <li><a>{{$t('home.login')}}</a></li>
                  <li><a>{{$t('home.forget')}}</a></li>
                </ul>
              </li>
              <li>
                <ul class="list-unstyled">
                  <li>{{$t('home.regist')}}</li>
                  <li><a>{{$t('home.regist')}}</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="footer-split"></div>
        </div>
      </div>
      <footer-menu></footer-menu>
    </div>
  </div>
</template>
<script>
import FooterMenu from '@/components/FooterMenu'

export default {
  name: 'sitemap',
  components: {
    FooterMenu,
  },
}
</script>
<style lang="scss">
  .site-item {
    margin-top: 40px;
    >ul>li {
      float: left;
      width: 250px;
      >ul>li {
        width: 250px;
        float: left;
        height: 22px;
        font-size: 15px;
        &:first-child {
          height: 33px;
        }
        >a {
          font-size: 11px;
          color: #999;
          &:hover {
            color:#ed3024;
          }
        }
      }
    }
  }
</style>

