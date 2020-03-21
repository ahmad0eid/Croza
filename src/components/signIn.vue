<template>
  <div class="signIn">
    <div class="signInForm">
      <label for="">E-mail</label>
      <input type="email" v-model="email">
      <label for="">Password</label>
      <input type="password" v-model="password">
      <input type="checkbox">
      <span>Keep me signed in</span>
      <button @click="signIn">SIGN IN</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../css/variables.scss";
@import "../css/mixins.scss";
.signIn {
  .signInForm {
    label {
    margin-left: 10%;
    margin-bottom: 0;
    margin-top: 10px;
    }
    input[type="checkbox"] {
        display: inline-block;
        width: auto;
        margin-left: 10%;
        margin-right: 3px;
        margin-top: 15px;
        padding: 0;
        height: auto;
    }
    span {
        text-align: left;
    }
    input {
        display: block;
        margin: 1px auto;
        width: 80%;
        border-radius: 20px;
        border: 1px solid #ccc;
        height: 35px;
        outline: none;
        padding: 2px 20px;
    }
    button {
        display: block;
        margin: 20px auto;
        width: 80%;
        border-radius: 20px;
        height: 40px;
        color: #fff;
        background-image: linear-gradient($maincolor, rgb(33, 71, 83));
        border: none;
        outline: none;
        transition: all 0.3s ease-in-out;
        &:hover {
        background-image: linear-gradient($maincolor, rgb(17, 35, 41));
        }
    }
  }
  @include mb {
    .signInForm {
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
}
</style>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn(){
      // احنا كدة عملنا تسجيل الدخول الخروج بس باقي حاجة بسيطة بس هنعملها بدل ما بنخزن العضو اللي مسجل دخول حاليا بسجلة فالفيو اكس لما بنعمل تسجيل دخول او خروج لا احنا عاوزين لما نعمل ريلود يتخزن برضو ف هنخزنة فاللوكال ستوريج برضو
      // كدة عملنا نظام تسجيل الدخول و الخروج والتسجيل و كل حاجة فل نرجع للنقطة الاساسية و هي الحجز بقى .. بس الاول فاهم اللي احنا بنعملة ولا اية ؟ 
      // فاهم كل الاساسيات . بس حاسس اني فعلا حمار . ريحني وقولي انك عملتها كذا مره قبل كده علشان كده هي بالنسبالك ساهله . لاني حاسس بغباء فعلا
      // انا طبعا عملتها قبل كدة بالفيربيز وعملتها من الصفر بالنود وإلا مش هتكون بالسهولة دي .. احنا نراجعها سنة سنة و افهمك كل حاجة 
      // ياريت نراجع بس لحظه . دي كلها بالفيو مفيش اي حاجه براه صح ؟كل النظام اللي عملناة دلوقتي باللوكال استوريدج بس مدخلناش فايربيز او نود او اي حاجة باك ايند .. كل دة بنستعمل مخزن البراوزر بس
      // حلو . فهمني وحده وحده كده وانا هحاول بعدج ما اخلص التصميم كده يومين ولا حاجه واعمل انا صفحة تسجيل منن الصفر واحاول فيها ع اساس اللي هتفهمهوني دلوقتي . يلا
      if(this.email == '' || this.password == '') return alert("There Are Some Empty Fields")
      const userData = {email: this.email, password: this.password}
      this.$store.dispatch("signIn", userData)
      setTimeout(() => {
        if(this.$store.state.errMsg) alert(this.$store.state.errMsg)
        else alert("Signed In Successfully")
      }, 2000)
    }
  }
}
</script>
