<template>
  <div class="content">
    <!--头部图片-->
    <div class="banner">
      <!--背景图片-->
      <div class="img-box">
        <img src="~img/story/story-page-bg.jpg"/>
      </div>
      <!--标题-->
      <div class="title">
        <BounceInLeft>
        <div slot="bounceInLeft" v-if="show1">
            <div class="main-title">Love Story</div>
          <div class="small-title">
            <router-link to="/home" class="home">Home</router-link>
            <span>/</span>
            <router-link to="/story" class="story">Story</router-link>
          </div>
        </div>
        </BounceInLeft>
      </div>
    </div>
    <!--中间内容-->
    <div class="story-area">
      <storyModule></storyModule>
    </div>
    <!--电影板块-->
    <div class="movie-box" >
      <h2>Lovable Memories</h2>
      <img src="../../images/gallery/divider.png"/>
      <h3>Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum. </h3>
      <div class="video-module">
        <div class="video-box">
          <img src="./miss.jpg"/>
        </div>
        <div class="border-box">
          <span class="border-span"></span>
          <span class="border-span"></span>
          <span class="border-span"></span>
          <span class="border-span"></span>
        </div>
        <!--播放按钮-->
        <div class="play-btn" @click="showbox">
          <i class="el-icon-caret-right"></i>
        </div>
      </div>
    </div>
    <!--电影！！-->
    <div class="video-mask" v-if="show">
      <video controls poster="./miss.jpg"  >
        <source src="./F2kGbmy6ip.mp4" type="video/mp4">
      </video>
      <i class="el-icon-close" @click="showbox"></i>
    </div>
  </div>
</template>

<script>
import BounceIn from 'comp/location/slot/BounceIn'
import storyModule from '../home/storymodel.vue'
import BounceInLeft from 'comp/location/slot/BounceInLeft'
import BounceInRight from 'comp/location/slot/BounceInRight'
export default {
  components: {
    storyModule,
    BounceIn,
    BounceInLeft,
    BounceInRight
  },
  data () {
    return {
      show: false,
      visiable: false,
      show1: false
    }
  },
  methods: {
    showbox () {
      this.show = !this.show
    }
  },
  mounted () {
    this.visiable = true
    this.show1 = true
  }
}
</script>

<style lang="less" scoped>
  @import '~css/story.less';
</style>
