<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }" class="el-card">
      <div slot="header">
        <span>请先登录</span>
      </div>
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
      
    </el-card>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {}
    }
  },
  methods: {
    async login(){
      const res = await this.$http.post('login', this.model);
      this.$message({
        type: "success",
        message: "登陆成功"
      })
      localStorage.token = res.data.token;
      this.$router.push("/");
    }
  }
}
</script>

<style>
.el-card {
  width: 25rem;
  margin: 5rem auto;
}
</style>