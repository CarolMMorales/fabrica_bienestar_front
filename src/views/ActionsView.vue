<template>
    <div class="m-5">
      <div class="card  shadow bg-body-tertiary rounded">
        <h2 class="red-color-text fw-bold text-center mt-3">{{ $t('titles.actions') }}</h2>
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
          <TableActionsComponent></TableActionsComponent>
          <ModalActionsComponent></ModalActionsComponent>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import TableActionsComponent from '../components/actions/TableActionsComponent.vue'
  import ModalActionsComponent from '@/components/actions/ModalActionsComponent.vue';
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
  