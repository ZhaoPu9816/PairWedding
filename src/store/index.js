
// 每个人的store
import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import blog from './blog'
import brideGroom from './gallery'
import story from './story'
import rsvp from './rsvp'
import pages from './pages'

Vue.use(Vuex)

// 公共的store
let mutations = {
  changeRouters (state, page) {
  },
  changeShow (state, show) {
    state.show = true
  },
  changeEmail (state, data) {
    state.userEmail = data
  }
}

let actions = {
}

let getters = {
  getGood (state) {
    console.log(state.goodlist)
  }
}

export default new Vuex.Store({
  state: {
    token: '',
    userEmail: '',
    mainRouters: [{
      nowPage: 'HOME',
      route: '/home',
      isHere: true
    }, {
      nowPage: 'Bride & Groom',
      route: '/brideGroom',
      isHere: false
    }, {
      nowPage: 'story',
      route: '/story',
      isHere: false
    }, {
      nowPage: 'Gallery',
      route: '/gallery',
      children: [{
        nowPage: 'Masonary Gallery Page',
        route: '/gallery/masonaryGalleryPage'
      }, {
        nowPage: 'Classic Gallery Page',
        route: '/gallery/classicGalleryPage'
      }],
      isHere: false
    }, {
      nowPage: 'RSVP',
      route: '/rsvp',
      isHere: false
    }, {
      nowPage: 'friends',
      route: '/friends',
      children: [{
        nowPage: 'Friends Style 1',
        route: '/friends/friendsStyle1'
      }, {
        nowPage: 'Friends Style 2',
        route: '/friends/friendsStyle2'
      }],
      isHere: false
    }, {
      nowPage: 'pages',
      route: '/pages',
      children: [{
        nowPage: 'Classic Gallery Page',
        route: '/pages/classicGalleryPage'
      }, {
        nowPage: 'Single Blog Page',
        route: '/pages/singleBlogPage'
      }, {
        nowPage: '404 Page',
        route: '/pages/404Page'
      }],
      isHere: false
    }, {
      nowPage: 'blog',
      route: '/blog',
      children: [{
        nowPage: 'Blog',
        route: '/blog/blog'
      }, {
        nowPage: 'Single Blog',
        route: '/blog/singleBlog'
      }],
      isHere: false
    }, {
      nowPage: 'location',
      route: '/location',
      isHere: false
    }],
    show: false
  },
  mutations,
  actions,
  getters,
  modules: {
    home,
    blog,
    brideGroom,
    story,
    rsvp,
    pages
  }
})
