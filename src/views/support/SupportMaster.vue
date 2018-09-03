<template>
  <div class="main-wrap">
    <div class="main-content">
      <div class="mobile-nav_submenu visible-xs">
        <ul class="list-unstyled clearfix">
          <li><router-link :to="{name: 'support-index'}">{{$t('support.support')}}</router-link></li>
          <li><router-link :to="{name: 'support-sponsor'}">{{$t('support.sponsor')}}</router-link></li>
          <li><router-link :to="{name: 'support-giving'}">{{$t('support.giving')}}</router-link></li>
          <li><router-link :to="{name: 'support-event'}">{{$t('support.hostEvent')}}</router-link></li>
          <li><router-link :to="{name: 'support-member'}">{{$t('support.membership')}}</router-link></li>
        </ul>
      </div>
      <router-view></router-view>
      <footer-menu></footer-menu>
    </div>
  </div>
</template>
<script>
import FooterMenu from '@/components/FooterMenu'

export default {
  name: 'support-master',
  components: {
    FooterMenu,
  },
}
</script>
