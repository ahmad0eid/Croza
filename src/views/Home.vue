<template>
  <div class="home">
    <!-- start home header -->
    <div class="header">
      <div class="container">
        <div class="info">
          <h1 class="text-center">
            Croza Hotel, Nice to See You...
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iste commodi expedita perspiciatis dignissimos eius, quam beatae, accusamus porro illo vel animi, consequuntur labore dolorem accusantium error. Id, accusantium odit! and this is lorem ipsum</p>
          <button @click="$router.push({path: '/Booking'})">Book a Room</button>
          <button @click="$store.state.openSignIn = true">Sign In</button>
        </div>
      </div>
    </div>
    <!-- end home header -->
    <!-- start section 1 -->
    <div class="section1">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="feature">
              <h1>Features Of Hotel</h1>
              <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima odit tenetur eius delectus sint harum nobis</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate enim sequi corrupti ratione non sint nulla fugit maxime eaque praesentium obcaecati ipsa natus, provident animi recusandae reprehenderit eius in accusamus!</p>
              <button>View More</button>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="feature2">
              <div class="row">
                <div class="col-lg-4 col-md-4 first1">
                  <i class="far fa-building"></i>
                  <p>PROPERTY ACE</p>
                  <h4>Build Year</h4>
                  <h4>2002</h4>
                </div>
                <div class="col-lg-4 col-md-4 second1">
                  <i class="fas fa-chart-area"></i>
                  <p>IN SQFT</p>
                  <h4>area</h4>
                  <h4>3000 KM</h4>
                </div>
                <div class="col-lg-4 col-md-4 third1">
                  <i class="fas fa-bed"></i>
                  <p>NUMBER OF</p>
                  <h4>rooms</h4>
                  <h4>600</h4>
                </div>
                <div class="col-lg-4 col-md-4 first2">
                  <i class="fas fa-swimming-pool"></i>
                  <p>FLOORS NUMBER</p>
                  <h4>floors</h4>
                  <h4>7</h4>
                </div>
                <div class="col-lg-4 col-md-4 second2">
                  <i class="fas fa-car-side"></i>
                  <p>PARKING</p>
                  <h4>garage</h4>
                  <h4>2</h4>
                </div>
                <div class="col-lg-4 col-md-4 third2">
                  <i class="fas fa-user"></i>
                  <p>NUMBER OF</p>
                  <h4>employees</h4>
                  <h4>320</h4>
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
      <h2>Daily Visitors</h2>
      <div class="container">
        <h1 id="count">{{visitors}} <span>/visitors</span></h1> 
        <h3>Stunning Homepages</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor commodi consequatur blanditiis quibusdam placeat iste veritatis accusamus doloremque quod harum ipsam fugiat voluptatem impedit voluptatibus nemo, aut, enim facere consequuntur!</p>
      </div>
    </div>
    <!-- end section 2 -->
    <!-- start section 3 -->
    <div class="section3">
      <h2>Our Cheifs...</h2>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="boss boss1">
              <img src="../assets/img/home/section3/sec3.jpeg" alt="">
              <div class="over"></div>
              <div class="bossinfo">
                <h3>Mark William</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,</p>
                <button>See More</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="boss boss1">
              <img src="../assets/img/home/section3/sec333.jpeg" alt="">
              <div class="over"></div>
              <div class="bossinfo">
                <h3>Bellosy Adam</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,</p>
                <button>See More</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="boss boss1">
              <img src="../assets/img/home/section3/sec33333.jpeg" alt="">
              <div class="over"></div>
              <div class="bossinfo">
                <h3>Hanibal Smith</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,</p>
                <button>See More</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="boss boss2">
              <img src="../assets/img/home/section3/ss.jpeg" alt="">
              <div class="over"></div>
              <div class="bossinfo">
                <h3>Jasmine danial</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,</p>
                <button>See More</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="boss boss2">
              <img src="../assets/img/home/section3/sec333333.jpeg" alt="">
              <div class="over"></div>
              <div class="bossinfo">
                <h3>Michael dock</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,</p>
                <button>See More</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="boss boss2">
              <img src="../assets/img/home/section3/sec3333.jpeg" alt="">
              <div class="over"></div>
              <div class="bossinfo">
                <h3>Jonson Statham</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,</p>
                <button>See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 3 -->
    <!-- start section 4 -->
    <div class="section4">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="images images1">
              <img src="../assets/img/home/section4/man1.svg" alt="" class="first1">
              <img src="../assets/img/home/section4/girl.svg" alt="" class="first2">
              <img src="../assets/img/home/section4/boy.svg" alt="" class="first3">
              <img src="../assets/img/home/section4/man5.svg" alt="" class="first4">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="swiper-container">
              <i class="fas fa-quote-left custom-quote"></i>
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                  <h2>Some Idial Features Of Our Awesome Hotel</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, fugiat omnis impedit velit fuga fugit sapiente excepturi distinctio officia mollitia qui sequi dignissimos aperiam quidem vel. Similique architecto explicabo numquam.</p>
                  <h4>David Villas</h4>
                  <p>Hotel Maneger</p>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="swiper-slide">
                  <h2>Some Great Words From Our Clients</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, fugiat omnis impedit velit fuga fugit sapiente excepturi distinctio officia mollitia qui sequi dignissimos aperiam quidem vel. Similique architecto explicabo numquam.</p>
                  <h4>Gemy Leion</h4>
                  <p>Our Client</p>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half"></i>
                </div>
                <div class="swiper-slide">
                  <h2>Some Ideal Words From Our Clients</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, fugiat omnis impedit velit fuga fugit sapiente excepturi distinctio officia mollitia qui sequi dignissimos aperiam quidem vel. Similique architecto explicabo numquam.</p>
                  <h4>Dally Rose</h4>
                  <p>Permanent Client</p>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half"></i>
                </div>
                ...
              </div>
              <!-- If we need pagination -->
              <div class="swiper-pagination">
                <span class="swiper-pagination-bullet-active" style="background-color: #fff"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
              </div>
              <!-- If we need navigation buttons -->
              <!-- <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div> -->
            </div>
          </div>
          <div class="col-lg-3">
            <div class="images images2">
              <img src="../assets/img/home/section4/woman.svg" alt="" class="second1">
              <img src="../assets/img/home/section4/girl.svg" alt="" class="second2">
              <img src="../assets/img/home/section4/man.svg" alt="" class="second3">
              <img src="../assets/img/home/section4/boyy.svg" alt="" class="second4">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 4 -->
    <!-- start section 5 -->
    <div class="section5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-sm-6">
            <div class="img">
              <img src="../assets/img/home/section5/test22.png" alt="">
            </div>
          </div>
          <div class="col-lg-7 col-sm-6">
            <div class="details text-left">
              <i class="fas fa-quote-left"></i>
              <p>" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus veniam consequuntur vero velit nam necessitatibus molestiae dolore optio illo omnis nulla neque maxime, recusandae quisquam iste impedit porro, magni dicta? "</p>
              <h4>Leonard Gibson</h4>
              <p>Financial Analyst</p>
              <button><span class="btnText">Read More</span> <span class="btnHover"></span></button>
              <!-- <i class="fas fa-long-arrow-alt-right"></i> -->
            </div>
          </div>
        </div>
      </div> 
    </div>
    <!-- end section 5 -->
    <!-- start footer -->
    <app-footer></app-footer>
    <!-- end footer -->
  </div>
</template>

<style lang="scss" scoped>
@import "../css/variables.scss";
@import "../css/mixins.scss";
.home {
  /* start header */ 
  .header {
    height: 700px;
    background: url("../../src/assets/img/home/new.png") no-repeat center center /cover;
    margin-bottom: 50px;
    padding-top: 100px;
    .info {
      width: 50%;
      float: right;
      margin-right: 100px;
      h1 {
      color: #fff;
      padding-top: 100px;
      margin-bottom: 20px;
      }
      p {
        color: #fff;
        margin-bottom: 40px;
      }
      button {
        width: 170px;
        height: 42px;
        border-radius: 10px;
        border: none;
        color: #fff;
        outline: none;
        padding-bottom: 2px;
        transition: all 0.3s ease-in-out;
        font: {
          size: 18px;
        }
        &:hover {
          transform: translateY(-5px);
        }
        &:first-of-type {
          background-color: rgb(28, 182, 105);
          margin-right: 20px;
          &:hover {
            background-color: rgb(26, 161, 93);
          }
        }
        &:last-of-type {
          background-color: #CC3F3A;
          margin-left: 20px;
          &:hover {
           background-color: rgb(175, 49, 44);
          }
        }
      }
    }
    @include mb {
      height: 500px;
      .info {
        width: 70%;
        margin-right: 5%;
        h1 {
          font-size: 30px;
          padding-top: 20px;
        }
        p {
          font-size: 13px;
        }
        button {
          width: 30%;
          height: 35px;
          font-size: 13px;
          &:first-of-type {
            margin-right: 5px;
          }
          &:last-of-type {
            margin-left: 5px;
          }
        }
      }
    }
    @include sm {
      .info {
        button {
          width: 40%;
        }
      }
    }
  }
  /* end header */
  /* start section 1 */
  .section1 {
    text-align: left;
    margin-top: 200px;
    margin-bottom: 200px;
    h1 {
      margin-bottom: 40px;
      font-size: 60px;
    }
    h5 {
      color: $textcolor;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      color: rgb(129, 129, 129);
    }
    button {
      width: 180px;
      height: 45px;
      background-color: $maincolor;
      color: #fff;
      border: none;
      border-radius: 5px;
      margin-top: 20px;
      font-size: 18px;
      &:hover {
        background-color: #fff;
        color: $maincolor;
        border: 2px solid $maincolor;
      }
    }
    .feature2 {
      text-align: center;
      margin-top: -30px;
      .col-lg-4 {
        padding: 20px;
        border: 1px solid rgb(231, 231, 231);
        &:hover {
          i {
            background-color: $maincolor;
            color: #fff;
          }
        }
        &.first1, &.second1, &.third1 {
          border-top: none;
        }
        &.first1 {
          border-left: none;
        }
        &.third1 {
          border-right: none;
        }
        &.first2, &.second2, &.third2 {
          border-bottom: none;
        }
        &.first2 {
          border-left: none;
        }
        &.third2 {
          border-right: none;
        }
      }
      i {
        font-size: 40px;
        margin-bottom: 10px;
        color: $secondcolor;
        width: 80px;
        height: 80px;
        padding: 10px;
        border-radius: 50%;
        line-height: 60px;
        transition: all 0.3s ease-in-out;
      }
      h4 {
        margin: 0;
        text-align: center;
      }
      p {
        margin: 0;
        text-align: center;
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
    @include mb {
      margin-top: 100px;
      margin-bottom: 100px;
      h1 {
        font-size: 40px;
        margin-bottom: 20px;
      }
      .feature2 {
        margin-top: 50px;
        .col-lg-4 {
          border: none;
        }
      }
    }
    @include sm {
      .feature2 {
        margin-top: 50px;
      }
    }
  }
  /* end section 1 */ 
  /* start section 2 */ 
  .section2 {
    margin-top: 100px;
    margin-bottom: 200px;
    h2 {
      margin-bottom: 50px;
    }
    h1 {
      font-size: 150px;
      color: $secondcolor;
      margin-bottom: 30px;
      span {
        color: rgb(70, 69, 69);
        font-size: 30px;
        margin-left: -40px;
      }
    }
    h3 {
      color: $maincolor;
      font-size: 40px;
    }
    p {
      color: $textcolor;
      font-size: 18px;
    }
    @include mb {
      h1 {
        font-size: 100px;
        span {
          font-size: 20px;
          margin-left: -20px;
        }
      }
      h3 {
        font-size: 30px;
      }
      p {
        font-size: 15px;
      }
    }
  }
  /* end section 2 */
  /* start section 3 */
  .section3 {
    h2 {
      margin-bottom: 80px;
    }
    .boss {
      height: 500px;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
      margin-bottom: 100px;
      transition: all 0.5s ease-in-out;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        transition: all 0.3s ease-in-out;
      }
      .over {
        background-image: linear-gradient(rgb(161, 41, 37), #000);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        border-radius: 10px;
        z-index: 1;
        transition: all 0.3s ease-in-out;
      }
      .bossinfo {
          z-index: 2;
          position: absolute;
          top: 80%;
          left: 0;
          color: #fff;
          transition: all 0.3s ease-in-out;
          p {
            width: 90%;
            margin: 5px auto 10px;
          }
          button {
            width: 100px;
            height: 40px;
            opacity: 0;
            border: 3px solid #CC3F3A;
            background-color: transparent;
            color: #fff;
            border-radius: 10px;
            transition: all 0.3s ease-in-out;
            &:hover {
              background-color: $secondcolor;
              color: #fff;
            }
          }
        }
        &.boss1 {
          opacity: 0;
          transform: translateY(300px);
        }
        &.boss2 {
          opacity: 0;
          transform: translateY(300px);
        }
        &:hover {
          img {
            transform: scale(1.1);
          }
          .over {
            opacity: 0.7;
          }
          .bossinfo {
            top: 65%;
            button {
              opacity: 1;
            }
          }
        }
    }
    @include mb {
      .boss {
        width: 80%;
        margin: 20px auto;
        display: inline-block;
        height: 500px;
      }
    }
  }
  /* end section 3 */
  /* start section 4 */
  .section4 {
    background: linear-gradient(to right, $thirdcolor 2%,$maincolor 82%);
    color: #fff;
    margin-top: 100px;
    padding-top: 50px;
    padding-bottom: 80px;
    .images {
      position: relative;
      img {
        width: 90px;
        height: 90px;
        background-color: #fff;
        padding: 4px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: translateY(-10px);
          box-shadow: 2px 2px 10px #000;
        }
      }
      &.images1 {
        img.first1 {
          top: 50px;
          left: 20px;
        }
        img.first2 {
          top: 120px;
          left: 60%;
        }
        img.first3 {
          top: 240px;
          left: 15%;
        }
        img.first4 {
          top: 300px;
          left: 70%;
        }
      }
      &.images2 {
        img.second1 {
          top: 50px;
          left: 20px;
        }
        img.second2 {
          top: 120px;
          left: 60%;
        }
        img.second3 {
          top: 240px;
          left: 15%;
        }
        img.second4 {
          top: 300px;
          left: 70%;
        }
      }
    }
    .swiper-container {
      margin-top: 80px;
      position: relative;
      i.custom-quote {
        position: absolute;
        top: 0;
        left: 30%;
        font-size: 200px;
        color: $textcolor !important;
        opacity: 0.5;
        z-index: -1;
      }
      .swiper-slide {
        h2 {
          font-size: 40px;
          margin-bottom: 30px;
        }
        p {
          color: rgb(246, 245, 245);
          font-size: 18px;
        }
        h4 {
          color: $secondcolor;
          font-weight: bold;
        }
        i {
          color: #ffce22;
          margin-bottom: 50px;
        }
      }
    }
    @include mb {
      .swiper-container {
        .swiper-wrapper {
          .swiper-slide {
            h2 {
              font-size: 30px;
            }
            p {
              font-size: 16px;
            }
          }
        }
      }
      .images1, .images2 {
        display: none;
      }
    }
    @include sm {
      .images1, .images2 {
        display: none;
      }
    }
  }
  /* end section 4 */
  /* start section 5 */ 
  .section5 {
    margin-top: 80px;
    background-color: #fff;
    .img {
      img {
        height: 600px;
      }
    }
    .details {
      i.fa-quote-left {
        font-size: 50px;
        color: $textcolor;
        margin-bottom: 20px;
        margin-left: 10px;
        margin-top: 130px;
      }
      p {
        color: rgb(155, 155, 155);
        font-size: 20px;
      }
      h4 {
        color: $textcolor;
      }
      button {
        margin-bottom: 30px;
        width: 140px;
        height: 45px;
        border-radius: 10px;
        font-size: 18px;
        text-align: center;
        border: 3px solid $secondcolor;
        color: #fff;
        margin-top: 20px;
        transition: all 0.3s ease-in-out;
        position: relative;
        outline: none;
        background-color: $secondcolor;
        &:hover {
          background-color: #fff;
          color: $secondcolor;
        }
      }
    }
    @include mb {
      .details {
        text-align: center !important;
        padding-top: 0;
        i {
          margin-top: 50px !important;
        }
        p {
          font-size: 16px;
        }
        h4 {
          font-size: 22px;
        }
        button {
          width: 25%;
          font-size: 16px;
        }
      }
    }
    @include sm {
      .details {
        margin-left: 50px;
        i {
          margin-top: 80px !important;
        }
      }
    }
  }
  /* end section 5 */
}
</style>

<script>
import $ from "jquery";
import Swiper from "swiper";
import footer from "../components/footer.vue"
export default {
  data() {
    return {
      visitors: 0,
      name: "ahmad"
    }
  },
  mounted () {
    window.scrollTo(0, 0);
    var VueInstance = this; // if you use this inside the scroll function, it will refere to the scroll function not to the vue instance. so we used this variable to identifire the vue instance...
    this.$store.state.loadingPage = true;
    setTimeout( () => {
      this.$store.state.loadingPage = false;
    }, 1000);
    $(window).on("scroll", function() {
      
      if($(window).scrollTop() >= $(".boss1").offset().top - 600) {
        $(".boss1").css({
          opacity: 1,
          transform: "translateY(0)"
        })
      }
      if($(window).scrollTop() >= $(".boss2").offset().top - 600) {
        $(".boss2").css({
          opacity: 1,
          transform: "translateY(0)"
        })
      }
      if($(window).scrollTop() >= $(".section2").offset().top - 200) {
        if(VueInstance.visitors == 0){
          var counter = setInterval(() => {
            VueInstance.visitors += 2;
            if(VueInstance.visitors == 1366) {
              clearInterval(counter);
            }
          }, 12)
        }
      }
    });
    this.initSwiper();
    
  },
  methods:{
    initSwiper() {
      const mySwiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        autoplay: {
          delay: 2000,
        },
        direction: "horizontal",
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 50
      })
    mySwiper.init()
    }
  },
  components: {
    "app-footer": footer
  }
}
</script>
