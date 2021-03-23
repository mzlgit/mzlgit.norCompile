<template>
  <div class="project">
    <h1>项目情况</h1>
    <p class="project_desc">
      展示一些项目，对自己帮助比较大的项目。
    </p>
    <div class="cont_wrapper">
      <div class="cont_item" v-for="(item,idx) in projectList" :key="idx">
        <div class="cont_item-bg">
          <v-parallax :src="item.src" class="test-flur"></v-parallax>
        </div>
        <div class="cont_item-text">
          <v-card>
            <v-card-title class="title">
              {{item.name}} <small style="padding-left: 20px;font-size: 13px">{{item.time}}</small>
            </v-card-title>
            <v-card-text class="white text--primary">
              <p>
                {{item.desc}}
              </p>
              <p>
                {{item.technique}}
              </p>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 4,
      projectList: [
        {
          name: "广州黄埔区科技一体化管理项目(http://kxjs.hp.gov.cn)",
          time: "2019/06 - 2020/12",
          desc: "广州黄埔区的科技局用于管理管辖区内的科技政策申报项目，目标人 群通过线上填写信息申报项目，经办人线上后台管理（pc 端+webapp 端）申报项目。线上申报系统以及 webapp 管理系统为 vue 项目，后台管理 pc 端系统为 jsp 项目",
          technique: "使用vuejs开发wepapp一些外网申报系统，搭配ivew ui库进行开发。技术难点：项目的业务申报需要简化开发流程，制作了简易Form组件，根据参数配置Form表单绑定数据，填报内容或者展示数据，从而减少单个业务的开发时长。Form组件，需要判断参数类型、数据校验、绑定数据等，统一处理业务表单的渲染。使用vue全家桶开发路由，状态管理。在状态管理方面，搭配了 localStorage 使用，避免vuex刷新页面数据丢失。对axios二次封装，用于借口拦截处理。使用route的mate属性进行权限控制，在路由中的beforeEnter进行路由拦截。webapp子项目，搭配vant ui库开发，用于移动端办公。项目中还使用到了 百度地图展示数据，echarts展示数据变化。后台pc管理系统为单位内网项目。在项目的开发过程中，如何评估功能模块，如何封装高复用的组件模块，项目业务的功能使用到的插件考虑，如何优化首屏加载时间等。如何根据甲方的需求提成解决问题的办法，如后台同事协商如何更好的开发，高效的开发。",
          src: require("../assets/season.png"),
        },
        
        {
          name: "绩效小程序",
          time: "2019/01 - 2019/06",
          desc: "负责绩效管理的小程序，用于个人登陆查看上个月或已完成项目的项 目负责人的评价，以及工时、工作量情况。根据用户权限展示数据。 根据 pc 端完善小程序项目。",
          technique: "使用 WeUI 开发，使用 echarts-for-weixin 呈现数据变化。对接口请求以及接口返回二次封装，处理登陆凭证的携带，以及参数的处理，接口返回的状态处理。小程序是于另一个前端同事共同开发的，很多模块化的思想在这个项目中学习的，如何封装一个toast，要设置相关的参数默认值，以便使用的时候不传相关参数也能正常使用组件，封装组件的时候需要考虑很多使用场景，参数的类型，组件暴露的参数或者方法回调等。",
          src: require("../assets/99.jpg"),
        },
        {
          name: "广州天河区事务局后台管理系统",
          time: "2018/09 - 2019/01",
          desc: "天河区事务局内部使用的后台管理系统，以服务其单位内部人员为主 实现其单位人员的日常需求，物质申请领取，事务的审批，事务流程 OA。项目有 pc 端后台管理系统，webapp 端管理系统。",
          technique: "webapp 使用 vue 全家桶和 element ui，pc 使用 jsp 和公司内部 ui。项目系统使用 echarts 用于展示业务数据变化。使用route的mate属性进行权限控制，在路由中的beforeEnter进行路由拦截。这是进入明动的第一个项目，于另一个前端同事一起开发，一起学习，过程中对vue的使用也明白了更多，期间处理浏览器的样式优化，也学会很多浏览器差异。进入明动后学习使用公司的OA工作流，完成后台管理系统的流程运作，业务流程走向。",
          src: require("../assets/56.jpg"),
        },
        {
          name: "红光世家商城移动端（webapp 开发）",
          time: "2018/03 - 2018/08",
          desc: "该项目是红光世家的 webapp 商场，展示家具商品、购买商品，为了 性能考虑，使用了 vue 框架及其相关技术进行开发。",
          technique: "使用vue-router 实现路由组件跳转及传参,在对应页面接收相应参 数操作，通过参数获取相应的数据渲染；使用 rem 和 flex 布局；使用 echarts 开发数据分析模块，展示用户的浏览记录以及商品的 被浏览次数；该项目为初次负责大部分功能开发的项目，是有很多犯错经验的项目，例如如何使用pros的多种模式获取接受数据，例如promise的多种方式的使用，async await的使用等。如何处理好路由的加载，路由懒加载的模式使用；webpack的一些内容修改，学会弄懂webpack的一些知识点，如何优化项目打包zip等。这个项目是广联的最后一个项目，也是对我帮助很多的一个项目，不过后来听同事说这个项目上线不久就重新开发其他版本了（甲方要求）。在这个项目之前，很多项目都是修修改改，没有很大部分的参与到项目中，但是也学会很多东西，理解相关的流程。",
          src: require("../assets/43.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.project {
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
  .project_desc{
    text-align: center;
    font-size: 12px;
  }
  .cont_wrapper{
    width: 100%;
    .cont_item{
      height: 500px;
      padding-bottom: 10px;
      margin-bottom: 40px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cont_item-text{
      // color: #fff;
      padding: 20px 30px;
      position: relative;
    }
    .cont_item-bg{
      height: 500px;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
  
    }
  }
}
h1 {
  text-align: center;
}
.test-flur {
  height: 100% !important;
  -webkit-filter: blur(0.46rem);
  -moz-filter: blur(0.46rem);
  -o-filter: blur(0.46rem);
  -ms-filter: blur(0.46rem);
  filter: blur(0.46rem);
}
</style>
