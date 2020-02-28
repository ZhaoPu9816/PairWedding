<template>
  <div class="shopcar dis-fixed">
    <div class="shopcar-title">
      <div>
        <img src="~img/z-public/logo.png" alt="">
      </div>
      <div class="title-name">婚礼预约订单</div>
    </div>
    <div class="menu">
      <div class="header">
        <div class="check-all">
          <input type="checkbox" @click="allChoosed" :class="{show: allChoose}" id="allchoose">
          <label for="allchoose">全选</label>
        </div>
        <div v-for="item in menuheader" class="header-nav" :key="item">{{item}}</div>
      </div>
      <div class="all-shop header" v-for="(item, index) in shops" :key="item.position">
        <div class="check-all">
          <input type="checkbox" @click="changeChoose(index)" :class="{show: isChoosed[index]}">
        </div>
        <div class="header-nav">{{item.position}}</div>
        <div class="header-nav">
          <img :src="item.img" alt="" @click="changeSize(index)">
        </div>
        <div class="header-nav">{{item.price | price}}</div>
      </div>
      <div class="header buy">
        <div @click="judgeToken">提交订单</div>
      </div>
    </div>
    <div class="pic-model" v-show="show">
      <div class="outer" ref="picModelpar">
        <div class="inner" ref="picModel">
          <img v-for="item in modelImg" :key="item" :src="item" alt="">
        </div>
      </div>
      <div class="left-arrow arrow" @click="arrowClick(-1)">
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="right-arrow arrow" @click="arrowClick(1)">
        <i class="fa fa-angle-right"></i>
      </div>
      <div class="close" @click="close">X</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      carosoIndex: 0,
      show: false,
      allChoose: false,
      isChoosed: [false, false, false],
      choose: ['海滩', '森林', '小路'],
      yourchoose: '海滩',
      menuheader: ['拍摄地点', '预览', '价格'],
      shops: [{
        position: '海滩',
        img: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/gallery5.jpg',
        price: 12988.99
      }, {
        position: '森林',
        img: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/gallery6.jpg',
        price: 6988.99
      }, {
        position: '小路',
        img: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/gallery3.jpg',
        price: 9988.99
      }, {
        position: '自定义',
        img: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/gallery3.jpg',
        price: 16888.99
      }],
      modelImg: []
    }
  },
  methods: {
    allChoosed () {
      this.allChoose = !this.allChoose
      this.isChoosed = this.isChoosed.map(() => this.allChoose)
    },
    changeChoose (index) {
      this.isChoosed.splice(index, 1, !this.isChoosed[index])
      if (this.isChoosed.filter(item => item).length === this.isChoosed.length) {
        this.allChoose = true
      } else {
        this.allChoose = false
      }
    },
    changeSize (index) {
      this.show = true
      this.axiosRequest({
        url: '/cart',
        method: 'post'
      }).then(res => {
        this.modelImg = []
        this.index = 0
        let imgArr = []
        res.data.data.forEach(item => {
          imgArr.push(item.img)
        })
        this.modelImg = imgArr
        this.$nextTick(() => {
          for (let item of this.$refs.picModel.children) {
            item.style.width = this.$refs.picModelpar.offsetWidth + 'px'
          }
          this.$refs.picModel.style.width = this.$refs.picModelpar.offsetWidth * this.$refs.picModel.children.length + 'px'
        })
      }).catch(err => {
        console.log(err)
      })
    },
    arrowClick (direct) {
      let arrowImg = document.querySelectorAll('.pic-model img')
      if ((direct === 1 && this.index < arrowImg.length - 1) || (direct === -1 && this.index > 0)) {
        this.index += direct
      }
      arrowImg[0].parentNode.style.left = -arrowImg[0].clientWidth * this.index + 'px'
    },
    judgeToken () {
      if (this.$store.state.token !== 'login') {
        this.$router.replace({path: '/login'})
      } else {
        let bought = {}
        bought.shop = []
        bought.shop = this.isChoosed.map((item, index) => {
          if (item) {
            return this.shops[index]
          }
        }).filter(item => item)
        bought.user = this.$store.state.userEmail
        console.log(bought)
        if (bought.length === 0) {
          this.$message({
            type: 'error',
            message: '您没有选择商品'
          })
        } else {
          this.axiosRequest({
            url: '/sendorder',
            data: bought,
            method: 'post'
          }).then(res => {
            let _this = this
            console.log(res)
            this.$message({
              type: 'success',
              message: '您的订单已发送，我们将于三个工作日内与您联系'
            })
            setTimeout(() => {
              _this.$router.replace('/home')
            }, 5000)
            console.log('buy：' + res.data.data)
          }).catch(err => {
            this.$message({
              type: 'error',
              message: '服务器崩溃，操作失败'
            })
            console.log(err)
          })
        }
      }
    },
    close () {
      this.show = false
      this.index = 0
      this.$refs.picModel.style.left = 0
    }
  },
  filters: {
    price (num) {
      return '$' + num.toFixed(2)
    }
  },
  mounted () {
    document.querySelectorAll('.header input[type=checkbox]').forEach(item => {
      this.isChoosed.push(false)
    })
    this.isChoosed.shift()
  }
}
</script>

<style lang="less" scoped>
@import '~css/shopcar.less';
</style>
