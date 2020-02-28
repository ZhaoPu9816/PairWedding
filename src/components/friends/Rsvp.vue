<template>
  <div class="">
    <div class="banner-area rsvp-form-area">
        <div class="setion-over">
            <div class="container">
                <div class="title">
                  <Bounin>
                    <div class="text-center" v-if="show" slot="bounceIn">
                    <div class="main-title">RSVP</div>
                      <div class="home-locations">
                          <router-link to="/home" class="home">Home</router-link>
                          <span>/</span>
                          <router-link to="/rsvp" class="location">RSVP</router-link>
                      </div>
                    </div>
                  </Bounin>
              </div>
            </div>
        </div>
    </div>
    <div class="leave">
      <FormModel></FormModel>
    </div>
  </div>
</template>

<script>
import FormModel from '../home/formModel.vue'
import Bounin from 'comp/location/slot/BounceIn'
export default {
  data () {
    return {
      show: false
    }
  },
  components: {
    FormModel,
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
