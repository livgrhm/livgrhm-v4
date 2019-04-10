import { configure } from '@storybook/vue';

import '../src/styles/global.scss';
import '../src/styles/reset.scss';
import '../src/styles/typography.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
