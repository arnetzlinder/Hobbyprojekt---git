<script setup lang="ts">
import SongNavbar from './components/SongNavbar.vue';
</script>

<template>
  <div>
    <SongNavbar />
  </div>

  <div class="pt-20 z-20 relative">
  
  <RouterLink to="./">Startsida</RouterLink>
  <RouterLink to="./about">Om mig</RouterLink>
  <RouterLink to="./contact">Kontakt</RouterLink>
  <router-view></router-view>
</div>
</template>

<style scoped>

</style>
