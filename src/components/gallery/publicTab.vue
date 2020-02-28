<template>
  <div class="publictab-content">
    <div class="publictab-content-title text-center">
      <h2 class="section-hender">Our Gallery</h2>
      <img :src="divider"/>
      <h3 class="publictab-content-detaile text-center font-16">Aliquam erat volutpat. Curabitur tempor
         nibh quis arcu convallis, sed viverra quam sollicitudin.
         Proin sed augue sed neque ultricies condimentum.</h3>
    </div>
    <Tab></Tab>
  </div>
</template>

<script>
import '../../Common/fontSize'
import divider from '../../images/gallery/divider.png'
import Tab from '../story/tabList.vue'
export default {
  data () {
    return {
      activeName: 'first',
      divider
    }
  },
  components: {
    Tab
  }
}
</script>

<style lang='less' scoped>
@import '../../css/gallery.less';
</style>
