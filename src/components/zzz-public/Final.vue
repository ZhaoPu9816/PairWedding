<template>
  <div>
    <Top></Top>
    <div class="center-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Bottom></Bottom>
    <Aside></Aside>
  </div>
</template>

<script>
import Top from './Top'
import Bottom from './Bottom'
import Aside from './Aside'
export default {
  components: {
    Top,
    Bottom,
    Aside
  }
}

</script>

<style>
</style>
