<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import AboutMe from './components/AboutMe.vue';
</script>

<template>
  <div>
    <AboutMe />
  </div>

  <div  id="background" class="h-screen pt-10 relative bg-cover">
  

  <router-view></router-view>
</div>
</template>

<style scoped>
 #background {
  background-image: url(./assets/church-background.jpg);
 }
</style>
