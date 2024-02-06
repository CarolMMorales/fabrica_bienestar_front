import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from './authStore.js'

//almacen personas
export const useCategoryStore = defineStore('name', () => {
  const authStore = useAuthStore()
  const category = ref([])

  // Esta función se utiliza para registrar las personas lcth
  const registercategory = async (
    name,
  ) => {
    try {
      const res = await axios({
        url: '/categories',
        method: 'POST',
        headers: {
          Authorization: authStore.token
        },
        data: {
          name: name,

        }
      })
      console.log(res.data)
      category.value.push(res.data.newRegisterPerson)
      console.log(category)
    } catch (error) {
      console.log(error.response?.data || error)
    }
  }
  // esta funcion se utiliza para obtener datos de las personas
  const readCategory = async () => {
    try {
      console.log('read persons')
      const res = await axios({
        url: '/categories',
        method: 'GET',
        headers: {
          Authorization:"Bearer " + authStore.token,
        }
      })
      console.log(res.data)
      category.value = res.data.map((item) => {
        return {
          name: item.name,
        }
      })
    } catch (error) {
      console.log(error.response?.data || error)
    }
  }
  readCategory()
  return {
    registercategory,
    useCategoryStore,
    category
  }
})
