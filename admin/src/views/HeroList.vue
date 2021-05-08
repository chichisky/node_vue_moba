<template>
  <div>
    <h2>英雄列表</h2>
    <el-table :data="items">
      <el-table-column prop="_id" label="id" width="240"> </el-table-column>
      <el-table-column prop="name" label="英雄名称"> </el-table-column>
      <el-table-column prop="title" label="称号"> </el-table-column>
      <el-table-column prop="avatar" label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt="" style="height: 3rem; border-radius: 5px">
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="160">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="$router.push(`/heroes/edit/${scope.row._id}`)"
            size="small"
            >编辑</el-button
          >
          <el-button type="primary" @click="remove(scope.row)" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    // 获得初始化数据
    async fetch() {
      const res = await this.$http.get("rest/heroes");
      this.items = res.data;
    },
    // 删除操作
    remove(row) {
      this.$confirm(`是否确定要删除英雄"${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await this.$http.delete(`rest/heroes/${row._id}`);
          this.fetch();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style>
</style>