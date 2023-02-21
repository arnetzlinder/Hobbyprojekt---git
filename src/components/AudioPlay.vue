<script lang="ts">
import Hallelujah from "../../public/Hallelujah.mp3"

export default{};
</script>

<template>
    <div class="from-green-200 via-yellow-100 to-blue-400 text-gray-800">
        <div class="from-green-200 via-yellow-100 to-blue-400 text-gray-800" id="audio-player-root"></div>

        <div class="from-green-200 via-yellow-100 to-blue-400 text-gray-800">
            <label  class="from-green-200 via-yellow-100 to-blue-400 text-gray-800">
            <audio controls>
                <source src="/Hallelujah.mp3" type="audio/mpeg">
            </audio>
            <p class="ml-20">Hallelujah</p>
            </label>
            <br>
            <label>
            <audio controls>
                <source src="/Blott en dag.mp3" type="audio/mpeg">
            </audio>
            <p class="ml-20">Blott en dag</p>
            </label>
            <br>
            <label>
            <audio controls>
                <source src="/För kärlekens skull.mp3" type="audio/mpeg">
            </audio>
            <p class="ml-20">För kärlekens skull</p>
            </label>
            <br>
            <label>
            <audio controls>
                <source src="/Prins Noel.mp3" type="audio/mpeg">
            </audio>
            <p class="ml-20">Prins Noel</p>
            </label>
        </div>

    </div>
</template>
