import { addons, types } from '@storybook/addons';

import { Tool } from '../components/Tool';
import { ADDON_ID, TYPE_ID } from '../constants';

addons.register(ADDON_ID, () => {
  addons.add(TYPE_ID.tool, {
    type: types.TOOL,
    title: 'Visualize role to the preview',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story)$/)),
    render: Tool,
  });
});
