<template>
  <div>
    <div class="table-responsive m-1">
      <DataTable class="table table-striped table-bordered display mt-2"
        :options="options">
        <thead>
          <tr>
            <th>{{ $t('tables.id') }}</th>
            <th>{{ $t('tables.activityDate') }}</th>
            <th>{{ $t('tables.descriptionActivity') }}</th>
            <th>{{ $t('tables.typeActivity') }}</th> 
            <th>{{ $t('tables.create/modifiedBy') }}</th> 
            <th>{{ $t('tables.create/modified') }}</th> 
            <th>{{ $t('buttons.edit') }}</th> 
            <th>{{ $t('buttons.delete') }}</th> 
          </tr>
        </thead>
        <tbody>
          <tr v-for="(actItem, index) in actStore.act" :key="index">
            <td>{{ actItem.act_id }}</td>
            <td>{{ actItem.act_name }}</td>
            <td>
              <div class="text-light text-center align-items-center justify-content-center">
               
                  <button @click="prepareEditForm(epsItem)"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning btn-sm" >
                    <i class="ri-pencil-fill"></i> Editar
                  </button>
            
              </div>
            </td>
          </tr>
          
        </tbody>
      </DataTable>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import 'datatables.net-bs5';
th{
background-color: #0e1f87;
color: white;
}
</style>
