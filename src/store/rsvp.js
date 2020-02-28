import imbg1 from '../images/friends/1.png'
import imbg2 from '../images/friends/2.png'
import imbg3 from '../images/friends/3.png'
import imbg4 from '../images/friends/4.png'
import imbg5 from '../images/friends/5.png'
import imbg6 from '../images/friends/6.png'
import imbg7 from '../images/friends/7.png'
import imbg8 from '../images/friends/8.png'

let state = {
  firstlist: [{
    id: 1,
    NAME: 'mali',
    groomsman: 'Groomman',
    img: imbg1,
    say: '“Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum.”'
  }, {
    id: 2,
    NAME: 'mark',
    groomsman: 'Groomman',
    img: imbg2,
    say: '“Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum.”'
  }, {
    id: 3,
    NAME: 'mali',
    groomsman: 'Groomman',
    img: imbg3,
    say: '“Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum.”'
  }, {
    id: 4,
    NAME: 'mark',
    groomsman: 'Groomman',
    img: imbg4,
    say: '“Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum.”'
  }, {
    id: 5,
    NAME: 'mali',
    groomsman: 'Groomman',
    img: imbg5,
    say: '“Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum.”'
  }, {
    id: 6,
    NAME: 'mark',
    groomsman: 'Groomman',
    img: imbg6,
    say: '“Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum.”'
  }, {
    id: 7,
    NAME: 'mali',
    groomsman: 'Groomman',
    img: imbg7,
    say: '“Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum.”'
  }, {
    id: 8,
    NAME: 'mark',
    groomsman: 'Groomman',
    img: imbg8,
    say: '“Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum.”'
  }]
}

let mutations = {
  setFirtsList (state, friendsModel) {
    state.firstlist = friendsModel
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
