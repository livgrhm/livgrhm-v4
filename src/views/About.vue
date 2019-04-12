<template>
  <page-section class="about">
    <h1>This is an about page</h1>
  </page-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PageSection from '@/components/PageSection.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'about',
  components: {
    PageSection,
  },
});
</script>

<style lang="scss" scoped>
@import '../styles/brand';

.about {
  margin-top: $space-32;
}
</style>
