import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/home.vue')
const channel = () => import('../views/channel/channel.vue')
const friend = () => import('../views/friend/friend.vue')
const store = () => import('../views/store/store.vue')
const famous = () => import('../views/famous/famous.vue')
const rank = () => import('../views/rankDetail/rankDetail.vue')
const sound = () => import('../views/soundDetail/soundDetail.vue')

Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/home'
    },
		{
			path: '/sound',
			name: 'sound',
			component: sound
		},
    {
      path: '/home',
      name: 'home',
      component: home
    },
		{
			path: '/rank',
			name: 'rank',
			component: rank
		},
    {
      path: '/channel',
      name: 'channel',
      component: channel
    },
    {
      path: '/friend',
      name: 'friend',
      component: friend
    },
    {
      path: '/famous',
      name: 'famous',
      component: famous
    },
    {
      path: '/store',
      name: 'store',
      component: store
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
