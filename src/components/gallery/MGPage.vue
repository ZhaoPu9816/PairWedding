<template>
  <div>
    <div class="Brid-groom-content Brid-img">
    <div class="Brid-groom-area">
      <div class="container">
        <div class="container-wrap">
          <BounceIn>
            <div slot="bounceIn" v-if="show">
              <h1>Gallery</h1>
              <ul class="container-wrap-lists clearfix">
                <li class="container-wrap-list fl margin-r-5">
                  <router-link to="/home">Home</router-link>
                </li>
                <li class="container-wrap-list active fl margin-l-5">Gallery</li>
              </ul>
           </div>
          </BounceIn>
        </div>
      </div>
    </div>
    </div>
    <PublicTab></PublicTab>
  </div>
</template>

<script>
import PublicTab from './publicTab.vue'
import BounceInLeft from 'comp/location/slot/BounceInLeft'
import BounceIn from 'comp/location/slot/BounceIn'
import BounceInDown from 'comp/location/slot/BounceInDown'
import BounceInRight from 'comp/location/slot/BounceInRight'
export default {
  data () {
    return {
      show: false
    }
  },
  components: {
    PublicTab,
    BounceInLeft,
    BounceIn,
    BounceInDown,
    BounceInRight
  },
  mounted () {
    this.show = true
  }
}
</script>

<style lang='less' scoped>
@import '../../css/gallery.less';
</style>
