<template>
  <div class="slider-container">
    <div class="slider-elements">
      <button @click="prev" type="button" class="btn btn-left">
        <span class="alt-i alt-chevron-left"></span>
      </button>
      <div class="slider">
        <div
          class="container-slides"
          :style="{
            transform: `translateX(${index}px)`,
            transition: `${transition}`,
          }"
        >
          <router-link to="web-development"
            ><img
              src="../img/audiovisuel.png"
              alt="Image pour accéder à la catégorie audivisuel"
              class="img-slider"
          /></router-link>
          <router-link to="webdesign"
            ><img
              src="../img/photographie.png"
              alt="Image pour accéder à la catégorie photographie"
              class="img-slider"
          /></router-link>
          <router-link to="graphic-design"
            ><img
              src="../img/design-graphique.png"
              alt="Image pour accéder à la catégorie design graphique"
              class="img-slider"
          /></router-link>
        </div>
      </div>
      <button @click="next" type="button" class="btn btn-right">
        <span class="alt-i alt-chevron-right"></span>
      </button>
    </div>
    <div class="container-btn-slider">
      <div class="btn-slider selected"></div>
      <div class="btn-slider"></div>
      <div class="btn-slider"></div>
    </div>
    <text-category
      @changeText="textCategory = $event"
      :textCategory="textCategory"
      :index="index"
    ></text-category>
  </div>
</template>

<script>
let btnSlider = document.getElementsByClassName("btn-slider");
let btnSelected = document.getElementsByClassName("selected");
import TextCategory from "./TextCategory.vue";

export default {
  name: "Slider",
  components: {
    "text-category": TextCategory,
  },
  data: function () {
    return {
      index: Number,
      transition: "transform 0.3s ease",
      textCategory: String,
    };
  },
  created: function () {
    this.textCategory = "";
    this.index = 0;
  },
  methods: {
    // Allows you to move the images when you press next or previous, but also to fill the button according to the selected category

    next() {
      if (this.index === -1500) {
        this.transition = "none";
        this.index = 0;
        btnSlider[0].classList.add("selected");
        btnSelected[1].classList.remove("selected");
      } else {
        this.transition = "transform 0.2s ease";
        this.index -= 750;
        btnSelected[0].nextElementSibling.classList.add("selected");
        btnSelected[0].classList.remove("selected");
      }
    },
    prev() {
      if (this.index === 0) {
        btnSlider[2].classList.add("selected");
        btnSelected[0].classList.remove("selected");
        this.transition = "none";
        this.index = -1500;
      } else {
        this.transition = "transform 0.2s ease";
        this.index += 750;
        btnSelected[0].previousSibling.classList.add("selected");
        btnSelected[1].classList.remove("selected");
      }
    },
  },
};
</script>
