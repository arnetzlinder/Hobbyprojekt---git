<script setup lang="ts">
import SongNavbar from './components/SongNavbar.vue';
</script>

<template>
  <div>
    <SongNavbar />
  </div>
  
  <RouterLink to="./">Home</RouterLink>
  <RouterLink to="./about">About</RouterLink>
  <router-view></router-view>
</template>

<style scoped>

</style>
