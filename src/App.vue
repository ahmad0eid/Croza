<template>
  <div id="app">
    <div id="nav" class="nav">
      <nav class="navbar return navbar-expand-lg navbar-light fixed-top">
        <div class="container">
          <a class="navbar-brand" @click="$router.push({path: '/'})">Cr<i class="fas fa-cog"></i>za</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <router-link to="/" tag="li" class-active="active" exact>Home<span class="navSpan"></span></router-link>
              <router-link to="/Blog" tag="li" class-active="active" exact>Blog<span class="navSpan"></span></router-link>
              <router-link to="/Booking" tag="li" class-active="active" exact>Booking<span class="navSpan"></span></router-link>
              <router-link to="/About" tag="li" class-active="active" exact>About<span class="navSpan"></span></router-link>
              <router-link to="/Contact" tag="li" class-active="active" exact>Contact<span class="navSpan"></span></router-link>
            </ul>
            <div class="icons">
              <i class="fas fa-search" @click="$store.state.openSearch = true"></i>
              <i class="fas fa-bell"></i>
              <!-- بنعمل تشيك ان كان الاستيت دة فية اوبجكت العضو المسجل ولا لاء عشان لو لاء هيكون عبارة عن انديفيند او false -->
              <i class="fas fa-user-alt" @click="$store.state.openSignIn = true" v-if="!$store.state.user"></i>
              <i class="fas fa-sign-out-alt" v-if="$store.state.user" @click="signOut"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <router-view/>
    <app-search v-if="$store.state.openSearch"></app-search> <!-- search component -->
    <app-sign v-if="$store.state.openSignIn"></app-sign> <!-- sign in component -->
    <app-loadingPage v-if="$store.state.loadingPage"></app-loadingPage>
    <span class="top" @click="scrollToTop"><i class="fas fa-arrow-up"></i></span>
  </div>
</template>

<style lang="scss">
@import "css/mixins.scss";
@import "css/variables.scss";
#app {
  font-family: 'Amaranth', ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  span.top {
    position: fixed;
    z-index: 999;
    top: 85%;
    right: 2%;
    background-color: $maincolor;
    color: #fff;
    border: 1px solid #fff;
    width: 60px;
    height: 60px;
    font-size: 35px;
    line-height: 60px;
    border-radius: 50%;
    cursor: pointer;
    transform: translateY(100px);
    transition: all 0.3s ease-in-out;
  }
}
.nav {
  margin: auto;
  transition: all 0.2s ease-in-out;
  nav.navbar {
    list-style: none;
    background-color: $maincolor;
    margin: 0 auto;
    width: 100%;
    padding: 0;
    transition: all 0.2s ease-in-out;
    &.srcolling {
      animation: scrollingAnimation 0.5s forwards;
      li {
        color: #000;
      }
      i {
        color: #000;
      }
      .navbar-brand {
        color: #000;
      }
    }
    &.return {
      animation: returnAnimation 0.5s forwards;
      li {
        color: rgb(228, 225, 225);
      }
      i {
        color: #fff;
      }
      .navbar-brand {
        color: #fff;
      }
    }
    @keyframes scrollingAnimation {
      0% {
        transform: translateY(0px);
        background-color: $maincolor;
      }
      50% {
        transform: translateY(-70px);
        background-color: #fff;
      }
      100% {
        transform: translateY(0px);
        background-color: #fff;
        box-shadow: 0 9px 10px -2px rgba(85,149,240,.20);
      }
    }
    @keyframes returnAnimation {
      0% {
        transform: translateY(0px);
        background-color: #fff;
      }
      50% {
        transform: translateY(-70px);
        background-color: #fff;
      }
      100% {
        transform: translateY(0px);
        background-color: $maincolor;
      }
    }
    cursor: pointer;
    a.navbar-brand {
      color: #fff;
      font-weight: bold;
      font-size: 35px;
      img {
        width: 30px;
        height: 30px;
        margin-bottom: 10px;
      }
      i {
        font-size: 30px;
        color: #24D87E;
        animation: rotating 1s infinite;
      }
    }
    @keyframes rotating {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
    li {
      color: rgb(228, 225, 225);
      display: inline-block;
      margin: 15px 10px 15px 10px;
      font-size: 18px;
      text-align: center;
      position: relative;
      span.navSpan {
        position: absolute;
        top: 100%;
        left: -10%;
        background-color: #24D87E;
        width: 0;
        height: 2px;
        transition: all 0.2s ease-in-out;
      }
      &.router-link-exact-active {
        span.navSpan {
          width: 120%;
        }
      }
      &:hover {
        span.navSpan {
          width: 120%;
          right: -10%;
        }
      }
    }
    .navbar-collapse {
      ul {
        margin: auto !important;
        text-align: center !important;
      }
      .icons {
        color: #fff;
        i {
          margin-left: 20px;
        }
      }
    }
  }
  @include mb {
    margin-left: 10px;
    nav.navbar {
      padding: 5px 0;
      a.navbar-brand {
        margin-left: 20px;
        img {
          display: none;
        }
      }
      li {
        text-align: left;
        width: 60px;
        display: block;
        margin-left: 20px;
        margin: 5px 10px 5px 20px;
        span.navSpan {
          left: 0%;
        }
        &.router-link-exact-active {
          text-align: center;
          span.navSpan {
            width: 100%;
          }
        }
      }
      .navbar-collapse {
        .icons {
          margin-top: 30px;
          margin-bottom: 10px;
        }
      }
    }
  }
  @include sm {
    margin-left: 10px;
    nav.navbar {
      li {
        text-align: left;
        width: 60px;
        display: block;
        span.navSpan {
          left: 0%;
        }
        &.router-link-exact-active {
          text-align: center;
          span.navSpan {
            width: 100%;
          }
        }
      }
      .navbar-collapse {
        .icons {
          margin-top: 30px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>

<script>
import search from "./components/search.vue";
import sign from "./components/sign.vue";
import loadingPage from "./components/loadingPage.vue";
import $ from "jquery";
export default {
  data() {
    return {
      
    }
  },
  components: {
    "app-search": search,
    "app-sign": sign,
    "app-loadingPage" : loadingPage
  },
  methods: {
    signOut(){
      this.$store.dispatch('signOut')
    },
    scrollToTop() {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  },
  mounted() {
    setTimeout( () => {
      this.$store.state.loadingPage = false;
    }, 1000);
    // هنا كل ما تدخل عالموقع المنوتد بيشتغل ف كل مرة لما تعمل ريلود هيعمل تشيك ان كان فية عضو مسجل دخول ولا لاء؟
    this.$store.dispatch('checkSignedInUser')

    $(window).on("scroll", function() {
      if($(window).scrollTop() >= 400) {
        $("nav.navbar").addClass("srcolling");
        $("nav.navbar").removeClass("return");
      } else {
        $("nav.navbar").removeClass("srcolling");
        $("nav.navbar").addClass("return");
      }
    })


    // $(window).on("scroll", function() {  // dont do it like that, use css class and keyframes to make it simple
    //   $("nav.navbar").css({
    //     transform: "translateY(-70px)",
    //     backgroundColor: "#fff",
    //   })
    //   if($(window).scrollTop() == 0) {
    //     $("nav.navbar").css({
    //       transform: "translateY(0)",
    //       backgroundColor: "#197175",
    //        boxShadow: "none"
    //     })
    //     $("nav.navbar li").css({
    //       color: "rgb(228, 225, 225)"
    //     })
    //     $("a.navbar-brand").css({
    //       color: "#fff"
    //     })
    //     $("nav.navbar .icons i").css({
    //       color: "#fff"
    //     })
    //   }
    //   if($(window).scrollTop() >= 400) {
    //     $("nav.navbar").css({
    //       transform: "translateY(0)",
    //       boxShadow: "0 9px 10px -2px rgba(85,149,240,.20)"
    //     })
    //     $("nav.navbar li").css({
    //       color: "#000"
    //     })
    //     $("a.navbar-brand").css({
    //       color: "#000"
    //     })
    //     $("nav.navbar .icons i").css({
    //       color: "#000"
    //     })
    //   }
    // })


     $(window).on("scroll", function() {
      if($(window).scrollTop() >= 400) {
        $("span.top").css({
          transform: "translateY(0px)"
        })
      } else {
        $("span.top").css({
          transform: "translateY(100px)"
        })
      }
    })
  }
}
</script>