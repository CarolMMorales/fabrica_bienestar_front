<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="carousel">
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="{ 'carousel-item': true, active: index === currentIndex }"
        >
          <img :src="image" width="90%" height="" class="d-inline-block aline-text-top"  alt="Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentIndex = ref(0);
const images = [
  "/src/assets/Uniem(6x4).webp",
  "/public/carousel1.jpg",
  "/public/carousel2.jpg",
  "/public/carousel3.jpg",
  
  
];
//selecciona la imagen de el carousel
const autoPlay = () => {
  if (currentIndex.value < images.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};
// Cambiar de imagen cada 3 segundos
onMounted(() => {
  setInterval(autoPlay, 4000); 
});
</script>

