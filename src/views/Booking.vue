<template>
  <div class="booking">
    <!-- start header -->
    <div class="header">
      <div class="layer">
        <div class="container">
          <h1>Feeling Cool Like Your Favorite Place</h1>
          <span>Adventure</span>
          <i class="fas fa-play"></i>
        </div>
      </div>
    </div>
    <!-- end header -->
    <!-- start section 1 -->
    <div class="section1">
      <div class="container">
        <div class="row" id="reservation">

          <div class="col-lg-3 col-md-6">
            <div class="reservation">
              <span class="border"></span>
              <h4>Check In</h4>
              <span>Select Date</span>
                <input type="date" v-model="checkIn">
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="reservation">
              <span class="border"></span>
              <h4>Check Out</h4>
              <span>Select Date</span>
                <input type="date" v-model="checkOut">
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="reservation">
              <span class="border"></span>
              <h4>Person</h4>
              <div class="dropdown">
                <span class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  select Person
                </span>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div class="allOptions">
                    <div class="option1">
                      <label for="">Adults</label>
                      <input type="number" name="" id="" placeholder="How many adults.?" v-model="adults">
                    </div>
                    <div class="option2">
                      <label for="">Kids</label>
                      <input type="number" name="" id="" placeholder="How many kids.?" v-model="kids">
                    </div>
                  </div>
                  <button class="clear" @click="clear">Clear</button>
                  <button class="apply" @click="apply">Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="reservation last">
              <button class="book" id="chooseRoom" @click="chooseRoom">Choose Room</button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- end section 1 -->
    <!-- start section 2 -->
    <div class="section2">
      <div class="container">
        <p>WELCOME TO YOUR HOME</p>
        <h1>Begin You Amazing Adventure...</h1>
        <div class="row">
          <div class="col-lg-6">
            <div class="adv">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, natus impedit quidem eaque quibusdam ad quaerat atque delectus blanditiis ipsum, ullam vero fugit temporibus doloribus sint commodi tempora dignissimos possimus.</p>
              <img src="../assets/img/booking/section2/hotel22.jpeg" alt="">
              <button>Explore More <i class="far fa-arrow-alt-circle-right"></i></button>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="adv">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, natus impedit quidem eaque quibusdam ad quaerat atque delectus blanditiis ipsum, ullam vero fugit temporibus doloribus sint commodi tempora dignissimos possimus.</p>
              <img src="../assets/img/booking/section2/hotel1.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 2 -->
    <!-- start section 3 -->
    <div class="section3">
      <div class="container" id='rooms'>
        <p>WE ARE WAITING FOR YOUR ARRIVAL</p>
        <h1>Rooms / Suits</h1>
        <div class="row">
          <div class="col-lg-8">
            <div class="room1">
              <img src="../assets/img/booking/section2/room2.jpg" alt="" @click="chooseImage(1)">
              <h4>Comfort Room</h4>
              <p>$91 <span>/ night</span></p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="room1">
              <img src="../assets/img/booking/section2/room3.jpg" alt="" @click="chooseImage(2)">
              <h4>Luxe Room</h4>
              <p>$220 <span>/ night</span></p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="room1">
              <img src="../assets/img/booking/section2/room4.jpg" alt="" @click="chooseImage(3)">
              <h4>Grand Room</h4>
              <p>$99 <span>/ night</span></p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="room1">
              <img src="../assets/img/booking/section2/room5.jpg" alt="" @click="chooseImage(4)">
              <h4>Standard Room</h4>
              <p>$52 <span>/ night</span></p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="room1">
              <img src="../assets/img/booking/section2/room1.jpg" alt="" @click="chooseImage(5)">
              <h4>Apartments</h4>
              <p>$620 <span>/ night</span></p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- end section 3 -->
    <!-- start section 4 -->
    <div class="section4">
      <div class="container">
        <h3>We strive to be the best in our field to make you even more comfortable.</h3>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <h4>CLIENTS TRUST</h4>
            <div id="uniqueID"></div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <h4>ROOMS EFFICIENCY</h4>
            <div id="uniqueID2"></div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <h4>CLIENTS SUFFIECIENT</h4>
            <div id="uniqueID3"></div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <h4>POPULAR OPINIONS</h4>
            <div id="uniqueID4"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 4 -->
    <!-- start section 5 -->
    <div class="section5">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="cont">
              <p>CALL US</p>
              <p>+201025864313</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="cont">
              <p>EMAIL US</p>
              <p>ge.suis.eid@gmail.com</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="cont">
              <input type="text" placeholder="ENTER YOUR ID">
              <button><i class="fas fa-search"></i></button>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="cont">
              <i class="fab fa-facebook-f this"></i>
              <i class="fab fa-twitter this"></i>
              <i class="fab fa-google-plus-g this"></i>
              <i class="fab fa-linkedin-in this"></i>
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

<style scoped lang="scss">
@import "../css/variables.scss";
@import "../css/mixins.scss";
/* start header */
.header {
  background: url("../assets/img/booking/header/test.png") no-repeat center /cover;
  height: 650px;
  position: relative;
  text-align: left;
  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    h1 {
      padding-top: 150px;
      color: #fff;
      font-size: 80px;
      text-align: left;
      width: 70%;
      margin-bottom: 50px;
    }
    span {
      color: #fff;
      font-size: 22px;
      margin-left: 20px;
      margin-right: 30px;
    }
    i {
      color: $maincolor;
      background-color: #fff;
      padding: 20px;
      border-radius: 50%;
      cursor: pointer;
      text-align: center;
      font-size: 20px;
      line-height: 18px;
      padding-left: 22px;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  @include mb {
    height: 550px;
    .layer {
      h1 {
        font-size: 50px;
        width: 80%;
        margin-bottom: 30px;
      }
      span {
        margin-left: 10px;
      }
      i {
        padding: 15px 15px 15px 17px;
        font-size: 18px;
      }
    }
  }
  @include sm {
    .layer {
      h1 {
        font-size: 60px;
        width: 80%;
        margin-bottom: 30px;
      }
    }
  }
}
/* end header */
/* start section 1 */
.section1 {
  margin-top: 50px;
  margin-bottom: 100px;
  .reservation {
    border: 1px solid #ccc;
    background-color: rgb(250, 246, 246);
    height: 150px;
    padding: 20px 0;
    position: relative;
    &:hover {
      span.border {
        height: 100%;
      }
    }
    &.last {
      background-color: #fff;
      border: none;
      padding: 0;
    }
    span.border {
      position: absolute;
      top: 0;
      left: -2px;
      width: 5px;
      height: 0%;
      background-color: $secondcolor;
      transition: all 0.3s ease-in-out;
    }
    input {
      overflow: hidden;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 0 5px 0 20px;
      margin-top: 10px;
      outline: none;
    }
    button.book {
      width: 100%;
      height: 100%;
      margin-left: -30%;
      background-color: $secondcolor;
      color: #fff;
      font-size: 30px;
      border: none;
      outline: none;
      &:hover {
        background-color: rgb(187, 50, 50);
      }
    }
    .dropdown {
      margin-top: 20px;
      span {
        font-size: 18px;
      }
    }
    .allOptions {
      display: flex;
      padding: 20px;
      .option1, .option2 {
        border: 1px solid #ccc;
        margin: 10px;
        padding: 20px;
        border-radius: 20px;
        input {
          margin: 0;
          outline: none;
        }
        label {
          margin-left: 5%;
        }
      }
    }
    button.clear, button.apply {
      width: 200px;
      height: 40px;
      margin-left: 10%;
      border-radius: 20px;
      color: #fff;
      border: none;
      outline: none;
    }
    button.clear {
      background-color: $secondcolor;
      &:hover {
        background-color: #fff;
        color: $secondcolor;
        border: 2px solid $secondcolor;
      }
    }
    button.apply {
      background-color: $maincolor;
      &:hover {
        background-color: #fff;
        color: $maincolor;
        border: 2px solid $maincolor;
      }
    }
  }
  @include mb {
    .reservation {
      width: 80%;
      margin: auto;
      button.book {
        margin-left: 0;
        margin-right: 30px;
      }
      .allOptions {
        display: block;
        input {
          display: block;
        }
      }
      .dropdown {
        button {
          width: 40%;
          font-size: 13px;
          margin-left: 7%;
        }
      }
    }
  }
  @include sm {
    .reservation {
      margin-bottom: 20px;
      button.book {
        margin-left: 0;
        margin-right: 30px;
      }
    }
  }
}
/* end section 1 */
/* start section 2 */
.section2 {
  margin-top: 150px;
  margin-bottom: 200px;
  h1 {
    font-size: 70px;
    width: 70%;
    text-align: left;
  }
  p {
    color: rgb(168, 168, 168);
    text-align: left;
    font-size: 20px;
  }
  .adv {
    margin-top: 80px;
    text-align: left;
    p {
      font-size: 16px;
      color: $textcolor;
    }
    img {
      width: 95%;
      filter: brightness(0.8);
      margin-top: 50px;
      height: 100%;
      position: relative;
    }
    button {
      position: absolute;
      top: 90%;
      left: 59%;
      background-color: #fff;
      color: rgb(90, 90, 90);
      border: none;
      width: 35%;
      height: 10%;
      font-size: 18px;
      i {
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        i {
          position: relative;
          transform: translateX(10px);
          color: $secondcolor;
        }
      }
    }
  }
  @include mb {
    p {
      font-size: 15px;
    }
    h1 {
      font-size: 40px;
      width: 100%;
    }
    .adv {
      margin-top: 70px;
      img {
        margin-top: 20px;
      }
    }
  }
  @include sm {
    h1 {
      width: 90%;
    }
  }
}
/* end section 2 */
/* start section 3 */
.section3 {
  margin-bottom: 200px;
  p {
    color:rgb(168, 168, 168);
    font-size: 20px;
    text-align: left;
  }
  h1 {
    text-align: left;
    font-size: 70px;
  }
  .room1 {
    margin-top: 50px;
    overflow: hidden;
    border-radius: 10px;
    img {
      width: 100%;
      border-radius: 10px;
      height: 350px;
      filter: brightness(0.7);
      transition: all 0.3s ease-out;
      cursor: pointer;
      position: relative;
      &:hover {
        transform: scale(1.05);
      }
    }
    h4, p {
      position: absolute;
      left: 30px;
      color: #fff;
    }
    h4 {
      top: 75%;
      font-size: 25px;
    }
    p {
      top: 85%;
      font-size: 30px;
      font-weight: bold;
      span {
        font-size: 20px;
        font-weight: normal;
        color: rgb(216, 214, 214);
      }
    }
  }
  @include mb {
    p {
      font-size: 15px;
    }
    h1 {
      font-size: 50px;
      width: 100%;
    }
  }
  @include sm {
    h1 {
      width: 90%;
    }
  }
}
/* end section 3 */
/* start section 4 */
.section4 {
  margin-bottom: 150px;
  h3 {
    text-align: left;
    width: 80%;
    font-size: 50px;
  }
  h4 {
    margin-top: 120px;
    color: $textcolor;
    font-size: 20px;
  }
  #uniqueID, #uniqueID2, #uniqueID3, #uniqueID4 {
    width: 60%;
    margin: 80px auto;
    font-size: 35px;
    font-size: bold;
    color: rgb(86, 207, 191);
  }
  @include mb {
    h3 {
      font-size: 40px;
      width: 100%;
    }
    h4 {
      margin-top: 80px;
    }
    #uniqueID, #uniqueID2, #uniqueID3, #uniqueID4 {
      margin: 60px auto;
      width: 30%;
    }
  }
}
/* end section 4 */
/* start section 5 */
.section5 {
  .container {
    background-color: $maincolor;
    .cont {
      padding: 20px;
      text-align: left;
      p {
        margin: 0;
        color: #fff;
      }
      input {
        font-size: 13px;
        padding: 4px 0 3px 10px;
        width: 80%;
        height: 30px;
        border-radius: 5px;
        border: none;
        margin-top: 5%;
      }
      button {
        height: 28px;
        border-radius: 5px;
        background-color: $secondcolor;
        color: #fff;
        border: none;
        width: 40px;
        margin-left: -19%;
      }
      i.this {
        color: #fff;
        font-size: 20px;
        margin-top: 7%;
        margin-right: 10%;
        cursor: pointer;
        &:hover {
          color: $secondcolor;
        }
      }
    }
  }
  @include mb {
    .cont {
      padding: 20px 20px 0 20px !important;
      input {
        padding-bottom: 2px !important;
      }
      button {
        margin-left: -10% !important;
      }
      i.this {
        margin-bottom: 50px;
        margin-left: 1px !important;
      }
    }
  }
  @include sm {
    .cont {
      padding: 20px 20px 0 20px !important;
      input {
        padding-bottom: 2px !important;
      }
      button {
        margin-left: -14% !important;
      }
      i.this {
        margin-bottom: 50px;
        margin-left: 1px !important;
      }
    }
  }
  @include md {
    .cont {
      padding: 20px 20px 0 20px !important;
      input {
        padding-bottom: 2px !important;
        width: 90% !important;
      }
      button {
        margin-left: -24% !important;
      }
      i.this {
        margin-bottom: 50px;
        margin-left: 1px !important;
      }
    }
  }
}
/* end section 5 */
</style>

<script>
/* eslint-disable */
import footer from "../components/footer";
import $ from "jquery";
export default {
  data() {
    return {
      checkIn: '',
      checkOut: '',
      adults: '',
      kids: ''
    }
  },
  methods: {
    apply(){
      var { checkIn, checkOut, adults, kids } = this
      var RoomData = { checkIn, checkOut, adults, kids }
      this.$store.commit('setRoomData', RoomData)
    },
    chooseImage(id) {
      if (this.checkIn != '' && this.checkOut != '' && this.adults != '' && this.kids != '') {
        this.apply()
        this.$router.push(`/room/${id}`);
      } else {
        alert('Please, Fill The Requiered Data First!')
        var reservation = document.getElementById("reservation");
        reservation.scrollIntoView({behavior: "smooth", block: "center"})
      }
    },
    chooseRoom() {
      var rooms = document.getElementById("rooms");
      rooms.scrollIntoView({behavior: "smooth", block: "center"});
    },
    clear() {
      this.adults = "",
      this.kids = ""
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$store.state.loadingPage = true;
    setTimeout( () => {
      this.$store.state.loadingPage = false;
    }, 1000);
    // اول ما الصفحة تحمل بنفذ الاكشن دة و يجيب الرومات من اللوكات استوريدج
    this.$store.dispatch('getRooms')
    var vueInstance = this;
    var ProgressBar = require("progressbar.js");
    var opts = {
      strokeWidth: 7,
      easing: 'easeInOut',
      duration: 1400,
      color: '#197175',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'},
      step: function(state, circle) {
        circle.path.setAttribute('stroke', "#197175");

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value + "%");
        }
      },
      transform: {
        prefix: true,
        value: 'translate(-50%, -50%)'
      },
    }
    var lineOne = new ProgressBar.Circle('#uniqueID', opts);
    var lineTwo = new ProgressBar.Circle('#uniqueID2', opts);
    var lineThree = new ProgressBar.Circle('#uniqueID3', opts);
    var lineFour = new ProgressBar.Circle('#uniqueID4', opts);
    $(window).on("scroll", function() {
      if($(window).scrollTop() >= $(".section4").offset().top) {
        lineOne.animate(0.97)
        lineTwo.animate(0.80)
        lineThree.animate(0.70)
        lineFour.animate(0.50)
      }
    });
  },
  components: {
    "app-footer": footer
  }
}
</script>