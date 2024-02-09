
<template>
  <div class="container p-5">
    <!-- Modal -->
    <div class="modal fade border-primary" id="modalActions" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-primary shadow-lg">
          <div class="modal-header">
            <h5 class="modal-title blue-color-text " id="exampleModalLabel">Registre nombre de la accion</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit="handleSubmitAct" >
              <div class="row">
                <div class="mb-3 col-12">
                  <label for="exampleInputName1" class="form-label">{{ $t('actions.action') }}</label>
                  <input type="text" v-model="act_name" class="form-control" id="exampleInputName1" aria-describedby="NameHelp" />
                </div> 
              </div>
              <div class="row">
                <div class="col-md-6 d-flex justify-content-center"> 
                  <button type="submit" class="btn btn-custom">Guardar <i class="ri-send-plane-fill"></i></button>
                </div>
                <div class="col-md-6 d-flex justify-content-center"> 
                  <button type="submit" class="btn btn-custom">Cancelar <i class="ri-send-plane-fill"></i></button>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useActionStore } from '@/stores/actionsStore';
import { ref } from 'vue';

const actStore = useActionStore();
const act_name = ref("");



const handleSubmitAct = async () => {
  try {
    console.log(act_name.value)
    await actStore.addAct(act_name.value.toUpperCase());
    act_name.value = " "
    
   
  } catch (error) {
    console.log(error);
 

  }
};
</script>

<style lang="scss" scoped>
.btn-custom {
  background-color: var(--blue-color);
  color: #ffffff;
  padding: 1rem 4rem;
  font-size: 1.25rem;
}

.btn-custom:hover {
  background-color: var(----color-background);
  color: var(--blue-color);
  border: 2px solid var(--blue-color);
}
</style>
../../stores/actionsStore