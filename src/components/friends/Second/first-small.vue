<template>
  <div class=" scond-style coteng-box fly-content">
      <!-- 111 -->
      <div :key="index" class="coteng" v-for="(item,index) in firstlist.slice(0, 8)">
        <div class="single-friend">
          <div class="friend-box">
            <div class="friend-photo-box ">
                <div class="friend-p-wrap">
                  <img :src="item.img"/>
                </div>
            </div>
          </div>
          <div class="friend-content text-center">
            <h3 class="luck">{{item.NAME}}</h3>
            <p class="identify">{{item.groomsman}}</p>
            <div>
              <ul>
                <li class="fl">
                  <a href="/rsvp" class="icon-fri fa fa-facebook"></a>
                </li>
                <li class="fl">
                  <a href="/rsvp" class="icon-fri fa fa-twitter"></a>
                </li>
                <li class="fl">
                  <a  href="https://github.com/GreatGH/Pair-Wedding/commits/master" class="icon-fri fa fa-linkedin"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Bounin from 'comp/location/slot/BounceIn'
import smallss from './first-small'
export default {
  data () {
    return {
      firstlist: []
      // apiimg: 'http://192.168.97.236:3000/friends/'
    }
  },
  components: {
    smallss,
    Bounin
  },
  mounted () {
    this.axiosRequest({
      url: '/friend',
      method: 'get'
    }).then((res) => {
      res = res.data
      if (res.status === 200) {
        this.firstlist = res.data
      }
    })
    this.firstlist = this.$store.state.rsvp.firstlist
  }
}

</script>

<style lang="less" scoped>
@import '../../../css/friends.less';
</style>
