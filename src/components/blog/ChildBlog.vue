<template>
  <div>
    <!-- blog 背景图片 -->
    <header class="page-banner-area blog-banner-area">
      <div class="section-overlay d-flex">
         <div class="container">
              <div class="page-banner-wrap">
                <BounceInLeft>
                  <div slot="bounceInLeft" v-if="show">
                    <h1 class="page-banner-heading">Blog</h1>
                  </div>
                </BounceInLeft>
                <BounceInRight>
                  <div slot="bounceInRight" v-if="show">
                    <div>
                        <ul class="breadcrumb clearfix">
                          <li class="breadcrumb-item text-capitalize">
                              <router-link to="/home">Home</router-link>
                          </li>
                          <li class="breadcrumb-item text-capitalize active">
                              Blog
                          </li>
                        </ul>
                    </div>
                  </div>
                </BounceInRight>
              </div>
         </div>
      </div>
    </header>
    <!-- 分页 -->
    <section class="blog-page-area">
       <div class="container">
         <!-- 分页内容 -->
          <ul class="blog-lists-box">
             <li class="blog-list" :key="index" v-for="(item, index) in dataShow" :class="{ 'alt': index%2 == 1 }">
                <div class="card">
                    <div class="blog-overlay">
                      <router-link to="/blog/singleBlog">
                        <figure>
                          <img :src="item.blog_cover"/>
                          <figcaption></figcaption>
                        </figure>
                      </router-link>
                    </div>
                    <div class="card-body">
                       <router-link to="/blog/singleBlog">
                         <h4 class="card-title">{{item.content}}</h4>
                       </router-link>
                       <div class="card-footer">
                         <div class="card-footer-box d-flex">
                           <div class="author-box">
                             <a href="#">
                               <img :src="header1"/>
                               <span>{{item.author}}</span>
                             </a>
                           </div>
                           <div class="blog-date text-uppercase">
                             <i class="fa fa-calendar"></i>
                             <span>{{item.TIME}}</span>
                           </div>
                         </div>
                       </div>
                    </div>
                </div>
              </li>
          </ul>
          <!-- 分页按钮组 -->
          <div class="page">
             <ul class="pagination clearfix flex-center">
                <li class="page-item stic">
                   <a class="page-link "  v-on:click="prePage">Prev</a>
                </li>
                <li class="page-item" :key="index" v-for="(item, index) in totalPage">
                   <a class="page-link"  v-on:click="toPage(item)" :class="{active: currentPage == item}">{{ item }}</a>
                </li>
                <li class="page-item">
                   <a class="page-link"  v-on:click="nextPage">Next</a>
                </li>
             </ul>
          </div>
       </div>
    </section>
  </div>
</template>

<script>
import header1 from '../../images/blog/header1.png'
import BounceInLeft from 'comp/location/slot/BounceInLeft'
import BounceInRight from 'comp/location/slot/BounceInRight'
export default {
  data () {
    return {
      show: false,
      header1: header1
    }
  },
  // 定义组件
  components: {
    BounceInLeft,
    BounceInRight
  },
  methods: {
    // 下一页
    nextPage: function () {
      var next = this.currentPage
      next++
      // 限制next跳转的范围
      next = next > this.totalPage ? this.totalPage : next
      // 触发store里面nowPage
      this.$store.commit('nowPage', next)
    },
    // 上一页
    prePage: function () {
      var pre = this.currentPage
      if (pre > 1) {
        pre--
        this.$store.commit('nowPage', pre)
      }
    },
    // 跳转至某一页
    toPage: function (page) {
      var clickPage = this.currentPage
      clickPage = page
      this.$store.commit('nowPage', clickPage)
    },
    // 渲染blog 页面内容
    getlists () {
      // 相当于ajax请求
      this.axiosRequest({
        method: 'get',
        url: '/blog/'
      }).then((res) => {
        if (res.status === 200) {
          // 页面请求成功时触发state中的内容改变
          this.$store.commit('blogDataShow', res.data.data)
        }
      })
    }
  },
  // 页面加载完成后
  mounted () {
    this.getlists()
    this.show = true
  },
  // computed和data功能相同定义属性
  computed: {
    // 数据存储在state里面 从数据存储在state里面拿到数据 res.data.data的内容替换中blogDataShow改变
    dataShow () {
      return this.$store.getters.currentData
    },
    // 当前页的内容
    currentPage () {
      return this.$store.state.blog.currentPage
    },
    // axios后台数据的总页数
    totalPage () {
      return this.$store.getters.totalPage
    }
  }
}

</script>
<style lang="less" >
@import '../../css/blog.less';
</style>
