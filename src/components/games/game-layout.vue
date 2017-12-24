<template>
  <div class="home-container">
    <m-header/>
    <router-view/>
  </div>
</template>
<script>

import MHeader from '@/components/basics/home-header'
export default {
  name: "GameLayout",
  components:{
    MHeader
  }
}
</script>
<style lang="scss">
/* game start css */
.game-board {
  width: 996px;
  height: 700px;
  background-color: #fff;
  margin: 40px auto;
  overflow: hidden;
  position: relative;
  font-weight: normal;
  text-align: center;
}
/* game end */
</style>


