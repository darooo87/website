<template>
  <Banner />
</template>

<script>
import Banner from "./components/Banner.vue";

export default {
  name: "App",
  components: {
    Banner,
  },
};
</script>

<style>
#app {
  font-family: Consolas,monaco,monospace; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  color: lightgray;
  background-color: black;
  padding: 5px;
}

html,
body {
  height: 100%;
  margin: 0;
}
</style>
