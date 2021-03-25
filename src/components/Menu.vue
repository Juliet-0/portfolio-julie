<template>
  <div class="menu">
    <div class="switch-button" v-on:click="darkAndLightMode()">
      <span class="alt-i alt-moon" v-bind:class="{ hidden: darkMode }"></span>
      <span class="alt-i alt-sun" v-bind:class="{ hidden: !darkMode }"></span>
      <div
        class="switch-button-round"
        v-bind:class="{ active: !darkMode }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      darkMode: Boolean,
    };
  },
  created: function () {
    this.darkMode = true;
  },
  methods: {
    // Changes the text and background color depending on the selected mode (light or dark)
    darkAndLightMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode == true) {
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty(
          "--background-color",
          "white"
        );
      } else {
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty(
          "--background-color",
          "black"
        );
      }
    },
  },
};
</script>
