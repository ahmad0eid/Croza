<template>
  <div class="sign">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="signInImg">
            <img src="../assets/img/signin/signin.jpeg" alt="">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="signInForm">
            <i class="fas fa-times" @click="$store.state.openSignIn = false"></i>
            <div class="choose">
              <span><span class="me active" id="me1" @click="selectedComponent = 'app-signIn'">Sign In</span></span>
              <span><span class="me" id="me2" @click="selectedComponent = 'app-signUp'">Sign Up</span></span>
              <span class="chooseMe"></span>
            </div>
            <transition name="scale" mode="out-in">
              <component :is="selectedComponent"></component>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../css/mixins.scss";
@import "../css/variables.scss";
.sign {
    background-image: linear-gradient($maincolor, rgb(33, 71, 83));
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999;
    .signInImg {
      margin: 10% auto 0;
      width: 80%;
      margin-right: -3%;
      img {
        width: 100%;
        height: 570px;
        filter: brightness(0.8);
        
      }
    }
    .signInForm {
      transition: all 0.3s ease-in-out;
      background-color: #ccc;
      width: 80%;
      margin: 10% auto 0;
      padding: 40px 0;
      text-align: left;
      background-color: #fff;
      margin-left: -3%;
      height: 570px;
      i {
        text-align: center;
        position: absolute;
        top: 5%;
        right: 10%;
        font-size: 25px;
        color: $maincolor;
        background-color: #fff;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        line-height: 47px;
        border: 2px solid #fff;
        cursor: pointer;
        z-index: 99;
        &:hover {
          background-color: transparent;
          color: #fff;
          border: 2px solid #fff;
        }
      }
      .choose {
        margin: 10px auto 40px;
        text-align: center;
        background-color: rgb(241, 238, 238);
        width: 60%;
        padding: 10px;
        border-radius: 20px;
        position: relative;
        span {    
          cursor: pointer;
          span.me {
            padding: 0;
            z-index: 2;
            position: relative;
            color: 000;
            padding: 10px 35px;
            &.active {
              color: #fff;
            }
          }
        }
        span.chooseMe {
          position: absolute;
          top: 0;
          left: 0;
          background-image: linear-gradient($maincolor, rgb(33, 71, 83));
          width: 50%;
          height: 100%;
          border-radius: 20px;
          z-index: 1;
          transition: all 0.3s ease-in-out;
        }
      }
    }
    @include mb {
      .signInImg {
        display: none;
      }
      .signInForm {
        height: 100%;
        width: 80%;
        margin: 5% auto;
        padding: 40px 0 10px 0;
        i {
          left: 78%;
          top: 30px;
          font-size: 18px;
          background-color: $maincolor;
          color: #fff;
          width: 35px;
          height: 35px;
          line-height: 32px;
          border: 2px solid $maincolor;
          &:hover {
            color: $maincolor;
            border: 2px solid $maincolor;
          }
        }
        .choose {
          font-size: 13px;
          padding: 5px;
          span {    
            span.me {
              padding: 10px 15%;
              &.active {
                color: #fff;
              }
            }
          }
        }
      }
    }
    @include sm {
      .signInImg {
        display: none;
      }
      .signInForm {
        height: 95%;
        width: 70%;
        margin: 5% auto;
        padding: 40px 0 0 0;
        i {
          left: 75%;
          top: 45px;
          font-size: 18px;
          background-color: $maincolor;
          color: #fff;
          width: 35px;
          height: 35px;
          line-height: 32px;
          border: 2px solid $maincolor;
          &:hover {
            color: $maincolor;
            border: 2px solid $maincolor;
          }
        }
        .choose {
          font-size: 15px;
          padding: 10px;
          span {    
            span.me {
              padding: 10px 15%;
              &.active {
                color: #fff;
              }
            }
          }
        }
      }
    }
    @include md {
      .signInImg {
        width: 90%;
        margin-right: -3.5%;
      }
      .signInForm {
        width: 90%;
        margin: 10% auto;
        padding: 40px 0 0 0;
        margin-left: -3.5%;
        i {
          position: absolute;
          top: 5%;
          right: 5%;
          font-size: 22px;
          color: $maincolor;
          background-color: #fff;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          line-height: 43px;
          border: 2px solid #fff;
          cursor: pointer;
          z-index: 99;
          &:hover {
            background-color: transparent;
            color: #fff;
            border: 2px solid #fff;
          }
        }
        .choose {
          font-size: 15px;
          padding: 10px;
          span {    
            span.me {
              padding: 10px 14%;
              &.active {
                color: #fff;
              }
            }
          }
        }
      }
    }
}
.scale-enter-active {
  animation: scale-in 0.2s ease-out forwards;
}
.scale-leave-active {
  animation: scale-out 0.2s ease-out forwards;
}
@keyframes scale-in {
  from {transform: scale(0.7); opacity: 0;}
  to {transform: scale(1); opacity: 1;}
}
@keyframes scale-out {
  from {transform: scale(1); opacity: 1;}
  to {transform: scale(0.7); opacity: 0;}
}
</style>

<script>
import signIn from "./signIn";
import signUp from "./signUp";
import $ from "jquery";
export default {
  data() {
    return {
      selectedComponent: "app-signIn"
    }
  },
  mounted() {
    this.$store.state.loadingPage = true;
    setTimeout( () => {
      this.$store.state.loadingPage = false;
    }, 1000);
    $("span#me1").on("click", function() {
      $("span#me1").addClass("active");
      $("span#me2").removeClass("active");
      $("span.chooseMe").css({
        left: "0%",
        right: "50%"
      })
    })
    $("span#me2").on("click", function() {
      
      $("span#me2").addClass("active");
      $("span#me1").removeClass("active");
      $("span.chooseMe").css({
        left: "50%",
        right: "0%"
      })
    })
  },
  components: {
    "app-signIn": signIn,
    "app-signUp": signUp
  }
}
</script>