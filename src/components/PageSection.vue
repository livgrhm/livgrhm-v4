<template>
  <div class="pageSection"><slot /></div>
</template>

<script lang="ts">
export default {
  name: 'PageSection',
};
</script>

<style lang="scss" scoped>
@import '../styles/mixins';
@import '../styles/variables';

.pageSection {
  max-width: 425px;
  margin: 0 auto;
  position: relative;
  padding: $space-48 $screen-phone-gutter * 0.5;

  @include mediaMin(tabletPortrait) {
    width: 72%;
    max-width: $screen-tablet-portrait;
    padding: $space-48 $screen-tablet-portrait-gutter * 0.5;
  }

  @include mediaMin(tabletLandscape) {
    width: 48%;
    max-width: $screen-tablet-landscape;
    padding: $space-48 $screen-tablet-landscape-gutter * 0.5;
  }

  @include mediaMin(smallDesktop) {
    max-width: $screen-small-desktop;
    padding: $space-48 $screen-small-desktop-gutter * 0.5;
  }

  @include mediaMin(largeDesktop) {
    max-width: $screen-large-desktop;
    padding: $space-48 $screen-large-desktop-gutter * 0.5;
  }
}
</style>
