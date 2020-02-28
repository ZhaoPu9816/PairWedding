<template>
  <div>
    <!-- blog 背景图片 -->
    <header class="page-banner-area blog-banner-area single">
      <div class="section-overlay d-flex">
         <div class="container">
            <div class="page-banner-wrap">
               <BounceInDown>
                 <div slot="bounceInDown" v-if="show">
                   <h1 class="page-banner-heading">Single Blog</h1>
                 </div>
               </BounceInDown>
               <BounceIn>
                 <div slot="bounceIn" v-if="show">
                    <div>
                      <ul class="breadcrumb clearfix">
                        <li class="breadcrumb-item text-capitalize">
                            <router-link to="/home">Home</router-link>
                        </li>
                        <li class="breadcrumb-item text-capitalize active">
                            Blog Single
                        </li>
                      </ul>
                  </div>
                 </div>
               </BounceIn>
            </div>
         </div>
      </div>
    </header>

    <!-- singleblog content -->
    <section class="blog-page-area">
      <div class="container">
        <div class="row clearfix">
            <div class="single-blog-details fl">
                <div id="content">
                   <div  class="block-1" >
                     <div class="card">
                        <img :src="dataShow.img1"/>
                        <div class="card-footer d-flex">
                          <div class="card-footer-box d-flex">
                            <div class="author-box">
                              <img :src="dataShow.img2" />
                              <span>{{dataShow.author}}</span>
                            </div>
                            <div class="blog-date">
                               <i class="fa fa-calendar"></i>
                                {{dataShow.TIME}}
                            </div>
                            <div class="card-footer-share">
                              <i class="el-icon-document-copy"></i>
                              03 Comments
                            </div>
                            <div class="card-footer-share">
                              <i class="fa fa-thumbs-o-up"></i>
                              30
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <h2 class="card-title text-capitalize">{{dataShow.title}}</h2>
                        </div>
                     </div>
                     <p>
                       Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem den aperiam, eaque ipsa quae
                      ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                     </p>
                     <div class="blog-content-media">
                       <img :src="dataShow.img2">
                     </div>
                     <p>
                       Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                       Neque porro quisquam est, qui dolorem ipsum quia. sed quia ipsum den consequuntur magni dolores eos.
                     </p>
                     <p>
                       Dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                     </p>
                     <p>
                       Corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
                       qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                     </p>
                     <blockquote class="position-relative">
                       <p>
                         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                       </p>
                     </blockquote>
                   </div>
                   <div class="block-2">
                     <div class="share-article d-flex justify-content-between">
                       <div class="share-box">
                         <i class="fa fa-tag"></i>
                         <a ><span>Wedding,</span></a>
                         <a ><span>Party,</span></a>
                         <a ><span>engagement</span></a>
                       </div>
                       <div class="share-box">
                         <button>
                           <i class="fa fa-share-alt"></i>
                           <span>Share this article</span>
                         </button>
                       </div>
                     </div>
                     <div class="about-author d-flex justify-content-between">
                       <div class="author-img blog-writer">
                         <img src="../../images/blog/blog-writer.png"/>
                       </div>
                       <div class="author-details">
                         <h4>John Doe</h4>
                         <p>
                           Ut enim ad minima veniam, quis nostrum exerci tationem ullam corporis suscipit den ser mori ten laboriosam, nisi ut aliquid ex ea commodi consequatur.
                         </p>
                         <div class="author-social">
                           <ul>
                             <li>
                               <a><i class="fa fa-facebook"></i></a>
                             </li>
                             <li>
                               <a><i class="fa fa-twitter"></i></a>
                             </li>
                             <li>
                               <a><i class="fa fa-linkedin"></i></a>
                             </li>
                             <li>
                               <a><i class="fa fa-pinterest-square"></i></a>
                             </li>
                           </ul>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div class="block-3">
                     <h2>3 Comments</h2>
                     <div class="blog-comments-section">
                       <div :key="index" v-for="(item, index) in commentData" class="main-comment">
                         <div class="about-author d-flex flex-betwe">
                           <div class="author-img">
                             <img :src="item.head" />
                           </div>
                           <div class="author-details">
                             <div class="d-flex justify-content-between align-items-center">
                               <h4 class="author-name">
                                 {{item.name}}
                                 <span class="comment-date-time">{{item.time.slice(0,10)+'  ' +item.time.slice(11,19)}}</span>
                               </h4>
                               <span class="reply-btn">Reply</span>
                             </div>
                             <div class="comment-content">{{item.content}}</div>
                           </div>
                         </div>
                       </div>
                       <!-- 分页按钮组 -->
                       <div class="page">
                          <ul class="pagination clearfix flex-center">
                              <li class="page-item stic">
                                <a class="page-link "  v-on:click="prePage">Prev</a>
                              </li>
                              <li class="page-item" :key="index" v-for="(item, index) in ComtotalPage">
                                <a class="page-link"  v-on:click="toPage(item)" :class="{active: ComcurrentPage == item}">{{ item }}</a>
                              </li>
                              <li class="page-item">
                                <a class="page-link"  v-on:click="nextPage">Next</a>
                              </li>
                          </ul>
                       </div>
                     </div>
                     <div class="leave-comment-area">
                       <h2>Leave a Comment</h2>
                       <!-- form表单验证 -->
                       <el-form label-position="top" :rules="rules" label-width="80px" :model="Form" ref="Form">
                          <div class="row">
                            <el-form-item  label="Full Name"  prop="name"  class="col-sm-6">
                              <el-input v-model="Form.name"></el-input>
                            </el-form-item>
                            <el-form-item  prop="email"  label="Email"  class="col-sm-6">
                              <el-input v-model="Form.email"></el-input>
                            </el-form-item>
                           <el-form-item  prop="content"  label="Content"  class="col-sm-12">
                              <el-input type="textarea" v-model="Form.content"></el-input>
                            </el-form-item>
                            <el-form-item class="col-sm-12">
                              <el-button class="text-uppercase btn" @click="submitForm('Form')">
                                submit
                                <div class="bgposition">submit</div>
                              </el-button>
                              <el-button class="text-uppercase btn" @click="resetForm('Form')">
                                cancel
                                <div class="bgposition">cancel</div>
                              </el-button>
                            </el-form-item>
                          </div>
                       </el-form>
                     </div>
                   </div>
                </div>
            </div>
            <div class="single-blog-aside fr">
              <aside class="sidebar wedding-widget-area" id="sidebar">
                <div class="widget widget-search" id="search">
                    <form class="form-inline">
                      <input type="text" class="form-control font-14" id="blog_search" placeholder="Search" />
                      <button type="submit" class="btn bg-orange font-14">
                        <i class="fa fa-search"></i>
                      </button>
                    </form>
                </div>
                <div class="widget widget-categories" id="categories">
                  <h4 class="widget-title font-w-semi-b position-relative">Categories</h4>
                  <ul>
                    <li><a >Venue(15)</a></li>
                    <li><a >Photography(20)</a></li>
                    <li><a >party(21)</a></li>
                    <li><a >decoration(74)</a></li>
                    <li><a >dress(10)</a></li>
                  </ul>
                </div>
                <div class="widget widget-recent-posts" id="recent-posts">
                  <h4 class="widget-title font-w-semi-b position-relative">Recent Posts</h4>
                  <ul>
                    <li :key="index" v-for="(item, index) in img">
                      <a class="d-flex align-items-center">
                        <figure>
                          <img :src="item.src">
                          <div class="abslut"></div>
                        </figure>
                        <p>
                          Best  & Top Bridal Bouquet Collection
                          <span>July 04, 2019</span>
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="widget widget-popular-tags" id="popular-tags">
                  <h4 class="widget-title font-w-semi-b position-relative">
                    Popular Tags
                  </h4>
                  <ul>
                    <li>
                      <a >Wedding</a>
                    </li>
                     <li>
                      <a >party</a>
                    </li>
                     <li>
                      <a >bridal</a>
                    </li>
                     <li>
                      <a >dress</a>
                    </li>
                     <li>
                      <a >vendor</a>
                    </li>
                     <li>
                      <a >henna</a>
                    </li>
                    <li>
                      <a >Makeup</a>
                    </li>
                    <li>
                      <a >engagement</a>
                    </li>
                  </ul>
                </div>
                <div class="widget widget-instagram" id="instagram">
                  <h4 class="widget-title position-relative">
                    Instagram
                  </h4>
                  <ul>
                    <li :key="index" v-for="(item, index) in imges">
                      <a >
                        <figure>
                          <img :src="item.img1" />
                          <div class="abslut"></div>
                        </figure>
                      </a>
                      <a >
                        <figure>
                          <img :src="item.img2" />
                          <div class="abslut"></div>
                        </figure>
                      </a>
                      <a >
                        <figure>
                          <img :src="item.img3" />
                          <div class="abslut"></div>
                        </figure>
                      </a>
                      <a >
                        <figure>
                          <img :src="item.img4" />
                          <div class="abslut"></div>
                        </figure>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BounceInLeft from 'comp/location/slot/BounceInLeft'
import BounceIn from 'comp/location/slot/BounceIn'
import BounceInDown from 'comp/location/slot/BounceInDown'
import BounceInRight from 'comp/location/slot/BounceInRight'
export default {
  data () {
    return {
      imges: [
        {
          img1: require('../../images/blog/sidebar-instagram-img-1.jpg'),
          img2: require('../../images/blog/sidebar-instagram-img-2.jpg'),
          img3: require('../../images/blog/sidebar-instagram-img-3.jpg'),
          img4: require('../../images/blog/sidebar-instagram-img-4.jpg')
        },
        {
          img1: require('../../images/blog/sidebar-instagram-img-5.jpg'),
          img2: require('../../images/blog/sidebar-instagram-img-6.jpg'),
          img3: require('../../images/blog/sidebar-instagram-img-7.jpg'),
          img4: require('../../images/blog/sidebar-instagram-img-8.jpg')
        },
        {
          img1: require('../../images/blog/sidebar-instagram-img-9.jpg'),
          img2: require('../../images/blog/sidebar-instagram-img-10.jpg'),
          img3: require('../../images/blog/sidebar-instagram-img-11.jpg'),
          img4: require('../../images/blog/sidebar-instagram-img-12.jpg')
        }
      ],
      img: [
        {src: require('../../images/blog/sidebar-recent-posts-1.jpg')},
        {src: require('../../images/blog/sidebar-recent-posts-2.jpg')},
        {src: require('../../images/blog/sidebar-recent-posts-3.jpg')}
      ],
      Form: {
        name: '',
        email: '',
        content: ''
      },
      show: false,
      // block
      dataShow: [],
      // commentData: [],
      rules: {
        name: [
          {required: true, message: '用户名不能为空！', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入邮箱地址！', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址！', trigger: ['blur']}
        ],
        content: [
          {required: true, message: '内容不能为空！', trigger: 'blur'}
        ]
      }
    }
  },
  components: {
    BounceInLeft,
    BounceIn,
    BounceInRight,
    BounceInDown
  },
  methods: {
    // block数据渲染 content内容
    // 提交按钮
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axiosRequest({
            method: 'post',
            url: '/submitmessage',
            data: {
              name: this.Form.name,
              email: this.Form.email,
              content: this.Form.content
            }
          }).then((res) => {
            if (res.status === 200) {
              this.$message({
                message: '评论成功',
                type: 'success'
              })
              this.$refs[formName].resetFields()
              this.$router.go(0)
            }
          })
        } else {
          return false
        }
      })
    },
    // 取消按钮
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 下一页
    nextPage: function () {
      var next = this.ComcurrentPage
      next++
      // 限制next跳转的范围
      next = next > this.ComtotalPage ? this.ComtotalPage : next
      // 触发store里面nowPage改变
      this.$store.commit('ComnowPage', next)
    },
    // 上一页
    prePage: function () {
      var pre = this.ComcurrentPage
      if (pre > 1) {
        pre--
        this.$store.commit('ComnowPage', pre)
      }
    },
    // 跳转至某一页
    toPage: function (page) {
      var clickPage = this.ComcurrentPage
      clickPage = page
      this.$store.commit('ComnowPage', clickPage)
    }
  },
  mounted () {
    this.show = true
    this.axiosRequest({
      method: 'get',
      url: '/blog/'
    }).then((res) => {
      if (res.status === 200) {
        this.dataShow = res.data.data[0]
      }
    })
    this.dataShow = this.$store.state.blog.dataShow[0]
    // 评论内容渲染
    this.axiosRequest({
      method: 'get',
      url: '/comments'
    }).then((res) => {
      if (res.status === 200) {
        this.$store.commit('singleComment', res.data.data)
      }
    })
  },
  computed: {
    // 数据存储在state里面 从数据存储在state里面拿到数据 res.data.data的内容替换中blogDataShow改变
    commentData () {
      return this.$store.getters.ComcurrentData
    },
    // 当前页的内容
    ComcurrentPage () {
      return this.$store.state.blog.ComcurrentPage
    },
    // axios后台数据的总页数
    ComtotalPage () {
      return this.$store.getters.ComtotalPage
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../css/blog.less';
</style>
