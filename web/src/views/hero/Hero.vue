<template>
  <div class="page_hero">
    <div class="topbar bgc-black py-2 px-3 d-flex ai-center text-white">
      <img
        class="d-flex ml-1 mr-1"
        src="../../assets/img/logo.png"
        style="width: 2.3077rem"
      />
      <div class="pl-2 pr-2">王者荣耀</div>
      <div class="px-2 flex-1">攻略战</div>
      <div class="mr-1">更多英雄</div>
      <i class="iconfont icon-arrow d-flex"></i>
    </div>
    <div v-if="model">
      <div class="header_hero mb-1" style="width: 100%; height: 14.6923rem">
        <img :src="model.banner" style="width: 100%; height: 100%" alt="" />
        <div class="hero_attribute text-white pl-3 fs-sm " style="width: 100%">
          <p>{{ model.title }}</p>
          <p class="fs-xl">
            <strong>{{ model.name }}</strong>
          </p>
          <p>{{ model.categories.map((v) => v.name).join("/") }}</p>

          <div class="d-flex jc-between">
            <div class="scores" v-if="model.scores">
              <span>难度</span>
              <span class="bgc-primary mx-2">{{ model.scores.diffcult }}</span>
              <span>技能</span>
              <span class="bgc-blue mx-2">{{ model.scores.skills }}</span>
              <span>攻击</span>
              <span class="bgc-danger mx-2">{{ model.scores.attack }}</span>
              <span>生存</span>
              <span class="bgc-grey-1 mx-2">{{ model.scores.survive }}</span>
            </div>
            <div class="pr-3 text-grey">皮肤 8 &gt;</div>
          </div>
        </div>
      </div>
    </div>
    <div class="skills bgc-white">
      <div class="nav d-flex text-black  text-center jc-around pt-3 mx-3 pb-2">
        <div class="nav-item active">英雄初识</div>
        <div class="nav-item ">进阶攻略</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
    },
  },
  data() {
    return {
      model: {
        categories: [],
      },
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style lang='scss'>
@import '../../assets/scss/_variables.scss';
.page_hero {
  .topbar {
    position: sticky;
    top: 0;
    z-index: 999;
  }

  .header_hero {
    position: relative;

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: url(//game.gtimg.cn/images/yxzj/m/m201706/images/herodetail/bt.png);
      background-size: contain;
    }

    .hero_attribute {
      position: absolute;
      z-index: 1;
      bottom: 1rem;

      .scores :nth-child(2n) {
        display: inline-block;
        text-align: center;
        height: 1.1538rem;
        width: 1.1538rem;
        border-radius: 50%;
        font-size: 0.9rem;
        border: 1px solid rgba($color: #fff, $alpha: .1)
      }
    }
  }

  .nav {
    border-bottom: 1px solid $border-color;

  }
}
</style>