<template>
  <div class="tarbar">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"TarBar"
}
</script>

<style scoped lang="scss">
    .tarbar{
        display: flex;
        position: fixed;
        width: 100%;
        bottom:0;
        height:0.98rem;
        background: white;
        z-index: 199;
    }
</style>