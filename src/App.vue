<template>
  <v-app>
    <v-app-bar
      color="deep-purple"
      v-if="isSmallScreen"
      app
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :color="color" disable-resize-watcher app>
      <v-list dense nav class="py-0">
        <v-list-item two-line :class="'px-0'">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content app>
      <Home/>
    </v-content>
    <v-footer>2222</v-footer>
  </v-app>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',
  components: {
    Home,
  },
  data: () => ({
    drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      color: "primary",
      colors: ["primary", "blue", "success", "red", "teal"],
      isSmallScreen: false,
    //
  }),
  methods: {
      handleResize () {
        let width = (window.innerWidth > 0) ? window.innerWidth : screen.width
        if (width < 1024) {
          this.isSmallScreen = true
          this.drawer = false
        } else {
          this.isSmallScreen = false
          this.drawer = true
        }
      },
      showSidebar () {
        this.isIconClicked = !this.isIconClicked
      },
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
