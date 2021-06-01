<template>
  <div>
    <el-form @submit.native.prevent="save" label-width="120px">
      <h1>{{ id ? "编辑" : "新建" }}管理员</h1>
      <el-form-item label="名称" >
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" >
        <el-input v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      model: {},
    };
  },
  methods: {
    // 保存数据，如果修改则put,如果新建则post 
    async save() {
      if (this.id) {
        await this.$http.put(`rest/admin_users/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/admin_users", this.model);
      }
      this.$router.push("/admin_users/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    // 初始化数据
    async feach() {
      let res = await this.$http.get(`rest/admin_users/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.id && this.feach();
  },
};
</script>

<style>
</style>