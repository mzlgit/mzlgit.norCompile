<template>
  <div class="ball">
    <div class="db-red">
      <p>Red</p>
      <span
        v-for="(item,idx) in red"
        :key="idx"
        :class="{active: lottery.red.indexOf(item) !== -1}"
        >{{item}}</span
      >
    </div>
    <div class="db-blue">
      <p>Blue</p>
      <span
        v-for="(item,idx) in blue"
        :key="idx"
        :class="{active: lottery.blue.indexOf(item) !== -1}"
        >{{item}}</span
      >
    </div>
    <button @click="start">{{index ? "停止随机" : "开始随机"}}</button>
  </div>
</template>

<script>
export default {
  name: "ball",
  data() {
    return {
      index: null,
      blue: [],
      red: [],
      lottery: {
        red: [],
        blue: []
      }
    }
  },
  created() {
    for (let index = 1; index < 34; index++) {
      this.red.push(index);
      if(index <= 16) {
        this.blue.push(index);
      }
    }
  },
  methods: {
    start() {
      if( this.index ) {
        this.stop();
      } else {
        this.index = setInterval(() => {
          this.lottery.red = this.shuffle(this.red, 6)
          this.lottery.blue = this.shuffle(this.blue, 1)
        }, 100)
      }
    },
    stop() {
      window.clearInterval(this.index);
      this.index = null;
    },
    shuffle(arr,num) {
      let array = JSON.parse(JSON.stringify(arr))
      let index = -1, leng = array.length,lastLeng = length - 1;
      let size = num ? num : leng;
      while(++index < leng) {
        let rand = index + Math.floor( Math.random() * (lastLeng - index + 1)), value = array[rand];
        array[rand] = array[index];
        array[index] = value;
      }
      return array.slice(0, size)
    }
  }
}
</script>

<style lang="scss" scoped>
.ball {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
  padding-bottom: 40px;
  .db-red,
  .db-blue {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 600px;
    position: relative;
    p {
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translate(-50%);
    }
    span {
      display: inline-block;
      width: 35px;
      height: 35px;
      text-align: center;
      line-height: 35px;
      border-radius: 50%;
      background-color: #ccc;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  .db-red {
    span {
      &.active {
        color: #fff;
        background-color: red;
      }
    }
    p {
      color: red;
    }
  }
  .db-blue {
    span {
      &.active {
        color: #fff;
        background-color: blue;
      }
    }
    p {
      color: blue;
    }
  }
  button {
    padding: 10px 20px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%)
  }
}
</style>
