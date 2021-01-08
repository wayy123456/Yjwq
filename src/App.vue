<template>
  <div class="main">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>

    <Bottom-bar></Bottom-bar>
  </div>
  <router-view/>
</template>
<script>
  import BottomBar from '@/components/BottomBar'
  export default {
  name: 'main',
  components: {
    BottomBar
  },
  created() {

  },
  mounted() {

  },
  methods:{
    getInfo() {

    }
  }
}
</script>
<style lang="less" scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  height: 100vh;
}
</style>
