<template>
  <div>
    <el-form @submit.native.prevent="save" label-width="120px">
      <h1>{{ id ? "编辑" : "新建" }}分类</h1>
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple placeholder="请选择">
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章标题" >
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容" >
        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="model.body"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
export default {
  components: {
    VueEditor
  },
  props: {
    id: {},
  },
  data() {
    return {
      model: {},
      categories: [],
    };
  },
  methods: {
    // 保存数据，如果修改则put,如果新建则post 
    async save() {
      if (this.id) {
        await this.$http.put(`rest/articles/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/articles", this.model);
      }
      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    // 初始化数据
    async feach() {
      let res = await this.$http.get(`rest/articles/${this.id}`);
      this.model = res.data;
    },
    // 初始化数据，获取分类数据
    async feachCategories() {
      let res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    },
    handleImageAdded: async function(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)
 
      const formData = new FormData();
      formData.append("file", file);

      const res = await this.$http.post('upload', formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
  },
  created() {
    this.feachCategories();
    this.id && this.feach();
  },
};
</script>

<style>
</style>