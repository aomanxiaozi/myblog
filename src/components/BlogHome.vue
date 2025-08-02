<template>
      <el-container >
      <el-aside  class="aside-left">
        <el-card class="left-card">
          <div class="date-weather">
            <p>显示日期天气</p>
            <div class="time">{{ currentTime }}</div>
          </div>
          
          <p>111</p>
          <p>111</p>
        </el-card>
      </el-aside>
      <el-main class="main">
        Main
      </el-main>
      <el-aside class="aside-right">
        Aside
      </el-aside>
    </el-container>
</template>
<script setup>

import {ref,onMounted } from 'vue';
const currentTime=ref('')
const getdata_weather_date=()=>{

}
 onMounted(() => {
  getdata_weather_date()
 })
</script>
<style>

.aside-left {
  margin-left: 100px;
  width: 400px;
  height: 100%;
  border: solid 1px;
  padding-right: 20px;
}
.left-card{
  border-radius: 10px;
  background-color:rgba(190, 186, 186, 0.545);
  border: none;
}
.date-weather{

}
.aside-right {
  margin-right: 100px;
  width: 300px;
  height: 100%;
  background-color: #1f2a9b;
}</style>