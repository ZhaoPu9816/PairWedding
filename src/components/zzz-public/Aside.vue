<template>
  <div class="aside">
    <div class="shopcar">
      <router-link to="shopcar">
        <i class="fa fa-shopping-cart"></i>
      </router-link>
    </div>
    <div class="gotop" @click="gotop">
      <router-link to>
        <i class="fa fa-arrow-up"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotop () {
      let nowScrollTop = document.documentElement.scrollTop
      let gotopTime = setInterval(() => {
        document.documentElement.scrollTop -= (nowScrollTop / 10)
        console.log(1, nowScrollTop / 10, document.documentElement.scrollTop)
        if (document.documentElement.scrollTop <= 10) {
          clearInterval(gotopTime)
        }
      }, 30)
    }
  }
}
</script>

<style lang="less" scoped>
.aside {
  text-align: center;
  // width: 80px;
  position: fixed;
  bottom: 20%;
  right: 0;
  z-index: 5;
  background-color: rgba(255, 0, 0, 0.5);
  z-index: 11;
  >div {
    font-size: 24px;
    color: #f2f2f2;
    a {
      padding: 10px 15px;
      display: inline-block;
      width: 100%;
      height: 100%;
      font-size: 24px;
      color: #f2f2f2;
    }
  }
}
</style>
