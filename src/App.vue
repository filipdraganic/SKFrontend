<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from "@/components/Login";
import Home from "@/components/Home";
export default {
  name: 'app',
  created:{


  },
  components: {
    Home,
    HelloWorld,
    Login
  }
}


</script>





<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
