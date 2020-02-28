<template>
  <div>
    <div class="cg-topnav">
      <div class="logo">
        <router-link to="/">
          <img src="~img/z-public/logo.png" alt="">
        </router-link>
      </div>
      <div class="outer">
        <div class="topnav-choose" :class="{show: !isDisplay}">
          <div v-for="(item, index) in $store.state.mainRouters" :key="item.route" @mouseleave="currentIndex = -1" @mouseenter="currentIndex = index" :class="{show: currentIndex === index}">
            <router-link :to="item.route" active-class="active">
              {{item.nowPage | upperCase}}
              <i class="fa fa-angle-down" v-if="item.children"></i>
            </router-link>
            <div class="child-routers">
              <div v-for="citem in item.children" :key="citem.route">
                <router-link :to="citem.route">{{citem.nowPage}}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="display">
        <div class="display-icon" :class="{show: isDisplay}" @click="isDisplay = !isDisplay">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="display-icon" :class="{ show: !isDisplay }" @click="isDisplay = !isDisplay">X</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      isDisplay: true,
      currentIndex: -1
    }
  },
  filters: {
    upperCase (item) {
      return item.toUpperCase()
    }
  }
}
</script>

<style scoped lang="less">
@import '~css/public-top-bottom.less';
</style>
