import { useEffect, useMemo, useGlobals, DecoratorFunction } from '@storybook/addons';

import { clearStyle, addStyle } from './helpers';
import roleBorderCSS from './roleBorderCSS';

export const withGlobals: DecoratorFunction = (StoryFn, context) => {
  const [{ roleVisualization }] = useGlobals();

  const roleBoarderStyle = useMemo(() => {
    const selector = '.sb-show-main';

    return roleBorderCSS(selector);
  }, [context.id]);

  useEffect(() => {
    const selectorId = 'role-visualization-style';

    if (!roleVisualization) {
      clearStyle(selectorId);
      return;
    }

    addStyle(selectorId, roleBoarderStyle);

    return () => {
      clearStyle(selectorId);
    };
  }, [roleVisualization, roleBoarderStyle, context.id]);

  return StoryFn();
};