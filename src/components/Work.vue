<template>
  <section id="work">
    <div class="timeline"></div>

    <h2 data-aos="fade-right" data-aos-delay="100">
      <span class="alt-i alt-computer"></span>Projets
      <div class="line-decorate"></div>
    </h2>
    <div data-aos="fade-up" data-aos-delay="800" class="work-description">
      <p>
        A l'occasion de différents projets professionnels et personnels, j’ai eu
        l’opportunité de travail dans différents domaines, que ce soit en
        communication, en audiovisuel ou en photographie.
      </p>
      <span>Pour en savoir plus:</span>
    </div>
    <slider></slider>
    <div class="gallery-work">
      <div class="work-category">
        <router-link to="audiovisuel"><img src="../img/audiovisuel.png"
            alt="Image pour accéder à la catégorie audiovisuel" /></router-link>
        <p>Audiovisuel</p>
      </div>
      <div class="work-category">
        <router-link to="graphic-design">
          <img src="../img/design-graphique.gif" alt="Image pour accéder à la catégorie design graphique" />
        </router-link>
        <p>Communication</p>
      </div>
      <div class="work-category">
        <router-link to="photographie">
          <img src="../img/photographie.png" alt="Image pour accéder à la catégorie photographie" />
        </router-link>
        <p>Photographie</p>
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
