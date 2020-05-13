<template>
  <div>
     <swiper swipeid="kko" :autoplay="autoplay">
            <div class="swiper-slide"  v-for="(item,index) in datalist" :key="index">
                {{item}}
            </div>
      </swiper>
  </div>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
export default {
    name:"Book",
    components:{Swiper},
    data() {
      return {
          datalist:["11111","222222","33333","44444","555555"],
          autoplay:true
      }
    }
}
</script>

<style>

</style>