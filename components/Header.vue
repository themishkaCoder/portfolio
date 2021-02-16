<template>
  <div class="background-img flex flex-col justify-between">
    <div class="navigation p-8">
      <h1 class="text-2xl font-bold text-white pl-8">theMishkaCoder</h1>
    </div>

    <div class="text-section">
      <p class="text-7xl text-white text-center">Mikhail Timoshenko</p>
      <p class="text-2xl text-gray-200 text-center">Frontend Developer</p>
    </div>
    <div class="buttons flex flex-row justify-center">
      <button class="bg-purple-500 p-5 w-60 text-white">Price</button>
      <button class="bg-gray-900 p-5 w-60 text-white">Skills</button>

    </div>
    <div class="social pl-16 flex flex-col items-start">
      <a class="text-2xl text-white pb-2" href=""><i class="fab fa-facebook-square"></i></a>
      <a class="text-2xl text-white pb-2" href=""><i class="fab fa-instagram"></i></a>
      <a class="text-2xl text-white pb-2" href=""><i class="fab fa-telegram"></i></a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .background-img {
    background: url('../assets/header_background_final.jpg') no-repeat;
    background-size: cover;
    height: 100vh;

  }
</style>