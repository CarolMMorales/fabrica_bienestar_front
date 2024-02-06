<template>
  <header class="container-fluid border-bottom shadow pt-2 ">
   <div class="row">
     <div class="col-12 col-md-5">
       <div class="pb-2 ps-md-5 ms-md-3">
         <a href="#"
           ><img
             class="img-fluid d-inline-block"
             src="../../assets/logo-uniempresarial.webp"
             alt="Logo"
             width="300.47"
             height="80"
         /></a>
       </div>
     </div>      
   </div>
 </header>
 <main  class="flex-shrink-0">
   <RouterView></RouterView>
 </main>
 <FooterComponent></FooterComponent>
</template>
<script setup>
import FooterComponent from '../../components/FooterComponent.vue'
</script>