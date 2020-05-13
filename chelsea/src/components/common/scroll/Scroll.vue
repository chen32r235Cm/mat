<template>
  <div>
      <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"Scroll",
    methods:{
        getss(){
            var s = new BScroll()
        console.log(s);
        }
        
    }
}
</script>

<style>

</style>