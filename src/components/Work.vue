<template>
  <section id="work">
    <div class="timeline"></div>

    <h2 data-aos="fade-right" data-aos-delay="100">
      <span class="alt-i alt-computer"></span>Projets
      <div class="line-decorate"></div>
    </h2>
    <div data-aos="fade-up" data-aos-delay="800" class="work-description">
      <p>
       Lors de différents projets professionnels et perfonnels, j’ai eu l’opportunité de travail dans différents domaines, que ce soit en audiovisuel, en photographie
 et en design graphique.
      </p>
      <span>Pour en savoir plus:</span>
    </div>
    <slider></slider>
    <div class="gallery-work">
      <div class="work-category">
        <router-link to="web-development"
          ><img
            src="../img/audiovisuel.png"
            alt="Image pour accéder à la catégorie audiovisuel"
        /></router-link>
        <p>Audiovisuel</p>
      </div>
      <div class="work-category">
        <router-link to="webdesign">
          <img
            src="../img/photographie.png"
            alt="Image pour accéder à la catégorie photographie"
        /></router-link>
        <p>Photographie</p>
      </div>
      <div class="work-category">
        <router-link to="graphic-design">
          <img
            src="../img/design-graphique.png"
            alt="Image pour accéder à la catégorie design graphique"
        /></router-link>
        <p>Design graphique</p>
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
