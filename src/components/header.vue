<template>
  <div class="header">
    <div class="headView">
      <div class="container">
        <h4>Introducing Our Blogs</h4>
        <h1>welcom to our
          <span class="typed-text">{{typeValue}}</span>
          <span class="cursor" :class="{'typing': typeStatus}">|</span>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem eaque velit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem eaque velit</p>
        <button>Explore More</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"> 
@import "../css/variables.scss";
@import "../css/mixins.scss";
.header {
  color: #fff;
  text-align: left;
  .headView {
    background: url("../assets/img/blog/blog.png") no-repeat center /cover;
    height: 600px;
  }
    h4 {
      padding-top: 150px;
      margin-bottom: 20px;
    }
    h1 {
        font-size: 50px;
        margin-bottom: 30px;
        span.typed-text {
            color: $thirdcolor;
        }
        span.cursor {
            width: 3px;
            color: #fff;
            height: 100%;
            animation: cursorBlink 1s infinite;
        }
        @keyframes cursorBlink {
            49% {color: $maincolor}
            50% {color: transparent}
            99% {color: transparent}
        }
        span.cursor.typing {
            animation: none;
        }
    }
    p {
        color: #fff;
        font-size: 18px;
        width: 70%;
        margin-bottom: 40px;
    }
    button {
      width: 180px;
      height: 45px;
      background-color: #fff;
      color: $maincolor;
      border: none;
      border-radius: 10px;
      font-size: 19px;
      transition: all 0.3s ease-in-out;
      outline: none;
      margin-bottom: 135px;
      &:hover {
        transform: translateY(-5px);
      }
    }
    @include mb {
        h4 {
            font-size: 20px;
            padding-top: 100px;
        }
        h1 {
            font-size: 33px;
        }
        p {
            font-size: 15px;
        }
        button {
            width: 130px;
            font-size: 15px;
            margin-bottom: 60px;
        }
    }
}
</style>

<script>
export default {
    data() {
      return {
        typeValue: "",
        typeStatus: false,
        typeArray: ["blog page", "awesome website", "amazing world"],
        typingSpeed: 100,
        erasingSpeed: 50,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
            if(!this.typeStatus) {
                this.typeStatus = true;
            }
            this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
            this.charIndex += 1;
            setTimeout(this.typeText, this.typingSpeed);
        } else {
            this.typeStatus = false;
            setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
          if(this.charIndex > 0) {
              if(!this.typeStatus) {
                  this.typeStatus = true;
              }
            this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
            this.charIndex -= 1;
            setTimeout(this.eraseText, this.erasingSpeed);
          } else {
              this.typeStatus = false;
              this.typeArrayIndex += 1;
              if(this.typeArrayIndex >= this.typeArray.length) {
                  this.typeArrayIndex = 0;
              }
              setTimeout(this.typeText, this.typingSpeed + 1000);
          }
      }
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay);
    }
}
</script>