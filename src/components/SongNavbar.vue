<template>
    <nav id="navbarid" class="pb-5 h-25 grid w-screen bg-gradient-to-r from-green-200 via-yellow-100 to-blue-400">
        <div><AnimationContainerVue /> </div>
        <a href="#index"><p class="ml-5 first-letter:text-2xl md:first-letter:text-3xl lg:first-letter:text-3xl first-letter:font-bold text-xl md:text-2xl lg:text-2xl text-gray-800">Sång för dop, bröllop eller begravning</p></a>
        <div class="z-30 relative col-start-3 mt-5 ml-5">
        <MenuButton @click="toggle" :isOpen="showMenu" />
        </div>
        <transition class="slide-fade">
            <ButtonMenu v-if="showMenu" />
        </transition>
    </nav>
</template>

<script lang="ts">
import MenuButton from "./MenuButton.vue";
import ButtonMenu from "./ButtonMenu.vue";
import AnimationContainerVue from "./AnimationContainer.vue";
export default {
    components: {
        MenuButton,
        ButtonMenu,
        AnimationContainerVue,
    },
    data() {
        return {
            showMenu: false,
        };
    },
    methods: {
        toggle(e: Event) {
            this.showMenu = !this.showMenu;
            e.stopPropagation();
            console.log("Toggling menu");
            //window.addEventListener('click', this.toggleOff);
        },
        toggleOff() {
            this.showMenu = false;
            console.log("Toggling menu off");
            // window.removeEventListener('click', this.toggleOff);
            
        
        }
    },
    mounted() {
      window.addEventListener('click', this.toggleOff);
  },
  beforeDestroy() {
    // window.removeEventListener('click', this.toggleOff);
  },
};

</script>

<style scoped lang="scss">
a {
      text-decoration: none;
    }
#navbarid {
  position: fixed;
  color: rgb(13, 12, 11);
  z-index:20;
  p {
    transition: transform 500ms;
    transition-timing-function: cubic-bezier(0.75, -3, 0.25, 4);
    cursor: default;
    z-index: 10;
    margin-top: 1.5rem;   
  }
}
</style>