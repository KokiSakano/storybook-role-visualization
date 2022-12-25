import React, { useCallback } from 'react';
import { useGlobals } from '@storybook/api';
import { Icons, IconButton } from '@storybook/components';
import { TYPE_ID } from './../constants';

export const Tool = () => {
  const [{ roleVisualization }, updateGlobals] = useGlobals();

  const toggleMyTool = useCallback(
    () =>
      updateGlobals({
        roleVisualization: !roleVisualization,
      }),
    [roleVisualization]
  );

  return (
    <IconButton
      key={TYPE_ID.tool}
      active={roleVisualization}
      title="Visualize role to the preview"
      onClick={toggleMyTool}
    >
      <Icons icon="switchalt" />
    </IconButton>
  );
};
