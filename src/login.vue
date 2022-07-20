<template>
  <div class="logincss">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-loginForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          // required 是否为必填项
          // message 当前规则校验失败时的提示
          // trigger 表单验证的触发实际，blur表示失去焦点时触发
          { required: true, message: "用户名为必填项", trigger: "blur" },
          {
            min: 3,
            max: 6,
            message: "用户名长度在 3 到 6 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "密码为必填项", trigger: "blur" },
          {
            min: 3,
            max: 6,
            message: "密码长度在 3 到 6 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log("right submit");
          alert("密码正确，登录成功");
          this.islogin();
        } else {
          alert("密码错误，请检查用户名或密码");
          console.log("error submit");
          return false;
        }
      });
    },
    islogin() {
      window.location.href = "./nav.html";
    },
    resetForm() {
      this.$refs.loginForm.resetFields();
    }
  }
};
</script>

<style>
.logincss {
  width: 350px;
  height: 400px;
  border: 2px solid rgb(1, 137, 248);
  border-radius: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
}
.demo-loginForm {
  width: 300px;
  height: 100%;
  padding-top: 100px;
}
</style>
