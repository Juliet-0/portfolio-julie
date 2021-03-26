<template>
  <p id="text-category" class="test" v-on="changeCategory()">
    {{ textCategory }}
  </p>
</template>

<script>
export default {
  props: {
    textCategory: {
      default: "Audiovisuel",
    },
    index: {
      default: 0,
    },
  },

  methods: {
    // Allows you to change the text of the selected category in the slider according to the position of the image
    changeCategory() {
      let myText = this.textCategory;
      let myIndex = this.index;

      switch (myIndex) {
        case 0:
          myText = "Audiovisuel";
          break;
        case -750:
          myText = "Photographie";
          break;
        case -1500:
          myText = "Design graphique";
          break;
      }
      this.$emit("changeText", myText);
    },
  },
};
</script>
