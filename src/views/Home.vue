<template>
  <div class="home">
    <page-section>
      <HelloWorld msg="Olivia Graham Senior Engineer Berlin, DE" />
    </page-section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import PageSection from '@/components/PageSection.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
    PageSection,
  },
});
</script>

<style lang="scss" scoped>
@import '../styles/brand';

.home {
  padding-top: -$space-48;
  /*background: url('../assets/landing-photo-experiment-1.jpg');
  background-size: cover;
  background-position-x: -40rem;
  background-repeat: no-repeat;

  > div {
    margin: 0 0 0 auto;
  }*/
}
</style>
