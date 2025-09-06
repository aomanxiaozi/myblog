<template>
    <div class="note">
        <div class="create-note">
            <el-card class="create-note-card">
              111
            </el-card>
        </div>
      <div class="my-note">
        <div v-if="notes.length > 0" class="my-note" v-for="note in notes" :key="note.id">
          <!-- 笔记内容 -->
        </div>
        <div v-else class="empty-notes">
          暂无笔记
        </div>
      </div>
    </div>
</template>


<script setup>
import { ref,onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from "axios";
import {ElMessage} from "element-plus";

const notes = ref([]);
const fetchData = async () => {
  await axios.get("/api/notes/getAllNotes",{
    headers:{
      "Authorization":  localStorage.getItem("token"),
      "content-type": "application/json"
    }
  }).then((res) => {
      if(res.data.flag===false){
        ElMessage.error(res.data.msg);
      }
      else{
        notes.value = res.data.data;
      }
  }).catch((err) => {
    ElMessage.error("请求异常")
    notes.value = "";
    console.log(err);
  })
}
onMounted(() => {
  fetchData()
})
</script>

<style>
.note{
  display:flex;
  justify-content: space-around;
}
.create-note{
  width: 600px;
  height: 450px;
}
.my-note{
  background: #ffffff;
  width: 1000px;
  min-height: 450px;
}
.empty-notes{
  display: grid;
  place-items: center;
  height : 100%;
}
.create-note-card{
  margin: 20px;
  height: 400px;
}
.create-note-card:hover{
  transform: scale(1.01) translateY(-10px) ;
}
</style>