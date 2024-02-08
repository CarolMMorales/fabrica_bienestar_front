<template>
  <main>
    <div class="container">
  <div class="row row-cols-1 row-cols-md-3 g-5 mt-5 mb-5 d-flex">
  <div class="col">
     <div class="cards">
    <div class="card shadow-lg h-100 border border-dark">
      <RouterLink  to="/login" style="text-decoration: none; color: inherit; " >
      <img src="/src/assets/img1.webp" class="card-img-top mb-2" alt="...">
       <strong> <h3 class=" text-center text-danger mt-2 mb-4">{{$t('homepage.generalContent')}}</h3> </strong>
    </RouterLink>
    </div>
  </div>
  </div>

  <div class="col">
    <div class="cards">
    <div class="card shadow-lg h-100 border border-dark">
      <RouterLink  to="/login" style="text-decoration: none; color: inherit; ">
      <img src="/src/assets/img2.webp" class="card-img-top mb-2" alt="...">
       <strong> <h3 class=" text-center text-danger mt-2 mb-4 " style="text-decoration: none;">{{$t('homepage.welfare')}}</h3> </strong>
    </RouterLink>
    </div>
    </div>
  </div>
  <div class="col">
    <div class="cards">
    <div class="card shadow-lg h-100 border border-dark">
      <RouterLink  to="/login" style="text-decoration: none; color: inherit; ">
      <img src="/src/assets/img7.webp" class="card-img-top mb-2" alt="...">
      <strong>  <h3 class=" text-center text-danger mt-2 mb-4">{{$t('homepage.libraryScheduling')}}</h3> </strong>
    </RouterLink>
    </div>
    </div>
  </div>
  <div class="col">
    <div class="cards">
    <div class="card shadow-lg h-100 border border-dark">
      <RouterLink  to="/login" style="text-decoration: none; color: inherit; ">
      <img src="/src/assets/img8.webp" class="card-img-top mb-2" alt="...">
       <strong><h3 class=" text-center text-danger mt-2 mb-4">{{$t('homepage.coformacion')}}</h3> </strong> 
    </RouterLink>
    </div>
    </div>
  </div>
  <div class="col">
    <div class="cards">
    <div class="card shadow-lg h-100 border border-dark">
      <RouterLink  to="/login" style="text-decoration: none; color: inherit; ">
      <img src="/src/assets/img6.webp" class="card-img-top mb-2" alt="...">
       <strong> <h3 class=" text-center text-danger mt-2 mb-4">{{$t('homepage.qualifer')}}</h3> </strong>
    </RouterLink>
    </div>
    </div>
  </div>
  <div class="col">
    <div class="cards">
    <div class="card shadow-lg h-100 border border-dark">
      <RouterLink  to="/login" style="text-decoration: none; color: inherit; ">
      <img src="/src/assets/img3.webp" class="card-img-top mb-2" alt="...">
        <strong><h3 class=" text-center text-danger mt-2 mb-4">{{$t('homepage.laborCertificates')}}</h3> </strong>
    </RouterLink>
    </div>
    </div>
  </div>
</div>
    </div>
  </main>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style>
.cards{
transition: all 0.2s ease;
cursor: pointer;
}

.cards:hover{
box-shadow: 5px 6px 6px 2px #e9ecef;
transform: scale(1.1);
text-decoration:underline red;
}
</style>
