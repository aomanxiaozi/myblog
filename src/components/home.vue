<template>
    <div class="home">
<p>Home</p>
<button @click="handleClick">点击</button>
<p>当前计数：{{ count }}</p>
<div class="element">hello,this is a element</div>
<div class="element2">hello,this is a element2</div>
<div class="element3">hello,this is a element3</div>
</div>
</template>
<script setup>
import { ref } from 'vue'
const count = ref(0)
const handleClick = () => {
    count.value++
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
    transition: transform 2s;
}
.element3:hover{
    width: 100px;
    height: 100px;
    background-color: #00f;
    transform:rotateX(45deg);
 
}
</style>
