<template>
      <div class="tab-box">
        <ul class="tab-title">
          <li :class="{ classred:index==current}" :key="index"  @click="filt = item.name ;addClass(index)"  v-for="(item,index) in tabitems">{{item.name}}</li>
        </ul>
        <transition-group tag="ul"  class="lists" name="animate">
          <li class="animate-item" :key="item.id" v-for="item in filteredItems">
            <el-image
              :src="item.img"
              :preview-src-list="imgList1">
            </el-image>
          </li>
        </transition-group>
      </div>
</template>

<script>
export default {
  data () {
    return {
      current: 0,
      srcLists: [],
      tabitems: [
        {name: 'all'},
        {name: 'bride'},
        {name: 'groom'},
        {name: 'lovestory'},
        {name: 'friend'},
        {name: 'party'}],
      filt: 'all'
    }
  },
  computed: {
    filteredItems () {
      var result
      if (this.filt !== 'all') {
        var filt = this.filt
        result = this.srcLists.filter(function (a) {
          return a.classify === filt
        })
      } else {
        result = this.srcLists
      }
      return result
    },
    imgList1 () {
      let imgList = this.filteredItems.map((item) => {
        return item.img
      })
      return imgList
    }
  },
  methods: {
    addClass (index) {
      this.current = index
    }
  },
  created () {
    this.axiosRequest({
      url: '/gallery/',
      method: 'get'
    }).then((res) => {
      if (res.status === 200) {
        this.srcLists = res.data.data
      }
    })
  },
  mounted () {
    this.srcLists = this.$store.state.story.srcLists
  }
}
</script>
<style lang="less" scoped>
  .tab-box{
    width: 80%;
    margin: 0 auto;
  }

  .lists:after {
    clear: both;
    content: '';
    display: block;
  }
  .lists {
    width: 100%;
    column-count: 3;
    column-gap: 10px;
  }
  .lists li {
    text-align: center;
    margin-bottom: 10px;
  }
  .animate-item {
    transition: all 1s;
    display: inline-block;
  }
  .animate-enter, .animate-leave-to
  {
    opacity: 0;
    transform: translateY(50px);
  }
  .animate-leave-active {
    position: absolute;
  }
  .tab-title{
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
    li{
      display: inline-block;
      margin: 10px 10px;
      cursor: default;
      text-transform: capitalize;
    }
  }
  .tab-title{
    .classred{
      border-bottom: 1px solid #ff4061;
      color:#ff4061 ;
    }
  }
  .tab-title{
    li:hover{
      border-bottom: 1px solid #ff4061;
      color:#ff4061 ;
    }
  }
  /deep/
  .el-image{
    img:hover{
      transform: scale(1.1);
      transition: all ease-in-out 0.7s;
      opacity: 0.8;
    }
  }
  @media screen and (max-width:576px) {
    .lists {
      column-count: 2;
    }
    .tab-title li{
      font-size: 12px;
      margin: 10px 5px;
    }
  }
@media only screen and (min-width: 768px){
  /deep/
  .el-icon-circle-close{
    font-size: 30px;
  }
}
</style>
