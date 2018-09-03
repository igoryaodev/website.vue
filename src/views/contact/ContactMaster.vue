<template>
  <div class="main-wrap">
    <div class="main-content">
      <router-view></router-view>
      <footer-menu></footer-menu>
    </div>
  </div>
</template>
<script>
import FooterMenu from '@/components/FooterMenu'

export default {
  name: 'contact-master',
  components: {
    FooterMenu,
  },
}
</script>