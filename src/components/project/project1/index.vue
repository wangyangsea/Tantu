<template>
  <div class="index-container">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "project1",
    created(){
      sessionStorage.setItem('project_num_1','60');
      sessionStorage.setItem('_countdown','1200');
    }
  }
</script>

<style scoped>
  .index-container{
    position: relative;
    width: 100%;
  }

</style>
