<template>
  <div class="main-wrap">
    <div class="main-content">
      <div class="mobile-nav_submenu visible-xs">
        <ul class="list-unstyled clearfix">
          <li><router-link :to="{name: 'about-index'}">{{$t('about.about')}}</router-link></li>
          <li><router-link :to="{name: 'about-founders'}">{{$t('about.founder')}}</router-link></li>
          <li><router-link :to="{name: 'about-leader'}">{{$t('about.leadership')}}</router-link></li>
          <li><router-link :to="{name: 'about-board'}">{{$t('about.boards')}}</router-link></li>
          <li><router-link :to="{name: 'about-design'}">{{$t('about.design')}}</router-link></li>
          <li><router-link :to="{name: 'careers'}">{{$t('about.career')}}</router-link></li>
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
  name: 'about-master',
  components: {
    FooterMenu,
  },
}
</script>
