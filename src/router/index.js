import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Booking from '../views/Booking.vue'
import room from "../views/room.vue"
import wrongURL from "../components/wrongURL.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Booking',
    name: 'Booking',
    component: Booking
  },
  {
    path: "/room/:id",
    name: "room",
    component: room
  },
  {
    path: "*",    // if user entered a wrong path in the url field...
    name: "wrongURL",
    component: wrongURL
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
