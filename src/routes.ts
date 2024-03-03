import About from '@/views/About';
import Career from '@/views/Career';
import Projects from '@/views/Projects';
import { createRouter, createWebHistory } from 'vue-router';
import paths from './constants/paths';

const routes = [
  {
    path: paths.ABOUT,
    name: 'About',
    component: About,
  },
  {
    path: paths.CAREER,
    name: 'Career',
    component: Career,
  },
  {
    path: paths.PROJECTS,
    name: 'Projects',
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
