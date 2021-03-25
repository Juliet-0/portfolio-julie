<template>
  <div class="web-design-container">
    <color-picker></color-picker>
    <back></back>
    <header class="header-external-pages">
      <span class="alt-i alt-logo"></span>
      <router-link to="/" role="button" class="back"
        ><span>Back /></span></router-link
      >
    </header>
    <main>
      <section id="web-design">
        <h2 class="title-pages">Webdesign</h2>
        <div class="description">
          <p>Here you can find some projects in webdesign!</p>
        </div>
        <div class="container-project">
          <h3>Article</h3>
          <p class="project-description">
            Design of a visual for a fictitious site gathering interviews. The
            model was designed on Figma.
          </p>
          <div class="btn-tags">
            <span>Figma</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/article.png" alt="Top of the article" />
            </div>
            <div class="img-project" data-aos="fade-right" data-aos-delay="500">
              <img
                class="right"
                src="../img/article1.png"
                alt="Middle of the article"
              />
            </div>
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/article2.png" alt="End of the article" />
            </div>
          </div>
        </div>
        <div class="container-project">
          <h3>(In progress) French fashion</h3>
          <p class="project-description">
            It is a documentary site presenting the French feminine fashion,
            from the XVIIth century to nowadays.This site is imagined for a web
            design project at the university.
          </p>
          <div class="btn-tags">
            <span>Figma</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-right" data-aos-delay="500">
              <img
                class="right"
                src="../img/mode.png"
                alt="Top of the website"
              />
            </div>
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/mode1.png" alt="First part of the website" />
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
