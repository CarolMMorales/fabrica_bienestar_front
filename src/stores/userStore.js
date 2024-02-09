import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from './authStore.js'
import Swal from 'sweetalert2';
import {show_alerta} from "../funtions.js"

export const useUserStore = defineStore('mul_name', () => {

  const authStore = useAuthStore()

  const user = ref([])


  // Esta función se utiliza para registrar los generos 
  const registerUser = async (use_mail, use_password, use_status) => {
    try {
      axios.defaults.headers.common['Authorization'] ='Bearer ' + authStore.token
      const res = await axios({
        url: '/access',
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + authStore.token
        },
        data: {
            use_mail: use_mail,
            use_password: use_password,
            use_status: use_status
        }
      })
      readUser()
      if(res.data.status == false){
        show_alerta(res.data.message,'error')
      }
      if(res.data.status == true){
        show_alerta(res.data.message,'success')
      }
      user.value.push(res.data.data.newRegisterUser)
      
    } catch (error) {
      
      console.log(error.response?.data || error)
    }
  }


// Esta función se utiliza para editar las EPS
const updateUser = async (use_id, new_use_mail, new_use_password, new_use_status) => {
  try {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.token;
    const res = await axios({
      url: `/access/${use_id}`, 
      method: 'PUT', 
      headers: {
        Authorization: 'Bearer ' + authStore.token
      },
      data: {
          use_mail: new_use_mail,
          use_password: new_use_password,
          use_status: new_use_status
      }
    });
    
    if (res.data.status === false) {
      show_alerta(res.data.message, 'error');
    } else if (res.data.status === true) {
      show_alerta(res.data.message, 'success');
      readUser();
    }
  } catch (error) {
    console.error(error.response?.data || error);
    handleError(error);
  }
};

// Esta función se utiliza para leer las EPS
const readUser = async () => {
  try {
    // Configurar el encabezado de autorización
    axios.defaults.headers.common['Authorization'] ='Bearer ' + authStore.token;
    // Realizar la solicitud para obtener datos de EPS
    const response = await axios.get('/access');

      user.value = response.data.data.map((item) => {
        return {
          use_id: item.use_id,
          use_mail: item.use_mail,
          use_password: item.use_password,
          use_status: item.use_status
        };
      });

    console.log(user.value)   
    //eps.value = response.data.data;
    
    
  } catch (error) {
    
    handleError(error);
  }
};

const handleError = (error) => {
  if (error.response) {
    // Error de respuesta (por ejemplo, error HTTP)
    Swal.fire(`Error: ${error.response.status} - ${error.response.statusText}`);
    console.error('Error de respuesta:', error.response.data);
  } else if (error.request) {
    // Error de solicitud (por ejemplo, problema de red)
    Swal.fire('Error: No se pudo realizar la solicitud');
    console.error('Error de solicitud:', error.request);
  } else {
    // Otros tipos de errores
    Swal.fire('Error: Se produjo un error inesperado');
    console.error('Error inesperado:', error.message);
  }
};
  
readUser()
  return {
    registerUser,
    readUser,
    updateUser,
    useUserStore,
    user
  }
})
