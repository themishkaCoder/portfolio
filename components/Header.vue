<template>
  <div class="background-img h-screen flex flex-col justify-between relative">
    <div class="navigation flex justify-center sm:justify-start p-8">
      <h1 data-aos="fade-in" class="text-2xl font-bold text-white pl-8">theMishkaCoder</h1>
    </div>

    <div data-aos="zoom-in" class="text-section">
      <p class="text-5xl text-white text-center">Mykhailo Tymoshenko</p>
      <p class="text-2xl text-gray-200 text-center">Frontend Developer</p>
    </div>

    <div class="buttons flex flex-row justify-center">
      <button @click="scrollPrice" data-aos="slide-right" class="bg-purple-500 p-5 w-60 text-white">Price</button>
      <button @click="scrollSkills" data-aos="slide-left" class="bg-gray-900 p-5 w-60 text-white">Skills</button>
       <!-- <nuxt-link :to="{ path: '/', hash:'#skills'}">
          TEST
       </nuxt-link> -->
    </div>

    <div class="social pl-16 flex flex-col items-start">
      <a class="text-2xl text-white pb-2" href="https://www.facebook.com/profile.php?id=100008492881355" target="_blank"><i class="fab fa-facebook-square"></i></a>
      <a class="text-2xl text-white pb-2" href="https://www.instagram.com/mishka_rider02/" target="_blank"><i class="fab fa-instagram"></i></a>
      <a class="text-2xl text-white pb-2" href="https://t.me/themishkacoder" target="_blank"><i class="fab fa-telegram"></i></a>
    </div>

    <button @click="scrollAbout" class="absolute right-5 bottom-5 text-5xl text-white animate-bounce"><i class="fas fa-long-arrow-alt-down"></i></button>
  </div>
</template>

<script>
export default {
  methods:{
    scrollSkills(){
      let container = document.querySelector("#skills");
      container.scrollIntoView({behavior: 'smooth'});
    },
    scrollPrice(){
      let container = document.querySelector("#price");
      container.scrollIntoView({behavior: 'smooth'});
    },
    scrollAbout(){
      let container = document.querySelector("#about");
      container.scrollIntoView({behavior: 'smooth'});
    }
  }
}
</script>

<style lang="scss">
  .background-img {
    background: url('../assets/header_background_final.jpg') no-repeat center;
    // background-size: cover;
    background-attachment: fixed;
    // height: 100vh;
  }
</style>
