<template>
  <div>
    <div class="topbar bgc-black py-2 px-3 d-flex ai-center">
      <img class="d-flex ml-1" src="../assets/img/logo.png" style="width: 2.3077rem">
      <div class="px-2 flex-grow-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bgc-primary mr-1">立刻下载</button>
    </div>
    <div class="bgc-primary pt-3 pb-2">
      <div class="nav nav-inverse jc-around text-white pb-1  px-3">
        <div class="nav-item active">
          <router-link tag="div" class="nav-link" to="/">首页</router-link>
        </div>
         <div class="nav-item">
          <router-link tag="div" class="nav-link" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link tag="div" class="nav-link" to="/">赛事中心</router-link>
        </div>
        <div class="nav-item">
          <router-link tag="div" class="nav-link" to="/">IP新游</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss">
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
