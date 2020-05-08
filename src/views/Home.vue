<template>
  <div class="about">
    <About/>

  </div>
</template>

<script>
import About from './About';

export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      color: "primary",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: false,
      permanent: true,
      expandOnHover: false,
    };
  },
  components: {
    About
  },
  computed: {
    
  }
};
</script>

<style lang="less" scoped>
.about{
  height: 900px;
}
</style>
