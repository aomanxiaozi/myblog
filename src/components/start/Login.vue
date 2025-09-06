<template>
    <div class="login-container">
      <el-card class="login-box">
        <h2 class="login-title">My-Blog</h2>
        <el-form
          :model="loginForm"
          :rules="loginRules"
          ref="loginFormRef"
          label-width="80px"
          class="login-form"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="请输入用户名"
              prefix-icon="el-icon-user"
            />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="loginForm.password"
              placeholder="请输入密码"
              type="password"
              prefix-icon="el-icon-lock"
              show-password
            />
          </el-form-item>
          <el-form-item class="button-container">
            <el-button
              type="primary"
              @click="handleLogin"
              class="login-button"
            >
              登录
            </el-button>
            <el-button
              type="primary"
              @click="handleRegister"
              class="login-button"
            >
              注册
            </el-button>
          </el-form-item>
          <div class="admin-entry">
            <el-button
              type="text"
              @click="goToAdminLogin"
              class="admin-button"
            >
              我是管理员
            </el-button>
          </div>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import axios from "axios";
  import {ElMessage} from "element-plus";
 
  export default {
    name: "LoginPage",
    setup() {
      const router=useRouter()
      const loginForm = ref({
        username: "",
        password: "",
      });
      
      const loginRules = {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 1, max: 10, message: "用户名长度在 1 到 10 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "密码长度在 6 到 16 个字符", trigger: "blur" },
        ],
      };
  
      const loginFormRef = ref(null);
  
      const handleLogin = () => {
        loginFormRef.value.validate((valid) => {
          if (valid){
              axios.post("/api/user/login",{
                    username:loginForm.value.username,
                    password:loginForm.value.password
            },{withCredentials:true}).then((response)=>{
                    if(response.data.flag===true){
                        ElMessage({
                          message:response.data.msg,
                          type:"success",
                        })
                        const token=response.data.data
                        console.log(token)
                        localStorage.setItem('token', token);
                        router.push({path:"/menu/bloghome"})
                    }
                    else if(response.data.flag===false){
                        ElMessage.error(response.data.msg);
                    }
            }).catch((error)=>{
                ElMessage.error("请求异常"+error.message);
                return false;
              })
          }
          else {
            ElMessage.error("用户名或密码错误");
            return false;
          }
        });
      };
      const handleRegister= () => {
            router.push({path:"/register"})
      }

      const goToAdminLogin = () => {
        router.push({path:"/AdminLogin"})
      }

      return {
        loginForm,
        loginRules,
        loginFormRef,
        handleLogin,
        handleRegister,
        goToAdminLogin,
      };
    },
  };
  </script>
  <style>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(45deg, #afdca7, #c4fadc, #fbc2eb, #a6c1ee, #a7d3e4, hsl(177, 30%, 54%));
    background-size: 400% 400%;
    animation: gradientBG 20s ease infinite;
  }
  
  @keyframes gradientBG {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
  
  .login-box {
    width: 400px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.9); /* 背景半透明 */
  }
  
  .login-title {
    text-align: center;
    margin-bottom: 20px;
    color: #303133;
  }
  
  .login-form {
    margin-top: 20px;
  }
  
  .button-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    margin-top: 20px; /* 与上方内容保持距离 */
  }
  
  .login-button {
    width: 120px;
  background-color: #6a11cb; /* 按钮背景色 */
  border-color: #6a11cb; /* 按钮边框色 */
  color: white; /* 按钮文字颜色 */
  font-weight: bold; /* 文字加粗 */
  border-radius: 20px; /* 圆角按钮 */
  transition: all 0.3s ease; /* 添加过渡效果 */
  }
  .login-button:hover {
  background-color: #2575fc; /* 鼠标悬停时的背景色 */
  border-color: #2575fc; /* 鼠标悬停时的边框色 */
  transform: scale(1.05); /* 悬停时稍微放大 */
}

.admin-entry {
  text-align: center;
  margin-top: 15px;
}

.admin-button {
  color: #6a11cb;
  font-size: 14px;
  padding: 0;
  border: none;
  background: transparent;
}

.admin-button:hover {
  color: #2575fc;
  text-decoration: underline;
}

</style>
  