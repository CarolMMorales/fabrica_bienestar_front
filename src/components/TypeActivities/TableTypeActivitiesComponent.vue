<template>
  <div>
    <div class="table-responsive m-1">
      <DataTable :data="category" :columns="columns" class="table table-striped table-bordered display mt-2"
        :options="options">
        <thead style="background-color: blue;
" >
          <tr>
            <th>{{ $t('tables.id') }}</th>
            <th>{{ $t('tables.typeActivity') }}</th>
            <th>{{ $t('tables.create/modifiedBy') }}</th> 
            <th>{{ $t('tables.create/modified') }}</th> 
            <th>{{ $t('buttons.edit') }}</th> 
            <th>{{ $t('buttons.delete') }}</th> 
          </tr>
        </thead>
        <tbody>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><button type="button"><i class="bi bi-trash3-fill" style="color:red;"></i>
</button></td>
          <td><button type="button"><i class="bi bi-pencil-fill" style="color:cornflowerblue;"></i>
</button></td>
        </tbody>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
//import { ref } from 'vue'
//import {useAuthStore} from '../stores/authStore'
import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net-bs5'
import Buttons from 'datatables.net-buttons-bs5'
import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5'
import print from 'datatables.net-buttons/js/buttons.print'
import pdfmake from 'pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import 'datatables.net-responsive-bs5'
import Jszip from 'jszip'
//import axios from 'axios'

pdfmake.vfs = pdfFonts.pdfMake.vfs
window.JSzip = Jszip
DataTable.use(DataTablesLib)
DataTable.use(pdfmake)
DataTable.use(Buttons)
DataTable.use(print)
DataTable.use(ButtonsHtml5)
/*
const category = ref([]);
const authStore = useAuthStore() 
const getData = async () => {
  try {
    const res = await axios({
      url: "/eps",
      method: "GET",
      headers: {
          Authorization:"Bearer " + authStore.token,
        }
    });
    category.value = res.data;
    console.log(res.data)
  } catch (error) {
    console.log(error);
  }
};
getData();


const columns = [
  { data: 'eps_id' },
  { data: 'eps_name' },

  {
    data: null,
    render: function (data, type, row, meta) {
      return `
      <select class="form-select" @change ="updateStatua(${meta.row})"aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">Habilitado</option>
      <option value="0">Deshabilitado</option>
  
    </select>
      `;
    }
  },
  {
    data: null,
    render: function (data, type, row, meta) {
      return `
        <button class="btn btn-warning btn-sm" @click="editRow(${meta.row})"><i class="ri-pencil-fill"></i>
          Editar</button>
          <button class="btn btn-danger btn-sm" @click="editRow(${meta.row})"><i class="ri-delete-bin-fill"></i></i>
          Eliminar</button>
      `;
    }
  }
];


const options = {
  responsive: true,
  autoWidth: false,
  language: {
    search: 'Buscar',
    zeroRecords: 'No hay registro para mostrar',
    info: 'Mostrando del _START_ al _END_ de _TOTAL_ registros',
    infoFiltered: '(Filtrados de _MAX_ registros)',
    paginate: {
      first: 'Primero',
      previous: 'Anterior',
      next: 'Siguiente',
      last: 'Ultimo'
    }
  },
  columnDefs: [
    { targets: 0, width: '5%' }, // Ancho del primer columna (idCategory)
    { targets: 1, width: '15%' }, // Ancho del segunda columna (strCategory)
    { targets: 2, width: '15%' }, // Ancho del tercera columna (strCategoryDescription)
    { targets: 3, width: '15%' }, // Ancho del quinta columna (Estado)
    { targets: 4, width: '15%' } // Ancho del sexta columna (Acciones)
  ],
  
  buttons: [/* Tus botones existentes aquí ],
  dom:
    "<'dt-buttons ps-5 flex-wrap text-end'B><'row'<'col-sm-12 col-md-6 mt-5'l><'col-sm-12 col-md-6 mt-5 text-end mb-2'f>>" +
    "<'row'<'col-sm-12'tr>>" +
    "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>"
};

/*const editRow = (rowIndex) => {
  // Lógica para editar la fila según el índice rowIndex
};*/

/*const updateStatus = (rowIndex) => {
  // Lógica para actualizar el estado de la fila según el índice rowIndex
};*/
</script>

<style lang="scss" scoped>
@import 'datatables.net-bs5';
th{
background-color: #0e1f87;
color: white;
}
</style>
