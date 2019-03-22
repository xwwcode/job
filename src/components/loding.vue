<template>
  <div class="loding">
      <svg class="load" viewBox="25 25 50 50">
          <circle class="loading" cx="50" cy="50" r="20" fill="none" />
      </svg>
  </div>
    
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style scoped>
  .loding{
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    right: 2rem;
  }
  .load {
    width: 4rem;
    height: 4rem;
  }
  .loading {
    stroke: rgb(112, 117, 117);
    stroke-width: 5;
    fill: none;
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 130, 200;
      stroke-dashoffset: -50;
    }
    100% {
      stroke-dasharray: 130, 200;
      stroke-dashoffset: -188;
    }
  }
  .loading {
      stroke: rgb(112, 117, 117);
      stroke-width: 5;
      fill: none;
      animation: dash 1.5s linear infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .load {
      animation: rotate 2s linear infinite;
  }
</style>