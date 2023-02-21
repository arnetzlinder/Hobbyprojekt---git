<script setup lang="ts">
import SongNavbar from './components/SongNavbar.vue';
</script>

<template>
  <div>
    <SongNavbar />
  </div>

  <div class="pt-20 z-20 relative">
  
  <RouterLink to="./">Home</RouterLink>
  <RouterLink to="./about">About</RouterLink>
  <router-view></router-view>
</div>
</template>

<style scoped>

</style>
