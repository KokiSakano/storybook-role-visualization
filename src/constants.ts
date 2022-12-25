import { types } from "@storybook/addons";

export const ADDON_ID = 'role-visualization-addon-id' as const satisfies string;

export const TYPE_ID = {
  [types.TOOL]: `${ADDON_ID}_tool`,
} as const satisfies { [types.TOOL]: string };
