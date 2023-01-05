<template>
  <div class="container mx-auto py-36 px-4" id="about">
    <h2 data-aos="zoom-in" class="text-lg text-purple pb-5">About me</h2>
    <p data-aos="zoom-in" class="text-2xl text-white font-bold">
      I'm Junior Frontend Developer, involved in web programming for a 4 years
    </p>
    <p data-aos="zoom-in" class="text-lg text-white pt-14">
      <!-- My name is Mikhail, student. I'm studying in distance learning
      institution, as result i have a lot of time for work. Studied in computer
      academy for 4 years and worked with mentor. I've been creating web pages
      for a 3 years, at this moment have several own projects and commercial
      experience. English level - intermediate. My hobby is extreme bmx riding.
      It would be good to meet and work with new people for me -->
      Hello, my name is Mykhailo, i am 18 years old. Graduated from IT Step academy(4 years) and worked with mentor. 
      In front-end development from 13 years. English level - intermediate. I have several, completed, commercial freelance 
      projects, also i have my pet projects. <br>
      I'm open for work and my front-end skills have been proven sufficient for commercial development. I'm currently living in Slovakia as I've been displaced by the war, thus I don't live with my family and will review all job opportunities.<br>
      My skills: HTML, CSS/SCSS, Tailwind, Bootstrap 3/4/5, Photoshop, JavaScript ES6+, 
      Jquery, Gulp, Git, Vue.js, Nuxt.js, Quasar Framework, Node.js, Firebase, REST APIs. 
      My main front-end framework is Vue.js and favorite css framework is Tailwind.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-2 gap-12 pt-14">
      <div data-aos="fade-left" class="flex flex-col">
        <div class="service-title flex flex-row items-center">
          <div
            class="number w-14 h-14 rounded-full flex items-center justify-center"
          >
            <p class="text-white text-2xl font-bold">1</p>
          </div>
          <p class="text-white text-xl font-bold pl-4">Develop HTML code</p>
        </div>
        <div class="service-text pt-6">
          <p class="text-gray-200">
            Easily create HTML pages using Flexbox, Grid, Bootstrap.
          </p>
        </div>
      </div>

      <div data-aos="fade-right" class="flex flex-col">
        <div class="service-title flex flex-row items-center">
          <div
            class="number w-14 h-14 rounded-full flex items-center justify-center"
          >
            <p class="text-white text-2xl font-bold">2</p>
          </div>
          <p class="text-white text-xl font-bold pl-4">Web application</p>
        </div>
        <div class="service-text pt-6">
          <p class="text-gray-200">
            I'll create web application with either functionality, that you need.
          </p>
        </div>
      </div>

      <div data-aos="fade-left" class="flex flex-col">
        <div class="service-title flex flex-row items-center">
          <div
            class="number w-14 h-14 rounded-full flex items-center justify-center"
          >
            <p class="text-white text-2xl font-bold">3</p>
          </div>
          <p class="text-white text-xl font-bold pl-4">Fix bugs in code</p>
        </div>
        <div class="service-text pt-6">
          <p class="text-gray-200">
            Provide a service where in finished project I fix errors in layout or bugs in code.
          </p>
        </div>
      </div>

      <div data-aos="fade-right" class="flex flex-col">
        <div class="service-title flex flex-row items-center">
          <div
            class="number w-14 h-14 rounded-full flex items-center justify-center"
          >
            <p class="text-white text-2xl font-bold">4</p>
          </div>
          <p class="text-white text-xl font-bold pl-4">Design</p>
        </div>
        <div class="service-text pt-6">
          <p class="text-gray-200">
            If you don't have design for your site, i'll help you to find it.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.text-purple {
  color: #793ea5;
}
.number {
  background-color: #793ea5;
}
</style>
