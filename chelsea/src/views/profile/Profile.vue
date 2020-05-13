<template>
  <div>
      <van-swipe @change="onChange" :width="160" :loop="false" :show-indicators="false" >
        <van-swipe-item v-for="(item,index) in arr" :key="index" @click="onClick">item</van-swipe-item>
      </van-swipe>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name:"Profile",
    data() {
      return {
        arr:[1,2,3,4,5]
      }
    },
    methods:{
      onChange(index) {
        console.log(Toast('当前 Swipe 索引：' + index));
        console.log(index);
    },
    onClick(event) {
        console.log(event);

    }
    }
}
</script>

<style scoped lang="scss">

</style>