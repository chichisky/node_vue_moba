<template>
  <!-- card -->
    <div class="card mt-3 py-1 px-4 bgc-white">
      <div class="card-head d-flex py-3 fs-xl">
        <i class="iconfont" :class="`icon-${icon}`"></i>
        <div class="flex-1 px-2">{{title}}</div>
        <i v-if="{isMore}" class="iconfont icon-menu"></i>
      </div>
      <slot name="header"></slot>
      <div class="card-body pt-3">
         <div class="nav jc-between">
           <div class="nav-item" 
                :class="{active: active === i}" 
                v-for="(item, i) in categories" 
                :key="i"
                @click="active = i, $refs.news_list.$swiper.slideTo(i)">
             <div class="nav-link">{{item.name}}</div>
           </div>
        </div>
        <div class="pt-3">
          <swiper ref="news_list" :options= "{autoHeight: true}"
                  @slide-change="() => active = $refs.news_list.$swiper.realIndex">
            <swiper-slide v-for="(item, i) in categories" :key="i">
              <slot name="cardList" :category="item"></slot>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {type: String, required: true},
    icon: {type: String, required: true},
    isMore: {type: Boolean, default: true},
    categories: {type: Array, required: true},
  },
  data () {
    return {
      active: 0,
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
.card-head {
  border-bottom: 1px solid $border-color;
}
</style>>
