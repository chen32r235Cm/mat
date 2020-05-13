<template>
  <div id="app">
    <control-tar></control-tar>
    <router-view></router-view>
  </div>
</template>
<script>

import {getMain} from "@/api"
import ControlTar from "@/components/content/ControlTar/ControlTar"

export default {
  components:{
    ControlTar
  },
  data() {
    return {

    }
  },
  created() {
    getMain().then((res)=>{
      console.log(res);
      
    })
  }
}
</script>
<style lang="scss">
@import "~@/assets/css/common.css";
@import "~@/assets/iconfont/iconfont.css";
</style>
