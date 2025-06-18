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
    const canvas = document.querySelector('canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75,2, 0.1, 5);
    const renderer = new THREE.WebGLRenderer(
        {
        antialias: true, 
        canvas,
        alpha:true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.z = 4;  

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;

    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new THREE.MeshBasicMaterial({color:0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(1,1,0);
    scene.add(cube);
    function animate(){
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    renderer.render(scene, camera);

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
