<template>
  <footer class="pageFooter">
    <page-section>
      <div class="about">
        <img src="../assets/liv.png" alt="" title="Olivia Graham" />
        <div>
          <h2>About Olivia</h2>
          <p>
            Olivia is a senior software engineer originally from London, UK. She now lives in Berlin and works on
            building new companies with <a href="https://www.bcgdv.com/" target="_blank">BCG Digital Ventures</a>.
          </p>
          <ul>
            <li>
              <a href="https://twitter.com/olivzz" target="_blank" title="Twitter">
                <icon-twitter class="socialLink" />
                <span class="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/oliviagraham/" target="_blank" title="LinkedIn">
                <icon-linked-in class="socialLink" />
                <span class="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@livgrhm" target="_blank" title="Medium">
                <icon-medium class="socialLink" />
                <span class="sr-only">Medium</span>
              </a>
            </li>
            <!--<li>
          <a href="https://www.instagram.com/oliviarosegraham/" target="_blank" title="Instagram">
            <icon-instagram class="socialLink" />
            <span class="sr-only">Instagram</span>
          </a>
        </li>-->
            <li>
              <a href="mailto:hello@livgrhm.com" title="Email">
                <icon-email class="socialLink" />
                <span class="sr-only">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <small>Made with love in Berlin 🇩🇪</small>
      </div>
    </page-section>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import PageSection from './PageSection.vue';
import IconTwitter from '@/components/icons/IconTwitter.vue';
import IconMedium from '@/components/icons/IconMedium.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';
import IconEmail from '@/components/icons/IconEmail.vue';

export default Vue.extend({
  name: 'PageFooter',
  components: { PageSection, IconTwitter, IconMedium, IconInstagram, IconLinkedIn, IconEmail },
});
</script>

<style scoped lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.pageFooter {
  // TODO: change link color based on the background using 'inverse'
  background-color: $brand-bg-color-variant;

  h2 {
    color: palette-color-level('teal', 0);
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: $space-32;

    li {
      display: inline-block;
      padding-right: $space-52;

      &:last-of-type {
        padding-right: 0;
      }
    }
  }
}

.about {
  display: flex;
  flex-direction: row-reverse;

  img {
    width: 16.6rem;
    height: 16.6rem;
    margin-left: $space-16;
    margin-top: $space-16;
  }

  @include mediaMax(tabletPortrait) {
    flex-direction: column;

    img {
      margin: 0 auto $space-48 auto;
    }
  }
}

.socialLink {
  color: $brand-secondary;
  width: $space-24;
  height: $space-24;
  transition: color 0.25s ease-in;

  &:hover {
    color: palette-color-level('teal', 10);
  }
}

.bottom {
  margin-top: $space-52;
  text-align: right;
}
</style>
