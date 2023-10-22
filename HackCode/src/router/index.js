import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaceView from '../views/FaceView.vue'
import ChatView from '../views/ChatView.vue'
import HealthView from '../views/HealthView.vue'
import SignView from '../views/SignView.vue'
import SettingsView from '../views/SettingsView.vue'
import SpeechView from '../views/SpeechView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView
  },
  {
    path: '/face',
    name: 'face',
    component: FaceView
  },
  {
    path: '/',
    name: 'health',
    component: HealthView
  },
  {
    path: '/sign',
    name: 'sign',
    component: SignView
  },
  {
    path: '/health',
    name: 'health',
    component: HealthView
  },{
    path: '/settings',
    name: 'settings',
    component: SettingsView
  },
  {
    path: '/tts',
    name: 'tts',
    component: SpeechView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    return {top: 0, left: 0}
  }
})

export default router
