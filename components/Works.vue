<template>
  <div class="work-background mx-auto my-20">
    <div class="container mx-auto py-20">
      <div class="works-title text-center">
        <h2 data-aos="zoom-in" class="text-xl text-purple pb-5">My works</h2>
        <p data-aos="zoom-in" class="text-3xl text-white font-bold">
          There are all my projects, from start of study to nowdays.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-8 sm:grid-rows-4 pt-14 gap-x-5">
        <div data-aos="flip-up" class="work-item max-h-lg">
          <img src="../assets/prosecurity2.png" alt="" />
          <div class="description text-xl text-white text-center">
            <p class="text-3xl text-white font-bold">ProSecurity</p>
            <p class="text-xl text-white">
              Commercial project providing security services. Created on clear
              HTML and SCSS and installed in WordPress like a theme.
              (left only github version of layout)
            </p>
          </div>
          <a
            href="https://themishkacoder.github.io/prosecurity/"
            class="link text-xl text-white"
            target="_blank"
            >Link to view</a
          >
        </div>

        <div data-aos="flip-down" class="work-item max-h-lg">
          <img src="../assets/tracker.png" alt="" />
          <div class="description text-xl text-white text-center">
            <p class="text-3xl text-white font-bold">Covid-19 tracker</p>
            <p class="text-xl text-white">
              My own project to track Covid-19, created by using VueJs as PWA and REST API. 
            </p>
          </div>
          <a
            href="https://themishkacoder.github.io/tracker/"
            class="link text-xl text-white"
            target="_blank"
            >Link to view</a
          >
        </div>

        <div data-aos="flip-up" class="work-item max-h-lg">
          <img src="../assets/freebie.jpg" alt="" />
          <div class="description text-xl text-white text-center">
            <p class="text-3xl text-white font-bold">Freebie</p>
            <p class="text-xl text-white">Created by using Flexbox.</p>
          </div>
          <a
            href="https://themishkacoder.github.io/portfolio/freebie/"
            class="link text-xl text-white"
            target="_blank"
            >Link to view</a
          >
        </div>

        <div data-aos="flip-down" class="work-item max-h-lg">
          <img
            src="https://themishkacoder.github.io/portfolio/golden/images/port/news.jpg"
            alt=""
          />
          <div class="description text-xl text-white text-center">
            <p class="text-3xl text-white font-bold">News site</p>
            <p class="text-xl text-white">
              Created by using Bootstrap 3 to learn old concepts before
              Bootstrap 4.
            </p>
          </div>
          <a
            href="https://themishkacoder.github.io/portfolio/news/"
            class="link text-xl text-white"
            target="_blank"
            >Link to view</a
          >
        </div>

        <div data-aos="flip-up" class="work-item max-h-lg">
          <img
            src="https://themishkacoder.github.io/portfolio/golden/images/port/switch.jpg"
            alt=""
          />
          <div class="description text-xl text-white text-center">
            <p class="text-3xl text-white font-bold">Switch</p>
            <p class="text-xl text-white">
              Created by using Bootstrap 4.
            </p>
          </div>
          <a
            href="https://themishkacoder.github.io/portfolio/switch/"
            class="link text-xl text-white"
            target="_blank"
            >Link to view</a
          >
        </div>

        <div data-aos="flip-down" class="work-item max-h-lg">
          <img
            src="https://themishkacoder.github.io/portfolio/golden/images/port/autistic.jpg"
            alt=""
          />
          <div class="description text-xl text-white text-center">
            <p class="text-3xl text-white font-bold">Autistic</p>
            <p class="text-xl text-white">
              Page created by using Float.
            </p>
          </div>
          <a
            href="https://themishkacoder.github.io/portfolio/Autistic/"
            class="link text-xl text-white"
            target="_blank"
            >Link to view</a
          >
        </div>

        <div data-aos="flip-up" class="work-item max-h-lg">
          <img
            src="https://themishkacoder.github.io/portfolio/golden/images/port/menu.jpg"
            alt=""
          />
          <div class="description text-xl text-white text-center">
            <p class="text-3xl text-white font-bold">Restaurant Menu</p>
            <p class="text-xl text-white">
              My first page created by using Float.
            </p>
          </div>
          <a
            href="https://themishkacoder.github.io/portfolio/Menu/"
            class="link text-xl text-white"
            target="_blank"
            >Link to view</a
          >
        </div>

        <div data-aos="flip-down" class="work-item">
          <img
            src="https://themishkacoder.github.io/portfolio/golden/images/port/freebie2.jpg"
            alt=""
          />
          <div class="description text-xl text-white text-center">
            <p class="text-3xl text-white font-bold">Old Freebie</p>
            <p class="text-xl text-white">
              My first page created by using Flexbox and Grid.
            </p>
          </div>
          <a
            href="https://themishkacoder.github.io/portfolio/example2/"
            class="link text-xl text-white"
            target="_blank"
            >Link to view</a
          >
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.work-background {
  background: url("../assets/works-background-final.jpg") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
}

.work-item {
  max-height: 32rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  &:nth-child(even){
    margin-top: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .description {
    position: absolute;
    width: 310px;
    top: 10%;
    left: 120%;
    z-index: 2;
  }
  .link {
    position: absolute;
    bottom: 20px;
    left: -30%;
    z-index: 2;
  }
  &::after {
    display: block;
    background-color: rgba(0, 0, 0, 0.8);
    content: "";
    opacity: 0;
    // visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  &:hover {
    &::after {
      opacity: 1;
      transition: 0.3s;
    }
    .description {
      left: 50%;
      transform: translate(-50%, 20%);
      transition: 0.5s;
    }
    .link {
      left: 50%;
      transform: translate(-50%, 0);
      transition: 0.5s;
    }
  }
  // &:focus {
  //   &::after {
  //     opacity: 1;
  //     transition: 0.3s;
  //   }
  //   .description {
  //     left: 50%;
  //     transform: translate(-50%, 20%);
  //     transition: 0.5s;
  //   }
  //   .link {
  //     left: 50%;
  //     transform: translate(-50%, 0);
  //     transition: 0.5s;
  //   }
  // }

  &:not(:hover) {
    &::after {
      opacity: 0;
      transition: 0.3s;
    }
    .description {
      left: 120%;
      transition: 0.5s;
    }
    .link {
      left: -30%;
      transition: 0.5s;
    }
  }
  // &:not(:focus) {
  //   &::after {
  //     opacity: 0;
  //     transition: 0.3s;
  //   }
  //   .description {
  //     left: 120%;
  //     transition: 0.5s;
  //   }
  //   .link {
  //     left: -30%;
  //     transition: 0.5s;
  //   }
  // }
}

@media (min-width: 640px) { 
  .work-item {
    &:nth-child(even){
      margin-top: 3rem;
    }
  }
}
</style>