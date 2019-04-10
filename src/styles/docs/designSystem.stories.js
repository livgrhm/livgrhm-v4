import { storiesOf } from '@storybook/vue';

import Typography from './Typography';

storiesOf('Design System', module).add('Typography', () => ({
  components: { Typography },
  template: '<typography />',
}));
