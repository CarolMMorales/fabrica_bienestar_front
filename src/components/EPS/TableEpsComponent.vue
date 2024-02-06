<template>
  <div>
    <div class="table-responsive m-1">
      <DataTable :data="epsStore.eps" :columns="columns" class="table table-striped table-bordered display mt-2"
        :options="options">
        <thead>
          <tr>
            <th>ID EPS</th>
            <th>Nombre</th>
            <th>Estado</th> <!-- Para modificar el estado -->
            <th>Acciones</th> <!-- Nueva columna para botones -->
          </tr>
        </thead>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net-bs5'
import Buttons from 'datatables.net-buttons-bs5'
import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5'
import print from 'datatables.net-buttons/js/buttons.print'
import pdfmake from 'pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import 'datatables.net-responsive-bs5'
import Jszip from 'jszip'


pdfmake.vfs = pdfFonts.pdfMake.vfs
window.JSzip = Jszip
DataTable.use(DataTablesLib)
DataTable.use(pdfmake)
DataTable.use(Buttons)
DataTable.use(print)
DataTable.use(ButtonsHtml5)


import {useEpsStore} from '../../stores/epsStore.js'

const epsStore = useEpsStore();

const columns = [
  {
    data: null,
    render: function (data, type, row, meta) {
      return `${meta.row }`
    }
  },
  { data: 'eps_id' },
  { data: 'eps_name' },


]

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
  buttons:   
  [
    
    {
      title: 'Reporte de Personas Registradas',
      extend: 'csvHtml5',
      text: '<i class="ri-file-excel-2-fill"></i> excel',
      className: 'btn btn-success mr-5'
    },

    {
      title: 'Reporte de Personas Registradas',
      extend: 'print',
      text: '<i class="ri-printer-fill"></i>Imprimir',
      className: 'btn btn-primary '
    },
    {
      title: 'Reporte de Personas Registradas',
      extend: 'pdfHtml5',
      text: '<i class="ri-file-pdf-2-fill"></i>PDF',
      className: 'btn btn-danger mr-2'
    },
    {
      title: 'Reporte de Personas Registradas',
      extend: 'copy',
      text: '<i class="fa-solid fa-copy"></i>Copiar',
      className: "btn btn-dark",
    }
  ],
  dom:
    "<'dt-buttons ps-5 flex-wrap text-end'B><'row'<'col-sm-12 col-md-6 mt-5'l><'col-sm-12 col-md-6 mt-5 text-end mb-2'f>>" +
    "<'row'<'col-sm-12'tr>>" +
    "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>"
    
}




</script>

<style lang="scss" scoped>
@import 'datatables.net-bs5';
</style>
