<template>
    <div class="blog-home">
    <el-container>
    <el-header class="header">
            <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="white"
        text-color="black"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
        <el-menu-item index="1">Processing Center1</el-menu-item>
        <el-menu-item index="2">Processing Center2</el-menu-item>
        <el-menu-item index="3">Processing Center3</el-menu-item>
        </el-menu>
    </el-header>
    <el-container >
      <el-aside width="200px" class="aside-left">Aside</el-aside>
      <el-main class="main">Main</el-main>
      <el-aside width="200px" class="aside-right">Aside</el-aside>
    </el-container>
    <el-footer class="footer">Footer</el-footer>
    </el-container>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const activeIndex = ref('1');


</script>

<style scoped>
.blog-home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header {
    display: flex;
    justify-content: center;  

    width: 100%;
    height: 100px;
    background-color: #a87676;
    padding: 20px;
}
.main {
    width: 100%;
    height: 100%;
    background-color: #c4aaaa;
   
}   
.aside-left {
    margin-left: 100px;
    width: 400px;
    height: 100%;
    background-color: #7cb778;
}
.aside-right {
    margin-right: 100px;
    width: 300px;
    height: 100%;
    background-color: #1f2a9b;
}
.footer {
    width: 100%;
    height: 30px;
    background-color: #c3dd1b;
}

.el-menu-demo {
    max-width: 100%;
    border-radius: 10px;   
    border: 1px solid #000;
    width: 700px;
    display: flex;
    justify-content: center;
}
.el-menu-demo .el-menu-item {
    width: 200px;
}
</style>
