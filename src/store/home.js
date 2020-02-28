import Story1 from '../images/home/1.jpg'
import Story2 from '../images/home/2.jpg'
import Story3 from '../images/home/3.jpg'
import Story4 from '../images/home/4.jpg'
import BridePhoto1 from '../images/home/bride-photo.jpg'
import BridePhoto2 from '../images/home/groom-photo.jpg'
let state = {
  storyLists: [{
    id: 1,
    story_img: Story1,
    title: 'Our First Proposed',
    TIME: '21 sept 2019',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi'
  }, {
    id: 2,
    story_img: Story2,
    title: 'Living Together',
    TIME: '21 sept 2019',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi'
  }, {
    id: 3,
    story_img: Story3,
    title: 'Our First Meet',
    TIME: '21 sept 2019',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi'
  }, {
    id: 4,
    story_img: Story4,
    title: 'First “I Love You”',
    TIME: '21 sept 2019',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi'
  }],
  newpeopleList: [{
    id: 1,
    bride_img: BridePhoto1,
    groom_img: BridePhoto2,
    bride: 'Alice',
    groom: 'Mark',
    bride_introduce: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi. Integer pretium tortor nec purus sollicitudin condimentum.',
    groom_introduce: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi. Integer pretium tortor nec purus sollicitudin condimentum.'
  }]
}

let mutations = {
  setStoryList (state, storyModel) {
    state.storyLists = storyModel
  },
  setNewList (state, newModel) {
    state.newpeopleList = newModel
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
