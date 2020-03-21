<template>
  <div class="room">
    <!-- start section 1 -->
    <div class="section1">
      <div class="row">
        <div class="col-lg-8">
          <div class="img">
            <img :src="room.imgSrc">
            <div class="info">
              <p>COMFORTABLE ROOM</p>
              <h1>Nice Accommodation</h1>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="info2">
            <div class="head">
              <i class="fas fa-bookmark"></i>
              <p>Price</p>
              <p>${{room.price}} <span>/ night</span></p>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 first">
                <div class="things">
                  <h5>Check In Date</h5>
                  <p>{{$store.state.checkInDate}}</p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 first">
                <div class="things">
                  <h5>Check Out Date</h5>
                  <p>{{$store.state.checkOutDate}}</p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="things">
                  <h5>Adults</h5>
                  <p>{{$store.state.adults}}</p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="things">
                  <h5>Kids</h5>
                  <p>{{$store.state.kids}}</p>
                </div>
              </div>
            </div>
            <button>BOOK NOW</button>
            <button @click="$router.push({path: '/Booking'})">CHOOSE ANOTHER ROOM</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 1 -->
    <!-- start section 2 -->
    <div class="section2">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="details">
              <div class="row justify-content-center">

                <div class="col-lg-4 col-md-6">
                  <p><i class="fas fa-bed"></i> 4 Bedrooms</p>
                </div>
                <div class="col-lg-4 col-md-6">
                  <p><i class="fas fa-bath"></i> 2 Bathrooms</p>
                </div>
                <div class="col-lg-4 col-md-6">
                  <p><i class="fas fa-utensils"></i> 1 Kitchen</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 2 -->
    <!-- start section 3 -->
    <div class="section3">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="description">
              <h1>Description...</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod iure sapiente incidunt repellat corporis. Natus placeat ipsa ut nulla fuga inventore, veniam eius voluptate sed odit quam omnis voluptatibus temporibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus sunt doloribus odit esse harum error assumenda quasi alias. Aliquid, enim iusto aliquam numquam debitis doloribus ea animi ratione inventore. Quisquam.</p>
              <h1>Amenity...</h1>
              <div class="row">
                <div class="col-lg-4 col-sm-6">
                  <ul class="list-unstyled">
                    <li><i class="fas fa-car"></i> Free Parking</li>
                    <li><i class="fas fa-wifi"></i> Fast Wi-Fi</li>
                    <li><i class="fas fa-swimming-pool"></i> Spa Services</li>
                    <li><i class="fas fa-dumbbell"></i> Gym</li>
                  </ul>
                </div>
                <div class="col-lg-4 col-sm-6">
                  <ul class="list-unstyled">
                    <li><i class="fas fa-person-booth"></i> Elevator</li>
                    <li><i class="fas fa-tv"></i> Cable TV</li>
                    <li><i class="fas fa-utensils"></i> Kitchen</li>
                    <li><i class="fas fa-swimmer"></i> Pool</li>
                  </ul>
                </div>
                <div class="col-lg-4 col-sm-6">
                  <ul class="list-unstyled">
                    <li><i class="fas fa-mug-hot"></i> Coffee Maker</li>
                    <li><i class="fas fa-fan"></i> conditioning</li>
                    <li><i class="fab fa-slideshare"></i> hair dryer</li>
                    <li><i class="fab fa-whmcs"></i> washer</li>
                  </ul>
                </div>
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
          <div class="col-lg-8">
            <div class="reviews">
              <img src="../assets/img/booking/section2/hotel2.jpg" alt="">
              <i class="fas fa-quote-left"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 4 -->
    <!-- start section 5 -->
    <div class="section5">
      <div class="container">
        <h1>Reviews</h1>
        <div class="row">
          <div class="col-lg-8">
            <div class="reviewsProgress">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <p>Comfort</p>
                  <div id="reviews"></div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <p>Food</p>
                  <div id="reviews2"></div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <p>Facilities</p>
                  <div id="reviews3"></div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <p>Location</p>
                  <div id="reviews4"></div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <p>Staff</p>
                  <div id="reviews5"></div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <p>Price-quality</p>
                  <div id="reviews6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 5 -->
    <!-- start section 6 -->
    <div class="section6">
      <div class="container">
        <h1>Comments...</h1>
        <div class="row">
          <div class="col-lg-8">
            <div class="comment">
              <h4>Best Hotel.!</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda quasi dolor quas harum voluptas est, a perferendis placeat nobis suscipit inventore saepe magni, repudiandae facere accusantium. Ipsa, dignissimos eaque.</p>
              <div class="person">
                <img src="../assets/img/booking/room/man1.jpg" alt="">
                <div class="commentInfo">
                  <h5>Jacob Lane</h5>
                  <p>from USA</p>
                </div>
              </div>
            </div>
            <div class="comment">
              <h4>Comfortable Hotel.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda quasi dolor quas harum voluptas est, a perferendis placeat nobis suscipit inventore saepe magni, repudiandae facere accusantium. Ipsa, dignissimos eaque.</p>
              <div class="person">
                <img src="../assets/img/booking/room/girl.jpg" alt="">
                <div class="commentInfo">
                  <h5>Vectoria Wilson</h5>
                  <p>from France</p>
                </div>
              </div>
            </div>
            <div class="comment">
              <h4>Modern Hotel</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda quasi dolor quas harum voluptas est, a perferendis placeat nobis suscipit inventore saepe magni, repudiandae facere accusantium. Ipsa, dignissimos eaque.</p>
              <div class="person">
                <img src="../assets/img/booking/room/man2.jpg" alt="">
                <div class="commentInfo">
                  <h5>Max Edwards</h5>
                  <p>from Germany</p>
                </div>
              </div>
            </div>
            <input type="text" placeholder="Write Your comment...">
            <button>Post Comment</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 6 -->
    <!-- start footer -->
    <app-footer></app-footer>
    <!-- end footer -->
  </div>
</template>

<style scoped lang="scss">
@import "../css/variables.scss";
@import "../css/mixins.scss";
.room {
  /* start section 1 */
  .section1 {
    background: url("../assets/img/booking/room/roomHead.png") no-repeat center /cover;
    .col-lg-8 {
        padding-left: 30px;
      .img {
          margin-top: 80px !important;
          position: relative;
        img {
          width: 100%;
          height: 550px;
          filter: brightness(0.6);
          border-radius: 20px;
          margin-bottom: 20px;
        }
        .info {
          position: absolute;
          top: 35%;
          left: 25%;
          color: #fff;
          p {
            margin: 0;
            font-size: 18px;
            letter-spacing: 2px;
          }
          h1 {
              font-size: 50px;
          }
        }
      }
    }
    .info2 {
      margin-top: 40%;
      width: 25%;
      position: fixed;
      border-radius: 10px;
      border: 1px solid #ccc;
      background-color: #fff;
      transition: all 1s ease-in-out;
      .head {
        background-color: $maincolor;
        color: #fff;
        padding: 10px;
        border-radius: 10px 10px 0 0;
        position: relative;
        overflow: hidden;
        i {
          position: absolute;
          top: -2px;
          right: 5%;
          font-size: 50px;
          color: $thirdcolor
        };
        p {
          margin: 0;
          font-size: 25px;
          span {
          font-size: 16px;
          color: #e5e2e2;
          }
        }
      }
      .row {
        padding: 10px 20px;
      }
      .things {
        border: 1px solid #ccc;
        padding: 12px;
        border-radius: 20px;
        
      }
      .col-lg-6 {
        h5 {
          font-size: 16px;
          font-weight: bold;
          color: $textcolor;
        }
        p {
          color: #000;
          background-color: rgb(241, 241, 241);
          margin: 0;
          width: auto;
          border-radius: 10px;
        }
      }
      .first {
        margin-top: 20px;
        margin-bottom: 10px;
      }
      button:first-of-type {
        width: 80%;
        margin-top: 20px;
        margin-bottom: 15px;
        background-color: $maincolor;
        color: #fff;
        border: none;
        height: 40px;
        border-radius: 20px;
        transition: all 0.3s ease-in-out;
        &:hover {
            background-color: #fff;
            color: $maincolor;
            border: 2px solid $maincolor;
        }
      }
      button:last-of-type {
        width: 80%;
        margin-bottom: 30px;
        background-color: $secondcolor;
        color: #fff;
        border: none;
        height: 40px;
        border-radius: 20px;
        transition: all 0.3s ease-in-out;
        &:hover {
            background-color: #fff;
            color: $secondcolor;
            border: 2px solid $secondcolor;
        }
      }
    }
    @include mb {
      .col-lg-8 {
        padding-left: 10px;
        .img {
          width: 95%;
          margin: 100px auto 0 !important;
          img {
            height: 400px;
          }
          .info {
            left: 22%;
            p {
              font-size: 15px;
            }
            h1{
              font-size: 30px;
              
            }
          }
        }
      }
      .info2 {
        position: relative;
        width: 80%;
        margin: 30px auto 130px;
        .head {
          margin-bottom: 20px;
        }
        .col-lg-6 {
          margin: 5px 10%;
        }
        .first {
          margin: 5px 10%;
        }
        button {
          width: 70% !important;
        }
      }
    }
    @include sm {
      .col-lg-8 {
        padding-left: 10px;
        .img {
          width: 95%;
          margin: 100px auto 0 !important;
          img {
            height: 450px;
          }
          .info {
            left: 33%;
            p {
              font-size: 15px;
            }
            h1{
              font-size: 30px;
            }
          }
        }
      }
      .info2 {
        position: relative;
        width: 50%;
        margin: 30px auto 130px;
        .head {
          margin-bottom: 20px;
        }
        button {
          width: 80% !important;
        }
      }
    }
    @include md {
      .col-lg-8 {
        .img {
          .info {
            left: 15%
          }
        }
      }
      .info2 {
        width: 30%;
      }
    }
  }
  /* end section 1 */
  /* start section 2 */
  .section2 {
    .details {
      background-color: #fff;
      padding: 40px;
      margin-top: -10%;
      margin-right: 7%;
      border-radius: 20px;
      border: 1px solid #ccc;
      box-shadow: 0 0 5px rgb(109, 147, 148);
      font-size: 20px;
      color: $textcolor;
      .col-lg-4 {
        border-right: 2px solid #ccc;
        padding: 10px;
        &:last-of-type {
          border: none;
        }
      }
      p {
        margin: 0;
        i {
          margin-right: 10px;
        }
      }
    }
    @include mb {
      .details {
        margin-right: 0;
        width: 80%;
        margin: -10% auto;
        padding: 20px;
      }
      .col-lg-4 {
        border-right: none !important;
        font-size: 18px;
      }
    }
     @include sm {
      .details {
        margin-right: 0;
        width: 80%;
        margin: -10% auto;
      }
      .col-lg-4 {
        border-right: none !important;
        font-size: 18px;
      }
    }
  }
  /* end section 2 */ 
  /* start section 3 */
  .section3 {
    .description {
      margin-top: 130px;
      text-align: left;
      h1 {
        margin-bottom: 30px;
        margin-top: 70px;
      }
      p {
        font-size: 18px;
        color: $textcolor;
      }
      li {
        color: $textcolor;
        margin-top: 20px;
        font-size: 18px;
        i {
          font-size: 25px;
          margin-right: 10px;
        }
      }
    }
  }
  /* end section 3 */
  /* start section 4 */
  .section4 {
    .reviews {
      margin-top: 100px;
      position: relative;
      img {
        width: 100%;
        height: 400px;
        border-radius: 5px;
      }
      i {
        position: absolute;
        top: 85%;
        left: 1%;
        color: #fff;
        font-size: 60px;
      }
    }
    @include mb {
      .reviews {
        img {
          height: 320px;
        }
        i {
          top: 80%;
        }
      }
    }
  }
  /* end section 4 */ 
  /* start section 5 */ 
  .section5 {
    margin-top: 120px;
    text-align: left;
    .reviewsProgress {
      .col-lg-6 {
        margin-top: 30px;
        p {
          margin: 0 0 10px 0;
          font-size: 18px;
          color: $textcolor;
        }
      }
    }
    @include mb {
      margin-top: 80px;
      h1 {
        margin-left: 5%;
      }
      .reviewsProgress {
        width: 90%;
        margin: auto;
      }
    }
  }
  /* end section 5 */ 
  /* start section 6 */ 
  .section6 {
    margin-top: 150px;
    margin-bottom: 100px;
    h1 {
      text-align: left;
      margin-bottom: 70px;
    }
    .comment {
      border: 1px solid rgb(231, 228, 228);
      padding: 40px 40px;
      text-align: left;
      border-radius: 10px;
      margin-bottom: 30px;
      h4 {
        margin-bottom: 20px;
        font-weight: bold;
        letter-spacing: 2px;
      }
      p {
        font-size: 18px;
        color: $textcolor;
      }
      .person {
        display: flex;
        margin-top: 30px;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-right: 20px;
        }
      }
      .commentInfo {
        margin-top: 10px;
        h5 {
          font-size: 20px;
          margin: 0;
        }
        p {
          color: rgb(145, 141, 141);
          font-size: 15px;
          margin-top: 6px;
        }
      }
    }
    input {
      width: 90%;
      height: 50px;
      border-radius: 20px;
      padding-left: 20px;
      border: 1px solid #ccc;
      margin-top: 30px;
      font-size: 19px;
      outline: none;
      &:focus {
        box-shadow: 0 0 10px rgb(230, 230, 230);
      }
    }
    button {
      width: 24%;
      height: 44px;
      border-radius: 20px;
      background-color: $maincolor;
      color: #fff;
      border: none;
      margin-left: -25%;
      position: relative;
      top: -1px;
      right: -4px;
      font-size: 18px;
      outline: none;
      &:hover {
        background-color: #fff;
        color: $maincolor;
        border: 2px solid $maincolor;
      }
    }
    @include mb {
      margin-top: 100px;
      h1 {
        margin-bottom: 30px;
      }
      button {
        width: 30%;
        right: 5%;
        font-size: 15px;
        top: -2px;
      }
    }
  }
  /* end section 6 */ 
}
</style>

<script>
import footer from "../components/footer";
import $ from "jquery";
export default {
  data() {
    return {
      base: window.location.origin
    }
  },
  computed: {
    room(){
      var room = this.$store.state.rooms[this.$route.params.id];
      return room
    }
  },
  methods: {
    
  },
  mounted() {
    this.$store.state.loadingPage = true;
    setTimeout( () => {
      this.$store.state.loadingPage = false;
    }, 1000);
    if (!this.$store.state.checkInDate &&
      !this.$store.state.checkOutDate &&
      !this.$store.state.adults &&
      !this.$store.state.kids) this.$router.push('/Booking')
    // حطتة هنا برضو عشان لو عملت ريلود وانت جوا الروم يجيب البياانت برضو 
    this.$store.dispatch('getRooms')
    window.scrollTo(0,0);
    var ProgressBar = require("progressbar.js");
    var options = {
      easing: 'easeInOut',
      color: "#197175",
      strokeWidth: 2.1,
      trailColor: '#f4f4f4',
      text: {
        value: '0%',
        className: 'progressbar__label',
        style: {
            color: '#CC3F3A',
            position: 'absolute',
            left: '90%',
            top: '-300%',
            padding: 0,
            margin: 0,
            fontSize: "20px",
            transform: {
              prefix: true,
              value: 'translate(-50%, -50%)'
            }
        },
        autoStyleContainer: true,
        alignToBottom: true
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + '%');
      }
      };
    var bar1 = new ProgressBar.Line('#reviews', options);
    var bar2 = new ProgressBar.Line('#reviews2', options);
    var bar3 = new ProgressBar.Line('#reviews3', options);
    var bar4 = new ProgressBar.Line('#reviews4', options);
    var bar5 = new ProgressBar.Line('#reviews5', options);
    var bar6 = new ProgressBar.Line('#reviews6', options);
     
    $(window).on("scroll", function() {
      if($(window).scrollTop() >= $(".section5").offset().top - 400) {
        bar1.animate(0.97);
        bar2.animate(0.9);
        bar3.animate(0.82);
        bar4.animate(0.75);
        bar5.animate(0.6);
        bar6.animate(0.4);
      }
    });

    $(".section1 .info2").css({
      marginTop: "12%",
    })

    $(window).on("scroll", function() {
      if($(window).scrollTop() >= $(".section6").offset().top + 500) {
        $(".section1 .info2").css({
          marginTop: "1%",
          opacity: 0
        })
      } else {
        $(".section1 .info2").css({
          marginTop: "12%",
          opacity: 1
        })
      }
    })

  },
  components: {
    "app-footer": footer
  },
  props: []
}
</script>