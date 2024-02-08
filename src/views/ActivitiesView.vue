<template>
    <div class="m-5">
      <div class="card  shadow bg-body-tertiary rounded">
        <h2 class="red-color-text fw-bold text-center mt-3">{{$t('titles.activities')}}</h2>
        <div class="card-header">
          <div class="row p-3">
            <div class="col-12 col-lg-12 text-end">
                <!--button modal lcth-->
                <button class="btn btn-custom" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-plus-square-fill"></i> {{$t('buttons.add')}}</button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <!--aqui va el datatable-->
          <TableActivitiesComponent></TableActivitiesComponent>
          <ModalComponent></ModalComponent>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import TableActivitiesComponent from '@/components/Activities/TableActivitiesComponent.vue';
  import ModalComponent from '../components/ModalComponent.vue';
  </script>
  
  <style lang="scss" scoped>
  .btn-custom {
    background-color:  var(--red-color);
    color: #ffffff;
    padding:0.6rem 3rem ;
    font-size: 1.25rem;
  }
  .btn-custom:hover{
    background-color: var(----color-background);
    color: var(--red-color);
    border: 2px solid var(--red-color);
  }
  </style>
  