<script setup lang="ts">

import VideoOfMe from "../assets/Av längtan till dig, klippt version.mp4"

</script>

<template>
    <div class="text-gray-800 p-20 flex relative">
        <div class="bg-gradient-to-r from-blue-400 via-yellow-100 to-green-200 flex  flex-col text-gray-800 content-evenly border-8 border-gray-800 rounded-xl">
            <video :src="VideoOfMe" type="video/mp4" loading="lazy" controls> 
            Your browser does not support the video tag.
        </video>
        </div>
    </div>
</template>