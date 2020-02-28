<template>
  <div class="locations">
    <div class="banner">
        <div class="img">
          <bounceIn>
            <img src="~img/z-public/location-banner.jpg" alt="" slot="bounceIn" v-if="$store.state.show">
          </bounceIn>
        </div>
      <div class="title">
        <div>
          <bounceInDown>
            <div class="main-title" slot="bounceInDown" v-if="$store.state.show">
              locations
            </div>
          </bounceInDown>
          <bounceInLeft>
          <div class="home-locations" v-if="$store.state.show" slot="bounceInLeft">
            <router-link to="/home" class="home">Home</router-link>
            <span>/</span>
            <router-link to="/location" class="location">Locations</router-link>
          </div>
          </bounceInLeft>
        </div>
      </div>
    </div>
    <div class="relative gang-coontent">
      <div class="top flex-betwe-w">
        <div v-for="item in relative" :key="item.method" :class="item.class">
          <div class="flex-center">
            <div>
              <i :class="item.icon"></i>
            </div>
            <div class="detail">
              <div class="title">{{item.method}}</div>
              <div class="all-detail">
                <div>{{item.detail1}}</div>
                <div>{{item.detail2}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map">
        <mapdemo></mapdemo>
      </div>
    </div>
  </div>
</template>
<script>
import bounceInDown from './slot/BounceInDown'
import bounceInLeft from './slot/BounceInLeft'
import bounceInRight from './slot/BounceInRight'
import bounceIn from './slot/BounceIn'
import mapdemo from './Map'
export default {
  data () {
    return {
      show: false,
      relative: [{
        class: 'phone',
        icon: 'fa fa-phone',
        method: 'Phone',
        detail1: '+124 (2486) 444',
        detail2: '+133 (4444) 878'
      }, {
        class: 'email',
        icon: 'fa fa-at',
        method: 'E-mail',
        detail1: 'info@andit.com',
        detail2: 'support@andit.com'
      }, {
        class: 'location',
        icon: 'fa fa-map-marker',
        method: 'Location',
        detail1: '32, Ahsan Ahmed Road,',
        detail2: 'Chotomirzapur, Khulna.'
      }]
    }
  },
  components: {
    mapdemo,
    bounceInDown,
    bounceInLeft,
    bounceInRight,
    bounceIn
  },
  methods: {
    handleScroll () {
      console.log(111)
    }
  },
  // created () {
  //   window.addEventListener('resize', this.handleScroll)
  // },
  mounted () {
    this.$store.commit('changeShow')
    // this.$router.options.scrollBehavior()
  }
}
</script>

<style lang="less" scoped>
.map {
  width: 100%;
}
img {
  transition: all 1s ease-out;
}
img:hover {
  transform: scale(1.1)
}
@import '~css/location.less';
</style>
