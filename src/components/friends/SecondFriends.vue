<template>
  <div>
    <div class="seconfri">
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
    <div>
      <Conder></Conder>
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
import Conder from './Second/first-small'
import Carousel from './carousel'
import Plan from './Second/Planners'
import Bounin from 'comp/location/slot/BounceIn'
export default {
  data () {
    return {
      show: false
    }
  },
  components: {
    Conder,
    Carousel,
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
