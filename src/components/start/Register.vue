<template>
  <div class="register-container">
    <el-card class="register-box">
      <h2 class="register-title">注册</h2>
      <el-form
          :model="registerForm"
          :rules="registerRules"
          ref="registerFormRef"
          label-width="100px"
          class="register-form"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
              v-model="registerForm.username"
              placeholder="请输入用户名"
              prefix-icon="el-icon-user"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
              v-model="registerForm.password"
              placeholder="请输入密码"
              type="password"
              prefix-icon="el-icon-lock"
              show-password
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input
              v-model="registerForm.confirmPassword"
              placeholder="请再次输入密码"
              type="password"
              prefix-icon="el-icon-lock"
              show-password
          />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
              v-model="registerForm.email"
              placeholder="请输入邮箱"
              prefix-icon="el-icon-message"
          />
        </el-form-item>
        <el-form-item class="button-container">
          <el-button
              type="primary"
              @click="handleRegister"
              class="custom-button"
          >
            注册
          </el-button>
          <el-button
              type="info"
              @click="handleBackToLogin"
              class="custom-button"
          >
            返回登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  name: "RegisterPage",
  setup() {
    const router = useRouter();
    const registerForm = ref({
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    });

    const validatePassword = (rule, value, callback) => {
      if (value !== registerForm.value.password) {
        callback(new Error("两次输入的密码不一致"));
      } else {
        callback();
      }
    };

    const registerRules = {
      username: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 1, max: 10, message: "用户名长度在 1 到 10 个字符", trigger: "blur" },
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 6, max: 16, message: "密码长度在 6 到 16 个字符", trigger: "blur" },
      ],
      confirmPassword: [
        { required: true, message: "请再次输入密码", trigger: "blur" },
        { validator: validatePassword, trigger: "blur" },
      ],
      email: [
        { required: true, message: "请输入邮箱", trigger: "blur" },
        { type: "email", message: "请输入正确的邮箱格式", trigger: "blur" },
      ],
    };

    const registerFormRef = ref(null);

    const handleRegister = async () => {
      try {
      const valid = await registerFormRef.value.validate();
      if (!valid) return;
      const response = await axios.post("/api/user/register", {
        username: registerForm.value.username,
        password: registerForm.value.password,
        email: registerForm.value.email
      });

      // 处理响应
      if (response.data.code === 500) {
        ElMessage.error("注册失败/服务器错误");
      } else if (response.data.code === 501) {
        ElMessage.error("用户名已存在");
      } else if (response.data.flag === true) {
        ElMessage.success("注册成功");
        await router.push("/login");
      }

      } catch (error) {
      if (error.fields) {
        // 表单验证错误
        ElMessage.error("请正确填写表单信息");
      } else {
        // 网络请求错误
        ElMessage.error("网络请求失败");
        console.error("请求错误:", error);
      }
    }
    };

    const handleBackToLogin = () => {
      router.push("/login"); // 跳转到登录页面
    };

    return {
      registerForm,
      registerRules,
      registerFormRef,
      handleRegister,
      handleBackToLogin,
    };
  },
};
</script>

<style scoped>
.register-container {

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(90deg, #c8c8c8, #b0edbb,#c8c8c8);
}

.register-box {
  width: 450px;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.register-title {
  text-align: center;
  margin-bottom: 30px;
  color: #303133;
  font-size: 24px;
  font-weight: 600;
}

.register-form {
  margin-top: 20px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.custom-button {
  width: 48%;
  background-color: #409EFF;
  border-color: #409EFF;
  color: white;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.custom-button:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
  transform: translateY(-2px);
}
</style>