<template>
  <div>
    <div class="Brid-groom-content CGpage-img">
    <div class="Brid-groom-area">
      <div class="container">
        <div class="container-wrap">
          <BounceInLeft>
            <div slot="bounceInLeft" v-if="show">
              <h1>Gallery Classic</h1>
            </div>
          </BounceInLeft>
           <BounceInRight>
            <div slot="bounceInRight" v-if="show">
              <ul class="container-wrap-lists clearfix">
                <li class="container-wrap-list fl margin-r-5">
                  <router-link to="/home">Home</router-link>
                </li>
                 <li class="container-wrap-list fl padding-lr-10">/</li>
                <li class="container-wrap-list active fl margin-l-5">Gallery Classic</li>
              </ul>
            </div>
          </BounceInRight>
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
