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
        <h2 class="title-pages">Graphic design</h2>
        <div class="description">
          <p>Here you can find some projects in graphic design!</p>
        </div>
        <div class="container-project">
          <h3>Data visualisation</h3>
          <p class="project-description">
            Creation of a data visualization that represents all the important
            information during the launch of Apple Arcade. The data is
            represented as a controller to represent the content of this service
            (video games). Each icon represents a piece of information about
            this subscription offered by Apple.
          </p>
          <div class="btn-tags">
            <span>Affinity Designer</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img
                src="../img/apple_arcade.png"
                alt="Image showing the final rendering of my data visualization on Apple Arcade"
              />
            </div>
          </div>
        </div>
        <div class="container-project">
          <h3>2D animation - Thunder</h3>
          <p class="project-description">
            Production of a 2D motion design with Blender software. For this
            exercise, we had to animate a word of our choice. For this, I
            decided to work on the word "éclair" (thunder) by animating the
            letter i in the form of thunder. A work on the light, the objects,
            the animation was realized to arrive at this result.
          </p>
          <div class="btn-tags">
            <span>Blender</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <iframe
                src="https://www.youtube.com/embed/XIPjQMGF3ds"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="container-project">
          <h3>The Kiss - Gustav Klimt</h3>
          <p class="project-description">
            Production of a 2D motion design presenting the painting The Kiss by
            Gustav Klimt. This animation allows to present the work and all its
            characteristics thanks to animations, illustrations and strong
            visual symbols.
          </p>
          <div class="btn-tags">
            <span>Blender</span>
            <span>Adobe Audition</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <iframe
                src="https://www.youtube.com/embed/IOd-9BCr3xU"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="container-project">
          <h3>Video games magazine</h3>
          <p class="project-description">
            Edition of a 4 pages magazine made on Indesign representing an
            article on the representation of women in video games. Very visual
            representation with female characters of video games, attractive
            colors in the respect of the rules of editions of a magazine.
          </p>
          <div class="btn-tags">
            <span>Adobe Indesign</span>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-right" data-aos-delay="500">
              <img
                class="right"
                src="../img/magazine.png"
                alt="Cover page of the magazine"
              />
            </div>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/magazine1.png" alt="Left page of the article" />
            </div>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-right" data-aos-delay="500">
              <img
                class="right"
                src="../img/magazine2.png"
                alt="Right page of the article"
              />
            </div>
          </div>
          <div class="img-item">
            <div class="img-project" data-aos="fade-left" data-aos-delay="500">
              <img src="../img/magazine3.png" alt="Advertising" />
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
