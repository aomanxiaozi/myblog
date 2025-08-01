<template>
    <div class="home">
<p>Home</p>
<button @click="handleClick">点击</button>
<p>当前计数：{{ count }}</p>
<div class="element">hello,this is a element</div>
<div class="element2">hello,this is a element2</div>
<div class="element3">hello,this is a element3</div>
<button @click="handleClick2">跳转three.js</button>
<button @click="handleClick3" style="margin-top: 10px; font-size: 16px; 
padding: 10px 20px; border-radius: 5px; 
background-color: #007bff; color: #fff; border: none; 
cursor: pointer;">跳转home</button>

</div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const count = ref(0)
const handleClick = () => {
    count.value++
}
const handleClick2 = () => {
    router.push('/web1')
}
const handleClick3 = () => {
    router.push('/BlogHome')
}
</script>

<style scoped>  
.home{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100vh;
}
.element{
    width: 100px;
    height: 100px;
    background-color: #f00;
    transform: rotate(45deg);
}
.element2{
    width: 50px;
    height: 50px;
    background-color: #0f0;

}
.element3{
    width: 100px;
    height: 100px;
    background-color: #00f;
    transition: transform 1s,background-color 1s ease;
}
.element3:hover{
    width: 100px;
    height: 100px;
    background-color: rgb(42, 239, 137);
    transform:rotateX(45deg);
    transform:rotateY(45deg);
}
</style>
