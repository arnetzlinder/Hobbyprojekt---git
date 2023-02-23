<script setup lang="ts">

import PictureOfMe from "../assets/SussieNoxineSe.jpg"

</script>

<template>
    <div class="text-gray-800 p-5 md:p-10 lg:p-20 flex relative max-w-sm md:max-w-lg lg:max-w-xl">
        <div class="bg-gradient-to-r from-blue-400 via-yellow-100 to-green-200 flex  flex-col text-gray-800 content-evenly border-8 border-gray-800 rounded-xl">
            <img :src="PictureOfMe" alt="Leende kvinna i utomhusmiljö" loading="lazy" class="object-cover shadow-xl relative">
        </div>
    </div>
</template>