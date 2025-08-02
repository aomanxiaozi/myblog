<template>
    <div class="blog-home">
    <el-container>
    <el-header class="header">
            <el-menu
        :default-active="activeIndex"
        :router=true
        class="el-menu-demo"
        mode="horizontal"
        background-color="white"
        text-color="black"
        active-text-color="black"
        @select="handleSelect"
    >
        <el-menu-item index="/menu/bloghome">首页</el-menu-item>
        <el-menu-item index="/menu/note">笔记</el-menu-item>
        <el-menu-item index="3">其他</el-menu-item>
        </el-menu>
    </el-header>
    <el-container >
      
      <el-main class="main">
        <router-view></router-view>
      </el-main>
     
    </el-container>
    <el-footer class="footer">Footer</el-footer>
    </el-container>
    </div>
    
</template>
<script setup>
import { nextTick, onMounted, ref, watch } from 'vue';
import { useRouter,useRoute } from "vue-router";
const route = useRoute();
const router= useRouter();
const activeIndex = ref(route.path);
const handleSelect = (index) =>{
    activeIndex.value=index;
    
 
}
onMounted(()=>{
    activeIndex.value = route.path  // 确保路由已初始化
    console.log('当前路由:', route.path)
})


</script>

<style scoped>

.blog-home {
  background-image: url("../bg_pe/mybg1.png");
  background-size: cover;
  background-position: center;
  background-repeat:no-repeat;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header {

    display: flex;
    justify-content: center;  
    width: 100%;
    height: 70px;
    padding: 10px;
}
.main {
    width: 100%;
    height: 100%;
    background-color: #c4aaaa4b;
   
}   

.footer {
    width: 100%;
    height: 30px;
    background-color: #c3dd1b2a;
    
}

.el-menu-demo {
    max-width: 100%;
    border-radius: 10px;   
    border: 1px solid #000;
    width: 700px;
    display: flex;
    justify-content: center;
    height: 50px;
    background: linear-gradient(90deg, #ffffff80,#e7838180, #fafafa80);
}
.el-menu-demo .el-menu-item {
    margin-left: 2px;
    margin-right: 2px;
    width: 200px;
    border-bottom: none;
    border-radius: 5px;
    font-size: 15px;
    
}
.el-menu-demo .el-menu-item.is-active{
    background-color:#e8aca7
}

</style>
