<template>
  <div class="background-contact mx-auto">
    <div class="container mx-auto py-36 text-white text-center">
      <p data-aos="zoom-in-down" class="text-5xl pb-14">Contact me</p>
      <a data-aos="zoom-in-up" href="mailto:testlivetv14@gmail.com" class="text-3xl sm:text-5xl lg:text-7xl py-2 mb-5"
        >testlivetv14@gmail.com</a>

      <div class="social-footer mx-auto flex justify-evenly mt-8">
        <a data-aos="zoom-out-right" class="text-4xl text-white" href="https://www.facebook.com/profile.php?id=100008492881355" target="_blank"
          ><i class="fab fa-facebook-square"></i
        ></a>

        <a data-aos="zoom-out-up" class="text-4xl text-white" href="https://www.instagram.com/mishka_rider02/" target="_blank"
          ><i class="fab fa-instagram"></i
        ></a>

        <a data-aos="zoom-out-left" class="text-4xl text-white" href="https://t.me/themishkacoder" target="_blank"
          ><i class="fab fa-telegram"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.background-contact {
  background-color: #793ea5;
  a {
    border-bottom: 3px solid rgba(0, 0, 0, 0.2);
    &:hover {
      transition: 0.3s;
      border-bottom: 3px solid rgba(255, 255, 255, 0.2);
    }
    &:not(:hover) {
      transition: 0.3s;
      border-bottom: 3px solid rgba(0, 0, 0, 0.2);
    }
  }
}

.social-footer{
  width: 300px;
}
</style>