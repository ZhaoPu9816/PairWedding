<template>
  <div class="home-container">
    <div class="row-model flex-betwe-w love">
      <div class="story-out-box left"  :key="index" v-for="(item, index) in storyLists">
        <div class="story-box story-left" v-if="index%2 === 0">
          <div class="story-content-wrap">
            <div class="story-photo-box position-relative">
              <img :src="item.story_img" alt="爱情故事图片">
            </div>
            <div class="story-text text-right">
              <h4>{{item.title}}<span>{{item.id}}</span></h4>
              <h5>{{item.TIME}}</h5>
              <p>{{item.story}}</p>
            </div>
          </div>
          <!-- <div class="middle-box2">
            <div class="story-divider-img flex-center">
              <img :src="Bgflower"/>
            </div>
          </div> -->
        </div>
        <div class="story-box story-right" v-if="index%2 === 1">
          <div class="story-content-wrap">
            <div class="story-photo-box position-relative show-mobile-device">
              <img :src="item.story_img" alt="图片" />
            </div>
            <div class="story-text text-left two">
              <h4>{{item.title}}<span>{{item.id}}</span></h4>
              <h5>{{item.TIME}}</h5>
              <p>{{item.story}}</p>
            </div>
          </div>
          <div class="story-photo-box position-relative show-large-device">
            <img :src="item.story_img" alt="爱情故事图片">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../Common/fontSize.js'
import Bgflower from '../../images/home/story-divider.png'
export default {
  data () {
    return {
      storyLists: [],
      Bgflower
      // imgapi: 'http://192.168.97.236:3000/home/'
    }
  },
  mounted () {
    this.axiosRequest({
      url: '/lovestory',
      method: 'get'
    }).then((res) => {
      res = res.data
      if (res.status === 200) {
        this.storyLists = res.data
      }
    })
    this.storyLists = this.$store.state.home.storyLists
  }
}
</script>

<style lang="less" scoped>
  @import '../../css/home.less';
</style>
