import paths from '@/constants/paths'
import About from '@/views/About'
import Career from '@/views/Career'
import Projects from '@/views/Projects'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {
      name: 'about'
    }
  },
  {
    path: paths.ABOUT,
    name: 'about',
    component: About
  },
  {
    path: paths.CAREER,
    name: 'career',
    component: Career
  },
  {
    path: paths.PROJECTS,
    name: 'projects',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
