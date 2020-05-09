<template>
  <v-app>
    <v-app-bar
      color="#2979FF"
      v-if="isSmallScreen"
      app
    >
      <v-app-bar-nav-icon @click="drawpper = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
    <M-nav :smallStatus="isSmallScreen" :drawerStatus="drawer" :drawpper="drawpper" @changeStatus="changeStatus"></M-nav>
    <v-content app>
      <router-view></router-view>
    </v-content>
    <v-footer>2222</v-footer>
  </v-app>
</template>

<script>
// import Home from './views/Home';
import MNav from './views/Nav';

export default {
  name: 'App',
  components: {
    MNav
  },
  data: () => ({
    drawer: true,
    drawpper: false,
    isSmallScreen: false,
  }),
  methods: {
      handleResize () {
        let width = (window.innerWidth > 0) ? window.innerWidth : screen.width
        if (width < 1024) {
          this.isSmallScreen = true;
          this.drawer = false;
          this.$store.commit("setScreen", true)
        } else {
          this.isSmallScreen = false;
          this.$store.commit("setScreen", false)
          this.drawer = true;
        }
        let containerList = document.getElementsByClassName("container");
        containerList.forEach(element => {
          element.style.padding = this.$store.state.isSmallScreen ? "12px" : "22px"
        });
      },
      showSidebar () {
        this.isIconClicked = !this.isIconClicked
      },
      changeStatus(val) {
        if(!val) {
          this.drawer = false;
          this.drawpper = false;
        } else {
          this.drawer = true;
        }
      }
    },
  mounted () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize, { passive: true })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize, { passive: true })
  }
};
</script>
