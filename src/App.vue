<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import AudioPlay from './components/AudioPlay.vue'
</script>

<template>
  <div class="from-green-200 via-yellow-100 to-blue-400 text-gray-800">

  </div>
  <div class="from-green-200 via-yellow-100 to-blue-400 text-gray-800">
  <AudioPlay />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
