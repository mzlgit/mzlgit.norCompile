<template>
    <div class="m-nav">
        <v-navigation-drawer v-model="drawer" :color="color" disable-resize-watcher app class="elevation-12" width="250">
            <!-- <v-list-item  two-line >
                <v-avatar size="100" class="m-avatar elevation-1">
                    <img src="../assets/logo-name.png">
                </v-avatar>
                <p class="text-center">Margin mzl' website</p>
            </v-list-item> -->
            <v-divider></v-divider>
            <v-container class="avatar-container text-xs-center pt-5">
                <div class="m-avatar elevation-1 mb-4">
                    <img class="avatar" src="../assets/toux2.png" style="width: 100%">
                </div>
                <p class="text-center mb-1">
                    mzl
                </p>
                <p class="text-center">
                    mzl' website
                </p>
            </v-container>
            <v-list nav>
                <v-list-item v-for="item in items" :key="item.title" link exact :to="item.path" :target="item.target" color="#1976d2">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
            
            <v-container class="d-flex justify-space-around">
                <v-tooltip top v-for="(item,idx) in contacts" :key="idx">
                    <template v-slot:activator="{ on }">
                        <v-btn :color="item.color" v-on="on" fab small floating @click="handlerContact(item.link)" elevation="5" class="mu-btn">
                            <span v-html="item.icon"></span>
                            <!-- <v-icon>mdi-pencil</v-icon> -->
                        </v-btn>
                    </template>
                    <span>{{item.tooltip}}</span>
                </v-tooltip>
            </v-container>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: "m-nav",
    props: {
        smallStatus: {
            required: true,
            type: Boolean,
            default: false
        },
        drawerStatus: {
            required: true,
            type: Boolean,
            default: true
        },
        drawpper: {
            required: true,
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            drawer: true,
            items: [
                { title: "Home", icon: "mdi-home", path: "/"},
                { title: "Project", icon: "mdi-laptop", path: "/project" },
                { title: "About", icon: "mdi-emoticon-wink-outline", path: "/about" },
                { title: "Blog", icon: "mdi-view-day", path: "/blog", target: "_blank" }
            ],
            contacts: [],
            color: "#fff",
            colors: ["primary", "blue", "success", "red", "teal"],
        }
    },
    created() {
        this.contacts = require("../assets/json/contact").contacts;
    },
    // computed: {
    //     status: function() {
    //         if(this.smallStatus && !this.drawpper) {
    //             return false;
    //         }
    //         if(this.smallStatus && this.drawerStatus) {
    //             return true;
    //         }
    //         if(!this.smallStatus) {
    //             return true;
    //         }
    //         return false;
    //     }
    // },
    methods: {
        handlerContact(val) {
            if(val) {
                window.open(val, "_blank")
            }
        }
    },
    watch: {
        smallStatus: {
            handler: function() {
                if(this.smallStatus && !this.drawpper) {
                    this.drawer = false;
                }
                if(this.smallStatus && this.drawpper) {
                    this.drawer = true;
                }
                if(this.smallStatus && this.drawerStatus) {
                    this.drawer = true;
                }
                if(!this.smallStatus) {
                    this.drawer = true;
                }
            }
        },
        drawpper: {
            handler: function() {
                if(this.smallStatus && !this.drawpper) {
                    this.drawer = false;
                }
                if(this.smallStatus && this.drawpper) {
                    this.drawer = true;
                }
                if(this.smallStatus && this.drawerStatus) {
                    this.drawer = true;
                }
                if(!this.smallStatus) {
                    this.drawer = true;
                }
                if(this.drawpper) {
                    this.drawer = true;
                }
            }
        },
        drawer: {
            handler: function(val) {
                if(!val) {
                    this.$emit("changeStatus", false)
                } else {
                    this.$emit("changeStatus", true)
                }
            }
        }
    },
    
}
</script>

<style lang="less" scoped>
.m-nav{
    .m-avatar {
        width: 180px;
        height: 180px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        margin: 0 auto;
    }
    .mu-btn:before{
        background-color: unset;
    }
}
</style>
