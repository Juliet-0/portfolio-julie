<template>
  <div class="web-development-container">
    <color-picker></color-picker>
    <back></back>
    <header class="header-external-pages">
      <span class="alt-i alt-logo"></span>
      <router-link to="/" role="button" class="back"
        ><span>Back /></span></router-link
      >
    </header>
    <main>
      <section id="web-development">
        <h2 class="title-pages">Web development</h2>
        <div class="description">
          <p>Here you can find some projects in web development!</p>
        </div>
        <div class="container-project">
          <h3>First portfolio</h3>
          <p class="project-description">
            This is one of the first websites that I created from scratch. It
            was designed as part of a project for my studies, where we had to
            use mainly HTML, CSS (especially for animations), and Javacript. It
            was not possible to use frameworks or Bootstrap. Nevertheless, I
            used a little PHP in order to use a contact form that sent me an
            email.
          </p>
          <div class="btn-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
            <span>PHP</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/portfolio.png" alt="Home" />
            </div>
            <div class="img-project" data-aos="fade-right" data-aos-delay="500">
              <img class="right" src="../img/portfolio1.png" alt="About" />
            </div>
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/portfolio2.png" alt="My fields of activity" />
            </div>
            <div class="img-project" data-aos="fade-right" data-aos-delay="500">
              <img src="../img/portfolio3.png" alt="My work" class="right" />
            </div>
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/portfolio5.png" alt="Contact" />
            </div>
          </div>
        </div>
        <div class="container-project">
          <h3>English article</h3>
          <p class="project-description">
            In my English class, we had to do a multimedia project. For this, we
            decided to work on a site where we put forward an article about
            Fortnite, which we wrote. In order to facilitate its creation, we
            decided to use only HTML and CSS.
          </p>
          <div class="btn-tags">
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/english.png" alt="Top of the article" />
            </div>
            <div class="img-project" data-aos="fade-right" data-aos-delay="500">
              <img
                class="right"
                src="../img/english1.png"
                alt="End of the article"
              />
            </div>
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/english3.png" alt="Part of the article" />
            </div>
          </div>
        </div>
        <div class="container-project">
          <h3>U'can</h3>
          <p class="project-description">
            Creation of a website as part of a tutored project at the
            university, whose objective is to raise awareness of the environment
            through a to-do list of things to do on a daily basis, such as
            buying organic, using glass bottles, ... In this project where we
            were 5 people, I was the "back-end" developer of the website. So, I
            created in PHP the connection and disconnection tool, the management
            of the to-do list for each user, the modification of the profile,
            the management of the notifications, ...
          </p>
          <div class="btn-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascript</span>
            <span>PHP</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/ucan.png" alt="To-do list" />
            </div>

            <div class="img-project" data-aos="fade-right" data-aos-delay="500">
              <img class="right" src="../img/ucan1.png" alt="Password" />
            </div>
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/ucan3.png" alt="Profile" />
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
