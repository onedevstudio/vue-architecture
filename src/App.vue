<template>
  <div class="app">
    <app-nav />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    AppNav: () => import('@/components/Nav.vue'),
  },
};
</script>

<style lang="scss">
:root, body {
  font-family: 'Sarabun', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
