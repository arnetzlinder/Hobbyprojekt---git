<template>
    <nav id="navbar" class="z-30 relative drop-shadow-2xl text-2xl pt-10 bg-gradient-to-r from-green-200 via-yellow-100 to-blue-400">
        <ul>
        <li>  <RouterLink to="./">Startsida</RouterLink></li>
        <li>  <RouterLink to="./about">Om mig</RouterLink></li>
        <li><RouterLink to="./contact">Kontakt</RouterLink></li>
        </ul>
        </nav>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
#navbar {
  margin: 0;
  margin-top: 5rem;
  min-height: 23rem;
  width: 22rem;
  max-width: 50rem;
  border-radius: 15px;
  position: absolute;
  right: 1rem; 
  text-align: center;
  
  li {
    list-style: none;
    line-height: 3rem;
  }
  a {
    display: inline;
  }
  
}


@media (width >= 1440px) {
    #navbar {
  margin: 0;
  margin-top: 5rem;
//   min-height: 23rem;
  width: 50rem;
  position: absolute;
  border-radius: 15px;
  font-size: 2rem;
  line-height: 2rem;
//   right: 28rem; 
  text-align: center;
  
  li {
    padding-top: 2rem;
    list-style: none;
    line-height: 3rem;
  }
  a {
    display: inline;
  }
  
}

}
  
</style>