<template>
  <div class="tool_container">
    <div class="tools_panel">
      <p>Colors</p>
      <div class="colors">
        <div class="color color-green" v-on:click="changeColor()"></div>
        <div class="color color-blue" v-on:click="changeColor()"></div>
        <div class="color color-red" v-on:click="changeColor()"></div>
        <div class="color color-purple" v-on:click="changeColor()"></div>
        <div class="color color-turquoise" v-on:click="changeColor()"></div>
        <div class="color color-orange" v-on:click="changeColor()"></div>
        <div class="color color-light-purple" v-on:click="changeColor()"></div>
        <div class="color color-yellow" v-on:click="changeColor()"></div>
        <div class="color color-main" v-on:click="changeColor()"></div>
      </div>
    </div>
  </div>
</template>

<script>
let color = document.getElementsByClassName("colors");

export default {
  data: function () {
    return {
      active: false,
    };
  },
  methods: {
    changeColor() {
      // Changes the opacity of the clicked color button
      if (this.active === false) {
        window.event.target.classList.add("active");
        this.active = true;
      } else {
        for (let i = 0; i < color[0].childNodes.length; i++) {
          color[0].childNodes[i].classList.remove("active");
          window.event.target.classList.add("active");
        }
      }

      // Allows you to change the primary (main), secondary and background color of the home section

      // Green
      if (color[0].childNodes[0] === window.event.target) {
        document.documentElement.style.setProperty("--main-color", "#70df7c");
        document.documentElement.style.setProperty(
          "--color-secondary",
          "#48FFF7"
        );
        document.documentElement.style.setProperty(
          "--color-bg-home",
          "#DAFFE9"
        );
      } else {
        // Blue
        if (color[0].childNodes[1] === window.event.target) {
          document.documentElement.style.setProperty("--main-color", "#4E00E3");
          document.documentElement.style.setProperty(
            "--color-secondary",
            "#E3D700"
          );
          document.documentElement.style.setProperty(
            "--color-bg-home",
            "#DFD4FF"
          );
        } else {
          // Red
          if (color[0].childNodes[2] === window.event.target) {
            document.documentElement.style.setProperty(
              "--main-color",
              "#EA5F5F"
            );
            document.documentElement.style.setProperty(
              "--color-secondary",
              "#F68659"
            );
            document.documentElement.style.setProperty(
              "--color-bg-home",
              "#EBB8BE"
            );
          } else {
            // Purple
            if (color[0].childNodes[3] === window.event.target) {
              document.documentElement.style.setProperty(
                "--main-color",
                "#AE4CFC"
              );
              document.documentElement.style.setProperty(
                "--color-secondary",
                "#403FFE"
              );
              document.documentElement.style.setProperty(
                "--color-bg-home",
                "#9CC2FF"
              );
            } else {
              // Turquoise
              if (color[0].childNodes[4] === window.event.target) {
                document.documentElement.style.setProperty(
                  "--main-color",
                  "#13E2DA"
                );
                document.documentElement.style.setProperty(
                  "--color-secondary",
                  "#07F064"
                );
                document.documentElement.style.setProperty(
                  "--color-bg-home",
                  "#CBDFE6"
                );
              } else {
                // Orange
                if (color[0].childNodes[5] === window.event.target) {
                  document.documentElement.style.setProperty(
                    "--main-color",
                    "#FF6B00"
                  );
                  document.documentElement.style.setProperty(
                    "--color-secondary",
                    "#FFAF0D"
                  );
                  document.documentElement.style.setProperty(
                    "--color-bg-home",
                    "#FEDDCB"
                  );
                } else {
                  // Light purple
                  if (color[0].childNodes[6] === window.event.target) {
                    document.documentElement.style.setProperty(
                      "--main-color",
                      "#737DFE"
                    );
                    document.documentElement.style.setProperty(
                      "--color-secondary",
                      "#5D8BE8"
                    );
                    document.documentElement.style.setProperty(
                      "--color-bg-home",
                      "#D8DCFE"
                    );
                  } else {
                    // Yellow
                    if (color[0].childNodes[7] === window.event.target) {
                      document.documentElement.style.setProperty(
                        "--main-color",
                        "#FFD74A"
                      );
                      document.documentElement.style.setProperty(
                        "--color-secondary",
                        "#FFAE3D"
                      );
                      document.documentElement.style.setProperty(
                        "--color-bg-home",
                        "#FFDBAD"
                      );
                    } else {
                      // Main (pink)
                      if (color[0].childNodes[8] === window.event.target) {
                        document.documentElement.style.setProperty(
                          "--main-color",
                          "#FFB1E9"
                        );
                        document.documentElement.style.setProperty(
                          "--color-secondary",
                          "#9241FF"
                        );
                        document.documentElement.style.setProperty(
                          "--color-bg-home",
                          "#C988FF"
                        );
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
  },
};
</script>
