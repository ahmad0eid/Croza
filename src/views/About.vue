<template>
  <div class="about">
    <!-- start header -->
    <div class="header">
      <div class="container">
        <h1>Every Thing About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem placeat sequi tenetur laboriosam rem. Sed dicta repellendus cupiditate, pariatur eum praesentium, porro explicabo dignissimos voluptate facilis soluta laborum numquam ut!</p>
      </div>
    </div>
    <!-- end header -->
    <!-- start section 1 -->
    <div class="section1">
      <h4>TESTIMONIAL</h4>
      <h1>What Clients Say !?</h1>
      <i class="fas fa-quote-left back"></i>
      <div class="container">
        <div class="swiper-container">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
              <!-- Slides -->
            <div class="swiper-slide">
              <i class="fas fa-quote-left"></i>
              <div class="row">
                <div class="col-lg-5 col-sm-6 col-xs-12">
                  <div class="sliderPerson">
                    <img src="../assets/img/about/section1/male2.jpeg" alt="">
                  </div>
                </div>
                <div class="col-lg-7 col-sm-6 col-xs-12">
                  <div class="sliderInfo">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus vero voluptas deserunt, sunt dolorum cumque rerum veniam aspernatur in consectetur</p>
                    <div class="personInfo">
                      <img src="../assets/img/about/section1/male2.jpeg" alt="">
                      <div class="infoInfo">
                        <p class="name">Adam Smith</p>
                        <p>civil engineer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <i class="fas fa-quote-left"></i>
              <div class="row">
                <div class="col-lg-5 col-sm-6">
                  <div class="sliderPerson">
                    <img src="../assets/img/about/section1/female.jpeg" alt="">
                  </div>
                </div>
                <div class="col-lg-7  col-sm-6">
                  <div class="sliderInfo">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus vero voluptas deserunt, sunt dolorum cumque rerum veniam aspernatur in consectetur</p>
                    <div class="personInfo">
                      <img src="../assets/img/about/section1/female.jpeg" alt="">
                      <div class="infoInfo">
                        <p class="name">Kelly Micheal</p>
                        <p>wed developper</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <i class="fas fa-quote-left"></i>
              <div class="row">
                <div class="col-lg-5 col-sm-6">
                  <div class="sliderPerson">
                    <img src="../assets/img/about/section1/male1.jpeg" alt="">
                  </div>
                </div>
                <div class="col-lg-7 col-sm-6">
                  <div class="sliderInfo">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus vero voluptas deserunt, sunt dolorum cumque rerum veniam aspernatur in consectetur</p>
                    <div class="personInfo">
                      <img src="../assets/img/about/section1/male1.jpeg" alt="">
                      <div class="infoInfo">
                        <p class="name">Edward Sam</p>
                        <p>human doctor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 1 -->
    <!-- start section 2 -->
    <div class="section2">
      <div class="container">
        <h3>You May Want to Know</h3>
        <h2>Our Work Process</h2>
        <div class="row justify-content-center">
          <div class="col-lg col-sm-6">
            <div class="sec">
              <p class="num">01</p>
              <h5>Design</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta</p>
            </div>
          </div>
          <div class="col-lg col-sm-6">
            <div class="sec">
              <p class="num second">02</p>
              <h5>Plan</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta</p>
            </div>
          </div>
          <div class="col-lg col-sm-6">
            <div class="sec">
              <p class="num fix">03</p>
              <h5>Development</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta</p>
            </div>
          </div>
          <div class="col-lg col-sm-6">
            <div class="sec">
              <p class="num fourth">04</p>
              <h5>Concept</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta</p>
            </div>
          </div>
          <div class="col-lg col-sm-6">
            <div class="sec">
              <p class="num last">05</p>
              <h5>Quality</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 2 -->
    <!-- start section 3 -->
    <div class="sec3">
      <h4>this is variable</h4>
      <h1>Pricing Offers</h1>
      <div class="choose">
        <span class="change"></span>
        <div class="row">
          <div class="col-lg-6">
            <span class="period period1" @click="selectedComponent = 'app-day'"><span>Daily</span></span>
          </div>
          <div class="col-lg-6">
            <span class="period period2" @click="selectedComponent = 'app-month'"><span>Monthly</span></span>
          </div>
        </div>
      </div>
      <transition name="show" mode="out-in">
        <component :is="selectedComponent"></component>
      </transition>
    </div>
    <!-- end section 3 -->
    <!-- start section 4 --> 
    <div class="section4">
      <h1>Resa Smith</h1>
      <p class="head">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus aperiam quas tempore distinctio sint animi commodi</p>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg">
            <div class="info1">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt id eum neque beatae ipsa ducimus tempora praesentium ipsam itaque, nobis architecto suscipit amet, quaerat unde veniam maiores porro minus corrupti.</p>
            </div>
          </div>
          <div class="col-lg">
            <div class="img">
              <img src="../assets/img/about/section4/sec4.jpeg" alt="">
            </div>
          </div>
          <div class="col-lg">
            <div class="info2">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt id eum neque beatae ipsa ducimus tempora praesentium ipsam itaque, nobis architecto suscipit amet, quaerat unde veniam maiores porro minus corrupti.</p>
            </div>
          </div>
        </div>
        <div class="subscribe">
          <h5>subscribe to our weekly newsletter</h5>
          <input type="text" placeholder="Email Adress">
          <button>SUBSCRIBE</button>
          <p>You Can Visit Resa's Facebook Profille From Here <a href="https://www.facebook.com/gesuis.eid?ref=bookmarks">Facebook Profille</a></p>
        </div>
      </div>
    </div>
    <!-- end section 4 -->
    <!-- start footer -->
    <app-footer></app-footer>
    <!-- end footer -->
  </div>
</template>

<style scoped lang="scss">
@import "../css/variables.scss";
@import "../css/mixins.scss";
/* start header */ 
.header {
  background: url("../assets/img/about/head.png") no-repeat center /cover;
  height: 700px;
  h1 {
    padding-top: 140px;
    color: #fff;
    font-size: 50px;
  }
  p {
    color: #fff;
    width: 55%;
    margin: 40px auto;
    font-size: 18px;
  }
  @include mb {
    height: 500px;
    h1 {
      padding-top: 100px;
      font-size: 40px;
    }
    p {
      font-size: 15px;
      width: 80%;
    }
  }
  @include sm {
    p {
      font-size: 15px;
      width: 80%;
    }
  }
}
/* end header */
/* start section 1 */ 
.section1 {
  position: relative;
  i.back {
    font-size: 300px;
    opacity: 0.05;
    position: absolute;
    top: 45%;
    left: 50%;
    z-index: 555;
  }
  h4 {
    margin-top: 80px;
    margin-bottom: 30px;
    letter-spacing: 2px;
    font-weight: bold;
    background: linear-gradient(135deg, #0083ff 32.5%, #8046f4 45%, #fb3e7d 60%, #00f2aa 70%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h1 {
    font-size: 50px;
  }
  .swiper-container {
    padding-top: 100px;
    margin-bottom: 150px;
    .swiper-slide {
      i {
        font-size: 60px;
        padding: 15px;
        background-color: $secondcolor;
        color: #fff;
        position: absolute;
        top: -5%;
        left: 0%;
        z-index: 9999;
      }
      .sliderPerson {
        padding-left: 20px;
        img {
          width: 100%;
          height: 500px;
          box-shadow: 2px 2px 10px #ccc;
        }
      }
      .sliderInfo {
        margin-top: 110px;
        text-align: left;
        padding: 40px 20px 40px 50px;
        background-color: #fff;
        box-shadow: 0 9px 35px -2px rgba(85,149,240,.20);
        margin-left: -80px;
        width: 99%;
        p {
          font-size: 20px;
        }
        img {
          width: 100px;
          height: 100px;
          border-radius: 100px 180px 200px 100px;
        }
        .personInfo {
          display: flex;
          .infoInfo {
            p {
              margin: 0 0 0 15px;
              font-size: 18px;
              color: $textcolor;
              &.name {
                color: $secondcolor;
                margin: 12px 0 0 15px;
                font: {
                  size: 22px;
                }
              }
            }
          }
        }
      }
    }
  }
  @include mb {
    i.back {
      display: none;
    }
    .swiper-container {
      .swiper-slide {
        i {
          left: 10%;
        }
        .sliderPerson {
          width: 80%;
          margin: auto;
          img {
            height: 400px;
          }
        }
        .sliderInfo {
          width: 80%;
          margin: -20px auto 0;
          p {
            font-size: 15px;
          }
          img {
            width: 80px;
            height: 80px;
          }
        }
      }
    }
  }
  @include sm {
    i.back {
      display: none;
    }
    .swiper-container {
      .swiper-slide {
        .sliderPerson {
          img {
            height: 400px;
          }
        }
        .sliderInfo {
          margin-top: 45px;
          width: 100%;
          img {
            width: 80px;
            height: 80px;
          }
        }
      }
    }
  }
}
/* end section 1 */ 
/* start section 2 */ 
.section2 {
  background-color: #212529;
  color: #fff;
  padding-top: 100px;
  h3 {
    font-size: 20px;
  }
  h2 {
    font-size: 50px;
    margin-top: 20px;
  }
  .sec {
    margin-top: 80px;
    margin-bottom: 100px;
    h5 {
      color: $thirdcolor;
    }
    p.num {
      height: 100px;
      width: 100px;
      margin: 20px auto 30px;
      line-height: 73px;
      text-align: center;
      border-radius: 50%;
      border: 1px solid #fff;
      padding: 10px;
      font-size: 40px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      position: relative;
      &.fix {
        background-color: $secondcolor;
      }
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 100%;
        background-color: #fff;
        width: 132%;
        height: 1px;
      }
      &.last::after {
        content: none;
      }
    }
    &:hover {
      p.num {
        background-color: $secondcolor;
      }
    }
  }
  @include mb {
    h2 {
      font-size: 40px;
    }
    .sec {
      width: 80%;
      margin: 80px auto 30px;
      p.num::after {
        content: none;
      }
    }
  }
  @include sm {
    h2 {
      font-size: 40px;
    }
    .sec {
      width: 80%;
      margin: 80px auto 30px;
      p.num::after {
        width: 266%;
      }
      p.second::after, p.fourth::after {
        content: none;
      }
    }
  }
  @include md {
    .sec {
      p.num::after {
        width: 95%;
      }
    }
  }
}
/* end section 2 */ 
/* start section 3 */
.sec3 {
  background-color: rgb(246, 245, 245);
  padding-top: 200px;
  .choose {
    background-color: #fff;
    width: 30%;
    margin: 50px auto 0;
    border-radius: 30px;
    font-size: 17px;
    position: relative;
    color: #000;
    cursor: pointer;
    span.change {
      background-image: linear-gradient($maincolor, rgb(33, 71, 83));
      position: absolute;
      top: 0;
      left: 0%;
      width: 50%;
      height: 100%;
      border-radius: 30px;
      z-index: 1;
      transition: all 0.3s ease-in-out;
    }
    .row {
      .col-lg-6 {
        padding: 10px;
        span.period {
          span {
            z-index: 2;
            position: relative;
            padding: 20px 30%;
          }
          &.period1 {
            color: #fff;
          }
        }
      }
    }
  }
  @include mb {
    .choose {
      width: 50%;
      .row {
        .col-lg-6 {
          width: 50%;
          span.period {
            width: 50%;
            font-size: 15px;
            margin-right: 20px;
            span {
              padding: 10px 40%;
            }
          }
          span.period2 {
            span {
              padding: 10px 20%;
            }
          }
        }
      }
    }
  }
  @include sm {
    .choose {
      width: 40%;
      .row {
        .col-lg-6 {
          width: 50%;
          span.period {
            width: 50%;
            font-size: 17px;
            margin-right: 20px;
            span {
              padding: 10px 40%;
            }
          }
          span.period2 {
            span {
              padding: 10px 20%;
            }
          }
        }
      }
    }
  }
}
/* end section 3 */ 
/* start section 4 */ 
.section4 {
  margin: 0 0 100px 0;
  h1 {
    font-size: 70px;
   
  }
  p.head {
    margin-bottom: 50px;
    
  }
  .info1, .info2 {
    p {
      font-size: 20px;
      margin-top: 60px;
      color: $textcolor;
      font-weight: normal;
    }
  }
  .info1 {
    p {
      text-align: right;
      margin-right: -10px;
    }
  }
  .info2 {
    p {
      text-align: left;
      margin-left: -10px;
    }
  }
  .img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;
    img {
      width: 400px;
      height: 400px;
      border-radius: 50%;
      filter: grayscale(0);
      transition: all 0.4s ease-in-out;
      &:hover {
        filter: grayscale(0.4);
        transform: scale(1.1);
      }
    }
    h4 {
      margin-top: 100px;
      color: #000;
    }
  }
  .subscribe {
    margin-top: 150px;
    h5 {
      margin-bottom: 30px;
      font-size: 22px;
    }
    input {
      width: 600px;
      height: 55px;
      border-radius: 30px;
      padding-left: 20px;
      font-size: 20px;
      outline: none;
      padding-bottom: 4px;
      margin-bottom: 30px;
      border: 1px solid #ccc;
      &:focus {
        box-shadow: 0 9px 35px #f3f3f3;
      }
    }
    button {
      width: 170px;
      height: 49px;
      border-radius: 30px;
      margin-left: -175px;
      outline: none;
      border: none;
      background-color: $maincolor;
      color: #fff;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: $maincolor;
        background-color: #fff;
        border: 2px solid $maincolor;
      }
    }
    p {
      font-size: 18px;
      a {
        color: $secondcolor;
        &:hover {
          color: $maincolor;
        }
      }
    }
  }
  @include mb {
    h1 {
      font-size: 50px;
    }
    .info1 {
      margin: 0 auto 30px;
      p {
        text-align: center;
        margin: 0 auto 30px;
        font-size: 18px;
      }
    }
    .info2 {
      p {
        text-align: center;
        margin-left: 0;
        margin: 30px auto 0;
        font-size: 18px;
      }
    }
    .img {
      width: 300px;
      height: 300px;
      img {
        width: 300px;
        height: 300px;
      }
    }
    .subscribe {
      input {
        width: 90%;
        height: 41px;
        font-size: 15px;
        padding-top: 2px;
      }
      button {
        height: 35px;
        width: 30%;
        margin-left: -31%;
        font-size: 13px;
      }
      p {
        font-size: 15px;
      }
    }
  }
  @include sm {
    .info1 {
      margin: 0 auto 30px;
      p {
        text-align: center;
        margin: 0 auto 30px;
        font-size: 20px;
      }
    }
    .info2 {
      p {
        text-align: center;
        margin-left: 0;
        margin: 30px auto 0;
        font-size: 20px;
      }
    }
  }
}
/* end section 4 */
/* start component animation */
.show-enter-active {
  animation: show-in 0.3s ease-out forwards;
}
.show-leave-active {
  animation: show-out 0.3s ease-out forwards;
}
@keyframes show-in {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes show-out {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.8);
    opacity: 0;
  }
}
/* end component animation */
</style>

<script>
import footer from "../components/footer";
import dailyOffer from "../components/dailyOffer";
import monthlyOffer from "../components/monthlyOffer";
import Swiper from "swiper";
import $ from "jquery";
export default {
  data() {
    return {
      selectedComponent: "app-day"
    }
  },
  methods: {
    initSwiper() {
      const mySwiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        autoplay: {
          delay: 3000,
        },
        direction: "horizontal",
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 50
      })
    mySwiper.init();
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$store.state.loadingPage = true;
    setTimeout( () => {
      this.$store.state.loadingPage = false;
    }, 1000);
    this.initSwiper();
    $("span.period2").on("click", function() {
      $("span.period1").css({color: "#000"})
      $(this).css({
        color: "#fff"
      });
      $("span.change").css({
        left: "50%",
        right: "0"
      })
    })
    $("span.period1").on("click", function() {
      $("span.period2").css({color: "#000"})
      $(this).css({
        color: "#fff"
      });
      $("span.change").css({
        left: "0%",
        right: "0"
      })
    })
  },
  components: {
    "app-footer": footer,
    "app-day": dailyOffer,
    "app-month": monthlyOffer
  }
}
</script>
