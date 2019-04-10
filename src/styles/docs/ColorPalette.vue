<template>
  <div class="container">
    <div>
      <div class="colorBox pink-0">
        <span>pink-0 (#D35269)</span>
      </div>
      <div class="colorBox pink-10">
        <span>pink-10 (#D35269 lighten 10%)</span>
      </div>
      <div class="colorBox pink-20">
        <span>pink-20 (#D35269 lighten 20%)</span>
      </div>
      <div class="colorBox pink-30">
        <span>pink-30 (#D35269 lighten 30%)</span>
      </div>
    </div>
    <div>
      <div class="colorBox charcoal-0">
        <span>charcoal-0 (#373E40)</span>
      </div>
      <div class="colorBox charcoal-10">
        <span>charcoal-10 (#373E40 lighten 10%)</span>
      </div>
      <div class="colorBox charcoal-20">
        <span>charcoal-20 (#373E40 lighten 20%)</span>
      </div>
      <div class="colorBox charcoal-30">
        <span>charcoal-30 (#373E40 lighten 30%)</span>
      </div>
    </div>
    <div>
      <div class="colorBox teal-0">
        <span>teal-0 (#488286)</span>
      </div>
      <div class="colorBox teal-10">
        <span>teal-10 (#488286 lighten 10%)</span>
      </div>
      <div class="colorBox teal-20">
        <span>teal-20 (#488286 lighten 20%)</span>
      </div>
      <div class="colorBox teal-30">
        <span>teal-30 (#488286 lighten 30%)</span>
      </div>
    </div>
    <div>
      <div class="colorBox duckegg-0">
        <span>duckegg-0 (#B7D5D4)</span>
      </div>
      <div class="colorBox duckegg-10">
        <span>duckegg-10 (#B7D5D4 lighten 10%)</span>
      </div>
      <div class="colorBox duckegg-20">
        <span>duckegg-20 (#B7D5D4 lighten 20%)</span>
      </div>
      <div class="colorBox duckegg-30">
        <span>duckegg-30 (#B7D5D4 lighten 30%)</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ColorPalette',
});
</script>

<style scoped lang="scss">
@import '../variables';

.container {
  display: grid;
  grid-template-columns: $space-84 * 4 $space-84 * 4;
  justify-items: start;
  grid-gap: $space-16;
  padding: $space-16;
}

.colorBox {
  width: $space-84 * 4;
  text-align: center;
}

.pink-0 {
  background-color: palette-color-level('pink', 0);
  color: white;
}

.pink-10 {
  background-color: palette-color-level('pink', 10);
  color: white;
}

.pink-20 {
  background-color: palette-color-level('pink', 20);
  color: white;
}

.pink-30 {
  background-color: palette-color-level('pink', 30);
  color: white;
}

.charcoal-0 {
  background-color: palette-color-level('charcoal', 0);
  color: white;
}

.charcoal-10 {
  background-color: palette-color-level('charcoal', 10);
  color: white;
}

.charcoal-20 {
  background-color: palette-color-level('charcoal', 20);
  color: white;
}

.charcoal-30 {
  background-color: palette-color-level('charcoal', 30);
  color: white;
}

.teal-0 {
  background-color: palette-color-level('teal', 0);
  color: white;
}

.teal-10 {
  background-color: palette-color-level('teal', 10);
  color: white;
}

.teal-20 {
  background-color: palette-color-level('teal', 20);
  color: white;
}

.teal-30 {
  background-color: palette-color-level('teal', 30);
  color: white;
}

.duckegg-0 {
  background-color: palette-color-level('duckegg', 0);
  color: palette-color-level('charcoal', 0);
}

.duckegg-10 {
  background-color: palette-color-level('duckegg', 10);
  color: palette-color-level('charcoal', 0);
}

.duckegg-20 {
  background-color: palette-color-level('duckegg', 20);
  color: palette-color-level('charcoal', 0);
}

.duckegg-30 {
  background-color: palette-color-level('duckegg', 30);
  color: palette-color-level('charcoal', 0);
}
</style>
