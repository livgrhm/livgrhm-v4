<template>
  <div id="app">
    <page-layout>
      <nav-bar slot="head" />
      <router-view />
      <page-footer slot="bottom" />
    </page-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';
import PageLayout from '@/components/PageLayout.vue';
import PageFooter from '@/components/PageFooter.vue';

export default Vue.extend({
  name: 'App',
  components: { PageLayout, NavBar, PageFooter },
});
</script>

<style lang="scss">
@import './styles/global';
@import './styles/reset';
@import './styles/typography';
</style>
