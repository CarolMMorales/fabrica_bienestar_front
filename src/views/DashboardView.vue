<template>
  <div>
<h2>dashboard</h2>

<h2>{{ authStore.token }}</h2>
<table class="">
    <tr>
      <th>Nombre </th>
    </tr>
    <tr  v-for="(epsItem, index) in epsStore.eps" :key="index">
      <td >{{epsItem.eps_name}}</td>

    </tr>
</table>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/authStore.js';
import {useEpsStore} from '../stores/epsStore.js'
const authStore = useAuthStore()
const epsStore = useEpsStore()

</script>

<style lang="scss" scoped>

</style>