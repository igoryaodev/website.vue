<template>
  <div class="main-wrap">
    <div class="main-content">
      <div class="mobile-nav_submenu visible-xs">
        <ul class="list-unstyled clearfix">
          <li><router-link :to="{name: 'video-all'}">{{$t('activity.all')}}</router-link></li>
          <li><router-link :to="{name: 'video-exhibition'}">{{$t('home.exhibitions')}}</router-link></li>
          <li><router-link :to="{name: 'video-program'}">{{$t('home.programs')}}</router-link></li>
          <li><router-link :to="{name: 'video-special'}">{{$t('program.special')}}</router-link></li>
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
  name: 'video-index',
  components: {
    FooterMenu,
  },
}
</script>
