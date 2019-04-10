<template>
  <div class="pageLayout">
    <div ref="head" v-if="$slots.head">
      <slot name="head" />
    </div>

    <div class="content" v-if="$slots.default">
      <slot />
    </div>

    <div ref="bottom" v-if="$slots.bottom">
      <slot name="bottom" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PageLayout',
});
</script>

<style scoped lang="scss">
@import '../styles/variables';

.pageLayout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

.content {
  position: relative;
  flex: 1;
}
</style>
