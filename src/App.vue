<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
console.log("för rebase");
</script>

<template>
  <div>

  </div>
  
  <RouterLink to="./">Home</RouterLink>
  <RouterLink to="./about">About</RouterLink>
  <router-view></router-view>
</template>

<style scoped>

</style>
