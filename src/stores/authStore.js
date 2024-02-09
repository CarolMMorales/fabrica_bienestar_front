import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useAuthStore = defineStore('user', () => {
  const token = ref()
  const authUser = ref(null);
/*
  const getToken = async () => {
    try {
      const res = await axios.get("/sanctum/csrf-cookie");
      console.log(res);
    } catch (error) {
      console.error(error);
      console.log("Failed to get CSRF token 🤦‍♀️🤦‍♀️");
    }

  };
  */
  const access = async (use_mail, use_password) => {
    try {
    //  await getToken()
      console.log('ingreso')
      const res = await axios.post('/login/2', {
        use_mail: use_mail,
        use_password: use_password
      })
      token.value = res.data.token
      authUser.value = res.data.data;

      //sessionStorage.setItem("Accept", token.value);
      console.log(res.data)
      localStorage.setItem('user', token.value)
     sessionStorage.setItem('user', JSON.stringify(res.data.data))
    } catch (error) {
      handleError(error);
    }
  }

  const register = async (name, email, password, repassword) => {
    try {
      console.log('ingreso')
      const res = await axios.post('/register', {
        name: name,
        email: email,
        password: password,
        repassword: repassword
      })
      // Almacena el token, tiempo de expiración y nombre del usuario

      token.value = res.data.token
      console.log(name)
      
      localStorage.setItem('user', '😰')
    } catch (error) {
      if (error.response) {
        throw error.response.data
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('error', error.message)
      }
    }
  }

  // Función para cerrar la sesión del usuario

  const logout  = async()=>{
    try{
      await axios.get("/logout")
    }catch(error){
      console.log(error)
    }finally{
      resetStore();
      localStorage.removeItem('Accept');
    }
   }


   const handleError = (error) => {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error:', error.message);
    }
  };
  // Función para restablecer el estado del almacén
  const resetStore = () => {
    token.value = null
    authUser.value = null
    localStorage.removeItem('Accept');

  }

  return {
    token,
    access,
    logout,
    register
  }
  
})
