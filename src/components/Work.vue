<template>
  <section id="work">
    <div class="timeline"></div>

    <h2 data-aos="fade-right" data-aos-delay="100">
      <span class="alt-i alt-computer"></span>Work
      <div class="line-decorate"></div>
    </h2>
    <div data-aos="fade-up" data-aos-delay="800" class="work-description">
      <p>
        I mainly work on development projects but sometimes I also work on more
        artistic projects, such as computer graphics, motion design or 3D.
      </p>
      <span>Find out more:</span>
    </div>
    <slider></slider>
    <div class="gallery-work">
      <div class="work-category">
        <router-link to="web-development"
          ><img
            src="../img/fortnite.png"
            alt="Image to access the web development category"
        /></router-link>
        <p>Web development</p>
      </div>
      <div class="work-category">
        <router-link to="webdesign">
          <img
            src="../img/webdesign.png"
            alt="Image to access the webdesign category"
        /></router-link>
        <p>Web design</p>
      </div>
      <div class="work-category">
        <router-link to="graphic-design">
          <img
            src="../img/apple_arcade.png"
            alt="Image to access the graphic design category"
        /></router-link>
        <p>Graphic design</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Slider from "./Slider.vue";

export default {
  name: "Work",
  components: {
    slider: Slider,
  },
};
</script>
