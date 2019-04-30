<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <button @click="handleChangeData">get</button>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleChangeData() {
      this.$store.commit("init");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  box-sizing: border-box;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
* {
  margin: 0;
  padding: 0;
}
.content {
  height: calc(100% - 78px);
}
html,
body {
  height: 100%;
}
body{
  overflow: hidden;
}
</style>
