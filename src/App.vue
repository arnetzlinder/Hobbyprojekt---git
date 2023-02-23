<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import AboutMe from './components/AboutMe.vue';
</script>

<template>
  <div>
    <AboutMe />
  </div>

  <div  id="background" class="bg-cover bg-repeat-y md:h-screen lg:h-screen bg-fixed pt-10 relative">
  

  <router-view></router-view>
</div>
</template>

<style scoped>
 #background {
  background-image: url(./assets/church-background.jpg);
 }
</style>
