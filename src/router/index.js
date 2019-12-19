import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Login'
import ULogin from '../views/ULogin'
import Main from '../views/Main'
import Register from '../views/Register'
import ShowInfo from '../components/ShowInfo'
import UploadInfo from '../components/UploadInfo'
import NewRepair from '../components/NewRepair'
import NeedRepair from '../components/NeedRepair'
import NeedPay from '../components/NeedPay'
import Paid from '../components/Paid'
import ShowProperty from '../components/ShowProperty'
import UploadProperty from '../components/UploadProperty'
import Complaint from '../components/Complaint'
import Express from '../components/Express'
import Admin from '../views/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 登录页
      path: '/admin',
      name: 'Login',
      component: Login
    },
    {
      // 登录页
      path: '/login',
      name: 'ULogin',
      component: ULogin
    },
    {
      // 注册
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      // 首页
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/uploadInfo',
          name: 'UploadInfo',
          component: UploadInfo
        },
        {
          path: '/showInfo',
          name: 'ShowInfo',
          component: ShowInfo
        },
        {
          path: '/newRepair',
          name: 'NewRepair',
          component: NewRepair
        },
        {
          path: '/needRepair',
          name: 'NeedRepair',
          component: NeedRepair
        },
        {
          path: '/needPay',
          name: 'NeedPay',
          component: NeedPay
        },
        {
          path: '/paid',
          name: 'Paid',
          component: Paid
        },
        {
          path: '/ShowProperty',
          name: 'ShowProperty',
          component: ShowProperty
        },
        {
          path: '/uploadProperty',
          name: 'UploadProperty',
          component: UploadProperty
        },
        {
          path: '/complaint',
          name: 'Complaint',
          component: Complaint
        },
        {
          path: '/express',
          name: 'Express',
          component: Express
        }
      ]
    },
    {
      // 首页
      path: '/admin_main',
      name: 'Admin_main',
      component: Admin
    }
  ]
})
