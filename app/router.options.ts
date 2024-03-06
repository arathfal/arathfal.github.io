import type { RouterOptions } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterOptions>{
  routes: (allRouter) => [
    {
      path: '/',
      redirect: () => {
        return { path: '/about' }
      }
    },
    ...allRouter
  ]
}
