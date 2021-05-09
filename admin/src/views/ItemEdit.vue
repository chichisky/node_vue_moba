<template>
  <div>
    <el-form @submit.native.prevent="save" label-width="120px">
      <h1>{{ id ? "编辑" : "新建" }}物品</h1>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :headers = "headers"
          :show-file-list="false"
          :on-success="res => $set(model, 'icon', res.url)"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height: 5rem"></i>
        </el-upload>
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
      isId: true,
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    };
  },
  methods: {

    // 保存数据，如果修改则put,如果新建则post
    async save() {
      if (this.id) {
        await this.$http.put(`rest/items/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/items", this.model);
      }
      this.$router.push("/items/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    // 初始化数据
    async feach() {
      let res = await this.$http.get(`rest/items/${this.id}`);
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
  beforeUpdate () {
    this.id ? 1 : this.isModel();
  }
};
</script>

<style>
</style>