<template>
  <div class="signUp">
    <label for="">E-mail</label>
    <input type="email" v-model="email">
    <label for="">Password</label>
    <input type="password" v-model="password">
    <label for="">Repeat Password</label>
    <input type="password" v-model="rePassword">
    <input type="checkbox">
    <span>Remember my account</span>
    <button @click="signUp">SIGN UP</button>
    <p>Sign Up with:</p>
    <div class="icons">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-google-plus-g"></i>
      <i class="fab fa-twitter"></i>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../css/variables.scss";
@import "../css/mixins.scss";
.signUp {
  input {
    display: block;
    width: 80%;
    margin: 0 auto;
    border-radius: 20px;
    border: 1px solid #ccc;
    padding: 2px 20px;
    outline: none;
    height: 35px;
  }
  label {
    margin-left: 10%;
    margin-bottom: 1px;
    margin-top: 10px;
  }
  input[type="checkbox"] {
    width: auto;
    display: inline-block;
    margin-left: 10%;
    height: auto;
    margin-top: 12px;
    margin-right: 5px;
  }
  button {
    display: block;
    width: 80%;
    background-color: $secondcolor;
    color: #fff;
    border: none;
    height: 40px;
    border-radius: 20px;
    margin: 20px auto;
    outline: none;
    &:hover {
      background-color: rgb(180, 41, 41);
    }
  }
  p {
    text-align: center;
  }
  .icons {
    margin: auto;
    text-align: center;
    i {
      background-color: #ccc;
      font-size: 20px;
      padding: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0 5px;
      color: #fff;
      box-shadow: 0 9px 35px #f3f3f3;
      cursor: pointer;
      &.fa-facebook-f {
        background-color: #3b5998;
      }
      &.fa-google-plus-g {
        background-color: #dd4b39;
      }
      &.fa-twitter {
        background-color: #6cb7f0;
      }
    }
  }
  @include mb {
    label {
    font-size: 15px;
    margin-left: 12%;
    }
    span {
      font-size: 15px;
    }
    input {
        height: 30px;
    }
    button {
      font-size: 15px;
      height: 35px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      rePassword: ''    
    }
  },
  methods: {
    signUp(){
      if(this.email == '' || this.password == '' || this.rePassword == '') return alert("There Are Some Empty Fields")
      if(this.password !== this.rePassword) return alert("Password Doesn't Match")
      const userData = {email: this.email, password: this.password}
      this.$store.dispatch("signUp", userData)
      setTimeout(() => {
        if(this.$store.state.errMsg) alert(this.$store.state.errMsg)
        else alert("Signed Up Successfully")
      }, 2000)
    }
  }
}
</script>