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
  font-family: $font-family-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-color;
}
</style>
