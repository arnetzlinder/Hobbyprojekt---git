<template>
    <div class="z-30 relative" id="burger" :class="{ active: isOpen }" @click="onToggle" :inheritAttrs="false">
      <button type="button" id="burger-button" class="z-30" title="Menu">
        <span class="burger-bar burger-bar--1"></span>
        <span class="burger-bar burger-bar--2"></span>
        <span class="burger-bar burger-bar--3"></span>
      </button>
    </div>
  </template>
  
  <script lang="ts">
  export default {
     props: {
       isOpen: Boolean
     },
     methods: {
       onToggle() {
         // this.$emit('click');
       }
     }
   };
  </script>
  
  <style scoped lang="scss">
  button {
    cursor: pointer;
    &:active,
    &:focus {
      outline: 0;
    }
  }

  #burger-button {
    position: relative;
    height: 35px;
    width: 37px;
    right: 0;
    display: block;
    z-index: 10;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .burger-bar {
    background-color: rgb(24, 26, 21);
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    border-color: rgb(24, 26, 21);
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  .burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(0.8);
  }
  #burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
  }
  .no-touchevents .burger-bar--2:hover {
    transform: scaleX(1);
  }
  .burger-bar--3 {
    transform: translateY(6px);
  }
  #burger.active .burger-button {
    transform: rotate(-180deg);
  }
  #burger.active .burger-bar--1 {
    transform: rotate(45deg);
  }
  #burger.active .burger-bar--2 {
    opacity: 0;
  }
  #burger.active .burger-bar--3 {
    transform: rotate(-45deg);
  }
  @media (width >= 740px) {
  #burger-button {
    position: relative;
    height: 60px;
    width: 60px;
    right: -120px;
    top: -10px;
    display: block;
    z-index: 10;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .burger-bar {
    background-color: rgb(24, 26, 21);
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    border-color: rgb(24, 26, 21);
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

}
 @media (width >= 740px) {
  #burger-button {
    position: relative;
    height: 60px;
    width: 60px;
    right: -120px;
    top: -10px;
    display: block;
    z-index: 10;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .burger-bar {
    background-color: rgb(24, 26, 21);
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    border-color: rgb(24, 26, 21);
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

}
@media (width >= 1440px) {
  #burger-button {
    position: relative;
    height: 70px;
    width: 70px;
    right: -220px;
    top: -10px;
    display: block;
    z-index: 10;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .burger-bar {
    background-color: rgb(24, 26, 21);
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    border-color: rgb(24, 26, 21);
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

}
  </style>