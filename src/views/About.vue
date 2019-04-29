<template>
  <div class="about">
    <div class="left-side-bar"></div>
    <div class="map"></div>
    <div class="right-side-bar">
      <right-side-bar></right-side-bar>
    </div>
  </div>
</template>

<script>
import RightSideBar from "@/components/RightSideBar";
export default {
  components: {
    RightSideBar
  }
};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  height: 100%;
}
.about > div {
  // width: 0;
}
.left-side-bar {
  flex: 1;
  background: #606266;
}
.map {
  flex: 3;
  background: #f56c6c;
}
.right-side-bar {
  flex: 2;
  background: #909399;
}
</style>