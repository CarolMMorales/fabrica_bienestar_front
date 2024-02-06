import { createRouter, createWebHistory } from 'vue-router'
//import { useAuthStore } from '../stores/authStore.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../components/layout/DefaultLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../views/RegisterPerson.vue')
        }
      ]
    },

    {
      path: '/protected',
      component: () => import('../components/layout/ProtectedAdminLayout .vue'),
      meta: {
        auth: true
      },
      children: [
        {
          path: '/persons',
          name: 'byuser',
          component: () => import('../views/PersonsView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/dasboard',
          name: 'bydashboard',
          component: () => import('../views/DashboardView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/eps',
          name: 'byeps',
          component: () => import('../views/EpsView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/contacts',
          name: 'bycontacts',
          component: () => import('../views/ContactsView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/genders',
          name: 'bygenders',
          component: () => import('../views/GendersView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../views/UserViews.vue'),
          meta: {
            auth: true
          }
        }
      ]
    }
  ]
})
/*
//este si funciona descomentar al final 
router.beforeEach(async (to,from, next) => {
  const publicPages = ['/login', '/', '/register']
  const authRequired = !publicPages.includes(to.path)
 // const requiredAuth = to.meta.auth
  // Accede al almacén de estado de usuario (useUserStore)
  const authStore = useAuthStore()
  const localStorageToken =  localStorage.getItem('Accept')
  if (authRequired && !localStorageToken ) {
    authStore.returnurl = to.fullPath
    return next('/login') 
  }else{
    return next() 
  }

  
})

router.beforeEach(async (to, from, next) => {
  const requiredAuth = to.meta.auth
  const authStore = useAuthStore()

  // Evitar redirección infinita si ya estamos en la página de login
  if (to.path === '/login') {
    return next()
  }

  // Si el usuario tiene un token de autenticación, permitir la navegación
  if (authStore.token) {
    return next()
  }

  // Si la ruta requiere autenticación o si hay información de usuario en la sesión
  if (requiredAuth || localStorage.getItem('Accept')) {
    return next()
  }

  // Si no se cumple ninguna de las condiciones anteriores, redirigir a la página de login
  return next('/login')
})


router.beforeEach(async (to, from, next) => {
  const publicPages = ['/login', '/', '/register']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()
  if (authRequired && !auth.user) {
    auth.returnurl = to.fullPath
    return '/login'
  }
})



router.beforeEach(async (to, from, next) => {
  const requiredAuth = to.meta.auth
  // Accede al almacén de estado de usuario (useUserStore)
  const authStore = useAuthStore()
  if (authStore.token) {
    return next()
  }
  if (localStorage.getItem('Accept')) {
    await authStore.token
    if (requiredAuth) {
      if (authStore.token) {
        console.log(authStore.token)
        return next()
      }
      return next('/login')
    } else {
      return next()
    }
  } else {
    if (requiredAuth) {
      await authStore.token
      if (authStore.token) {
        console.log(authStore.token)
        return next()
      }
      return next('/login')
    }
    next();
  }
})
*/
export default router
