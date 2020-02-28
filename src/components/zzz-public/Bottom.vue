<template>
  <div class="public-bottom">
    <div class="bottom-outer gang-coontent">
      <div class="top-content">
        <div class="enter-email">
          <div class="top">
            <img src="~img/z-public/logo.png" alt="">
          </div>
          <div class="intro">Pellentesque convallis, diam et feugiat volutpat, tellus ligula consequat augue, quis malesuada nisi ante nec metus. Sed id pretium nunc. Mauris vitae porttitor tortor. Fusce aliquet ac metus eget egestas. </div>
          <div class="enter">
            <input type="text" placeholder="Enter your email">
            <button>
              <i class="fa fa-paper-plane-o"></i>
            </button>
          </div>
        </div>
        <div class="quick-linnks underline">
          <div class="top">QUICK LINKS</div>
          <div class="choose">
            <div v-for="item in quicklinks" :key="item.linnks">
              <router-link to="item.route">{{item.links}}</router-link>
            </div>
          </div>
        </div>
        <div class="recent-post underline">
          <div class="top">RECENT POST</div>
          <div class="choose">
            <div v-for="item in recentpost" :key="item.img" class="flex">
              <div class="recent-img">
                <img :src="item.img"/>
              </div>
              <div class="past">
                <div class="past-event">{{item.intro}}</div>
                <div class="past-time">{{item.time}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="our-gallery underline">
          <div class="top">OUR GALLERY</div>
          <div class="choose">
            <div v-for="item in gallery" :key="item.img1">
              <div class="gallery-img">
                <img :src="item.img1" alt="">
              </div>
              <div class="gallery2 gallery-img">
                <img :src="item.img2" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-icon"></div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      quicklinks: [{
        links: 'About',
        route: ''
      }, {
        links: 'Bride&Groom',
        route: '/brideGroom'
      }, {
        links: 'Location',
        route: '/location'
      }, {
        links: 'RSVP',
        route: '/rsvp'
      }, {
        links: 'OUR STORY',
        route: '/story'
      }, {
        links: 'Events',
        route: ''
      }],
      recentpost: [{
        img: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/recent-post1.jpg',
        intro: 'Pellentesque convallis, diam et feugiat volutpat, tellus',
        time: 'Sep 09, 2019'
      }, {
        img: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/recent-post2.jpg',
        intro: 'Praesent vehicula odio ut erat posuere, nec malesuada dolor',
        time: 'Sep 06, 2019'
      }, {
        img: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/recent-post3.jpg',
        intro: 'Nulla rhoncus condimentum ante, molestie mattis lorem',
        time: 'Sep 02, 2019'
      }],
      gallery: [{
        img1: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/gallery1.jpg',
        img2: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/gallery2.jpg'
      }, {
        img1: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/gallery3.jpg',
        img2: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/gallery4.jpg'
      }, {
        img1: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/gallery5.jpg',
        img2: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/gallery6.jpg'
      }]
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
@import '~css/public-top-bottom.less';
</style>
