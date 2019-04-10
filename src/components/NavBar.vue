<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NavBar',
});
</script>

<style scoped lang="scss">
@import '../styles/variables';

#nav {
  display: flex;
  justify-content: flex-end;
  padding: $space-32;

  a {
    font-weight: bold;
    padding: 0 $space-16;

    &.router-link-exact-active {
      color: $brand-default;
      cursor: default;
    }
  }
}
</style>
