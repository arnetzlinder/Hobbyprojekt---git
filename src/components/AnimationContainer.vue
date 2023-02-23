<script lang="ts">
    import { gsap } from "gsap";
    import MusicAnimation from "./MusicAnimation.vue";
    export default {
        name: "NotesAnimation",
        components: {
            MusicAnimation,
        },
        data() {
            return {};
        },
        mounted() {
            gsap.to ('#abc', { scale: 1.5, y: 100, duration: 2, ease: 'none', repeat: -1, yoyo: true});
        }
    };
</script>