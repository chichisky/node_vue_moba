<template>
  <div>
    <el-form @submit.native.prevent="save" label-width="120px">
      <h1>{{ id ? "编辑" : "新建" }}分类</h1>
      <el-form-item label="上级分类">
        <el-select v-model="model.parent" placeholder="请选择">
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称" >
        <el-input v-model="model.name"></el-input>
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
      parents: []
    };
  },
  methods: {
    // 保存数据，如果修改则put,如果新建则post 
    async save() {
      if (this.id) {
        await this.$http.put(`rest/categories/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/categories", this.model);
      }
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    // 初始化数据
    async feach() {
      let res = await this.$http.get(`rest/categories/${this.id}`);
      this.model = res.data;
    },
    // 初始化数据，获取上级分类数据
    async feachParents() {
      let res = await this.$http.get(`rest/categories`);
      this.parents = res.data;
    },
    isModel() {
      this.id ? 1 : (this.model = {});
    },
  },
  created() {
    this.feachParents();
    this.id && this.feach();
  },
  beforeUpdate() {
    // this.isModel ()
  },
};
</script>

<style>
</style>