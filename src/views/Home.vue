<template>
  <div class="container home">
    <div class="home_bg"></div>
    <div class="home_cont">
      <div class="cont">
        <p>一个偶尔的机会，发现github pages。感觉挺好玩。</p>
        <p>用来记录一些开发的内容，遇到的问题，学习的过程</p>
        <p>记录一些项目情况</p>


        <p style="margin-bottom: 0">
          And through it all she offers me protection
        </p>
        <p style="text-align: right"><small>- angels</small></p>
      </div>
    </div>
    <!-- <img src="../assets/xiaolan.jpeg" alt=""> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .home_cont {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .cont{
      // height: 100%;
      overflow-x: hidden;
      // margin-right: -40px;
      padding: 20px;
      p{
        font-weight: 700;
        text-align: center;
      }
    }
  }
  .home_bg {
    width: 100%;
    height: 100%;
    // background-repeat: no-repeat;
    /*background-position: top;*/
    background-size: 100% 100%;
    -webkit-filter: blur(0.56rem);
    -moz-filter: blur(0.56rem);
    -o-filter: blur(0.56rem);
    -ms-filter: blur(0.56rem);
    filter: blur(0.56rem);
    background-image: url("../assets/meihua.png");
  }
}
</style>
