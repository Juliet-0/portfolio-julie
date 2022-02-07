<template>
  <div class="graphic-design-container">
    <color-picker></color-picker>
    <back></back>
    <header class="header-external-pages">
      <span class="alt-i alt-logo"></span>
      <router-link to="/" role="button" class="back"
      ><span>Back /></span></router-link
      >
    </header>
    <main>
      <section id="graphic-design">
        <h2 class="title-pages">Design graphique</h2>
        <div class="description">
          <p>
            Vous trouverez ici quelques projets que j'ai réalisé en design
            graphique!
          </p>
        </div>
        <div class="container-project">
          <h3>Bienvenue à l’institut du thorax</h3>
          <p class="project-description">
            Dans le cadre du développement de la communication de l'institut du thorax au sein du CHU de Nantes, j'ai
            réalisé deux affiches afin de mettre en avant les activités du centre.
          </p>
          <div class="btn-tags">
            <span>Adobe Photoshop</span>
            <span>Illustration</span>
            <span>Vectoriel</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-right" data-aos-delay="500">
              <img src="../img/Piste1IndesignV5_Infirmière-1.png"/>
            </div>
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/Piste3IndesignV5_Equipe-1.png"/>
            </div>
          </div>
        </div>
        <div class="container-project">
          <h3>Horizons cardiovasculaire</h3>
          <p class="project-description">
            Réalisation de visuel pour les réseaux sociaux du Congrès Horizons
            Cardiovasculaires, effectué durant mon stage de deuxième année à
            "l'institut du thorax"
          </p>
          <div class="btn-tags">
            <span>Adobe Photoshop</span>
            <span>Illustration</span>
            <span>Vectoriel</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-right" data-aos-delay="500">
              <img src="../img/176849851_925999888190569_2082758580010300367_n.png"/>
            </div>
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/177364711_313740863515527_1747479517987962745_n.png"/>
            </div>
          </div>
        </div>
        <div class="container-project">
          <h3>Ampoules Alumni</h3>
          <p class="project-description">
            Réalisation d'une infographie dans le cadre d'une commandes de l'IUT
            pour les évènements Alumni pour l'ensembe du campus. Pour cette
            affiche, j'ai essayé de faire un jeu de mots avec Allumer/Alumni,
            les Alumni étant symbole de connaissances pour les étudiants
            d'aujourd'hui. Pour cela, j'ai créé différents modèles, avec des
            couleurs différentes.
          </p>
          <div class="btn-tags">
            <span>Indesign</span>
            <span>Adobe Color</span>
            <span>Illustration</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/alumni.png"/>
            </div>
          </div>
        </div>
        <div class="container-project">
          <h3>Affiche A3 Patrimoine</h3>
          <p class="project-description">
            Création d'une affiche sir les journées européennes du patrimoine
            dans le cadre des cours de PAO en DUT infocom. Réalisation sous
            Adobe Photoshop et Indesign.
          </p>
          <div class="btn-tags">
            <span>Indesign</span>
            <span>Photoshop</span>
            <span>Adobe Color</span>
            <span>Illustration</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/Affiche A3 version prof.png"/>
            </div>
          </div>
        </div>
        <div class="container-project">
          <h3>Affiche tous unis</h3>
          <p class="project-description">
            Réalisation d'une affiche contre les discriminations pour
            l'Université de Nantes. Dans le cadre de la réalisation de cette
            affiche, j'ai décidé d'intégrer une prise de vue photographique et
            de créer un jeu de mots avc Université de Nantes (UN) et le mot
            "unis".
          </p>
          <div class="btn-tags">
            <span>Indesign</span>
            <span>Photoshop</span>
            <span>Adobe Color</span>
            <span>Illustration</span>
            <span>Photographie</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/discrimination.png"/>
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
