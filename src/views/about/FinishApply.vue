<template>
<div class="main-wrap">
  <div class="main-content">
    <div class="finish-wrap">
      <div class="common-title">{{$t('about.finsih')}}</div>
      <div class="finish-info">
        <p>{{$t('about.fintip')}}</p>
        <p><router-link :to="{name: 'careers'}">{{$t('about.finishOther')}}</router-link></p>
        <p>&nbsp;</p>
        <p>{{$t('about.interest')}}</p>
        <p>
          <router-link :to="{name: 'exhibition-master'}">{{$t('about.viewExhib')}}</router-link>
          <br>
          <router-link :to="{name: 'program'}">{{$t('about.viewProgram')}}</router-link>
          <br>
          <a>{{$t('about.vticket')}}</a>
          <br>
          <router-link :to="{name: 'member-benefit'}">{{$t('about.vmember')}}</router-link>
          <br>
          <router-link :to="{name: 'shop'}">{{$t('about.vstore')}}</router-link>
        </p>
      </div>
      <div class="footer-split"></div>
    </div>
    <footer-menu></footer-menu>
  </div>
</div>
</template>
<script>
import FooterMenu from '@/components/FooterMenu'

export default {
  name: 'finish-apply',
  components: {
    FooterMenu,
  },
}
</script>
<style lang="scss">
  .finish-info {
    a {
      font-weight: bold;
      padding-right: 10px;
      background: url(../../assets/img/bg-search.png) right 5px no-repeat;
      color: #ed3024;
      font-size: 13px;
      font-family: 'Microsoft Yahei';
      line-height: 20px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>

