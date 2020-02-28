<template>
  <div class="friends-area">
      <div class="section-overlay">
          <div class="container  fly-content">
              <div class="flex-center-w">
                <div>
                  <h3 class="title">Friends Says</h3>
                  <img src="~img/friends/divider.png" alt="">
                </div>
              </div>
              <div class="carousel carousel-box-model">
                <el-carousel :interval="5000" indicator-position="outside">
                    <el-carousel-item :key="index" v-for="(item,index) in firstlist.slice(4, 7)">
                        <div class="friend-says-img">
                            <img :src="item.img"/>
                            <div class="backticks">
                                <img :src="item.img"/>
                            </div>
                        </div>
                        <div class="flex-center-w">
                            <h2 class="h2">{{item.NAME}}</h2>
                            <h3 class="h3">{{item.say}}</h3>
                        </div>
                    </el-carousel-item>
                </el-carousel>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      firstlist: []
    }
  },
  components: {

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
@import '../../css/friends.less';
</style>
