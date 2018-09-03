<template>
  <div class="classmall-list clearfix">
    <div class="clearfix">
      <class-item></class-item>
    </div>
  </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui'
import ClassItem from '@/views/creative/communicate/ClassItem'

export default {
  name: 'edushop-list',
  components: {
    ClassItem,
    InfiniteScroll,
  },
}
</script>
