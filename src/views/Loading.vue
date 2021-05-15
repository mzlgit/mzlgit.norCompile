<template>
  <div class="loading">
    loading
  </div>
</template>

<script>
import createjs from "preload-js"
export default {
  name: "loading",
  data() {
    return {
      pathList: [
        require("@/assets/43.jpg"),
        require("@/assets/56.jpg"),
        require("@/assets/99.jpg"),
        require("@/assets/bg-4.png"),
        require("@/assets/bg-cover-3.png"),
        require("@/assets/bg-cover-31.png"),
        require("@/assets/bg-cover-32.png"),
        require("@/assets/logo-name.png"),
        require("@/assets/meihua.png"),
        require("@/assets/season.png"),
        require("@/assets/toux2.png"),
        require("@/assets/xiaolan.jpeg"),
      ]
    }
  },
  mounted() {
    this.loading()
  },
  methods: {
    loading() {
      let queue = new createjs.LoadQueue();
      queue.on("complete", this.handleComplete, this);
      queue.on("progress", this.handleProgress, this);
      queue.on("error", this.handleError, this);
      queue.loadManifest(this.pathList);
    },
    handleComplete(){
      console.log(122)
    },
    handleError(err){
      console.log(err)
    },
    handleProgress(event){

      console.log(321, event.progress)
    }
  },
}
</script>