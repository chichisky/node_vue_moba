<template>
  <div>
    <!-- start of swiper -->
    <swiper :options="swiperOption">
      <swiper-slide>
        <a href="">
          <img class="w-100" src="../../assets/img/home/swiper_2.jpg" alt="" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="">
          <img class="w-100" src="../../assets/img/home/swiper_1.jpg" alt="" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="">
          <img class="w-100" src="../../assets/img/home/swiper_3.jpg" alt="" />
        </a>
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right pr-3 pb-2"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper -->

    <!-- start of entry_nav_icons -->
    <div class="nav-icons bgc-white mt-3 text-center pt-3 fs-sm">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2">
        <i class="sprite sprite-arrow mr-1"></i>
        <span class="text-black">收起</span>
      </div>
      <div></div>
    </div>
    <!-- end of entry_nav_icons -->

    <!-- start of news -->
    <card title="新闻资讯" icon="Menu" :categories="newCats">
      <template #cardList="{category}">
        <router-link tag="div" :to="`/articles/${item._id}`" v-for="(item, i) in category.newsList" :key="i" 
             class="py-2 fs-lg d-flex">
          <span class="text-info">[{{item.categoryName}}]</span>
          <span class="px-1">|</span>
          <span class="flex-1 text-ellipsis pr-2">{{item.title}}</span>
          <span class="text-grey">{{item.createdAt.slice(5,10)}}</span>
        </router-link>
      </template>
    </card>
    <!-- end of news -->
    <!-- start of heroes -->
    <card title="英雄列表" icon="hero" :categories="heroCats">
      <template #header>
        <img class="pb-3 hero_header" src="../../assets/img/home/hero_header.jpg" style="width: 100%" alt="">
      </template>
      <template #cardList="{category}">
        <div class="d-flex flex-wrap text-center fs-sm"
             style="margin: 0 -0.5rem">
          <router-link tag="div" :to="`/heroes/${hero._id}`" v-for="(hero, i) in category.heroesList" 
               :key="i"
               class="p-2 hero_list" >
            <img :src="hero.avatar" alt="" 
               class="w-100">
            <span>{{hero.name}}</span>
          </router-link>
          
        </div>
      </template>
    </card>
    <card title="精彩视频" icon="video"></card>
  </div>
</template>

<script>
import Card from '../../components/Card'
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home",
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 2000,
        },
      },
      newCats: [],
      heroCats: [],
    };
  },
  components: {
    Card,
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list');
      this.newCats = res.data;
    },
    async fetchHeroesCats() {
      const res = await this.$http.get('heroes/list');
      this.heroCats = res.data;
    }
  },
  created () {
    this.fetchNewsCats();
    this.fetchHeroesCats()
  },
  watch: {
    id: 'fetch',
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";
// 轮播图样式
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    background-color: #fff;
    border-radius: 0.1538rem;
    &.swiper-pagination-bullet-active {
      background-color: map-get($map: $colors, $key: "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    flex: 25% 0 0;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
.hero_header {
  border-bottom: 1px solid $border-color;
}
.hero_list {
  width: 20%;
}

</style>