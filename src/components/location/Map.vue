<template>
  <div class="small-map">
    <el-amap ref="map" vid="amapDemo" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amapdemo"></el-amap>
    <div class="change-view">
      <router-link to="">View large map</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      zoom: 10,
      center: [121.59995, 31.197646],
      events: {
        init: (o) => {
          o.getCity(result => {

          })
        },
        'moveend': () => {
        },
        'zoomchange': () => {
        },
        'click': (e) => {
        }
      },
      plugin: ['ToolBar']
    }
  },
  methods: {
    getmap () {

    }
  }
}
</script>

<style scoped lang="less">
.small-map {
  position: relative;
  .change-view {
    position: absolute;
    top: 25px;
    right: 20px;
    background: #fdfdfd;
    font-size: 12px;
    font-weight: 400;
    padding: 5px 15px;
    border-radius: 2px;
    a {
      color: rgb(171, 181, 247);
    }
    &:hover {
      text-decoration: underline;
      a {
        color: #115bb6;
      }
    }
  }
}
.amapdemo {
  height: 450px;
}
</style>
