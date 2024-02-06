<template>
  <div class="m-5     ">
    <div class="card  shadow bg-body-tertiary rounded">
      <div class="card-header">
        <div class="row pt-5">
          <div class="col-12 col-lg-5">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-5">
              <!--button modal lcth-->
              <button class="btn btn-custom " type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="ri-user-add-fill"></i> Registrar</button>
            </div>
            
          </div>
          <div class="col-12 col-lg-7 ps-5 pe-5">
            <h2 class=" text-center blue-color-text">Personas</h2>
          </div>
        </div>
      </div>
      <div class="card-body">
        <!--aqui va el datatable-->
        <TableComponent></TableComponent>
        <ModalComponent></ModalComponent>
      </div>
    </div>
  </div>
</template>

<script setup>
import TableComponent from '../components/TableComponent.vue'
import ModalComponent from '../components/ModalComponent.vue';
</script>

<style lang="scss" scoped>
.btn-custom {
  background-color:  var(--blue-color);
  color: #ffffff;
  padding:1rem 4rem ;
  font-size: 1.25rem;
}
.btn-custom:hover{
  background-color: var(----color-background);
  color: var(--blue-color);
  border: 2px solid var(--blue-color);
}
</style>
