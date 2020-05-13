<template>
  <div></div>
</template>

<script>
export default {
    name:"MeunList",
    props:{
        goods:{
            type:Array,
        }
    },
    created() {
        console.log(this.goods);
        
    }
}
</script>

<style>

</style>