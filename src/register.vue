<template>
  <div>
    <div id="app"></div>
    <template>
      <el-form
        :model="form"
        :rules="rules"
        ref="loginForm"
        label-width="120px"
        class="textinput"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item label="地区">
          <el-select
            v-model="form.region"
            placeholder="请选择你的地区"
            style="width: 200px"
          >
            <el-option label="上海" value="shanghai" />
            <el-option label="北京" value="beijing" />
          </el-select>
        </el-form-item>

        <el-form-item label="生日">
          <el-col :span="11">
            <el-date-picker
              v-model="form.date1"
              type="date"
              placeholder="选择日期"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="资料空开">
          <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="擅长科目">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="数学" name="type" />
            <el-checkbox label="语文" name="type" />
            <el-checkbox label="英语" name="type" />
            <el-checkbox label="物理" name="type" />
            <el-checkbox label="化学" name="type" />
            <el-checkbox label="生物" name="type" />
          </el-checkbox-group>
          <el-checkbox label="其他" name="type" />
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="身份">
          <el-radio-group v-model="form.resource">
            <el-radio label="高三毕业生" />
            <el-radio label="非高三毕业生" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="获奖情况、备注">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        region: "",
        date1: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        username: [
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
  }
};
</script>

<style>
.textinput {
  width: 500px;
}
</style>
