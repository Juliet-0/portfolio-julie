<template>
  <div class="content-home">
    <header>
      <div class="box">
        <span class="alt-i alt-logo"></span>
        <nav class="menu-burger">
          <ul>
            <a href="#about" v-on:click="activateMenu()"><li>Profil</li></a>
            <a href="#work" v-on:click="activateMenu()"><li>Projets</li></a>
            <a href="#skills" v-on:click="activateMenu()"><li>Outils</li></a>
            <a href="#contact" v-on:click="activateMenu()"><li>Contact</li></a>
          </ul>
        </nav>
        <div class="burger" v-on:click="activateMenu()">
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20" rx="8"></rect>
            <rect y="30" width="100" height="20" rx="8"></rect>
            <rect y="60" width="100" height="20" rx="8"></rect>
          </svg>
        </div>
      </div>
    </header>
    <main>
      <section id="home">
        <div id="home-text">
          <span class="line-title-1">Julie Patron</span>
          <span class="line-title-2">Etudiante en communication</span>
        </div>
      </section>
      <color-picker></color-picker>
      <menu-component></menu-component>
      <about></about>
      <work></work>
      <skills></skills>
      <contact></contact>
    </main>
    <footer><p class="info-footer">© Copyright 2021 - Julie Patron</p></footer>
  </div>
</template>

<script>
import About from "../components/About.vue";
import Work from "../components/Work.vue";
import Skills from "../components/Skills.vue";
import Contact from "../components/Contact.vue";
import ColorPicker from "../components/ColorPicker.vue";
import Menu from "../components/Menu.vue";

export default {
  name: "Home",
  components: {
    about: About,
    work: Work,
    skills: Skills,
    contact: Contact,
    "color-picker": ColorPicker,
    "menu-component": Menu,
  },
  data: function () {
    return {
      menuExpanded: Boolean,
    };
  },
  created: function () {
    this.menuExpanded = false;
  },
  methods: {
    activateMenu() {
      this.menuExpanded = !this.menuExpanded;
      let menuBurger = document.getElementsByClassName("menu-burger");
      if (this.menuExpanded === true) {
        menuBurger[0].classList.add("expanded");
      } else {
        menuBurger[0].classList.remove("expanded");
      }
    },
  },
};
</script>
