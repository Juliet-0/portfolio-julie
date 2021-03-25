<template>
  <p id="text-category" class="test" v-on="changeCategory()">
    {{ textCategory }}
  </p>
</template>

<script>
export default {
  props: {
    textCategory: {
      default: "Web development",
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
          myText = "Web development";
          break;
        case -750:
          myText = "Web design";
          break;
        case -1500:
          myText = "Graphic design";
          break;
      }
      this.$emit("changeText", myText);
    },
  },
};
</script>
