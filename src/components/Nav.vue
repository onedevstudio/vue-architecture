<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/users">Users</router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 2.142857rem /* 30/14 */;
}

a {
  font-weight: bold;
  color: $primary-color;

  &.router-link-exact-active {
    color: $secondary-color;
  }
}
</style>
