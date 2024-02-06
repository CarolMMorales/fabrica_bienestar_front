<template>
  <header class="container-fluid border-bottom shadow pt-2 ">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="pb-2 ps-md-5 ms-md-3">
          <a href="#"
            ><img
              class="img-fluid d-inline-block"
              src="../assets/logo-uniempresarial.webp"
              alt="Logo"
              width="300.47"
              height="80"
          /></a>
        </div>
      </div>
      <div class="col-12 col-md-6 pt-3  ">
        <h1 class="text-center blue-color-text">Contenido General</h1>
      </div>
    </div>
  </header>
  <section class="container-fluid">
    <div class="row">
      <div class="col-12 m-0 p-0 col-lg-2 blue-color-bg pb-5  ">
        <HeaderAdmin></HeaderAdmin>
      </div>
      <div class="col-12 col-lg-10 ">
        <main>
          <RouterView></RouterView>
        </main>
      </div>
    </div>
  </section>
  <FooterComponent></FooterComponent>
</template>
<script setup>
import HeaderAdmin from '../../components/header/HeaderAdminComponent.vue'
import FooterComponent from '../FooterComponent.vue';
</script>
<style>
@media (min-width: 992px) {
  .min-width-200 {
  min-width: 200px;
}
  .dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    background-color: teal;
    height: 100vh;
    width: 100vw;
}


}
</style>
