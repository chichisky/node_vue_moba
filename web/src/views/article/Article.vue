<template>
  <div class="page_article" v-if="model">
    <div class=" py-2 article_head">
      <div class="py-1 d-flex text-info-title">
        <i class="iconfont icon-back-line pr-3" style="width: 1.0769rem; height: 1.0769rem" @click="$router.back()"></i>
        <strong class="fs-lg text-ellipsis ">{{model.title}}</strong>
        <div class="text-grey fs-sm s_date">{{model.createdAt.slice(0,10)}}</div>
      </div>
    </div>
    <div v-html="model.body" class="body px-4 fs-xl py-3">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        createdAt: ""
      }
    }
  },
  props: {
    id: {
      required: true
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/articles/${this.id}`);
      this.model = res.data;
    }
  },
  created () {
    this.fetch();
  }
}
</script>

<style lang="scss">
@import '/src/assets/scss/_variables.scss';
.page_article {
  .article_head {
    border: 1px solid $border-color;

    .s_date {
      position: absolute;
      right: 1.6rem;
    }
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    .ql-align-center {
      text-align: center;
    }
    iframe {
      max-width: 100%;
    }
    
  }
}
</style>