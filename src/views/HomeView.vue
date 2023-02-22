<script lang="ts">
import AudioPlay from "../components/AudioPlay.vue"
import PictureElement from "../components/PictureElement.vue";
import VideoPlay from "../components/VideoPlay.vue"
export default {
    components: {
        AudioPlay,
        PictureElement,
        VideoPlay
    }
}
</script>

<template>
    <div class="flex flex-row flex-wrap">
        <AudioPlay />
        <PictureElement />
        <VideoPlay />
    </div>
</template>