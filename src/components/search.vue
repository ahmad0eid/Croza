<template>
  <div class="search">
    <div class="lay">
      <div class="searchTools">
        <input type="text" placeholder="Search...">
        <button>search</button>
        <i class="fas fa-times" @click="$store.state.openSearch = false"></i>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../css/mixins.scss";
.search {
    width: 100%;
    height: 100vh;
    position: relative;
    .lay {
      background-color: rgba(0, 0, 0, 0.8);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      .searchTools {
        width: 100%;
        height: 100% !important;
        padding-top: 250px;
        background: url("../assets/img/latest.png") no-repeat center center /cover;
        input {
          width: 500px;
          height: 50px;
          border-radius: 20px;
          padding-left: 20px;
          outline: none;
          border: none;
          font-size: 22px;
          &:focus {
            box-shadow: 1px 1px 10px #000;
          }
        }
        button {
            width: 150px;
            height: 50px;
            border-radius: 20px;
            margin-left: 10px;
            font-size: 22px;
            color: #fff;
            background-color: transparent;
            border: 2px solid #fff;
            transition: all 0.3s ease-in-out;
            outline: none;
            &:hover {
                background-color: #fff;
                color: #197175;
            }
        }
        i {
          position: absolute;
          top: 5%;
          left: 90%;
          color: #fff;
          cursor: pointer;
          background-color: #fff;
          color: #000;
          padding: 10px 10px 10px 10px;
          width: 50px;
          height: 50px;
          line-height: 32px;
          border-radius: 50%;
          font-size: 23px;
          transition: all 0.3s ease-in-out;
          &:hover {
              background-color: transparent;
              color: #fff;
              border: 1px solid #fff;
              line-height: 30px;
          }
        }
      }
        @include mb {
            .searchTools {
                padding-top: 210px;
                input {
                width: 300px;
                display: block;
                margin: 0 auto 15px;
                }
                i {
                    left: 80%
                }
            }
        }
    }
}
</style>

<script>
export default {
    data() {
      return {
        
      }
    },
    mounted() {
      this.$store.state.loadingPage = true;
      setTimeout( () => {
        this.$store.state.loadingPage = false;
      }, 1000);
    }
}
</script>