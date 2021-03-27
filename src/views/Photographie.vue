<template>
  <div class="photography-container">
    <color-picker></color-picker>
    <back></back>
    <header class="header-external-pages">
      <span class="alt-i alt-logo"></span>
      <router-link to="/" role="button" class="back"
        ><span>Back /></span></router-link
      >
    </header>
    <main>
      <section id="photography">
        <h2 class="title-pages">Photographie</h2>
        <div class="description">
          <p>
            Vous trouverez ici quelques projets que j'ai réalisé en
            photographie!
          </p>
        </div>
        <div class="container-project">
          <h3>Festival international du film</h3>
          <p class="project-description">
            Bénévole en tant que photographe durant le festival International du
            film de la Roche-sur-Yon. Photos diffusées sur les réseaux sociaux
            du festival afin de mettre en avant l'évènement. L'objectif était de
            capturer l'instant présent du festival, recréer l'ambiance qui y
            régnait.
          </p>
          <div class="btn-tags">
            <span>Sony A320</span>
            <span>Photoshop</span>
            <span>Portraits</span>
            <span>Festival</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-right" data-aos-delay="800">
              <img class="right" src="../img/Caméraman.jpg" />
            </div>
            <div class="img-project" data-aos="fade-left" data-aos-delay="1000">
              <img src="../img/Dame interview.jpg" />
            </div>
            <div class="img-project" data-aos="fade-right" data-aos-delay="800">
              <img class="right" src="../img/Isma 2.png" />
            </div>
            <div class="img-project" data-aos="fade-left" data-aos-delay="1400">
              <img src="../img/DSC_0025.jpg" />
            </div>
          </div>
        </div>
        <div class="container-project">
          <h3>Shootings</h3>
          <p class="project-description">
            Réalisation de shootings dans le cadre de projets personnels (books
            professionnels, photos portraits, publicitations sur les réseaux
            sociaux, ...). L'objectif était de réaliser des photos mettant en
            avant la personnalité de chacun, en restant naturel.
          </p>
          <div class="btn-tags">
            <span>Sony A320</span>
            <span>Photoshop</span>
            <span>Shooting</span>
            <span>Portrait</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/assise saturé rouge.png" />
            </div>
            <div class="img-project" data-aos="fade-right" data-aos-delay="800">
              <img class="right" src="../img/sans veste peau foncé.png" />
            </div>
            <div class="img-project" data-aos="fade-left" data-aos-delay="1000">
              <img src="../img/DSC04454(2).jpg" />
            </div>
            <div
              class="img-project"
              data-aos="fade-right"
              data-aos-delay="1200"
            >
              <img class="right" src="../img/DSC05207(2).jpg" />
            </div>
            <div class="img-project" data-aos="fade-left" data-aos-delay="1400">
              <img src="../img/DSC04224(2).jpg" />
            </div>
          </div>
        </div>
      </section>
    </main>
    <menu-component></menu-component>
    <footer><p class="info-footer">© Copyright 2021 - Juliet Patron</p></footer>
  </div>
</template>

<script>
import ColorPicker from "../components/ColorPicker.vue";
import Menu from "../components/Menu.vue";
import Back from "../components/Back.vue";

export default {
  components: {
    "color-picker": ColorPicker,
    "menu-component": Menu,
    back: Back,
  },
};
</script>
