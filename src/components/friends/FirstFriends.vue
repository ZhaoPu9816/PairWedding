<template>
  <div>
    <div class="first">
      <div>
        <div class="banner-area">
            <div class="setion-over">
                <div class="container">
                    <div class="title">
                      <Bounin >
                        <div class="text-center" slot="bounceIn" v-if="show">
                          <div class="main-title">Friends</div>
                          <div class="home-locations">
                              <router-link to="/home" class="home">Home</router-link>
                              <span>/</span>
                              <router-link to="/friends/friendsStyle1" class="location">Friends</router-link>
                          </div>
                        </div>
                      </Bounin>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div>
      <Smallss></Smallss>
    </div>
    <div>
      <Carousel></Carousel>
    </div>
    <div>
      <Plan></Plan>
    </div>
 </div>
</template>

<script>
import Smallss from './first-small'
import Carousel from './carousel'
import Bottom from 'comp/story/carousel'
import Plan from './Second/Planners'
import Bounin from 'comp/location/slot/BounceIn'
export default {
  data () {
    return {
      show: false
    }
  },
  components: {
    Smallss,
    Carousel,
    Bottom,
    Plan,
    Bounin
  },
  mounted () {
    this.show = true
  }
}
</script>

<style lang="less" scoped>
@import '../../css/friends.less';
</style>
