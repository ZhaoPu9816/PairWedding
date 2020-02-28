<template>
  <div>
    <div class="banner">
      <!--背景图片-->
      <div class="img-box">
        <img src="~img/pages/classic-gallery-bg.jpg"/>
      </div>
      <!--标题-->
      <div class="title">
        <BounceInRight>
        <div slot="bounceInRight" v-if="show5">
            <div class="main-title">Gallery Classic</div>
            <div class="small-title">
              <router-link to="/home" class="home">Home</router-link>
              <span>/</span>
              <router-link to="/story" class="story">Gallery Classic</router-link>
            </div>
          </div>
        </BounceInRight>
      </div>
    </div>
    <div class="page-area">
      <Tab></Tab>
    </div>
  </div>
</template>

<script>
import Tab from '../story/tabList.vue'
import BounceInRight from 'comp/location/slot/BounceInRight'
export default {
  data () {
    return {
      show5: false
    }
  },
  components: {
    Tab,
    BounceInRight
  },
  mounted () {
    this.show5 = true
  }
}
</script>

<style lang="less" scoped>
@import '~css/pages.less';
@import '~css/story.less';
</style>
