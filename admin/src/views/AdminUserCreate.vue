<template>
  <div>
    <el-form @submit.native.prevent="save" label-width="120px">
      <h1>{{ id ? "编辑" : "新建" }}管理员</h1>
      <el-form-item label="名称" >
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" >
        <el-input type="text" v-model="model.password"></el-input>
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
      parents: [],
      isId: true
    };
  },
  methods: {
    // 保存数据，如果修改则put,如果新建则post 
    async save() {
      if (this.id) {
        await this.$http.put(`rest/admin_user/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/admin_user", this.model);
      }
      this.$router.push("/admin_user/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    // 初始化数据
    async feach() {
      let res = await this.$http.get(`rest/admin_user/${this.id}`);
      this.model = res.data;
    },
    isModel() {
      this.isId ? this.model = {} : 1;
      this.isId = false;
    },
  },
  created() {
    this.id && this.feach();
  },
  beforeUpdate() {
    this.id ? 1 : this.isModel();
  },
};
</script>

<style>
</style>