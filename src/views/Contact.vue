<template>
  <div class="contact">
    <!-- start header -->
    <div class="header">
      <h1>Ways To Find Us...</h1>
      <p class="top">You Can Easily Find Us On all Social Websites, We Are Waiting For Your Visit</p>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="subscribeUs">
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/ug6CX8jGRKk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="row">
                <div class="col-lg-6">
                  <div class="info1 text-left">
                    <p class="illu">OUR HOTEL YOUTUBE CHANNEL</p>
                    <h3>Awesome Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eveniet quaerat obcaecati quos esse. Consequatur earum dicta excepturi et</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="info2 text-left">
                    <input type="text" placeholder="Enter Your Email Address">
                    <input type="checkbox" name="" id="">
                    <span>Get New Updates & Announcements</span>
                    <button>SUBSCRIBE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end header -->
    <!-- start section 1 -->
    <div class="section1">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="message">
              <h2>Send us a message</h2>
              <p>feel free to reach us if you need any assistance</p>
              <input type="text" placeholder="Your Name">
              <input type="text" placeholder="Your Email">
              <input type="number" placeholder="Phone Number">
              <textarea name="" id="" placeholder="Your Message"></textarea>
              <button class="btn btn-danger">Submit message</button>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="map">
              <h2>Contact Us</h2>
              <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=egypt&t=&z=3&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net/blog/divi-discount/">blaack friday</a></div></div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="first">
                    <h4>Adress</h4>
                    <p>Egypt</p>
                    <p>sohag government</p>
                    <p>22 hay rashed street</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="second">
                    <h4>Information</h4>
                    <p>iam ahmad eid</p>
                    <p>ge.suis.eid@gmail.com</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="third">
                    <h4>Adress</h4>
                    <p>Facebook</p>
                    <p>Instaugram</p>
                    <p>Twitter</p>
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
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-6">
            <div class="cont">
              <i class="fas fa-headphones-alt"></i>
              <h5>Phone Number</h5>
              <p>+201025864313</p>
              <p>+201117286912</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="cont">
              <i class="far fa-envelope"></i>
              <h5>Email Address</h5>
              <p>ge.suis.eid@gmail.com</p>
              <p>ge.suis.eid@gmail.com</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="cont">
              <i class="fas fa-map-marker-alt"></i>
              <h5>My Location</h5>
              <p>Egypt, Sohag</p>
              <p>22 Hay Rashed Street</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 2-->
    <!-- start footer -->
    <app-footer></app-footer>
    <!-- end footer -->
  </div>
</template>

<style scoped lang="scss">
@import "../css/variables.scss";
@import "../css/mixins.scss";
.contact {
  /* start header */ 
  .header {
    background: url("../assets/img/contact/header/head.png") no-repeat center /cover;
    height: 600px;
    h1 {
      padding-top: 100px;
      color: #fff;
      font-size: 40px;
    }
    p.top {
      color: rgb(218, 218, 218);
    }
    .subscribeUs {
      background-color: #fff;
      margin-top: 40px;
      box-shadow: 0px 1px 7px rgb(128, 168, 160);
      padding-bottom: 50px;
      iframe {
        margin-bottom: 30px;
      }
      .info1, .info2 {
        padding: 0 40px 0 40px;
        margin-top: 30px;
      }
      .info1 {
        p {
          padding-bottom: 0;
          margin-bottom: 0;
        }
        p.illu {
          font-size: 13px;
        }
        h3 {
          font-size: 30px;
          font-weight: bold;
        }
        p {
          font-size: 13px;
          color: $textcolor;
        }
      }
      .info2 {
        input[type="text"] {
          display: block;
          width: 90%;
          padding: 2px 10px;
          margin-bottom: 10px;
        }
        input[type="checkbox"] {
          margin-right: 5px;
        }
        span {
          font-size: 15px;
        }
        button {
          width: 90%;
          margin-top: 20px;
          height: 40px;
          background-color: rgb(223, 51, 51);
          color: #fff;
          border: none;
          box-shadow: 2px 2px 10px #ccc;
          &:hover {
            background-color: rgb(196, 23, 23);
          }
        }
      }
    }
    @include mb {
      h1 {
        font-size: 25px;
      }
      p.top {
        font-size: 12px;
        width: 80%;
        margin: 0 auto 30px;
      }
      .subscribeUs {
        iframe {
          height: 350px;
        }
      }
    }
  }
  /* end header */
  /* start section 1 */
  .section1 {
    margin-top: 450px;
    margin-bottom: 100px;
    .message {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 50px 5px;
      h2 {
        font-size: 40px;
      }
      p {
        color: $textcolor;
        margin-bottom: 50px;
      }
      input {
        display: block;
        margin: 15px auto;
        width: 80%;
        border: none;
        background-color: rgb(238, 240, 240);
        padding: 10px 15px;
      }
      textarea {
        width: 80%;
        height: 150px;
        padding: 3px 10px;
        border: none;
        background-color: rgb(238, 240, 240);
      }
      button {
        width: 80%;
        height: 40px;
        margin-top: 20px;
      }
    }
    .map {
      margin-left: 20px;
      h2 {
        margin-bottom: 40px;
      }
      .first, .second, .third {
        margin: 40px auto;
        text-align: left;
        h4 {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        p {
          color: $textcolor;
          font-size: 15px;
          margin: 5px 0;
        }
      }
    }
    @include mb {
      margin-bottom: 50px;
      .message {
        margin-bottom: 50px;
        h2 {
          font-size: 30px;
        }
        p {
          font-size: 14px;
          margin-bottom: 30px;
        }
        input {
          padding-top: 7px;
        }
      }
      .map {
        .first, .second, .third {
          margin-top: 0;
          margin-bottom: 30px;
        }
        .first {
          margin-top: 40px;
        }
      }
    }
    @include sm {
      margin-bottom: 100px;
      margin-top: 500px;
      .message {
        margin-bottom: 50px;
        h2 {
          font-size: 30px;
        }
        p {
          font-size: 14px;
          margin-bottom: 30px;
        }
        input {
          padding-top: 7px;
        }
      }
      .map {
        .first, .second, .third {
          margin-top: 0;
          margin-bottom: 30px;
        }
        .first {
          margin-top: 40px;
        }
      }
    }
  }
  /* end section 1 */
  /* start section 2 */
  .section2 {
    padding-bottom: 80px;
    padding-top: 150px;
    background-color: #f8f4f4;
    .cont {
      position: relative;
      border: 1px solid rgb(238, 237, 237);
      background-color: #fff;
      border-radius: 10px;
      text-align: left;
      padding: 10px 40px;
      margin-bottom: 70px;
      &:hover {
        i {
          background-color: rgb(240, 68, 68);
          color: #fff;
        }
      }
      i {
        position: absolute;
        top: -25%;
        left: 10%;
        width: 80px;
        height: 80px;
        line-height: 78px;
        text-align: center;
        background-color: #fff;
        font-size: 35px;
        border-radius: 50%;
        border: 1px solid rgb(228, 227, 227);
        color: rgb(240, 68, 68);
        transition: all 0.3s ease-in-out;
      }
      h5 {
        margin-top: 45px;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 1.5px;
      }
      p {
        color: $textcolor;
        margin: 10px 0 5px 0;
      }
    }
    @include mb {
      .cont {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  /* end section 2 */
}
</style>

<script>
import footer from "../components/footer"
export default {
  data() {
    return {

    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$store.state.loadingPage = true;
    setTimeout( () => {
      this.$store.state.loadingPage = false;
    }, 1000);
  },
  components: {
    "app-footer": footer
  }
}
</script>