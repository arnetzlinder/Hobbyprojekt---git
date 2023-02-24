<script lang="ts">
import Hallelujah from "../../public/Hallelujah.mp3"

export default{};
</script>

<template>
    <div class="text-gray-800 p-5 md:p-10 lg:p-20 flex relative max-w-md md:max-w-xl lg:max-w-xl">


        <div class="top-7 md:top-0 lg:top-0 relative bg-gradient-to-r from-blue-400 via-yellow-100 to-green-200 flex  flex-col text-gray-800 content-evenly border-8 border-gray-800 rounded-xl">
            <label class="text-gray-800 md:hover:scale-125 lg:hover:scale-90 pt-10 pb-10 mx-3">
            <audio controls>
                <source src="/Hallelujah.mp3" type="audio/mpeg">
            </audio>
            <p class="ml-10">Hallelujah</p>
            </label>
            <br>
            <label class="text-gray-800 md:hover:scale-125 lg:hover:scale-90 pt-10 pb-10 mx-3">
            <audio controls>
                <source src="/Blott_en_dag.mp3" type="audio/mpeg">
            </audio>
            <p class="ml-10">Blott en dag</p>
            </label>
            <br>
            <label class="text-gray-800 md:hover:scale-125 lg:hover:scale-90 pt-10 pb-10 mx-3">
            <audio controls>
                <source src="/För_kärlekens_skull.mp3" type="audio/mpeg">
            </audio>
            <p class="ml-10">För kärlekens skull</p>
            </label>
            <br>
            <label class="text-gray-800 md:hover:scale-125 lg:hover:scale-90 pt-10 pb-10 mx-3">
            <audio controls>
                <source src="/Prins_Noel.mp3" type="audio/mpeg">
            </audio>
            <p class="ml-10">Prins Noel</p>
            </label>
        </div>

    </div>
</template>
