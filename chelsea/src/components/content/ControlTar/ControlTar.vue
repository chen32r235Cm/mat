<template>
  <div>
    <tar-bar>
      <tar-bar-item path="/home" switchColor="red">
        <template v-slot:tar-active>
            <i class="iconfont icon-buoumaotubiao36"></i>
        </template>
        <template v-slot:ctx>
            <span>精选</span>
        </template>
      </tar-bar-item>
      <tar-bar-item path="/category" switchColor="red">
        <template v-slot:tar-active>
            <i class="iconfont icon-fenlei"></i>
        </template>
        <template v-slot:ctx>
          <span>分类</span>
        </template>
      </tar-bar-item>
      <tar-bar-item path="/book" switchColor="red">
        <template v-slot:tar-active>
             <i class="iconfont icon-shu"></i>
        </template>
        <template v-slot:ctx>
          <span>小萌书</span>
        </template>
      </tar-bar-item>
      <tar-bar-item path="/cart" switchColor="red">
        <template v-slot:tar-active>
             <i class="iconfont icon-tubiaozhizuomoban"></i>
        </template>
        <template v-slot:ctx>
          <span>购物车</span>
        </template>
      </tar-bar-item>
      <tar-bar-item path="/profile" switchColor="red">
        <template v-slot:tar-active>
             <i class="iconfont icon-wode"></i>
        </template>
        <template v-slot:ctx>
          <span>我的E宠</span>
        </template>
      </tar-bar-item>
    </tar-bar>
  </div>
</template>

<script>
import TarBar from "@/components/common/tarbar/TarBar.vue";
import TarBarItem from "@/components/common/tarbar/TarBarItem.vue";

export default {
  name: "ControlTar",
  components: {
    TarBar,TarBarItem
  }
};
</script>

<style>
</style>