<template>
<div>
  <div class="Brid-groom-content">
    <div class="Brid-groom-area">
      <div class="container">
        <div class="container-wrap">
          <BounceInLeft>
            <div slot="bounceInLeft" v-if="show">
              <h1>Bride and Groom</h1>
            </div>
          </BounceInLeft>
          <BounceInRight>
            <div slot="bounceInRight" v-if="show">
              <ul class="container-wrap-lists clearfix">
                <li class="container-wrap-list fl">
                  <router-link to="/home">Home</router-link>
                </li>
                <li class="container-wrap-list fl padding-lr-10">/</li>
                <li class="container-wrap-list active fl">Bride & Groom</li>
              </ul>
            </div>
          </BounceInRight>
        </div>
      </div>
    </div>
  </div>
  <div class="groom-area-news">
    <NewPeoPleModule></NewPeoPleModule>
  </div>
  <BrideBanner></BrideBanner>
  <div class="module-store">
    <StoryModel></StoryModel>
  </div>
  <PublicTab></PublicTab>
</div>
</template>

<script>
import '../../Common/fontSize'
import PublicTab from './publicTab.vue'
import BrideBanner from './Bridebanner.vue'
import StoryModel from '../home/storymodel'
import NewPeoPleModule from '../home/NewPeopleModle'
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
    StoryModel,
    BrideBanner,
    NewPeoPleModule,
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
