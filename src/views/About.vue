<template>
  <div class="container about">
    <h1>个人情况</h1>
    <v-row justify="center">
      <v-expansion-panels popout v-model="initNum">
        <v-expansion-panel>
          <v-expansion-panel-header>基本信息</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card>
              <v-img height="200px" src="../assets/meihua.png">
                <v-card-title class="white--text mt-8">
                  <v-avatar size="56">
                    <img alt="user" src="../assets/toux2.png" />
                  </v-avatar>
                  <p class="ml-3" style="color: #000">
                    mzl
                  </p>
                </v-card-title>
              </v-img>

              <v-card-text>
                <div class="font-weight-bold ml-8 mb-2">
                  Basic Info
                </div>
                <div class="vcard-um ml-10">
                  <div align-top class="vcard-item">
                    <div v-for="(message, idx) in messages" :key="idx">
                      <div>
                        <div class="font-weight-normal cont-um">
                          <strong>{{ message.label }}</strong>
                          <p>{{ message.message }}</p>
                        </div>
                        <!-- <div class="inset-um">{{ message.message }}</div> -->
                      </div>
                    </div>
                  </div>
                  <div align-top class="vcard-item">
                    <div v-for="(message, idx) in messages2" :key="idx">
                      <div>
                        <div class="font-weight-normal cont-um">
                          <strong>{{ message.label }}</strong>
                          <p>{{ message.message }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>工作经历</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item
                v-for="(item, i) in companys"
                :key="i"
                :color="item.color"
                :icon="item.icon"
                fill-dot
              >
                <v-card :color="item.color" dark>
                  <v-card-title class="title">
                    {{item.name}} <small style="padding-left: 20px;font-size: 13px">{{item.time}}</small>
                  </v-card-title>
                  <v-card-text class="white text--primary">
                    <p>
                      {{item.desc}}
                    </p>
                    <p>
                      {{item.cont}}
                    </p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initNum: 0,
      listData: [
        {
          name: "基本信息",
          desc: "",
        },
      ],
      messages: [
        {
          label: "昵称 🎯",
          message: "mzl",
        },
        {
          label: "性别 👦",
          message: "男",
        },
        {
          label: "学历 📚",
          message: "本科",
        },
        {
          label: "运动 🏀",
          message: "篮球",
        },
      ],
      messages2: [
        {
          label: "Email 📮",
          message: "mahorizen@163.com",
        },
        {
          label: "职业 👜",
          message: "web前端开发",
        },
        {
          label: "学校 🏫",
          message: "仲恺农业工程学院",
        },
        {
          label: "其他爱好 🌊",
          message: "电影、听歌、游戏，动漫",
        },
      ],
      companys: [
        {
          name: "广州明动软件股份有限公司",
          desc: "广州明动软件股份有限公司是一家专注政府领域，专门从事软件开发、系统集成、业务运营以及信息化咨询服务的公司。",
          cont: "在公司期间，完成三个项目，每个项目大概2-3个系统（pc + webapp + 微信端公众号+小程序），项目内容为政府单位系统：政策申报、业务管理、内部绩效等定制化内容。在学习方面，学习到了关于OA工作流的工作模式，利用OA工作流根据组织架构信息处理业务数据。使用到的技术栈为 vue 的居多，使用到的ui库有element adt vant iview等主流ui库；pc端的后台管理系统普遍为jsp项目，搭配公司的内部ui库使用。大部分的项目为独立开发，配合后台同事完成项目，通常是1：2或者2：4的前后端人数比例，项目的整体开发时长不一定，按甲方需求改变，普遍一个项目开发周期为九个月左右。这是一段很美好的回忆。",
          time: "2018/09 - 2020/12",
          color: "red lighten-2",
          icon: "mdi-star",
        },
        {
          name: "广联网络（广东）有限公司",
          desc: "大四期间实习的公司，公司承接外面的个人、企业的开发项目，如公司主页，企业的多端网站开发，微信端或web端等。",
          cont: "在公司实习期间，完成项目团队分配的任务，在遇到难点的时候，得到很多同事的帮助，帮助我学习开发知识，前端的知识等。通常开发过程我都是个小帮手，完成一些不难的bug修改，完成一些简单的任务，例如布局，轮播图等。后面也慢慢开始自己独立开发模块，学习更深入的知识。很感谢同事们的帮忙，这里是起点。",
          time: "2017/04 - 2018/08",
          color: "purple darken-1",
          icon: "mdi-book-variant",
        },
        {
          name: "毕业 🎓",
          time: "2013/09-2017/06",
          cont: "大学四年，学习很多东西，一群好朋友陪伴走过四个春秋，也将陪伴着。",
          color: "green lighten-1",
          icon: "mdi-airballoon",
        }
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.about {
  padding: 20px;
  .v-card {
    box-shadow: none;
  }
  .vcard-um {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .vcard-item {
      width: 48%;
    }
    .inset-um {
      text-indent: 20px;
    }
    .cont-um {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px;
      p {
        margin: 0;
        padding-left: 40px;
      }
    }
  }
}
h1 {
  text-align: center;
}
</style>
