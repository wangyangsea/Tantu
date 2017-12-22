<template>
  <div class="header-container">
    <div class="testing-header-fixed">
      <router-link to="" tag="a"><img class="logo" src="../../assets/images/module/logo.png" alt=""></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "testing-header",

  }
</script>

<style scoped>
  .header-container{
    height: 100px;
    background: #fff;
  }
  .testing-header-fixed{
    position: fixed;
    top: 0;
    width: 1440px;
    height: 100px;
    display: flex;
    align-items: center;
  }
  .testing-header-fixed .logo{
    width: 220px;
    height: 100px;
  }
</style>
