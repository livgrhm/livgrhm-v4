import { storiesOf } from '@storybook/vue';

import Typography   from './Typography';
import ColorPalette from './ColorPalette';

storiesOf('Design System', module).add('Typography', () => ({
  components: { Typography },
  template: '<typography />',
}));

storiesOf('Design System', module).add('Color Palette', () => ({
    components: { ColorPalette },
    template: '<color-palette />',
}));
