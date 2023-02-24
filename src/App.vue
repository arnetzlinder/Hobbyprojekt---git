<script setup lang="ts">
import SongNavbar from './components/SongNavbar.vue';
</script>

<template>
  <div class="bg-gradient-to-r from-green-200 via-yellow-100 to-blue-400 text-gray-800">
    <SongNavbar />
  </div>
  <div class="bg-gradient-to-r from-green-200 via-yellow-100 to-blue-400 text-gray-800">
  
  </div>
  <div>
    
  </div>

  <div  id="background" class="bg-cover bg-repeat-y md:h-screen lg:h-screen bg-fixed pt-10 relative">
  

  <router-view></router-view>
</div>
</template>

<style scoped>
 #background {
  background-image: url(./assets/church-background.jpg);
 }
 #background {
  background-image: url(./assets/church-background.jpg);
 }
</style>
