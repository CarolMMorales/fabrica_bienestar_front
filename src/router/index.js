import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore';
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
          path: '/actions',
          name: 'byacctions',
          component: () => import('../views/ActionsView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/typeActivities',
          name: 'bytypeactivities',
          component: () => import('../views/TypeActivitiesView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/activities',
          name: 'byactivities',
          component: () => import('../views/ActivitiesView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/typesrequests',
          name: 'bytypesrequests',
          component: () => import('../views/TypesOfRequestsView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/requests',
          name: 'byrequests',
          component: () => import('../views/RequestsView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/factors',
          name: 'byfactors',
          component: () => import('../views/FactorsView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/permanence',
          name: 'bypermanence',
          component: () => import('../views/PermanenceView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/inscriptions',
          name: 'byinscriptions',
          component: () => import('../views/InscriptionsView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/inscriptionStudents',
          name: 'byinscriptionStudents',
          component: () => import('../views/EnrolledStudentView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/attendance',
          name: 'byattendance',
          component: () => import('../views/AttendanceView.vue'),
          meta: {
            auth: true
          }
        }
      ]
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  console.log(to.meta.auth);
  const requiredAuth = to.meta.auth;
  const UserStore = useAuthStore();
 
  // Si el token ya está presente en el almacenamiento local, establecerlo en el almacén de estado
  const localStorageToken = localStorage.getItem("Accept");
  if (localStorageToken) {
    UserStore.token = localStorageToken;
  }
 
  // Si el token está presente en el almacén de estado, permitir el acceso
  if (UserStore.token) {
    return next();
  }
 
  // Si la ruta requiere autenticación, redirigir al inicio de sesión
  if (requiredAuth) {
    return next("/login");
  }
 
  // Permitir el acceso a rutas públicas
  return next();
});
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
