<template>
    <div class="demo">
        <h3>demo</h3>
        <!-- <input type="text" v-model="name"> -->
        <span>点击上传：</span> <input type="file" id="files1" @change="uploadFile1()">
        <hr>
        <!-- <input type="text" v-model="value"> -->
        <span>点击上传2：</span> <input type="file" id="files2" @change="uploadFile2">
        <!-- <button @click="writeJson">新增JSON</button> -->
        <div v-for="(item,idx) in arr" :key="idx">
            <span>{{item.name}}</span>
            <span>{{item.value}}</span>
        </div>
    </div>
</template>

<script>
// import writeJ from './test'
export default {
    name: "demo",
    data() {
        return {
            arr: [{
                name: 1,value: 2
            }]
        }
    },
    methods: {
        uploadFile1() {
            const selectedFile = document.getElementById('files1').files[0]
            // 读取文件名
            const name = selectedFile.name
            // 读取文件大小
            const size = selectedFile.size
            // FileReader对象，h5提供的异步api，可以读取文件中的数据。
            const reader = new FileReader()
            // readAsText是个异步操作，只有等到onload时才能显示数据。
            reader.readAsText(selectedFile)
            reader.onload = function () {
                    //当读取完成后回调这个函数,然后此时文件的内容存储到了result中,直接操作即可
                    console.log(this.result,name,size);
            }
        },
        uploadFile2(e) {
            let that = this;
            const selectedFile = e.target.files[0]
            const reader = new FileReader()
            // 文件内容载入完毕之后的回调。
            reader.onload = function(e) {
                console.log(JSON.parse(e.target.result))
                that.arr = JSON.parse(e.target.result).data
            }
            reader.readAsText(selectedFile)
        }
    }
}
</script>

<style lang="less" scoped>
.demo{

}
</style>


