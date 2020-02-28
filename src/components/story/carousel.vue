<template>
    <div class="content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="img-box">
              <img src="../../images/home/6.jpg"/>
              <div class="img-mask"></div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img-box">
              <img src="../../images/home/7.jpg"/>
              <div class="img-mask"></div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img-box">
              <img src="../../images/home/8.jpg"/>
              <div class="img-mask"></div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img-box">
              <img src="../../images/home/9.jpg"/>
              <div class="img-mask"></div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img-box">
              <img src="../../images/home/10.jpg"/>
              <div class="img-mask"></div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img-box">
              <img src="../../images/home/10.jpg"/>
              <div class="img-mask"></div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img-box">
              <img src="../../images/home/10.jpg"/>
              <div class="img-mask"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  mounted () {
    // swiper 插件
    let swiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      slidesPerView: 'auto'
    })
    console.log(swiper)
  }
}
</script>
<style lang="less" scoped>
  .content{
    margin: 0 auto;
  }
  /deep/
  .swiper-slide{
    height: 100px;
    width: 220px;
    width:auto;
    padding-right: 15px;
    .img-box{
      height: 100%;
      border: 1px solid #ccc;
      position: relative;
      .img-mask{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: red;
        opacity: 0;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    .img-box:hover .img-mask{
      display: block;
      opacity: 0.5;
      transition: all .5s ease-in-out;
    }
  }
  @media only screen and (min-width: 1180px) {
      .content{
        width: 1005px;
        .swiper-slide{
          width: 170px;
        }
      }
  }
  @media only screen and (min-width: 1040px) and (max-width: 1180px) {
    .content{
      width: 970px;
      .swiper-slide{
        width: 140px;
        height: 90px;
      }
    }
  }

  @media only screen and (min-width: 800px) and (max-width: 1040px) {
    .content{
      width: 598px;
      .swiper-slide{
        width: 150px;
        height: 100px;
      }
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 800px) {
    .content{
      width: 489px;
      .swiper-slide{
        width: 125px;
        height: 70px;
      }
    }
  }
  @media screen and (max-width:576px) {
    .content{
      width: 330px;
      .swiper-slide{
        width: 170px;
        height: 80px;
      }
    }
  }
</style>
