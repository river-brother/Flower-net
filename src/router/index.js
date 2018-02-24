import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

//创建异步组件并 分开打包
const Footer = r => require.ensure([], () => r(require('@/pages/Footer.vue')), 'Footer')
const Section = r => require.ensure([], () => r(require('@/pages/Section.vue')), 'Section')
const Classify = r => require.ensure([], () => r(require('@/pages/Classify.vue')), 'Classify')
const Shopping = r => require.ensure([], () => r(require('@/pages/Shopping.vue')), 'Shopping')
const Mine = r => require.ensure([], () => r(require('@/pages/Mine.vue')), 'Mine')
const Login = r => require.ensure([], () => r(require('@/pages/Login.vue')), 'Login')
const Register = r => require.ensure([], () => r(require('@/pages/Register.vue')), 'Register')

Vue.use(Router)

export default new Router({
  routes: [
   {
    	path: '/',
      name: 'footer',
      component: Footer,
      children:[
                 {path:'/', component: Section},
                 {path:'/classify', component: Classify},
                 {path:'/shopping', component: Shopping},
                 {path:'/mine', component: Mine},
           		]
    	
   },{path:'/login', component: Login},
   	 {path:'/register', component: Register},
  ]
})
