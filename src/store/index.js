import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openSearch: false,
    openSignIn: false,
    checkInDate: "",
    checkOutDate: "",
    adults: "",
    kids: "",
    loadingPage: true,
    rooms: {},
    user: null,
    errMsg: false
  },
  mutations: {
    setRoomData(state, roomData){
      state.checkInDate = roomData.checkIn
      state.checkOutDate = roomData.checkOut
      state.adults = roomData.adults
      state.kids = roomData.kids
    },
    setRooms (state, rooms){
      state.rooms = rooms
    }, 
    error(state, msg){
      state.errMsg = msg
    },
    setUser(state, user){
      state.errMsg = false
      // دي بتشتغل لو العضو سجل الدخول بانها تخلي الاستيت اللي اسمة يوزر هو نفسة الاوبجكت اللي فية بيانات العضو دة عشان لو هتستعملها جوا الموقع بعدين و لو هتعمل بيها تشيكات ان كان مسجل دخول ولا لاء وكدة زي ما عملنا هنا
      state.user = user
    },
    signOut(state){
      state.user = false
    },
  },
  actions: { // انا مش شايف الاوبجيكت اللي فيه الرومات . فينه !؟
    getRooms ({commit}){
      var rooms = JSON.parse(localStorage.getItem('allRooms'))
      commit('setRooms', rooms)
      // بص انا حاطط اوبجكت فاضي فوق المفروض بيبقى فية الرومات صح ؟ .. انا بجيب هنا الرومات من اللوكال ستوريدج واحطها فالاوبجكت دة 
    },
    updateRoom({commit}, updates){
      // الفانكشن دي هتعمل اية ؟ هتعمل ابديت لروم معينة .. يعني مثلا انت عدلت سعر روم او تاريخ او اضفت بيانات او اي كان .. هتدخلها الاوبجكت بتاع الروم دي بعد ما تعدله ف هيا هتروح اللوكال ستورج و تدور على العنصر ااو الاوبجكت اللي لية نفس الاي دي و يعدلة يحط مكانة الاوبجكت الجديد وبعدين يحفظة تاني فاللوكال ستوريدج و بعدين يعدل اوبجكت الرومز اللي فالفيو اكس فوق .. عاوزين نجربة بقى وريني المكان اللي عاوز تعمل منة الحجز وكدة والنت عندي بطئ مشي بالراحة
      var rooms = JSON.parse(localStorage.getItem('allRooms'))
      rooms[updates.id] = updates
      localStorage.setItem('allRomms', JSON.stringify(rooms))
      commit('setRooms', rooms)
    },
    // نبدأ من عند التسجيل 
    signIn({commit}, userData){
      // بنجيب اليوزرس المتسجلين فاللوكال ستورديج
      var users = JSON.parse(localStorage.getItem('users'))
      // برضو هنا بنشوف فية عضو متسجل فيهم لية نفس الايميل اللي العضو بيدخلة فتسجيل الدخول لا لا
      const user = users[userData.email]
      if (user){
        // لو فية عضو مسجل بالايميل دة خش عالشرط اللي بعدة وهو شوف الباسورد اللي العضو بيدخلة دلوقتي ف تسجيل الدخول هل هو هو الباسورد المتخزن فالاوبجكت اللي فاللوكال ستورديج ؟
        if (user.password == userData.password){
          // لو فعلا نفس الباسورد يبقى هشغل فانكشن الميوتيشن اللي بتتمم تسجيل الدخول
          var userjson = JSON.stringify(user)
          // هنا لما عضو يسجل دخول والميوتيشن تشتغل وتخلي الاستيت اللي اسمة يوزر متخزن فية بياانات او اوبجكت العضو اللي سجل دخول .. لو عملت ريلود الفيو اكس بيرجع الاستيت زي ماكانت ف كدة هتضر تسجل دخول من تاني .. عشان كدة انا عملت هنا لما تسجل دخول بيخزن فاللوكال استورج ان فية عضو حاليا مسجل دخول
          // وفهمتك
          localStorage.setItem('currentUser', userjson)
          commit('setUser', user)
        } else {
          commit('error', 'ERROR, Password Is Incorrect!')
        }
      } else {
        commit('error', 'ERROR, User Is Not Found!')
      }
    },
    signUp({commit, dispatch}, userData){
      // اول حاجة هنا انا بجيب من اللوكال استورج اليوزرس المتسجلين 
      var users = JSON.parse(localStorage.getItem('users'))
      // بعمل تشيك ان كان فية يوزرس اصلا ولا دة اول واحد يسجل ؟
      if (users) {
        // لو فية يوزرس هعمل فاريبل ادور فية عن العضو اللي عاوز يسجل يعني بشوف اليوزرس اللي مسجلين هل فيهم حد متخزن كاوبجكت لية نفس الايميل اللي العضو دخلة دلوقتي ولا لا؟
        const user = users[userData.email]

        if (!user){
          // لو مفيش عضو مسجل بالايميل دة قبل كدة هسجل انا اوبجكت جديد ف اوبجكت اليوزرس واخزن فية البيانات بتاعة العضو دة اللي هيا الاسم والباسورد
          users[userData.email] = userData
          // عشان تتحط اي بيانات فاللوكال ستورج لازم هنعملها سترينجفاي الاول
          users = JSON.stringify(users)
          // هنا بنخزن كل اليوزرس من تاني فاللوكال استوريدج بعد ما ضفنالهم العضو الجديد
          localStorage.setItem('users', users)
          // دي اختياري مش لازم تعملها وهي اني بعد التسجيل بخلية يشغل فانكشن تجسيل الدخول
          dispatch('signIn', userData)
        } else {
          // هنا طبعا لو الشرط فوق ماتحققكش يعني فية عضو مسجل بالاكونت دة فعلا
          commit('error', 'ERROR, a user already registered with this email!')
        }
      } else {
        users = {}
        users[userData.email] = userData
        users = JSON.stringify(users)
        localStorage.setItem('users', users)
        dispatch('signIn', userData)
      }
    },
    checkSignedInUser({commit}){
      var user = JSON.parse(localStorage.getItem('currentUser'))
      if (user){
        commit('setUser', user)
      }
    },
    // تسجيل الخروج 
    signOut({commit}){
      // تسجيل الخروج بيمسع من اللوكال استوريدج الكرنت يوزر
      localStorage.removeItem('currentUser')
      commit('signOut')
    }
  },
  modules: {
  }
})

// بص اللوكال ستوريج دي زي ما قلتلك مخزن فالبراوزر .. انا اللي عملتة فالاول اني خزنت فية الاوبجكت بتاع الرومات دي  .. دلوقتي انا فالاكشن فوق بستدعيهم من اللوكال ستوريج 
// الاوامر بتاعتة كدة
// localStorage.setItem('name', item) // دة عشان تخزن حاجة
// localStorage.getItem('name') // دة عشان تستدعي حاجة
// localStorage.removeItem('name') // عشان تمسح حاجة
// localStorage.clear()  // عشان تفرع الاستورج كلها مرة واحدة  .. متستخدمهوش يعني
