<script lang="ts">
import Hallelujah from "../../public/Hallelujah.mp3"

export default{};
</script>

<template>
    <div class="text-gray-800 p-20 h-screen flex relative">


        <div class="flex  flex-col text-gray-800 content-evenly">
            <label class="text-gray-800 md:hover:scale-125 lg:hover:scale-125 p-10">
            <audio controls>
                <source src="/Hallelujah.mp3" type="audio/mpeg">
            </audio>
            <p class="ml-10">Hallelujah</p>
            </label>
            <br>
            <label class="text-gray-800 md:hover:scale-125 lg:hover:scale-125 p-10">
            <audio controls>
                <source src="/Blott en dag.mp3" type="audio/mpeg">
            </audio>
            <p class="ml-10">Blott en dag</p>
            </label>
            <br>
            <label class="text-gray-800 md:hover:scale-125 lg:hover:scale-125 p-10">
            <audio controls>
                <source src="/För kärlekens skull.mp3" type="audio/mpeg">
            </audio>
            <p class="ml-10">För kärlekens skull</p>
            </label>
            <br>
            <label class="text-gray-800 md:hover:scale-125 lg:hover:scale-125 p-10">
            <audio controls>
                <source src="/Prins Noel.mp3" type="audio/mpeg">
            </audio>
            <p class="ml-10">Prins Noel</p>
            </label>
        </div>

    </div>
</template>
