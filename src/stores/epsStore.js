import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from './authStore.js'

//almacen EPS

export const useEpsStore = defineStore('eps_name', () => {

  const authStore = useAuthStore()
  const eps = ref([])

  // Esta función se utiliza para registrar las Eps lcth
  const registerEps = async (
    eps_name,
  ) => {
    try {
      const res = await axios({
        url: '/eps',
        method: 'POST',
        headers: {
          Authorization: "Bearer " + authStore.token
        },
        data: {
            eps_name: eps_name,

        }
      })
      console.log(res.data)
      eps.value.push(res.data.newRegisterPerson)
      console.log(eps)
    } catch (error) {
      console.log(error.response?.data || error)
    }
  }
  // esta funcion se utiliza para obtener datos de las eps
  const readEps = async () => {
    try {
      console.log('read eps')
      const res = await axios({
        url: '/eps',
        method: 'GET',
        headers: {
          Authorization:"Bearer " + authStore.token,
        }
      })
      console.log(res.data) 
      console.log(res.data.eps_name)
      eps.value=res.data.eps
      /*eps.value = res.data.map((item) => {
        return {
            eps_name: item.eps_name,
        }
      })*/
    } catch (error) {
      console.log(error.response?.data || error)
    }
  }
  readEps()
  return {
    registerEps,
    readEps, 
    useEpsStore,
    eps
  }
})
