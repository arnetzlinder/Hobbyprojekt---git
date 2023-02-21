<script setup lang="ts">
import SongNavbar from './components/SongNavbar.vue';
import AudioPlay from './components/AudioPlay.vue'
</script>

<template>
  <div class="bg-gradient-to-r from-green-200 via-yellow-100 to-blue-400 text-gray-800">
    <SongNavbar />
  </div>
  <div class="bg-gradient-to-r from-green-200 via-yellow-100 to-blue-400 text-gray-800">
  
  </div>
  <div>
    
  </div>

  <div class="pt-20 pb-10 relative">
  
  <RouterLink to="./">Home</RouterLink>
  <RouterLink to="./about">About</RouterLink>
  <router-view></router-view>
</div>
</template>

<style scoped>

</style>
