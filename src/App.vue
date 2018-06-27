<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

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
  padding: 10px;
}
button{
  height: 40px;
  /* background: linear-gradient(90deg,#49bb50,#49bb50 31%,#49bb50); */
  background-color: palegreen;
}
button:focus{
  outline: none;
}

.container {
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

form {
  padding: 20px;
}

.form-field {
  display: flex;
  flex-direction: column;

  height: 90px;
}
.form-field .form-label {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 300px;
}

input {
  height: 30px;
  min-width: 125px;
  border: 1px solid #eee;
  border-left: 3px solid;
  border-radius: 5px;
  transition: border-color 0.5s ease-out;
}

input.input.danger {
  border-left-color: salmon;
}

input.input {
  border-left-color: #eee;
}

input:focus {
  outline: none;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}
.error-message {
  color: salmon;
  text-align: left;
}
</style>
