<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <a href="">exercitation ullamco</a> laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
    <br/>
    <ul>
      <li>Currently based in Berlin, DE</li>
      <li>Senior Engineer @ BCG Digital Ventures</li>
      <li>Experienced in full-stack web development, exploring infrastructure</li>
      <li>Current stack: VueJS/React + SpringBoot (Java)</li>
      <li>Currently exploring the intersection between design & engineering, deepening collaboration & building design systems</li>
    </ul>
    <div>
      <button>Get in Contact</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
@import '../styles/variables';

.left {
  text-align: left;
  width: 40%;
}
</style>
