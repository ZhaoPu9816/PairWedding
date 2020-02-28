import blogimg1 from '../images/blog/blogimg1.jpg'
import blogimg2 from '../images/blog/blogimg2.jpg'
import blogimg3 from '../images/blog/blogimg3.jpg'
import blogimg4 from '../images/blog/blogimg4.jpg'
import blogimg5 from '../images/blog/blogimg5.jpg'
import blogimg6 from '../images/blog/blogimg6.jpg'
import head1 from '../images/blog/blog-details-author-65-1.png'
let state = {
  // 每页显示的内容数据条数
  pageSize: 6,
  // 默认的当前页
  currentPage: 1,
  dataShow: [{
    id: 1,
    author: 'by John Doe',
    content: '1111111',
    blog_cover: blogimg1,
    TIME: ' 06 Sep, 2019',
    img1: blogimg1,
    img2: blogimg2,
    title: 'To Get The Best Wedding'
  }, {
    id: 2,
    author: 'by John Doe',
    content: '30 Places To Get The Best Wedding...',
    blog_cover: blogimg2,
    TIME: ' 06 Sep, 2019',
    img1: blogimg1,
    img2: blogimg2,
    title: 'To Get The Best Wedding'
  }, {
    id: 3,
    author: 'by John Doe',
    content: '35 Places To Get The Best Wedding...',
    blog_cover: blogimg3,
    TIME: ' 06 Sep, 2019',
    img1: blogimg1,
    img2: blogimg2,
    title: 'To Get The Best Wedding'
  }, {
    id: 4,
    author: 'by John Doe',
    content: '40 Places To Get The Best Wedding...',
    blog_cover: blogimg4,
    TIME: ' 06 Sep, 2019',
    img1: blogimg1,
    img2: blogimg2,
    title: 'To Get The Best Wedding'
  }, {
    id: 5,
    author: 'by John Doe',
    content: '45 Places To Get The Best Wedding...',
    blog_cover: blogimg5,
    TIME: ' 06 Sep, 2019',
    img1: blogimg1,
    img2: blogimg2,
    title: 'To Get The Best Wedding'
  }, {
    id: 6,
    author: 'by John Doe',
    content: '55 Places To Get The Best Wedding...',
    blog_cover: blogimg6,
    TIME: ' 06 Sep, 2019',
    img1: blogimg1,
    img2: blogimg2,
    title: 'To Get The Best Wedding'
  }, {
    id: 7,
    author: 'by John Doe',
    content: '60 Places To Get The Best Wedding...',
    blog_cover: blogimg5,
    TIME: ' 06 Sep, 2019'
  }, {
    id: 8,
    author: 'by John Doe',
    content: '65 Places To Get The Best Wedding...',
    blog_cover: blogimg6,
    TIME: ' 06 Sep, 2019',
    img1: blogimg1,
    img2: blogimg2,
    title: 'To Get The Best Wedding'
  }, {
    id: 9,
    author: 'by John Doe',
    content: '70 Places To Get The Best Wedding...',
    blog_cover: blogimg6,
    TIME: ' 06 Sep, 2019',
    img1: blogimg1,
    img2: blogimg2,
    title: 'To Get The Best Wedding'
  }, {
    id: 10,
    author: 'by John Doe',
    content: '75 Places To Get The Best Wedding...',
    blog_cover: blogimg5,
    TIME: ' 06 Sep, 2019',
    img1: blogimg1,
    img2: blogimg2,
    title: 'To Get The Best Wedding'
  }, {
    id: 11,
    author: 'by John Doe',
    content: '80 Places To Get The Best Wedding...',
    blog_cover: blogimg6,
    TIME: ' 06 Sep, 2019',
    img1: blogimg1,
    img2: blogimg2,
    title: 'To Get The Best Wedding'
  }],
  ComcurrentPage: 1,
  commentData: [{
    id: 1,
    name: 'liulong',
    head: head1,
    time: '2019/12/14 10:26',
    content: 'this my first comment'
  }]
}

// 改变state数据的唯一方法
let mutations = {
  blogDataShow (state, dataShow) {
    state.dataShow = dataShow
  },
  nowPage (state, pageindex) {
    state.currentPage = pageindex
  },
  singleComment (state, commentData) {
    state.commentData = commentData
  },
  ComnowPage (state, pageindex) {
    state.ComcurrentPage = pageindex
  }
}

let actions = {
}
// 监听state变化改变当前属性值
let getters = {
  totalPage (state) {
    let total = Math.ceil(state.dataShow.length / state.pageSize)
    return total
  },
  currentData (state) {
    // 当前数组截取的页数 slice（0,6）包含0 不包含6
    return state.dataShow.slice((state.currentPage - 1) * state.pageSize, state.pageSize * state.currentPage)
  },
  ComtotalPage (state) {
    let total = Math.ceil(state.commentData.length / state.pageSize)
    return total
  },
  ComcurrentData (state) {
    // 当前数组截取的页数 slice（0,6）包含0 不包含6
    return state.commentData.slice((state.ComcurrentPage - 1) * state.pageSize, state.pageSize * state.ComcurrentPage)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
