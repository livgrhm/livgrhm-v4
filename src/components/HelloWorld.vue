<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Olivia is a senior software engineer originally from London, UK. She now lives in Berlin and works on building new
      companies with <a href="https://www.bcgdv.com/" target="_blank">BCG Digital Ventures</a>.
    </p>
    <br />
    <ul>
      <li>Experienced in full-stack web development, exploring infrastructure</li>
      <li>Current stack: VueJS/React + SpringBoot (Java)</li>
      <li>
        Interested in exploring the intersection between design & engineering, deepening collaboration & building design
        systems
      </li>
    </ul>
    <div>
      <a class="buttonLink" href="https://www.linkedin.com/in/oliviagraham/" target="_blank"><button>See what I'm up to</button></a>
      <a class="buttonLink" href="mailto:hello@livgrhm.com"><button>Get in contact</button></a>
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

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.hello {
  a.buttonLink {
    display: inline-block;
    margin: $space-32 $space-16 0 0;

    button {
      outline: none;
      border: none;
      position: relative;
      cursor: pointer;
      padding: $space-8 $space-20;
      margin: $space-4;
      background: palette-color-level('teal', 10);
      color: palette-color-level('duckegg', 30);
      font-size: $font-size;
      font-weight: $font-weight-bold;
      border-radius: $brand-border-radius;
      box-shadow: 0 $space-4 palette-color-level('teal', 0);
    }

    &:hover button {
      box-shadow: 0 0 palette-color-level('teal', 0);
      top: $space-4;
    }

    @include mediaMax(tabletPortrait) {
      margin: $space-24 0 0;
      display: block;
      text-align: center;
    }
  }
}
</style>
