<template>
  <footer class="pageFooter">
    <page-section>
      <h2>About Olivia</h2>
      <p>
        Olivia is a senior software engineer originally from London, UK. She now lives in Berlin and works on building new
        companies with BCG Digital Ventures. Some other nice stuff about here cool yeah.
      </p>
      <ul>
        <li>Twitter</li>
        <li>LinkedIn</li>
        <li>Medium</li>
        <li>Instagram</li>
        <li>Email</li>
      </ul>
    </page-section>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import PageSection from './PageSection.vue';

export default Vue.extend({
  name: 'PageFooter',
  components: { PageSection },
});
</script>

<style scoped lang="scss">
@import '../styles/variables';

.pageFooter {
  background-color: $brand-bg-color-variant;

  h2 {
    color: palette-color-level('teal', 0);
  }
}
</style>
