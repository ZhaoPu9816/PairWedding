<template>
  <div>
    <div class="home-banner-box">
      <div class="love-area zoom-heart position-relative">
        <div class="news-content-warp zoom-heart-background"></div>
        <div class="home-container my-home">
          <div class="row-module">
            <div class="banner-caption text-left position-relative">
              <div class="banner-content">
                <img :src="LoveImg" alt="loveimg" class="banner-content-img position-absolute"/>
                <div class="banner-inner-text">
                  <h3>We’re getting Married</h3>
                  <h1>Mark & Alice</h1>
                  <p>February 15, 2022</p>
                </div>
              </div>
              <!-- cutdown -->
              <div class="event-count">
                <!-- time -->
                <div class="event-count-box" v-for="(item, index) in time" :key="index">
                  <div class="dash day_dash">
                    <div class="digit">
                      <div class="top" v-for="item1 in item.nowtime" :key="item1.name">{{item1}}</div>
                    </div>
                  </div>
                  <span class="dash_title text-capitalize text-center font-18">{{item.name}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bride-groom-area">
      <div class="row-module flex-center-w">
        <div class="title-content text-center">
          <h2 class="color-pink">Bride & Groom</h2>
          <img :src="Divider" class="margin-t-20"/>
          <h3 class="font-16">Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum. </h3>
        </div>
      </div>
      <NewPeopleModle></NewPeopleModle>
    </div>
    <div class="love-story-area">
      <div class="row-module flex-center-w">
        <div class="title-content text-center">
          <h2 class="color-pink">Love Story</h2>
          <img :src="Divider" class="margin-t-20"/>
          <h3 class="font-16">Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum. </h3>
        </div>
      </div>
      <StoryModel></StoryModel>
    </div>
    <div class="our-gallery-area">
      <div class="row-module flex-center-w">
        <div class="title-content text-center">
          <h2 class="color-pink">Our Gallery</h2>
          <img :src="Divider" class="margin-t-20"/>
          <h3 class="font-16">Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum. </h3>
        </div>
      </div>
      <Tab></Tab>
    </div>
    <div class="bride-rsvg-area">
      <div class="row-module flex-center-w">
        <div class="title-content text-center">
          <h2 class="color-pink">RSVP</h2>
          <img :src="Divider" class="margin-t-20"/>
          <h3 class="font-16">Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum. </h3>
        </div>
      </div>
      <FormModel></FormModel>
    </div>
    <div class="our-best-friends-area">
      <div class="row-module flex-center-w">
        <div class="title-content text-center">
          <h2 class="color-pink">Our Best Friends</h2>
          <img :src="Divider" class="margin-t-20"/>
          <h3 class="font-16">Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum. </h3>
        </div>
      </div>
      <HomeFriends></HomeFriends>
    </div>
    <Carousel></Carousel>
    <div class="planners-area">
      <div class="row-module flex-center-w">
        <div class="title-content text-center">
          <h2 class="color-pink">Planners</h2>
          <img :src="Divider" class="margin-t-20"/>
          <h3 class="font-16">Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum. </h3>
        </div>
      </div>
      <footerCalsoul></footerCalsoul>
    </div>
  </div>
</template>

<script>
import NewPeopleModle from './NewPeopleModle'
import StoryModel from './storymodel'
import FormModel from './formModel'
import HomeFriends from '../friends/first-small'
import Carousel from '../friends/carousel'
import footerCalsoul from '../story/carousel'
import LoveImg from '../../images/home/header-love-bg.png'
import Divider from '../../images/home/divider.png'
import Tab from '../story/tabList.vue'
export default {
  data () {
    return {
      LoveImg,
      Divider,
      time: [{
        nowtime: [0, 0],
        name: 'day'
      }, {
        nowtime: [0, 0],
        name: 'hour'
      }, {
        nowtime: [0, 0],
        name: 'minute'
      }, {
        nowtime: [0, 0],
        name: 'second'
      }]
    }
  },
  components: {
    NewPeopleModle,
    FormModel,
    StoryModel,
    Carousel,
    HomeFriends,
    footerCalsoul,
    Tab
  },
  created () {
    this.countTime()
  },
  computed: {
    getmytime (time, name) {
      let gewei = time % 10
      let shiwei = Math.floor(time / 10)
      let day = {}
      day.nowtime = [shiwei, gewei]
      day.name = name
      return day
    }
  },
  methods: {
    countTime () {
      var date = new Date()
      var now = date.getTime()
      var endDate = new Date('2019-12-30 23:23:23')
      var end = endDate.getTime()
      var times = end - now
      if (times >= 0) {
        let day1 = Math.floor(times / 1000 / 60 / 60 / 24)
        let day = this.$options.computed.getmytime(day1, 'day')
        this.time.splice(0, 1, day)
        let hour1 = Math.floor((times / 1000 / 60 / 60) % 24)
        day = this.$options.computed.getmytime(hour1, 'hour')
        this.time.splice(1, 1, day)
        let minute1 = Math.floor((times / 1000 / 60) % 60)
        day = this.$options.computed.getmytime(minute1, 'minute')
        this.time.splice(2, 1, day)
        let second1 = Math.floor((times / 1000) % 60)
        day = this.$options.computed.getmytime(second1, 'second')
        this.time.splice(3, 1, day)
        setTimeout(this.countTime, 1000)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../css/home.less';
</style>
