import one from '../images/gallery/1.jpg'
import two from '../images/gallery/2.jpg'
import three from '../images/gallery/3.jpg'
import four from '../images/gallery/5.jpg'
import five from '../images/gallery/6.jpg'
import six from '../images/gallery/7.jpg'
import seven from '../images/gallery/8.jpg'
import eight from '../images/gallery/9.jpg'
import nine from '../images/gallery/10.jpg'
let state = {
  srcLists: [
    {id: 1, img: one, classify: 'bride'},
    {id: 2, img: two, classify: 'bride'},
    {id: 3, img: three, classify: 'bride'},
    {id: 4, img: four, classify: 'groom'},
    {id: 5, img: five, classify: 'friend'},
    {id: 6, img: six, classify: 'lovestory'},
    {id: 7, img: seven, classify: 'lovestory'},
    {id: 8, img: eight, classify: 'lovestory'},
    {id: 9, img: nine, classify: 'party'},
    {id: 10, img: one, classify: 'bride'},
    {id: 11, img: two, classify: 'bride'},
    {id: 12, img: three, classify: 'bride'},
    {id: 13, img: four, classify: 'groom'},
    {id: 14, img: five, classify: 'friend'},
    {id: 15, img: six, classify: 'lovestory'},
    {id: 16, img: seven, classify: 'lovestory'},
    {id: 17, img: eight, classify: 'lovestory'},
    {id: 18, img: nine, classify: 'party'}
  ]
}

let mutations = {
  setImgList (state, value) {
    state.srcLists = value
  }
}

let actions = {
}

let getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}
