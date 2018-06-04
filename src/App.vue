<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  height: 100%;
}
body {
  min-height: 100%;
  display: flex;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex: 1;
}
button{
  height: 40px;
  background: linear-gradient(90deg,#49bb50,#49bb50 31%,#49bb50);
  width: 80%;
}
</style>
