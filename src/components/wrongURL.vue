<template>
  <div class="wrongURL">
    <div class="container">
      <h1>Croza Hotel</h1>
      <i class="far fa-frown"></i>
      <p>OOPS, We are sorry, something went wrong or you entered a wrong URL, just go back to the previous page or check your internet connection...</p>
      <i class="fas fa-tools"></i>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrongURL {
  position: relative;
  z-index: 999999;
  background-color: #fff;
  
  h1 {
    display: inline-block;
  }
  i.fa-frown {
    margin-top: 8%;
    font-size: 30px;
    margin-left: 20px;
  }
  p {
      margin-top: 20px;
      margin-bottom: 50px;
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      font-size: 18px;
  }
  i.fa-tools {
      font-size: 100px;
      display: block;
  }
}
</style>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>