<template>
  <div class="audiovisual-container">
    <color-picker></color-picker>
    <back></back>
    <header class="header-external-pages">
      <span class="alt-i alt-logo"></span>
      <router-link to="/" role="button" class="back"
        ><span>Back /></span></router-link
      >
    </header>
    <main>
      <section id="audiovisual">
        <h2 class="title-pages">Audiovisuel</h2>
        <div class="description">
          <p>
            Vous trouverez ici quelques projets que j'ai réalisé en audiovisuel!
          </p>
        </div>
        <div class="container-project">
          <h3>Congrès HCV 2021</h3>
          <p class="project-description">
            Réalisation d'une vidéo teaser dans le cadre de mon stage au CHU de
            Nantes pour le congrès Horizons Cardiovasculaires pour les ateliers
            de Rythmologie, co-animé par le Dr. Gilles Lande, responsable de
            l'unité de Rythmologie du CHU de Nantes.
          </p>
          <div class="btn-tags">
            <span>Adobe premiere</span>
            <span>Adobe photoshop</span>
            <span>Production</span>
            <span>Tournage</span>
            <span>Montage</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <iframe
                src="https://www.youtube.com/embed/Y5S1Z7gi5ZY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="container-project">
          <h3>Présentation IUT</h3>
          <p class="project-description">
            Mission réalisée pour l'IUT de la Roche-sur-Yon, dans le cadre de
            l'atelier audiovisuel du DUT infocom. Cette vidéo a pour objectif de
            présenter l'ensemble des formations que proposent l'IUT. Afin de
            réaliser cette vidéo, nous avons été amenés à filmer dans des lieux
            différents, notamment au domicile des personnes interrogées. Dans le
            cadre de cette réalisation, j'ai eu l'opportunité de travailler sur
            la réalisation et le montage.
          </p>
          <div class="btn-tags">
            <span>Adobe premiere</span>
            <span>Tournage</span>
            <span>Montage</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <iframe
                src="https://www.youtube.com/embed/rMe5zEXS-OY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="img-project" data-aos="fade-right" data-aos-delay="500">
              <iframe
                src="https://www.youtube.com/embed/k_MzEG94Vrw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="container-project">
          <h3>Publicité Tic Tac</h3>
          <p class="project-description">
            Publicité réalisée dans le cadre d'un cours d'initiation à
            l'audiovisuel en DUT information-communication. Le thème de ce
            projet étant libre, nous avons décidés de réaliser une publicité
            avec un ton humoristique, avec des jeux de mots. Pour cette
            réalisation, j'ai été en charge du montage et de la co-production.
          </p>
          <div class="btn-tags">
            <span>Blackmagic</span>
            <span>Final Cut Pro</span>
            <span>Montage</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-right" data-aos-delay="500">
              <iframe
                src="https://www.youtube.com/embed/PwYBPjht7iY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="container-project">
          <h3>Vie de chat</h3>
          <p class="project-description">
            Vidéo réalisée dans le cadre d'un projet audiovisuel en DUT
            information-communication. L'objectif était ici de proposer une
            réalisation avec des contraintes techniques liées au confinement.
            Pour cet exercice, j'ai décidé de mettre en avant la vie de mon
            animal grâce à mon téléphone portable.
          </p>
          <div class="btn-tags">
            <span>Téléphone portable</span>
            <span>Adobe Premiere</span>
            <span>Montage</span>
            <span>Prise de vue</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <iframe
                src="https://www.youtube.com/embed/uaCE0rWpeAQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
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
