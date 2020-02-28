<template>
  <div class="banner-wadding-content">
    <div class="wadding-content-wrapper">
      <div class="section-wadding-content">
        <div class="section-wadding-container">
          <div class="section-row">
            <div class="text-center">
              <h2>Wedding Events</h2>
              <h3>Aliquam erat volutpat. Curabitur tempor nibh
                  quis arcu convallis, sed viverra quam sollicitudin.
                  Proin sed augue sed neque ultricies condimentum.
              </h3>
            </div>
          </div>
        </div>
        <swiper :options="swiperOption"  ref="mySwiper">
        <!-- 添加的图片 -->
        <swiper-slide>
          <img class="swiper-slide" src="../../images/gallery/events1.jpg" />
          <div class="surface-content">
            <h4>Wedding Party</h4>
            <div class="surface-content-title">
              <h6>Thurs day, 20 Oct 2019</h6>
              <h6>13.00 pm-15.00 pm</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-slide" src="../../images/gallery/events2.jpg"/>
          <div class="surface-content">
            <h4>Wedding Party</h4>
            <div class="surface-content-title">
              <h6>Thurs day, 20 Oct 2019</h6>
              <h6>13.00 pm-15.00 pm</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-slide" src="../../images/gallery/events3.jpg"/>
          <div class="surface-content">
            <h4>Wedding Party</h4>
            <div class="surface-content-title">
              <h6>Thurs day, 20 Oct 2019</h6>
              <h6>13.00 pm-15.00 pm</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi.</p>
            </div>
          </div>
        </swiper-slide>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: false
        }
        // autoplay: {
        //   stopOnLastSlide: true
        // },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../css/gallery.less';
</style>
