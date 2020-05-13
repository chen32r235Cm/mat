<template>
  <div class="tar-bar-item" @click="tarItem">
      <div :style="activeColor"><slot name="tar-active"></slot></div>
      <!-- <div v-else><slot name="tar"></slot></div> -->
      <div :style="activeColor"><slot name="ctx"></slot></div>
  </div>
</template>

<script>
export default {
    name:"TarBarItem",
    props:{
        path:{
            type:String,
            default:"/home"
        },
        switchColor:{
            type:String,
            default:'#9a9a9a'
        }
    },
    data() {
        return {
          
        }
    },
    computed:{
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeColor() {
            return this.isActive ? {color : this.switchColor } : {}
        }
    },
    methods:{
        tarItem() {
            console.log(this.path);
            this.$router.push(this.path)
        }
    }
}
</script>

<style scoped lang="scss">
    .tar-bar-item{
        flex: 1;
        // font-size: 0.16rem;
        text-align: center;
        height: 0.49rem;
    }
    .tar-bar-item i{
        font-size: 0.48rem;
        vertical-align: middle;
        margin-bottom: 0.04rem;
    }

</style>