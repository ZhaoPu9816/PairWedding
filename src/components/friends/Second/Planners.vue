<template>
  <div>
      <div class="main-plan">
          <div class="fly-content text-conten">
              <div>
                  <h2 class="h2">Planners</h2>
                  <img src="~img/friends/divider.png" alt="">
                  <h3 class="neque">"Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum. "</h3>
              </div>
          </div>
          <div>
              <Botof></Botof>
          </div>
      </div>
  </div>
</template>

<script>
import Botof from 'comp/story/carousel'
export default {
  data () {
    return {

    }
  },
  components: {
    Botof
  }
}
</script>

<style lang="less" scoped>
@import '../../../css/friends.less';
</style>
