import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from './authStore.js'
import Swal from 'sweetalert2';
import {show_alerta} from "../funtions.js"

export const useActivityStore = defineStore('act_name', () => {

  const authStore = useAuthStore()

  const act = ref([])


  // Esta función se utiliza para registrar las act lcth
  const addActivity = async (bie_act_id,bie_act_date, bie_act_quotas, bie_act_description, bie_act_typ_id) => {
    try {
      axios.defaults.headers.common['Authorization'] ='Bearer ' + authStore.token
      const res = await axios({
        url: '/bienestar/activities',
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + authStore.token
        },
        data: {
          bie_act_id : bie_act_id,
          bie_act_date : bie_act_date,
          bie_act_quotas : bie_act_quotas,
          bie_act_description : bie_act_description
          bie_act_typ_id : bie_act_typ_id
        }
      })
      readAct()
      if(res.data.status == false){
        show_alerta(res.data.message,'error')
      }
      if(res.data.status == true){
        show_alerta(res.data.message,'success')
      }
      act.value.push(res.data.data.newAddAction)
      
    } catch (error) {
      
      console.log(error.response?.data || error)
    }
  }


// Esta función se utiliza para editar las act
const updateAct = async (act_id, new_act_name) => {
  try {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.token;
    const res = await axios({
      url: `/actions/${act_id}`, 
      method: 'PUT', 
      headers: {
        Authorization: 'Bearer ' + authStore.token
      },
      data: {
        act_name: new_act_name 
      }
    });
    
    if (res.data.status === false) {
      show_alerta(res.data.message, 'error');
    } else if (res.data.status === true) {
      show_alerta(res.data.message, 'success');
      readAct();
    }
  } catch (error) {
    console.error(error.response?.data || error);
    handleError(error);
  }
};

// Esta función se utiliza para leer las act
const readAct = async () => {
  try {
    // Configurar el encabezado de autorización
    axios.defaults.headers.common['Authorization'] ='Bearer ' + authStore.token;

    // Realizar la solicitud para obtener datos de act
    const response = await axios.get('/actions');

      act.value = response.data.data.map((item) => {
        return {
          act_id: item.act_id,
          act_name: item.act_name,
        };
      });

    console.log(act.value)   
    //act.value = response.data.data;
    
    
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
readAct()
  return {
    addAction,
    readAct,
    updateAct,
    useActionStore,
    act
  }
})