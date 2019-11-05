import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import About from "../components/About";
import Add from "../components/Add";
import Detail from "../components/Detail";
import Edit from "../components/Edit";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/home/:id',
      component: Detail
    },
    {
      path: '/edit/:id',
      component: Edit
    }
  ]
})
