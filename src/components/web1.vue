<template>
    <div class="web1">
        <div class="web1-header">hello,this is a web1</div>
        <canvas class="c">111</canvas>

    </div>

</template>

<script setup type="module">
import * as THREE from 'three';
import {  onMounted } from 'vue';


onMounted(() => {
    // 获取canvas
    const canvas = document.querySelector('canvas');
    // 场景
    const scene = new THREE.Scene();
    // 相机
    const camera = new THREE.PerspectiveCamera(75,2, 0.1, 5);
    // 渲染器
    const renderer = new THREE.WebGLRenderer(
        {
        antialias: true, 
        canvas,
        alpha:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 添加到场景

    camera.position.z = 4;  

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;

    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    // 材质
    const material = new THREE.MeshBasicMaterial({color:0x00ff00});
    // 几何体
    const cube = new THREE.Mesh(geometry, material);
    // 添加到场景
    cube.position.set(1,1,0);
    scene.add(cube);
    // 动画
    function animate(){
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    // 渲染
    renderer.render(scene, camera);
    // 动画
    requestAnimationFrame(animate);
    animate();


})
   

</script>

<style scoped>
.c{
    display: block;
    width: 100%;
    height: 100%;      
    background: linear-gradient(to bottom, #090d1f, #d16565);
}
</style>
